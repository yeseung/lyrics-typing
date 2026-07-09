'use strict';

let queue = [];
let catFilter = 'all';
let startTime = null;
let totalKeystrokes = 0;
let errorKeystrokes = 0;
let completedCount = 0;
let timerInterval = null;

function buildPool(cat) {
  let items = [];
  if (cat === 'all' || cat === '속담') {
    items.push(...SENTENCES.속담.map(t => ({ text: t, cat: '속담' })));
  }
  if (cat === 'all' || cat === '명언') {
    items.push(...SENTENCES.명언.map(t => ({ text: t, cat: '명언' })));
  }
  if (cat === 'all' || cat === '문학') {
    items.push(...SENTENCES.문학.map(t => ({ text: t, cat: '문학' })));
  }
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

const currentTextEl = document.getElementById('current-text');
const currentCard   = document.getElementById('current-card');
const sourceBadge   = document.getElementById('source-badge');
const sInput        = document.getElementById('s-input');
const progressFill  = document.getElementById('progress-fill');
const queueList     = document.getElementById('queue-list');
const catThumb      = document.getElementById('cat-thumb');
const statTime      = document.getElementById('stat-time');
const statSpeed     = document.getElementById('stat-speed');
const statAcc       = document.getElementById('stat-acc');
const statDone      = document.getElementById('stat-done');

function moveCatThumb(btn) {
  if (!btn) return;
  catThumb.style.width = `${btn.offsetWidth}px`;
  catThumb.style.transform = `translateX(${btn.offsetLeft}px)`;
}

function init() {
  queue = buildPool(catFilter);
  completedCount = 0;
  totalKeystrokes = 0;
  errorKeystrokes = 0;
  startTime = null;
  clearInterval(timerInterval);
  sInput.value = '';
  sInput.classList.remove('has-error', 'complete');
  renderCurrent();
  renderQueue();
  resetStats();
  sInput.focus();
}

function renderCurrent() {
  if (!queue.length) {
    queue = buildPool(catFilter);
  }
  const s = queue[0];
  currentTextEl.textContent = s.text;
  sourceBadge.textContent = `📌 ${s.cat}`;
  progressFill.style.width = '0%';
}

function renderQueue() {
  queueList.innerHTML = '';
  for (let i = 1; i < Math.min(queue.length, 4); i++) {
    const el = document.createElement('div');
    el.className = 'q-item';
    el.textContent = queue[i].text;
    queueList.appendChild(el);
  }
}

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function updateDisplay(typed) {
  const target = queue[0]?.text || '';
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

  currentTextEl.innerHTML = html || '<span class="c-cur"> </span>';
  sInput.classList.toggle('has-error', hasError && typed.length > 0);
  progressFill.style.width =
    target.length ? `${Math.min(typed.length / target.length * 100, 100)}%` : '0%';
}

sInput.addEventListener('input', () => {
  if (!queue.length) return;
  const typed = sInput.value;

  if (!startTime && typed.length > 0) {
    startTime = Date.now();
    timerInterval = setInterval(refreshStats, 1000);
  }

  const target = queue[0].text;
  totalKeystrokes++;

  // count errors on each new char
  const lastIdx = typed.length - 1;
  if (lastIdx >= 0 && typed[lastIdx] !== target[lastIdx]) {
    errorKeystrokes++;
  }

  updateDisplay(typed);

  if (typed === target) {
    completedCount++;
    queue.shift();
    sInput.value = '';
    sInput.classList.remove('has-error');
    sInput.classList.add('complete');
    setTimeout(() => sInput.classList.remove('complete'), 220);

    currentCard.classList.remove('flash');
    void currentCard.offsetWidth;
    currentCard.classList.add('flash');

    if (!queue.length) queue = buildPool(catFilter);
    renderCurrent();
    renderQueue();
    refreshStats();
  }
});

sInput.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    sInput.value = '';
    sInput.classList.remove('has-error');
    updateDisplay('');
  }
});

function resetStats() {
  statTime.textContent  = '00:00';
  statSpeed.textContent = '0';
  statAcc.textContent   = '100%';
  statDone.textContent  = '0';
}

function refreshStats() {
  if (!startTime) return;
  const elapsed = (Date.now() - startTime) / 1000;
  const m = Math.floor(elapsed / 60);
  const s = Math.floor(elapsed % 60);
  statTime.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

  const elapsedMin = elapsed / 60;
  const speed = elapsedMin > 0 ? Math.round(totalKeystrokes / elapsedMin) : 0;
  statSpeed.textContent = speed;

  const total = totalKeystrokes;
  const acc = total > 0 ? Math.max(0, Math.round((total - errorKeystrokes) / total * 100)) : 100;
  statAcc.textContent = `${acc}%`;
  statDone.textContent = completedCount;
}

document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    moveCatThumb(btn);
    catFilter = btn.dataset.cat;
    clearInterval(timerInterval);
    init();
  });
});

const activeCatBtn = () => document.querySelector('.cat-btn.active');
init();
moveCatThumb(activeCatBtn());
window.addEventListener('load', () => moveCatThumb(activeCatBtn()));
window.addEventListener('resize', () => moveCatThumb(activeCatBtn()));
