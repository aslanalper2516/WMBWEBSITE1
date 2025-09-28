import React, { useState, useEffect } from 'react';
import { Coffee, MapPin, Clock, Menu, X, ChevronDown, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import './App.css';

const ModernMinimalistCafe = () => {
  const [language, setLanguage] = useState('en');
  const [showMenuPage, setShowMenuPage] = useState(false);
  const [activeCategory, setActiveCategory] = useState('coffee');
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    en: {
      home: 'Home',
      about: 'About',
      branches: 'Branches',
      menu: 'Menu',
      social: 'Social',
      contact: 'Contact',
      heroTitle: 'ARTISAN CAFE',
      heroSubtitle: 'Crafted with passion, served with love',
      viewMenu: 'VIEW MENU',
      ourStory: 'Our Story',
      storySubtitle: 'A journey of taste and tradition',
      aboutText1: 'Founded in 2015, Artisan Cafe has been dedicated to bringing the finest coffee experience to our community. We source our beans from sustainable farms around the world and roast them in-house to ensure the perfect cup every time.',
      aboutText2: 'Our commitment extends beyond coffee. We offer a carefully curated menu of fresh, locally-sourced ingredients, creating dishes that complement our beverages perfectly. Every visit to Artisan is an experience in quality and comfort.',
      ourLocations: 'Our Locations',
      findUs: 'Find us near you',
      connectWithUs: 'Connect With Us',
      followJourney: 'Follow our journey',
      getInTouch: 'Get In Touch',
      loveToHear: "We'd love to hear from you",
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      yourMessage: 'Your Message',
      sendMessage: 'SEND MESSAGE',
      headOffice: 'Head Office',
      businessHours: 'Business Hours',
      weekdays: 'Monday - Friday: 6am - 10pm',
      weekends: 'Saturday - Sunday: 7am - 11pm',
      backToHome: '← Back to Home',
      ourMenu: 'Our Menu',
      menuSubtitle: 'Carefully crafted selections',
      coffee: 'Coffee',
      food: 'Food',
      desserts: 'Desserts',
      beverages: 'Other Beverages',
      coffeeSelection: 'Coffee Selection',
      foodMenu: 'Food Menu',
      dessertMenu: 'Dessert Selection',
      beverageMenu: 'Beverage Selection'
    },
    tr: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      branches: 'Şubeler',
      menu: 'Menü',
      social: 'Sosyal',
      contact: 'İletişim',
      heroTitle: 'ARTISAN KAFE',
      heroSubtitle: 'Tutkuyla hazırlandı, sevgiyle sunuldu',
      viewMenu: 'MENÜYÜ GÖRÜNTÜLE',
      ourStory: 'Hikayemiz',
      storySubtitle: 'Lezzet ve geleneğin yolculuğu',
      aboutText1: '2015 yılında kurulan Artisan Kafe, topluluğumuza en iyi kahve deneyimini sunmaya kendini adamıştır. Çekirdeklerimizi dünyanın dört bir yanındaki sürdürülebilir çiftliklerden tedarik ediyor ve her seferinde mükemmel fincan için kendi tesisimizde kavuruyoruz.',
      aboutText2: 'Bağlılığımız kahvenin ötesine uzanır. Taze, yerel kaynaklı malzemelerden özenle seçilmiş bir menü sunuyoruz ve içeceklerimizi mükemmel şekilde tamamlayan yemekler yaratıyoruz. Artisan\'a her ziyaret, kalite ve konfor deneyimidir.',
      ourLocations: 'Lokasyonlarımız',
      findUs: 'Size yakın şubemizi bulun',
      connectWithUs: 'Bizimle İletişime Geçin',
      followJourney: 'Yolculuğumuzu takip edin',
      getInTouch: 'İletişime Geçin',
      loveToHear: 'Sizden haber almayı çok isteriz',
      yourName: 'Adınız',
      yourEmail: 'E-posta Adresiniz',
      yourMessage: 'Mesajınız',
      sendMessage: 'MESAJ GÖNDER',
      headOffice: 'Merkez Ofis',
      businessHours: 'Çalışma Saatleri',
      weekdays: 'Pazartesi - Cuma: 6:00 - 22:00',
      weekends: 'Cumartesi - Pazar: 7:00 - 23:00',
      backToHome: '← Ana Sayfaya Dön',
      ourMenu: 'Menümüz',
      menuSubtitle: 'Özenle hazırlanmış seçkiler',
      coffee: 'Kahve',
      food: 'Yemek',
      desserts: 'Tatlılar',
      beverages: 'Diğer İçecekler',
      coffeeSelection: 'Kahve Seçkisi',
      foodMenu: 'Yemek Menüsü',
      dessertMenu: 'Tatlı Seçkisi',
      beverageMenu: 'İçecek Seçkisi'
    }
  };

  const t = translations[language];

  const menuItems = {
    coffee: [
      { name: { en: 'Espresso', tr: 'Espresso' }, desc: { en: 'Rich, bold shot of pure coffee', tr: 'Zengin, güçlü saf kahve' }, price: '$3.50' },
      { name: { en: 'Cappuccino', tr: 'Cappuccino' }, desc: { en: 'Espresso with steamed milk and foam', tr: 'Buharlanmış süt ve köpükle espresso' }, price: '$4.50' },
      { name: { en: 'Flat White', tr: 'Flat White' }, desc: { en: 'Double shot with microfoam milk', tr: 'Mikroköpük sütle çift shot' }, price: '$5.00' },
      { name: { en: 'Pour Over', tr: 'Pour Over' }, desc: { en: 'Single origin, hand-brewed coffee', tr: 'Tek köken, el yapımı demleme kahve' }, price: '$6.00' },
      { name: { en: 'Cold Brew', tr: 'Cold Brew' }, desc: { en: '24-hour steeped, smooth and refreshing', tr: '24 saat demleme, pürüzsüz ve ferahlatıcı' }, price: '$5.50' }
    ],
    food: [
      { name: { en: 'Avocado Toast', tr: 'Avokadolu Tost' }, desc: { en: 'Sourdough, smashed avocado, poached egg', tr: 'Ekşi maya, ezilmiş avokado, haşlanmış yumurta' }, price: '$12.00' },
      { name: { en: 'Croissant Sandwich', tr: 'Kruvasan Sandviç' }, desc: { en: 'Ham, cheese, lettuce, tomato', tr: 'Jambon, peynir, marul, domates' }, price: '$10.00' },
      { name: { en: 'Caesar Salad', tr: 'Sezar Salata' }, desc: { en: 'Romaine, parmesan, croutons, caesar dressing', tr: 'Marul, parmesan, kruton, sezar sos' }, price: '$11.00' },
      { name: { en: 'Grilled Panini', tr: 'Izgara Panini' }, desc: { en: 'Chicken, pesto, mozzarella, sun-dried tomatoes', tr: 'Tavuk, pesto, mozzarella, kurutulmuş domates' }, price: '$13.00' }
    ],
    desserts: [
      { name: { en: 'Chocolate Cake', tr: 'Çikolatalı Pasta' }, desc: { en: 'Rich dark chocolate with ganache', tr: 'Ganajlı zengin bitter çikolata' }, price: '$8.00' },
      { name: { en: 'Cheesecake', tr: 'Cheesecake' }, desc: { en: 'New York style with berry compote', tr: 'New York usulü, meyveli sos ile' }, price: '$7.50' },
      { name: { en: 'Tiramisu', tr: 'Tiramisu' }, desc: { en: 'Classic Italian coffee-flavored dessert', tr: 'Klasik İtalyan kahve aromalı tatlı' }, price: '$9.00' }
    ],
    beverages: [
      { name: { en: 'Fresh Orange Juice', tr: 'Taze Portakal Suyu' }, desc: { en: 'Freshly squeezed daily', tr: 'Günlük taze sıkılmış' }, price: '$5.00' },
      { name: { en: 'Smoothie Bowl', tr: 'Smoothie Bowl' }, desc: { en: 'Mixed berries with granola', tr: 'Karışık meyveler ve granola' }, price: '$8.50' },
      { name: { en: 'Iced Tea', tr: 'Buzlu Çay' }, desc: { en: 'Homemade lemon iced tea', tr: 'Ev yapımı limonlu buzlu çay' }, price: '$4.00' }
    ]
  };

  const branches = [
    { 
      name: { en: 'Downtown', tr: 'Merkez' },
      address: '123 Main Street',
      hours: { en: 'Mon-Fri: 7am-9pm', tr: 'Pzt-Cum: 7:00-21:00' },
      weekend: { en: 'Sat-Sun: 8am-10pm', tr: 'Cmt-Paz: 8:00-22:00' },
      phone: '+1 234 567 8900'
    },
    {
      name: { en: 'Westside', tr: 'Batı Yakası' },
      address: '456 Park Avenue',
      hours: { en: 'Mon-Fri: 6am-8pm', tr: 'Pzt-Cum: 6:00-20:00' },
      weekend: { en: 'Sat-Sun: 7am-9pm', tr: 'Cmt-Paz: 7:00-21:00' },
      phone: '+1 234 567 8901'
    },
    {
      name: { en: 'Beachfront', tr: 'Sahil' },
      address: '789 Ocean Drive',
      hours: { en: 'Daily: 6am-11pm', tr: 'Her gün: 6:00-23:00' },
      phone: '+1 234 567 8902'
    }
  ];

  const handleNavClick = (sectionId) => {
    if (sectionId === 'menu') {
      setShowMenuPage(true);
    } else {
      setShowMenuPage(false);
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setMobileNavOpen(false);
  };

  if (showMenuPage) {
    return (
      <div className="menu-page">
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
          <div className="header-content">
            <h1 className="logo">ARTISAN</h1>
            <div className="menu-header-actions">
              <button
                onClick={() => setShowMenuPage(false)}
                className="back-button"
              >
                {t.backToHome}
              </button>
              <div className="lang-switcher">
                <button
                  onClick={() => setLanguage('en')}
                  className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('tr')}
                  className={`lang-btn ${language === 'tr' ? 'active' : ''}`}
                >
                  TR
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="menu-content">
          <div className="menu-hero">
            <h1>{t.ourMenu}</h1>
            <p>{t.menuSubtitle}</p>
          </div>

          <div className="category-tabs">
            {['coffee', 'food', 'desserts', 'beverages'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {t[cat]}
              </button>
            ))}
          </div>

          <div className="menu-items-container">
            <div className="menu-items">
              <h3>
                {activeCategory === 'coffee' && t.coffeeSelection}
                {activeCategory === 'food' && t.foodMenu}
                {activeCategory === 'desserts' && t.dessertMenu}
                {activeCategory === 'beverages' && t.beverageMenu}
              </h3>
              <div className="items-list">
                {menuItems[activeCategory]?.map((item, index) => (
                  <div key={index} className="menu-item">
                    <div className="item-info">
                      <h4>{item.name[language]}</h4>
                      <p>{item.desc[language]}</p>
                    </div>
                    <span className="item-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <h1 className="logo">ARTISAN</h1>
          
          <nav className="desktop-nav">
            <ul>
              {['home', 'about', 'branches', 'social', 'contact', 'menu'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="nav-link"
                  >
                    {t[item]}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="lang-switcher">
            <button
              onClick={() => setLanguage('en')}
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('tr')}
              className={`lang-btn ${language === 'tr' ? 'active' : ''}`}
            >
              TR
            </button>
          </div>

          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="mobile-menu-btn"
          >
            {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileNavOpen && (
          <nav className="mobile-nav">
            <ul>
              {['home', 'about', 'branches', 'social', 'contact', 'menu'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="nav-link"
                  >
                    {t[item]}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mobile-lang-switcher">
              <button
                onClick={() => setLanguage('en')}
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('tr')}
                className={`lang-btn ${language === 'tr' ? 'active' : ''}`}
              >
                Türkçe
              </button>
            </div>
          </nav>
        )}
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroSubtitle}</p>
          <button
            onClick={() => setShowMenuPage(true)}
            className="cta-button"
          >
            {t.viewMenu}
          </button>
        </div>
        <div className="scroll-indicator">
          <ChevronDown size={24} />
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>{t.ourStory}</h2>
          <p className="subtitle">{t.storySubtitle}</p>
          
          <div className="about-content">
            <div className="about-text">
              <p>{t.aboutText1}</p>
              <p>{t.aboutText2}</p>
            </div>
            <div className="about-image">
              <Coffee size={80} />
            </div>
          </div>
        </div>
      </section>

      <section id="branches" className="branches">
        <div className="container">
          <h2>{t.ourLocations}</h2>
          <p className="subtitle">{t.findUs}</p>
          
          <div className="branches-grid">
            {branches.map((branch, index) => (
              <div key={index} className="branch-card">
                <MapPin size={24} />
                <h3>{branch.name[language]}</h3>
                <p>{branch.address}</p>
                <p>{branch.hours[language]}</p>
                {branch.weekend && <p>{branch.weekend[language]}</p>}
                <p className="phone">{branch.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="social" className="social">
        <div className="container">
          <h2>{t.connectWithUs}</h2>
          <p className="subtitle">{t.followJourney}</p>
          
          <div className="social-links">
            <a href="#" className="social-link">
              <Facebook size={20} />
            </a>
            <a href="#" className="social-link">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-link">
              <Twitter size={20} />
            </a>
            <a href="#" className="social-link">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>{t.getInTouch}</h2>
          <p className="subtitle">{t.loveToHear}</p>
          
          <div className="contact-content">
            <div className="contact-form">
              <input
                type="text"
                placeholder={t.yourName}
                className="form-input"
              />
              <input
                type="email"
                placeholder={t.yourEmail}
                className="form-input"
              />
              <textarea
                rows="5"
                placeholder={t.yourMessage}
                className="form-textarea"
              ></textarea>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  alert(language === 'en' ? 'Message sent successfully!' : 'Mesaj başarıyla gönderildi!');
                }}
                className="submit-btn"
              >
                {t.sendMessage}
              </button>
            </div>
            
            <div className="contact-info">
              <div className="info-item">
                <h3>
                  <MapPin size={20} />
                  {t.headOffice}
                </h3>
                <p>123 Main Street, Downtown</p>
                <p>contact@artisancafe.com</p>
                <p>+1 234 567 8900</p>
              </div>
              
              <div className="info-item">
                <h3>
                  <Clock size={20} />
                  {t.businessHours}
                </h3>
                <p>{t.weekdays}</p>
                <p>{t.weekends}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModernMinimalistCafe;