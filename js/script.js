const translations = {
  ru: {
    nav_home: 'Главная', nav_faq: 'Проблемы с ботом', nav_donate: 'Донат', nav_team: 'Команда',
    hero_title: 'AutoFishBot',
    hero_desc: 'Универсальный бот для автоматизации рыбалки и других работ. Безопасно, удобно, эффективно.',
    hero_download: 'Скачать', hero_telegram: 'Telegram', hero_github: 'GitHub',
    features_label: 'Почему AutoFishBot?',
    features_title: 'Чем хорош AutoFishBot?',
    features_desc: 'Проект вырос из маленького скрипта в многофункциональное решение благодаря сообществу.',
    feat1_title: 'Многофункциональный',
    feat1_1: 'Рыбалка', feat1_2: 'Сбор апельсинов', feat1_3: 'Лесоруб', feat1_4: 'Карьерщик', feat1_5: 'И другие работы в разработке',
    feat2_title: 'Безопасный',
    feat2_1: 'Не внедряется в игру исключает бан античитом', feat2_2: 'Скрытие следов использования', feat2_3: 'Распространяется через Telegram', feat2_4: 'Написан на AutoHotkey (C++)', feat2_5: 'Только стандартные DLL Windows',
    feat3_title: 'Гибкий',
    feat3_1: 'Постоянные обновления и онлайн-поддержка', feat3_2: 'Автоматическое обновление', feat3_3: 'Поддержка нескольких мониторов (Aster)', feat3_4: 'Работает с графическими модами (Redux)', feat3_5: 'Моментальная активация новых пользователей',
    feat4_title: 'Удобный',
    feat4_1: 'Интуитивный интерфейс', feat4_2: 'Настройка горячих клавиш', feat4_3: 'Автоматическая остановка', feat4_4: 'Встроенный таймер выключения', feat4_5: 'Быстрое открытие: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>1</kbd>',
    setup_label: 'Настройка', setup_title: 'Установка и запуск', setup_desc: 'Следуйте этим шагам, чтобы начать пользоваться ботом за несколько минут.',
    step1_title: 'Скачайте бота', step1_desc: 'Нажмите кнопку «Скачать» или перейдите в наш Telegram-канал.',
    step2_title: 'Отключите антивирус', step2_desc: 'Антивирус может блокировать работу бота (ложное срабатывание из-за эмуляции ввода).',
    step3_title: 'Настройте игру', step3_desc: 'Скопируйте настройки графики, <kbd>ESC</kbd> → <kbd>Настройки</kbd> → <kbd>Графика</kbd>.',
    step4_title: 'Запустите от имени администратора', step4_desc: 'Правый клик на <kbd>AutoFishBot.exe</kbd> → «Запуск от имени администратора».',
    step5_title: 'Откройте меню', step5_desc: 'Нажмите <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>1</kbd> появится интерфейс управления.',
    step6_title: 'Выберите режим', step6_desc: 'Рыбалка, апельсины, лесоруб или карьер на ваш выбор.',
    step7_title: 'Готово!', step7_desc: 'Наслаждайтесь автоматизацией. Бот работает стабильно и эффективно!',
    settings_label: 'Настройки', settings_title: 'Рекомендуемые настройки', settings_desc: 'Бот работает на многих разрешениях и любом качестве',
    settings_av1: 'Качество графики:', settings_av2: 'Разрешение экрана:', settings_av3: 'Потоков рендеринга:', settings_av4: 'Мультипоточная оптимизация:', settings_av5: 'Тип окна:', settings_av6: 'Вертикальная синхронизация:',
    settings_av1_val: 'Мин./Низкое', settings_av2_val: '1920x1080', settings_av3_val: 'Рек. системой', settings_av4_val: 'Вкл.', settings_av5_val: 'В окне без рамки', settings_av6_val: 'Выкл.',
    links_label: 'Страницы', links_title: 'Полезные страницы',
    links_faq_title: 'Проблемы с ботом', links_faq_desc: 'Решение проблем и ответы на вопросы',
    links_donate_title: 'Донат', links_donate_desc: 'Поддержать проект',
    links_team_title: 'Команда', links_team_desc: 'Разработчики проекта',
    links_bot_title: 'Telegram Бот', links_bot_desc: 'Запустить бота',
    faq_label: 'Проблемы с ботом', faq_title: 'Часто задаваемые вопросы',
    faq1_q: 'Что делать, если бот не запускается?', faq1_a: 'Проверьте, что вы запустили бота <strong>от имени администратора</strong>. Также убедитесь, что антивирус полностью отключён бот использует эмуляцию ввода, что может вызывать ложные срабатывания.',
    faq2_q: 'Какие настройки графики нужны?', faq2_a: 'Тип экрана «В окне без рамки». Вертикальную синхронизацию отключите. Формат «21:9» не поддерживается. Поставьте «16:9». Если у вас бот не работает с Redux или фильтрами Nvidia отключите их',
    faq3_q: 'Бот может только рыбачить?', faq3_a: 'Нет, бот универсальный. Название «AutoFishBot» отражает основную функцию, но бот умеет выполнять разные виды работ.',
    faq4_q: 'Как обновить бота?', faq4_a: 'Бот обновляется автоматически. Просто запустите последнюю версию она сама проверит обновления. Также вы всегда можете скачать актуальную версию в нашем Telegram-канале или через кнопку «Скачать» на главной странице.',
    faq5_q: 'Windows 11', faq5_a: 'Если версия Windows 11 младше 24H2, то перед запуском бота нужно:<br><br>Открываете «Свойства» программы (ПКМ)<br>Переходите в раздел «Совместимость»<br>Поставьте галочку рядом с «Запустите эту программу в режиме совместимости для:» Windows 8',
    faq_support: 'Техническая поддержка', faq_guide_text: 'По вопросам обращайтесь к', faq_guide_link: 'подробному руководству',
    donate_label: 'Донат', donate_title: 'Поддержать проект', donate_desc: 'Ваша поддержка помогает проекту развиваться. Спасибо, что вы с нами!',
    donate_yoomoney: 'YooMoney', donate_boosty1: 'Boosty (Донат)', donate_boosty2: 'Boosty (Подписка)',
    team_label: 'Команда', team_title: 'Наша команда', team_desc: 'Люди, которые делают этот проект возможным.',
    team_role1: 'Разраб', team_role2: 'Контент и SMM-менеджер, Графический дизайнер', team_role3: 'Техническая поддержка', team_role4: 'Админ чатов', team_role5: 'Fullstack Master', team_role6: 'Техническая поддержка', team_role7: 'Дизайнер',
    team_status1: 'В проекте', team_status2: 'В проекте', team_status3: 'В проекте', team_status4: 'В проекте', team_status5: 'В проекте', team_status6: 'Покинул', team_status7: 'Покинул',
    footer_year: '2025', footer_text: 'Сделано с любовью',
    '404_title': 'Страница не найдена', '404_desc': 'Кажется, эта страница уплыла. Но главная всё ещё здесь!', '404_home': 'На главную'
  },
  en: {
    nav_home: 'Home', nav_faq: 'Bot Issues', nav_donate: 'Donate', nav_team: 'Team',
    hero_title: 'AutoFishBot',
    hero_desc: 'Universal bot for automating fishing and other jobs. Safe, convenient, efficient.',
    hero_download: 'Download', hero_telegram: 'Telegram', hero_github: 'GitHub',
    features_label: 'Why AutoFishBot?', features_title: 'What makes AutoFishBot great?',
    features_desc: 'The project grew from a small script into a multi-functional solution thanks to the community.',
    feat1_title: 'Multi-functional',
    feat1_1: 'Fishing', feat1_2: 'Orange picking', feat1_3: 'Lumberjack', feat1_4: 'Quarry worker', feat1_5: 'Other jobs in development',
    feat2_title: 'Safe',
    feat2_1: 'Does not inject into the game no anticheat ban', feat2_2: 'Hides usage traces', feat2_3: 'Distributed via Telegram', feat2_4: 'Written in AutoHotkey (C++)', feat2_5: 'Standard Windows DLLs only',
    feat3_title: 'Flexible',
    feat3_1: 'Regular updates and online support', feat3_2: 'Auto-update', feat3_3: 'Multi-monitor support (Aster)', feat3_4: 'Works with graphic mods (Redux)', feat3_5: 'Instant activation for new users',
    feat4_title: 'Convenient',
    feat4_1: 'Intuitive interface', feat4_2: 'Hotkey configuration', feat4_3: 'Auto-stop', feat4_4: 'Built-in shutdown timer', feat4_5: 'Quick open: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>1</kbd>',
    setup_label: 'Setup', setup_title: 'Installation & Launch', setup_desc: 'Follow these steps to start using the bot in minutes.',
    step1_title: 'Download the bot', step1_desc: 'Click the "Download" button or join our Telegram channel.',
    step2_title: 'Disable antivirus', step2_desc: 'Antivirus may block the bot (false positive due to input emulation).',
    step3_title: 'Configure the game', step3_desc: 'Copy the graphics settings: <kbd>ESC</kbd> → <kbd>Settings</kbd> → <kbd>Graphics</kbd>.',
    step4_title: 'Run as administrator', step4_desc: 'Right-click <kbd>AutoFishBot.exe</kbd> → "Run as administrator".',
    step5_title: 'Open the menu', step5_desc: 'Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>1</kbd> the control interface appears.',
    step6_title: 'Choose a mode', step6_desc: 'Fishing, oranges, lumberjack, or quarry your choice.',
    step7_title: 'Done!', step7_desc: 'Enjoy automation. The bot works stably and efficiently!',
    settings_label: 'Settings', settings_title: 'Recommended settings', settings_desc: 'The bot works on many resolutions and any quality',
    settings_av1: 'Graphics quality:', settings_av2: 'Screen resolution:', settings_av3: 'Render threads:', settings_av4: 'Multi-threaded optimization:', settings_av5: 'Window mode:', settings_av6: 'Vertical sync:',
    settings_av1_val: 'Min./Low', settings_av2_val: '1920x1080', settings_av3_val: 'System recommended', settings_av4_val: 'On', settings_av5_val: 'Windowed (borderless)', settings_av6_val: 'Off',
    links_label: 'Pages', links_title: 'Useful Pages',
    links_faq_title: 'Bot Issues', links_faq_desc: 'Solutions and answers',
    links_donate_title: 'Donate', links_donate_desc: 'Support the project',
    links_team_title: 'Team', links_team_desc: 'Project developers',
    links_bot_title: 'Telegram Bot', links_bot_desc: 'Launch the bot',
    faq_label: 'Bot Issues', faq_title: 'Frequently Asked Questions',
    faq1_q: "What if the bot doesn't start?", faq1_a: 'Make sure you run the bot <strong>as administrator</strong>. Also ensure your antivirus is completely disabled the bot uses input emulation which can trigger false positives.',
    faq2_q: 'What graphics settings are needed?', faq2_a: 'Screen mode: "Borderless window". Disable vertical sync. "21:9" format is not supported. Set "16:9". If the bot doesn\'t work with Redux or Nvidia filters disable them',
    faq3_q: 'Can the bot only fish?', faq3_a: 'No, the bot is universal. The name "AutoFishBot" reflects the main function, but the bot can perform various types of work.',
    faq4_q: 'How do I update the bot?', faq4_a: 'The bot updates automatically. Just launch the latest version it checks for updates on startup. You can also always download the latest version from our Telegram channel or the "Download" button on the main page.',
    faq5_q: 'Windows 11', faq5_a: 'If your Windows 11 version is older than 24H2, before launching the bot:<br><br>Open program "Properties" (right-click)<br>Go to the "Compatibility" section<br>Check "Run this program in compatibility mode for:" Windows 8',
    faq_support: 'Tech Support', faq_guide_text: 'For questions, refer to the', faq_guide_link: 'detailed guide',
    donate_label: 'Donate', donate_title: 'Support the Project', donate_desc: 'Your support helps the project grow. Thank you for being with us!',
    donate_yoomoney: 'YooMoney', donate_boosty1: 'Boosty (Donate)', donate_boosty2: 'Boosty (Subscription)',
    team_label: 'Team', team_title: 'Our Team', team_desc: 'The people who make this project possible.',
    team_role1: 'Dev', team_role2: 'Content & SMM Manager, Graphic Designer', team_role3: 'Tech Support', team_role4: 'Chat Admin', team_role5: 'Fullstack Master', team_role6: 'Tech Support', team_role7: 'Designer',
    team_status1: 'Active', team_status2: 'Active', team_status3: 'Active', team_status4: 'Active', team_status5: 'Active', team_status6: 'Left', team_status7: 'Left',
    footer_year: '2025', footer_text: 'Made with love',
    '404_title': 'Page not found', '404_desc': 'Looks like this page swam away. But the homepage is still here!', '404_home': 'Go home'
  }
};

let currentLang = localStorage.getItem('lang') || 'ru';
let currentTheme = localStorage.getItem('theme') || 'light';

function applyLang(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    if (t[key] !== undefined) {
      if (key.startsWith('step') || key.startsWith('faq') || key.startsWith('settings_av') || key.startsWith('feat') || key.startsWith('team')) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });
  document.getElementById('lang-label').textContent = lang === 'ru' ? 'EN' : 'RU';
  currentLang = lang;
  localStorage.setItem('lang', lang);
}

function toggleLang() {
  applyLang(currentLang === 'ru' ? 'en' : 'ru');
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const sun = document.querySelector('.icon-sun');
  const moon = document.querySelector('.icon-moon');
  if (theme === 'dark') {
    sun.style.display = 'none';
    moon.style.display = 'block';
  } else {
    sun.style.display = 'block';
    moon.style.display = 'none';
  }
  currentTheme = theme;
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  applyTheme(currentTheme === 'light' ? 'dark' : 'light');
}

function toggleFaq(el) {
  const item = el.parentElement;
  item.classList.toggle('open');
}

function initObserver() {
  const els = document.querySelectorAll('.fade-in, .fade-up, .slide-right, .scale-in, .stagger-1, .stagger-2, .stagger-3, .stagger-4, .stagger-5, .stagger-6, .stagger-7');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .1 });
  els.forEach(el => observer.observe(el));
}

function toggleMobileMenu() {
  const overlay = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  overlay.classList.toggle('open');
  document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
  if (hamburger) hamburger.classList.toggle('active');
}

function initScrollTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initPageTransitions() {
  const overlay = document.getElementById('mobileMenu');
  document.addEventListener('click', (e) => {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
    const link = e.target.closest('a');
    if (!link || link.target === '_blank') return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    e.preventDefault();
    if (overlay && overlay.classList.contains('open')) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      document.querySelector('.hamburger')?.classList.remove('active');
    }
    document.body.classList.add('page-exit');
    setTimeout(() => { window.location.href = href; }, 150);
  });
}

function initParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
          const content = hero.querySelector('.hero-content');
          const bubbles = hero.querySelector('.hero-bubbles');
          if (content) content.style.transform = `translateY(${-scrolled * 0.12}px)`;
          if (bubbles) bubbles.style.transform = `translateY(${-scrolled * 0.2}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

applyLang(currentLang);
applyTheme(currentTheme);
initObserver();
initScrollTop();
initPageTransitions();
initParallax();

let mx = .5, my = .5, sy = 0;
const glowEls = () => document.querySelectorAll(".hero-light");
document.addEventListener("mousemove", (e) => { mx = e.clientX / window.innerWidth; my = e.clientY / window.innerHeight; });
window.addEventListener("scroll", () => { sy = window.scrollY; });
(function glowLoop() {
  glowEls().forEach((el, i) => {
    const t = Date.now() / 1000;
    const ax = Math.sin(t * .04 + i * 2) * 18;
    const ay = Math.cos(t * .05 + i * 3) * 14;
    const s = (i + 1) * 6;
    const sc = (i + 1) * .06;
    el.style.transform = `translate(${(mx - .5) * s + ax}px, ${(my - .5) * s + sy * sc + ay}px)`;
  });
  requestAnimationFrame(glowLoop);
})();

document.querySelectorAll('.nav-center a').forEach(a => {
  if (a.getAttribute('href') && window.location.pathname.endsWith(a.getAttribute('href'))) {
    a.classList.add('active');
  }
});
