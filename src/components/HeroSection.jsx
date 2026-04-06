import { useLanguage } from "../i18n/useLanguage";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <header className="hero-section" id="hero">
      {/* SVG Filters — warped/liquid typography distortion */}
      <svg className="hero-filters" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="warp" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.012 0.018"
              numOctaves="3"
              seed="4"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="10"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Background cursive echo — starts big & visible, shrinks away */}
      <div className="hero-echo" aria-hidden="true">
        <span className="hero-echo-text">web developer</span>
      </div>

      {/* Main sculptural name block — fades in as echo recedes */}
      <div className="hero-content">
        <h1 className="hero-name">
          <span className="hero-name-line hero-name-top">LUCAS</span>
          <span className="hero-name-line hero-name-bottom">SANTOS</span>
        </h1>
        <p className="hero-tagline">{t.hero.tagline}</p>
      </div>
    </header>
  );
};

export default HeroSection;
