/* dc-lite.js — a small renderer for the canvas page templates, so the site runs without the Design editor.
 *
 * It understands the subset the page uses:
 *   {{a.b.c}}  in text and attributes (a value that is exactly one {{…}} keeps its type: functions become
 *              event handlers, false/null removes the attribute)
 *   <sc-for list="{{…}}" as="x">   repeat the children for each item
 *   <sc-if value="{{…}}">          keep the children when the value is truthy
 *   <dc-slot name="…">             a box another component renders into (display: contents)
 *   onClick, onChange, onPointerDown … (React-style names; onChange on an <input> listens to "input")
 * and a DCLogic base class with this.state, setState, componentDidMount, componentWillUnmount.
 *
 * Templates arrive as JSON trees made by build_site.py: [tag, {attrs}, [children]] or a text string.
 */
(function () {
  'use strict';
  var SVGNS = 'http://www.w3.org/2000/svg';

  function DCLogic(props) { this.props = props || {}; this.state = {}; }
  DCLogic.prototype.setState = function (u) {
    var p = typeof u === 'function' ? u(this.state, this.props) : u;
    if (!p) return;
    this.state = Object.assign({}, this.state, p);
    if (this.__dc) this.__dc.schedule();
  };
  window.DCLogic = DCLogic;

  var ONE = /^\s*\{\{([^}]+)\}\}\s*$/, ANY = /\{\{([^}]+)\}\}/g;

  function look(path, scope) {
    path = path.trim();
    if (path === 'true') return true;
    if (path === 'false') return false;
    var parts = path.split('.'), v = scope[parts[0]];
    for (var i = 1; i < parts.length; i++) { if (v == null) return undefined; v = v[parts[i]]; }
    return v;
  }
  function interp(s, scope) {
    var m = ONE.exec(s);
    if (m) return look(m[1], scope);
    if (s.indexOf('{{') < 0) return s;
    return s.replace(ANY, function (_, p) { var v = look(p, scope); return v == null ? '' : String(v); });
  }

  // template tree + scope -> virtual nodes
  function build(node, scope, ns, out) {
    if (typeof node === 'string') { var t = interp(node, scope); out.push({ text: t == null ? '' : String(t) }); return; }
    var tag = node[0], attrs = node[1], kids = node[2], i;
    if (tag === 'sc-for') {
      var list = interp(attrs.list || '', scope) || [], as = attrs.as || 'item';
      for (var k = 0; k < list.length; k++) {
        var s = Object.create(scope); s[as] = list[k];
        for (i = 0; i < kids.length; i++) build(kids[i], s, ns, out);
      }
      return;
    }
    if (tag === 'sc-if') {
      if (interp(attrs.value || '', scope)) for (i = 0; i < kids.length; i++) build(kids[i], scope, ns, out);
      return;
    }
    if (tag === 'dc-slot') { out.push({ slot: attrs.name }); return; }
    if (tag === 'svg') ns = SVGNS;
    var a = {}, ev = {};
    for (var name in attrs) {
      if (name.indexOf('hint-') === 0) continue;
      var v = interp(attrs[name], scope);
      if (/^on[a-z]/.test(name)) { if (typeof v === 'function') ev[name] = v; continue; }
      a[name] = v;
    }
    var ch = [];
    for (i = 0; i < kids.length; i++) build(kids[i], scope, tag === 'foreignObject' ? null : ns, ch);
    out.push({ tag: tag, ns: ns, attrs: a, ev: ev, children: ch });
  }

  // React-style style objects: { left: '3%', zIndex: 2, '--z': 1.5 } -> "left: 3%; z-index: 2; --z: 1.5"
  var UNITLESS = { opacity: 1, zIndex: 1, flex: 1, flexGrow: 1, flexShrink: 1, fontWeight: 1, lineHeight: 1, order: 1, zoom: 1 };
  function styleText(o) {
    var out = [];
    for (var k in o) {
      var val = o[k];
      if (val == null || val === false || val === '') continue;
      var prop = k.indexOf('--') === 0 ? k : k.replace(/[A-Z]/g, function (c) { return '-' + c.toLowerCase(); });
      if (typeof val === 'number' && k.indexOf('--') !== 0 && !UNITLESS[k] && val !== 0) val = val + 'px';
      out.push(prop + ': ' + val);
    }
    return out.join('; ');
  }

  function evType(name, el) {
    if (name === 'ondoubleclick') return 'dblclick';
    if (name === 'onchange') return (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') ? 'input' : 'change';
    return name.slice(2);
  }
  function setAttrs(el, old, v) {
    var n;
    for (n in old.attrs) if (!(n in v.attrs)) el.removeAttribute(n);
    for (n in v.attrs) {
      var x = v.attrs[n];
      if (n === 'value' || n === 'checked') continue;           // set as properties after the children
      if (n === 'style' && x && typeof x === 'object') x = styleText(x);
      if (old.attrs && old.attrs[n] === x && el.hasAttribute(n) === !(x === false || x == null)) continue;
      if (x === false || x == null) el.removeAttribute(n);
      else if (x === true) el.setAttribute(n, /^(aria|data)-/.test(n) ? 'true' : '');
      else el.setAttribute(n, String(x));
    }
    el.__h = el.__h || {};
    for (n in old.ev || {}) if (!(n in v.ev)) el.__h[evType(n, el)] = null;
    for (n in v.ev) {
      var type = evType(n, el);
      if (!(type in el.__h)) el.addEventListener(type, (function (t) { return function (e) { var f = el.__h[t]; if (f) f(e); }; })(type));
      el.__h[type] = v.ev[n];
    }
  }
  function setProps(el, v) {
    if ('value' in v.attrs) { var s = v.attrs.value == null ? '' : String(v.attrs.value); if (el.value !== s) el.value = s; el.setAttribute('value', s); }
    if ('checked' in v.attrs) el.checked = !!v.attrs.checked;
  }

  function create(v, slots) {
    if (v.text !== undefined) return document.createTextNode(v.text);
    if (v.slot) return slots[v.slot];
    var el = v.ns ? document.createElementNS(v.ns, v.tag) : document.createElement(v.tag);
    setAttrs(el, { attrs: {}, ev: {} }, v);
    for (var i = 0; i < v.children.length; i++) el.appendChild(create(v.children[i], slots));
    setProps(el, v);
    return el;
  }
  function patch(parent, el, old, v, slots) {
    if (old.text !== undefined && v.text !== undefined) { if (old.text !== v.text) el.nodeValue = v.text; return; }
    if (old.slot && old.slot === v.slot) return;
    if (old.text !== undefined || v.text !== undefined || old.slot || v.slot || old.tag !== v.tag || old.ns !== v.ns) {
      parent.replaceChild(create(v, slots), el); return;
    }
    setAttrs(el, old, v);
    patchChildren(el, old.children, v.children, slots);
    setProps(el, v);
  }
  function patchChildren(el, oldC, newC, slots) {
    var nodes = Array.prototype.slice.call(el.childNodes), i;
    for (i = 0; i < newC.length; i++) {
      if (i < oldC.length) patch(el, nodes[i], oldC[i], newC[i], slots);
      else el.appendChild(create(newC[i], slots));
    }
    for (i = nodes.length - 1; i >= newC.length; i--) el.removeChild(nodes[i]);
  }

  // mount one component: root element, its template (a list of nodes), its class, the slot boxes it holds
  window.dcMount = function (root, tree, Comp, slots) {
    slots = slots || {};
    var inst = new Comp({}), old = [], pending = false;
    if (!inst.state) inst.state = {};
    function render() {
      pending = false;
      var vals = inst.renderVals() || {}, out = [];
      for (var i = 0; i < tree.length; i++) build(tree[i], vals, null, out);
      patchChildren(root, old, out, slots);
      old = out;
    }
    inst.__dc = { schedule: function () { if (!pending) { pending = true; Promise.resolve().then(render); } } };
    render();
    if (inst.componentDidMount) inst.componentDidMount();
    return inst;
  };
})();
