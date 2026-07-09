'use strict';

// ── Keyboard layout ────────────────────────────────────────────────────────
// f: finger  0=L-pinky 1=L-ring 2=L-mid 3=L-idx 4=R-idx 5=R-mid 6=R-ring 7=R-pinky 8=thumb
// w: flex-grow (default 1), sp: special key (not a practice target)
const ROWS = [
  [ // numbers row
    {c:'Backquote',    ko:'`',     en:'`',    f:0, sk:'~',  se:'~'},
    {c:'Digit1',       ko:'1',     en:'1',    f:0, sk:'!',  se:'!'},
    {c:'Digit2',       ko:'2',     en:'2',    f:1, sk:'@',  se:'@'},
    {c:'Digit3',       ko:'3',     en:'3',    f:2, sk:'#',  se:'#'},
    {c:'Digit4',       ko:'4',     en:'4',    f:3, sk:'$',  se:'$'},
    {c:'Digit5',       ko:'5',     en:'5',    f:3, sk:'%',  se:'%'},
    {c:'Digit6',       ko:'6',     en:'6',    f:4, sk:'^',  se:'^'},
    {c:'Digit7',       ko:'7',     en:'7',    f:4, sk:'&',  se:'&'},
    {c:'Digit8',       ko:'8',     en:'8',    f:5, sk:'*',  se:'*'},
    {c:'Digit9',       ko:'9',     en:'9',    f:6, sk:'(',  se:'('},
    {c:'Digit0',       ko:'0',     en:'0',    f:7, sk:')',  se:')'},
    {c:'Minus',        ko:'-',     en:'-',    f:7, sk:'_',  se:'_'},
    {c:'Equal',        ko:'=',     en:'=',    f:7, sk:'+',  se:'+'},
    {c:'Backspace',    ko:'⌫',     en:'⌫',    f:7, w:2,   sp:true},
  ],
  [ // top row
    {c:'Tab',          ko:'Tab',   en:'Tab',  f:0, w:1.5, sp:true},
    {c:'KeyQ',         ko:'ㅂ',    en:'q',    f:0, sk:'ㅃ', se:'Q'},
    {c:'KeyW',         ko:'ㅈ',    en:'w',    f:1, sk:'ㅉ', se:'W'},
    {c:'KeyE',         ko:'ㄷ',    en:'e',    f:2, sk:'ㄸ', se:'E'},
    {c:'KeyR',         ko:'ㄱ',    en:'r',    f:3, sk:'ㄲ', se:'R'},
    {c:'KeyT',         ko:'ㅅ',    en:'t',    f:3, sk:'ㅆ', se:'T'},
    {c:'KeyY',         ko:'ㅛ',    en:'y',    f:4,          se:'Y'},
    {c:'KeyU',         ko:'ㅕ',    en:'u',    f:4,          se:'U'},
    {c:'KeyI',         ko:'ㅑ',    en:'i',    f:5,          se:'I'},
    {c:'KeyO',         ko:'ㅐ',    en:'o',    f:6, sk:'ㅒ', se:'O'},
    {c:'KeyP',         ko:'ㅔ',    en:'p',    f:7, sk:'ㅖ', se:'P'},
    {c:'BracketLeft',  ko:'[',     en:'[',    f:7, sk:'{',  se:'{'},
    {c:'BracketRight', ko:']',     en:']',    f:7, sk:'}',  se:'}'},
    {c:'Backslash',    ko:'₩',     en:'\\',   f:7, sk:'|',  se:'|', w:1.5},
  ],
  [ // home row
    {c:'CapsLock',     ko:'한/영', en:'Caps', f:0, w:1.75, sp:true},
    {c:'KeyA',         ko:'ㅁ',    en:'a',    f:0},
    {c:'KeyS',         ko:'ㄴ',    en:'s',    f:1},
    {c:'KeyD',         ko:'ㅇ',    en:'d',    f:2},
    {c:'KeyF',         ko:'ㄹ',    en:'f',    f:3},
    {c:'KeyG',         ko:'ㅎ',    en:'g',    f:3},
    {c:'KeyH',         ko:'ㅗ',    en:'h',    f:4},
    {c:'KeyJ',         ko:'ㅓ',    en:'j',    f:4},
    {c:'KeyK',         ko:'ㅏ',    en:'k',    f:5},
    {c:'KeyL',         ko:'ㅣ',    en:'l',    f:6},
    {c:'Semicolon',    ko:';',     en:';',    f:7, sk:':',  se:':'},
    {c:'Quote',        ko:"'",     en:"'",    f:7, sk:'"',  se:'"'},
    {c:'Enter',        ko:'↵',     en:'↵',    f:7, w:2.25, sp:true},
  ],
  [ // bottom row
    {c:'ShiftLeft',    ko:'Shift', en:'Shift',f:0, w:2.25, sp:true},
    {c:'KeyZ',         ko:'ㅋ',    en:'z',    f:0},
    {c:'KeyX',         ko:'ㅌ',    en:'x',    f:1},
    {c:'KeyC',         ko:'ㅊ',    en:'c',    f:2},
    {c:'KeyV',         ko:'ㅍ',    en:'v',    f:3},
    {c:'KeyB',         ko:'ㅠ',    en:'b',    f:3},
    {c:'KeyN',         ko:'ㅜ',    en:'n',    f:4},
    {c:'KeyM',         ko:'ㅡ',    en:'m',    f:4},
    {c:'Comma',        ko:',',     en:',',    f:5},
    {c:'Period',       ko:'.',     en:'.',    f:6},
    {c:'Slash',        ko:'/',     en:'/',    f:7},
    {c:'ShiftRight',   ko:'Shift', en:'Shift',f:7, w:2.75, sp:true},
  ],
  [ // space row
    {c:'ControlLeft',  ko:'Ctrl',  en:'Ctrl', f:0, w:1.25, sp:true},
    {c:'AltLeft',      ko:'Alt',   en:'Alt',  f:0, w:1.25, sp:true},
    {c:'Space',        ko:'Space', en:'Space',f:8, w:6.5,  sp:true},
    {c:'AltRight',     ko:'Alt',   en:'Alt',  f:7, w:1.25, sp:true},
    {c:'ControlRight', ko:'Ctrl',  en:'Ctrl', f:7, w:1.25, sp:true},
  ],
];

const F_COLOR = ['#a855f7','#f97316','#22c55e','#3b82f6','#eab308','#22c55e','#f97316','#a855f7','#94a3b8'];
const F_NAME  = ['왼 새끼손가락','왼 약지','왼 중지','왼 검지','오른 검지','오른 중지','오른 약지','오른 새끼손가락'];

// ── Lookup maps ────────────────────────────────────────────────────────────

const TO_CODE = { ko: {}, en: {} };  // char → event.code
const CODE_MAP = {};                  // event.code → key data

for (const row of ROWS) {
  for (const k of row) {
    CODE_MAP[k.c] = k;
    if (!k.sp) {
      if (k.ko) TO_CODE.ko[k.ko] = k.c;
      if (k.en) TO_CODE.en[k.en] = k.c;
    }
  }
}

// ── Practice levels ────────────────────────────────────────────────────────

const LEVELS = [
  { name:'왼손 홈',
    ko:['ㅁ','ㄴ','ㅇ','ㄹ'],
    en:['a','s','d','f'] },
  { name:'오른손 홈',
    ko:['ㅎ','ㅗ','ㅓ','ㅏ','ㅣ'],
    en:['g','h','j','k','l'] },
  { name:'홈포지션 전체',
    ko:['ㅁ','ㄴ','ㅇ','ㄹ','ㅎ','ㅗ','ㅓ','ㅏ','ㅣ'],
    en:['a','s','d','f','g','h','j','k','l'] },
  { name:'윗줄 왼손',
    ko:['ㅂ','ㅈ','ㄷ','ㄱ','ㅅ'],
    en:['q','w','e','r','t'] },
  { name:'윗줄 오른손',
    ko:['ㅛ','ㅕ','ㅑ','ㅐ','ㅔ'],
    en:['y','u','i','o','p'] },
  { name:'아랫줄',
    ko:['ㅋ','ㅌ','ㅊ','ㅍ','ㅠ','ㅜ','ㅡ'],
    en:['z','x','c','v','b','n','m'] },
  { name:'전체 혼합',
    ko:['ㅁ','ㄴ','ㅇ','ㄹ','ㅎ','ㅗ','ㅓ','ㅏ','ㅣ','ㅂ','ㅈ','ㄷ','ㄱ','ㅅ','ㅛ','ㅕ','ㅑ','ㅐ','ㅔ','ㅋ','ㅌ','ㅊ','ㅍ','ㅠ','ㅜ','ㅡ'],
    en:['a','s','d','f','g','h','j','k','l','q','w','e','r','t','y','u','i','o','p','z','x','c','v','b','n','m'] },
];

// ── State ──────────────────────────────────────────────────────────────────

let mode     = 'ko';
let levelIdx = 0;
let queue    = [];
let hits     = 0;
let errors   = 0;
let streak   = 0;

// ── DOM refs ───────────────────────────────────────────────────────────────

const $       = id => document.getElementById(id);
const kq0     = $('kq0');
const kq0c    = $('kq0-char');
const kq1     = $('kq1');
const kq2     = $('kq2');
const kq3     = $('kq3');
const fhintEl = $('finger-hint');
const stAcc   = $('st-acc');
const stStr   = $('st-streak');
const stDone  = $('st-done');
const kbEl    = $('keyboard');
const flegEl  = $('finger-legend');

// ── Bootstrap ──────────────────────────────────────────────────────────────

renderLevelTabs();
renderKeyboard();
renderFingerLegend();
resetSession();

$('btn-ko').addEventListener('click', () => setMode('ko'));
$('btn-en').addEventListener('click', () => setMode('en'));
document.addEventListener('keydown', onKey);

// ── Mode / Level ───────────────────────────────────────────────────────────

function setMode(m) {
  mode = m;
  $('btn-ko').classList.toggle('active', m === 'ko');
  $('btn-en').classList.toggle('active', m === 'en');
  renderKeyboard();
  resetSession();
}

function setLevel(idx) {
  levelIdx = idx;
  document.querySelectorAll('.ltab').forEach((el, i) =>
    el.classList.toggle('active', i === idx)
  );
  resetSession();
}

// ── Session ────────────────────────────────────────────────────────────────

function resetSession() {
  hits = 0; errors = 0; streak = 0;
  queue = [];
  refillQueue();
  updateCards();
  updateStats();
}

function refillQueue() {
  const pool = LEVELS[levelIdx][mode];
  while (queue.length < 8) {
    let pick, tries = 0;
    do {
      pick = pool[Math.floor(Math.random() * pool.length)];
      tries++;
    } while (
      tries < 12 &&
      queue.length >= 2 &&
      queue[queue.length - 1] === pick &&
      queue[queue.length - 2] === pick
    );
    queue.push(pick);
  }
}

// ── Render ─────────────────────────────────────────────────────────────────

function renderLevelTabs() {
  const el = $('level-tabs');
  el.innerHTML = '';
  LEVELS.forEach((lv, i) => {
    const btn = document.createElement('button');
    btn.className = 'ltab' + (i === 0 ? ' active' : '');
    btn.textContent = lv.name;
    btn.addEventListener('click', () => setLevel(i));
    el.appendChild(btn);
  });
}

function renderKeyboard() {
  kbEl.innerHTML = '';
  for (const row of ROWS) {
    const rowEl = document.createElement('div');
    rowEl.className = 'kb-row';
    for (const k of row) {
      const el = document.createElement('div');
      el.className = `kb-key f${k.f}${k.sp ? ' sp' : ''}`;
      el.dataset.code = k.c;
      el.style.flex = k.w || 1;

      const main = document.createElement('span');
      main.className = 'kb-main';
      main.textContent = mode === 'ko' ? k.ko : k.en;
      el.appendChild(main);

      if (!k.sp) {
        const sub = document.createElement('span');
        sub.className = 'kb-sub';
        // KO mode: small EN letter below; EN mode: shift variant
        sub.textContent = mode === 'ko'
          ? (k.en !== k.ko ? k.en : '')
          : (k.se || (k.en ? k.en.toUpperCase() : ''));
        if (sub.textContent) el.appendChild(sub);
      }

      rowEl.appendChild(el);
    }
    kbEl.appendChild(rowEl);
  }
  highlightKey(queue[0]);
}

function renderFingerLegend() {
  flegEl.innerHTML = '';
  F_NAME.forEach((name, i) => {
    const el = document.createElement('div');
    el.className = 'fl-item';
    el.style.setProperty('--fc', F_COLOR[i]);
    el.textContent = name;
    flegEl.appendChild(el);
  });
}

// ── Cards & HUD ────────────────────────────────────────────────────────────

function updateCards() {
  kq0c.textContent = queue[0] ?? '';
  kq1.textContent  = queue[1] ?? '';
  kq2.textContent  = queue[2] ?? '';
  kq3.textContent  = queue[3] ?? '';
  updateFingerHint(queue[0]);
  highlightKey(queue[0]);
}

function updateFingerHint(char) {
  if (!char) { fhintEl.textContent = ''; return; }
  const code = TO_CODE[mode][char];
  const k    = code ? CODE_MAP[code] : null;
  if (k != null) {
    fhintEl.textContent = F_NAME[k.f] ?? '';
    fhintEl.style.color = F_COLOR[k.f] ?? '';
  } else {
    fhintEl.textContent = '';
  }
}

function highlightKey(char) {
  kbEl.querySelectorAll('.kb-key.active').forEach(e => e.classList.remove('active'));
  if (!char) return;
  const code = TO_CODE[mode][char];
  if (!code) return;
  const el = kbEl.querySelector(`[data-code="${code}"]`);
  if (el) el.classList.add('active');
}

function updateStats() {
  const total = hits + errors;
  const acc   = total === 0 ? 100 : Math.round((hits / total) * 100);
  stAcc.textContent  = acc + '%';
  stStr.textContent  = streak;
  stDone.textContent = hits;
}

// ── Input ──────────────────────────────────────────────────────────────────

const IGNORE = new Set([
  'Tab','Escape','CapsLock','ContextMenu',
  'ShiftLeft','ShiftRight','ControlLeft','ControlRight',
  'AltLeft','AltRight','MetaLeft','MetaRight',
  'F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12',
  'PrintScreen','ScrollLock','Pause','Insert','Delete',
  'Home','End','PageUp','PageDown',
  'ArrowUp','ArrowDown','ArrowLeft','ArrowRight',
]);

function onKey(e) {
  if (e.ctrlKey || e.altKey || e.metaKey) return;
  if (IGNORE.has(e.code)) return;
  e.preventDefault();

  const target  = queue[0];
  if (!target) return;

  const keyData = CODE_MAP[e.code];
  if (!keyData || keyData.sp) return;

  const pressed = mode === 'ko' ? keyData.ko : keyData.en;

  if (pressed === target) {
    onHit();
  } else {
    onMiss();
  }
}

function onHit() {
  hits++;
  streak++;

  kq0.classList.remove('miss');
  void kq0.offsetWidth; // force reflow to restart animation
  kq0.classList.add('hit');
  setTimeout(() => kq0.classList.remove('hit'), 230);

  queue.shift();
  if (queue.length < 5) refillQueue();
  updateCards();
  updateStats();
}

function onMiss() {
  errors++;
  streak = 0;

  kq0.classList.remove('hit');
  void kq0.offsetWidth;
  kq0.classList.add('miss');
  setTimeout(() => kq0.classList.remove('miss'), 380);
  updateStats();
}
