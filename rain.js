'use strict';

// ── 단어 풀 (한국어 전용) ────────────────────────────────────────────────────

const W_SHORT = [
  // 2글자
  '하늘','사랑','친구','음악','노래','행복','기쁨','슬픔','희망','아침',
  '저녁','구름','바람','봄날','달빛','눈물','웃음','타자','연습','속도',
  '도전','성공','용기','믿음','강물','산길','숲속','꽃밭','별빛','나무',
  '새벽','물결','가족','형제','학교','공부','책상','선생','나라','우리',
  '모두','함께','오늘','내일','어제','여기','지금','항상','가끔','밤낮',
  '풍경','여행','추억','인생','세상','지구','우주','꿈꿔','빛나','달려',
  '바다','모래','파도','수평','하루','이틀','사흘','나흘','닷새','엿새',
  '봄비','눈송','안개','무지','번개','천둥','폭풍','미풍','산들','해풍',
  '사과','배나','딸기','포도','수박','참외','복숭','감귤','레몬','라임',
  '고양','강아','토끼','햄스','앵무','금붕','달팽','무당','반딧','나비',
];

const W_MED = [
  // 3-4글자
  '하늘빛','바람결','구름속','봄바람','달빛아래','여름밤','가을빛','겨울잠',
  '아침햇살','저녁노을','눈부심','웃음꽃','노랫말','사랑해요','친구야',
  '행복해요','기쁜날','슬픈날','희망찬','용기있는','믿음직한','강물따라',
  '산을넘어','숲속으로','꽃향기','별헤아려','나뭇잎','새벽빛','물소리',
  '타자연습','속도올려','도전해요','성공이야','화이팅','파이팅','열심히',
  '최선을다','노력해요','끝까지가','포기하지','함께해요','같이가자',
  '고양이','강아지','사자왕','호랑이','토끼야','코끼리','원숭이','나비야',
  '물고기','독수리','부엉이','두루미','앵무새','하마야','기린아','악어야',
  '빨간색','파란색','노란색','초록색','보라색','하얀색','검은색','주황색',
  '대한민국','서울시','부산시','인천시','광주시','대전시','울산시','제주도',
  '컴퓨터','키보드','마우스','모니터','스피커','헤드폰','스마트폰','태블릿',
  '피자먹자','라면한그','떡볶이야','김밥한줄','비빔밥은','삼겹살에','치킨먹자',
  '봄꽃피어','여름바다','가을단풍','겨울설경','사계절이','아름다워','자연속에',
  '음악듣자','노래불러','춤을춰요','그림그려','책을읽자','글을써요','영화보자',
  '달리기해','수영해요','축구하자','농구해요','배드민턴','탁구치자','테니스해',
];

const W_LONG = [
  // 5글자 이상
  '타자연습해요','하늘빛아래서','사랑하는사람','행복한하루를',
  '친구와함께해','음악이좋아요','노래를불러요','기쁨을나눠요',
  '아름다운세상','빠른손가락으로','완벽한타이핑','최고기록달성',
  '대한민국만세','즐거운시간을','행복이가득해','꿈을이루어요',
  '힘차게달려가','용감하게나가','믿음을가지고','희망을품어요',
  '하늘을날아요','강물을건너요','산을넘어가요','숲속을걸어요',
  '봄바람이불어','여름바다파도','가을단풍잎새','겨울눈꽃송이',
  '열심히연습해','포기하지마요','끝까지해봐요','최선을다해요',
  '속도를높여라','정확도올려라','최고를향해서','도전을멈추지',
  '함께하면돼요','혼자가아니야','우리함께가요','언제나함께해',
];

let lyricsPool = [];

async function loadLyricsWords() {
  try {
    const res = await fetch('/api/popular');
    if (!res.ok) return;
    const songs = await res.json();
    const collected = [];
    for (const s of songs.slice(0, 6)) {
      try {
        const r = await fetch(`/api/songs/${s.id}`);
        const d = await r.json();
        if (!d.plainLyrics) continue;
        const words = d.plainLyrics
          .replace(/\[\d{2}:\d{2}\.\d{2,3}\]/g, '')
          .split(/[\s\n,.!?~♪♩()\[\]'"·•]+/)
          .map(w => w.trim())
          // 한국어 음절만 포함된 단어만 추출
          .filter(w => w.length >= 2 && w.length <= 8 && /^[가-힣]+$/.test(w));
        collected.push(...words);
      } catch { /* skip */ }
    }
    lyricsPool = [...new Set(collected)];
  } catch { /* ignore */ }
}

function pickWord(level) {
  let pool;
  if (level <= 3)       pool = W_SHORT;
  else if (level <= 6)  pool = [...W_SHORT, ...W_MED];
  else if (level <= 10) pool = [...W_MED, ...W_LONG, ...lyricsPool];
  else                  pool = [...W_MED, ...W_LONG, ...lyricsPool, ...W_LONG];
  if (!pool.length) pool = W_MED;
  return pool[Math.floor(Math.random() * pool.length)];
}

// ── 레벨 설정 ──────────────────────────────────────────────────────────────

function cfg(level) {
  const l = Math.min(level, 25);
  return {
    speed:    40 + l * 10,
    interval: Math.max(400, 2200 - l * 90),
    maxWords: Math.min(4 + Math.floor(l * 0.8), 16),
    minWords: Math.min(2 + Math.floor(l * 0.35), 8),
    toNext:   100 + l * 70,
  };
}

// ── 상태 ───────────────────────────────────────────────────────────────────

let gs         = null;
let startLevel = 1; // 난이도 선택으로 결정

function freshState() {
  return {
    running: false,
    lives: 3,
    score: 0,
    level: startLevel,
    combo: 0,
    maxCombo: 0,
    wordsHit: 0,
    levelScore: 0,
    words: [],
    nextSpawn: 0,
    rafId: null,
    lastTs: 0,
  };
}

// ── DOM ────────────────────────────────────────────────────────────────────

const $ = id => document.getElementById(id);
const startScreen    = $('start-screen');
const gameScreen     = $('game-screen');
const gameoverScreen = $('gameover-screen');
const wordArea       = $('word-area');
const typeInput      = $('type-input');
const livesEl        = $('lives-el');
const scoreEl        = $('score-el');
const levelEl        = $('level-el');
const lbar           = $('lbar');
const bestEl         = $('best-score');
const comboEl        = $('combo-el');
const foScore        = $('fo-score');
const foLevel        = $('fo-level');
const foCombo        = $('fo-combo');
const foWords        = $('fo-words');
const newBest        = $('new-best');

function showScreen(el) {
  [startScreen, gameScreen, gameoverScreen].forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}

// ── 난이도 선택 ────────────────────────────────────────────────────────────

document.querySelectorAll('.diff-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    startLevel = parseInt(btn.dataset.start, 10);
  });
});

// ── 시작 / 종료 ────────────────────────────────────────────────────────────

$('start-btn').addEventListener('click', startGame);
$('restart-btn').addEventListener('click', startGame);

function startGame() {
  if (gs?.rafId) cancelAnimationFrame(gs.rafId);
  [...wordArea.querySelectorAll('.fw, .spop, .lvl-msg')].forEach(e => e.remove());
  clearInput();
  gs = freshState();
  gs.running = true;
  refreshHUD();
  showScreen(gameScreen);
  typeInput.focus();
  gs.lastTs = performance.now();
  gs.nextSpawn = gs.lastTs + 300;
  gs.rafId = requestAnimationFrame(loop);
}

function endGame() {
  gs.running = false;
  cancelAnimationFrame(gs.rafId);
  [...wordArea.querySelectorAll('.fw, .spop, .lvl-msg')].forEach(e => e.remove());

  const prev = parseInt(localStorage.getItem('rain_best') || '0');
  const isNew = gs.score > prev;
  if (isNew) localStorage.setItem('rain_best', gs.score);

  foScore.textContent = gs.score.toLocaleString();
  foLevel.textContent = gs.level;
  foCombo.textContent = gs.maxCombo;
  foWords.textContent = gs.wordsHit;
  newBest.classList.toggle('hidden', !isNew);
  showScreen(gameoverScreen);
}

// ── 게임 루프 ──────────────────────────────────────────────────────────────

function loop(ts) {
  if (!gs.running) return;
  const delta = Math.min(ts - gs.lastTs, 60);
  gs.lastTs = ts;

  const c    = cfg(gs.level);
  const areaH = wordArea.clientHeight;

  for (let i = gs.words.length - 1; i >= 0; i--) {
    const w = gs.words[i];
    w.y += (c.speed * delta) / 1000;
    w.el.style.top = `${w.y}px`;

    const pct = w.y / areaH;
    if (pct > 0.70) {
      w.el.classList.add('danger'); w.el.classList.remove('warn');
    } else if (pct > 0.42) {
      w.el.classList.add('warn'); w.el.classList.remove('danger');
    } else {
      w.el.classList.remove('warn', 'danger');
    }

    if (w.y + (w.el.offsetHeight || 32) >= areaH) {
      missWord(i);
      if (!gs.running) return;
    }
  }

  if (ts >= gs.nextSpawn && gs.words.length < c.maxWords) {
    spawnWord();
    // 화면에 단어가 부족하면 빠른 연속 스폰으로 최소 수 채우기
    const below = gs.words.length < c.minWords;
    gs.nextSpawn = ts + (below ? Math.max(180, c.interval * 0.25) : c.interval);
  }

  gs.rafId = requestAnimationFrame(loop);
}

// ── 스폰 ───────────────────────────────────────────────────────────────────

function spawnWord() {
  const existing = new Set(gs.words.map(w => w.text));
  let text, tries = 0;
  do { text = pickWord(gs.level); tries++; }
  while (existing.has(text) && tries < 25);

  const el = document.createElement('div');
  el.className = 'fw';
  el.textContent = text;
  wordArea.appendChild(el);

  const areaW = wordArea.clientWidth;
  const ww    = el.offsetWidth || 80;
  const x     = Math.max(6, Math.random() * (areaW - ww - 12));

  el.style.left = `${x}px`;
  el.style.top  = '-40px';

  gs.words.push({ text, x, y: -40, el });
}

// ── 맞음 / 틀림 ────────────────────────────────────────────────────────────

function hitWord(idx) {
  const w       = gs.words.splice(idx, 1)[0];
  const base    = 10 + gs.level * 5;
  const bonus   = Math.floor(gs.combo * 0.2 * base);
  const earned  = base + bonus;

  gs.score      += earned;
  gs.levelScore += earned;
  gs.combo++;
  gs.maxCombo    = Math.max(gs.maxCombo, gs.combo);
  gs.wordsHit++;

  w.el.classList.add('hit-fx');
  setTimeout(() => w.el.remove(), 240);

  showScorePop(w.el, earned);
  if (gs.combo >= 3) showCombo(gs.combo);

  if (gs.levelScore >= cfg(gs.level).toNext) {
    gs.level++;
    gs.levelScore = 0;
    showLevelUp();
  }

  refreshHUD();

  typeInput.classList.add('ok');
  setTimeout(() => typeInput.classList.remove('ok'), 160);
}

function missWord(idx) {
  const w = gs.words.splice(idx, 1)[0];
  gs.combo = 0;
  w.el.classList.add('miss-fx');
  setTimeout(() => w.el.remove(), 240);
  gs.lives--;
  refreshHUD();
  if (gs.lives <= 0) {
    gs.running = false;
    setTimeout(endGame, 320);
  }
}

// ── 입력 처리 ──────────────────────────────────────────────────────────────

// blur() 시 IME가 마지막 음절을 커밋하며 input 이벤트를 다시 발생시킴.
// 이 플래그로 그 이벤트를 무시하고 즉시 다시 지운다.
let _clearing = false;

typeInput.addEventListener('input', () => {
  if (_clearing) {
    typeInput.value = '';
    return;
  }
  if (!gs?.running) return;
  const typed = typeInput.value.trim();
  if (!typed) return;

  const idx = gs.words.findIndex(w => w.text === typed);
  if (idx !== -1) {
    hitWord(idx);
    clearInput();
    updateTargeting('');
    return;
  }
  updateTargeting(typed);
});

function clearInput() {
  _clearing = true;
  typeInput.value = '';
  typeInput.blur();
  // setTimeout(0) = 모든 IME 커밋 이벤트가 끝난 뒤(매크로태스크) 포커스 복원
  setTimeout(() => {
    typeInput.value = '';
    _clearing = false;
    typeInput.focus();
  }, 0);
}

function updateTargeting(typed) {
  let bestMatch = null, bestY = -Infinity;

  for (const w of gs.words) {
    w.el.classList.remove('targeted');
    if (typed && w.text.startsWith(typed) && w.y > bestY) {
      bestY = w.y;
      bestMatch = w;
    }
  }

  for (const w of gs.words) {
    if (!typed || w !== bestMatch) {
      w.el.textContent = w.text;
    }
  }

  if (bestMatch) {
    bestMatch.el.classList.add('targeted');
    const rest = bestMatch.text.slice(typed.length);
    bestMatch.el.innerHTML =
      `<span class="mp">${esc(typed)}</span>${esc(rest)}`;
  }
}

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ── 시각 효과 ──────────────────────────────────────────────────────────────

function showScorePop(wordEl, pts) {
  const wr = wordEl.getBoundingClientRect();
  const ar = wordArea.getBoundingClientRect();
  const el = document.createElement('div');
  el.className = 'spop';
  el.textContent = `+${pts}`;
  el.style.left = `${wr.left - ar.left + wr.width / 2 - 16}px`;
  el.style.top  = `${wr.top  - ar.top}px`;
  wordArea.appendChild(el);
  setTimeout(() => el.remove(), 900);
}

function showCombo(n) {
  comboEl.textContent = `${n} COMBO!`;
  comboEl.classList.remove('hidden', 'pop');
  void comboEl.offsetWidth;
  comboEl.classList.add('pop');
  setTimeout(() => comboEl.classList.add('hidden'), 680);
}

function showLevelUp() {
  const el = document.createElement('div');
  el.className = 'lvl-msg';
  el.textContent = `LEVEL ${gs.level}!`;
  wordArea.appendChild(el);
  setTimeout(() => el.remove(), 1850);
}

// ── HUD ────────────────────────────────────────────────────────────────────

function refreshHUD() {
  scoreEl.textContent = gs.score.toLocaleString();
  levelEl.textContent = `LV.${gs.level}`;
  livesEl.textContent = '❤️'.repeat(Math.max(0, gs.lives));
  const c = cfg(gs.level);
  lbar.style.width = `${Math.min((gs.levelScore / c.toNext) * 100, 100)}%`;
}

// ── 포커스 유지 ────────────────────────────────────────────────────────────

document.addEventListener('keydown', e => {
  if (gs?.running && e.target !== typeInput) typeInput.focus();
});

// ── 초기화 ─────────────────────────────────────────────────────────────────

bestEl.textContent = parseInt(localStorage.getItem('rain_best') || '0').toLocaleString();
loadLyricsWords();
