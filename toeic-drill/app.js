'use strict';
/* TOEIC Drill — 文法・読解・リスニングの「解く練習」アプリ（ビルド不要の静的アプリ） */

const EXAM_DATE = '2026-11-15';
const STORE_KEY = 'toeicDrill.v1';
const CAT = { pos: '品詞', tense: '時制・態', prep: '前置詞', conj: '接続詞', rel: '関係詞', usage: '語法' };
const PART_NAME = { p5: 'Part 5', rd: '長文', p2: 'Part 2', p3: 'Part 3' };
const LETTERS = ['A', 'B', 'C', 'D'];
const TIMED_SEC = 20;
const DEMO = /[?&]demo=1/.test(location.search);

/* ---------- 小道具 ---------- */
const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
function hash(s) { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); }
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function ymd(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function today() { return ymd(new Date()); }
function addDays(s, n) { const [y, m, d] = s.split('-').map(Number); return ymd(new Date(y, m - 1, d + n)); }
function daysBetween(a, b) { const p = (s) => { const [y, m, d] = s.split('-').map(Number); return Date.UTC(y, m - 1, d); }; return Math.round((p(b) - p(a)) / 864e5); }
function pct(c, n) { return n ? Math.round((c / n) * 100) + '%' : '—'; }
function weightedSample(pool, n, wf) {
  const items = pool.map((x) => ({ x, w: Math.max(0.01, wf(x)) })); const out = [];
  while (out.length < n && items.length) {
    const tot = items.reduce((s, i) => s + i.w, 0); let r = Math.random() * tot; let k = 0;
    for (; k < items.length - 1; k++) { r -= items[k].w; if (r <= 0) break; }
    out.push(items.splice(k, 1)[0].x);
  }
  return out;
}

/* ---------- 問題データの読み込み ---------- */
const DB = { p5: [], sets: [], p2: [], p3: [], byId: {} };
(window.P5 || []).forEach(([tag, s, o, ex]) => {
  const q = { id: 'p5' + hash(s), kind: 'p5', tag, cat: tag.split('/')[0], s, o, ans: o[0], ex };
  DB.p5.push(q); DB.byId[q.id] = q;
});
(window.READING || []).forEach((r) => {
  const id = 'rd' + hash(r.title + r.text.slice(0, 80));
  const set = { id, kind: 'rd', type: r.type, genre: r.genre, title: r.title, text: r.text, qs: [] };
  r.qs.forEach(([q, o, ev, ex, tag], i) => { const x = { id: id + '-' + i, kind: 'rd', set: id, q, o, ans: o[0], ev, ex, tag: tag || null }; set.qs.push(x); DB.byId[x.id] = x; });
  DB.sets.push(set); DB.byId[id] = set;
});
const LIS = window.LISTENING || { p2: [], p3: [] };
LIS.p2.forEach(([s, o, ex]) => { const q = { id: 'p2' + hash(s), kind: 'p2', s, o, ans: o[0], ex }; DB.p2.push(q); DB.byId[q.id] = q; });
LIS.p3.forEach((c) => {
  const id = 'p3' + hash(c.lines.map((l) => l[1]).join(' '));
  const set = { id, kind: 'p3', title: c.title, lines: c.lines, qs: [] };
  c.qs.forEach(([q, o, ev, ex], i) => { const x = { id: id + '-' + i, kind: 'p3', set: id, q, o, ans: o[0], ev, ex }; set.qs.push(x); DB.byId[x.id] = x; });
  DB.p3.push(set); DB.byId[id] = set;
});
const GLOSS = window.GLOSSARY || {};

/* ---------- 記録（localStorage。失敗しても動く） ---------- */
function blankState() { return { v: 1, items: {}, log: {}, tags: {}, seen: {}, menu: null, timed: [], settings: { rate: 0.95, showText: false } }; }
let S = blankState();
let storageOK = true;
function loadState() {
  if (DEMO) { S = demoState(); return; }
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) S = Object.assign(blankState(), JSON.parse(raw));
  } catch (e) { storageOK = false; S = blankState(); }
  S.settings = Object.assign(blankState().settings, S.settings || {});
}
function saveState() {
  if (DEMO) return;
  try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); storageOK = true; } catch (e) { storageOK = false; }
  showNotice();
}
function showNotice() {
  const n = $('#notice');
  if (!storageOK) { n.hidden = false; n.textContent = 'この端末では記録を保存できません（プライベートモード等）。解くことはできますが、閉じると記録は消えます。'; }
  else n.hidden = true;
}

/* 間隔反復：間違えた問題は 翌日→3日後→7日後（間違えた日から数えて）に戻る。正解した問題は間隔を広げる */
function record(id, ok, part, tag) {
  const t = today();
  const r = S.items[id] || { n: 0, c: 0 };
  const isNew = r.n === 0;
  r.n++; if (ok) r.c++;
  if (!ok) { r.s = 0; r.due = addDays(t, 1); }
  else if (isNew) { r.s = 9; r.due = addDays(t, 14); }
  else if (r.s === 0) { r.s = 1; r.due = addDays(t, 2); }
  else if (r.s === 1) { r.s = 2; r.due = addDays(t, 4); }
  else { r.s = Math.max(r.s, 3) === 9 ? 9 : 3; r.due = addDays(t, r.s === 9 ? 30 : 21); }
  r.last = t;
  S.items[id] = r;
  const L = S.log[t] || (S.log[t] = { n: 0, c: 0, p: {} });
  L.n++; if (ok) L.c++;
  const pp = L.p[part] || (L.p[part] = [0, 0]); pp[0]++; if (ok) pp[1]++;
  if (tag) { const g = S.tags[tag] || (S.tags[tag] = [0, 0]); g[0]++; if (ok) g[1]++; }
  saveState();
}
const isDue = (id) => { const r = S.items[id]; return !!(r && r.due && r.due <= today()); };
const isSeen = (id) => !!S.items[id];
const setDue = (set) => set.qs.some((q) => isDue(q.id));
const setSeen = (set) => set.qs.some((q) => isSeen(q.id));
function tagWeight(tag) {
  const g = S.tags[tag] || [0, 0]; const cat = tag.split('/')[0];
  let cn = 0, cc = 0; Object.keys(S.tags).forEach((k) => { if (k.split('/')[0] === cat) { cn += S.tags[k][0]; cc += S.tags[k][1]; } });
  const err = (g[0] - g[1] + 1) / (g[0] + 3); const cerr = (cn - cc + 1) / (cn + 3);
  return 0.3 + err * 1.5 + cerr * 1.5;
}

/* ---------- 出題の選び方 ---------- */
function pickP5(n, filter) {
  const pool = DB.p5.filter(filter || (() => true));
  let out = shuffle(pool.filter((q) => isDue(q.id))).slice(0, n);
  if (out.length < n) out = out.concat(weightedSample(pool.filter((q) => !isSeen(q.id)), n - out.length, (q) => tagWeight(q.tag)));
  if (out.length < n) {
    const rest = pool.filter((q) => !out.includes(q)).sort((a, b) => (S.items[a.id].due < S.items[b.id].due ? -1 : 1));
    out = out.concat(rest.slice(0, n - out.length));
  }
  return out.map((q) => q.id);
}
function pickSets(list, n, filter) {
  const pool = list.filter(filter || (() => true));
  let out = shuffle(pool.filter(setDue)).slice(0, n);
  if (out.length < n) out = out.concat(shuffle(pool.filter((s) => !setSeen(s))).slice(0, n - out.length));
  if (out.length < n) out = out.concat(shuffle(pool.filter((s) => !out.includes(s))).slice(0, n - out.length));
  return out.map((s) => s.id);
}
function pickP2(n) {
  let out = shuffle(DB.p2.filter((q) => isDue(q.id))).slice(0, n);
  if (out.length < n) out = out.concat(shuffle(DB.p2.filter((q) => !isSeen(q.id))).slice(0, n - out.length));
  if (out.length < n) out = out.concat(shuffle(DB.p2.filter((q) => !out.includes(q))).slice(0, n - out.length));
  return out.map((q) => q.id);
}
const unitOf = (id) => { const x = DB.byId[id]; return { type: x.kind === 'p5' ? 'p5' : x.kind === 'p2' ? 'p2' : 'set', id }; };
const unitMinutes = (id) => { const x = DB.byId[id]; return x.kind === 'p5' ? 0.5 : x.kind === 'p2' ? 0.6 : x.kind === 'p3' ? 3 : 1.5 + x.qs.length * 1.2; };

/* 今日のメニュー：アプリに使う 30〜40 分ぶん。復習を先に入れ、新しい Part 5 は苦手な項目を多めに */
function buildMenu() {
  const dueP5 = DB.p5.filter((q) => isDue(q.id)).length;
  const p5n = Math.min(30, Math.max(20, dueP5));
  const blocks = [
    { k: 'p5', title: 'Part 5 短文穴埋め', ids: pickP5(p5n) },
    { k: 'rd', title: 'Part 6・7 長文', ids: pickSets(DB.sets, 1, (s) => s.type === 'p6').concat(pickSets(DB.sets, 2, (s) => s.type === 'p7')) },
    { k: 'ls', title: 'Part 2・3 リスニング', ids: pickP2(8).concat(pickSets(DB.p3, 1)) },
  ];
  blocks.forEach((b) => { b.done = 0; });
  S.menu = { date: today(), blocks };
  saveState();
}

/* ---------- 音声読み上げ ---------- */
const TTS = { voices: [], supported: 'speechSynthesis' in window, token: 0 };
function loadVoices() {
  if (!TTS.supported) return;
  const all = speechSynthesis.getVoices().filter((v) => /^en([-_]|$)/i.test(v.lang));
  const rank = (v) => (/en[-_]US/i.test(v.lang) ? 0 : /en[-_]GB/i.test(v.lang) ? 1 : /en[-_](AU|CA)/i.test(v.lang) ? 2 : 3) - (v.localService ? 0.5 : 0);
  TTS.voices = all.sort((a, b) => rank(a) - rank(b));
}
if (TTS.supported) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
const hasVoice = () => TTS.supported && TTS.voices.length > 0;
function voiceFor(i) {
  const v = TTS.voices; if (!v.length) return null;
  // 話者ごとに別の声（できれば別の国の英語）を割り当てる
  const distinct = []; const langs = new Set();
  v.forEach((x) => { if (!langs.has(x.lang)) { langs.add(x.lang); distinct.push(x); } });
  v.forEach((x) => { if (!distinct.includes(x)) distinct.push(x); });
  return distinct[i % distinct.length];
}
function speakSeq(parts, onDone) {
  if (!hasVoice()) return false;
  speechSynthesis.cancel();
  const token = ++TTS.token; let i = 0;
  const next = () => {
    if (token !== TTS.token) return;
    if (i >= parts.length) { if (onDone) onDone(); return; }
    const p = parts[i++]; const u = new SpeechSynthesisUtterance(p.text);
    const v = voiceFor(p.v || 0); if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'en-US';
    u.rate = S.settings.rate || 0.95;
    u.onend = () => setTimeout(next, p.pause || 450);
    u.onerror = () => setTimeout(next, 100);
    speechSynthesis.speak(u);
  };
  next();
  return true;
}
function stopSpeech() { TTS.token++; if (TTS.supported) try { speechSynthesis.cancel(); } catch (e) { /* noop */ } }

/* ---------- 解説の表示（用語は初めて出たときに説明） ---------- */
function renderEx(text) {
  const terms = [];
  let html = esc(text).replace(/【([^】]+)】/g, (m, t) => { if (!terms.includes(t)) terms.push(t); return '<b class="term">' + t + '</b>'; });
  html = '<div class="ex">' + html + '</div>';
  terms.forEach((t) => {
    if (!S.seen[t] && GLOSS[t]) {
      html += '<div class="gl"><b>新しい用語：' + esc(t) + '</b><br>' + esc(GLOSS[t][0]) + '<br><span class="muted">たとえ：' + esc(GLOSS[t][1]) + '</span></div>';
      S.seen[t] = today();
    }
  });
  return html;
}

/* ---------- 画面：共通 ---------- */
let SES = null; let timerId = null;
function clearTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }
function setTab(name) { document.querySelectorAll('.tabs a').forEach((a) => a.classList.toggle('on', a.dataset.tab === name)); }
function view(html) { $('#view').innerHTML = (DEMO ? '<div class="demo">デモデータを表示しています（スクリーンショット用。保存されません）</div>' : '') + html; window.scrollTo(0, 0); }
function updateCountdown() {
  const d = daysBetween(today(), EXAM_DATE);
  $('#countdown').textContent = d > 0 ? '本番 11/15 まであと ' + d + ' 日' : d === 0 ? '本番当日！' : '本番おつかれさま';
}

function route() {
  clearTimer(); stopSpeech();
  const h = (location.hash || '#menu').slice(1);
  if (h === 'run' && SES) { setTab(SES.tab); return renderUnit(); }
  SES = null;
  const [page, sub] = h.split('/');
  const pages = { menu: renderMenu, p5: renderP5Home, reading: renderReadingHome, listening: renderListeningHome, stats: renderStats, glossary: renderGlossary };
  setTab(page in pages && page !== 'glossary' ? page : page === 'glossary' ? 'stats' : 'menu');
  if (sub === 'run') { // 直接開始（スクリーンショット・ショートカット用）
    if (page === 'p5') return startSession('Part 5 練習', pickP5(10).map(unitOf), { tab: 'p5' });
    if (page === 'reading') return startSession('長文', pickSets(DB.sets, 1, (s) => s.type === 'p7').map(unitOf), { tab: 'reading' });
    if (page === 'listening') return startSession('リスニング', pickP2(10).map(unitOf), { tab: 'listening' });
  }
  (pages[page] || renderMenu)();
}

/* ---------- 今日のメニュー ---------- */
function renderMenu() {
  if (!S.menu || S.menu.date !== today()) buildMenu();
  const m = S.menu;
  const dueTotal = Object.keys(S.items).filter(isDue).length;
  let totalMin = 0, doneMin = 0;
  const blocks = m.blocks.map((b, i) => {
    const mins = b.ids.reduce((s, id) => s + unitMinutes(id), 0); totalMin += mins;
    doneMin += b.ids.slice(0, b.done).reduce((s, id) => s + unitMinutes(id), 0);
    const nq = b.ids.reduce((s, id) => s + (DB.byId[id].qs ? DB.byId[id].qs.length : 1), 0);
    const nReview = b.ids.filter((id) => (DB.byId[id].qs ? setDue(DB.byId[id]) : isDue(id))).length;
    const finished = b.done >= b.ids.length;
    return '<div class="card block"><div><div class="title">' + esc(b.title) + '</div><div class="muted">' + nq + '問・約' + Math.round(mins) + '分' + (nReview ? '・復習 ' + nReview : '') + '</div></div>' +
      '<button class="btn' + (finished ? ' sub' : '') + '" data-block="' + i + '">' + (finished ? 'もう一度' : b.done ? '続きから' : '始める') + '</button>' +
      '<div class="bar"><i style="width:' + Math.round((b.done / b.ids.length) * 100) + '%"></i></div></div>';
  }).join('');
  const t = S.log[today()];
  view('<h1>今日のメニュー</h1>' +
    '<p class="muted">学習2時間のうち、このアプリで解く分（約' + Math.round(totalMin) + '分）。復習 ' + dueTotal + ' 問を先に入れ、新しい問題は苦手な項目を多めに選んでいます。</p>' +
    blocks +
    '<div class="card"><div class="spread"><span>今日解いた問題</span><b>' + (t ? t.n + '問・正答率 ' + pct(t.c, t.n) : '0問') + '</b></div>' +
    '<div class="bar" style="margin-top:8px"><i style="width:' + Math.min(100, Math.round((doneMin / Math.max(1, totalMin)) * 100)) + '%"></i></div></div>' +
    '<button class="btn sub wide" id="remake">メニューを作り直す</button>');
  document.querySelectorAll('[data-block]').forEach((btn) => btn.onclick = () => {
    const i = +btn.dataset.block; const b = S.menu.blocks[i];
    if (b.done >= b.ids.length) b.done = 0;
    startSession(b.title, b.ids.map(unitOf), { tab: 'menu', menuBlock: i, start: b.done });
  });
  $('#remake').onclick = () => { if (confirm('今日のメニューを作り直しますか？（進み具合はリセットされます）')) { buildMenu(); renderMenu(); } };
}

/* ---------- Part 5 ---------- */
let p5Cat = 'all';
function renderP5Home() {
  const pool = DB.p5.filter((q) => p5Cat === 'all' || q.cat === p5Cat);
  const due = pool.filter((q) => isDue(q.id)).length; const seen = pool.filter((q) => isSeen(q.id)).length;
  const chips = ['all'].concat(Object.keys(CAT)).map((k) => '<button class="chip' + (p5Cat === k ? ' on' : '') + '" data-cat="' + k + '">' + (k === 'all' ? 'すべて' : CAT[k]) + '</button>').join('');
  const times = S.timed.slice(-5);
  view('<h1>Part 5 短文穴埋め</h1><div class="chips">' + chips + '</div>' +
    '<div class="card"><div class="muted">' + pool.length + '問中 ' + seen + '問に挑戦済み・今日の復習 ' + due + '問</div></div>' +
    '<div class="card"><div class="title"><b>ふつうの練習</b></div><p class="muted">1問ずつ解いて、すぐ解説を読みます。</p>' +
    '<div class="row"><button class="btn" data-n="10">10問</button><button class="btn" data-n="20">20問</button>' + (due ? '<button class="btn sub" id="dueOnly">復習だけ（' + due + '）</button>' : '') + '</div></div>' +
    '<div class="card"><div class="title"><b>時間計測モード（1問' + TIMED_SEC + '秒）</b></div><p class="muted">本番のペース（Part 5 を1問20秒以内）で解く練習。時間切れは不正解として記録します。</p>' +
    '<div class="row"><button class="btn" data-t="10">10問</button><button class="btn" data-t="30">30問（本番1回分）</button></div>' +
    (times.length ? '<p class="small muted">最近の記録：' + times.map((r) => r.date.slice(5) + ' ' + r.c + '/' + r.n + '（平均' + r.avg + '秒）').join('、') + '</p>' : '') + '</div>');
  document.querySelectorAll('[data-cat]').forEach((b) => b.onclick = () => { p5Cat = b.dataset.cat; renderP5Home(); });
  const f = (q) => p5Cat === 'all' || q.cat === p5Cat;
  document.querySelectorAll('[data-n]').forEach((b) => b.onclick = () => startSession('Part 5 練習', pickP5(+b.dataset.n, f).map(unitOf), { tab: 'p5' }));
  document.querySelectorAll('[data-t]').forEach((b) => b.onclick = () => startSession('Part 5 時間計測', pickP5(+b.dataset.t, f).map(unitOf), { tab: 'p5', timed: true }));
  const d = $('#dueOnly'); if (d) d.onclick = () => startSession('Part 5 復習', pool.filter((q) => isDue(q.id)).map((q) => unitOf(q.id)), { tab: 'p5' });
}

/* ---------- 長文 ---------- */
let rdFilter = 'all';
function renderReadingHome() {
  const list = DB.sets.filter((s) => rdFilter === 'all' || s.type === rdFilter);
  const chips = [['all', 'すべて'], ['p6', 'Part 6'], ['p7', 'Part 7']].map(([k, l]) => '<button class="chip' + (rdFilter === k ? ' on' : '') + '" data-f="' + k + '">' + l + '</button>').join('');
  const rows = list.map((s) => {
    const st = setDue(s) ? '<span class="tag due">復習</span>' : setSeen(s) ? '<span class="tag ok">済</span>' : '';
    return '<a href="javascript:void 0" data-set="' + s.id + '"><span class="tag">' + (s.type === 'p6' ? 'P6' : 'P7') + '</span><span class="tag">' + esc(s.genre) + '</span>' + st + '<br>' + esc(s.title) + ' <span class="muted">（' + s.qs.length + '問）</span></a>';
  }).join('');
  view('<h1>Part 6・7 長文</h1><div class="chips">' + chips + '</div>' +
    '<div class="row" style="margin-bottom:12px"><button class="btn" id="rd1">おまかせ1セット</button><button class="btn sub" id="rd3">おまかせ3セット</button></div>' +
    '<div class="card list">' + rows + '</div>');
  document.querySelectorAll('[data-f]').forEach((b) => b.onclick = () => { rdFilter = b.dataset.f; renderReadingHome(); });
  const f = (s) => rdFilter === 'all' || s.type === rdFilter;
  $('#rd1').onclick = () => startSession('長文', pickSets(DB.sets, 1, f).map(unitOf), { tab: 'reading' });
  $('#rd3').onclick = () => startSession('長文', pickSets(DB.sets, 3, f).map(unitOf), { tab: 'reading' });
  document.querySelectorAll('[data-set]').forEach((a) => a.onclick = () => startSession('長文', [unitOf(a.dataset.set)], { tab: 'reading' }));
}

/* ---------- リスニング ---------- */
function renderListeningHome() {
  const voiceMsg = !TTS.supported ? 'このブラウザは音声読み上げに対応していません。文字表示で解きます。'
    : hasVoice() ? '英語の声：' + TTS.voices.length + '種類（' + esc(voiceFor(0).name) + ' ほか）'
      : 'この端末に英語の声が見つかりません。文字表示で解きます（端末の設定で英語の音声を追加すると読み上げできます）。';
  const due = DB.p2.filter((q) => isDue(q.id)).length + DB.p3.filter(setDue).length;
  view('<h1>Part 2・3 リスニング</h1><div class="card"><div class="muted">' + voiceMsg + '</div>' +
    '<div class="row" style="margin-top:8px"><label>速さ <select id="rate">' + [0.8, 0.9, 0.95, 1, 1.1].map((r) => '<option' + (r === S.settings.rate ? ' selected' : '') + '>' + r + '</option>').join('') + '</select></label>' +
    '<label><input type="checkbox" id="showText"' + (S.settings.showText ? ' checked' : '') + '> 最初から文字を表示</label></div></div>' +
    '<div class="card"><b>Part 2 応答問題</b><p class="muted">問いかけに合う応答を (A)(B)(C) から選ぶ。全' + DB.p2.length + '問。</p><div class="row"><button class="btn" data-p2="10">10問</button><button class="btn sub" data-p2="20">20問</button></div></div>' +
    '<div class="card"><b>Part 3 会話問題</b><p class="muted">2〜3人の会話を聞いて3問に答える。全' + DB.p3.length + '会話。</p><div class="row"><button class="btn" data-p3="1">1会話</button><button class="btn sub" data-p3="3">3会話</button></div></div>' +
    (due ? '<p class="muted">今日の復習：' + due + '</p>' : ''));
  $('#rate').onchange = (e) => { S.settings.rate = +e.target.value; saveState(); };
  $('#showText').onchange = (e) => { S.settings.showText = e.target.checked; saveState(); };
  document.querySelectorAll('[data-p2]').forEach((b) => b.onclick = () => startSession('Part 2', pickP2(+b.dataset.p2).map(unitOf), { tab: 'listening' }));
  document.querySelectorAll('[data-p3]').forEach((b) => b.onclick = () => startSession('Part 3', pickSets(DB.p3, +b.dataset.p3).map(unitOf), { tab: 'listening' }));
}

/* ---------- セッション（出題の進行） ---------- */
function startSession(title, units, opts) {
  opts = opts || {};
  if (!units.length) { alert('出せる問題がありません。'); return; }
  SES = { title, units, i: opts.start || 0, ok: 0, n: 0, timed: !!opts.timed, times: [], tab: opts.tab || 'menu', menuBlock: opts.menuBlock };
  history.replaceState(null, '', '#run');
  setTab(SES.tab);
  renderUnit();
}
function nextUnit() {
  clearTimer(); stopSpeech();
  SES.i++;
  if (SES.menuBlock != null && S.menu) { S.menu.blocks[SES.menuBlock].done = Math.max(S.menu.blocks[SES.menuBlock].done, SES.i); saveState(); }
  renderUnit();
}
function progHtml(label) { return '<div class="prog"><span>' + esc(SES.title) + '　' + (SES.i + 1) + ' / ' + SES.units.length + '</span><span>' + esc(label) + '</span></div>'; }
function renderUnit() {
  if (SES.i >= SES.units.length) return renderSummary();
  const u = SES.units[SES.i]; const x = DB.byId[u.id];
  if (!x) { SES.i++; return renderUnit(); }
  if (x.kind === 'p5') return renderP5(x);
  if (x.kind === 'p2') return renderP2(x);
  if (x.kind === 'rd') return renderSet(x);
  if (x.kind === 'p3') return renderP3(x);
}
function renderSummary() {
  let extra = '';
  if (SES.timed && SES.times.length) {
    const avg = Math.round((SES.times.reduce((a, b) => a + b, 0) / SES.times.length) * 10) / 10;
    S.timed.push({ date: today(), n: SES.n, c: SES.ok, avg }); S.timed = S.timed.slice(-50); saveState();
    extra = '<p>平均 ' + avg + ' 秒／問（目標 ' + TIMED_SEC + ' 秒）</p>';
  }
  const back = SES.menuBlock != null ? '#menu' : '#' + SES.tab;
  view('<h1>おつかれさま</h1><div class="card"><p><b>' + SES.n + '問中 ' + SES.ok + '問正解（' + pct(SES.ok, SES.n) + '）</b></p>' + extra +
    '<p class="muted">間違えた問題は 翌日・3日後・7日後 に復習として戻ってきます。</p></div><a class="btn wide" href="' + back + '">もどる</a>');
}
function optButtons(opts, showText) {
  return '<div class="opts">' + opts.map((o, i) => '<button class="opt" data-i="' + i + '"><b>(' + LETTERS[i] + ')</b>' + (showText ? esc(o) : '') + '</button>').join('') + '</div>';
}
function markOpts(container, opts, chosen, ans, reveal) {
  container.querySelectorAll('.opt').forEach((b) => {
    const i = +b.dataset.i; b.disabled = true;
    if (reveal) b.innerHTML = '<b>(' + LETTERS[i] + ')</b>' + esc(opts[i]);
    if (opts[i] === ans) b.classList.add('ok'); else if (i === chosen) b.classList.add('ng');
  });
}
function verdictHtml(ok, ans, note) {
  return '<div class="verdict ' + (ok ? 'ok' : 'ng') + '">' + (ok ? '正解' : '不正解') + (note ? '（' + esc(note) + '）' : '') + (ok ? '' : '　正解：' + esc(ans)) + '</div>';
}

function renderP5(q) {
  const opts = shuffle(q.o); const t0 = Date.now();
  view(progHtml(CAT[q.cat] + '・' + q.tag.split('/')[1]) +
    (SES.timed ? '<div class="timer" id="timer"><i style="width:100%"></i></div>' : '') +
    '<div class="card"><p class="stem">' + esc(q.s).replace('___', '<span class="blank">&nbsp;</span>') + '</p></div>' +
    optButtons(opts, true) + '<div id="fb" class="fb"></div>');
  let answered = false;
  const answer = (i, timeout) => {
    if (answered) return; answered = true; clearTimer();
    const sec = Math.round((Date.now() - t0) / 100) / 10;
    const ok = !timeout && opts[i] === q.ans;
    if (SES.timed) SES.times.push(Math.min(sec, TIMED_SEC));
    SES.n++; if (ok) SES.ok++;
    record(q.id, ok, 'p5', q.tag);
    markOpts($('#view'), opts, i, q.ans, false);
    $('#fb').innerHTML = '<div class="card">' + verdictHtml(ok, q.ans, timeout ? '時間切れ' : SES.timed ? sec + '秒' : '') + renderEx(q.ex) + '</div><button class="btn wide" id="next">次へ</button>';
    saveState();
    $('#next').onclick = nextUnit;
  };
  document.querySelectorAll('.opt').forEach((b) => b.onclick = () => answer(+b.dataset.i, false));
  if (SES.timed) {
    timerId = setInterval(() => {
      const left = TIMED_SEC - (Date.now() - t0) / 1000; const el = $('#timer');
      if (!el) return clearTimer();
      el.firstChild.style.width = Math.max(0, (left / TIMED_SEC) * 100) + '%';
      el.classList.toggle('low', left < 5);
      if (left <= 0) answer(-1, true);
    }, 100);
  }
}

function passageHtml(set, marks) {
  let h = esc(set.text);
  marks.forEach((ev) => { const e = esc(ev); h = h.replace(e, '<mark>' + e + '</mark>'); });
  h = h.replace(/\((\d)\) ?_{3,}/g, '<span class="gap">($1) ______</span>');
  h = h.replace(/^(■.*)$/gm, '<span class="doc-h">$1</span>');
  return h;
}
function renderSet(set) {
  renderQuestionSet(set, (marks) => '<div class="card passage" id="passage">' + passageHtml(set, marks) + '</div>',
    (set.type === 'p6' ? 'Part 6' : 'Part 7') + '・' + set.genre, 'rd', true);
}
function renderP3(set) {
  const script = () => set.lines.map((l) => l[0] + ': ' + l[1]).join('\n');
  const showText = !hasVoice() || S.settings.showText;
  const playParts = () => { const spk = {}; let k = 0; return set.lines.map((l) => { if (!(l[0] in spk)) spk[l[0]] = k++; return { text: l[1], v: spk[l[0]], pause: 350 }; }); };
  renderQuestionSet(set, (marks, done) => {
    let s = esc(script()); marks.forEach((ev) => { const e = esc(ev); s = s.replace(e, '<mark>' + e + '</mark>'); });
    return '<div class="card">' + (hasVoice() ? '<button class="btn play" id="play">▶ 会話を再生</button> ' : '<p class="muted">英語の声が無いため、会話を文字で表示しています。</p>') +
      (showText || done ? '<div class="script" style="margin-top:8px">' + s + '</div>' : '<p class="muted small">問題文を先に読んでから再生しましょう（本番と同じ）。スクリプトは全問に答えると表示されます。</p>') + '</div>';
  }, 'Part 3・会話', 'p3', false, () => { const p = $('#play'); if (p) p.onclick = () => speakSeq(playParts()); });
}
/* 長文・会話の共通部分：本文 → 設問を1問ずつ。答えると根拠の文に色が付く */
function renderQuestionSet(set, bodyFn, label, part, hl, afterRender) {
  const st = { k: 0, marks: [], answers: [] };
  const draw = () => {
    const done = st.k >= set.qs.length;
    const answered = st.answers.map((a, i) => {
      const q = set.qs[i];
      if (!a.html) { a.html = renderEx(q.ex); saveState(); }
      return '<div class="card"><p class="qhead">Q' + (i + 1) + '. ' + esc(q.q) + '</p>' + verdictHtml(a.ok, q.ans) + a.html + '</div>';
    }).join('');
    let cur = '';
    if (!done) {
      const q = set.qs[st.k]; st.opts = shuffle(q.o);
      cur = '<div class="card"><p class="qhead">Q' + (st.k + 1) + '. ' + esc(q.q) + '</p>' + optButtons(st.opts, true) + '</div>';
    }
    view(progHtml(label) + bodyFn(st.marks, done) + answered + cur + (done ? '<button class="btn wide" id="next">次へ</button>' : ''));
    if (afterRender) afterRender();
    if (done) { $('#next').onclick = nextUnit; return; }
    document.querySelectorAll('.opt').forEach((b) => b.onclick = () => {
      const q = set.qs[st.k]; const ok = st.opts[+b.dataset.i] === q.ans;
      SES.n++; if (ok) SES.ok++;
      record(q.id, ok, part, q.tag);
      st.answers.push({ ok }); if (q.ev) st.marks.push(q.ev); st.k++;
      const y = window.scrollY; draw(); window.scrollTo(0, y);
      const p = $('#passage'); const m = p && p.querySelector('mark:last-of-type');
      if (m && hl) p.scrollTop = Math.max(0, m.offsetTop - p.offsetTop - 40);
    });
  };
  draw();
}

function renderP2(q) {
  const opts = shuffle(q.o);
  const voice = hasVoice(); const showText = !voice || S.settings.showText;
  const parts = () => [{ text: q.s, v: 0, pause: 700 }].concat(opts.map((o, i) => ({ text: LETTERS[i] + '. ' + o, v: 1, pause: 500 })));
  view(progHtml('Part 2・応答') +
    '<div class="card">' + (voice ? '<button class="btn play" id="play">▶ 再生</button>' : '<p class="muted">英語の声が無いため文字で表示しています。</p>') +
    (showText ? '<p class="stem" style="margin-top:8px">' + esc(q.s) + '</p>' : '<p class="muted small">問いかけと (A)(B)(C) が読み上げられます。</p>') + '</div>' +
    optButtons(opts, showText) + '<div id="fb" class="fb"></div>');
  if (voice) { $('#play').onclick = () => speakSeq(parts()); speakSeq(parts()); }
  document.querySelectorAll('.opt').forEach((b) => b.onclick = () => {
    stopSpeech();
    const i = +b.dataset.i; const ok = opts[i] === q.ans;
    SES.n++; if (ok) SES.ok++;
    record(q.id, ok, 'p2', null);
    markOpts($('#view'), opts, i, q.ans, true);
    $('#fb').innerHTML = '<div class="card">' + verdictHtml(ok, q.ans) + '<p class="script"><b>問いかけ：</b>' + esc(q.s) + '</p>' + renderEx(q.ex) + '</div><button class="btn wide" id="next">次へ</button>';
    saveState();
    $('#next').onclick = nextUnit;
  });
}

/* ---------- 記録 ---------- */
function renderStats() {
  const days = []; for (let i = 13; i >= 0; i--) days.push(addDays(today(), -i));
  const max = Math.max(10, ...days.map((d) => (S.log[d] ? S.log[d].n : 0)));
  const chart = days.map((d) => {
    const L = S.log[d]; const n = L ? L.n : 0;
    return '<div class="col"><span class="n">' + (n || '') + '</span><div class="b" style="height:' + Math.round((n / max) * 100) + '%"></div><span class="a">' + (n ? pct(L.c, L.n) : '') + '</span><span class="d">' + (+d.slice(8)) + '</span></div>';
  }).join('');
  let N = 0, C = 0; const byPart = {};
  Object.values(S.log).forEach((L) => { N += L.n; C += L.c; Object.entries(L.p || {}).forEach(([k, v]) => { const b = byPart[k] || (byPart[k] = [0, 0]); b[0] += v[0]; b[1] += v[1]; }); });
  const t = S.log[today()] || { n: 0, c: 0 };
  const weak = Object.entries(S.tags).filter(([, g]) => g[0] >= 2)
    .map(([k, g]) => ({ k, n: g[0], c: g[1], r: g[1] / g[0] }))
    .sort((a, b) => a.r - b.r || b.n - a.n).slice(0, 5);
  const weakRows = weak.length ? '<table class="weak">' + weak.map((w, i) => {
    const [cat, sub] = w.k.split('/');
    return '<tr><td>' + (i + 1) + '. ' + esc(sub) + ' <span class="muted small">' + (CAT[cat] || '長文') + '</span></td><td class="r">' + pct(w.c, w.n) + '（' + w.n + '問）</td><td class="r"><button class="chip" data-tag="' + esc(w.k) + '">練習</button></td></tr>';
  }).join('') + '</table>' : '<p class="muted">各項目を2問以上解くと表示されます。</p>';
  const partRows = Object.keys(PART_NAME).filter((k) => byPart[k]).map((k) => '<div class="spread"><span>' + PART_NAME[k] + '</span><span>' + byPart[k][0] + '問・' + pct(byPart[k][1], byPart[k][0]) + '</span></div>').join('') || '<p class="muted">まだ記録がありません。</p>';
  const dueTotal = Object.keys(S.items).filter(isDue).length;
  view('<h1>記録</h1>' +
    '<div class="card stat-grid"><div class="stat"><div class="v">' + t.n + '</div><div class="k">今日の問題数</div></div><div class="stat"><div class="v">' + pct(t.c, t.n) + '</div><div class="k">今日の正答率</div></div><div class="stat"><div class="v">' + dueTotal + '</div><div class="k">今日の復習</div></div></div>' +
    '<h2>日ごとの問題数と正答率（14日）</h2><div class="card"><div class="chart">' + chart + '</div></div>' +
    '<h2>苦手な文法の項目トップ5</h2><div class="card">' + weakRows + '</div>' +
    '<h2>パート別（累計 ' + N + '問・' + pct(C, N) + '）</h2><div class="card">' + partRows + '</div>' +
    '<h2>記録の保存</h2><div class="card"><p class="muted small">記録はこのブラウザの中だけにあります。機種変更やブラウザのデータ削除に備えて、ときどき書き出してください。</p>' +
    '<div class="row"><button class="btn" id="exp">書き出し（JSON）</button><label class="btn sub">読み込み<input type="file" id="imp" accept="application/json,.json" hidden></label></div>' +
    '<div class="row" style="margin-top:8px"><a class="btn sub" href="#glossary">用語集</a><button class="btn sub" id="reset">記録を消す</button></div></div>' +
    '<p class="muted small">問題数：Part 5 ' + DB.p5.length + '問／長文 ' + DB.sets.length + 'セット（' + DB.sets.reduce((s, x) => s + x.qs.length, 0) + '問）／リスニング ' + (DB.p2.length + DB.p3.reduce((s, x) => s + x.qs.length, 0)) + '問</p>');
  document.querySelectorAll('[data-tag]').forEach((b) => b.onclick = () => {
    const tag = b.dataset.tag;
    const units = tag.startsWith('rd/') ? pickSets(DB.sets, 2, (s) => s.qs.some((q) => q.tag === tag)).map(unitOf) : pickP5(10, (q) => q.tag === tag).map(unitOf);
    startSession('苦手：' + tag.split('/')[1], units, { tab: 'stats' });
  });
  $('#exp').onclick = exportJSON;
  $('#imp').onchange = importJSON;
  $('#reset').onclick = () => { if (confirm('このブラウザの記録をすべて消します。先に書き出しをしましたか？')) { S = blankState(); saveState(); renderStats(); } };
}
function exportJSON() {
  const blob = new Blob([JSON.stringify(Object.assign({ app: 'toeic-drill', exported: new Date().toISOString() }, S), null, 1)], { type: 'application/json' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'toeic-drill-' + today() + '.json';
  document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
}
function importJSON(e) {
  const f = e.target.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      const d = JSON.parse(r.result);
      if (!d || typeof d.items !== 'object' || typeof d.log !== 'object') throw new Error('形式が違います');
      if (!confirm('読み込んだ記録で、今の記録を置き換えますか？')) return;
      delete d.app; delete d.exported;
      S = Object.assign(blankState(), d); S.settings = Object.assign(blankState().settings, d.settings || {});
      saveState(); alert('読み込みました。'); renderStats();
    } catch (err) { alert('読み込めませんでした：' + err.message); }
  };
  r.readAsText(f);
}
function renderGlossary() {
  const rows = Object.keys(GLOSS).map((t) => '<dt>' + esc(t) + (S.seen[t] ? '' : ' <span class="tag">未出</span>') + '</dt><dd>' + esc(GLOSS[t][0]) + '<br><span class="muted">たとえ：' + esc(GLOSS[t][1]) + '</span></dd>').join('');
  view('<h1>用語集</h1><p class="muted">解説に出てくる文法用語。解説の中で初めて出たときにも表示されます。</p><div class="card"><dl class="gloss">' + rows + '</dl></div><a class="btn sub wide" href="#stats">記録にもどる</a>');
}

/* ---------- スクリーンショット用のデモ記録（?demo=1 のときだけ。保存しない） ---------- */
function demoState() {
  const s = blankState(); let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let i = 9; i >= 0; i--) {
    const d = addDays(today(), -i); const n = 40 + Math.floor(rnd() * 35); const c = Math.round(n * (0.62 + (9 - i) * 0.02 + rnd() * 0.05));
    s.log[d] = { n, c, p: { p5: [Math.round(n * 0.55), Math.round(c * 0.55)], rd: [Math.round(n * 0.25), Math.round(c * 0.25)], p2: [n - Math.round(n * 0.55) - Math.round(n * 0.25), c - Math.round(c * 0.55) - Math.round(c * 0.25)] } };
  }
  const tags = {}; DB.p5.forEach((q) => { tags[q.tag] = 1; });
  Object.keys(tags).forEach((k) => { const n = 4 + Math.floor(rnd() * 12); s.tags[k] = [n, Math.round(n * (0.45 + rnd() * 0.5))]; });
  DB.p5.slice(0, 40).forEach((q, i) => { s.items[q.id] = { n: 1, c: i % 3 ? 1 : 0, s: i % 3 ? 9 : 0, due: i % 3 ? addDays(today(), 10) : today(), last: addDays(today(), -1) }; });
  Object.keys(GLOSS).forEach((t) => { s.seen[t] = today(); });
  return s;
}

/* ---------- 起動 ---------- */
loadState(); showNotice(); updateCountdown();
window.addEventListener('hashchange', route);
route();
if ('serviceWorker' in navigator && location.protocol.startsWith('http') && !DEMO) {
  navigator.serviceWorker.register('sw.js').catch(() => { /* オフライン対応なしでも動く */ });
}
