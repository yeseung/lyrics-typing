const COUNTRIES = [
  { code: 'AF', name: '아프가니스탄', en: 'Afghanistan' },
  { code: 'AL', name: '알바니아', en: 'Albania' },
  { code: 'DZ', name: '알제리', en: 'Algeria' },
  { code: 'AD', name: '안도라', en: 'Andorra' },
  { code: 'AO', name: '앙골라', en: 'Angola' },
  { code: 'AG', name: '앤티가바부다', en: 'Antigua and Barbuda' },
  { code: 'AR', name: '아르헨티나', en: 'Argentina' },
  { code: 'AM', name: '아르메니아', en: 'Armenia' },
  { code: 'AU', name: '호주', en: 'Australia' },
  { code: 'AT', name: '오스트리아', en: 'Austria' },
  { code: 'AZ', name: '아제르바이잔', en: 'Azerbaijan' },
  { code: 'BS', name: '바하마', en: 'Bahamas' },
  { code: 'BH', name: '바레인', en: 'Bahrain' },
  { code: 'BD', name: '방글라데시', en: 'Bangladesh' },
  { code: 'BB', name: '바베이도스', en: 'Barbados' },
  { code: 'BY', name: '벨라루스', en: 'Belarus' },
  { code: 'BE', name: '벨기에', en: 'Belgium' },
  { code: 'BZ', name: '벨리즈', en: 'Belize' },
  { code: 'BJ', name: '베냉', en: 'Benin' },
  { code: 'BT', name: '부탄', en: 'Bhutan' },
  { code: 'BO', name: '볼리비아', en: 'Bolivia' },
  { code: 'BA', name: '보스니아헤르체고비나', en: 'Bosnia and Herzegovina' },
  { code: 'BW', name: '보츠와나', en: 'Botswana' },
  { code: 'BR', name: '브라질', en: 'Brazil' },
  { code: 'BN', name: '브루나이', en: 'Brunei' },
  { code: 'BG', name: '불가리아', en: 'Bulgaria' },
  { code: 'BF', name: '부르키나파소', en: 'Burkina Faso' },
  { code: 'BI', name: '부룬디', en: 'Burundi' },
  { code: 'CV', name: '카보베르데', en: 'Cabo Verde' },
  { code: 'KH', name: '캄보디아', en: 'Cambodia' },
  { code: 'CM', name: '카메룬', en: 'Cameroon' },
  { code: 'CA', name: '캐나다', en: 'Canada' },
  { code: 'CF', name: '중앙아프리카공화국', en: 'Central African Republic' },
  { code: 'TD', name: '차드', en: 'Chad' },
  { code: 'CL', name: '칠레', en: 'Chile' },
  { code: 'CN', name: '중국', en: 'China' },
  { code: 'CO', name: '콜롬비아', en: 'Colombia' },
  { code: 'KM', name: '코모로', en: 'Comoros' },
  { code: 'CG', name: '콩고공화국', en: 'Congo (Republic)' },
  { code: 'CD', name: '콩고민주공화국', en: 'Congo (DRC)' },
  { code: 'CR', name: '코스타리카', en: 'Costa Rica' },
  { code: 'HR', name: '크로아티아', en: 'Croatia' },
  { code: 'CU', name: '쿠바', en: 'Cuba' },
  { code: 'CY', name: '키프로스', en: 'Cyprus' },
  { code: 'CZ', name: '체코', en: 'Czech Republic' },
  { code: 'DK', name: '덴마크', en: 'Denmark' },
  { code: 'DJ', name: '지부티', en: 'Djibouti' },
  { code: 'DM', name: '도미니카', en: 'Dominica' },
  { code: 'DO', name: '도미니카공화국', en: 'Dominican Republic' },
  { code: 'EC', name: '에콰도르', en: 'Ecuador' },
  { code: 'EG', name: '이집트', en: 'Egypt' },
  { code: 'SV', name: '엘살바도르', en: 'El Salvador' },
  { code: 'GQ', name: '적도기니', en: 'Equatorial Guinea' },
  { code: 'ER', name: '에리트레아', en: 'Eritrea' },
  { code: 'EE', name: '에스토니아', en: 'Estonia' },
  { code: 'SZ', name: '에스와티니', en: 'Eswatini' },
  { code: 'ET', name: '에티오피아', en: 'Ethiopia' },
  { code: 'FJ', name: '피지', en: 'Fiji' },
  { code: 'FI', name: '핀란드', en: 'Finland' },
  { code: 'FR', name: '프랑스', en: 'France' },
  { code: 'GA', name: '가봉', en: 'Gabon' },
  { code: 'GM', name: '감비아', en: 'Gambia' },
  { code: 'GE', name: '조지아', en: 'Georgia' },
  { code: 'DE', name: '독일', en: 'Germany' },
  { code: 'GH', name: '가나', en: 'Ghana' },
  { code: 'GR', name: '그리스', en: 'Greece' },
  { code: 'GD', name: '그레나다', en: 'Grenada' },
  { code: 'GT', name: '과테말라', en: 'Guatemala' },
  { code: 'GN', name: '기니', en: 'Guinea' },
  { code: 'GW', name: '기니비사우', en: 'Guinea-Bissau' },
  { code: 'GY', name: '가이아나', en: 'Guyana' },
  { code: 'HT', name: '아이티', en: 'Haiti' },
  { code: 'HN', name: '온두라스', en: 'Honduras' },
  { code: 'HK', name: '홍콩', en: 'Hong Kong' },
  { code: 'HU', name: '헝가리', en: 'Hungary' },
  { code: 'IS', name: '아이슬란드', en: 'Iceland' },
  { code: 'IN', name: '인도', en: 'India' },
  { code: 'ID', name: '인도네시아', en: 'Indonesia' },
  { code: 'IR', name: '이란', en: 'Iran' },
  { code: 'IQ', name: '이라크', en: 'Iraq' },
  { code: 'IE', name: '아일랜드', en: 'Ireland' },
  { code: 'IL', name: '이스라엘', en: 'Israel' },
  { code: 'IT', name: '이탈리아', en: 'Italy' },
  { code: 'CI', name: '코트디부아르', en: "Ivory Coast" },
  { code: 'JM', name: '자메이카', en: 'Jamaica' },
  { code: 'JP', name: '일본', en: 'Japan' },
  { code: 'JO', name: '요르단', en: 'Jordan' },
  { code: 'KZ', name: '카자흐스탄', en: 'Kazakhstan' },
  { code: 'KE', name: '케냐', en: 'Kenya' },
  { code: 'KI', name: '키리바시', en: 'Kiribati' },
  { code: 'KR', name: '대한민국', en: 'Korea' },
  { code: 'KP', name: '북한', en: 'Korea (North)' },
  { code: 'XK', name: '코소보', en: 'Kosovo' },
  { code: 'KW', name: '쿠웨이트', en: 'Kuwait' },
  { code: 'KG', name: '키르기스스탄', en: 'Kyrgyzstan' },
  { code: 'LA', name: '라오스', en: 'Laos' },
  { code: 'LV', name: '라트비아', en: 'Latvia' },
  { code: 'LB', name: '레바논', en: 'Lebanon' },
  { code: 'LS', name: '레소토', en: 'Lesotho' },
  { code: 'LR', name: '라이베리아', en: 'Liberia' },
  { code: 'LY', name: '리비아', en: 'Libya' },
  { code: 'LI', name: '리히텐슈타인', en: 'Liechtenstein' },
  { code: 'LT', name: '리투아니아', en: 'Lithuania' },
  { code: 'LU', name: '룩셈부르크', en: 'Luxembourg' },
  { code: 'MG', name: '마다가스카르', en: 'Madagascar' },
  { code: 'MW', name: '말라위', en: 'Malawi' },
  { code: 'MY', name: '말레이시아', en: 'Malaysia' },
  { code: 'MV', name: '몰디브', en: 'Maldives' },
  { code: 'ML', name: '말리', en: 'Mali' },
  { code: 'MT', name: '몰타', en: 'Malta' },
  { code: 'MH', name: '마셜제도', en: 'Marshall Islands' },
  { code: 'MR', name: '모리타니', en: 'Mauritania' },
  { code: 'MU', name: '모리셔스', en: 'Mauritius' },
  { code: 'MX', name: '멕시코', en: 'Mexico' },
  { code: 'FM', name: '미크로네시아', en: 'Micronesia' },
  { code: 'MD', name: '몰도바', en: 'Moldova' },
  { code: 'MC', name: '모나코', en: 'Monaco' },
  { code: 'MN', name: '몽골', en: 'Mongolia' },
  { code: 'ME', name: '몬테네그로', en: 'Montenegro' },
  { code: 'MA', name: '모로코', en: 'Morocco' },
  { code: 'MZ', name: '모잠비크', en: 'Mozambique' },
  { code: 'MM', name: '미얀마', en: 'Myanmar' },
  { code: 'NA', name: '나미비아', en: 'Namibia' },
  { code: 'NR', name: '나우루', en: 'Nauru' },
  { code: 'NP', name: '네팔', en: 'Nepal' },
  { code: 'NL', name: '네덜란드', en: 'Netherlands' },
  { code: 'NZ', name: '뉴질랜드', en: 'New Zealand' },
  { code: 'NI', name: '니카라과', en: 'Nicaragua' },
  { code: 'NE', name: '니제르', en: 'Niger' },
  { code: 'NG', name: '나이지리아', en: 'Nigeria' },
  { code: 'MK', name: '북마케도니아', en: 'North Macedonia' },
  { code: 'NO', name: '노르웨이', en: 'Norway' },
  { code: 'OM', name: '오만', en: 'Oman' },
  { code: 'PK', name: '파키스탄', en: 'Pakistan' },
  { code: 'PW', name: '팔라우', en: 'Palau' },
  { code: 'PS', name: '팔레스타인', en: 'Palestine' },
  { code: 'PA', name: '파나마', en: 'Panama' },
  { code: 'PG', name: '파푸아뉴기니', en: 'Papua New Guinea' },
  { code: 'PY', name: '파라과이', en: 'Paraguay' },
  { code: 'PE', name: '페루', en: 'Peru' },
  { code: 'PH', name: '필리핀', en: 'Philippines' },
  { code: 'PL', name: '폴란드', en: 'Poland' },
  { code: 'PT', name: '포르투갈', en: 'Portugal' },
  { code: 'QA', name: '카타르', en: 'Qatar' },
  { code: 'RO', name: '루마니아', en: 'Romania' },
  { code: 'RU', name: '러시아', en: 'Russia' },
  { code: 'RW', name: '르완다', en: 'Rwanda' },
  { code: 'KN', name: '세인트키츠네비스', en: 'Saint Kitts and Nevis' },
  { code: 'LC', name: '세인트루시아', en: 'Saint Lucia' },
  { code: 'VC', name: '세인트빈센트그레나딘', en: 'Saint Vincent and the Grenadines' },
  { code: 'WS', name: '사모아', en: 'Samoa' },
  { code: 'SM', name: '산마리노', en: 'San Marino' },
  { code: 'ST', name: '상투메프린시페', en: 'Sao Tome and Principe' },
  { code: 'SA', name: '사우디아라비아', en: 'Saudi Arabia' },
  { code: 'SN', name: '세네갈', en: 'Senegal' },
  { code: 'RS', name: '세르비아', en: 'Serbia' },
  { code: 'SC', name: '세이셸', en: 'Seychelles' },
  { code: 'SL', name: '시에라리온', en: 'Sierra Leone' },
  { code: 'SG', name: '싱가포르', en: 'Singapore' },
  { code: 'SK', name: '슬로바키아', en: 'Slovakia' },
  { code: 'SI', name: '슬로베니아', en: 'Slovenia' },
  { code: 'SB', name: '솔로몬제도', en: 'Solomon Islands' },
  { code: 'SO', name: '소말리아', en: 'Somalia' },
  { code: 'ZA', name: '남아프리카공화국', en: 'South Africa' },
  { code: 'SS', name: '남수단', en: 'South Sudan' },
  { code: 'ES', name: '스페인', en: 'Spain' },
  { code: 'LK', name: '스리랑카', en: 'Sri Lanka' },
  { code: 'SD', name: '수단', en: 'Sudan' },
  { code: 'SR', name: '수리남', en: 'Suriname' },
  { code: 'SE', name: '스웨덴', en: 'Sweden' },
  { code: 'CH', name: '스위스', en: 'Switzerland' },
  { code: 'SY', name: '시리아', en: 'Syria' },
  { code: 'TW', name: '대만', en: 'Taiwan' },
  { code: 'TJ', name: '타지키스탄', en: 'Tajikistan' },
  { code: 'TZ', name: '탄자니아', en: 'Tanzania' },
  { code: 'TH', name: '태국', en: 'Thailand' },
  { code: 'TL', name: '동티모르', en: 'Timor-Leste' },
  { code: 'TG', name: '토고', en: 'Togo' },
  { code: 'TO', name: '통가', en: 'Tonga' },
  { code: 'TT', name: '트리니다드토바고', en: 'Trinidad and Tobago' },
  { code: 'TN', name: '튀니지', en: 'Tunisia' },
  { code: 'TR', name: '튀르키예', en: 'Turkey' },
  { code: 'TM', name: '투르크메니스탄', en: 'Turkmenistan' },
  { code: 'TV', name: '투발루', en: 'Tuvalu' },
  { code: 'UG', name: '우간다', en: 'Uganda' },
  { code: 'UA', name: '우크라이나', en: 'Ukraine' },
  { code: 'AE', name: '아랍에미리트', en: 'United Arab Emirates' },
  { code: 'GB', name: '영국', en: 'United Kingdom' },
  { code: 'US', name: '미국', en: 'United States' },
  { code: 'UY', name: '우루과이', en: 'Uruguay' },
  { code: 'UZ', name: '우즈베키스탄', en: 'Uzbekistan' },
  { code: 'VU', name: '바누아투', en: 'Vanuatu' },
  { code: 'VA', name: '바티칸', en: 'Vatican City' },
  { code: 'VE', name: '베네수엘라', en: 'Venezuela' },
  { code: 'VN', name: '베트남', en: 'Vietnam' },
  { code: 'YE', name: '예멘', en: 'Yemen' },
  { code: 'ZM', name: '잠비아', en: 'Zambia' },
  { code: 'ZW', name: '짐바브웨', en: 'Zimbabwe' },
];

function countryFlagUrl(code) {
  return `https://flagcdn.com/24x18/${code.toLowerCase()}.png`;
}

function countryDisplayName(country) {
  return country.name;
}

const KO = {
  page_title: 'Global Lyrics Typing Battle - 전 세계 노래 가사 타자 연습 배틀',
  site_title: 'Global Lyrics Typing Battle',
  intro_heading: '노래 가사로 배우는 타자 연습',
  intro_text: 'Global Lyrics Typing Battle는 좋아하는 노래 가사를 따라 치면서 타자 속도와 정확도를 높일 수 있는 무료 타자 연습 사이트입니다. 한글 타자 연습, 영어 타자 연습 모두 가능하며, 원하는 곡을 검색해서 바로 시작해보세요.',
  login_signup_btn: '로그인 / 회원가입',
  logout_btn: '로그아웃',
  search_placeholder: '노래 제목이나 가수 이름을 입력하세요',
  search_btn: '검색',
  popular_heading: '🔥 인기 타자연습 곡',
  leaderboard_heading: '🏆 Top Players',
  live_search_heading: '🔎 실시간 검색곡',
  back_btn: '← 검색으로',
  ad_label: '광고',
  total_score_label: '종합점수',
  max_combo_label: '최대 콤보',
  restart_btn: '↻ 다시 시작 (tab)',
  best_records_heading: '이 곡 최고 기록',
  login_tab: '로그인',
  register_tab: '회원가입',
  google_btn: 'Google로 계속하기',
  divider_or: '또는',
  username_placeholder: '닉네임',
  password_placeholder: '비밀번호',
  register_username_placeholder: '닉네임 (로그인 ID로 사용됩니다)',
  register_password_placeholder: '비밀번호 (6자 이상)',
  confirm_password_placeholder: '비밀번호 확인',
  country_placeholder: '국가를 선택하세요',
  result_heading: '🎉 완료!',
  accuracy_label: '정확도 %',
  rank_label: '내 순위',
  avg_wpm_label: '다른 유저 평균 속도',
  avg_accuracy_label: '다른 유저 평균 정확도',
  attempts_label: '전체 도전 횟수',
  modal_ad_label: '광고 (300 x 250)',
  restart_btn_short: '↻ 다시 시작',
  close_btn: '닫기',
  searching: '검색 중...',
  no_results: '검색 결과가 없습니다.',
  loading_lyrics: '가사 불러오는 중...',
  no_lyrics: '이 곡은 가사가 없습니다.',
  no_records: '아직 기록이 없습니다.',
  times_suffix: '회',
  error_prefix: '오류: ',
  recent_comments_heading: '💬 최근 랭킹 소감',
  comment_prompt: '🎉 랭킹 10위 안에 들었습니다! 소감을 남겨보세요:',
  comment_placeholder: '랭킹 소감을 남겨보세요',
  comment_submit_btn: '소감 남기기',
  ranking_panel_heading: '이 곡 랭킹',
  score_unit: '점',
  accuracy_short: '정확도',
  mypage_btn: '마이페이지',
  mypage_heading: '마이페이지',
  favorites_heading: '⭐ 즐겨찾기',
  mypage_songs_label: '연습한 곡 수',
  mypage_attempts_label: '총 연습 횟수',
  mypage_best_label: '최고 점수',
  mypage_history_tab: '연습 기록',
  mypage_favorites_tab: '즐겨찾기',
  mypage_no_history: '아직 연습 기록이 없습니다.',
  mypage_no_favorites: '즐겨찾기한 곡이 없습니다.',
  footer_desc: '좋아하는 노래 가사로 타자 속도와 정확도를 높이는 무료 서비스. 전 세계 유저와 WPM을 겨루세요.',
  footer_legal: '법적 정보',
  footer_privacy: '개인정보처리방침',
  footer_terms: '이용약관',
};

function t(key) {
  return KO[key] ?? key;
}

function applyTranslations() {
  document.documentElement.lang = 'ko';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.title = t('page_title');
}

applyTranslations();



const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const searchStatus = document.getElementById('search-status');

const searchView = document.getElementById('search-view');
const typingView = document.getElementById('typing-view');
const backBtn = document.getElementById('back-btn');
const restartBtn = document.getElementById('restart-btn');

const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');
const typeArea = document.getElementById('type-area');
const lyricsDisplay = document.getElementById('lyrics-display');
const typingInput = document.getElementById('typing-input');
const comboDisplay = document.getElementById('combo-display');

const statWpm = document.getElementById('stat-wpm');
const statAccuracy = document.getElementById('stat-accuracy');
const statProgress = document.getElementById('stat-progress');
const statTotalScore = document.getElementById('stat-total-score');
const recordsList = document.getElementById('records-list');

const popularSection = document.getElementById('popular-section');
const popularList = document.getElementById('popular-list');

const leaderboardList = document.getElementById('leaderboard-list');

const liveSearchList = document.getElementById('live-search-list');

const recentCommentsList = document.getElementById('recent-comments-list');
const commentSection = document.getElementById('comment-section');
const commentInput = document.getElementById('comment-input');
const commentSubmitBtn = document.getElementById('comment-submit-btn');
const commentStatus = document.getElementById('comment-status');

const resultModal = document.getElementById('result-modal');
const modalWpm = document.getElementById('modal-wpm');
const modalAccuracy = document.getElementById('modal-accuracy');
const modalRank = document.getElementById('modal-rank');
const modalTotalScore = document.getElementById('modal-total-score');
const modalMaxCombo = document.getElementById('modal-max-combo');
const modalAvgWpm = document.getElementById('modal-avg-wpm');
const modalAvgAccuracy = document.getElementById('modal-avg-accuracy');
const modalAttempts = document.getElementById('modal-attempts');
const modalRestartBtn = document.getElementById('modal-restart-btn');
const modalCloseBtn = document.getElementById('modal-close-btn');
const commentSignupBtn = document.getElementById('comment-signup-btn');

const authLoggedOut = document.getElementById('auth-logged-out');
const authLoggedIn = document.getElementById('auth-logged-in');
const authDisplayName = document.getElementById('auth-display-name');
const loginOpenBtn = document.getElementById('login-open-btn');
const logoutBtn = document.getElementById('logout-btn');
const adminOpenBtn = document.getElementById('admin-open-btn');

const adminModal = document.getElementById('admin-modal');
const adminModalCloseBtn = document.getElementById('admin-modal-close-btn');

const authModal = document.getElementById('auth-modal');
const authModalCloseBtn = document.getElementById('auth-modal-close-btn');
const authTabs = document.querySelectorAll('.auth-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginError = document.getElementById('login-error');
const registerError = document.getElementById('register-error');

let currentSongId = null;
let targetText = '';
let startTime = null;      // 첫 키 입력 시점 (ms)
let finished = false;
let totalKeystrokes = 0;   // 모든 유효 키 입력 횟수 (정타+오타+백스페이스, keydown 기반)
let correctKeystrokes = 0; // 연속 정타 prefix 길이 (Net WPM 계산용)
let lastTypedLength = 0;   // 오타 차단 기준점
let comboCount = 0;        // 현재 연속 정타 수
let maxCombo = 0;
let wpmInterval = null;    // 50ms 인터벌 — Net WPM + 경과 시간 실시간 업데이트
let _pendingScore = null;  // 비로그인 상태에서 완료 시 저장 → 로그인 후 재제출용

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  performSearch(searchInput.value.trim());
});

async function performSearch(q) {
  if (!q) return;

  searchStatus.innerHTML = `<span class="spinner"></span> ${escapeHtml(t('searching'))} <span class="search-hint">This may take up to 5 seconds...</span>`;
  searchResults.innerHTML = '';

  try {
    //const resp = await fetch(`https://lyricstyping.byungduks.workers.dev/api/search?q=${encodeURIComponent(q)}`);
    const resp = await fetch(`search.json`);
    const results = await resp.json();
    if (!resp.ok) throw new Error(results.error || 'Search failed');

    if (results.length === 0) {
      searchStatus.textContent = t('no_results');
      return;
    }

    searchStatus.textContent = '';
    for (const song of results) {
      const li = document.createElement('li');
      li.innerHTML = `<span>${escapeHtml(song.trackName)} - ${escapeHtml(song.artistName)}</span>`;
      li.addEventListener('click', () => openSong(song.id));
      searchResults.appendChild(li);
    }
  } catch (err) {
    searchStatus.textContent = `${t("error_prefix")}${err.message}`;
  }
}

searchInput.addEventListener('input', () => {
  if (!searchInput.value.trim()) {
    searchResults.innerHTML = '';
    searchStatus.textContent = '';
    popularSection.classList.remove('hidden');
  }
});

async function loadPopular() {
  try {
    //const resp = await fetch('https://lyricstyping.byungduks.workers.dev/api/popular');
    const resp = await fetch(`popular.json`);
    const songs = await resp.json();

    popularList.innerHTML = '';
    if (songs.length === 0) {
      popularSection.classList.add('hidden');
      return;
    }

    songs.forEach((song, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="/lyrics/${song.slug}">
          <span class="rank">${index + 1}</span>
          <span>${escapeHtml(song.trackName)} - ${escapeHtml(song.artistName)}</span>
          <span class="play-count">${song.playCount}${t('times_suffix')}</span>
        </a>
      `;
      li.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        openSong(song.id);
      });
      popularList.appendChild(li);
    });
  } catch (err) {
    console.error(err);
  }
}

async function loadRecentComments() {
  try {
    //const resp = await fetch('https://lyricstyping.byungduks.workers.dev/api/comments/recent');
    const resp = await fetch('recent.json');
    const comments = await resp.json();

    recentCommentsList.innerHTML = '';
    if (comments.length === 0) {
      document.getElementById('recent-comments-section').classList.add('hidden');
      return;
    }
    document.getElementById('recent-comments-section').classList.remove('hidden');

    for (const comment of comments) {
      const li = document.createElement('li');
      const flag = comment.country ? `<img src="${countryFlagUrl(comment.country)}" alt="" />` : '';
      li.innerHTML = `
        <div class="comment-meta">
          ${flag}
          <span class="comment-name">${escapeHtml(comment.displayName)}</span>
          <span class="rank-badge">#${comment.rank}</span>
          <span class="comment-song">· ${escapeHtml(comment.trackName)} - ${escapeHtml(comment.artistName)}</span>
        </div>
        <div class="comment-text">${escapeHtml(comment.content)}</div>
      `;
      recentCommentsList.appendChild(li);
    }
  } catch (err) {
    console.error(err);
  }
}

async function loadLeaderboard() {
  try {
    //const resp = await fetch('https://lyricstyping.byungduks.workers.dev/api/leaderboard');
    const resp = await fetch('leaderboard.json');
    const users = await resp.json();

    leaderboardList.innerHTML = '';
    if (users.length === 0) {
      document.getElementById('leaderboard-section').classList.add('hidden');
      return;
    }
    document.getElementById('leaderboard-section').classList.remove('hidden');

    users.forEach((user, index) => {
      const li = document.createElement('li');
      const flag = user.country ? `<img src="${countryFlagUrl(user.country)}" alt="" />` : '';
      li.innerHTML = `
        <span class="rank">${index + 1}</span>
        ${flag}
        <span>${escapeHtml(user.displayName)}</span>
        <span class="best-wpm">${(user.bestScore ?? 0).toLocaleString()}</span>
      `;
      leaderboardList.appendChild(li);
    });
  } catch (err) {
    console.error(err);
  }
}

async function loadLiveSearches() {
  try {
    //const resp = await fetch('https://lyricstyping.byungduks.workers.dev/api/search-log/recent');
    const resp = await fetch('search-log-recent.json');
    const entries = await resp.json();

    liveSearchList.innerHTML = '';
    if (entries.length === 0) {
      document.getElementById('live-search-section').classList.add('hidden');
      return;
    }
    document.getElementById('live-search-section').classList.remove('hidden');

    for (const entry of entries) {
      const li = document.createElement('li');
      const flag = entry.country
        ? `<img class="live-search-flag" src="${countryFlagUrl(entry.country)}" alt="" onerror="this.outerHTML='<span class=&quot;live-search-flag live-search-flag-unknown&quot;>🌐</span>'" />`
        : '<span class="live-search-flag live-search-flag-unknown">🌐</span>';
      li.innerHTML = `
        <a href="lyrics.html?q=${entry.slug}">
          ${flag}
          <span>${escapeHtml(entry.trackName)} - ${escapeHtml(entry.artistName)}</span>
        </a>
      `;
      li.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        openSong(entry.songId);
      });
      liveSearchList.appendChild(li);
    }
  } catch (err) {
    console.error(err);
  }
}

loadPopular();
loadRecentComments();
loadLeaderboard();
loadLiveSearches();

// Coming from a server-rendered /lyrics/:slug page's "시작하기" link —
// jump straight into the typing view for that song.
const requestedSongId = new URLSearchParams(location.search).get('song');
if (requestedSongId) {
  openSong(Number(requestedSongId));
  history.replaceState(null, '', location.pathname);
}

const albumArtImg = document.getElementById('album-art');

async function fetchAlbumArt(trackName, artistName) {
  try {
    const q = encodeURIComponent(`${trackName} ${artistName}`);
    const res = await fetch(`https://itunes.apple.com/search?term=${q}&media=music&entity=song&limit=1`);
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      return data.results[0].artworkUrl100.replace('100x100bb', '400x400bb');
    }
  } catch (e) {}
  return null;
}

async function openSong(id) {
  searchStatus.innerHTML = `<span class="spinner"></span> ${escapeHtml(t('loading_lyrics'))} <span class="search-hint">This may take up to 5 seconds...</span>`;
  try {
    //const resp = await fetch(`https://lyricstyping.byungduks.workers.dev/api/songs/${id}`);
    const resp = await fetch(`songs.json`);
    const song = await resp.json();
    if (!resp.ok) throw new Error(song.error || 'Failed to load');
    if (!song.plainLyrics) throw new Error(t('no_lyrics'));

    currentSongId = song.id;
    songTitle.textContent = song.trackName;
    songArtist.textContent = song.artistName;
    targetText = cleanLyrics(song.plainLyrics);

    albumArtImg.classList.add('hidden');
    albumArtImg.src = '';
    fetchAlbumArt(song.trackName, song.artistName).then((url) => {
      if (url) {
        albumArtImg.src = url;
        albumArtImg.classList.remove('hidden');
      }
    });

    loadRecords(song.id);
    loadSongRanking(song.id);
    loadLiveSearches();
    ytPlayer.load(song.youtubeId || null);
    if (!song.youtubeId) {
      fetch(`https://lyricstyping.byungduks.workers.dev/api/songs/${song.id}/youtube/auto`)
        .then((r) => r.json())
        .then((d) => { if (d.youtubeId) ytPlayer.load(d.youtubeId); })
        .catch(() => {});
    }
    favoriteBtn.classList.add('hidden');
    favoriteBtn.textContent = '♡';
    favoriteBtn.classList.remove('favorited');
    checkFavorite(song.id);

    searchView.classList.remove('active');
    typingView.classList.add('active');
    searchStatus.textContent = '';

    resetTyping();
  } catch (err) {
    searchStatus.textContent = `${t("error_prefix")}${err.message}`;
  }
}

function cleanLyrics(text) {
  return text
    .replace(/\[\d{2}:\d{2}\.\d{2,3}\]/g, '')
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .join('\n');
}

backBtn.addEventListener('click', goHome);
document.getElementById('home-link').addEventListener('click', goHome);

function goHome() {
  typingView.classList.remove('active');
  searchView.classList.add('active');
  searchInput.value = '';
  searchResults.innerHTML = '';
  searchStatus.textContent = '';
  popularSection.classList.remove('hidden');
}

restartBtn.addEventListener('click', resetTyping);

typeArea.addEventListener('click', () => typingInput.focus());
typingInput.addEventListener('blur', () => typeArea.classList.add('blurred'));
typingInput.addEventListener('focus', () => typeArea.classList.remove('blurred'));

document.addEventListener('keydown', (e) => {
  if (!typingView.classList.contains('active')) return;

  if (e.key === 'Tab') {
    e.preventDefault();
    resetTyping();
  }

  if (e.altKey && e.key === 'Enter') {
    e.preventDefault();
    forceComplete();
  }
});

function forceComplete() {
  if (finished) return;
  typingInput.value = targetText;
  totalKeystrokes = targetText.length;
  correctKeystrokes = targetText.length;
  renderLyrics(targetText);
  statWpm.textContent = '100';
  statAccuracy.textContent = '100 %';
  statProgress.textContent = '100 %';
  // Score is intentionally NOT topped up here — it only reflects keystrokes
  // the user actually typed, so skipping to the end via this debug shortcut
  // doesn't grant points for the untyped remainder.
  finishTyping();
}

function resetTyping() {
  stopSpaceHold();
  if (wpmInterval) { clearInterval(wpmInterval); wpmInterval = null; }
  startTime = null;
  finished = false;
  totalKeystrokes = 0;
  correctKeystrokes = 0;
  lastTypedLength = 0;
  comboCount = 0;
  maxCombo = 0;
  _pendingScore = null;
  comboDisplay.classList.add('hidden');
  typingInput.value = '';
  typingInput.disabled = false;
  statWpm.textContent = '0.00';
  statAccuracy.textContent = '100 %';
  statProgress.textContent = '0 %';
  statTotalScore.textContent = '00:00.00';
  hideResultModal();
  renderLyrics('');
  typingInput.focus();
}


function insertSpaceKeystroke() {
  if (finished) return;
  const start = typingInput.selectionStart;
  const end = typingInput.selectionEnd;
  typingInput.setRangeText(' ', start, end, 'end');
  typingInput.dispatchEvent(new Event('input', { bubbles: true }));
}

// Holding Space down should keep advancing the caret, but some Korean IMEs
// swallow the OS's native keyboard auto-repeat for Space while Hangul input
// mode is on (no further 'keydown' events arrive at all while the key is
// held), which left the caret stuck even though a single tap worked fine.
// Rather than depend on the browser/OS to keep firing keydown, we run our
// own repeat timer — but only after a real "hold" delay, mirroring how
// physical keyboard auto-repeat works (a brief initial delay before it
// starts repeating). Without that delay, a normal quick tap — which is
// often held for 70-150ms — would double-insert: once immediately, and
// once again from the repeat timer's first tick before keyup arrives.
let spaceHeld = false;
let spaceRepeatTimeout = null;
let spaceRepeatInterval = null;

function stopSpaceHold() {
  spaceHeld = false;
  if (spaceRepeatTimeout) {
    clearTimeout(spaceRepeatTimeout);
    spaceRepeatTimeout = null;
  }
  if (spaceRepeatInterval) {
    clearInterval(spaceRepeatInterval);
    spaceRepeatInterval = null;
  }
}

typingInput.addEventListener('keydown', (e) => {
  if (finished) return;

  // 유효 키 입력 횟수 카운트 (정확도 계산용)
  // - 단일 문자(e.key.length===1): 알파벳, 숫자, 기호, 공백 모두 포함
  // - Backspace: 수정 행위도 타이핑 비용으로 집계
  // - 제외: Shift·Ctrl·Alt·Meta 등 수정자 키, 방향키, F1-F12 등
  if (startTime && (e.key.length === 1 || e.key === 'Backspace')) {
    totalKeystrokes++;
  }

  // Korean IME composition can also swallow a single Space keypress to just
  // finalize the current syllable without inserting the character itself.
  // By the time this keydown fires, the textarea's value/selection already
  // reflect the live composition preview (browsers keep .value in sync as
  // each jamo is typed), so we always splice in exactly one literal space
  // at the current cursor position ourselves — regardless of e.isComposing,
  // since that flag's timing relative to Space is unreliable across
  // browsers/IMEs. This guarantees Space always advances the caret by one.
  if (e.key === ' ') {
    // While the IME is composing (e.g. Japanese/Chinese candidate selection,
    // Korean syllable mid-assembly), Space is the IME's own control key —
    // let the browser/IME handle it without interference.
    if (e.isComposing) return;

    // Non-composing Space: apply the Korean-IME-aware manual insert.
    // Korean IMEs can swallow the browser's native Space event (the syllable
    // finalises but no character appears), so we insert it ourselves and run
    // our own auto-repeat timer to avoid the OS repeat being swallowed too.
    e.preventDefault();
    if (!spaceHeld) {
      spaceHeld = true;
      insertSpaceKeystroke();
      spaceRepeatTimeout = setTimeout(() => {
        spaceRepeatInterval = setInterval(insertSpaceKeystroke, 70);
      }, 350);
    }
    return;
  }

  // Pressing Enter while on the last lyric line ends the session right
  // away with whatever was actually typed, regardless of typos or how
  // much of that final line is complete — no need to match it exactly.
  if (e.key === 'Enter' && !e.isComposing) {
    const currentLineIndex = typingInput.value.split('\n').length - 1;
    const totalLines = targetText.split('\n').length;
    if (currentLineIndex === totalLines - 1) {
      e.preventDefault();
      finishTyping();
    }
  }
});

typingInput.addEventListener('keyup', (e) => {
  if (e.key === ' ') stopSpaceHold();
});
typingInput.addEventListener('blur', stopSpaceHold);

typingInput.addEventListener('input', (e) => {
  if (finished) return;

  // 첫 키 입력 시 타이머 & WPM 인터벌 시작
  if (!startTime) {
    startTime = Date.now();
    startWpmInterval();
    fetch(`https://lyricstyping.byungduks.workers.dev/api/songs/${currentSongId}/attempts`, { method: 'POST' }).catch(() => {});
    loadPopular();
  }

  const typed = typingInput.value;
  totalKeystrokes = typed.length;

  // 연속 정타 prefix 계산 (Net WPM + 오타 차단에 사용)
  correctKeystrokes = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === targetText[i]) correctKeystrokes++;
    else break; // 첫 오타 지점에서 멈춤
  }

  // 오타가 있는 상태에서 더 전진하는 것을 차단 (삭제만 허용)
  // — IME 조합 중에는 간섭하지 않음
  if (!e.isComposing && typed.length > lastTypedLength && correctKeystrokes < typed.length) {
    comboCount = 0;  // 오타 시도 → 콤보 리셋
    updateComboDisplay();
    // correctKeystrokes 위치까지만 남김 — IME 조합 중 정확히 입력된 글자는 보존
    typingInput.value = typed.slice(0, correctKeystrokes);
    lastTypedLength = correctKeystrokes; // 기준점 갱신 (연속 차단 허용)
    renderLyrics(typingInput.value);
    updateStats(typingInput.value);
    return;
  }

  // IME 조합이 확정된 시점에만 lastTypedLength 동기화 + 콤보 갱신
  if (!e.isComposing) {
    if (typed.length > lastTypedLength) {
      // 정타일 때만 콤보 증가 (오타 차단 덕분에 여기 오면 항상 정타)
      comboCount += typed.length - lastTypedLength;
      if (comboCount > maxCombo) maxCombo = comboCount;
    } else if (typed.length < lastTypedLength) {
      comboCount = 0; // 백스페이스 → 콤보 리셋
    }
    lastTypedLength = typed.length;
    updateComboDisplay();
  }

  renderLyrics(typed);
  updateStats(typed);

  if (!e.isComposing && typed.length >= targetText.length) {
    finishTyping();
  }
});

function renderLyrics(typed) {
  const targetLines = targetText.split('\n');
  const typedLines = typed.split('\n');
  const currentLineIndex = typedLines.length - 1;

  let html = '';
  for (let i = 0; i < targetLines.length; i++) {
    const targetLine = targetLines[i];
    const typedLine = i < typedLines.length ? typedLines[i] : '';
    const isCurrent = i === currentLineIndex && !finished;

    let typedHtml = '';
    for (let j = 0; j < typedLine.length; j++) {
      const ch = escapeHtml(typedLine[j]);
      const isCorrect = typedLine[j] === targetLine[j];
      typedHtml += `<span class="${isCorrect ? 'correct' : 'wrong'}">${ch}</span>`;
    }
    if (isCurrent) {
      typedHtml += '<span id="caret-anchor" class="caret"></span>';
    }

    html += `<div class="lyric-line"><div class="target-row">${escapeHtml(targetLine)}</div><div class="typed-row">${typedHtml}</div></div>`;
  }
  lyricsDisplay.innerHTML = html;
  scrollToCaret();
}

function scrollToCaret() {
  const caret = document.getElementById('caret-anchor');
  if (!caret) return;
  const containerRect = lyricsDisplay.getBoundingClientRect();
  const caretRect = caret.getBoundingClientRect();
  const lineBlock = caret.closest('.lyric-line');
  const offset = caretRect.top - containerRect.top + lyricsDisplay.scrollTop;
  lyricsDisplay.scrollTop = Math.max(offset - lineBlock.offsetHeight, 0);
}

/* ── 실시간 Net WPM + 경과 시간 디스플레이 ──────────────────────────────
   formatElapsedTime : ms → "MM:SS.cs" (centiseconds 2자리)
   animateWpm        : 숫자 변화 시 위/아래 슬라이드 애니메이션
   startWpmInterval  : 50ms마다 Net WPM 재계산 + 경과 시간 갱신
                       스파이크 방지: 시작 후 1500ms 이전 WPM = 0 고정
─────────────────────────────────────────────────────────────────────── */
function formatElapsedTime(ms) {
  const min = Math.floor(ms / 60000);
  const sec = Math.floor((ms % 60000) / 1000);
  const cs  = Math.floor((ms % 1000) / 10);
  return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
}

let _wpmDisplayTimer = 0;
function animateWpm(newWpm) {
  const el = statWpm;
  const newWpmFixed = typeof newWpm === 'number' ? newWpm.toFixed(2) : newWpm;
  if (newWpmFixed === el.textContent) return;
  // 표시 업데이트는 200ms마다 한 번으로 제한 — 숫자가 안정적으로 보임
  const now = Date.now();
  if (now - _wpmDisplayTimer < 200) return;
  _wpmDisplayTimer = now;
  el.textContent = newWpmFixed;
}

function startWpmInterval() {
  if (wpmInterval) clearInterval(wpmInterval);
  wpmInterval = setInterval(() => {
    if (!startTime || finished) return;
    const elapsedMs = Date.now() - startTime;

    // 경과 시간 박스 실시간 갱신
    statTotalScore.textContent = formatElapsedTime(elapsedMs);

    // 초반 스파이크 방지: 1500ms 이전은 WPM 0 고정
    if (elapsedMs < 1500) { animateWpm(0); return; }
    const netWpm = (correctKeystrokes / 5) / (elapsedMs / 60000);
    animateWpm(Math.round(netWpm * 100) / 100); // 소수점 2자리
  }, 50);
}


function updateStats(typed) {
  // WPM: 50ms 인터벌이 처리, 경과 시간: 인터벌이 score 박스에 표시
  // 실시간 정확도: 연속 정타 수 / 총 키 입력 횟수 (백스페이스 포함)
  const accuracy = totalKeystrokes > 0 ? (correctKeystrokes / totalKeystrokes) * 100 : 100;
  const progress = (typed.length / targetText.length) * 100;
  statAccuracy.textContent = `${accuracy.toFixed(1)} %`;
  statProgress.textContent = `${Math.min(progress, 100).toFixed(0)} %`;
}

function updateComboDisplay() {
  if (comboCount >= 10) {
    comboDisplay.textContent = `${comboCount} combo`;
    comboDisplay.classList.remove('hidden');
  } else {
    comboDisplay.classList.add('hidden');
  }
}

async function finishTyping() {
  stopSpaceHold();
  if (wpmInterval) { clearInterval(wpmInterval); wpmInterval = null; }
  finished = true;
  typingInput.disabled = true;

  // ── 최종 통계 계산 (TypeRacer 스타일) ───────────────────────────────
  const finalElapsedMs = startTime ? Date.now() - startTime : 0;

  // A. WPM: 인터벌이 마지막으로 표시한 값 그대로 사용
  //    finishTyping()에서 Date.now()를 다시 호출하면 인터벌 마지막 틱보다
  //    수 ms 늦어져 분모가 커지고 WPM이 미세하게 달라지는 문제 방지
  const wpm = parseFloat(statWpm.textContent) || 0;

  // B. 최종 정확도 = 가사 총 글자 수 / 총 키 입력 횟수 × 100
  const accuracy = totalKeystrokes > 0
    ? (targetText.length / totalKeystrokes) * 100
    : 100;

  // C. 소요 시간 MM:SS.cs
  const elapsedFormatted = formatElapsedTime(finalElapsedMs);

  // 사이드바 확정값 반영 (WPM은 인터벌이 이미 최신값으로 채워뒀으므로 재갱신 불필요)
  statAccuracy.textContent  = `${accuracy.toFixed(1)} %`;
  statTotalScore.textContent = elapsedFormatted;
  // ─────────────────────────────────────────────────────────────────────

  // Track whether this finish happened while logged out so applyAuthState()
  // can re-POST the score once the user logs in from the result modal.
  _pendingScore = authLoggedOut.classList.contains('hidden')
    ? null
    : { songId: currentSongId, wpm, accuracy, totalScore: wpm };

  try {
    const resp = await fetch(`https://lyricstyping.byungduks.workers.dev/api/songs/${currentSongId}/records`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ wpm, accuracy, totalScore: wpm }),
    });
    const data = await resp.json();
    renderRecords(data.records);
    loadSongRanking(currentSongId);
    loadPopular();
    loadLeaderboard();
    showResultModal(wpm, accuracy, data.rank, data.stats, wpm, elapsedFormatted, maxCombo);
  } catch (err) {
    console.error(err);
  }
}

function showResultModal(wpm, accuracy, rank, stats, totalScore, elapsedFormatted, finalMaxCombo) {
  // 최다 연속 COMBO
  modalWpm.textContent = finalMaxCombo ?? 0;
  modalWpm.nextElementSibling.textContent = t('max_combo_label');

  modalAccuracy.textContent = accuracy.toFixed(1);
  modalRank.textContent = rank ? `#${rank}` : '-';

  // 종합점수 → WPM
  modalTotalScore.textContent = wpm.toFixed(2);
  modalTotalScore.nextElementSibling.textContent = 'WPM';

  // elapsed_time_label → Time
  modalMaxCombo.textContent = elapsedFormatted;
  modalMaxCombo.nextElementSibling.textContent = 'Time';

  if (stats && stats.attempts > 0) {
    modalAvgWpm.textContent = `${stats.avgWpm.toFixed(0)} wpm`;
    modalAvgAccuracy.textContent = `${stats.avgAccuracy.toFixed(0)}%`;
    modalAttempts.textContent = `${stats.attempts}${t('times_suffix')}`;
  } else {
    modalAvgWpm.textContent = '-';
    modalAvgAccuracy.textContent = '-';
    modalAttempts.textContent = '-';
  }

  if (rank && rank <= 10) {
    commentSection.classList.remove('hidden');
    commentInput.value = '';
    commentStatus.textContent = '';
    commentSubmitBtn.disabled = false;
    // Logged-out users would just hit a 401 trying to post — offer sign-up
    // right here instead, so a great run doesn't end at a login wall.
    // authLoggedOut carries the 'hidden' class once the user IS logged in.
    const isLoggedIn = authLoggedOut.classList.contains('hidden');
    commentSignupBtn.classList.toggle('hidden', isLoggedIn);
  } else {
    commentSection.classList.add('hidden');
  }

  resultModal.classList.remove('hidden');
}

function hideResultModal() {
  resultModal.classList.add('hidden');
}

commentSubmitBtn.addEventListener('click', async () => {
  const content = commentInput.value.trim();
  if (!content) return;

  commentSubmitBtn.disabled = true;
  try {
    const resp = await fetch(`https://lyricstyping.byungduks.workers.dev/api/songs/${currentSongId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.error || 'Failed to post comment.');

    commentStatus.textContent = '';
    commentSection.classList.add('hidden');
    loadRecentComments();
  } catch (err) {
    commentStatus.textContent = err.message;
    commentSubmitBtn.disabled = false;
  }
});

modalCloseBtn.addEventListener('click', hideResultModal);
modalRestartBtn.addEventListener('click', () => {
  hideResultModal();
  resetTyping();
});

async function loadRecords(id) {
  try {
    const resp = await fetch(`https://lyricstyping.byungduks.workers.dev/api/songs/${id}/records`);
    const data = await resp.json();
    renderRecords(data.records);
  } catch (err) {    console.error(err);
  }
}

const songRankingList = document.getElementById('song-ranking-list');
const songRankingEmpty = document.getElementById('song-ranking-empty');

const favoriteBtn = document.getElementById('favorite-btn');

const mypageModal = document.getElementById('mypage-modal');
const mypageModalCloseBtn = document.getElementById('mypage-modal-close-btn');
const mypageOpenBtn = document.getElementById('mypage-open-btn');
const mypageHistoryList = document.getElementById('mypage-history-list');
const mypageFavoritesList = document.getElementById('mypage-favorites-list');
const mypageTabs = document.querySelectorAll('.mypage-tab');
const mypageHistoryPanel = document.getElementById('mypage-history-panel');
const mypageFavoritesPanel = document.getElementById('mypage-favorites-panel');

function formatRankingDate(createdAt) {
  if (!createdAt) return '';
  const datePart = createdAt.split(' ')[0];
  const parts = datePart.split('-');
  if (parts.length < 3) return datePart;
  return `${parts[0]}.${parts[1]}.${parts[2]}`;
}

async function loadSongRanking(songId) {
  songRankingList.innerHTML = '';
  songRankingEmpty.textContent = '';
  try {
    const resp = await fetch(`https://lyricstyping.byungduks.workers.dev/api/songs/${songId}/ranking`);
    const entries = await resp.json();

    if (!entries || entries.length === 0) {
      songRankingEmpty.textContent = t('no_records');
      return;
    }

    for (const entry of entries) {
      const li = document.createElement('li');
      const flag = entry.country
        ? `<img class="ranking-flag" src="${countryFlagUrl(entry.country)}" alt="" />`
        : '';
      const rankClass = entry.rank === 1 ? 'gold' : entry.rank === 2 ? 'silver' : entry.rank === 3 ? 'bronze' : '';
      const comment = entry.comment
        ? `<span class="ranking-comment">"${escapeHtml(entry.comment)}"</span>`
        : '<span class="ranking-comment"></span>';
      const dateStr = formatRankingDate(entry.createdAt);

      li.innerHTML = `
        <div class="ranking-entry-top">
          <span class="ranking-rank ${rankClass}">#${entry.rank}</span>
          ${flag}
          <span class="ranking-name">${escapeHtml(entry.displayName)}</span>
          <span class="ranking-score">${entry.totalScore.toLocaleString()}</span>
        </div>
        <div class="ranking-entry-bottom">
          ${comment}
          <span class="ranking-date">${escapeHtml(dateStr)}</span>
        </div>
      `;
      songRankingList.appendChild(li);
    }
  } catch (err) {
    console.error(err);
  }
}

function renderRecords(records) {
  recordsList.innerHTML = '';
  if (!records || records.length === 0) {
    recordsList.innerHTML = `<li>${t('no_records')}</li>`;
    return;
  }
  records.forEach((r, index) => {
    const li = document.createElement('li');
    const scoreText = Number.isInteger(r.total_score) ? `${r.total_score.toLocaleString()}${t('score_unit')} / ` : '';
    const statsText = `${scoreText}${Number(r.wpm).toFixed(0)} WPM / ${t('accuracy_short')} ${Number(r.accuracy).toFixed(0)}%`;
    const flag = r.country ? `<img class="ranking-flag" src="${countryFlagUrl(r.country)}" alt="" />` : '';
    const name = r.display_name ? escapeHtml(r.display_name) : '';
    li.innerHTML = `
      <div class="record-entry-top">
        <span class="record-rank">${index + 1}</span>
        ${flag}
        <span class="record-name">${name}</span>
      </div>
      <div class="record-stats">${statsText}</div>
    `;
    recordsList.appendChild(li);
  });
}

async function checkFavorite(songId) {
  const isLoggedIn = authLoggedOut.classList.contains('hidden');
  if (!isLoggedIn) return;
  favoriteBtn.classList.remove('hidden');
  try {
    const resp = await fetch(`https://lyricstyping.byungduks.workers.dev/api/songs/${songId}/favorite`);
    const data = await resp.json();
    setFavoriteState(data.favorited);
  } catch (err) {
    console.error(err);
  }
}

function setFavoriteState(favorited) {
  favoriteBtn.textContent = favorited ? '♥' : '♡';
  favoriteBtn.classList.toggle('favorited', favorited);
}

favoriteBtn.addEventListener('click', async () => {
  try {
    const resp = await fetch(`https://lyricstyping.byungduks.workers.dev/api/songs/${currentSongId}/favorite`, { method: 'POST' });
    const data = await resp.json();
    setFavoriteState(data.favorited);
  } catch (err) {
    console.error(err);
  }
});


// Legal modals (Privacy / Terms)
document.getElementById('privacy-open-btn').addEventListener('click', () => {
  document.getElementById('privacy-modal').classList.remove('hidden');
});
document.getElementById('terms-open-btn').addEventListener('click', () => {
  document.getElementById('terms-modal').classList.remove('hidden');
});
document.querySelectorAll('.legal-modal-close').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.getElementById(btn.dataset.close).classList.add('hidden');
  });
});
document.querySelectorAll('.legal-modal').forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });
});

mypageOpenBtn.addEventListener('click', () => {
  mypageModal.classList.remove('hidden');
  loadMyPage();
});

mypageModalCloseBtn.addEventListener('click', () => {
  mypageModal.classList.add('hidden');
});

mypageModal.addEventListener('click', (e) => {
  if (e.target === mypageModal) mypageModal.classList.add('hidden');
});

mypageTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    mypageTabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    const isHistory = tab.dataset.tab === 'history';
    mypageHistoryPanel.classList.toggle('hidden', !isHistory);
    mypageFavoritesPanel.classList.toggle('hidden', isHistory);
  });
});

async function loadMyPage() {
  document.getElementById('mypage-stat-songs').textContent = '-';
  document.getElementById('mypage-stat-attempts').textContent = '-';
  document.getElementById('mypage-stat-best').textContent = '-';
  mypageHistoryList.innerHTML = '';
  mypageFavoritesList.innerHTML = '';

  mypageTabs.forEach((t) => t.classList.remove('active'));
  mypageTabs[0].classList.add('active');
  mypageHistoryPanel.classList.remove('hidden');
  mypageFavoritesPanel.classList.add('hidden');

  try {
    const [histResp, favResp] = await Promise.all([
      fetch('https://lyricstyping.byungduks.workers.dev/api/users/me/history'),
      fetch('https://lyricstyping.byungduks.workers.dev/api/favorites'),
    ]);
    const history = await histResp.json();
    const favs = await favResp.json();

    const totalAttempts = history.reduce((s, r) => s + (r.attemptCount || 0), 0);
    const bestScore = history.length > 0 ? Math.max(...history.map((r) => r.bestScore || 0)) : 0;
    document.getElementById('mypage-stat-songs').textContent = history.length;
    document.getElementById('mypage-stat-attempts').textContent = totalAttempts;
    document.getElementById('mypage-stat-best').textContent = bestScore.toLocaleString();

    if (history.length === 0) {
      mypageHistoryList.innerHTML = `<li class="mypage-empty">${t('mypage_no_history')}</li>`;
    } else {
      for (const r of history) {
        const li = document.createElement('li');
        li.className = 'mypage-song-item';
        const date = r.lastPlayed ? r.lastPlayed.split(' ')[0].replace(/-/g, '.') : '';
        li.innerHTML = `
          <div class="mypage-song-info">
            <div class="mypage-song-name">${escapeHtml(r.trackName)}</div>
            <div class="mypage-song-meta">${escapeHtml(r.artistName)} · ${r.attemptCount}${t('times_suffix')} · ${date}</div>
          </div>
          <span class="mypage-song-score">${(r.bestScore || 0).toLocaleString()}${t('score_unit')}</span>
        `;
        li.addEventListener('click', () => {
          mypageModal.classList.add('hidden');
          openSong(r.songId);
        });
        mypageHistoryList.appendChild(li);
      }
    }

    if (favs.length === 0) {
      mypageFavoritesList.innerHTML = `<li class="mypage-empty">${t('mypage_no_favorites')}</li>`;
    } else {
      for (const f of favs) {
        const li = document.createElement('li');
        li.className = 'mypage-song-item';
        li.innerHTML = `
          <div class="mypage-song-info">
            <div class="mypage-song-name">${escapeHtml(f.trackName)}</div>
            <div class="mypage-song-meta">${escapeHtml(f.artistName)}</div>
          </div>
          <span style="font-size:18px; color:#e74c3c;">♥</span>
        `;
        li.addEventListener('click', () => {
          mypageModal.classList.add('hidden');
          openSong(f.songId);
        });
        mypageFavoritesList.appendChild(li);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

loginOpenBtn.addEventListener('click', () => authModal.classList.remove('hidden'));
authModalCloseBtn.addEventListener('click', () => authModal.classList.add('hidden'));

commentSignupBtn.addEventListener('click', () => {
  authModal.classList.remove('hidden');
  document.querySelector('.auth-tab[data-tab="register"]').click();
});

authTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    authTabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    const isLogin = tab.dataset.tab === 'login';
    loginForm.classList.toggle('hidden', !isLogin);
    registerForm.classList.toggle('hidden', isLogin);
    loginError.textContent = '';
    registerError.textContent = '';
  });
});

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  loginError.textContent = '';
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value;

  try {
    const resp = await fetch('https://lyricstyping.byungduks.workers.dev/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.error || 'Login failed.');

    applyAuthState(data.user);
    authModal.classList.add('hidden');
    loginForm.reset();
    // If this login happened from the result screen's sign-up prompt, the
    // score is still right there — let them post their comment immediately.
    commentSignupBtn.classList.add('hidden');
  } catch (err) {
    loginError.textContent = err.message;
  }
});

const countryPicker = document.getElementById('country-picker');
const countryInput = document.getElementById('register-country-input');
const countryHidden = document.getElementById('register-country');
const countryList = document.getElementById('register-country-list');
const countryFlagPreview = document.getElementById('country-flag-preview');


function renderCountryList(filter) {
  const normalized = filter.trim().toLowerCase();
  const matches = normalized
    ? COUNTRIES.filter(
        (c) => c.en.toLowerCase().startsWith(normalized) || c.name.startsWith(filter.trim())
      )
    : COUNTRIES;

  countryList.innerHTML = '';
  if (matches.length === 0) {
    countryList.innerHTML = `<li class="country-empty">${t('no_results')}</li>`;
    return;
  }

  for (const country of matches) {
    const li = document.createElement('li');
    li.innerHTML = `<img class="country-flag" src="${countryFlagUrl(country.code)}" alt="" /> ${escapeHtml(countryDisplayName(country))}`;
    li.addEventListener('click', () => {
      countryHidden.value = country.code;
      countryInput.value = countryDisplayName(country);
      countryInput.dataset.selectedLabel = countryInput.value;
      countryInput.classList.add('has-flag');
      countryFlagPreview.src = countryFlagUrl(country.code);
      countryFlagPreview.classList.remove('hidden');
      countryList.classList.add('hidden');
    });
    countryList.appendChild(li);
  }
}

countryInput.addEventListener('focus', () => {
  renderCountryList(countryInput.value === countryInput.dataset.selectedLabel ? '' : countryInput.value);
  countryList.classList.remove('hidden');
});

countryInput.addEventListener('input', () => {
  countryHidden.value = '';
  delete countryInput.dataset.selectedLabel;
  countryInput.classList.remove('has-flag');
  countryFlagPreview.classList.add('hidden');
  renderCountryList(countryInput.value);
  countryList.classList.remove('hidden');
});

document.addEventListener('click', (e) => {
  if (!countryPicker.contains(e.target)) {
    countryList.classList.add('hidden');
  }
});

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  registerError.textContent = '';
  const username = document.getElementById('register-name').value.trim();
  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('register-password-confirm').value;
  const country = document.getElementById('register-country').value;

  if (password !== confirmPassword) {
    registerError.textContent = '비밀번호가 일치하지 않습니다.';
    return;
  }
  if (!country) {
    registerError.textContent = '국가를 선택하세요.';
    return;
  }

  try {
    const resp = await fetch('https://lyricstyping.byungduks.workers.dev/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, confirmPassword, country }),
    });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.error || 'Registration failed.');

    applyAuthState(data.user);
    authModal.classList.add('hidden');
    registerForm.reset();
    // If this registration happened from the result screen's sign-up
    // prompt, the score is still right there — let them post immediately.
    commentSignupBtn.classList.add('hidden');
  } catch (err) {
    registerError.textContent = err.message;
  }
});

logoutBtn.addEventListener('click', async () => {
  try {
    await fetch('https://lyricstyping.byungduks.workers.dev/api/auth/logout', { method: 'POST' });
  } catch (err) {
    console.error(err);
  }
  applyAuthState(null);
});

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

adminOpenBtn.addEventListener('click', async () => {
  adminModal.classList.remove('hidden');
  try {
    const resp = await fetch('https://lyricstyping.byungduks.workers.dev/api/admin/overview');
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.error || 'Failed to load admin overview');

    document.getElementById('admin-stat-users').textContent = data.userCount;
    document.getElementById('admin-stat-songs').textContent = data.songCount;
    document.getElementById('admin-stat-records').textContent = data.recordCount;
    document.getElementById('admin-stat-comments').textContent = data.commentCount;
    document.getElementById('admin-stat-lyrics-bytes').textContent = formatBytes(data.lyricsBytes);
    document.getElementById('admin-stat-comments-bytes').textContent = formatBytes(data.commentsBytes);

    const body = document.getElementById('admin-users-body');
    body.innerHTML = '';
    for (const u of data.users) {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${escapeHtml(u.displayName)}</td>
        <td>${escapeHtml(u.country || '-')}</td>
        <td>${escapeHtml(u.createdAt)}</td>
        <td>${u.attemptCount}</td>
        <td>${u.commentCount}</td>
        <td>${escapeHtml(u.lastActive || '-')}</td>
      `;
      body.appendChild(tr);
    }
  } catch (err) {
    console.error(err);
  }
});

adminModalCloseBtn.addEventListener('click', () => {
  adminModal.classList.add('hidden');
});

const ADMIN_USERNAME = 'byungduks';

function applyAuthState(user) {
  if (user) {
    authLoggedOut.classList.add('hidden');
    authLoggedIn.classList.remove('hidden');
    authDisplayName.textContent = user.displayName;
    adminOpenBtn.classList.toggle('hidden', user.displayName !== ADMIN_USERNAME);
    ytPlayer.showAdminForm(user.displayName === ADMIN_USERNAME);
    if (currentSongId) checkFavorite(currentSongId);

    // 비로그인 상태에서 타자를 완료하고 로그인한 경우,
    // 점수를 user_id로 다시 저장해 소감 제출 조건을 충족시킴
    if (_pendingScore) {
      const { songId, wpm, accuracy, totalScore } = _pendingScore;
      _pendingScore = null;
      fetch(`https://lyricstyping.byungduks.workers.dev/api/songs/${songId}/records`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wpm, accuracy, totalScore }),
      }).catch(() => {});
    }
  } else {
    authLoggedOut.classList.remove('hidden');
    authLoggedIn.classList.add('hidden');
    authDisplayName.textContent = '';
    adminOpenBtn.classList.add('hidden');
    ytPlayer.showAdminForm(false);
    favoriteBtn.classList.add('hidden');
  }
}

async function loadAuthState() {
  try {
    const resp = await fetch('https://lyricstyping.byungduks.workers.dev/api/auth/me');
    const data = await resp.json();
    applyAuthState(data.user);
  } catch (err) {
    console.error(err);
  }
}

// ── YouTubeMusicPlayer ────────────────────────────────────────────────────────
// Vanilla-JS equivalent of react-youtube, using the YouTube IFrame API.
// Quality is forced to the lowest tier ('tiny' ≈ 144p) to save bandwidth.

let _ytApiReady = false;
const _ytApiQueue = [];
window.onYouTubeIframeAPIReady = function () {
  _ytApiReady = true;
  _ytApiQueue.forEach((fn) => fn());
  _ytApiQueue.length = 0;
};
function _whenYtReady(fn) {
  if (_ytApiReady) fn();
  else _ytApiQueue.push(fn);
}

class YouTubeMusicPlayer {
  constructor() {
    this._player   = null;
    this._ready    = false;
    this._pending  = null; // videoId waiting for player init

    this.section       = document.getElementById('yt-player-section');
    this.placeholder   = document.getElementById('yt-player-placeholder');
    this.frame         = document.getElementById('yt-player-frame');
    this.adminForm     = document.getElementById('yt-admin-form');
    this.adminInput    = document.getElementById('yt-admin-input');
    this.adminSaveBtn  = document.getElementById('yt-admin-save');
    this.adminClearBtn = document.getElementById('yt-admin-clear');

    this.adminSaveBtn.addEventListener('click',  () => this._patchYoutubeId(this.adminInput.value.trim()));
    this.adminClearBtn.addEventListener('click', () => this._patchYoutubeId(null));
  }

  // Called by openSong() with song.youtubeId (may be null)
  load(videoId) {
    if (!videoId) {
      this.placeholder.classList.remove('hidden');
      this.frame.classList.add('hidden');
      if (this._player && this._ready) this._player.stopVideo();
      return;
    }
    this.placeholder.classList.add('hidden');
    this.frame.classList.remove('hidden');

    if (this._player && this._ready) {
      this._player.loadVideoById({ videoId, suggestedQuality: 'tiny' });
    } else {
      this._pending = videoId;
      if (!this._player) this._initPlayer(videoId);
    }
  }

  showAdminForm(show) {
    this.adminForm.classList.toggle('hidden', !show);
  }

  _initPlayer(videoId) {
    _whenYtReady(() => {
      this.frame.innerHTML = '<div id="yt-iframe-host"></div>';
      this._ready = false;
      this._player = new YT.Player('yt-iframe-host', {
        height: '152',
        width: '100%',
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 1,
          rel: 0,
          modestbranding: 1,
          vq: 'tiny',
          iv_load_policy: 3,
          playsinline: 1,
        },
        events: {
          onReady: (e) => {
            this._ready = true;
            e.target.setPlaybackQuality('tiny');
            if (this._pending && this._pending !== videoId) {
              e.target.loadVideoById({ videoId: this._pending, suggestedQuality: 'tiny' });
            }
            this._pending = null;
          },
        },
      });
    });
  }

  async _patchYoutubeId(raw) {
    if (!currentSongId) return;
    try {
        const resp = await fetch(`https://lyricstyping.byungduks.workers.dev/api/songs/${currentSongId}/youtube`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ youtubeId: raw }),
      });
      const data = await resp.json();
      this.load(data.youtubeId || null);
      if (data.youtubeId) this.adminInput.value = data.youtubeId;
    } catch (err) {
      console.error('YouTube ID update failed:', err);
    }
  }
}

const ytPlayer = new YouTubeMusicPlayer();
// ─────────────────────────────────────────────────────────────────────────────

loadAuthState();
