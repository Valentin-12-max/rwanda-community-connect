cat > src/App.jsx <<'EOF'
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Users,
  Store,
  GraduationCap,
  BriefcaseBusiness,
  CalendarDays,
  ArrowRight,
  Menu,
  X,
  Globe2,
  HeartHandshake,
  MapPin
} from "lucide-react";
import "./App.css";

const features = [
  { key: "community", icon: Users, color: "purple" },
  { key: "marketplace", icon: Store, color: "orange" },
  { key: "education", icon: GraduationCap, color: "blue" },
  { key: "jobs", icon: BriefcaseBusiness, color: "green" },
  { key: "events", icon: CalendarDays, color: "pink" }
];

const languages = [
  { code: "en", name: "English" },
  { code: "rw", name: "Kinyarwanda" },
  { code: "fr", name: "Français" },
  { code: "sw", name: "Kiswahili" }
];

function App() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    ["home", "#home"],
    ["community", "#community"],
    ["marketplace", "#marketplace"],
    ["education", "#education"],
    ["jobs", "#jobs"],
    ["events", "#events"]
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="nav-container">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-icon">
              <HeartHandshake size={27} />
            </span>
            <span className="brand-name">
              Rwanda<span>Connect</span>
              <small>COMMUNITY PLATFORM</small>
            </span>
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav className={`navigation ${menuOpen ? "navigation-open" : ""}`}>
            {navItems.map(([key, href]) => (
              <a href={href} key={key} onClick={closeMenu}>
                {t(key)}
              </a>
            ))}

            <div className="mobile-actions">
              <a href="#login" className="login-link" onClick={closeMenu}>
                {t("login")}
              </a>
              <a href="#signup" className="nav-join" onClick={closeMenu}>
                {t("signup")}
              </a>
            </div>
          </nav>

          <div className="desktop-actions">
            <label className="language-picker">
              <Globe2 size={17} />
              <select
                value={i18n.resolvedLanguage || "en"}
                onChange={changeLanguage}
                aria-label="Select language"
              >
                {languages.map((language) => (
                  <option key={language.code} value={language.code}>
                    {language.name}
                  </option>
                ))}
              </select>
            </label>

            <a href="#login" className="login-link">{t("login")}</a>
            <a href="#signup" className="nav-join">{t("signup")}</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-decoration decoration-one" />
          <div className="hero-decoration decoration-two" />

          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="badge-dot" />
                {t("badge")}
              </div>

              <h1>
                {t("heroTitle").split(". ").map((word, index) => (
                  <span key={index}>
                    {word}{index < 2 ? "." : ""}
                    {index < 2 && <br />}
                  </span>
                ))}
              </h1>

              <p className="hero-description">{t("heroText")}</p>

              <div className="hero-buttons">
                <a href="#community" className="primary-button">
                  {t("explore")} <ArrowRight size={19} />
                </a>
                <a href="#about" className="secondary-button">
                  {t("learn")}
                </a>
              </div>

              <div className="hero-location">
                <MapPin size={17} />
                <span>Made for Rwanda. Open to everyone.</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-glow" />
              <div className="visual-main-card">
                <div className="visual-top">
                  <span className="online-indicator" />
                  <span>RCC COMMUNITY</span>
                  <Globe2 size={19} />
                </div>
                <div className="visual-circle">
                  <HeartHandshake size={76} strokeWidth={1.4} />
                </div>
                <h2>One Rwanda. Many connections.</h2>
                <p>People, ideas and opportunities growing together.</p>
                <div className="visual-tags">
                  <span>Community</span>
                  <span>Business</span>
                  <span>Opportunity</span>
                </div>
              </div>

              <div className="floating-card floating-top">
                <Users size={22} />
                <span><strong>Community</strong><small>Connect with people</small></span>
              </div>
              <div className="floating-card floating-bottom">
                <Store size={22} />
                <span><strong>Marketplace</strong><small>Discover local business</small></span>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <span>CONNECTING RWANDA</span>
            <span className="bottom-line" />
            <span>ONE COMMUNITY AT A TIME</span>
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-container">
            <div className="stat">
              <strong>4</strong>
              <span>Languages supported</span>
            </div>
            <div className="stat">
              <strong>1</strong>
              <span>Connected community</span>
            </div>
            <div className="stat">
              <strong>∞</strong>
              <span>Possibilities to grow</span>
            </div>
          </div>
        </section>

        <section className="features-section" id="community">
          <div className="section-heading">
            <span className="eyebrow">DISCOVER RCC</span>
            <h2>{t("welcome")}</h2>
            <p>{t("welcomeText")}</p>
          </div>

          <div className="features-grid">
            {features.map(({ key, icon: Icon, color }) => (
              <article className="feature-card" id={key} key={key}>
                <div className={`feature-icon ${color}`}>
                  <Icon size={27} />
                </div>
                <h3>{t(key)}</h3>
                <p>{t(`${key}Desc`)}</p>
                <a href="#signup" className="feature-link">
                  {t("learn")} <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="connect-section" id="about">
          <div className="connect-inner">
            <div className="connect-symbol">
              <HeartHandshake size={66} />
            </div>
            <div className="connect-content">
              <span className="eyebrow">BUILT FOR CONNECTION</span>
              <h2>{t("connectTitle")}</h2>
              <p>{t("connectText")}</p>
              <a href="#signup" className="primary-button">
                {t("getStarted")} <ArrowRight size={19} />
              </a>
            </div>
          </div>
        </section>

        <section className="signup-section" id="signup">
          <span className="eyebrow">BE PART OF RCC</span>
          <h2>Build connections. Discover opportunities.</h2>
          <p>Join a community that brings Rwanda closer together.</p>
          <a href="#login" className="primary-button">
            {t("signup")} <ArrowRight size={19} />
          </a>
          <span id="login" className="login-placeholder">
            Account registration and login will be connected in a later stage.
          </span>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <span className="brand-icon"><HeartHandshake size={25} /></span>
              <span className="brand-name">
                Rwanda<span>Connect</span>
                <small>COMMUNITY PLATFORM</small>
              </span>
            </a>
            <p>{t("footerText")}</p>
          </div>

          <div className="footer-links">
            <h4>{t("quickLinks")}</h4>
            <a href="#community">{t("community")}</a>
            <a href="#marketplace">{t("marketplace")}</a>
            <a href="#education">{t("education")}</a>
            <a href="#events">{t("events")}</a>
          </div>

          <div className="footer-links">
            <h4>RCC</h4>
            <a href="#about">{t("about")}</a>
            <a href="#signup">{t("contact")}</a>
            <a href="#privacy">{t("privacy")}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Rwanda Community Connect. {t("rights")}</span>
          <span>Made with purpose in Rwanda 🇷🇼</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
EOF