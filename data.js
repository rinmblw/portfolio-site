// Данные всех проектов портфолио. Каждый объект — карточка + попап.
const PROJECTS = [
  {
    id: 1,
    tag: "#AI_SMM",
    title: "IMBA Energy: AI-комиксы & SMM",
    cardDesc: "Генерация персонажей, инфографика и промо-комиксы для бренда",
    cardTools: ["Midjourney", "Photoshop", "Figma"],
    cardImg: "images/imagescard-imba-energy.webp",
    categories: ["ai", "design"],
    task: "Разработка серии ярких промо-комиксов и креативной инфографики вкусовых линеек для соцсетей гейминг-бренда IMBA Energy. Требовалось попасть в интересы целевой аудитории и точно сохранить айдентику банок.",
    pipeline: [
      { title: "Нейрогенерация (Midjourney)", desc: "Генерация изображений по техническому заданию, сохраняя визуальное и стилевое сходство с основными персонажами бренда." },
      { title: "Фотобаш & Ретушь (Photoshop)", desc: "Чистка артефактов, исправление анатомии, интеграция банок энергетика и сборка сюжета." },
      { title: "Дизайн & Верстка (Figma)", desc: "Сборка итоговых комиксных баблов, разработка инфографики вкусов и подготовка к SMM-публикации." }
    ],
    title_en: "IMBA Energy: AI Comics & SMM",
    cardDesc_en: "Character generation, infographics, and promo comics for the brand",
    task_en: "Developing a series of vibrant promo comics and creative infographics for IMBA Energy's flavor lineup on social media. The goal was to resonate with the target audience while accurately preserving the can artwork.",
    pipeline_en: [
      { title: "Neural Generation (Midjourney)", desc: "Generating images to spec while preserving visual and stylistic consistency with the brand's core characters." },
      { title: "Photobashing & Retouching (Photoshop)", desc: "Cleaning up artifacts, fixing anatomy, integrating energy drink cans, and assembling the scene." },
      { title: "Design & Layout (Figma)", desc: "Assembling final comic speech bubbles, designing flavor infographics, and preparing for SMM publication." }
    ],
    tools: ["Midjourney", "Adobe Photoshop", "Figma"],
    media: [
      { type: "image", src: "images/imagespopup-imba-energy-1.webp" },
      { type: "image", src: "images/imagespopup-imba-energy-2.webp" },
      { type: "image", src: "images/imagespopup-imba-energy-3.webp" },
      { type: "image", src: "images/imagespopup-imba-energy-4.webp" }
    ],
    resultUrl: "https://vk.ru/wall-173693459?end_time=1748624400000&w=wall-173693459_176281"
  },
  {
    id: 2,
    tag: "#Indie_Gamedev",
    title: "GameJam проект «Cat President»",
    cardDesc: "Вайбкодинг-разработка 2D-игры: пиксель-арт, генерация фонов через AI и сборка на Godot",
    cardTools: ["Godot", "Aseprite", "GPT", "Suno"],
    cardImg: "images/imagescard-gamejam-cat-president.webp",
    categories: ["ai", "illustration"],
    task: "Создание играбельного 2D-прототипа в сжатые сроки геймджема на темы «1 vs 100» и «Вся игра на одном экране». Комплексная роль: от генерации кода и написания игровой логики на Godot (GDScript) до ручной отрисовки покадрового пиксель-арта, стилизации фонов и генерации саундтрека.",
    pipeline: [
      { title: "Пиксель-арт & Спрайты (Aseprite)", desc: "Ручная отрисовка игровых ассетов и элементов ретро-интерфейса." },
      { title: "AI-генерация ассетов & Саундтрек (ChatGPT + Suno)", desc: "Генерация базы скриптов и логики, генерация концепт-фонов в пиксельной стилистике и заглавной музыкальной темы." },
      { title: "Сборка & Игровой движок (Godot Engine)", desc: "Настройка сцен, узлов и коллизий, интеграция UI/аудио, тестирование и отладка логики с помощью AI." }
    ],
    title_en: "GameJam Project «Cat President»",
    cardDesc_en: "Vibe-coded 2D game: pixel art, AI-generated backgrounds, built in Godot",
    task_en: "Building a playable 2D prototype within a tight game jam deadline on the themes \"1 vs 100\" and \"The Whole Game on One Screen.\" A hybrid role: from writing game logic in Godot (GDScript) to hand-drawing frame-by-frame pixel art, stylizing backgrounds, and generating the soundtrack.",
    pipeline_en: [
      { title: "Pixel Art & Sprites (Aseprite)", desc: "Hand-drawn game assets and retro UI elements." },
      { title: "AI Asset Generation & Soundtrack (ChatGPT + Suno)", desc: "Generating the base scripts and logic, concept backgrounds in pixel style, and the title music theme." },
      { title: "Build & Game Engine (Godot Engine)", desc: "Setting up scenes, nodes, and collisions, integrating UI/audio, testing and debugging logic with AI assistance." }
    ],
    tools: ["Godot Engine", "Aseprite", "ChatGPT", "Suno"],
    media: [
      { type: "video", poster: "images/imagesposter-gamejam-cat-president.webp", src: "videos/videosgamejam-cat-president.mp4" },
      { type: "image", src: "images/imagespopup-gamejam-cat-president-2.webp" },
      { type: "image", src: "images/imagespopup-gamejam-cat-president-3.webp" },
      { type: "image", src: "images/imagespopup-gamejam-cat-president-4.webp" }
    ],
    resultUrl: "#"
  },
  {
    id: 3,
    tag: "#Gamedev_Assets",
    title: "AI-ассеты для Game Mobile Ads",
    cardDesc: "Генерация, доработка и сборка ассетов под промо-ролики мобильных игр",
    cardTools: ["NanaBanana", "Krea", "Photoshop"],
    cardImg: "images/imagescard-game-mobile-ads.webp",
    categories: ["ai", "design"],
    task: "Создание начальных сцен и графических ассетов для мобильной видеорекламы. Требовалось генерировать персонажей игр в различных сюжетах с выразительными эмоциями и разложить элементы по слоям для последующего анимирования моушн-дизайнером.",
    pipeline: [
      { title: "Промптинг & Генерация (NanaBanana / Krea)", desc: "Генерация персонажей, фонов и игровых объектов в казуальном, 2D или 3D стилях в зависимости от технического задания и целевого проекта." },
      { title: "Фотобаш & Дорисовка (Photoshop)", desc: "Чистка артефактов, ручная доработка мимики, послойная раскладка объектов под анимацию." },
      { title: "Сборка сцен & Экспорт (Photoshop)", desc: "Подготовка мастер-файлов с прозрачными фонами и цветокоррекцией под последующую анимацию." }
    ],
    title_en: "AI Assets for Game Mobile Ads",
    cardDesc_en: "Generating, refining, and assembling assets for mobile game ad creatives",
    task_en: "Creating opening scenes and graphic assets for mobile video ads. The task required generating game characters in various scenarios with expressive emotions, then splitting elements into layers for a motion designer to animate.",
    pipeline_en: [
      { title: "Prompting & Generation (NanaBanana / Krea)", desc: "Generating characters, backgrounds, and game objects in casual, 2D, or 3D styles depending on the brief and target project." },
      { title: "Photobashing & Touch-ups (Photoshop)", desc: "Cleaning artifacts, manually refining facial expressions, and layering objects for animation." },
      { title: "Scene Assembly & Export (Photoshop)", desc: "Preparing master files with transparent backgrounds and color correction for subsequent animation." }
    ],
    tools: ["NanaBanana", "Krea", "Adobe Photoshop"],
    media: [
      { type: "image", src: "images/imagespopup-game-mobile-ads-1.webp" },
      { type: "image", src: "images/imagespopup-game-mobile-ads-2.webp" },
      { type: "image", src: "images/imagespopup-game-mobile-ads-3.webp" },
      { type: "image", src: "images/imagespopup-game-mobile-ads-4.webp" }
    ],
    resultUrl: "https://vt.tiktok.com/ZSV93JpfG/"
  },
  {
    id: 4,
    tag: "#Digital_Art",
    title: "Digital Art & Коммишены (2025–2026)",
    cardDesc: "Актуальное портфолио коммерческих и личных 2D-иллюстраций в различных стилях",
    cardTools: ["Procreate"],
    cardImg: "images/imagescard-digital-art.webp",
    categories: ["illustration"],
    task: "Демонстрация актуального авторского стиля, владения анатомией и светом на примере серии коммерческих заказов и личных 2D-артов (2025–2026). Работа в различных направлениях: стилизованное аниме, семи-реализм и проработка сложных атмосферных сцен.",
    pipeline: [
      { title: "Полный цикл 2D-рендеринга", desc: "Работа от композиционного поиска и динамичного скетча до чистового лайнарта, покраса, финального рендера и цветокоррекции." }
    ],
    title_en: "Digital Art & Commissions (2025–2026)",
    cardDesc_en: "Up-to-date portfolio of commercial and personal 2D illustrations across various styles",
    task_en: "Showcasing a current authorial style, command of anatomy and lighting through a series of commercial commissions and personal 2D art (2025–2026). Work spans stylized anime, semi-realism, and complex atmospheric scenes.",
    pipeline_en: [
      { title: "Full 2D Rendering Cycle", desc: "Working from compositional exploration and dynamic sketching through clean lineart, coloring, final rendering, and color grading." }
    ],
    tools: ["Procreate"],
    media: [
      { type: "image", src: "images/imagespopup-digital-art-1.webp" },
      { type: "image", src: "images/imagespopup-digital-art-2.webp" },
      { type: "image", src: "images/imagespopup-digital-art-3.webp" },
      { type: "image", src: "images/imagespopup-digital-art-4.webp" }
    ],
    resultUrl: "#"
  },
  {
    id: 5,
    tag: "#Book_Illustrations",
    title: "Иллюстрации для книги «Class of District 22»",
    cardDesc: "Серия обложек и внутренних иллюстраций для печатного издания",
    cardTools: ["Procreate", "Paint Tool SAI"],
    cardImg: "images/imagescard-class-of-district-22.webp",
    categories: ["illustration"],
    task: "Создание серии сюжетных иллюстраций для книги канадской писательницы Jackie Grenier. Важно было передать атмосферу подростковой драмы и киберпанка, а также точно визуализировать авторских персонажей.",
    pipeline: [
      { title: "Скетчинг & Раскадровка", desc: "Разработка композиционных эскизов по главам книги и поиск образов персонажей, согласование набросков с Jackie Grenier." },
      { title: "Финальный рендер", desc: "Чистовая отрисовка, постобработка и допечатная подготовка в высоком разрешении." }
    ],
    title_en: "Illustrations for the Book «Class of District 22»",
    cardDesc_en: "A series of covers and interior illustrations for a print publication",
    task_en: "Creating a series of narrative illustrations for a book by Canadian author Jackie Grenier. It was important to capture the atmosphere of teen drama and cyberpunk, and accurately visualize the author's characters.",
    pipeline_en: [
      { title: "Sketching & Storyboarding", desc: "Developing compositional sketches by chapter and exploring character designs, coordinating drafts with Jackie Grenier." },
      { title: "Final Render", desc: "Clean rendering, post-processing, and print-ready preparation at high resolution." }
    ],
    tools: ["Procreate", "Paint Tool SAI"],
    media: [
      { type: "image", src: "images/imagespopup-class-of-district-22-1.webp" },
      { type: "image", src: "images/imagespopup-class-of-district-22-2.webp" },
      { type: "image", src: "images/imagespopup-class-of-district-22-3.webp" },
      { type: "image", src: "images/imagespopup-class-of-district-22-4.webp" }
    ],
    resultUrl: "https://www.amazon.com/Class-District-Cyberpunk-Elemental-Chronicles/dp/1069568813/ref=sr_1_1?crid=2RLZDND62AZ4C&dib=eyJ2IjoiMSJ9.a1Xrlrqmxi7OUkXGYzqQEmGgtl39YOOcRbII6ZAWy_PumCPgU_McHJiD-Fsyct8tqxTL_I2VnToJHnnR_J-3wVKv0O7BN51t5wFYClXZolfjkQu8VFBb7T4SMirdQhplxrNlrH9SoWpwJi491rWz_IG825wnOaHR5LKqlCEFyyBJbWlmRf-NRIj0VJOh3FIgU2f5-I9tIvDd0XDoJrDF-1pIpvt6KXS1YBYaCAKLJ9M.WnDwEl1HTI5gALD4MrmBVrMcSVaz07j4zRgK8mQCCfA&dib_tag=se&keywords=class+of+district+22&qid=1787560355&sprefix=22+district+%2Caps%2C384&sr=8-1"
  },
  {
    id: 6,
    tag: "#OOH",
    title: "Наружная реклама для мюзикл-шоу",
    cardDesc: "Афиши для наружной и online-рекламы шоу «Две легенды! Два хита!» и «Я люблю мюзикл»",
    cardTools: ["Photoshop", "Illustrator"],
    cardImg: "images/imagescard-musical-ads.webp",
    categories: ["design"],
    task: "Разработка рекламной кампании для шоу «Две легенды! Два хита!», «Я люблю мюзикл» и других проектов. Оформление афиш для улиц города и digital-баннеров для соцсетей.",
    pipeline: [
      { title: "Ретушь", desc: "Отбор исходников артистов и обработка выбранных фото." },
      { title: "Типография & Айдентика", desc: "Создание логотипов мюзиклов, компоновка дат и хедлайнеров. Ресайз и подготовка к широкоформатной печати." }
    ],
    title_en: "Outdoor Advertising for a Musical Show",
    cardDesc_en: "Posters for outdoor and online advertising for «Two Legends! Two Hits!» and «I Love Musicals»",
    task_en: "Developing an ad campaign for the shows «Two Legends! Two Hits!», «I Love Musicals», and other productions. Designing street posters and digital banners for social media.",
    pipeline_en: [
      { title: "Retouching", desc: "Selecting source photos of performers and processing the chosen images." },
      { title: "Typography & Identity", desc: "Creating musical logos, arranging dates and headliners. Resizing and preparing for large-format print." }
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    media: [
      { type: "image", src: "images/imagespopup-musical-ads-1.webp" },
      { type: "image", src: "images/imagespopup-musical-ads-2.webp" },
      { type: "image", src: "images/imagespopup-musical-ads-3.webp" },
      { type: "image", src: "images/imagespopup-musical-ads-4.webp" }
    ],
    resultUrl: "https://afisha.yandex.ru/moscow/musical/dve-legendy-dva-khita-iz-chicago-v-mamma-mia-antrepriza"
  },
  {
    id: 7,
    tag: "#Stream_Package",
    title: "Стрим-пакет: OBS, UI & 2D Анимация",
    cardDesc: "Комплексная упаковка каналов Twitch/YouTube: оверлеи для OBS, оформление чата и 2D-анимация",
    cardTools: ["Photoshop", "Procreate", "Paint Tool SAI"],
    cardImg: "images/imagescard-stream-package.webp",
    categories: ["illustration", "design", "video"],
    task: "Полная визуальная и техническая упаковка прямых трансляций для стримеров на Twitch и YouTube. Требовалось спроектировать интерфейсы стрима для OBS, оформить интерактивные окна чата, нарисовать уникальную графику и оживить сцены покадровой 2D-анимацией.",
    pipeline: [
      { title: "OBS-сцены & Интерактивные оверлеи", desc: "Проектирование экранов трансляций («Starting», «Just Chatting», «Be Right Back»), рамок для веб-камеры и зацикленных анимированных фонов под окно чата." },
      { title: "2D-анимация & Эмоуты", desc: "Разработка покадровой анимации (30 кадров) для донат-триггеров, динамичных алертов и анимированных смайлов сабскрайберов." },
      { title: "Айдентика канала & Стикеры", desc: "Отрисовка значков баллов канала, панелей описания, аватаров и адаптация графики в брендированные стикерпаки для Telegram." }
    ],
    title_en: "Stream Package: OBS, UI & 2D Animation",
    cardDesc_en: "Full Twitch/YouTube channel package: OBS overlays, chat design, and 2D animation",
    task_en: "Full visual and technical packaging of live streams for Twitch and YouTube streamers. The task required designing OBS stream interfaces, styling interactive chat windows, drawing unique graphics, and bringing scenes to life with frame-by-frame 2D animation.",
    pipeline_en: [
      { title: "OBS Scenes & Interactive Overlays", desc: "Designing stream screens (\"Starting,\" \"Just Chatting,\" \"Be Right Back\"), webcam frames, and looping animated backgrounds for the chat window." },
      { title: "2D Animation & Emotes", desc: "Frame-by-frame animation (30 frames) for donation triggers, dynamic alerts, and animated subscriber emotes." },
      { title: "Channel Identity & Stickers", desc: "Designing channel point icons, panel graphics, avatars, and adapting the graphics into branded Telegram sticker packs." }
    ],
    tools: ["Procreate", "Adobe Photoshop", "Paint Tool SAI"],
    media: [
      { type: "image", src: "images/imagespopup-stream-package-1.webp" },
      { type: "image", src: "images/imagespopup-stream-package-2.webp" },
      { type: "image", src: "images/imagespopup-stream-package-3.webp" },
      { type: "image", src: "images/imagespopup-stream-package-4.webp" }
    ],
    resultUrl: "https://www.twitch.tv/kirsssten/about"
  },
  {
    id: 8,
    tag: "#Video",
    title: "Создание видео",
    cardDesc: "Динамичный монтаж видеороликов и создание превью для YouTube",
    cardTools: ["Photoshop", "Premier Pro"],
    cardImg: "images/imagescard-video-production.webp",
    categories: ["video"],
    task: "Производство развлекательного и разговорного видеоконтента для личного канала Rin K (300k+ просмотров) и создание стилизованного аниме-опенинга.",
    pipeline: [
      { title: "Моушн & 2D-ассеты (Procreate / PS)", desc: "Отрисовка анимированных иллюстраций для динамичного видеоряда." },
      { title: "Монтаж & Динамика (Premiere Pro)", desc: "Нарезка дублей, саунд-дизайн, подбор B-roll футажей и работа с темпоритмом удержания аудитории." },
      { title: "CTR-обложки (Photoshop)", desc: "Разработка кликабельных превью." }
    ],
    title_en: "Video Production",
    cardDesc_en: "Dynamic video editing and YouTube thumbnail design",
    task_en: "Producing entertainment and talk-show style video content for the personal channel Rin K (300k+ views) and creating a stylized anime opening sequence.",
    pipeline_en: [
      { title: "Motion & 2D Assets (Procreate / PS)", desc: "Drawing animated illustrations for a dynamic video sequence." },
      { title: "Editing & Pacing (Premiere Pro)", desc: "Cutting takes, sound design, selecting B-roll footage, and pacing for audience retention." },
      { title: "CTR Thumbnails (Photoshop)", desc: "Designing clickable thumbnails." }
    ],
    tools: ["Adobe Premiere Pro", "Adobe Photoshop", "Procreate"],
    media: [
      { type: "youtube", poster: "images/imagesposter-video-production-1.webp", videoId: "tRf6TYYIC7Y" },
      { type: "youtube", poster: "images/imagesposter-video-production-2.webp", videoId: "NvwPTG9jx4o" },
      { type: "youtube", poster: "images/imagesposter-video-production-3.webp", videoId: "JkiQIX_4_7A" },
      { type: "youtube", poster: "images/imagesposter-video-production-4.webp", videoId: "wGBCr5s78SA" }
    ],
    resultUrl: "#"
  },
  {
    id: 9,
    tag: "#Branding",
    title: "K-Pop Shop: Брендинг & Маскот",
    cardDesc: "Дизайн сообщества, меню, интерфейс и отрисовка фирменного персонажа",
    cardTools: ["Photoshop", "Procreate"],
    cardImg: "images/imagescard-kpop-shop.webp",
    categories: ["illustration", "design"],
    task: "Комплексный брендинг онлайн-магазина K-Pop альбомов во ВКонтакте. Требовалось разработать узнаваемого фирменного маскота и оформить все точки касания с покупателем.",
    pipeline: [
      { title: "Дизайн маскота (Procreate)", desc: "Разработка персонажа-мопса в ярком мультяшном стиле с проработкой эмоций." },
      { title: "Айдентика & Интерфейс (Photoshop)", desc: "Оформление аватарки, шапки и меню-виджетов. Сборка адаптивных макетов под мобильное приложение и десктопную версию соцсети." }
    ],
    title_en: "K-Pop Shop: Branding & Mascot",
    cardDesc_en: "Community design, menus, interface, and branded character illustration",
    task_en: "Comprehensive branding for a K-Pop album online store on VKontakte. The task required designing a recognizable branded mascot and styling every customer touchpoint.",
    pipeline_en: [
      { title: "Mascot Design (Procreate)", desc: "Designing a pug character in a bright cartoon style with expressive emotions." },
      { title: "Identity & Interface (Photoshop)", desc: "Designing the avatar, header, and menu widgets. Assembling adaptive layouts for the mobile app and desktop version of the social network." }
    ],
    tools: ["Procreate", "Adobe Photoshop"],
    media: [
      { type: "image", src: "images/imagespopup-kpop-shop-1.webp" },
      { type: "image", src: "images/imagespopup-kpop-shop-2.webp" },
      { type: "image", src: "images/imagespopup-kpop-shop-3.webp" },
      { type: "image", src: "images/imagespopup-kpop-shop-4.webp" }
    ],
    resultUrl: "https://vk.ru/oinkoink_shop"
  },
  {
    id: 10,
    tag: "#NFT",
    title: "NFT Коллекция & Промо-материалы",
    cardDesc: "Разработка NFT коллекции из 150+ атрибутов, дизайн сайта и промо-материалов",
    cardTools: ["Aseprite", "Photoshop", "Illustrator"],
    cardImg: "images/imagescard-nft-collection.webp",
    categories: ["illustration", "design"],
    task: "Разработка визуального стиля пиксельной NFT-коллекции из 150+ атрибутов, промо-материалов для соц. сетей и графики для запуска веб-сайта.",
    pipeline: [
      { title: "Пиксель-арт & Ассеты (Aseprite)", desc: "Отрисовка базы персонажа, атрибутов одежды, головных уборов и фонов." },
      { title: "Концепт-арт (Photoshop)", desc: "Создание масштабных 2D-артов персонажей для оформления лендинга и дорожной карты проекта." },
      { title: "Дизайн & Верстка (Figma/PS)", desc: "Создание аватарки и обложки, верстка баннеров для Telegram-канала проекта." }
    ],
    title_en: "NFT Collection & Promo Materials",
    cardDesc_en: "Developing an NFT collection with 150+ traits, website design, and promo materials",
    task_en: "Developing the visual style of a pixel-art NFT collection with 150+ traits, social media promo materials, and website launch graphics.",
    pipeline_en: [
      { title: "Pixel Art & Assets (Aseprite)", desc: "Drawing the character base, clothing traits, headwear, and backgrounds." },
      { title: "Concept Art (Photoshop)", desc: "Creating large-scale 2D character art for the landing page and project roadmap." },
      { title: "Design & Layout (Figma/PS)", desc: "Creating the avatar and cover art, laying out banners for the project's Telegram channel." }
    ],
    tools: ["Aseprite", "Adobe Photoshop", "Adobe Illustrator"],
    media: [
      { type: "image", src: "images/imagespopup-nft-collection-1.webp" },
      { type: "image", src: "images/imagespopup-nft-collection-2.webp" },
      { type: "image", src: "images/imagespopup-nft-collection-3.webp" },
      { type: "image", src: "images/imagespopup-nft-collection-4.webp" }
    ],
    resultUrl: "https://getgems.io/gtgameprojectart"
  },
  {
    id: 11,
    tag: "#Stickers",
    title: "Стикерпак для бренда «Cherneaka»",
    cardDesc: "Создание авторских 2D-иллюстраций, верстка стикерпака и допечатная подготовка",
    cardTools: ["Paint Tool SAI", "Illustrator"],
    cardImg: "images/imagescard-cherneaka-stickers.webp",
    categories: ["illustration"],
    task: "Разработка серии уютных авторских 2D-иллюстраций в черничной тематике для бренда вязаных аксессуаров «Cherneaka». Требовалось создать эстетичный полиграфический мерч: стикерпак формата A5 для вложения в заказы покупателям, оформления крафтовой упаковки и продажи на маркетах.",
    pipeline: [
      { title: "Скетчинг & Иллюстрация (Paint Tool SAI)", desc: "Поиск стилистики, отрисовка тематических предметов и ручной леттеринг подписей." },
      { title: "Компоновка листа & Контуры реза (Adobe Illustrator)", desc: "Сборка композиции стикерпака, построение внешних белых плашек и создание точных векторных линий для контурной плоттерной резки." }
    ],
    title_en: "Sticker Pack for the Brand «Cherneaka»",
    cardDesc_en: "Creating original 2D illustrations, laying out the sticker sheet, and print prep",
    task_en: "Developing a series of cozy, original 2D illustrations in a blueberry theme for the knitwear accessories brand «Cherneaka». The goal was an aesthetic print merch item: an A5 sticker sheet for orders, kraft packaging design, and market sales.",
    pipeline_en: [
      { title: "Sketching & Illustration (Paint Tool SAI)", desc: "Exploring the style, drawing themed objects, and hand-lettering the captions." },
      { title: "Sheet Layout & Cut Lines (Adobe Illustrator)", desc: "Composing the sticker sheet layout, building outer white plates, and creating precise vector lines for plotter die-cutting." }
    ],
    tools: ["Paint Tool SAI", "Adobe Illustrator"],
    media: [
      { type: "image", src: "images/imagespopup-cherneaka-stickers-1.webp" },
      { type: "image", src: "images/imagespopup-cherneaka-stickers-2.webp" },
      { type: "image", src: "images/imagespopup-cherneaka-stickers-3.webp" },
      { type: "image", src: "images/imagespopup-cherneaka-stickers-4.webp" }
    ],
    resultUrl: "https://vk.ru/market/product/s-t-i-k-e-r-p-a-k-129744-quotchernichnyquot-176939242-6127964"
  },
  {
    id: 12,
    tag: "#Package",
    title: "Дизайн чайной упаковки",
    cardDesc: "Серия концептов упаковки и этикеток для линейки травяных чаев",
    cardTools: ["Photoshop", "Illustrator"],
    cardImg: "images/imagescard-tea-package.webp",
    categories: ["design"],
    task: "Разработка концепции упаковки и этикеток для премиальной линейки натуральных травяных чаев под различные форм-факторы (крафт-пакеты, тубусы).",
    pipeline: [
      { title: "Верстка этикеток (Illustrator)", desc: "Подбор изображений и винтажной типографики, компоновка составов и знаков сертификации." },
      { title: "3D-мокапы (Photoshop)", desc: "Создание реалистичной визуализации упаковок на крафтовых материалах с проработкой тиснения." }
    ],
    title_en: "Tea Packaging Design",
    cardDesc_en: "A series of packaging and label concepts for a herbal tea line",
    task_en: "Developing packaging and label concepts for a premium line of natural herbal teas across various formats (kraft pouches, tubes).",
    pipeline_en: [
      { title: "Label Layout (Illustrator)", desc: "Selecting imagery and vintage typography, arranging ingredients and certification marks." },
      { title: "3D Mockups (Photoshop)", desc: "Creating realistic visualizations of the packaging on kraft materials with embossing detail." }
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    media: [
      { type: "image", src: "images/imagespopup-tea-package-1.webp" },
      { type: "image", src: "images/imagespopup-tea-package-2.webp" },
      { type: "image", src: "images/imagespopup-tea-package-3.webp" },
      { type: "image", src: "images/imagespopup-tea-package-4.webp" }
    ],
    resultUrl: "#"
  },
  {
    id: 13,
    tag: "#PNGtuber",
    title: "PNGTube Модель & Анимация",
    cardDesc: "Разработка и отрисовка послойной модели персонажа и 2D-анимация движений",
    cardTools: ["Procreate", "Procreate Dreams"],
    cardImg: "images/imagespopup-pngtuber.webp",
    categories: ["illustration", "video"],
    task: "Разработка индивидуального виртуального аватара (PNGtuber) для стримов. Создание вариаций мимики и бесшовной анимации движения модели.",
    pipeline: [
      { title: "Дизайн персонажа (Procreate)", desc: "Поиск силуэта чиби-модели, подбор фирменной цветовой палитры и аксессуаров, отрисовка состояний." },
      { title: "Анимация (Procreate Dreams)", desc: "Анимация состояний и придание модели динамического движения." }
    ],
    title_en: "PNGTube Model & Animation",
    cardDesc_en: "Designing and drawing a layered character model with 2D movement animation",
    task_en: "Developing a custom virtual avatar (PNGtuber) for streams. Creating expression variations and seamless movement animation for the model.",
    pipeline_en: [
      { title: "Character Design (Procreate)", desc: "Finding the chibi model's silhouette, selecting the brand color palette and accessories, drawing expression states." },
      { title: "Animation (Procreate Dreams)", desc: "Animating states and giving the model dynamic movement." }
    ],
    tools: ["Procreate", "Procreate Dreams"],
    media: [
      { type: "image", src: "images/imagespopup-pngtuber.webp" },
      { type: "video", poster: "images/imagespopup-pngtuber-2.webp", src: "videos/videospngtuber.mp4" }
    ],
    resultUrl: "#"
  },
  {
    id: 14,
    tag: "#Vector",
    title: "Векторные раскраски",
    cardDesc: "Серия пошаговых векторных иллюстраций для обучающего приложения",
    cardTools: ["Illustrator"],
    cardImg: "images/imagescard-vector-coloring.webp",
    categories: ["illustration"],
    task: "Создание серий пошаговых иллюстраций для обучающего мобильного приложения по рисованию от онлайн-школы Артпанда.",
    pipeline: [
      { title: "Разработка концепции", desc: "Разработка идеи серии, отрисовка набросков простых картинок, подходящих для обучения детей рисованию в приложении." },
      { title: "Пошаговая разбивка и отрисовка", desc: "Разделение финального рисунка на логические этапы обучения, отрисовка чистых векторных слоёв." }
    ],
    title_en: "Vector Coloring Pages",
    cardDesc_en: "A series of step-by-step vector illustrations for a learning app",
    task_en: "Creating series of step-by-step illustrations for a drawing-education mobile app by the online school Artpanda.",
    pipeline_en: [
      { title: "Concept Development", desc: "Developing the series concept, sketching simple images suitable for teaching kids to draw within the app." },
      { title: "Step-by-Step Breakdown & Drawing", desc: "Splitting the final illustration into logical learning stages, drawing clean vector layers." }
    ],
    tools: ["Adobe Illustrator"],
    media: [
      { type: "image", src: "images/imagespopup-vector-coloring-1.webp" },
      { type: "image", src: "images/imagespopup-vector-coloring-2.webp" },
      { type: "image", src: "images/imagespopup-vector-coloring-3.webp" },
      { type: "image", src: "images/imagespopup-vector-coloring-4.webp" }
    ],
    resultUrl: "#"
  },
  {
    id: 15,
    tag: "#Merch",
    title: "Иллюстрации для акриловых стендов",
    cardDesc: "Иллюстрации для линейки акриловых фигурок и подготовка слоев под производство",
    cardTools: ["Illustrator", "Procreate"],
    cardImg: "images/imagescard-acrylic-stands.webp",
    categories: ["illustration"],
    task: "Отрисовка серии персонажей в различных авторских стилях для производства интерьерных акриловых стендов. Подготовка файлов под специфику УФ-печати на прозрачном пластике с подставками.",
    pipeline: [
      { title: "Стилизованный 2D-арт (Procreate)", desc: "Проработка силуэтов персонажей с учетом устойчивости и визуального баланса прозрачных зон." },
      { title: "Векторный контур вырубки (Illustrator)", desc: "Построение внешнего контура реза лазером с технологическими отступами и пазами для подставки." }
    ],
    title_en: "Illustrations for Acrylic Stands",
    cardDesc_en: "Illustrations for a line of acrylic figures and prep for production",
    task_en: "Drawing a series of characters across various authorial styles for producing interior acrylic stands. Preparing files for UV printing on clear plastic with stands.",
    pipeline_en: [
      { title: "Stylized 2D Art (Procreate)", desc: "Refining character silhouettes with attention to stability and the visual balance of transparent areas." },
      { title: "Vector Cut Outline (Illustrator)", desc: "Building the outer laser-cut contour with technical margins and stand notches." }
    ],
    tools: ["Procreate", "Adobe Illustrator"],
    media: [
      { type: "image", src: "images/imagespopup-acrylic-stands-1.webp" },
      { type: "image", src: "images/imagespopup-acrylic-stands-2.webp" },
      { type: "image", src: "images/imagespopup-acrylic-stands-3.webp" },
      { type: "image", src: "images/imagespopup-acrylic-stands-4.webp" }
    ],
    resultUrl: "#"
  },
  {
    id: 16,
    tag: "#Interior",
    title: "Интерьерная навигация: Писатели",
    cardDesc: "Проект оформления стен здания института академии имени Маймонида",
    cardTools: ["Photoshop", "Procreate"],
    cardImg: "images/imagescard-interior-navigation.webp",
    categories: ["illustration", "design"],
    task: "Пространственный дизайн и проект оформления лестничных пролетов института Академии имени Маймонида настенной графикой с силуэтами классиков.",
    pipeline: [
      { title: "Анализ пространства", desc: "Замеры лестничных маршей и проектирование динамики движения фигур параллельно перилам." },
      { title: "Графика & Леттеринг (Procreate / PS)", desc: "Отрисовка силуэтов поэтов и стилизация цитат под интерьерную печать." }
    ],
    title_en: "Interior Wayfinding: Writers",
    cardDesc_en: "A wall design project for the Maimonides Academy building",
    task_en: "Spatial design and wall-graphics project for the stairwells of the Maimonides Academy institute, featuring silhouettes of literary classics.",
    pipeline_en: [
      { title: "Space Analysis", desc: "Measuring the stairwell flights and planning the movement dynamics of figures parallel to the railings." },
      { title: "Graphics & Lettering (Procreate / PS)", desc: "Drawing the poets' silhouettes and stylizing quotes for interior print." }
    ],
    tools: ["Procreate", "Adobe Photoshop"],
    media: [
      { type: "image", src: "images/imagespopup-interior-navigation-1.webp" },
      { type: "image", src: "images/imagespopup-interior-navigation-2.webp" },
      { type: "image", src: "images/imagespopup-interior-navigation-3.webp" },
      { type: "image", src: "images/imagespopup-interior-navigation-4.webp" }
    ],
    resultUrl: "#"
  },
  {
    id: 17,
    tag: "#Font",
    title: "Авторский акцидентный шрифт",
    cardDesc: "Экспериментальный векторный геометрический шрифт из изометрических кубиков",
    cardTools: ["Illustrator"],
    cardImg: "images/imagescard-custom-font.webp",
    categories: ["design"],
    task: "Разработка экспериментального геометрического дисплейного шрифта на основе модульной изометрической кубической сетки.",
    pipeline: [
      { title: "Модульная система", desc: "Проектирование базовой 3D-сетки из кубиков и определение правил построения графем." },
      { title: "Отрисовка глифов", desc: "Построение полного комплекта букв кириллицы, латиницы и базовых знаков пунктуации." }
    ],
    title_en: "Custom Display Typeface",
    cardDesc_en: "An experimental vector geometric typeface built from isometric cubes",
    task_en: "Developing an experimental geometric display typeface based on a modular isometric cube grid.",
    pipeline_en: [
      { title: "Modular System", desc: "Designing the base 3D cube grid and defining the rules for constructing letterforms." },
      { title: "Glyph Drawing", desc: "Building the full set of Cyrillic and Latin letters and basic punctuation marks." }
    ],
    tools: ["Adobe Illustrator"],
    media: [
      { type: "image", src: "images/imagespopup-custom-font-1.webp" },
      { type: "image", src: "images/imagespopup-custom-font-2.webp" },
      { type: "image", src: "images/imagespopup-custom-font-3.webp" },
      { type: "image", src: "images/imagespopup-custom-font-4.webp" }
    ],
    resultUrl: "#"
  },
  {
    id: 18,
    tag: "#Printing",
    title: "Многостраничная верстка & Полиграфия",
    cardDesc: "Верстка многостраничных изданий, брошюр, дизайн афиш и допечатная подготовка",
    cardTools: ["InDesign", "Photoshop"],
    cardImg: "images/imagescard-print-layout.webp",
    categories: ["design"],
    task: "Разработка широкого спектра полиграфической продукции под печать: многополосная верстка газет и брошюр, дизайн афиш, настенных календарей, буклетов и баннеров для фотозон.",
    pipeline: [
      { title: "Модульная сетка & Верстка", desc: "Построение базовых направляющих, работа со стилями абзацев, типографической иерархией и верстка многостраничных изданий." },
      { title: "Графика & Адаптация", desc: "Подготовка акцидентных заголовков, ретушь фотоматериалов и ресайз макетов под различные форматы." }
    ],
    title_en: "Multi-Page Layout & Print",
    cardDesc_en: "Layout for multi-page publications, brochures, poster design, and print prep",
    task_en: "Developing a wide range of print materials: multi-page newspaper and brochure layout, poster design, wall calendars, booklets, and photo-zone banners.",
    pipeline_en: [
      { title: "Modular Grid & Layout", desc: "Building base guides, working with paragraph styles, typographic hierarchy, and laying out multi-page publications." },
      { title: "Graphics & Adaptation", desc: "Preparing display headlines, retouching photo materials, and resizing layouts for different formats." }
    ],
    tools: ["InDesign", "Adobe Illustrator"],
    media: [
      { type: "image", src: "images/imagespopup-print-layout-1.webp" },
      { type: "image", src: "images/imagespopup-print-layout-2.webp" },
      { type: "image", src: "images/imagespopup-print-layout-3.webp" },
      { type: "image", src: "images/imagespopup-print-layout-4.webp" }
    ],
    resultUrl: "#"
  },
  {
    id: 19,
    tag: "#Custom_Merch",
    title: "Аудиокассета: Кастомный мерч",
    cardDesc: "Авторский арт, верстка развертки кассетного вкладыша J-Card и сборка готового подарка",
    cardTools: ["Photoshop", "Procreate"],
    cardImg: "images/imagescard-cassette-merch.webp",
    categories: ["illustration", "design"],
    task: "Создание уникального подарка — винтажной аудиокассеты с кастомным музыкальным плейлистом. Задача включала создание сюжетного арта на обложку, разработку дизайна буклета со списком треков и точную ручную сборку кассетного бокса.",
    pipeline: [
      { title: "Иллюстрация персонажа (Procreate)", desc: "Отрисовка романтичного заката и персонажа в теплой кинематографичной палитре." },
      { title: "Верстка вкладыша J-Card (Photoshop)", desc: "Разметка точных линий биговки и фальцовки под стандартный пластиковый кейс, типографика треклиста." },
      { title: "Печать & Сборка", desc: "Печать на плотной матовой бумаге, резка под размер бокса и сборка." }
    ],
    title_en: "Cassette Tape: Custom Merch",
    cardDesc_en: "Original art, J-Card insert layout, and assembling the finished gift",
    task_en: "Creating a unique gift — a vintage audio cassette with a custom music playlist. The task included creating narrative cover art, designing the booklet with the track list, and precise hand assembly of the cassette case.",
    pipeline_en: [
      { title: "Character Illustration (Procreate)", desc: "Drawing a romantic sunset and character in a warm cinematic palette." },
      { title: "J-Card Insert Layout (Photoshop)", desc: "Marking precise score and fold lines for a standard plastic case, tracklist typography." },
      { title: "Printing & Assembly", desc: "Printing on heavy matte paper, cutting to case size, and assembly." }
    ],
    tools: ["Procreate", "Adobe Photoshop"],
    media: [
      { type: "image", src: "images/imagespopup-cassette-merch-1.webp" },
      { type: "image", src: "images/imagespopup-cassette-merch-2.webp" },
      { type: "image", src: "images/imagespopup-cassette-merch-3.webp" }
    ],
    resultUrl: "#"
  }
];
