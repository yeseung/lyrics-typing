'use strict';

let queue = [];
let levelFilter = 'all';
let startTime = null;
let timerInterval = null;
let completedCount = 0;
let streak = 0;
let totalTyped = 0;
let errorTyped = 0;

function buildQueue(level) {
  let items = [];
  if (level === 'all' || level === 'easy')  items.push(...WORDS.easy);
  if (level === 'all' || level === 'mid')   items.push(...WORDS.mid);
  if (level === 'all' || level === 'hard')  items.push(...WORDS.hard);
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

const wordDisplay  = document.getElementById('word-display');
const wordCategory = document.getElementById('word-category');
const wordHint     = document.getElementById('word-hint');
const wInput       = document.getElementById('w-input');
const progressFill = document.getElementById('progress-fill');
const nextList     = document.getElementById('next-list');
const statTime     = document.getElementById('stat-time');
const statDone     = document.getElementById('stat-done');
const statStreak   = document.getElementById('stat-streak');
const statAcc      = document.getElementById('stat-acc');
const wordCard     = document.getElementById('word-card');

function init() {
  queue = buildQueue(levelFilter);
  completedCount = 0; streak = 0;
  totalTyped = 0; errorTyped = 0;
  startTime = null;
  clearInterval(timerInterval);
  wInput.value = '';
  wInput.classList.remove('has-error');
  wordCard.classList.remove('correct', 'error');
  renderCurrent();
  renderNext();
  resetStats();
  wInput.focus();
}

function renderCurrent() {
  if (!queue.length) queue = buildQueue(levelFilter);
  const item = queue[0];
  wordDisplay.textContent = item.w;
  wordCategory.textContent = item.c;
  wordHint.textContent = `글자 수: ${item.w.length}`;
  progressFill.style.width = '0%';
}

function renderNext() {
  nextList.innerHTML = '';
  for (let i = 1; i < Math.min(queue.length, 5); i++) {
    const el = document.createElement('div');
    el.className = 'next-word';
    el.textContent = queue[i].w;
    nextList.appendChild(el);
  }
}

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function updateDisplay(typed) {
  const target = queue[0]?.w || '';
  let html = '';
  let hasError = false;
  for (let i = 0; i < target.length; i++) {
    if (i < typed.length) {
      if (typed[i] === target[i]) {
        html += `<span class="c-ok">${esc(target[i])}</span>`;
      } else {
        html += `<span class="c-err">${esc(target[i])}</span>`;
        hasError = true;
      }
    } else if (i === typed.length) {
      html += `<span class="c-cur">${esc(target[i])}</span>`;
    } else {
      html += esc(target[i]);
    }
  }
  wordDisplay.innerHTML = html || `<span class="c-cur"> </span>`;
  wInput.classList.toggle('has-error', hasError && typed.length > 0);
  wordCard.classList.toggle('error', hasError && typed.length > 0);
  progressFill.style.width =
    target.length ? `${Math.min(typed.length / target.length * 100, 100)}%` : '0%';
}

wInput.addEventListener('input', () => {
  if (!queue.length) return;
  const typed = wInput.value;

  if (!startTime && typed.length > 0) {
    startTime = Date.now();
    timerInterval = setInterval(refreshStats, 1000);
  }

  const target = queue[0].w;
  totalTyped++;
  const lastIdx = typed.length - 1;
  if (lastIdx >= 0 && typed[lastIdx] !== target[lastIdx]) errorTyped++;

  updateDisplay(typed);

});

wInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const typed = wInput.value;
    const target = queue[0]?.w || '';
    if (typed === target) {
      completedCount++;
      streak++;
      queue.shift();
      wInput.value = '';
      wInput.classList.remove('has-error');
      wordCard.classList.remove('error');
      wordCard.classList.add('correct');
      setTimeout(() => wordCard.classList.remove('correct'), 300);
      if (!queue.length) queue = buildQueue(levelFilter);
      renderCurrent();
      renderNext();
      refreshStats();
    } else {
      streak = 0;
      wordCard.classList.remove('error');
      void wordCard.offsetWidth; // reflow for re-trigger animation
      wordCard.classList.add('error');
      refreshStats();
    }
  }
  if (e.key === 'Escape') {
    wInput.value = '';
    wInput.classList.remove('has-error');
    wordCard.classList.remove('error');
    streak = 0;
    updateDisplay('');
    refreshStats();
  }
});

function resetStats() {
  statTime.textContent   = '00:00';
  statDone.textContent   = '0';
  statStreak.textContent = '0🔥';
  statAcc.textContent    = '100%';
}

function refreshStats() {
  if (!startTime) return;
  const elapsed = (Date.now() - startTime) / 1000;
  const m = Math.floor(elapsed / 60);
  const s = Math.floor(elapsed % 60);
  statTime.textContent   = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  statDone.textContent   = completedCount;
  statStreak.textContent = `${streak}🔥`;
  const acc = totalTyped > 0
    ? Math.max(0, Math.round((totalTyped - errorTyped) / totalTyped * 100))
    : 100;
  statAcc.textContent = `${acc}%`;
}

document.querySelectorAll('.lvl-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    levelFilter = btn.dataset.level;
    clearInterval(timerInterval);
    init();
  });
});

// ── Finger animation ──
const FINGER_MAP = {
  KeyQ: 'fl0', KeyA: 'fl0', KeyZ: 'fl0',
  KeyW: 'fl1', KeyS: 'fl1', KeyX: 'fl1',
  KeyE: 'fl2', KeyD: 'fl2', KeyC: 'fl2',
  KeyR: 'fl3', KeyF: 'fl3', KeyV: 'fl3', KeyT: 'fl3', KeyG: 'fl3', KeyB: 'fl3',
  KeyY: 'fr4', KeyH: 'fr4', KeyN: 'fr4', KeyU: 'fr4', KeyJ: 'fr4', KeyM: 'fr4',
  KeyI: 'fr5', KeyK: 'fr5', Comma: 'fr5',
  KeyO: 'fr6', KeyL: 'fr6', Period: 'fr6',
  KeyP: 'fr7', Semicolon: 'fr7', Slash: 'fr7',
};

function fingerDown(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.transition = 'none';
  el.style.transform = 'translateY(10px)';
  el.style.opacity = '0.6';
}
function fingerUp(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.transition = 'transform 0.12s ease-out, opacity 0.12s';
  el.style.transform = '';
  el.style.opacity = '';
}

document.addEventListener('keydown', e => {
  const id = FINGER_MAP[e.code];
  if (id) fingerDown(id);
});
document.addEventListener('keyup', e => {
  const id = FINGER_MAP[e.code];
  if (id) fingerUp(id);
});

init();
