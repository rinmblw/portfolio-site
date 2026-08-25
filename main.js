// ============ ПОРТФОЛИО: рендер карточек ============
const galleryGrid = document.getElementById('galleryGrid');
const galleryCollapseWrap = document.getElementById('galleryCollapseWrap');
const INITIAL_VISIBLE = 8; // сколько карточек показываем сразу
let showingAll = false;
let currentActiveFilter = 'all'; // нужно для навигации стрелками в попапе — листаем в рамках текущей вкладки
let collapsedHeight = 0;

let currentLang = 'ru';
try {
  if (localStorage.getItem('site-lang') === 'en') currentLang = 'en';
} catch (e) {}

function cardHtml(p) {
  const title = currentLang === 'en' && p.title_en ? p.title_en : p.title;
  const desc = currentLang === 'en' && p.cardDesc_en ? p.cardDesc_en : p.cardDesc;
  return `
    <button class="gallery-item" data-id="${p.id}" data-categories="${p.categories.join(',')}">
      <img class="bg" src="${p.cardImg}" alt="${title}" loading="lazy">
      <div class="overlay">
        <span class="tag">${p.tag}</span>
        <div class="bottom">
          <h4>${title}</h4>
          <p>${desc}</p>
          <div class="tools">${p.cardTools.map(t => `<span>${t}</span>`).join('')}</div>
        </div>
      </div>
    </button>
  `;
}

function renderGallery() {
  // Рендерим ВСЕ карточки в один общий грид — раздельные гриды ломают
  // построчную раскладку при фильтрации, поэтому "свёрнутость" делаем
  // через обрезку высоты обёртки, а не через отдельный контейнер.
  galleryGrid.innerHTML = PROJECTS.map(cardHtml).join('');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => openPopup(parseInt(item.dataset.id)));
  });
}
renderGallery();

// ============ "Показать ещё" (плавное раскрытие/закрытие) ============
const loadMoreBtn = document.getElementById('loadMoreBtn');
const moreBadge = document.getElementById('moreBadge');
const btnText = document.getElementById('btnText');
moreBadge.textContent = `+${PROJECTS.length - INITIAL_VISIBLE}`;

// box-sizing: border-box у обёртки — значит padding-top "съедает" часть max-height,
// поэтому TOP_BUFFER компенсирует именно его (запас сверху для подъёма карточек),
// а BOTTOM_BUFFER — чистый добавочный запас под свечение на ховере последнего ряда.
const TOP_BUFFER = 16;
// Буфер был равен зазору между рядами (20px) впритык — из-за суб-пиксельных
// округлений высоты карточек (aspect-ratio) на некоторых разрешениях верхняя
// рамка следующего (скрытого) ряда всё равно проглядывала над кнопкой.
// Оставляем небольшой запас безопасности вместо ровно 20px.
const BOTTOM_BUFFER_COLLAPSED = 10;
const BOTTOM_BUFFER_EXPANDED = 30;

function measureCollapsedHeight() {
  const items = galleryGrid.querySelectorAll('.gallery-item');
  if (items.length <= INITIAL_VISIBLE) {
    collapsedHeight = galleryGrid.scrollHeight;
    return;
  }
  const lastVisible = items[INITIAL_VISIBLE - 1];
  collapsedHeight = lastVisible.offsetTop + lastVisible.offsetHeight - galleryGrid.offsetTop;
}

function applyCollapseState(instant) {
  if (instant) galleryCollapseWrap.style.transition = 'none';

  // Перед сворачиванием (или если сейчас идёт свёрнутое состояние) обрезка
  // обязательно нужна, иначе лишние карточки не будут скрыты. Возвращаем
  // её сразу же, синхронно, ещё до начала анимации.
  if (!showingAll) galleryCollapseWrap.style.overflow = 'hidden';

  const contentHeight = showingAll ? galleryGrid.scrollHeight : collapsedHeight;
  // В свёрнутом состоянии буфер ограничен зазором между рядами (20px),
  // иначе будет видно краешек следующего ряда. В развёрнутом — это последний
  // ряд перед кнопкой, подглядывать некуда, буфер можно сделать больше.
  const bottomBuffer = showingAll ? BOTTOM_BUFFER_EXPANDED : BOTTOM_BUFFER_COLLAPSED;
  galleryCollapseWrap.style.maxHeight = (contentHeight + TOP_BUFFER + bottomBuffer) + 'px';

  if (instant) {
    void galleryCollapseWrap.offsetHeight; // форсируем применение без анимации
    galleryCollapseWrap.style.transition = '';
    // При мгновенном разворачивании (без анимации) сразу снимаем обрезку
    if (showingAll) galleryCollapseWrap.style.overflow = 'visible';
  }
}

// Когда анимация раскрытия ДОиграла до конца и карточки полностью показаны —
// снимаем overflow:hidden совсем. Тогда свечению на ховере вообще негде
// обрезаться, независимо от того, насколько точно посчитан буфер.
galleryCollapseWrap.addEventListener('transitionend', (e) => {
  if (e.propertyName !== 'max-height') return;
  galleryCollapseWrap.style.overflow = showingAll ? 'visible' : 'hidden';
});

function loadMoreLabel() {
  if (currentLang === 'en') return showingAll ? 'Show Less' : 'Show More Projects';
  return showingAll ? 'Свернуть' : 'Показать ещё проекты';
}

function setBtnText(text) {
  // мягкий cross-fade текста вместо мгновенной подмены
  btnText.style.opacity = '0';
  setTimeout(() => {
    btnText.textContent = text;
    btnText.style.opacity = '1';
  }, 150);
}

measureCollapsedHeight();
applyCollapseState(true);

window.addEventListener('resize', () => {
  measureCollapsedHeight();
  applyCollapseState(true);
});

loadMoreBtn.addEventListener('click', () => {
  showingAll = !showingAll;
  applyCollapseState(false);
  loadMoreBtn.classList.toggle('expanded', showingAll);
  setBtnText(loadMoreLabel());
});

// ============ ФИЛЬТРЫ ============
function applyFilterToGallery(filter) {
  loadMoreBtn.style.display = filter === 'all' ? 'flex' : 'none';

  document.querySelectorAll('.gallery-item').forEach(item => {
    const cats = item.dataset.categories.split(',');
    const matches = filter === 'all' || cats.includes(filter);
    item.classList.toggle('hidden', !matches);
  });

  if (filter === 'all') {
    // возвращаемся к обычному режиму — раскрыто ровно так, как было
    measureCollapsedHeight();
    applyCollapseState(true);
  } else {
    // при активном фильтре показываем весь подходящий список без обрезки по высоте
    galleryCollapseWrap.style.transition = 'none';
    galleryCollapseWrap.style.maxHeight = 'none';
    galleryCollapseWrap.style.overflow = 'visible';
    void galleryCollapseWrap.offsetHeight;
    galleryCollapseWrap.style.transition = '';
  }
}

document.getElementById('filterButtons').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filter = btn.dataset.filter;
  currentActiveFilter = filter;
  applyFilterToGallery(filter);
  syncMobileFilterLabel();
});

// ============ МОБИЛЬНЫЙ СЕЛЕКТОР КАТЕГОРИЙ (стрелки вместо 2 строк кнопок) ============
const filterBtnsList = Array.from(document.querySelectorAll('.filter-btn'));
const filterMobileLabel = document.getElementById('filterMobileLabel');
const filterPrevBtn = document.getElementById('filterPrevBtn');
const filterNextBtn = document.getElementById('filterNextBtn');

function syncMobileFilterLabel() {
  if (!filterMobileLabel) return;
  const activeBtn = filterBtnsList.find(b => b.classList.contains('active')) || filterBtnsList[0];
  if (activeBtn) filterMobileLabel.textContent = activeBtn.textContent;
}

function selectFilterByOffset(offset) {
  const activeIdx = filterBtnsList.findIndex(b => b.classList.contains('active'));
  const nextIdx = (activeIdx + offset + filterBtnsList.length) % filterBtnsList.length;
  filterBtnsList[nextIdx].click(); // переиспользуем обработчик клика выше — включая ререндер и синхронизацию лейбла
}

if (filterPrevBtn) filterPrevBtn.addEventListener('click', () => selectFilterByOffset(-1));
if (filterNextBtn) filterNextBtn.addEventListener('click', () => selectFilterByOffset(1));

syncMobileFilterLabel();

// ============ ПОПАП ============
const popupOverlay = document.getElementById('popupOverlay');
const popupTag = document.getElementById('popupTag');
const popupTitle = document.getElementById('popupTitle');
const popupMainViewer = document.getElementById('popupMainViewer');
const popupMainImg = document.getElementById('popupMainImg');
const popupMainVideo = document.getElementById('popupMainVideo');
const popupThumbs = document.getElementById('popupThumbs');
const popupTask = document.getElementById('popupTask');
const popupPipeline = document.getElementById('popupPipeline');
const popupTools = document.getElementById('popupTools');
const popupResultBtn = document.getElementById('popupResultBtn');
const popupPrevBtn = document.getElementById('popupPrevBtn');
const popupNextBtn = document.getElementById('popupNextBtn');

let currentPopupId = null;
let currentMedia = [];
let isVideoPlaying = false;

function isVideoType(media) {
  return media && (media.type === 'video' || media.type === 'youtube');
}

// Показать конкретный элемент медиа (картинка или видео-постер) в главном окне.
function showMedia(index, opts) {
  opts = opts || {};
  const media = currentMedia[index];
  if (!media) return;

  // Пока видео проигрывается — ховер по другим превью его не прерывает,
  // прервать можно только явным кликом по другому превью.
  if (isVideoPlaying && !opts.forceSwitch) return;

  if (isVideoPlaying) stopPopupVideo();

  if (isVideoType(media)) {
    popupMainImg.src = media.poster;
    popupMainViewer.classList.add('has-video', 'show-play-icon');
  } else {
    popupMainImg.src = media.src;
    popupMainViewer.classList.remove('has-video', 'show-play-icon');
  }

  popupThumbs.querySelectorAll('.popup-thumb').forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}

function playPopupVideo(index) {
  const media = currentMedia[index];
  if (!isVideoType(media)) return;

  popupMainViewer.classList.add('playing');
  popupMainViewer.classList.remove('show-play-icon');
  isVideoPlaying = true;

  if (media.type === 'youtube') {
    if (!media.videoId || media.videoId.indexOf('REPLACE_ME') === 0) return; // ссылка ещё не добавлена
    popupMainVideo.style.display = 'none'; // иначе пустой нативный видео-плеер накладывается поверх YouTube
    const iframe = document.createElement('iframe');
    iframe.id = 'popupYoutubeFrame';
    iframe.src = `https://www.youtube.com/embed/${media.videoId}?autoplay=1&rel=0`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.cssText = 'width:100%;height:100%;border:0;';
    popupMainViewer.appendChild(iframe);
  } else {
    popupMainVideo.style.display = '';
    popupMainVideo.src = media.src;
    popupMainVideo.play().catch(() => {});
  }
}

popupMainVideo.addEventListener('ended', () => {
  if (!isVideoPlaying) return;
  stopPopupVideo();
  popupMainViewer.classList.add('show-play-icon');
});

function stopPopupVideo() {
  popupMainVideo.pause();
  popupMainVideo.removeAttribute('src');
  popupMainVideo.load();
  popupMainVideo.style.display = ''; // сбрасываем инлайн-стиль, оставленный при показе YouTube
  const iframe = document.getElementById('popupYoutubeFrame');
  if (iframe) iframe.remove();
  popupMainViewer.classList.remove('playing');
  isVideoPlaying = false;
}

function renderPopupThumbs() {
  popupThumbs.innerHTML = currentMedia.map((media, i) => `
    <div class="popup-thumb ${i === 0 ? 'active' : ''}" data-idx="${i}">
      <img src="${isVideoType(media) ? media.poster : media.src}" alt="">
      ${isVideoType(media) ? '<div class="thumb-play-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>' : ''}
    </div>
  `).join('');
  popupThumbs.style.display = currentMedia.length > 1 ? 'flex' : 'none';

  popupThumbs.querySelectorAll('.popup-thumb').forEach(thumb => {
    const idx = parseInt(thumb.dataset.idx);
    // Ховер — превью меняется, не дожидаясь клика
    thumb.addEventListener('mouseenter', () => showMedia(idx));
    // Клик — то же самое, но ещё и форсированно прерывает текущее видео, если оно играло
    thumb.addEventListener('click', () => showMedia(idx, { forceSwitch: true }));
  });
}

// Клик по главному окну: если там сейчас видео-превью (постер) — запускаем плеер
popupMainViewer.addEventListener('click', () => {
  if (isVideoPlaying) return;
  const activeThumb = popupThumbs.querySelector('.popup-thumb.active');
  if (!activeThumb) return;
  const idx = parseInt(activeThumb.dataset.idx);
  if (isVideoType(currentMedia[idx])) {
    playPopupVideo(idx);
  }
});

function getOrderedProjectList() {
  if (currentActiveFilter === 'all') return PROJECTS;
  return PROJECTS.filter(p => p.categories.includes(currentActiveFilter));
}

function openPopup(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  stopPopupVideo();
  currentPopupId = id;
  currentMedia = (p.media && p.media.length ? p.media : [{ type: 'image', src: p.cardImg }]);

  popupTag.textContent = p.tag;
  popupTitle.textContent = currentLang === 'en' && p.title_en ? p.title_en : p.title;
  popupTask.textContent = currentLang === 'en' && p.task_en ? p.task_en : p.task;
  // Кнопка "Посмотреть результат" — только у отобранных проектов
  const PROJECTS_WITH_RESULT_LINK = [1, 3, 5, 6, 7, 9, 10, 11];
  if (PROJECTS_WITH_RESULT_LINK.includes(p.id)) {
    popupResultBtn.style.display = 'flex';
    popupResultBtn.href = p.resultUrl || '#';
  } else {
    popupResultBtn.style.display = 'none';
  }

  renderPopupThumbs();
  showMedia(0);

  const pipeline = currentLang === 'en' && p.pipeline_en ? p.pipeline_en : p.pipeline;
  popupPipeline.innerHTML = pipeline.map((step, i) => `
    <div class="popup-pipeline-step">
      <div class="popup-step-num">${i + 1}</div>
      <div class="popup-step-text">
        <div class="step-title">${step.title}</div>
        <div class="step-desc">${step.desc}</div>
      </div>
    </div>
  `).join('');

  popupTools.innerHTML = p.tools.map(t => `<span>${t}</span>`).join('');

  popupOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  // прячем плавающие мобильные кнопки (бургер/язык), пока открыт поп-ап — см. styles.css body.popup-open
  document.body.classList.add('popup-open');
}

function closePopup() {
  stopPopupVideo();
  popupOverlay.classList.remove('active');
  document.body.style.overflow = '';
  document.body.classList.remove('popup-open');
}

function navigatePopup(direction) {
  const list = getOrderedProjectList();
  if (!list.length) return;
  const idx = list.findIndex(p => p.id === currentPopupId);
  const nextIdx = idx === -1 ? 0 : (idx + direction + list.length) % list.length;
  openPopup(list[nextIdx].id);
}

document.getElementById('popupClose').addEventListener('click', closePopup);
popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) closePopup();
});
popupPrevBtn.addEventListener('click', () => navigatePopup(-1));
popupNextBtn.addEventListener('click', () => navigatePopup(1));
document.addEventListener('keydown', (e) => {
  if (!popupOverlay.classList.contains('active')) return;
  if (e.key === 'Escape') closePopup();
  if (e.key === 'ArrowLeft') navigatePopup(-1);
  if (e.key === 'ArrowRight') navigatePopup(1);
});

// ============ СВАЙП МЕЖДУ ПРОЕКТАМИ (для мобильных, где стрелки скрыты) ============
let popupTouchStartX = 0;
let popupTouchStartY = 0;

popupMainViewer.addEventListener('touchstart', (e) => {
  if (isVideoPlaying || !e.touches.length) return;
  popupTouchStartX = e.touches[0].clientX;
  popupTouchStartY = e.touches[0].clientY;
}, { passive: true });

popupMainViewer.addEventListener('touchend', (e) => {
  if (isVideoPlaying || !e.changedTouches.length) return;
  const dx = e.changedTouches[0].clientX - popupTouchStartX;
  const dy = e.changedTouches[0].clientY - popupTouchStartY;
  // считаем свайпом только явно горизонтальное движение, чтобы не мешать вертикальному скроллу
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
    navigatePopup(dx < 0 ? 1 : -1);
  }
}, { passive: true });

// ============ КАРУСЕЛЬ ОТЗЫВОВ ============
const reviewsCarousel = document.querySelector('.reviews-carousel');
const reviewsTrack = document.getElementById('reviewsTrack');
const reviewCards = reviewsTrack.querySelectorAll('.review-card');
let currentReview = 0;

// На узких/промежуточных ширинах (напр. 1044px — всё ещё 3 колонки, но текст уже
// переносится на больше строк) фиксированная высота обрезала контент снизу.
// Поэтому высоту .reviews-carousel всегда меряем по факту под активную карточку,
// а не только в "компактном" брейкпоинте — так она не обрежется ни на одной ширине.
// offsetHeight (а не scrollHeight) — чтобы не терять нижнюю рамку карточки (1px border).
function updateCarouselHeight() {
  if (!reviewsCarousel) return;
  const activeCard = reviewCards[currentReview];
  if (!activeCard) return;
  // box-sizing: border-box — заданная height включает в себя padding контейнера.
  // .reviews-carousel имеет padding-top 8px, и если не прибавить его сюда,
  // ровно эти 8px "съедаются" из высоты и низ карточки (с рамкой) обрезается.
  const carouselStyles = getComputedStyle(reviewsCarousel);
  const paddingTop = parseFloat(carouselStyles.paddingTop) || 0;
  const paddingBottom = parseFloat(carouselStyles.paddingBottom) || 0;
  reviewsCarousel.style.height = (activeCard.offsetHeight + paddingTop + paddingBottom) + 'px';
}

function updateCarousel() {
  // Считаем реальный сдвиг в пикселях (ширина карточки + gap),
  // а не в процентах — иначе gap между карточками накапливает смещение.
  const cardWidth = reviewCards[0].getBoundingClientRect().width;
  const trackStyles = getComputedStyle(reviewsTrack);
  const parsedGap = parseFloat(trackStyles.columnGap || trackStyles.gap);
  const gap = Number.isFinite(parsedGap) ? parsedGap : 20;
  const offset = currentReview * (cardWidth + gap);
  reviewsTrack.style.transform = `translateX(-${offset}px)`;
  reviewCards.forEach((card, i) => card.classList.toggle('active', i === currentReview));
  updateCarouselHeight();
}

reviewsTrack.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-dir]');
  if (!btn) return;
  const dir = parseInt(btn.dataset.dir);
  currentReview = (currentReview + dir + reviewCards.length) % reviewCards.length;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
updateCarousel();

// Подстраховка: если что-то меняет размер активной карточки уже ПОСЛЕ первого
// расчёта (шрифты Google Fonts подгрузились позже и переносы строк сместились,
// переключили язык, и т.п.) — пересчитываем высоту .reviews-carousel заново.
if (window.ResizeObserver) {
  const reviewsResizeObserver = new ResizeObserver(() => updateCarouselHeight());
  reviewCards.forEach(card => reviewsResizeObserver.observe(card));
}
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => updateCarouselHeight());
}

// ============ МОБИЛЬНОЕ МЕНЮ ============
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenuClose = document.getElementById('mobileMenuClose');

function openMobileMenu() {
  mobileMenuOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
  mobileMenuOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

mobileMenuBtn.addEventListener('click', openMobileMenu);
mobileMenuClose.addEventListener('click', closeMobileMenu);
// Клик по ссылке — закрываем меню, чтобы не перекрывать место, куда только что перешли
mobileMenuOverlay.querySelectorAll('.mobile-menu-links a').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) closeMobileMenu();
});

// ============ ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА (RU / EN) ============
// currentLang объявлен выше (нужен был уже в cardHtml/openPopup)
const translatableEls = document.querySelectorAll('[data-en]');
// Запоминаем оригинальный русский HTML каждого элемента один раз при загрузке —
// дальше просто переключаемся между ним и data-en, ничего вручную дублировать не нужно.
translatableEls.forEach(el => { el.dataset.ru = el.innerHTML; });

const desktopLangBtn = document.getElementById('desktopLangBtn');
const mobileLangBtnEl = document.getElementById('mobileLangBtn');

// Фикс бага мобильных браузеров: после смены textContent внутри элемента с
// backdrop-filter блюр иногда "отваливается" и не возвращается сам. Предыдущая
// попытка (мигнуть display:none) недостаточно надёжна — форсируем именно
// сам backdrop-filter: снимаем его и возвращаем на следующих двух кадрах,
// это заставляет браузер пересчитать эффект заново.
function forceRepaint(el) {
  if (!el) return;
  el.style.webkitBackdropFilter = 'none';
  el.style.backdropFilter = 'none';
  // лёгкое "подёргивание" transform поверх постоянного translateZ(0) из CSS —
  // форсирует у браузера свежий композит слоя именно в момент смены языка
  el.style.transform = 'translateZ(0) scale(1.0001)';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.style.webkitBackdropFilter = '';
      el.style.backdropFilter = '';
      el.style.transform = '';
    });
  });
}

function applyStaticTranslations() {
  translatableEls.forEach(el => {
    el.innerHTML = currentLang === 'en' ? el.dataset.en : el.dataset.ru;
  });
  document.documentElement.lang = currentLang;
  const label = currentLang === 'en' ? 'RUS' : 'ENG';
  desktopLangBtn.textContent = label;
  mobileLangBtnEl.textContent = label;
  forceRepaint(desktopLangBtn);
  forceRepaint(mobileLangBtnEl);
}

function setLanguage(lang) {
  currentLang = lang;
  try { localStorage.setItem('site-lang', lang); } catch (e) {}

  applyStaticTranslations();

  // Портфолио и попап используют отдельные *_en поля в data.js — перерисовываем
  renderGallery();
  applyFilterToGallery(currentActiveFilter); // сохраняем текущий выбранный фильтр
  syncMobileFilterLabel();
  btnText.textContent = loadMoreLabel();

  if (popupOverlay.classList.contains('active') && currentPopupId !== null) {
    openPopup(currentPopupId);
  }
}

function toggleLanguage() {
  setLanguage(currentLang === 'ru' ? 'en' : 'ru');
}

desktopLangBtn.addEventListener('click', toggleLanguage);
mobileLangBtnEl.addEventListener('click', toggleLanguage);

// Применяем язык (в т.ч. сохранённый ранее, если открывали сайт раньше — см. начало файла)
applyStaticTranslations();
