(function() {
  const root = document.documentElement;

  // Default theme/accent if not set
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') root.classList.add('light');
  if (!savedTheme) root.classList.remove('light'); // default dark
  const savedAccent = localStorage.getItem('accent');
  root.style.setProperty('--accent', savedAccent || '#60a5fa');

  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  const updateThemeIcon = () => themeToggle.textContent = root.classList.contains('light') ? '🌙' : '☀️';
  updateThemeIcon();
  themeToggle.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
    updateThemeIcon();
  });

  // Accent swatches
  document.querySelectorAll('.swatch').forEach(btn => {
    btn.addEventListener('click', () => {
      const hex = btn.getAttribute('data-color');
      root.style.setProperty('--accent', hex);
      localStorage.setItem('accent', hex);
    });
  });

  // I18N
  const I18N = {
    en: {
      'header.role': 'Full‑Stack Developer',
      'summary.title': 'Professional Summary',
      'summary.text':
        'I’m a curious and determined Junior Full‑Stack Developer who enjoys turning what I learn into real, working projects. ' +
        'My foundation in Frontend (React, React Native) is growing stronger every day, while I expand my Backend skills ' +
        '(Node.js, Express.js) with the same enthusiasm. I care about clean, understandable code and I learn fast—especially ' +
        'in collaborative teams. I’m excited to keep improving and contribute to meaningful web and mobile products.',
      'skills.title': 'Skills',
      'skills.frontend.title': 'Frontend Development',
      'skills.frontend.html':
        '<ul>' +
        '<li>React, React Native, JavaScript (ES6+), HTML5, CSS3, Tailwind, Vite</li>' +
        '<li>Component‑based architecture; state (useState, useEffect, Context, Redux)</li>' +
        '<li>Responsive design, mobile UI/UX, cross‑platform development</li>' +
        '</ul>',
      'skills.backend.title': 'Backend Development',
      'skills.backend.html':
        '<ul>' +
        '<li>Node.js, Express.js, MongoDB, PostgreSQL</li>' +
        '<li>REST API design & integration; auth (JWT); async (fetch, async/await)</li>' +
        '</ul>',
      'skills.tools.title': 'Tools & Deployment',
      'skills.tools.html':
        '<ul>' +
        '<li>Git, GitHub, Firebase, Vercel, Render</li>' +
        '<li>Branching & PRs, CI/CD, debugging & testing</li>' +
        '</ul>',
      'skills.soft.title': 'Soft Skills',
      'skills.soft.html':
        '<ul>' +
        '<li>Problem solving, analytical thinking, teamwork & communication</li>' +
        '<li>Self‑learning, time management, attention to detail</li>' +
        '</ul>',
      'projects.title': 'Projects',
      'projects.flightready.html':
        '<ul>' +
        '<li>Mobile exam prep app for pilots (React Native + Expo)</li>' +
        '<li>Firebase auth (register/login)</li>' +
        '<li>Quiz modules with instant feedback & scoring</li>' +
        '<li>Responsive, mobile‑first UI</li>' +
        '</ul>',
      'projects.moneyguard.html':
        '<ul>' +
        '<li>Currency conversion module in React</li>' +
        '<li>Hourly exchange rates from external API</li>' +
        '<li>Real‑time conversion with hooks (useEffect/state)</li>' +
        '<li>Error handling + responsive UI</li>' +
        '</ul>',
      'projects.greenharvest.html':
        '<ul>' +
        '<li>Modular CSS + reusable UI components</li>' +
        '<li>Cross‑browser compatible, mobile‑first</li>' +
        '<li>Layout optimizations & testing support</li>' +
        '</ul>',
      'experience.title': 'Work Experience',
      'experience.items':
        '<ul>' +
        '<li>Led teams in the design, installation, commissioning, and troubleshooting of VRF systems.</li>' +
        '<li>Managed on‑site personnel, ensuring projects were completed on time and efficiently.</li>' +
        '<li>Created 3D project visualizations in SolidWorks and technical drawings in AutoCAD.</li>' +
        '<li>Utilized 3D printing technology to prototype equipment and validate design concepts.</li>' +
        '</ul>',
      'education.title': 'Education & Certificates',
      'education.goit.title': 'IT School GoIT — Web Developer',
      'education.yasar.title': 'Yaşar University — B.Sc. Electrical & Electronics',
      'education.wtech.title': 'WTech — Process Analysis',
      'education.langs.title': 'Languages',
      'education.langs.text': 'Turkish — Native · English — Intermediate',
      'labels.github': 'GitHub',
      'labels.demo': 'Live Demo',
      'footer.text': '© <span id="year"></span> Berkan Görmüş — Built with HTML, CSS & a pinch of JS.'
    },
    tr: {
      'header.role': 'Full‑Stack Geliştirici',
      'summary.title': 'Profesyonel Özet',
      'summary.text':
        'Gerçekten öğrendiklerimi çalışan projelere dönüştürmeyi seven, meraklı ve kararlı bir Junior Full‑Stack Geliştiriciyim. ' +
        'Frontend (React, React Native) temelim her gün güçleniyor; aynı hevesle Backend (Node.js, Express.js) becerilerimi de geliştiriyorum. ' +
        'Temiz ve anlaşılır koda önem veriyorum; özellikle ekip içinde hızlı öğrenir ve uyum sağlarım. Web ve mobil tarafta anlamlı ürünlere katkı sunmak için heyecanlıyım.',
      'skills.title': 'Yetenekler',
      'skills.frontend.title': 'Frontend Geliştirme',
      'skills.frontend.html':
        '<ul>' +
        '<li>React, React Native, JavaScript (ES6+), HTML5, CSS3, Tailwind, Vite</li>' +
        '<li>Bileşen tabanlı mimari; durum yönetimi (useState, useEffect, Context, Redux)</li>' +
        '<li>Duyarlı tasarım, mobil UI/UX, çapraz platform geliştirme</li>' +
        '</ul>',
      'skills.backend.title': 'Backend Geliştirme',
      'skills.backend.html':
        '<ul>' +
        '<li>Node.js, Express.js, MongoDB, PostgreSQL</li>' +
        '<li>REST API tasarımı & entegrasyonu; kimlik doğrulama (JWT); asenkron (fetch, async/await)</li>' +
        '</ul>',
      'skills.tools.title': 'Araçlar & Yayınlama',
      'skills.tools.html':
        '<ul>' +
        '<li>Git, GitHub, Firebase, Vercel, Render</li>' +
        '<li>Branch & PR süreçleri, CI/CD, hata ayıklama & test</li>' +
        '</ul>',
      'skills.soft.title': 'Soft Skills',
      'skills.soft.html':
        '<ul>' +
        '<li>Problem çözme, analitik düşünme, ekip çalışması & iletişim</li>' +
        '<li>Öğrenmeye açıklık, zaman yönetimi, detaylara özen</li>' +
        '</ul>',
      'projects.title': 'Projeler',
      'projects.flightready.html':
        '<ul>' +
        '<li>Pilotlar için mobil sınav hazırlık uygulaması (React Native + Expo)</li>' +
        '<li>Firebase kimlik doğrulama (kayıt/giriş)</li>' +
        '<li>Anında geri bildirimli & puanlamalı quiz modülleri</li>' +
        '<li>Duyarlı, mobil öncelikli arayüz</li>' +
        '</ul>',
      'projects.moneyguard.html':
        '<ul>' +
        '<li>React ile döviz dönüşüm modülü</li>' +
        '<li>Harici API’den saatlik kur verileri</li>' +
        '<li>Hook’larla gerçek zamanlı dönüşüm (useEffect/state)</li>' +
        '<li>Hata yönetimi + duyarlı arayüz</li>' +
        '</ul>',
      'projects.greenharvest.html':
        '<ul>' +
        '<li>Modüler CSS ve yeniden kullanılabilir UI bileşenleri</li>' +
        '<li>Tarayıcılar arası uyumlu, mobil öncelikli</li>' +
        '<li>Yerleşim iyileştirmeleri & test desteği</li>' +
        '</ul>',
      'experience.title': 'İş Deneyimi',
      'experience.items':
        '<ul>' +
        '<li>VRF sistemlerinin tasarım, kurulum, devreye alma ve arıza giderme süreçlerinde ekipleri yönettim.</li>' +
        '<li>Saha personelini koordine ederek projelerin zamanında ve verimli tamamlanmasını sağladım.</li>' +
        '<li>SolidWorks ile 3D proje görselleştirmeleri, AutoCAD ile teknik çizimler oluşturdum.</li>' +
        '<li>Tasarım kavramlarını doğrulamak için 3D yazıcıyla ekipman prototipleri geliştirdim.</li>' +
        '</ul>',
      'education.title': 'Eğitim & Sertifikalar',
      'education.goit.title': 'IT School GoIT — Web Developer',
      'education.yasar.title': 'Yaşar Üniversitesi — Elektrik & Elektronik, Lisans',
      'education.wtech.title': 'WTech — Süreç Analizi',
      'education.langs.title': 'Diller',
      'education.langs.text': 'Türkçe — Ana dil · İngilizce — Orta',
      'labels.github': 'GitHub',
      'labels.demo': 'Canlı Demo',
      'footer.text': '© <span id="year"></span> Berkan Görmüş — HTML, CSS ve biraz JS ile hazırlandı.'
    }
  };

  function applyI18n(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (I18N[lang] && I18N[lang][key]) el.innerHTML = I18N[lang][key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (I18N[lang] && I18N[lang][key]) el.innerHTML = I18N[lang][key];
    });
    localStorage.setItem('lang', lang);
    document.querySelectorAll('#langSwitch button').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
    document.documentElement.setAttribute('lang', lang);
  }

  const savedLang = localStorage.getItem('lang') || 'en';
  applyI18n(savedLang);

  document.querySelectorAll('#langSwitch button').forEach(btn => {
    btn.addEventListener('click', () => applyI18n(btn.getAttribute('data-lang')));
  });

  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();