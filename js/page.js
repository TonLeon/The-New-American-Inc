// built by export/build_site.py from the canvas artboards; do not edit by hand
window.__dc = {};
window.__dc["main"] = (function () {

// map-points.json plus by_issue: ads naming each location in each issue
var FP_DATA = 'data/6e471192679146f01d55494609f7fbf8.json';
// OpenStreetMap roads projected for base-map.svg: { major, minor } as SVG path data
var FP_STREETS = 'data/c00eb50be171d69c5532ceeac4bedba3.json';
var FP_STREETS_Z = 2.5;
// unique ads (sheet «Unique ads») by location: { ads: { LOC-…: [{ id, adv, type, text, issues }] } }
var FP_ADS = 'data/3aa1354aec5139758a921a74710f8227.json';
// Section V shelves: { shelves: [{ key, name, ids }], ads: { AD-…: { adv, issues, text } } }, from analysis/sections45.py
var FP_SHELF_KEYS = ['new', 'classics', 'politics', 'jewish', 'home', 'practical', 'humour'];
var FP_SHELVES = 'data/6217468c8d0981c84dbe57826ba0b119.json';
var FP_OFFICE = 'LOC-001'; // 1 Union Square West: the newspaper's own address, marked in red
// from figures.json: themes[].locations / rows; «Все» = nyc_locations / nyc_rows. key = theme name in the data
var FP_THEMES = [
  { key: 'Все', name: 'All', loc: 230, ads: 1154 },
  { key: 'Врачи', name: 'Doctors', loc: 25, ads: 214 },
  { key: 'Мебель', name: 'Furniture', loc: 24, ads: 132 },
  { key: 'Учёба', name: 'Education', loc: 27, ads: 116 },
  { key: 'Книги', name: 'Books', loc: 14, ads: 77 },
  { key: 'Еда', name: 'Food', loc: 23, ads: 90 }
];
// categories (Type) the theme tabs already cover; the rest are offered under «Other»
var FP_TAB_TYPES = ['Doctor', 'Furniture', 'Education', 'Books', 'Periodicals', 'Food', 'Restaurant'];
var FP_PINS = { 1: 'LOC-066', 2: 'LOC-080', 3: 'LOC-001', 4: 'LOC-002' };
var FP_FIRST = 1, FP_LAST = 46;
var FP_STEP_MS = 700;
var FP_ZOOM_MAX = 6, FP_ZOOM_STEP = 1.6;
var FP_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Section II data, from analysis/ad_stats.py (same workbook, same units)
// [issue, ads printed, of them new texts, date]
var FP_S2_ISSUES = [[1, 28, 28, "1980-02-14"], [2, 38, 14, "1980-02-28"], [3, 48, 15, "1980-03-06"], [4, 47, 18, "1980-03-13"], [5, 36, 9, "1980-03-20"], [6, 36, 9, "1980-03-27"], [7, 63, 32, "1980-04-03"], [8, 49, 10, "1980-04-10"], [9, 46, 9, "1980-04-17"], [10, 49, 12, "1980-04-24"], [11, 52, 12, "1980-05-01"], [12, 35, 6, "1980-05-08"], [13, 27, 2, "1980-05-15"], [14, 25, 7, "1980-05-22"], [15, 12, 5, "1980-05-29"], [16, 23, 2, "1980-06-04"], [17, 26, 6, "1980-06-10"], [18, 20, 1, "1980-06-16"], [19, 23, 3, "1980-06-22"], [24, 29, 15, "1980-08-01"], [25, 28, 5, "1980-08-05"], [26, 31, 4, "1980-08-11"], [27, 31, 8, "1980-08-17"], [28, 33, 5, "1980-08-26"], [29, 42, 12, "1980-09-02"], [30, 12, 2, "1980-09-08"], [31, 41, 11, "1980-09-14"], [32, 57, 15, "1980-09-20"], [33, 47, 6, "1980-09-26"], [34, 45, 11, "1980-10-02"], [35, 42, 3, "1980-10-08"], [36, 41, 8, "1980-10-14"], [37, 38, 6, "1980-10-28"], [38, 43, 10, "1980-11-04"], [39, 42, 11, "1980-11-11"], [40, 36, 6, "1980-11-18"], [41, 33, 7, "1980-11-25"], [42, 42, 13, "1980-12-02"], [43, 39, 11, "1980-12-09"], [44, 49, 9, "1980-12-16"], [45, 45, 14, "1980-12-23"], [46, 48, 14, "1980-12-30"]];
// [type, ads printed, texts, advertisers]
var FP_S2_CATS = [["Doctor", 227, 31, 27], ["Education", 142, 41, 36], ["Furniture", 140, 28, 22], ["Books", 130, 46, 24], ["Lawyer", 115, 11, 9], ["Periodicals", 76, 21, 6], ["Food", 75, 23, 18], ["Travel", 70, 12, 6], ["Clothes", 58, 18, 13], ["Real Estate", 53, 10, 8], ["Maintenance", 51, 9, 9], ["Funeral", 42, 3, 3], ["Restaurant", 36, 11, 10], ["Employment", 31, 14, 14], ["Event", 26, 17, 11], ["Beauty Salon", 22, 3, 2], ["Fortunetelling", 22, 3, 2], ["Electronics", 21, 7, 6], ["Insurance", 20, 8, 7], ["Cars", 20, 7, 7], ["Antiques", 20, 6, 5], ["Religion", 18, 3, 3], ["Jewellery", 17, 6, 5], ["Wanted", 17, 5, 4], ["Cinema", 14, 12, 5], ["Gift", 14, 3, 3], ["Household goods", 13, 2, 2], ["Dating Agency", 11, 4, 4], ["Concert", 10, 9, 8], ["Charity", 10, 6, 3], ["Translator", 10, 2, 2], ["Music", 9, 3, 3], ["Bank", 8, 3, 3], ["Tax", 7, 4, 3], ["Photography", 6, 1, 1], ["Theater", 5, 4, 2], ["Personal", 3, 3, 3], ["Rent", 3, 2, 2], ["Art", 1, 1, 1], ["Club", 1, 1, 1], ["Materials", 1, 1, 1], ["Parade", 1, 1, 1], ["Pharmacy", 1, 1, 1]];
// the advertisers with the most ads, the paper's own self-advertising left out: [name, type, ads, issues]
var FP_S2_TOP = [["ARTHUR KESSLER REAL ESTATE", "Real Estate", 37, [4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 16, 17, 18, 19, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]], ["JETWAYS", "Travel", 35, [3, 4, 5, 6, 9, 10, 12, 13, 14, 16, 17, 18, 19, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]], ["KIRSCHENBAUM BROS. INC.", "Funeral", 35, [4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46]], ["L. KRAUSE", "Lawyer", 27, [15, 16, 17, 18, 19, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]], ["Elegante IMPORT & MANUFACTURING CO.", "Furniture", 26, [6, 7, 8, 9, 10, 11, 13, 14, 15, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]], ["10-10 FURNITURE CLUB", "Furniture", 24, [15, 16, 17, 18, 19, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]], ["LEE’S FURNITURE", "Furniture", 22, [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 24, 25, 26, 27, 28, 29, 31]], ["ЗУБОВРАЧЕБНАЯ КЛИНИКА ВО ФЛАШИНГЕ", "Doctor", 22, [25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]], ["LEBENKOFF & COVEN", "Lawyer", 21, [24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46]], ["Mark Landesman (attorney)", "Lawyer", 21, [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 24, 25, 26, 27, 28, 29, 31, 32, 33]], ["Mrs. Doris (fortune-teller)", "Fortunetelling", 21, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 24, 25]], ["RUSSIAN FAMILY DENTAL CENTER", "Doctor", 21, [7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 35, 36, 37, 38, 39, 40, 41, 42, 44]]];
var FP_S2_CAT_N = 11;
// pages per issue, counted by the researcher (2026-11-10)
var FP_S2_PAGES = {};
[[1, 12, 24], [13, 13, 16], [14, 14, 32], [15, 15, 16], [16, 25, 32], [26, 26, 28], [27, 29, 32], [30, 30, 16], [31, 41, 32], [42, 46, 40]]
  .forEach(function (r) { for (var n = r[0]; n <= r[1]; n++) FP_S2_PAGES[n] = r[2]; });
var FP_S2_PAGES_MAX = 40;
var FP_S2_MEASURES = [
  { key: 'occ', col: 1, name: 'Ads printed', sub: 'Ads printed, by category.\n\n' },
  { key: 'adv', col: 3, name: 'Advertisers', sub: 'Advertisers, by category. Two advertisers appear under two categories, so the bars add up to 306, not 304.' }
];
// English names where the data's own reads oddly on the page
var FP_S2_NAMES = { '«Новый Американец» (newspaper)': 'Novyi Amerikanets (its own ads)', 'Fortunetelling': 'Fortune-telling', 'Mrs. Doris (fortune-teller)': 'Mrs. Doris, fortune-teller' };

function fpNum(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
function fpCount(n, one, many) { return fpNum(n) + ' ' + (n === 1 ? one : many); }
function fpAds(n) { return fpCount(n, 'ad', 'ads'); }
function fpAddrs(n) { return fpCount(n, 'address', 'addresses'); }
function fpDate(iso) { var p = iso.split('-'); return Number(p[2]) + ' ' + FP_MONTHS[Number(p[1]) - 1] + ' ' + p[0]; }
function fpClamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
// an edited ad text as lines: "# " a heading line, "## " a set-off line, a blank line a gap; **bold** and *italic* inside.
// cut: keep about that many characters, ending the last line at a word with " …"
// inline marks: **bold**, *italic*
function fpAdInline(l) {
  var parts = [];
  l.split(/(\*\*[^*]+\*\*|\*[^*\s][^*]*\*)/).forEach(function (t) {
    if (!t) return;
    if (/^\*\*[^*]+\*\*$/.test(t)) parts.push({ t: t.slice(2, -2), cls: 'fp-ad__b', sub: [] });
    else if (/^\*[^*]+\*$/.test(t)) parts.push({ t: t.slice(1, -1), cls: 'fp-ad__i', sub: [] });
    else parts.push({ t: t.replace(/\*\*/g, ''), cls: '', sub: [] });
  });
  return parts;
}

// price lines, as in proofreading: "item … price" with a digit in the price
var FP_PRICE = /^(.*\S)\s+…\s+(\S.{0,30})$/;

function fpAdLines(text, cut) {
  var out = [], left = cut || Infinity;
  var lines = text.split('\n');
  for (var i = 0; i < lines.length && left > 0; i++) {
    var l = lines[i], cls = 'fp-ad__p';
    if (!l.trim()) { if (out.length && out[out.length - 1].cls !== 'fp-ad__gap') out.push({ cls: 'fp-ad__gap', parts: [] }); continue; }
    if (/^## /.test(l)) { cls = 'fp-ad__h2'; l = l.slice(3); } else if (/^# /.test(l)) { cls = 'fp-ad__h1'; l = l.slice(2); }
    if (l.length > left) { l = l.slice(0, left).replace(/\s+\S*$/, '') + ' …'; left = 0; } else left -= l.length;
    var p = cls === 'fp-ad__p' && l.match(FP_PRICE);
    if (p && /\d/.test(p[2])) {
      out.push({ cls: 'fp-ad__p fp-ad__price', parts: [{ t: '', cls: 'fp-ad__item', sub: fpAdInline(p[1]) },
        { t: '', cls: 'fp-ad__lead', sub: [] }, { t: '', cls: 'fp-ad__cost', sub: fpAdInline(p[2]) }] });
      continue;
    }
    out.push({ cls: cls, parts: fpAdInline(l) });
  }
  if (out.length && out[out.length - 1].cls === 'fp-ad__gap') out.pop();
  return out;
}

class Component extends DCLogic {
  constructor(props) {
    super(props);
    // issue: null = the whole year; otherwise the issue number shown on the map
    // z, tx, ty: map zoom and pan; tx/ty are fractions of the map box (0 … 1 - z)
    this.state = { locs: [], all: [], dates: {}, theme: 'Все', hover: null, sel: null, pin: null, playing: false, issue: null,
      z: 1, tx: 0, ty: 0, dragging: false, streets: { major: '', minor: '' }, ads: {}, adPos: { id: null, i: 0 }, otherOpen: false, tourOpen: null, shelves: null, gallery: null,
      s2issue: null, s2cat: 'occ', accum: true };
  }
  componentDidMount() {
    fetch(FP_DATA).then(function (r) { return r.json(); }).then((d) => {
      var locs = d.locations.filter(function (l) { return l.x >= 0 && l.x <= 600 && l.y >= 0 && l.y <= 616; });
      this.setState({ locs: locs, all: d.locations, dates: d.issue_dates });
    });
    fetch(FP_ADS).then(function (r) { return r.json(); }).then((d) => this.setState({ ads: d.ads }));
    fetch(FP_SHELVES).then(function (r) { return r.json(); }).then((d) => this.setState({ shelves: d }));
    fetch(FP_STREETS).then(function (r) { return r.json(); }).then((d) => this.setState({ streets: { major: d.major, minor: d.minor } }));
    if (typeof window === 'undefined') return;
    // native listeners: a pinch must be able to cancel the page zoom, which React's passive wheel listener cannot
    this.wheelFn = (e) => this.onWheel(e);
    this.gestureFn = (e) => this.onGesture(e);
    window.addEventListener('wheel', this.wheelFn, { passive: false });
    ['gesturestart', 'gesturechange', 'gestureend'].forEach((t) => window.addEventListener(t, this.gestureFn, { passive: false }));
  }
  componentWillUnmount() {
    this.stop();
    if (typeof window === 'undefined' || !this.wheelFn) return;
    window.removeEventListener('wheel', this.wheelFn);
    ['gesturestart', 'gesturechange', 'gestureend'].forEach((t) => window.removeEventListener(t, this.gestureFn));
  }

  has(n) { return !!this.state.dates[n]; }
  inIssue(l, n) { return n === null || !!(l.by_issue && l.by_issue[n]); }
  // on the map at issue n: in that issue, or, when accumulating, in any issue up to it
  onMap(l, n) { return this.state.accum ? n === null || l.first_issue <= n : this.inIssue(l, n); }
  // ads at the address up to and including issue n
  upTo(l, n) {
    var t = 0;
    Object.keys(l.by_issue || {}).forEach(function (k) { if (Number(k) <= n) t += l.by_issue[k]; });
    return t;
  }
  // the nearest existing issue from n, looking in direction dir (+1 / -1) first: skips 20–23
  near(n, dir) {
    for (var i = n; i >= FP_FIRST && i <= FP_LAST; i += dir) if (this.has(i)) return i;
    for (var j = n; j >= FP_FIRST && j <= FP_LAST; j -= dir) if (this.has(j)) return j;
    return null;
  }
  stop() { if (this.timer) { clearInterval(this.timer); this.timer = null; } }
  scrub(v) {
    this.stop();
    var from = this.state.issue === null ? FP_LAST : this.state.issue;
    this.setState({ playing: false, issue: this.near(v, v >= from ? 1 : -1), hover: null });
  }
  showAll() { this.stop(); this.setState({ playing: false, issue: null }); }
  togglePlay() {
    if (this.state.playing) { this.stop(); this.setState({ playing: false }); return; }
    if (!Object.keys(this.state.dates).length) return;
    var cur = this.state.issue;
    // resume from the issue on screen; from the whole year or the last issue, start over
    var start = cur === null || cur >= this.near(FP_LAST, -1) ? this.near(FP_FIRST, 1) : cur;
    this.setState({ playing: true, issue: start, hover: null });
    this.timer = setInterval(() => {
      var i = this.state.issue;
      var next = i === null ? null : this.near(i + 1, 1);
      if (next === null || next <= i) { this.stop(); this.setState({ playing: false }); return; }
      this.setState({ issue: next });
    }, FP_STEP_MS);
  }

  // the view as last set; gestures fire faster than state updates land, so they read this, not this.state
  view() { var s = this.state; return this.v || { z: s.z, tx: s.tx, ty: s.ty }; }
  setView(z, tx, ty) {
    z = fpClamp(z, 1, FP_ZOOM_MAX);
    this.v = { z: z, tx: fpClamp(tx, 1 - z, 0), ty: fpClamp(ty, 1 - z, 0) };
    this.setState(this.v);
  }
  // zoom by factor f keeping the point (px, py) of the map box (fractions) still
  zoomAt(f, px, py) {
    var v = this.view();
    var z = fpClamp(v.z * f, 1, FP_ZOOM_MAX);
    this.setView(z, px - (px - v.tx) / v.z * z, py - (py - v.ty) / v.z * z);
  }
  // keep map point (u, v) (fractions of the map) in the middle of the box
  centerOn(u, v) {
    var z = this.view().z;
    this.setView(z, 0.5 - u * z, 0.5 - v * z);
  }
  // pointers on the map: one drags (when zoomed in), two pinch
  pinchOf() {
    var p = Object.keys(this.pts).map((k) => this.pts[k]);
    return { d: Math.max(1, Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y)), x: (p[0].x + p[1].x) / 2, y: (p[0].y + p[1].y) / 2 };
  }
  dragFrom(x, y) {
    var v = this.view(), r = this.box;
    this.drag = v.z > 1 ? { x: x, y: y, tx: v.tx, ty: v.ty, w: r.width, h: r.height } : null;
  }
  dragStart(e) {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    this.pts = this.pts || {};
    this.pts[e.pointerId] = { x: e.clientX, y: e.clientY };
    this.box = e.currentTarget.getBoundingClientRect();
    var n = Object.keys(this.pts).length;
    if (n === 2) { this.drag = null; this.pinch = this.pinchOf(); this.moved = true; this.setState({ dragging: true, hover: null }); return; }
    if (n > 2) return;
    this.moved = false;
    this.dragFrom(e.clientX, e.clientY);
  }
  dragMove(e) {
    if (!this.pts || !this.pts[e.pointerId]) return;
    this.pts[e.pointerId] = { x: e.clientX, y: e.clientY };
    var r = this.box;
    if (this.pinch) {
      // follow the fingers' midpoint, then scale about it
      var p = this.pinchOf(), v = this.view();
      this.v = { z: v.z, tx: v.tx + (p.x - this.pinch.x) / r.width, ty: v.ty + (p.y - this.pinch.y) / r.height };
      this.zoomAt(p.d / this.pinch.d, (p.x - r.left) / r.width, (p.y - r.top) / r.height);
      this.pinch = p;
      return;
    }
    var d = this.drag;
    if (!d) return;
    var dx = e.clientX - d.x, dy = e.clientY - d.y;
    if (!this.moved && Math.abs(dx) + Math.abs(dy) < 4) return;
    this.moved = true;
    this.setState({ dragging: true, hover: null });
    this.setView(this.view().z, d.tx + dx / d.w, d.ty + dy / d.h);
  }
  dragEnd(e) {
    if (this.pts && e) delete this.pts[e.pointerId];
    var left = this.pts ? Object.keys(this.pts) : [];
    if (this.pinch && left.length < 2) {
      this.pinch = null;
      // one finger still down: carry on as a drag from where it is
      if (left.length === 1) { var p = this.pts[left[0]]; this.dragFrom(p.x, p.y); return; }
    }
    if (left.length) return;
    this.drag = null;
    if (this.state.dragging) this.setState({ dragging: false });
  }
  // trackpad pinch: Chrome and Firefox send ctrl + wheel, Safari sends gesture events.
  // Plain wheel and two-finger scrolling are left to the page.
  boxAt(e) {
    var el = e.target && e.target.closest ? e.target.closest('.fp-sheetmap--zoomable') : null;
    return el && el.getBoundingClientRect();
  }
  onWheel(e) {
    if (!e.ctrlKey || this.gesture) return;
    var r = this.boxAt(e);
    if (!r) return;
    e.preventDefault();
    this.zoomAt(Math.exp(-fpClamp(e.deltaY, -50, 50) * 0.01), (e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height);
  }
  onGesture(e) {
    var r = this.boxAt(e);
    if (!r) return;
    e.preventDefault();
    if (e.type === 'gestureend') { this.gesture = null; return; }
    if (e.type === 'gesturestart') { this.gesture = 1; return; }
    if (this.pinch || !this.gesture) return; // a touch pinch is already handled by the pointers
    var f = e.scale / this.gesture;
    this.gesture = e.scale;
    this.zoomAt(f, (e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height);
  }

  pickPin(n) {
    var id = FP_PINS[n];
    var on = this.state.pin === n;
    var loc = this.state.locs.filter(function (l) { return l.id === id; })[0];
    var patch = { pin: on ? null : n, sel: on ? null : id, hover: null };
    // a pinned ad that did not run in the issue on screen: show the whole year so its mark is visible
    if (!on && loc && !this.inIssue(loc, this.state.issue)) { this.stop(); patch.playing = false; patch.issue = null; }
    this.setState(patch);
    if (!on && loc && this.state.z > 1) this.centerOn(loc.x / 600, loc.y / 616);
    if (!on && typeof window !== 'undefined' && window.innerWidth < 720) {
      var m = document.getElementById('fp-map');
      if (m) m.scrollIntoView({ block: 'start' });
    }
  }

  // a column of the Section II chart: that issue on the map
  openIssue(n) {
    this.stop();
    this.setState({ playing: false, issue: n, hover: null, s2issue: null });
    var m = typeof document !== 'undefined' && document.getElementById('section-3');
    if (m) m.scrollIntoView({ block: 'start' });
  }

  renderVals() {
    var s = this.state;
    // s.theme is a theme key, or 'type:<Type>' for a category chosen under «Other»
    var typeName = s.theme.indexOf('type:') === 0 ? s.theme.slice(5) : null;
    var all = s.theme === 'Все';
    var cur = s.issue;
    var pinOf = {};
    Object.keys(FP_PINS).forEach(function (k) { pinOf[FP_PINS[k]] = Number(k); });
    var themed = function (l) { return all || (typeName ? l.types.indexOf(typeName) >= 0 : l.themes.indexOf(s.theme) >= 0); };
    var theme = FP_THEMES.filter(function (t) { return t.key === s.theme; })[0];
    if (typeName) {
      var tLocs = s.locs.filter(themed);
      theme = { key: s.theme, name: FP_S2_NAMES[typeName] || typeName, loc: tLocs.length,
        ads: tLocs.reduce(function (a, l) { return a + (s.ads[l.id] || []).filter(function (x) { return x.type === typeName; }).reduce(function (b, x) { return b + x.issues.length; }, 0); }, 0) };
    }
    var typeCount = {};
    s.locs.forEach(function (l) { l.types.forEach(function (t) { if (FP_TAB_TYPES.indexOf(t) < 0) typeCount[t] = (typeCount[t] || 0) + 1; }); });
    var other = {
      show: s.otherOpen || !!typeName,
      value: typeName || '',
      opts: Object.keys(typeCount).sort(function (a, b) { return typeCount[b] - typeCount[a] || a.localeCompare(b); })
        .map(function (t) { return { v: t, label: (FP_S2_NAMES[t] || t) + ' · ' + fpAddrs(typeCount[t]) }; }),
      change: (e) => this.setState(e.target.value ? { theme: 'type:' + e.target.value } : { theme: 'Все' })
    };

    var tabs = FP_THEMES.map((t) => ({
      name: t.name,
      selected: t.key === s.theme ? 'true' : 'false',
      pick: () => this.setState({ theme: t.key, otherOpen: false })
    })).concat([{
      name: 'Other',
      selected: typeName || s.otherOpen ? 'true' : 'false',
      pick: () => this.setState({ otherOpen: true })
    }]);

    var dots = s.locs.map((l) => {
      var acc = s.accum && cur !== null;
      var r = 2 + 1.4 * Math.sqrt(acc ? Math.max(1, this.upTo(l, cur)) : l.ads);
      var office = l.id === FP_OFFICE;
      var hidden = !office && !this.onMap(l, cur);
      var on = s.sel === l.id;
      var cls = 'fp-dot' + (office ? ' fp-dot--office' : '') + (l.approximate ? ' fp-dot--approx' : '') + (themed(l) ? '' : ' fp-dot--muted') + (hidden ? ' fp-dot--hidden' : '') + (on ? ' fp-dot--on' : '');
      return {
        cls: cls,
        pos: { left: (l.x / 6) + '%', top: (l.y / 6.16) + '%', width: (2 * r / 6) + '%' },
        label: l.address + ': ' + (cur === null ? fpAds(l.ads) + ' in 1980' : acc ? fpAds(this.upTo(l, cur)) + ' up to № ' + cur : fpAds(l.by_issue[cur] || 0) + ' in № ' + cur),
        pressed: on ? 'true' : 'false',
        click: () => {
          if (this.moved) { this.moved = false; return; } // the end of a drag, not a click
          var off = s.sel === l.id;
          this.setState({ sel: off ? null : l.id, pin: off ? null : (pinOf[l.id] || null) });
        },
        enter: () => { if (!this.drag) this.setState({ hover: l.id }); },
        leave: () => this.setState({ hover: null })
      };
    });

    var byId = function (id) { return s.locs.filter(function (l) { return l.id === id; })[0]; };
    var shown = byId(s.hover || s.sel);
    var co = { show: false };
    if (shown && this.onMap(shown, cur)) {
      // which side to open on depends on where the dot sits in the box, not on the map
      var bx = shown.x / 600 * s.z + s.tx, by = shown.y / 616 * s.z + s.ty;
      var ty = by < 0.2 ? '14px' : (by > 0.76 ? 'calc(-100% - 14px)' : '-50%');
      var tx = bx > 0.5 ? 'calc(-100% - 14px)' : '14px';
      co = {
        show: true,
        // counter-scaled so the callout keeps its size at any zoom
        pos: { left: (shown.x / 6) + '%', top: (shown.y / 6.16) + '%', transformOrigin: '0 0', transform: 'scale(' + (1 / s.z) + ') translate(' + tx + ', ' + ty + ')' },
        addr: shown.address,
        name: shown.advertiser.replace(/ и ещё (\d+)$/, ' and $1 more'),
        meta: cur === null
          ? fpAds(shown.ads) + ' · first in № ' + shown.first_issue
          : s.accum
            ? fpAds(this.upTo(shown, cur)) + ' up to № ' + cur + ' · first in № ' + shown.first_issue
            : fpAds(shown.by_issue[cur]) + ' in № ' + cur + ' · ' + fpAds(shown.ads) + ' in 1980'
      };
    }

    // ticks over the slider: one per issue number, bar height = ads in that issue (all NYC locations)
    var perIssue = {}, peak = 1;
    s.all.forEach(function (l) { Object.keys(l.by_issue || {}).forEach(function (k) { perIssue[k] = (perIssue[k] || 0) + l.by_issue[k]; }); });
    Object.keys(perIssue).forEach(function (k) { peak = Math.max(peak, perIssue[k]); });
    var loaded = Object.keys(s.dates).length > 0;
    var ticks = [];
    for (var n = FP_FIRST; n <= FP_LAST; n++) {
      var at = (n - FP_FIRST) / (FP_LAST - FP_FIRST);
      var missing = loaded && !this.has(n);
      ticks.push({
        cls: 'fp-tick' + (missing ? ' fp-tick--none' : '') + (n === cur ? ' fp-tick--on' : ''),
        pos: { left: 'calc(6px + (100% - 12px) * ' + at + ')', height: missing ? '1px' : (3 + 21 * (perIssue[n] || 0) / peak) + 'px' }
      });
    }

    var inCur = cur === null ? [] : s.locs.filter((l) => this.inIssue(l, cur));
    var adsCur = inCur.reduce(function (a, l) { return a + l.by_issue[cur]; }, 0);
    var themedCur = inCur.filter(themed);
    var themedAds = themedCur.reduce(function (a, l) { return a + l.by_issue[cur]; }, 0);
    var dateCur = cur !== null && s.dates[cur] ? fpDate(s.dates[cur]) : '';

    var time = {
      cls: 'fp-time' + (cur === null ? ' fp-time--all' : ''),
      value: cur === null ? FP_LAST : cur,
      issue: cur === null ? 'All' : '№ ' + cur,
      date: cur === null ? 'Issues 1–46 · 14 February — 30 December 1980' : dateCur,
      valuetext: cur === null ? 'Whole year, issues 1–46' : '№ ' + cur + (dateCur ? ', ' + dateCur : ''),
      all: cur === null ? 'true' : 'false',
      input: (e) => this.scrub(Number(e.target.value)),
      reset: () => this.showAll()
    };

    var nShown = all ? inCur.length : themedCur.length;
    // accumulating: every address that has advertised up to the issue on screen
    var soFar = cur === null ? [] : s.locs.filter((l) => l.first_issue <= cur && themed(l));
    var newHere = soFar.filter(function (l) { return l.first_issue === cur; }).length;
    var adsSoFar = soFar.reduce((a, l) => a + this.upTo(l, cur), 0);
    var panel = cur === null
      ? { kicker: 'The whole of 1980' + (all ? '' : ' · ' + theme.name),
          n: fpNum(theme.loc), unit: (theme.loc === 1 ? 'address' : 'addresses') + ' in New York',
          note: fpNum(theme.ads) + (all ? '' : ' ' + theme.name.toLowerCase()) + ' ads with New York addresses' }
      : s.accum
      ? { kicker: '№ 1–' + cur + (all ? '' : ' · ' + theme.name),
          n: fpNum(soFar.length), unit: (soFar.length === 1 ? 'address' : 'addresses') + ' so far',
          note: fpNum(newHere) + ' new in № ' + cur + ' · ' + fpAds(adsSoFar) + ' up to ' + dateCur }
      : { kicker: 'Issue № ' + cur + (all ? '' : ' · ' + theme.name),
          n: fpNum(nShown), unit: (nShown === 1 ? 'address' : 'addresses') + ' on the map',
          note: all
            ? fpAds(adsCur) + ' at these addresses · ' + dateCur
            : fpNum(themedAds) + ' ' + theme.name.toLowerCase() + ' ' + (themedAds === 1 ? 'ad' : 'ads') + ' · ' + fpAddrs(inCur.length) + ' in the issue overall' };

    // neighbourhoods as the addresses accumulate; bars scaled to the year's end so they grow as the issues turn
    var areaOf = function (l) { return l.neighborhood === 'New York' ? 'Manhattan' : (l.neighborhood || l.borough); };
    var grow = { show: false };
    if (s.accum && cur !== null) {
      var cnt = {}, end = {};
      s.locs.filter(themed).forEach(function (l) { var a = areaOf(l); end[a] = (end[a] || 0) + 1; });
      soFar.forEach(function (l) { var a = areaOf(l); cnt[a] = (cnt[a] || 0) + 1; });
      var top = Object.keys(cnt).sort(function (a, b) { return cnt[b] - cnt[a] || end[b] - end[a]; }).slice(0, 7);
      var scale = Math.max.apply(null, [1].concat(Object.keys(end).map(function (k) { return end[k]; })));
      grow = {
        show: top.length > 0,
        head: 'Neighbourhoods so far',
        rows: top.map(function (a) { return { name: a, n: cnt[a], w: { width: (100 * cnt[a] / scale) + '%' } }; }),
        foot: 'Addresses that had advertised by № ' + cur + ', scaled to the whole year. Manhattan is not yet sorted by neighbourhood.'
      };
    }

    var picked = byId(s.sel);
    var det = { show: false, empty: true };
    if (picked) {
      var nIss = Object.keys(picked.by_issue).length;
      var rows = [
        { k: 'Category', v: picked.types.length ? picked.types.join(', ') : '—' },
        { k: 'In 1980', v: fpAds(picked.ads) },
        { k: 'Issues', v: picked.first_issue === picked.last_issue ? '№ ' + picked.first_issue : '№ ' + picked.first_issue + '–' + picked.last_issue + ' · in ' + fpCount(nIss, 'issue', 'issues') }
      ];
      // the different ads printed at this address; those in the issue on screen first
      var list = (s.ads[picked.id] || []).slice();
      if (cur !== null) list.sort(function (a, b) { return (b.issues.indexOf(cur) >= 0) - (a.issues.indexOf(cur) >= 0); });
      // one ad at a time in a fixed window; the pager steps through the rest
      var at = s.adPos.id === picked.id ? Math.min(s.adPos.i, Math.max(0, list.length - 1)) : 0;
      var go = (d) => this.setState({ adPos: { id: picked.id, i: (at + d + list.length) % list.length } });
      var ad = list.slice(at, at + 1).map(function (a) {
        var now = cur !== null && a.issues.indexOf(cur) >= 0;
        var n = a.issues.length;
        return {
          cls: 'fp-ad' + (now ? ' fp-ad--now' : ''),
          adv: a.adv, type: a.type,
          runs: (now ? 'In № ' + cur + ' · ' : '') + (n === 1 ? '№ ' + a.issues[0] : '№ ' + a.issues.join(', ')) + ' · ' + fpCount(n, 'issue', 'issues'),
          lines: fpAdLines(a.text, 0)
        };
      });
      var adsHead = !list.length ? 'No transcription for this address' : list.length === 1 ? 'The ad' : list.length + ' different ads at this address';
      if (cur !== null) rows.push({ k: 'In № ' + cur, v: picked.by_issue[cur] ? fpAds(picked.by_issue[cur]) : 'no ads' });
      det = {
        show: true, empty: false,
        addr: picked.address,
        place: [picked.neighborhood, picked.borough].filter(Boolean).join(', ') + (picked.approximate ? ' · approximate address' : ''),
        name: picked.id === FP_OFFICE ? 'Novyi Amerikanets: editorial office' : picked.advertisers[0],
        rows: rows,
        adsHead: adsHead,
        ad: ad,
        many: list.length > 1,
        pos: (at + 1) + ' of ' + list.length,
        prev: () => go(-1),
        next: () => go(1),
        close: () => this.setState({ sel: null, pin: null })
      };
    }

    var pins = {};
    [1, 2, 3, 4].forEach((n) => {
      var on = s.pin === n;
      pins['p' + n] = on ? 'true' : 'false';
      pins['pick' + n] = () => this.pickPin(n);
    });

    // ---- Section II
    var s2peak = Math.max.apply(null, FP_S2_ISSUES.map(function (r) { return r[1]; }));
    var s2by = {};
    FP_S2_ISSUES.forEach(function (r) { s2by[r[0]] = r; });
    var s2at = s.s2issue !== null ? s.s2issue : cur;
    var s2r = s2at !== null ? s2by[s2at] : null;
    var year = {
      no: s2r ? '№ ' + s2r[0] : 'All',
      date: s2r ? fpDate(s2r[3]) : '42 issues · 1980',
      text: s2r
        ? (FP_S2_PAGES[s2r[0]] ? FP_S2_PAGES[s2r[0]] + ' pages · ' : 'pages not known · ') + fpAds(s2r[1]) + ', ' + fpNum(s2r[2]) + ' of them new texts'
        : '1,577 ads, 406 different texts · 37.5 ads per issue',
      sub: 'This plot shows a number of ads in each issue. Solid: texts printed for the first time; hatched: repeats. The bars below show how many pages were in each issue. You can click a column to open that issue on the map in section III.',
      cols: []
    };
    for (var i2 = FP_FIRST; i2 <= FP_LAST; i2++) {
      (function (n, self) {
        var r = s2by[n];
        var pg = FP_S2_PAGES[n];
        var pcls = 'fp-pages__c' + (!r ? ' fp-pages__c--lost' : (!pg ? ' fp-pages__c--none' : '')) + (n === s2at ? ' fp-pages__c--on' : '');
        var ph = { height: (r && pg ? 100 * pg / FP_S2_PAGES_MAX : 0) + '%' };
        if (!r) { year.cols.push({ cls: 'fp-col fp-col--lost', has: false, lost: true, label: '№ ' + n + ': missing', pcls: pcls, ph: ph }); return; }
        var on = n === s2at;
        var h = 100 * r[1] / s2peak;
        year.cols.push({
          cls: 'fp-col' + (on ? ' fp-col--on' : ''),
          has: true, lost: false,
          on: n === cur ? 'true' : 'false',
          label: '№ ' + n + ', ' + fpDate(r[3]) + ': ' + fpAds(r[1]) + ', ' + r[2] + ' new' + (pg ? ', ' + pg + ' pages' : ''),
          old: { height: (h * (r[1] - r[2]) / r[1]) + '%' },
          new: { height: (h * r[2] / r[1]) + '%' },
          pcls: pcls, ph: ph,
          pick: () => self.openIssue(n),
          enter: () => self.setState({ s2issue: n }),
          leave: () => self.setState({ s2issue: null })
        });
      })(i2, this);
    }

    var m = FP_S2_MEASURES.filter(function (x) { return x.key === s.s2cat; })[0];
    var ranked = FP_S2_CATS.slice().sort(function (a, b) { return b[m.col] - a[m.col]; });
    var head = ranked.slice(0, FP_S2_CAT_N), rest = ranked.slice(FP_S2_CAT_N);
    var top1 = head[0][m.col];
    var cat = {
      sub: m.sub,
      tabs: FP_S2_MEASURES.map((x) => ({ name: x.name, selected: x.key === s.s2cat ? 'true' : 'false', pick: () => this.setState({ s2cat: x.key }) })),
      rows: head.map(function (r) {
        return { cls: '', name: FP_S2_NAMES[r[0]] || r[0], bar: 'na-bars__bar', w: { width: (100 * r[m.col] / top1) + '%' }, v: fpNum(r[m.col]) };
      }).concat([{
        cls: 'fp-bars__sep', name: rest.length + ' other categories',
        bar: 'na-bars__bar na-bars__bar--open',
        w: { width: Math.min(100, 100 * rest.reduce(function (a, r) { return a + r[m.col]; }, 0) / top1) + '%' },
        v: fpNum(rest.reduce(function (a, r) { return a + r[m.col]; }, 0))
      }])
    };

    var runs = FP_S2_TOP.map(function (r) {
      var cells = [];
      for (var n = FP_FIRST; n <= FP_LAST; n++) {
        cells.push({ c: 'fp-run__c' + (!s2by[n] ? ' fp-run__c--lost' : (r[3].indexOf(n) >= 0 ? ' fp-run__c--on' : '')) });
      }
      return {
        name: FP_S2_NAMES[r[0]] || r[0], type: FP_S2_NAMES[r[1]] || r[1], n: r[2], cells: cells,
        label: fpAds(r[2]) + ' in ' + r[3].length + ' issues, from № ' + r[3][0] + ' to № ' + r[3][r[3].length - 1]
      };
    });

    var zoom = {
      cls: 'fp-sheetmap fp-sheetmap--zoomable' + (s.z > 1 ? ' fp-sheetmap--zoomed' : '') + (s.z >= FP_STREETS_Z ? ' fp-sheetmap--streets' : '') + (s.dragging ? ' fp-sheetmap--drag' : ''),
      vars: { '--z': s.z },
      layer: { transform: 'translate(' + (s.tx * 100) + '%, ' + (s.ty * 100) + '%) scale(' + s.z + ')' },
      label: '×' + (Math.round(s.z * 10) / 10),
      atMin: s.z <= 1,
      atMax: s.z >= FP_ZOOM_MAX,
      in: () => this.zoomAt(FP_ZOOM_STEP, 0.5, 0.5),
      out: () => this.zoomAt(1 / FP_ZOOM_STEP, 0.5, 0.5),
      reset: () => this.setView(1, 0, 0),
      dbl: (e) => {
        var r = e.currentTarget.getBoundingClientRect();
        this.zoomAt(e.shiftKey ? 1 / 2 : 2, (e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height);
      },
      down: (e) => this.dragStart(e),
      move: (e) => this.dragMove(e),
      up: (e) => this.dragEnd(e)
    };

    // Section V: every ad on a shelf, in a pop-up strip scrolled sideways
    var shelfBtn = {}, gal = { show: false };
    var shelfData = s.shelves;
    var scrollGal = function (d) { var el = typeof document !== 'undefined' && document.querySelector('.fp-gal__strip'); if (el) el.scrollBy({ left: d * el.clientWidth * 0.8, behavior: 'smooth' }); };
    (shelfData ? shelfData.shelves : []).forEach((sh) => {
      shelfBtn[sh.key] = { label: 'See all ' + fpCount(sh.ids.length, 'ad', 'ads') + ' on this shelf →', open: () => { this.setState({ gallery: sh.key }); setTimeout(function () { var el = typeof document !== 'undefined' && document.querySelector('.fp-gal'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 60); } };
    });
    FP_SHELF_KEYS.forEach(function (k) { if (!shelfBtn[k]) shelfBtn[k] = { label: 'See all the ads on this shelf →', open: function () {} }; });
    var openShelf = shelfData && s.gallery ? shelfData.shelves.filter(function (x) { return x.key === s.gallery; })[0] : null;
    if (openShelf) {
      gal = {
        show: true,
        name: openShelf.name,
        count: fpCount(openShelf.ids.length, 'ad', 'ads') + ' · scroll sideways',
        close: () => this.setState({ gallery: null }),
        prev: () => scrollGal(-1),
        next: () => scrollGal(1),
        ads: openShelf.ids.map(function (id) {
          var a = shelfData.ads[id];
          var n = a.issues.length;
          return { lines: fpAdLines(a.text, 0), adv: a.adv, cite: (n === 1 ? '№ ' : '№ ') + a.issues.join(', ') };
        })
      };
    }

    // Section IV tour line: a number opens its ad under the line, full width; the same number closes it
    var tour = { hint: s.tourOpen ? '' : 'Click a number on the line to read the announcement.' };
    for (var g = 1; g <= 9; g++) (function (g) {
      tour['s' + g] = s.tourOpen === g ? 'true' : 'false';
      tour['g' + g] = s.tourOpen === g ? 'fp-gig--open' : '';
      tour['p' + g] = () => this.setState({ tourOpen: this.state.tourOpen === g ? null : g });
    }).call(this, g);

    return {
      tabs: tabs,
      tour: tour,
      gal: gal,
      shelf: shelfBtn,
      other: other,
      dots: dots,
      co: co,
      ticks: ticks,
      time: time,
      panel: panel,
      det: det,
      pins: pins,
      grow: grow,
      modes: [{ k: true, name: 'Up to this issue' }, { k: false, name: 'This issue only' }].map((x) => ({
        name: x.name, selected: x.k === s.accum ? 'true' : 'false', pick: () => this.setState({ accum: x.k })
      })),
      legendSize: s.accum && cur !== null ? 'Size: ads at the address up to this issue' : 'Size = frequency of the ads\n',
      zoom: zoom,
      year: year,
      cat: cat,
      runs: runs,
      streets: s.streets,
      mapLabel: 'Map of New York: ' + (cur === null ? 'the whole of 1980' : 'issue № ' + cur) + '; ' + (s.accum && cur !== null ? 'addresses accumulate up to this issue' : 'dot size shows ads at the address over the year'),
      play: { pressed: s.playing ? 'true' : 'false', label: s.playing ? '❚❚ Pause' : '▶ 1980', toggle: () => this.togglePlay() }
    };
  }
}

;return Component;
})();

window.__dc["section4"] = (function () {

// Section IV, moved out of Main because a canvas artboard is at most 8000px tall.
// Tour line: a number opens its ad under the line, full width; the same number closes it.
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { tourOpen: 1 };  // the first event is open when the page loads
  }
  renderVals() {
    var s = this.state;
    var tour = { hint: s.tourOpen ? '' : 'Click a number on the line to read the announcement.' };
    for (var g = 1; g <= 9; g++) (function (g) {
      tour['s' + g] = s.tourOpen === g ? 'true' : 'false';
      tour['g' + g] = s.tourOpen === g ? 'fp-gig--open' : '';
      tour['p' + g] = () => this.setState({ tourOpen: this.state.tourOpen === g ? null : g });
    }).call(this, g);
    return { tour: tour };
  }
}

;return Component;
})();

window.__dc["bibliography"] = (function () {

class Component extends DCLogic {
  renderVals() { return {}; }
}

;return Component;
})();

window.__dcTrees = {"main":["\n",["div",{"class":"na-page fp"},["\n",["div",{"class":"na-sheet fp-sheet"},["\n",["header",{},["\n",["div",{"class":"na-masthead"},["\n",["h1",{"class":"na-masthead__title"},["THE NEW AMERICAN, INC."]],"\n",["p",{"class":"na-masthead__motto","style":"background-color: var(--paper-raised, #ffffff); color: var(--reverse, #111111)"},["ADVERTISING IN AN IMMIGRANT NEWSPAPER AS A GUIDE TO A NEW LIFE"]],"\n"]],"\n",["div",{"class":"na-folio-line na-folio"},[["span",{},["Aseees 2026",["br",{},[]]]],["span",{},["Novyi amerikanets · Issues 1–46 · 1980"]],["span",{},["Price — 20 min of your life"]]]],"\n",["hr",{"class":"na-rule na-rule--oxford fp-oxford"},[]],"\n"]],"\n",["main",{"class":"na-grid"},["\n",["figure",{"class":"na-col na-s6 na-col--ruled fp-intro","lang":"en"},["\n",["a",{"class":"fp-intro__link","href":"#section-3","aria-label":"Map of New York City, 1980. The interactive map is in Section III."},["\n",["span",{"class":"na-frame na-frame--heavy fp-introframe"},["\n",["span",{"class":"na-frame__label"},["New York City · 1980"]],"\n",["span",{"class":"na-map fp-intro__map"},["\n",["span",{"class":"fp-sheetmap"},["\n",["img",{"class":"fp-base","src":"img/0aab15c0c2b3cc5ce4ffa0e8e49df197.svg","alt":""},[]],"\n",["svg",{"class":"fp-overlay na-map__svg","viewBox":"0 0 600 616","aria-hidden":"true"},["\n",["path",{"class":"fp-st fp-st--major","d":"{{streets.major}}"},[]],"\n",["line",{"class":"grat","x1":"0","x2":"600","y1":"527.6","y2":"527.6"},[]],"\n",["text",{"class":"lbl-water fp-lbl-lat","x":"4","y":"523.6"},["40°36′ N"]],"\n",["line",{"class":"grat","x1":"0","x2":"600","y1":"307.8","y2":"307.8"},[]],"\n",["text",{"class":"lbl-water fp-lbl-lat","x":"4","y":"303.8"},["40°42′ N"]],"\n",["line",{"class":"grat","x1":"0","x2":"600","y1":"87.9","y2":"87.9"},[]],"\n",["text",{"class":"lbl-water fp-lbl-lat","x":"4","y":"83.9"},["40°48′ N"]],"\n",["text",{"class":"lbl","x":"158.3","y":"109.9","text-anchor":"end"},["Manhattan"]],"\n",["text",{"class":"lbl","x":"140","y":"440","text-anchor":"start"},["Brooklyn"]],"\n",["text",{"class":"lbl","x":"466.7","y":"281.4","text-anchor":"start"},["Queens"]],"\n",["text",{"class":"lbl","x":"268","y":"17.6","text-anchor":"start"},["The Bronx"]],"\n",["text",{"class":"lbl-water","x":"16.7","y":"208.8","transform":"rotate(-90 16.7 208.8)","text-anchor":"middle"},["New Jersey"]],"\n",["text",{"class":"lbl-water","x":"75","y":"296.8","transform":"rotate(-62 75 296.8)","text-anchor":"middle"},["Hudson River"]],"\n",["text",{"class":"lbl-water","x":"366.7","y":"600.2","text-anchor":"middle"},["Atlantic Ocean"]],"\n",["g",{"transform":"translate(440 560)"},["\n",["line",{"class":"fp-scalebar","x1":"0","x2":"31.8","y1":"0","y2":"0"},[]],"\n",["text",{"class":"lbl-water fp-lbl-scale","x":"39.8","y":"4"},["1 mile"]],"\n"]],"\n",["g",{"transform":"translate(572 34)"},["\n",["path",{"d":"M0 -18 L6 4 L0 0 L-6 4 Z","fill":"#111111"},[]],"\n",["text",{"class":"lbl","x":"0","y":"20","text-anchor":"middle"},["N"]],"\n"]],"\n"]],"\n"]],"\n"]],"\n"]],"\n",["figcaption",{"class":"fp-intro__cap"},[["span",{"class":"na-citation"},["Map of the five boroughs of New York City. Streets: © OpenStreetMap contributors."]],"\n",["span",{"class":"na-label fp-intro__more"},["The interactive map is in Section III →"]],"\n"]],"\n"]],"\n"]],"\n",["section",{"class":"na-col na-s3 fp-lead","aria-labelledby":"fp-lead-h"},["\n",["p",{"class":"na-kicker"},["THEME OF THE ISSUE"]],"\n",["h2",{"class":"na-h1","id":"fp-lead-h"},["THE THIRD WAVE OF RUSSIAN EMIGRATION SWEPT OVER NEW YORK "]],"\n",["p",{"class":"na-deck"},["The number of small businesses founded by and for immigrants from the Soviet Union is growing rapidly."]],"\n"]],["nav",{"class":"na-col na-s3 na-col--ruled fp-toc","aria-label":"Сегодня в номере"},["\n",["p",{"class":"na-toc__head"},["IN TODAY'S ISSUE:"]],"\n",["ol",{"class":"na-toc"},["\n",["li",{},[["a",{"href":"#section-1"},[["span",{"class":"na-toc__title"},["The Role of Advertisement"]],["span",{"class":"na-toc__lead"},[["span",{},["Section I"]]]]]]]],["li",{},[["a",{"href":"#section-2"},[["span",{"class":"na-toc__title"},["Advertisement in ",["i",{},["Novyi Amerikanets",["br",{},[]]]]]],["span",{"class":"na-toc__lead"},[["span",{},["Section II"]]]]]]]],"\n",["li",{},[["a",{"href":"#section-3"},[["span",{"class":"na-toc__title"},["Map of New York for Immigrants "]],["span",{"class":"na-toc__lead"},[["span",{},["Section III"]]]]]]]],"\n",["li",{},[["a",{"href":"#section-4"},[["span",{"class":"na-toc__title"},[["i",{},["The New American Inc."]]]],["span",{"class":"na-toc__lead"},[["span",{},["Section IV"]]]]]]]],"\n",["li",{},[["a",{"href":"#bibliography"},[["span",{"class":"na-toc__title"},["Bibliography"]],["span",{"class":"na-toc__lead"},[["span",{},["Appendix"]]]]]]]],"\n"]],"\n"]],"\n",["section",{"class":"na-col na-s6 fp-leadstats","aria-label":"The year in figures"},["\n",["p",{"class":"na-dense fp-leadstats__intro"},["Today, our special reporter, Elizaveta Senatorova, fearslessly faces the numbers head-on:"]],"\n",["div",{"class":"na-stat-row fp-leadstats__row"},["\n",["div",{"class":"na-stat na-stat--l"},[["span",{"class":"na-stat__n na-tab"},["1577"]],"\n",["span",{"class":"na-stat__unit"},["ads printed in 42 issues"]],"\n"]],["div",{"class":"na-stat na-stat--l"},[["span",{"class":"na-stat__n na-tab"},["304"]],"\n",["span",{"class":"na-stat__unit"},["advertisers"]],"\n"]],["div",{"class":"na-stat na-stat--l"},[["span",{"class":"na-stat__n na-tab"},["280"]],"\n",["span",{"class":"na-stat__unit"},["addresses in NYC and abroad"]],"\n"]],"\n"]],"\n"]],["header",{"class":"na-col fp-sec1head","id":"section-1","lang":"en"},["\n",["hr",{"class":"na-rule na-rule--oxford"},[]],"\n",["p",{"class":"na-kicker"},["Section I"]],"\n",["h2",{"class":"na-h2","id":"fp-sec1-h"},["The Role of Advertisement"]],"\n"]],"\n",["section",{"class":"na-col fp-adpage","aria-labelledby":"fp-sec1-h","lang":"en"},["\n",["blockquote",{"class":"fp-q fp-w8 fp-q--lead na-ad na-ad--typeset na-frame na-frame--orn na-frame--diamond"},["\n",["p",{"class":"na-ad__head fp-q__xl"},["«нужно обеспечить себя рекламой»"]],"\n",["div",{"class":"na-frame na-frame--coupon fp-q__inset"},["\n",["p",{"class":"fp-q__text","lang":"ru","style":"font-size: 21px; line-height: 1.45; font-weight: 400; letter-spacing: 0px; font-style: normal; font-family: \"Source Serif 4\", \"Times New Roman\", Times, serif"},["«Газету намерены выпускать с июля. Очень много тормозов и препятствий. Это гораздо дороже и сложнее, чем выпускать журнал. И, вообще, совсем иное дело. Большинство помех устранено. Осталась почти единственная. ",["b",{},["Нужно обеспечить себя рекламой. (Это — треть газетной площади.)"]]," <...> Если получим сто рекламных заявок — немедленно выходим.»"]],"\n"]],"\n",["br",{},[]],"\n",["footer",{"class":"fp-q__by"},[["span",{"class":"fp-q__who"},["Sergei Dovlatov to Igor Efimov"]],"Epistoliarnyi roman s Igorem Efimovym, ",["span",{"style":"font-style: normal"},["2001, p. 34."]]]],"\n"]],"\n",["blockquote",{"class":"fp-q fp-w4 fp-h2 na-ad na-ad--typeset na-frame na-frame--double","style":"font-size: 24px; line-height: 1.1; font-weight: 700; letter-spacing: 0px; font-style: normal; font-family: \"PT Sans\", \"Helvetica Neue\", Arial, sans-serif"},["\n",["p",{"class":"fp-q__text","style":"font-size: 30px; line-height: 1.05; font-weight: 900; letter-spacing: 0px; font-style: normal; font-family: \"Source Serif 4\", \"Times New Roman\", Times, serif"},["“In many cases the advertisements reveal the organization of the immigrant community more fully than does the rest of the paper. […] The advertisements also reveal to what extent an immigrant group has adapted itself to American ways.”"]],"\n",["footer",{"class":"fp-q__by","style":"font-size: 18px; line-height: 1.6; font-weight: 400; letter-spacing: 0px; font-style: normal; font-family: \"Source Serif 4\", \"Times New Roman\", Times, serif"},[["span",{"class":"fp-q__who"},["Robert E. Park"]],["cite",{},["The Immigrant Press and Its Control"]],", ",["span",{"style":"font-style: normal"},["1922, pp. 113–114."]]]],"\n"]],"\n",["blockquote",{"class":"fp-q fp-w3 na-ad na-ad--typeset na-frame na-frame--heavy"},["\n",["p",{"style":"margin: 0; font-size: 21px; line-height: 1.45; font-weight: 400; letter-spacing: 0px; font-style: normal; font-family: \"Source Serif 4\", \"Times New Roman\", Times, serif"},["“In this way, the newspaper of Caracas quite naturally, and even apolitically, created an imagined community among a specific assemblage of fellow-readers, to whom these ships, brides, bishops and prices belonged.”"]],"\n",["footer",{"class":"fp-q__by"},[["span",{"class":"fp-q__who"},["Benedict Anderson"]],["cite",{},["Imagined Communities"]],", ",["span",{"style":"font-style: normal"},["2006, pp. 61–62."]]]],"\n"]],"\n",["blockquote",{"class":"fp-q fp-w5 na-frame na-frame--double fp-q--double"},["\n",["p",{"class":"fp-q__text fp-q__text--l","lang":"ru","style":"font-size: 26px"},["«Монопольная пресса давила нещадно. Обрабатывала наших рекламодателей. Терроризировала авторов. Распускала о нас чудовищные слухи.»"]],"\n",["footer",{"class":"fp-q__by","lang":"ru"},[["span",{"class":"fp-q__who"},["Сергей Довлатов"]],["cite",{},["Marsh odinokikh, ",["span",{"style":"font-style: normal"},["2015, p. 10."]]]]]],"\n"]],"\n",["blockquote",{"class":"fp-q fp-w12 na-ad na-ad--typeset na-frame na-frame--reverse"},["\n",["p",{"class":"fp-q__text","lang":"ru","style":"font-size: 40px; line-height: 1; font-weight: 700; letter-spacing: 0px; font-style: normal; font-family: \"PT Sans\", \"Helvetica Neue\", Arial, sans-serif"},["«Решены все главные проблемы, кроме двух. Вернее, даже одной. Это реклама. Не реклама будущей газеты, ",["u",{},["а реклама — в будущую газету."]]," И не только русская, но и американская. Это очень трудно — получить рекламу в несуществующую газету <…> Без рекламы наши благодетели не согласны начинать. Это было бы не по-американски.»"]],"\n",["footer",{"class":"fp-q__by"},[["span",{"class":"fp-q__who"},["Sergei Dovlatov to Igor Efimov"]],["cite",{"lang":"ru"},["Epistoliarnyi roman s Igorem Efimovym"]],", ",["span",{"style":"font-style: normal"},["2001, p. 36."]]]],"\n"]],"\n",["article",{"class":"fp-q fp-w12 na-frame na-frame--orn na-frame--star fp-column","aria-labelledby":"fp-col-h"},["\n",["p",{"class":"na-kicker"},["Reporter’s column"]],"\n",["h3",{"class":"na-h3","id":"fp-col-h"},["Advertisement of Imagined Community "]],"\n",["p",{"class":"na-byline fp-column__by"},["Elizaveta Senatorova, ",["em",{},["special reporter"]]]],"\n",["hr",{"class":"na-rule"},[]],"\n",["div",{"class":"na-body fp-column__body"},["\n",["p",{"style":"font-size: 34px; line-height: 1.18; font-weight: 300; letter-spacing: 0px; font-style: italic; font-family: \"Source Serif 4\", \"Times New Roman\", Times, serif"},["What happens when readers encounter a place or event advertised in the newspaper? "]],"\n",["div",{"style":"font-size: 34px; line-height: 1.18; font-weight: 300; letter-spacing: 0px; font-style: italic; font-family: \"Source Serif 4\", \"Times New Roman\", Times, serif"},[["p",{"data-pm-slice":"1 1 []"},["The material infrastructure of the imagined community comes to the foreground: printed addresses become points on a real map, revealing its physical geography."]]]],"\n"]],"\n"]],"\n"]],"\n",["header",{"class":"na-col fp-sec1head fp-s2","id":"section-2","lang":"en"},["\n",["hr",{"class":"na-rule na-rule--oxford"},[]],"\n",["p",{"class":"na-kicker"},["Section II"]],"\n",["h2",{"class":"na-h2","id":"fp-s2-h"},["Advertisement in ",["i",{},["Novyi Amerikanets"]]]],"\n"]],"\n",["div",{"class":"na-col fp-s2","lang":"en"},["\n",["div",{"class":"na-stat-row fp-s2-figs"},["\n"]],"\n"]],"\n",["section",{"class":"na-col fp-s2 fp-year","aria-labelledby":"fp-year-h","lang":"en"},["\n",["div",{"class":"fp-s2__head"},["\n",["h3",{"class":"na-chart__title","id":"fp-year-h","style":"font-size: 18px; line-height: 1.2; font-weight: 700; letter-spacing: 0px; font-style: normal; font-family: \"Roboto Slab\", \"Rockwell\", \"Courier New\", serif"},[["p",{"data-pm-slice":"1 1 []","style":"font-size: 34px; line-height: 1.18; font-weight: 300; letter-spacing: 0px; font-style: italic; font-family: \"Source Serif 4\", \"Times New Roman\", Times, serif"},["«Месяца два прошло в атмосфере безграничного энтузиазма. Число подписчиков и рекламодателей увеличивалось с каждым днем.» ",["br",{},[]],["b",{},[["span",{"style":"font-style: normal"},["Sergei Dovlatov,"]]," Remeslo",["span",{"style":"font-style: normal"},[", Ardis, 1985."]]]]]]]],"\n",["p",{"class":"na-chart__sub","style":"width: 848px; font-size: 18px; line-height: 1.6; font-weight: 400; letter-spacing: 0px; font-style: normal; font-family: \"Source Serif 4\", \"Times New Roman\", Times, serif"},["{{year.sub}}"]],"\n"]],"\n",["p",{"class":"fp-year__read","aria-live":"polite"},[["span",{"class":"fp-year__no na-tab"},["{{year.no}}"]],["span",{"class":"na-label"},["{{year.date}}"]],["span",{"class":"na-dense na-tab"},["{{year.text}}"]]]],"\n",["ol",{"class":"fp-cols","aria-label":"Ads per issue"},["\n",["sc-for",{"list":"{{year.cols}}","as":"c","hint-placeholder-count":"46"},["\n",["li",{"class":"{{c.cls}}"},["\n",["sc-if",{"value":"{{c.has}}","hint-placeholder-val":"{{true}}"},["\n",["button",{"type":"button","class":"fp-col__btn","aria-label":"{{c.label}}","aria-pressed":"{{c.on}}","onclick":"{{c.pick}}","onmouseenter":"{{c.enter}}","onmouseleave":"{{c.leave}}","onfocus":"{{c.enter}}","onblur":"{{c.leave}}"},["\n",["span",{"class":"fp-col__old","style":"{{c.old}}"},[]],"\n",["span",{"class":"fp-col__new","style":"{{c.new}}"},[]],"\n"]],"\n"]],"\n",["sc-if",{"value":"{{c.lost}}","hint-placeholder-val":"{{false}}"},["\n",["span",{"class":"fp-col__lost","aria-label":"{{c.label}}"},[]],"\n"]],"\n"]],"\n"]],"\n"]],"\n",["div",{"class":"fp-pages","aria-hidden":"true"},["\n",["span",{"class":"na-citation fp-pages__key"},["Pages in the issue: 16 to 40"]],"\n",["ol",{"class":"fp-pages__row"},["\n",["sc-for",{"list":"{{year.cols}}","as":"c","hint-placeholder-count":"46"},[["li",{"class":"{{c.pcls}}"},[["span",{"style":"{{c.ph}}"},[]]]]]],"\n"]],"\n"]],"\n",["div",{"class":"fp-cols__axis na-citation na-tab","aria-hidden":"true"},[["span",{"style":"left: 0px"},["№ 1 · Feb"]],["span",{"style":"left: 41.3%"},["№ 20–23 missing"]],["span",{"style":"right: 0px"},["№ 46 · Dec"]],"\n"]],"\n"]],"\n",["section",{"class":"na-col na-s6 fp-s2 fp-pair","aria-labelledby":"fp-cat-h","lang":"en"},["\n",["h3",{"class":"na-chart__title","id":"fp-cat-h"},["What was advertised"]],"\n",["p",{"class":"na-chart__sub"},["{{cat.sub}}"]],"\n",["div",{"class":"na-tabs fp-s2-tabs","role":"tablist","aria-label":"Count"},["\n",["sc-for",{"list":"{{cat.tabs}}","as":"t","hint-placeholder-count":"3"},["\n",["button",{"type":"button","role":"tab","aria-selected":"{{t.selected}}","onclick":"{{t.pick}}"},["{{t.name}}"]],"\n"]],"\n"]],"\n",["ol",{"class":"na-bars fp-bars"},["\n",["sc-for",{"list":"{{cat.rows}}","as":"r","hint-placeholder-count":"13"},["\n",["li",{"class":"{{r.cls}}"},[["span",{"class":"na-bars__label"},["{{r.name}}"]],["span",{"class":"na-bars__track"},[["span",{"class":"{{r.bar}}","style":"{{r.w}}"},[]]]],["span",{"class":"na-bars__val na-tab"},["{{r.v}}"]]]],"\n"]],"\n"]],"\n"]],"\n",["section",{"class":"na-col na-s6 na-col--ruled fp-s2 fp-pair fp-regulars","aria-labelledby":"fp-long-h","lang":"en"},["\n",["h3",{"class":"na-chart__title","id":"fp-long-h"},["The regulars"]],"\n",["p",{"class":"na-chart__sub"},["The 12 advertisers with 21 ads or more, the paper’s own ads left out. Each black mark is an issue they appeared in."]],"\n",["p",{"class":"na-citation fp-runs__key"},[["span",{},[["span",{"class":"fp-run__c fp-run__c--on"},[]]," in the issue"]],["span",{},[["span",{"class":"fp-run__c"},[]]," not in it"]],["span",{},[["span",{"class":"fp-run__c fp-run__c--lost"},[]]," № 20–23 missing"]]]],"\n",["ol",{"class":"fp-runs"},["\n",["sc-for",{"list":"{{runs}}","as":"r","hint-placeholder-count":"12"},["\n",["li",{"class":"fp-run"},["\n",["span",{"class":"fp-run__who"},[["span",{"class":"fp-run__name","title":"{{r.name}}"},["{{r.name}}"]],["span",{"class":"na-folio"},["{{r.type}}"]]]],"\n",["span",{"class":"fp-run__strip","role":"img","aria-label":"{{r.label}}"},["\n",["sc-for",{"list":"{{r.cells}}","as":"k","hint-placeholder-count":"46"},[["span",{"class":"{{k.c}}"},[]]]],"\n"]],"\n",["span",{"class":"na-bars__val na-tab"},["{{r.n}}"]],"\n"]],"\n"]],"\n"]],"\n",["p",{"class":"na-citation fp-s2__foot fp-runs__axis"},[["span",{},["№ 1"]],["span",{},["№ 46"]]]],"\n"]],"\n",["header",{"class":"na-col fp-sec2head","id":"section-3","lang":"en"},["\n",["hr",{"class":"na-rule na-rule--oxford"},[]],"\n",["p",{"class":"na-kicker"},["SECTION III"]],"\n",["h2",{"class":"na-h2","id":"fp-sec2-h"},["Map of New York for Immigrants"]],"\n"]],"\n",["section",{"class":"na-col fp-where","aria-labelledby":"fp-where-h","lang":"en"},["\n",["div",{"class":"fp-where__head"},["\n",["h3",{"class":"na-chart__title","id":"fp-where-h"},["Where the addresses are"]],"\n",["p",{"class":"na-deck fp-where__deck"},["Not just Brighton Beach!"]],"\n"]],"\n",["ol",{"class":"fp-boro","aria-label":"Addresses in the five boroughs: 230"},["\n",["li",{"class":"fp-boro__item","style":"--n: 105"},[["span",{"class":"fp-boro__n na-tab"},["105"]],["span",{"class":"fp-boro__name"},["Brooklyn"]]]],"\n",["li",{"class":"fp-boro__item","style":"--n: 78"},[["span",{"class":"fp-boro__n na-tab"},["78"]],["span",{"class":"fp-boro__name"},["Manhattan"]]]],"\n",["li",{"class":"fp-boro__item","style":"--n: 43"},[["span",{"class":"fp-boro__n na-tab"},["43"]],["span",{"class":"fp-boro__name"},["Queens"]]]],"\n",["li",{"class":"fp-boro__item","style":"--n: 4"},[["span",{"class":"fp-boro__n na-tab"},["4"]],["span",{"class":"fp-boro__name"},["The Bronx"]]]],"\n",["li",{"class":"fp-boro__item fp-boro__item--none","style":"--n: 0"},[["span",{"class":"fp-boro__n na-tab"},["0"]],["span",{"class":"fp-boro__name"},["Staten Island"]]]],"\n"]],"\n",["div",{"class":"fp-where__rest"},["\n",["div",{"class":"fp-where__side fp-where__box na-frame na-frame--orn na-frame--star"},["\n",["p",{"class":"na-label"},["Most addresses, by neighbourhood"]],"\n",["ol",{"class":"fp-nb"},["\n",["li",{"style":"--n: 26"},[["span",{"class":"fp-nb__name"},["Brighton Beach"]],["span",{"class":"fp-nb__n na-tab"},["26"]]]],"\n",["li",{"style":"--n: 24"},[["span",{"class":"fp-nb__name"},["Midwood"]],["span",{"class":"fp-nb__n na-tab"},["24"]]]],"\n",["li",{"style":"--n: 13"},[["span",{"class":"fp-nb__name"},["Borough Park"]],["span",{"class":"fp-nb__n na-tab"},["13"]]]],"\n",["li",{"style":"--n: 10"},[["span",{"class":"fp-nb__name"},["Forest Hills"]],["span",{"class":"fp-nb__n na-tab"},["10"]]]],"\n",["li",{"style":"--n: 9"},[["span",{"class":"fp-nb__name"},["Jackson Heights"]],["span",{"class":"fp-nb__n na-tab"},["9"]]]],"\n",["li",{"style":"--n: 8"},[["span",{"class":"fp-nb__name"},["Kensington"]],["span",{"class":"fp-nb__n na-tab"},["8"]]]],"\n"]],"\n",["p",{"class":"na-citation fp-s2__foot"},["68 texts give no address at all. Manhattan addresses are not sorted by neighbourhood."]],"\n"]],"\n",["div",{"class":"fp-beyond fp-where__box na-frame na-frame--orn na-frame--diamond"},["\n",["p",{"class":"na-label"},["Beyond the five boroughs · 50 addresses"]],"\n",["ol",{"class":"fp-beyond__list"},["\n",["li",{"class":"fp-beyond__item"},[["span",{"class":"fp-beyond__n na-tab"},["22"]],["span",{"class":"fp-beyond__name"},["New Jersey"]],["span",{"class":"na-citation fp-beyond__note"},["Jersey City 10, Irvington 5, Elizabeth 4, Newark, Union, Bloomfield"]]]],"\n",["li",{"class":"fp-beyond__item"},[["span",{"class":"fp-beyond__n na-tab"},["18"]],["span",{"class":"fp-beyond__name"},["Elsewhere in the US"]],["span",{"class":"na-citation fp-beyond__note"},["Massachusetts 4 (Boston, Brookline, Newton, Springfield) · Michigan 3 (Ann Arbor, Ypsilanti) · Illinois 3 (Chicago, Skokie) · California 2 (Los Angeles, North Hollywood) · Florida (Miami Beach) · Maryland (Rockville) · New York State (Yonkers) · Pennsylvania (Philadelphia) · Texas (Houston) · Washington (Bellevue)"]]]],"\n",["li",{"class":"fp-beyond__item"},[["span",{"class":"fp-beyond__n na-tab"},["10"]],["span",{"class":"fp-beyond__name"},["Abroad"]],["span",{"class":"na-citation fp-beyond__note"},["Israel 4 (Tel Aviv, Ramat Gan, Jerusalem) · Canada 2 (Toronto, Montreal) · France 2 (Paris, Montgeron) · West Germany (Cologne) · Sweden (Nybro)"]]]],"\n"]],"\n"]],"\n"]],"\n"]],"\n",["section",{"class":"na-col na-s8 fp-mapcol","id":"fp-map","aria-labelledby":"fp-sec2-h","lang":"en"},["\n",["div",{"class":"na-frame na-frame--heavy fp-mapframe"},["\n",["span",{"class":"na-frame__label"},["Map · Section III"]],"\n",["div",{"class":"na-map__tools"},["\n",["div",{"class":"na-tabs","role":"tablist","aria-label":"Themes"},["\n",["sc-for",{"list":"{{tabs}}","as":"t","hint-placeholder-count":"6"},["\n",["button",{"type":"button","role":"tab","aria-selected":"{{t.selected}}","onclick":"{{t.pick}}"},["{{t.name}}"]],"\n"]],"\n"]],"\n",["div",{"class":"fp-zoom","role":"group","aria-label":"Zoom"},["\n",["button",{"class":"na-btn fp-zoombtn","type":"button","aria-label":"Zoom out","disabled":"{{zoom.atMin}}","onclick":"{{zoom.out}}"},["−"]],"\n",["span",{"class":"na-folio na-tab fp-zoomval","aria-live":"polite"},["{{zoom.label}}"]],"\n",["button",{"class":"na-btn fp-zoombtn","type":"button","aria-label":"Zoom in","disabled":"{{zoom.atMax}}","onclick":"{{zoom.in}}"},["+"]],"\n",["button",{"class":"na-btn na-btn--text fp-zoomreset","type":"button","disabled":"{{zoom.atMin}}","onclick":"{{zoom.reset}}"},["Reset"]],"\n"]],"\n"]],"\n",["sc-if",{"value":"{{other.show}}","hint-placeholder-val":"{{false}}"},["\n",["div",{"class":"fp-other"},["\n",["label",{"class":"na-label","for":"fp-other-sel"},["Other categories"]],"\n",["select",{"class":"na-select","id":"fp-other-sel","value":"{{other.value}}","onchange":"{{other.change}}"},["\n",["option",{"value":""},["Choose a category…"]],"\n",["sc-for",{"list":"{{other.opts}}","as":"o","hint-placeholder-count":"6"},[["option",{"value":"{{o.v}}"},["{{o.label}}"]]]],"\n"]],"\n"]],"\n"]],"\n",["div",{"class":"na-map"},["\n",["div",{"class":"{{zoom.cls}}","style":"{{zoom.vars}}","ondoubleclick":"{{zoom.dbl}}","onpointerdown":"{{zoom.down}}","onpointermove":"{{zoom.move}}","onpointerup":"{{zoom.up}}","onpointerleave":"{{zoom.up}}","onpointercancel":"{{zoom.up}}"},["\n",["div",{"class":"fp-zoomlayer","style":"{{zoom.layer}}"},["\n",["img",{"class":"fp-base","src":"img/0aab15c0c2b3cc5ce4ffa0e8e49df197.svg","alt":"","draggable":"false"},[]],"\n",["svg",{"class":"fp-overlay na-map__svg","viewBox":"0 0 600 616","aria-hidden":"true"},["\n",["path",{"class":"fp-st fp-st--minor","d":"{{streets.minor}}"},[]],"\n",["path",{"class":"fp-st fp-st--major","d":"{{streets.major}}"},[]],"\n",["g",{"class":"fp-st-names"},["\n",["text",{"class":"fp-st-lbl","x":"200.1","y":"576","dy":"-0.35em","transform":"rotate(-16 200.1 576)","text-anchor":"middle"},["Brighton Beach Ave"]],"\n",["text",{"class":"fp-st-lbl","x":"187","y":"505.7","dy":"-0.35em","transform":"rotate(81.8 187 505.7)","text-anchor":"middle"},["Ocean Pkwy"]],"\n",["text",{"class":"fp-st-lbl","x":"202.4","y":"417.9","dy":"-0.35em","transform":"rotate(78.9 202.4 417.9)","text-anchor":"middle"},["Flatbush Ave"]],"\n",["text",{"class":"fp-st-lbl","x":"400.1","y":"264","dy":"-0.35em","transform":"rotate(29.9 400.1 264)","text-anchor":"middle"},["Queens Blvd"]],"\n",["text",{"class":"fp-st-lbl","x":"179","y":"165.1","dy":"-0.35em","transform":"rotate(-60.7 179 165.1)","text-anchor":"middle"},["Fifth Ave"]],"\n",["text",{"class":"fp-st-lbl","x":"153.6","y":"267.4","dy":"-0.35em","transform":"rotate(21.6 153.6 267.4)","text-anchor":"middle"},["Delancey St"]],"\n"]],"\n",["line",{"class":"grat","x1":"0","x2":"600","y1":"527.6","y2":"527.6"},[]],"\n",["text",{"class":"lbl-water fp-lbl-lat","x":"4","y":"523.6"},["40°36′ N"]],"\n",["line",{"class":"grat","x1":"0","x2":"600","y1":"307.8","y2":"307.8"},[]],"\n",["text",{"class":"lbl-water fp-lbl-lat","x":"4","y":"303.8"},["40°42′ N"]],"\n",["line",{"class":"grat","x1":"0","x2":"600","y1":"87.9","y2":"87.9"},[]],"\n",["text",{"class":"lbl-water fp-lbl-lat","x":"4","y":"83.9"},["40°48′ N"]],"\n",["text",{"class":"lbl","x":"158.3","y":"109.9","text-anchor":"end"},["Manhattan"]],"\n",["text",{"class":"lbl","x":"140","y":"440","text-anchor":"start"},["Brooklyn"]],"\n",["text",{"class":"lbl","x":"466.7","y":"281.4","text-anchor":"start"},["Queens"]],"\n",["text",{"class":"lbl","x":"268","y":"17.6","text-anchor":"start"},["The Bronx"]],"\n",["text",{"class":"lbl-water","x":"16.7","y":"208.8","transform":"rotate(-90 16.7 208.8)","text-anchor":"middle"},["New Jersey"]],"\n",["text",{"class":"lbl-water","x":"75","y":"296.8","transform":"rotate(-62 75 296.8)","text-anchor":"middle"},["Hudson River"]],"\n",["text",{"class":"lbl-water","x":"366.7","y":"600.2","text-anchor":"middle"},["Atlantic Ocean"]],"\n",["g",{"transform":"translate(440 560)"},["\n",["line",{"class":"fp-scalebar","x1":"0","x2":"31.8","y1":"0","y2":"0"},[]],"\n",["text",{"class":"lbl-water fp-lbl-scale","x":"39.8","y":"4"},["1 mile"]],"\n"]],"\n",["g",{"transform":"translate(572 34)"},["\n",["path",{"d":"M0 -18 L6 4 L0 0 L-6 4 Z","fill":"#111111"},[]],"\n",["text",{"class":"lbl","x":"0","y":"20","text-anchor":"middle"},["N"]],"\n"]],"\n"]],"\n",["div",{"class":"fp-dots","role":"group","aria-label":"{{mapLabel}}"},["\n",["sc-for",{"list":"{{dots}}","as":"d","hint-placeholder-count":"12"},["\n",["button",{"type":"button","class":"{{d.cls}}","style":"{{d.pos}}","aria-label":"{{d.label}}","aria-pressed":"{{d.pressed}}","onclick":"{{d.click}}","onmouseenter":"{{d.enter}}","onmouseleave":"{{d.leave}}","onfocus":"{{d.enter}}","onblur":"{{d.leave}}"},[]],"\n"]],"\n"]],"\n",["sc-if",{"value":"{{co.show}}","hint-placeholder-val":"{{false}}"},["\n",["div",{"class":"na-callout na-map__callout","style":"{{co.pos}}","role":"status"},["\n",["p",{"class":"na-label"},["{{co.addr}}"]],"\n",["p",{"class":"na-dense"},["{{co.name}}"]],"\n",["p",{"class":"na-citation"},["{{co.meta}}"]],"\n"]],"\n"]],"\n"]],"\n"]],"\n"]],"\n",["ul",{"class":"fp-legend na-folio","aria-label":"Legend"},["\n",["li",{},[["span",{"class":"fp-key fp-key--office"},[]],"Novyi Amerikanets: 1 Union Square West"]],"\n",["li",{},[["span",{"class":"fp-key"},[]],"Exact address "]],"\n",["li",{},[["span",{"class":"fp-key fp-key--approx"},[]],"Approximate address: a street, a neighbourhood or a P.O. box"]],"\n",["li",{},[["span",{"class":"fp-key fp-key--muted"},[]],"Outside the selected theme"]],"\n",["li",{},[["span",{"class":"fp-key fp-key--s"},[]],["span",{"class":"fp-key fp-key--l"},[]],"{{legendSize}}"]],"\n"]],"\n",["div",{"class":"{{time.cls}}","role":"group","aria-label":"Timeline of the 1980 issues"},["\n",["div",{"class":"fp-time__now"},["\n",["span",{"class":"na-label"},["Issue"]],"\n",["span",{"class":"fp-time__issue na-tab","aria-live":"polite"},["{{time.issue}}"]],"\n",["span",{"class":"na-folio"},["{{time.date}}"]],"\n",["div",{"class":"na-tabs fp-mode","role":"tablist","aria-label":"Addresses shown"},["\n",["sc-for",{"list":"{{modes}}","as":"t","hint-placeholder-count":"2"},["\n",["button",{"type":"button","role":"tab","aria-selected":"{{t.selected}}","onclick":"{{t.pick}}"},["{{t.name}}"]],"\n"]],"\n"]],"\n"]],"\n",["div",{"class":"fp-time__row"},["\n",["button",{"class":"na-btn fp-play","type":"button","aria-pressed":"{{play.pressed}}","onclick":"{{play.toggle}}"},["{{play.label}}"]],"\n",["div",{"class":"fp-time__track"},["\n",["div",{"class":"fp-ticks","aria-hidden":"true"},["\n",["sc-for",{"list":"{{ticks}}","as":"k","hint-placeholder-count":"46"},["\n",["span",{"class":"{{k.cls}}","style":"{{k.pos}}"},[]],"\n"]],"\n"]],"\n",["input",{"class":"fp-range","type":"range","min":"1","max":"46","step":"1","value":"{{time.value}}","onchange":"{{time.input}}","aria-label":"Issue","aria-valuetext":"{{time.valuetext}}"},[]],"\n",["div",{"class":"fp-time__ends na-folio"},[["span",{},["№ 1 · 14 Feb"]],["span",{},["№ 46 · 30 Dec"]]]],"\n"]],"\n",["button",{"class":"na-btn na-btn--text fp-all","type":"button","aria-pressed":"{{time.all}}","onclick":"{{time.reset}}"},["Whole year"]],"\n"]],"\n"]],"\n",["p",{"class":"na-citation fp-credit"},["Streets: © OpenStreetMap contributors, today’s street network; addresses may differ from those in 1980."]],"\n"]],"\n"]],"\n",["aside",{"class":"na-col na-s4 na-col--ruled fp-panel","aria-label":"Issue and advertisement","lang":"en"},["\n",["p",{"class":"na-kicker"},["{{panel.kicker}}"]],"\n",["div",{"class":"na-stat na-stat--l","aria-live":"polite"},["\n",["span",{"class":"na-stat__n na-tab"},["{{panel.n}}"]],"\n",["span",{"class":"na-stat__unit"},["{{panel.unit}}"]],"\n",["span",{"class":"na-stat__note"},["{{panel.note}}"]],"\n"]],"\n",["sc-if",{"value":"{{grow.show}}","hint-placeholder-val":"{{false}}"},["\n",["div",{"class":"fp-grow"},["\n",["p",{"class":"na-label"},["{{grow.head}}"]],"\n",["ol",{"class":"na-bars fp-bars fp-grow__bars"},["\n",["sc-for",{"list":"{{grow.rows}}","as":"g","hint-placeholder-count":"7"},["\n",["li",{},[["span",{"class":"na-bars__label"},["{{g.name}}"]],["span",{"class":"na-bars__track"},[["span",{"class":"na-bars__bar","style":"{{g.w}}"},[]]]],["span",{"class":"na-bars__val na-tab"},["{{g.n}}"]]]],"\n"]],"\n"]],"\n",["p",{"class":"na-citation"},["{{grow.foot}}"]],"\n"]],"\n"]],"\n",["hr",{"class":"na-rule"},[]],"\n",["sc-if",{"value":"{{det.show}}","hint-placeholder-val":"{{false}}"},["\n",["div",{"class":"fp-det","aria-live":"polite"},["\n",["p",{"class":"na-label"},["{{det.addr}}"]],"\n",["p",{"class":"na-citation"},["{{det.place}}"]],"\n",["h3",{"class":"na-h3 fp-det__name"},["{{det.name}}"]],"\n",["dl",{"class":"fp-det__dl"},["\n",["sc-for",{"list":"{{det.rows}}","as":"row","hint-placeholder-count":"4"},["\n",["div",{"class":"fp-det__row"},[["dt",{"class":"na-folio"},["{{row.k}}"]],["dd",{"class":"na-dense na-tab"},["{{row.v}}"]]]],"\n"]],"\n"]],"\n",["p",{"class":"na-label fp-ads__head"},["{{det.adsHead}}"]],"\n",["div",{"class":"fp-ads"},["\n",["sc-for",{"list":"{{det.ad}}","as":"ad","hint-placeholder-count":"1"},["\n",["article",{"class":"{{ad.cls}}"},["\n",["p",{"class":"fp-ad__by"},[["span",{"class":"na-dense fp-ad__name"},["{{ad.adv}}"]],["span",{"class":"na-folio"},["{{ad.type}}"]]]],"\n",["p",{"class":"na-citation fp-ad__runs"},["{{ad.runs}}"]],"\n",["div",{"class":"fp-ad__text","lang":"ru","tabindex":"0","aria-label":"Text of the ad"},["\n",["sc-for",{"list":"{{ad.lines}}","as":"ln","hint-placeholder-count":"4"},["\n",["p",{"class":"{{ln.cls}}"},[["sc-for",{"list":"{{ln.parts}}","as":"pt","hint-placeholder-count":"1"},[["span",{"class":"{{pt.cls}}"},["{{pt.t}}",["sc-for",{"list":"{{pt.sub}}","as":"sp","hint-placeholder-count":"0"},[["span",{"class":"{{sp.cls}}"},["{{sp.t}}"]]]]]]]]]],"\n"]],"\n"]],"\n"]],"\n"]],"\n",["sc-if",{"value":"{{det.many}}","hint-placeholder-val":"{{true}}"},["\n",["div",{"class":"fp-pager"},["\n",["button",{"class":"na-btn na-btn--text","type":"button","aria-label":"Previous ad","onclick":"{{det.prev}}"},["‹ Previous"]],"\n",["span",{"class":"na-folio na-tab","aria-live":"polite"},["{{det.pos}}"]],"\n",["button",{"class":"na-btn na-btn--text","type":"button","aria-label":"Next ad","onclick":"{{det.next}}"},["Next ›"]],"\n"]],"\n"]],"\n"]],"\n",["button",{"class":"na-btn na-btn--text","type":"button","onclick":"{{det.close}}"},["Close"]],"\n"]],"\n"]],"\n",["sc-if",{"value":"{{det.empty}}","hint-placeholder-val":"{{true}}"},["\n",["p",{"class":"na-dense fp-hint"},["Click a dot on the map to read its advertisement: who advertised at that address, under which heading and in which issues."]],"\n"]],"\n"]],"\n",["dc-slot",{"name":"section4"},[]],["dc-slot",{"name":"bibliography"},[]],"\n"]],"\n"]],"\n"]],"\n"],"section4":["\n",["header",{"class":"na-col fp-sec1head fp-s45","id":"section-4","lang":"en"},["\n",["hr",{"class":"na-rule na-rule--oxford"},[]],"\n",["p",{"class":"na-kicker"},["SECTION IV"]],"\n"]],"\n",["section",{"class":"na-col fp-s45 fp-letterhead","aria-label":"Letterhead","lang":"en"},["\n",["p",{"class":"fp-letterhead__name"},["The New American, Inc."]],"\n",["p",{"class":"fp-letterhead__addr"},["1 Union Sq., Room 214 · New York, N.Y. 10003 · Tel.: 212-691-7664"]],"\n",["p",{"class":"fp-letterhead__tag","style":"font-size: 30px; line-height: 1.15; font-weight: 300; letter-spacing: 0px; font-style: italic; font-family: \"Source Serif 4\", \"Times New Roman\", Times, serif"},[["br",{},[]]]],["p",{"class":"fp-letterhead__tag","style":"font-size: 30px; line-height: 1.15; font-weight: 300; letter-spacing: 0px; font-style: italic; font-family: \"Source Serif 4\", \"Times New Roman\", Times, serif"},[["span",{"style":"font-size: 30px; text-align: start"},["Novyi Amerikanets was more than a newspaper. It was an ecosystem. Various strategies of self-advertisement show that, from the office on Union Square, the editors ran a \"bookshop\" and an excursion bureau, toured the boroughs with talks, hired their own staff through their own pages, and built a network of sellers and friends."]]]],"\n"]],"\n",["section",{"class":"na-col fp-s45 fp-strat fp-strat--subs","aria-labelledby":"fp-strat-subs","lang":"en"},["\n",["div",{"class":"fp-strat__head"},["\n",["h3",{"class":"fp-shelf__name","id":"fp-strat-subs"},["Subscriptions and advertising rates"]],"\n"]],"\n",["div",{"class":"fp-strat__ads"},["\n",["article",{"class":"fp-strat__ad na-frame na-frame--heavy"},["\n",["div",{"class":"fp-shelf__ad","lang":"ru","style":"--ad-fs: 20px"},["\n",["p",{"class":"fp-ad__h1"},["Подписывайтесь, не откладывая!"]],"\n",["p",{"class":"fp-ad__h2"},["Это удобнее и выгоднее!"]],"\n",["p",{"class":"fp-ad__p"},["52 номера еженедельника, купленные в розницу, стоят — $39"]],"\n",["p",{"class":"fp-ad__p"},["52 номера, полученные по подписке — $28"]],"\n"]],"\n",["p",{"class":"na-citation fp-shelf__cite"},["№ 7, 9, 10, 11"]],"\n"]],"\n",["article",{"class":"fp-strat__ad na-frame na-frame--double"},["\n",["div",{"class":"fp-shelf__ad","lang":"ru","style":"--ad-fs: 16px"},["\n",["p",{"class":"fp-ad__h1"},["Стоимость рекламы"]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},["Целая страница"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["500 долларов"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},["Полстраницы (разовая публикация)"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["300 долларов"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},["Четверть страницы (разовая)"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["200 долларов"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},["Реклама, шириной 1 колонка, высотой 1 инч (разовая)"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["8 долларов"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},["от 5 до 10 раз"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["7 долларов"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},["свыше 10 публикаций"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["6 долларов"]]]],"\n"]],"\n",["p",{"class":"na-citation fp-shelf__cite"},["№ 7"]],"\n"]],"\n",["article",{"class":"fp-strat__ad na-frame na-frame--hair"},["\n",["div",{"class":"fp-shelf__ad","lang":"ru","style":"--ad-fs: 13px"},["\n",["p",{"class":"fp-ad__h1"},["Rate Chart"]],"\n",["p",{"class":"fp-ad__h1"},["The New American"]],"\n",["p",{"class":"fp-ad__h2"},["The Largest Russian Language Weekly"]],"\n",["p",{"class":"fp-ad__h2"},["32 pages — every Tuesday"]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__h2"},["Display Advertising"]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},["1 in. by 1 col. (1–5 times)"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["$8.00"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},["1 in. by 1 col. (6–10 times)"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["$7.00"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},["1 in. by 1 col. (10 or more)"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["$6.00"]]]],"\n",["p",{"class":"fp-ad__p"},["Deadline for submitting — Thursday Noon prior to publication day."]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},["All requests and information:"]],"\n",["p",{"class":"fp-ad__h2"},["The New American, Inc."]],"\n",["p",{"class":"fp-ad__h2"},["1 Union Sq., Room 214 • New York, N.Y. 10003"]],"\n",["p",{"class":"fp-ad__h2"},["Tel.: 212-691-7664"]],"\n"]],"\n",["p",{"class":"na-citation fp-shelf__cite"},["№ 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46"]],"\n"]],"\n"]],"\n"]],"\n",["section",{"class":"na-col fp-s45 fp-strat fp-strat--holidays","aria-labelledby":"fp-strat-holidays","lang":"en"},["\n",["div",{"class":"fp-strat__head"},["\n",["h3",{"class":"fp-shelf__name","id":"fp-strat-holidays"},["Holidays and excursions"]],"\n"]],"\n",["div",{"class":"fp-strat__ads"},["\n",["article",{"class":"fp-strat__ad na-frame na-frame--coupon"},["\n",["div",{"class":"fp-shelf__ad","lang":"ru","style":"--ad-fs: 17px"},["\n",["p",{"class":"fp-ad__p"},[["b",{},["Если вы"]]," хотите использовать ",["b",{},["наш"]]," сертификат ",["b",{},["до декабря 1980 года"]],", то, пожалуйста, ",["b",{},["срочно"]]," сообщите об этом в редакцию ",["b",{},["до 30 ноября"]]," этого года по телефону (212) 691-7664 или письменно:"]],"\n",["p",{"class":"fp-ad__h1"},["The New American, One Union Square, Suite 214, New York, N.Y., 10003."]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Если же вы"]]," планируете эту поездку в 1981 году, то купоны 1981 года будут вам высылаться, начиная ",["b",{},["с декабря 1980 года"]],"."]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Это же"]]," относится и к тем, кто еще только собирается стать нашим годовым подписчиком."]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Если вы"]]," хотите отдохнуть в этом году —"]],"\n",["p",{"class":"fp-ad__h1"},["спешите!"]],"\n",["p",{"class":"fp-ad__p"},["Мы должны успеть получить ваши чеки к ",["b",{},["30 ноября"]]," с пометкой «высылайте купон 1980»."]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__h2"},["Редакция «Нового американца»"]],"\n"]],"\n",["p",{"class":"na-citation fp-shelf__cite"},["№ 42, 43, 44, 45, 46"]],"\n"]],"\n",["article",{"class":"fp-strat__ad na-frame na-frame--orn na-frame--diamond"},["\n",["div",{"class":"fp-shelf__ad","lang":"ru","style":"--ad-fs: 13.5px"},["\n",["p",{"class":"fp-ad__h1"},["Экскурсионное бюро «Новый американец»"]],"\n",["p",{"class":"fp-ad__p"},["Заведующий ",["b",{},["Джозеф Раппопорт"]]," предлагает на август следующие маршруты:"]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},["1. Экскурсия по Нью Йорку — 10 долларов. Каждое воскресенье, начиная с 10 августа. Начало в 10.30 и 14.30"]],"\n",["p",{"class":"fp-ad__p"},["2. Филадельфия. Цена — 25 долларов. 23 и 30 августа Экскурсия по городу, национальный парк, музей Родена."]],"\n",["p",{"class":"fp-ad__p"},["3. Вашингтон. 2 дня. Цена 67 долларов. 23–24 и 30–31 августа. Экскурсия по городу, Белый Дом, Капитолий Музей аэронавтики, Арлингтонское кладбище."]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},["В стоимость маршрута входит: Проезд в автобусе с кондиционером гостиница (на 2-х дневном маршруте), экскурсионное обслуживание. ",["b",{},["Читателям газеты «Новый американец», имеющим годовую подписку, скидка — 10%"]]]],"\n",["p",{"class":"fp-ad__p"},["Маршруты обслуживаются профессиональными гидами, говорящими по-русски."]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},["Справки и заказы по телефону (212) 691-7664. С 11 до 5 часов. (Кроме субботы и воскресенья)."]],"\n",["p",{"class":"fp-ad__p"},["По выходным, а также в обычные дни после 6 часов по телефону — (212) 871-0436."]],"\n"]],"\n",["p",{"class":"na-citation fp-shelf__cite"},["№ 25, 26, 27, 28, 29, 34, 35, 36, 37, 38, 39"]],"\n"]],"\n",["article",{"class":"fp-strat__ad na-frame na-frame--heavy"},["\n",["div",{"class":"fp-shelf__ad","lang":"ru","style":"--ad-fs: 17px"},["\n",["p",{"class":"fp-ad__h1"},["Экскурсионное бюро «Новый американец»"]],"\n",["p",{"class":"fp-ad__h2"},["совместно с Treasureworld Travel Inc."]],"\n",["p",{"class":"fp-ad__h2"},["впервые в истории третьей эмиграции"]],"\n",["p",{"class":"fp-ad__h1"},["подготовило экскурсионный маршрут"]],"\n",["p",{"class":"fp-ad__h2"},["Нью-Йорк — Лондон — Париж"]],"\n",["p",{"class":"fp-ad__h2"},["9 дней (21 марта – 29 марта)"]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},["Экскурсию ведет на ",["b",{},["русском языке профессиональный гид"]],"."]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},["• Бюро рассылает всем желающим подробное описание маршрута."]],"\n",["p",{"class":"fp-ad__p"},["• Бюро содействует в получении Travel паспорта и виз."]],"\n",["p",{"class":"fp-ad__p"},["• (Для путешествия Green card не обязательна)"]],"\n",["p",{"class":"fp-ad__p"},["• Последний день заявок и внесение депозита: 15 января 1981 года"]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},["Справки по телефону (212) 871-0436"]],"\n"]],"\n",["p",{"class":"na-citation fp-shelf__cite"},["№ 45"]],"\n"]],"\n"]],"\n"]],"\n",["section",{"class":"na-col fp-s45 fp-strat fp-strat--partners","aria-labelledby":"fp-strat-partners","lang":"en"},["\n",["div",{"class":"fp-strat__head"},["\n",["h3",{"class":"fp-shelf__name","id":"fp-strat-partners"},["Partners and reader discounts"]],"\n"]],"\n",["div",{"class":"fp-strat__ads"},["\n",["article",{"class":"fp-strat__ad na-frame na-frame--double"},["\n",["div",{"class":"fp-shelf__ad","lang":"ru","style":"--ad-fs: 13px"},["\n",["p",{"class":"fp-ad__h1"},["Для читателей «НА» специальная скидка!!"]],"\n",["p",{"class":"fp-ad__h2"},["(M & A)"]],"\n",["p",{"class":"fp-ad__h1"},["G & G Auto Service"]],"\n",["p",{"class":"fp-ad__p"},["Покажите это объявление ",["b",{},["Майку"]],", и вы сэкономите десятки долларов."]],"\n",["p",{"class":"fp-ad__p"},["К Майку стоит приехать издалека."]],"\n",["p",{"class":"fp-ad__h2"},["172-15 Liberty Avenue"]],"\n",["p",{"class":"fp-ad__h2"},["угол 172 улицы"]],"\n",["p",{"class":"fp-ad__h2"},["Jamaica, New York 11433"]],"\n",["p",{"class":"fp-ad__p"},["Все виды ремонта у первоклассных специалистов. Ремонтируются машины любых марок."]],"\n",["p",{"class":"fp-ad__h1"},["Обращайтесь к Майку!"]],"\n",["p",{"class":"fp-ad__h2"},["Тел.: (212) 523-0258"]],"\n"]],"\n",["p",{"class":"na-citation fp-shelf__cite"},["№ 24, 25, 26"]],"\n"]],"\n",["article",{"class":"fp-strat__ad na-frame na-frame--hair"},["\n",["div",{"class":"fp-shelf__ad","lang":"ru","style":"--ad-fs: 15px"},["\n",["p",{"class":"fp-ad__h1"},["Г-жа Фаня предлагает:"]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Авиабилеты"]]," по специальным ценам для читателей «НА». Билеты во все страны и по Америке. Для желающих посетить [Израиль …] […], гостиницы, билеты по сниж. ценам. В нашем филиале в Тель-Авиве — обслуживание на русском языке. ",["b",{},["Говорим по-русски"]]]],"\n",["p",{"class":"fp-ad__h2"},["Messeri Travel Agency Co, Inc."]],"\n",["p",{"class":"fp-ad__h2"},["50 East 42nd Street New York, N.Y. 10017"]],"\n",["p",{"class":"fp-ad__h2"},["(212) 490-0036"]],"\n"]],"\n",["p",{"class":"na-citation fp-shelf__cite"},["№ 24, 25, 26, 27, 28"]],"\n"]],"\n",["article",{"class":"fp-strat__ad na-frame na-frame--heavy"},["\n",["div",{"class":"fp-shelf__ad","lang":"ru","style":"--ad-fs: 20px"},["\n",["p",{"class":"fp-ad__p"},["Газету «Новый американец» можно приобрести в магазине"]],"\n",["p",{"class":"fp-ad__h1"},["Lox Town"]],"\n",["p",{"class":"fp-ad__h2"},["64-19 108th Street • Forest Hills, N.Y."]],"\n",["p",{"class":"fp-ad__p"},["Там же — русские деликатесы плюс американский сервис!"]],"\n"]],"\n",["p",{"class":"na-citation fp-shelf__cite"},["№ 24, 25, 26, 27, 28, 29, 30, 31, 33, 37, 42"]],"\n"]],"\n"]],"\n"]],"\n",["section",{"class":"na-col fp-s45 fp-strat fp-strat--hiring","aria-labelledby":"fp-strat-hiring","lang":"en"},["\n",["div",{"class":"fp-strat__head"},["\n",["h3",{"class":"fp-shelf__name","id":"fp-strat-hiring"},["Hiring"]],"\n"]],"\n",["div",{"class":"fp-strat__ads"},["\n",["article",{"class":"fp-strat__ad na-frame na-frame--heavy"},["\n",["div",{"class":"fp-shelf__ad","lang":"ru"},["\n",["p",{"class":"fp-ad__h1"},["Help Wanted"]],"\n",["p",{"class":"fp-ad__h2"},["Salesperson"]],"\n",["p",{"class":"fp-ad__h2"},["Sell Advertising"]],"\n",["p",{"class":"fp-ad__h2"},["Experienced"]],"\n",["p",{"class":"fp-ad__p"},["Full Time"]],"\n",["p",{"class":"fp-ad__p"},["Call for interview"]],"\n",["p",{"class":"fp-ad__h2"},["(212) 691-7664"]],"\n"]],"\n",["p",{"class":"na-citation fp-shelf__cite"},["№ 7, 11"]],"\n"]],"\n"]],"\n"]],"\n",["section",{"class":"na-col fp-s45 fp-strat fp-strat--books","aria-labelledby":"fp-strat-books","lang":"en"},["\n",["div",{"class":"fp-strat__head"},["\n",["h3",{"class":"fp-shelf__name","id":"fp-strat-books"},["The bookshop"]],"\n"]],"\n",["div",{"class":"fp-strat__ads fp-strat__ads--wide"},["\n",["article",{"class":"fp-strat__ad na-frame na-frame--orn na-frame--star"},["\n",["div",{"class":"fp-shelf__ad","lang":"ru","style":"--ad-fs: 13.5px"},["\n",["p",{"class":"fp-ad__h1"},["Книжная лавка «Нового американца»"]],"\n",["p",{"class":"fp-ad__h2"},["Книги издательства «Ардис»"]],"\n",["p",{"class":"fp-ad__p"},["Самые доступные цены на книжном рынке."]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},[["b",{},["Василий Аксенов."]]," «Золотая наша железка»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["$ 5.00"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},[["b",{},["Анна Ахматова."]]," «Четки»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["3.00"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},[["b",{},["Исаак Бабель."]]," «Забытые произведения»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["7.50"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},[["b",{},["Иосиф Бродский."]]," «Часть речи»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["4.50"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},[["b",{},["Иосиф Бродский."]]," «Конец прекрасной эпохи»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["4.50"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},[["b",{},["Михаил Булгаков."]]," «Мастер и Маргарита»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["5.50"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},[["b",{},["Владимир Войнович."]]," «Иванькиада»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["4.00"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},[["b",{},["Николай Гумилев."]]," «Костер»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["2.50"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},[["b",{},["Сергей Довлатов."]]," «Невидимая книга»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["3.50"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},[["b",{},["Михаил Зощенко."]]," «Рассказы»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["5.00"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},[["b",{},["Осип Мандельштам."]]," «Египетская марка»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["4.00"]]]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__h2"},["Новинки книжной лавки:"]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},[["b",{},["Юз Алешковский."]]," «Николай Николаевич»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["$ 4.50"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},[["b",{},["Л. Белозерская-Булгакова."]]," «О, мед воспоминаний»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["4.50"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},[["b",{},["Андрей Битов."]]," «Пушкинский дом»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["8.00"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},[["b",{},["Сергей Есенин."]]," «Избранное»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["4.00"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},[["b",{},["Евгений Замятин."]]," «Нечестивые рассказы»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["4.50"]]]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Владимир Набоков."]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},["«Дар»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["7.00"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},["«Защита Лужина»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["7.00"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},["«Лолита»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["7.00"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},["«Приглашение на казнь»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["7.00"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},["«Камера обскура»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["7.00"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},["«Подвиг»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["6.00"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},["«Соглядатай»"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["7.00"]]]],"\n",["p",{"class":"fp-ad__p fp-ad__price"},[["span",{"class":"fp-ad__item"},[["b",{},["Андрей Платонов."]]," «Котлован». Предисловие И. Бродского"]],["span",{"class":"fp-ad__lead"},[]],["span",{"class":"fp-ad__cost"},["5.00"]]]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},["Чеки и переводы высылать на адрес редакции."]],"\n"]],"\n",["p",{"class":"na-citation fp-shelf__cite"},["№ 25, 26, 30, 31, 33, 35, 36, 37"]],"\n"]],"\n",["article",{"class":"fp-strat__ad na-frame na-frame--double"},["\n",["div",{"class":"fp-shelf__ad","lang":"ru","style":"--ad-fs: 20px"},["\n",["p",{"class":"fp-ad__h1"},["«Невидимая книга»"]],"\n",["p",{"class":"fp-ad__h1"},["Сергея Довлатова,"]],"\n",["p",{"class":"fp-ad__h2"},["одного из ведущих сотрудников газеты «Новый американец»"]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},["«…Эта вещь — забавная трагедия. Автору нет нужды изобретать шутки, каламбуры и парадоксы, потому что сама по себе несовместимость литературного творчества, которому посвящена книга, с бюрократической действительностью создает парадоксальные, двусмысленные и комические ситуации…» Ардис"]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["«Невидимую книгу» можно заказать по адресу редакции."]]]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Цена с пересылкой — 4.50"]]]],"\n"]],"\n",["p",{"class":"na-citation fp-shelf__cite"},["№ 11, 12, 14, 17, 25, 26, 30, 33, 39"]],"\n"]],"\n"]],"\n"]],"\n",["section",{"class":"na-col fp-s45 fp-tour","aria-labelledby":"fp-tour-h","lang":"en"},["\n",["h3",{"class":"na-chart__title","id":"fp-tour-h","style":"font-family: \"PT Sans Caption\", \"PT Sans\", Verdana, sans-serif; font-size: 26px"},["The editors on tour, 1980"]],"\n",["p",{"class":"na-chart__sub"},["Click a number on the line to open the announcement of the newspaper's event."]],"\n",["div",{"class":"fp-tour__axis"},["\n",["span",{"class":"fp-tour__mon","style":"left: 0.0%"},["Feb"]],"\n",["span",{"class":"fp-tour__mon","style":"left: 8.7%"},["Mar"]],"\n",["span",{"class":"fp-tour__mon","style":"left: 18.0%"},["Apr"]],"\n",["span",{"class":"fp-tour__mon","style":"left: 26.9%"},["May"]],"\n",["span",{"class":"fp-tour__mon","style":"left: 36.2%"},["Jun"]],"\n",["span",{"class":"fp-tour__mon","style":"left: 45.2%"},["Jul"]],"\n",["span",{"class":"fp-tour__mon","style":"left: 54.5%"},["Aug"]],"\n",["span",{"class":"fp-tour__mon","style":"left: 63.8%"},["Sep"]],"\n",["span",{"class":"fp-tour__mon","style":"left: 72.8%"},["Oct"]],"\n",["span",{"class":"fp-tour__mon","style":"left: 82.0%"},["Nov"]],"\n",["span",{"class":"fp-tour__mon","style":"left: 91.0%"},["Dec"]],"\n",["button",{"type":"button","class":"fp-tour__stop","style":"left: 17.4%","aria-pressed":"{{tour.s1}}","aria-controls":"fp-gig-1","onclick":"{{tour.p1}}"},["1"]],"\n",["button",{"type":"button","class":"fp-tour__stop fp-tour__stop--up","style":"left: 25.7%","aria-pressed":"{{tour.s2}}","aria-controls":"fp-gig-2","onclick":"{{tour.p2}}"},["2"]],"\n",["button",{"type":"button","class":"fp-tour__stop","style":"left: 32.0%","aria-pressed":"{{tour.s3}}","aria-controls":"fp-gig-3","onclick":"{{tour.p3}}"},["3"]],"\n",["button",{"type":"button","class":"fp-tour__stop fp-tour__stop--up","style":"left: 34.1%","aria-pressed":"{{tour.s4}}","aria-controls":"fp-gig-4","onclick":"{{tour.p4}}"},["4"]],"\n",["button",{"type":"button","class":"fp-tour__stop","style":"left: 36.2%","aria-pressed":"{{tour.s5}}","aria-controls":"fp-gig-5","onclick":"{{tour.p5}}"},["5"]],"\n",["button",{"type":"button","class":"fp-tour__stop fp-tour__stop--up","style":"left: 42.5%","aria-pressed":"{{tour.s6}}","aria-controls":"fp-gig-6","onclick":"{{tour.p6}}"},["6"]],"\n",["button",{"type":"button","class":"fp-tour__stop","style":"left: 86.5%","aria-pressed":"{{tour.s7}}","aria-controls":"fp-gig-7","onclick":"{{tour.p7}}"},["7"]],"\n",["button",{"type":"button","class":"fp-tour__stop fp-tour__stop--up","style":"left: 94.9%","aria-pressed":"{{tour.s8}}","aria-controls":"fp-gig-8","onclick":"{{tour.p8}}"},["8"]],"\n",["button",{"type":"button","class":"fp-tour__stop","style":"left: 99.1%","aria-pressed":"{{tour.s9}}","aria-controls":"fp-gig-9","onclick":"{{tour.p9}}"},["9"]],"\n"]],"\n",["p",{"class":"na-citation fp-tour__hint"},["{{tour.hint}}"]],"\n",["ol",{"class":"fp-tour__list"},["\n",["li",{"class":"fp-gig {{tour.g1}}","id":"fp-gig-1"},[["p",{"class":"fp-gig__top"},[["span",{"class":"fp-gig__n na-tab"},["1"]],["span",{"class":"fp-gig__date"},["30 Mar"]]]],"\n",["div",{"class":"fp-shelf__ad","lang":"ru"},["\n",["p",{"class":"fp-ad__h1"},["Russian American Club"]],"\n",["p",{"class":"fp-ad__h2"},["Elizabeth, New Jersey"]],"\n",["p",{"class":"fp-ad__h2"},["30 марта, в воскресенье, в 3 часа дня"]],"\n",["p",{"class":"fp-ad__p"},["приглашает на встречу с выездной редакцией еженедельника «Новый американец»."]],"\n",["p",{"class":"fp-ad__p"},["О планах редакции расскажут"]],"\n",["p",{"class":"fp-ad__h2"},["С. Довлатов, Л. Кафанова, А. Лимбергер, Ф. Незнанский, Б. Меттер, А. Орлов, Е. Рубин."]],"\n",["p",{"class":"fp-ad__p"},["Адрес клуба: “Y” Green Lane Union, N.J."]],"\n",["p",{"class":"fp-ad__p"},["Справки по телефонам: (201) 965-1848 и (212) 691-7664."]],"\n",["p",{"class":"fp-ad__h2"},["Вход свободный."]],"\n"]],"\n",["p",{"class":"na-citation fp-shelf__cite"},["№ 7"]],"\n"]],"\n",["li",{"class":"fp-gig {{tour.g2}}","id":"fp-gig-2"},[["p",{"class":"fp-gig__top"},[["span",{"class":"fp-gig__n na-tab"},["2"]],["span",{"class":"fp-gig__date"},["27 Apr"]]]],"\n",["div",{"class":"fp-shelf__ad","lang":"ru"},["\n",["p",{"class":"fp-ad__h1"},["Культурный центр творческой интеллигенции"]],"\n",["p",{"class":"fp-ad__h2"},["В 15.00, 27 апреля по адресу"]],"\n",["p",{"class":"fp-ad__h2"},["Forest Hills Jewish Center, 106-06 Queens Boulevard"]],"\n",["p",{"class":"fp-ad__p"},["(можно доехать tr. E, F, GG, N, ост. Forest Hills или 71 Continental)"]],"\n",["p",{"class":"fp-ad__h1"},["Спортивные встречи"]],"\n",["p",{"class":"fp-ad__p"},["У нас в гостях специальные корреспонденты газеты «Новый американец»."]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Эдуард Штейн"]]," — пресс-атташе В. Корчного на матче с Т. Петросяном: ",["i",{},["Корчной о шахматах и о себе."]]]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Евгений Рубин:"]]," ",["i",{},["Зимняя олимпиада в Лейк Пласид."]]]],"\n"]],"\n",["p",{"class":"na-citation fp-shelf__cite"},["№ 11"]],"\n"]],"\n",["li",{"class":"fp-gig {{tour.g3}}","id":"fp-gig-3"},[["p",{"class":"fp-gig__top"},[["span",{"class":"fp-gig__n na-tab"},["3"]],["span",{"class":"fp-gig__date"},["18 May"]]]],"\n",["div",{"class":"fp-shelf__ad","lang":"ru"},["\n",["p",{"class":"fp-ad__h1"},["Воскресный клуб в Forest Hills"]],"\n",["p",{"class":"fp-ad__h2"},["18 мая"]],"\n",["p",{"class":"fp-ad__h2"},["Начало: 11 утра"]],"\n",["p",{"class":"fp-ad__h1"},["Выездное заседание редакции «Нового американца»"]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},["1. ",["b",{},["Б. Меттер."]]," ",["i",{},["Как я стал акулой Уолл-стрита"]]]],"\n",["p",{"class":"fp-ad__p"},["2. ",["b",{},["С. Довлатов."]]," ",["i",{},["Воспоминание бывшего ребенка"]]]],"\n",["p",{"class":"fp-ad__p"},["3. ",["b",{},["А. Генис."]]," ",["i",{},["Брайтон Бич — маленькая Одесса, Forest Hills — маленький Брайтон Бич"]]]],"\n",["p",{"class":"fp-ad__p"},["4. На вопросы зрителей отвечают сотрудники редакции: ",["b",{},["Л. Кафанова, П. Вайль, А. Орлов, Ф. Незнанский"]]]],"\n",["p",{"class":"fp-ad__p"},["5. Планирование очередного номера с участием зрителей."]],"\n",["p",{"class":"fp-ad__p"},["6. Нечто безответственное."]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__h2"},["Вход свободный"]],"\n",["p",{"class":"fp-ad__h2"},["В помещении 157 школы, угол 64 Ave. и 102 Str."]],"\n"]],"\n",["p",{"class":"na-citation fp-shelf__cite"},["№ 14"]],"\n"]],"\n",["li",{"class":"fp-gig {{tour.g4}}","id":"fp-gig-4"},[["p",{"class":"fp-gig__top"},[["span",{"class":"fp-gig__n na-tab"},["4"]],["span",{"class":"fp-gig__date"},["25 May"]]]],"\n",["div",{"class":"fp-shelf__ad","lang":"ru"},["\n",["p",{"class":"fp-ad__h2"},["Brighton Jewish Community Council"]],"\n",["p",{"class":"fp-ad__h2"},["В воскресенье 25 мая"]],"\n",["p",{"class":"fp-ad__h2"},["Начало в 5 час. дня"]],"\n",["p",{"class":"fp-ad__h1"},["Выездное заседание редакции «Нового американца» на Брайтон Бич"]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},["1. ",["b",{},["Б. Меттер."]]," ",["i",{},["Как я стал акулой Уолл-стрита"]]]],"\n",["p",{"class":"fp-ad__p"},["2. ",["b",{},["С. Довлатов."]]," ",["i",{},["Воспоминание бывшего ребенка."]]]],"\n",["p",{"class":"fp-ad__p"},["3. ",["b",{},["А. Генис."]]," ",["i",{},["Брайтон Бич — маленькая Одесса"]]]],"\n",["p",{"class":"fp-ad__p"},["4. На вопросы зрителей отвечают сотрудники редакции: ",["b",{},["Л. Кафанова, П. Вайль, А. Орлов, Ф. Незнанский"]]]],"\n",["p",{"class":"fp-ad__p"},["5. Планирование очередного номера с участием зрителей"]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},["После встречи: сеанс одновременной игры в шашки даст трехкратный чемпион США гроссмейстер Владимир Каплан."]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__h2"},["Вход свободный"]],"\n",["p",{"class":"fp-ad__h2"},["Sephardic Temple Torah Israel"]],"\n",["p",{"class":"fp-ad__h2"},["60 Brighton 11th Street"]],"\n"]],"\n",["p",{"class":"na-citation fp-shelf__cite"},["№ 15"]],"\n"]],"\n",["li",{"class":"fp-gig {{tour.g5}}","id":"fp-gig-5"},[["p",{"class":"fp-gig__top"},[["span",{"class":"fp-gig__n na-tab"},["5"]],["span",{"class":"fp-gig__date"},["1 Jun"]]]],"\n",["div",{"class":"fp-shelf__ad","lang":"ru"},["\n",["p",{"class":"fp-ad__h1"},["Вниманию жителей Фарраковей!"]],"\n",["p",{"class":"fp-ad__h2"},["В воскресенье 1 июня в 2 часа дня"]],"\n",["p",{"class":"fp-ad__h2"},["в помещении Bayswater Jewish Center"]],"\n",["p",{"class":"fp-ad__p"},["будет показан спектакль Нью-Йоркского театра миниатюр"]],"\n",["p",{"class":"fp-ad__h1"},["«Ах, Америка! или 100 минут смеха»"]],"\n",["p",{"class":"fp-ad__p"},["Сверх программы: книжный базар, встреча с редакцией «Нового американца»"]],"\n"]],"\n",["p",{"class":"na-citation fp-shelf__cite"},["№ 16"]],"\n"]],"\n",["li",{"class":"fp-gig {{tour.g6}}","id":"fp-gig-6"},[["p",{"class":"fp-gig__top"},[["span",{"class":"fp-gig__n na-tab"},["6"]],["span",{"class":"fp-gig__date"},["22 Jun"]]]],"\n",["div",{"class":"fp-shelf__ad","lang":"ru"},["\n",["p",{"class":"fp-ad__h2"},["В воскресенье 22 июня"]],"\n",["p",{"class":"fp-ad__h2"},["Начало в 12 час. дня"]],"\n",["p",{"class":"fp-ad__h1"},["Выездное заседание редакции «Нового американца» в Джексон Хайтс"]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},["1. ",["b",{},["Б. Меттер."]]," ",["i",{},["Как я стал акулой Уолл-стрита"]]]],"\n",["p",{"class":"fp-ad__p"},["2. ",["b",{},["С. Довлатов"]]," ",["i",{},["Воспоминание бывшего ребенка"]]]],"\n",["p",{"class":"fp-ad__p"},["3. ",["b",{},["А. Генис."]]," ",["i",{},["Брайтон Бич — маленькая Одесса"]]]],"\n",["p",{"class":"fp-ad__p"},["4. На вопросы зрителей отвечают сотрудники редакции: ",["b",{},["Л. Кафанова, П. Вайль, А. Орлов"]]]],"\n",["p",{"class":"fp-ad__p"},["5. Планирование очередного номера с участием зрителей"]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__h2"},["Вход свободный"]],"\n",["p",{"class":"fp-ad__h2"},["Congregation Tifereth Israel"]],"\n",["p",{"class":"fp-ad__h2"},["88th Street & 32nd Avenue, Jackson Heights, N.Y."]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},["В ближайшее время состоится выступление редакции «Нового американца» в Балтиморе."]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Следите за объявлениями!"]]]],"\n"]],"\n",["p",{"class":"na-citation fp-shelf__cite"},["№ 18, 19"]],"\n"]],"\n",["li",{"class":"fp-gig {{tour.g7}}","id":"fp-gig-7"},[["p",{"class":"fp-gig__top"},[["span",{"class":"fp-gig__n na-tab"},["7"]],["span",{"class":"fp-gig__date"},["16 Nov"]]]],"\n",["div",{"class":"fp-shelf__ad","lang":"ru"},["\n",["p",{"class":"fp-ad__h1"},["Жители Бостона и его окрестностей! у вас в гостях"]],"\n",["p",{"class":"fp-ad__h1"},["«Новый американец»"]],"\n",["p",{"class":"fp-ad__h2"},["16 ноября, воскресенье, в 7 час. вечера"]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Сергей Довлатов"]]," — ",["i",{},["Как я редактирую эмигрантскую газету"]]]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Александр Гальперин"]]," — ",["i",{},["Свобода и информация"]]]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Петр Вайль и Александр Генис"]]," — ",["i",{},["Лимонов и эмиграция"]]]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Александр Батчан и Наталия Шарымова"]]," — ",["i",{},["Москва — Нью-Йорк — Голливуд"]]]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Алексей Орлов"]]," — ",["i",{},["«Маккавеи» на баскетбольных площадках"]]]],"\n",["p",{"class":"fp-ad__p"},["Во встрече участвует собственный корреспондент «НА» в Израиле ",["b",{},["Л. Иерушалмит."]]]],"\n",["p",{"class":"fp-ad__p"},["Вы спрашиваете — мы отвечаем."]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},["Встреча состоится:"]],"\n",["p",{"class":"fp-ad__h2"},["Jewish Community Center"]],"\n",["p",{"class":"fp-ad__h2"},["50 Sutherland Rd., Brookline."]],"\n",["p",{"class":"fp-ad__p"},["Вы увидите фотовыставку корреспондентов «НА» ",["b",{},["Нины Аловерт"]]," и ",["b",{},["Наталии Шарымовой."]]]],"\n",["p",{"class":"fp-ad__p"},["Справки по телефону: 617-734-0800 (Темма Клибанер)"]],"\n",["p",{"class":"fp-ad__h2"},["Вход свободный"]],"\n"]],"\n",["p",{"class":"na-citation fp-shelf__cite"},["№ 39, 40"]],"\n"]],"\n",["li",{"class":"fp-gig {{tour.g8}}","id":"fp-gig-8"},[["p",{"class":"fp-gig__top"},[["span",{"class":"fp-gig__n na-tab"},["8"]],["span",{"class":"fp-gig__date"},["14 Dec"]]]],"\n",["div",{"class":"fp-shelf__ad","lang":"ru"},["\n",["p",{"class":"fp-ad__h1"},["Small Business Administration"]],"\n",["p",{"class":"fp-ad__h2"},["(Администрация малых бизнесов)"]],"\n",["p",{"class":"fp-ad__h2"},["совместно с редакцией еженедельника"]],"\n",["p",{"class":"fp-ad__h1"},["«Новый американец»"]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Проводит семинар"]]," для владельцев «малых бизнесов» и тех, кто собирается открыть «своё дело»."]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},[["i",{},["В семинаре примут участие:"]]]],"\n",["p",{"class":"fp-ad__p"},["1. Официальный представитель Н. Й. отделения SBA"]],"\n",["p",{"class":"fp-ad__p"},["2. Адвокат"]],"\n",["p",{"class":"fp-ad__p"},["3. Экономист"]],"\n",["p",{"class":"fp-ad__p"},["4. Консультант по вопросам рекламы"]],"\n",["p",{"class":"fp-ad__p"},["5. Ответы на вопросы"]],"\n",["p",{"class":"fp-ad__p"},["От редакции «НА» в семинаре примет участие синхронный переводчик."]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},["Семинар состоится в банкетном зале ресторана ",["b",{},["«Сокол»"]],". (Форма одежды — нарядная) в воскресение ",["b",{},["14 декабря 1980 г. с 12:00 до 18:00."]]]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Учасникам семинаря будет подан ланч."]]]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Желающих принять участие в семинаре просим зарезервировать места за столиками."]]]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Это можно сделать по телефону: (212) 691-7664 или письменно по адресу:"]]]],"\n",["p",{"class":"fp-ad__h2"},["New American"]],"\n",["p",{"class":"fp-ad__h2"},["One Union Square, Suite 214"]],"\n",["p",{"class":"fp-ad__h2"},["New York, N.Y. 10003"]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},[["i",{},["Малый бизнес — дело семейное. Приходите вдвоем!"]]]],"\n",["p",{"class":"fp-ad__p"},["Стоимость 1 билета — $7.00."]],"\n",["p",{"class":"fp-ad__p"},["(Напитки заказывать на месте)"]],"\n"]],"\n",["p",{"class":"na-citation fp-shelf__cite"},["№ 41, 42, 43, 44"]],"\n"]],"\n",["li",{"class":"fp-gig {{tour.g9}}","id":"fp-gig-9"},[["p",{"class":"fp-gig__top"},[["span",{"class":"fp-gig__n na-tab"},["9"]],["span",{"class":"fp-gig__date"},["28 Dec"]]]],"\n",["div",{"class":"fp-shelf__ad","lang":"ru"},["\n",["p",{"class":"fp-ad__h1"},["Жители Вашингтон Хайтс и окрестностей"]],"\n",["p",{"class":"fp-ad__h2"},["У вас в гостях"]],"\n",["p",{"class":"fp-ad__h1"},["«Новый американец»"]],"\n",["p",{"class":"fp-ad__h2"},["28 декабря, воскресенье, 2 часа дня"]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Сергей Довлатов."]]," ",["i",{},["Американская мечта"]]]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Александр Гальперин"]]," ",["i",{},["Наш новый президент"]]]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Петр Вайль и Александр Генис"]]," ",["i",{},["Три волны эмиграции и их пресса"]]]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Григорий Рыскин"]]," ",["i",{},["Неудачник в Америке"]]]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Александр Батчан и Наталия Шарымова"]]," ",["i",{},["Москва — Париж — Нью-Йорк"]]]],"\n",["p",{"class":"fp-ad__p"},[["b",{},["Алексей Орлов."]]," ",["i",{},["Болельщик в Америке"]]]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},["Выставка фоторабот корреспондентов «НА» ",["b",{},["Нины Аловерт и Наталии Шарымовой"]]]],"\n",["p",{"class":"fp-ad__gap"},[]],"\n",["p",{"class":"fp-ad__p"},["Встреча читателей «НА» с редакцией «НА» состоится:"]],"\n",["p",{"class":"fp-ad__h2"},["“Y and YWHA”, Washington Hts and Inwood"]],"\n",["p",{"class":"fp-ad__h2"},["Адрес: 54 Nagle Avenue"]],"\n",["p",{"class":"fp-ad__p"},["Недалеко от Бродвея и станции метро — 190-я улица. Проехать можно маршрутом метро A"]],"\n",["p",{"class":"fp-ad__p"},["Справки по телефону 212-569-6200 (спросить Надю Хайкину)"]],"\n"]],"\n",["p",{"class":"na-citation fp-shelf__cite"},["№ 43, 44, 45, 46"]],"\n"]],"\n"]],"\n",["p",{"class":"na-citation fp-s2__foot"},["The paper’s own notices ran so regularly that not all of them were entered in the table, so this section shows what ",["i",{},["Novyi Amerikanets"]]," did rather than how often it advertised."]],"\n"]],"\n"],"bibliography":["\n",["header",{"class":"na-col fp-sec1head","id":"bibliography","lang":"en"},["\n",["hr",{"class":"na-rule na-rule--oxford"},[]],"\n",["p",{"class":"na-kicker"},["APPENDIX"]],"\n",["h2",{"class":"na-h2"},["Bibliography"]],"\n"]],"\n",["section",{"class":"na-col fp-bib","aria-label":"Bibliography","lang":"en"},["\n",["ol",{"class":"fp-bib__list"},["\n",["li",{"class":"fp-bib__item"},["Anderson, Benedict. ",["i",{},["Imagined Communities: Reflections on the Origin and Spread of Nationalism"]],". London: Verso, 2006."]],"\n",["li",{"class":"fp-bib__item"},["Dovlatov, Sergei. ",["i",{},["Marsh odinokikh"]],". Saint-Petersburg: AZBUKA, 2015."]],"\n",["li",{"class":"fp-bib__item"},["Dovlatov, Sergei. ",["i",{},["Epistoliarnyi roman "]],["i",{},["s Igorem Efimovym"]],". Moscow: Zakharov, 2001."]],["li",{"class":"fp-bib__item"},["Dovlatov, Sergei. ",["i",{},["Remeslo"]],". Ann Arbor: Ardis, 1985."]],"\n",["li",{"class":"fp-bib__item"},[["i",{},["Novyi amerikanets"]]," (New York). № 1–46, February–December 1980."]],"\n",["li",{"class":"fp-bib__item"},["OpenStreetMap contributors. “OpenStreetMap.” Accessed November 2026. https://www.openstreetmap.org."]],"\n",["li",{"class":"fp-bib__item"},["Park, Robert E. ",["i",{},["The Immigrant Press and Its Control"]],". New York: Harper & Brothers, 1922."]],"\n"]],"\n"]],"\n"]};
(function () {
  var T = window.__dcTrees, C = window.__dc;
  var s4 = document.createElement("div"), bib = document.createElement("div");
  s4.className = bib.className = "dc-slot";
  dcMount(document.getElementById("page"), T.main, C.main, { section4: s4, bibliography: bib });
  dcMount(s4, T.section4, C.section4);
  dcMount(bib, T.bibliography, C.bibliography);
  if (location.hash) { var t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }
})();
