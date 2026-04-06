import { useState } from 'react';
import "./styles/index.css"
import { FaJava , FaNodeJs} from "react-icons/fa";
import { 
  SiSpringboot, 
  SiJavascript, 
  SiHtml5, 
  SiReact,
  SiMysql,  
  SiGithub,
  SiPython,
  SiFigma 
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { LuLayers, LuKanban } from "react-icons/lu"; 
import fotopessoal from "./assets/fotopessoal.png" 
import webapplogin from "./assets/projetosimage/sistemaloginweb.png"
import cencosudtraining from "./assets/projetosimage/cencosudtraining.png"
import { ScrollReveal } from "./components/ScrollReveal"
import HeroSection from "./components/HeroSection"
import { useLanguage } from "./i18n/useLanguage"

const Portfolio = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { lang, t, toggleLang } = useLanguage();

  const handleCvClick = (e) => {
    e.preventDefault();
    const cvUrl = `${import.meta.env.BASE_URL}Curriculo.pdf`;

    const newTab = window.open(cvUrl, '_blank');
    if (newTab) newTab.opener = null;

    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Curriculo.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="container">
      {/* Header / Menu */}
      <nav className="navbar" aria-label={lang === 'pt' ? 'Navegação principal' : 'Main navigation'}>
        <div className="logo">PORTFÓLIO</div>
        <ul className="nav-links">
          <li><a href="/Curriculo.pdf" onClick={handleCvClick}>{t.nav.cv}</a></li>
          <li><a href="#about">{t.nav.about}</a></li>
          <li><a href="#projects">{t.nav.projects}</a></li>
          <li><a href="#skills">{t.nav.skills}</a></li>
          <li
            className="nav-contact-wrapper"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            onFocus={() => setShowDropdown(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setShowDropdown(false);
            }}
          >
            <a href="#contact">{t.nav.contact}</a>
            <ul className={`contact-dropdown ${showDropdown ? 'active' : ''}`} role="menu" aria-label={lang === 'pt' ? 'Links de contato' : 'Contact links'}>
              <li role="none"><a href="https://www.linkedin.com/in/lucasnsnt/" target="_blank" rel="noopener noreferrer" role="menuitem" tabIndex={0}>LinkedIn</a></li>
              <li role="none"><a href="https://github.com/lucasnsnt/" target="_blank" rel="noopener noreferrer" role="menuitem" tabIndex={0}>GitHub</a></li>
            </ul>
          </li>
          <li>
            <button className="lang-toggle" onClick={toggleLang} aria-label={lang === 'pt' ? 'Mudar para inglês' : 'Switch to Portuguese'}>
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
          </li>
        </ul>
      </nav>

      <main>
      <HeroSection />

      {/* About*/}
      <section id='about' className="about-section">
        <div className="about-container">
          
      
          <div className="about-content">
            <ScrollReveal direction="diagonal">
              <h2 className="about-main-title">{t.about.title}</h2>
              <h3 className="about-subtitle">{t.about.subtitle}</h3>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={2}>
            <p className="about-description">
              {t.about.description}
            </p>

            <div className="btn-talk-wrapper">
              <a href="#contact" className="btn-talk">
                {t.about.btnContact}
              </a>
              <a href="/Curriculo.pdf" onClick={handleCvClick} className="btn-talk btn-download">
                {t.about.btnCv}
              </a>
            </div>
            </ScrollReveal>
          </div>

       
          <ScrollReveal direction="flip">
          <div className="about-image-wrapper">
            <div className="photo-frame">
              <img src={fotopessoal} alt={t.about.imgAlt} />
            </div>
          </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Projetos */}
      <section id="projects" className="section projects-section">
        <ScrollReveal direction="spread">
        <div className="projects-header">
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>
        </div>
        </ScrollReveal>

        <div className="projects-grid">
          

          {/* PROJETO 01 */}
          <ScrollReveal direction="left" delay={1}>
          <div className="project-card">
            <div className="project-image-container mobile">
             
              <img src={cencosudtraining} alt={t.projects.cencosud.alt} className="project-screenshot" />
            </div>
            <div className="project-info">
              <h3 className="project-name">{t.projects.cencosud.name}</h3>
              <p className="project-desc">
                {t.projects.cencosud.desc}
              </p>
            </div>
          </div>
          </ScrollReveal>

          {/* PROJETO 02 */}
          <ScrollReveal direction="right" delay={3}>
          <div className="project-card">
            <div className="project-image-container mobile">
      
              <img src={webapplogin} alt={t.projects.login.alt} className="project-screenshot" />
            </div>
            <div className="project-info">
              <h3 className="project-name">{t.projects.login.name}</h3>
              <p className="project-desc">
                {t.projects.login.desc}
              </p>
            </div>
          </div>
          </ScrollReveal>

        </div>
      </section>

      <section id='skills' className="skills-section">
        <div className="skills-container">
         
          <ScrollReveal direction="diagonal">
          <div className="skills-content">
            <h2 className="skills-title">{t.skills.title}</h2>
            <p className="skills-description">
              {t.skills.description}
            </p>
            <div className="capabilities-tags">
              {t.skills.tags}
            </div>
          </div>
          </ScrollReveal>

         
          <div className="skills-grid-wrapper">
            <div className="skills-grid">

              <ScrollReveal direction="scale" delay={1}>
              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <SiReact size={40} />
                </div>
                <span className="skill-name">React</span>
              </div>
              </ScrollReveal>

              <ScrollReveal direction="scale" delay={2}>
              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <FaJava size={40}/>
                </div>
                <span className="skill-name">JAVA</span>
              </div>
              </ScrollReveal>

              <ScrollReveal direction="scale" delay={3}>
              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <FaNodeJs size={40}/>
                </div>
                <span className="skill-name">NODE</span>
              </div>
              </ScrollReveal>

              <ScrollReveal direction="scale" delay={4}>
              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <SiSpringboot size={40} />
                </div>
                <span className="skill-name">SPRINGBOOT</span>
              </div>
              </ScrollReveal>

              <ScrollReveal direction="scale" delay={5}>
              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <SiPython size={40} />
                </div>
                <span className="skill-name">Python</span>
              </div>
              </ScrollReveal>

              <ScrollReveal direction="scale" delay={6}>
              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <SiJavascript size={40} />
                </div>
                <span className="skill-name">JavaScript</span>
              </div>
              </ScrollReveal>

              <ScrollReveal direction="scale" delay={7}>
              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <SiHtml5 size={40} /> <IoLogoCss3 size={40} />
                </div>
                <span className="skill-name">HTML/CSS</span>
              </div>
              </ScrollReveal>
              
              <ScrollReveal direction="scale" delay={8}>
              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <SiMysql size={40} />
                </div>
                <span className="skill-name"> {t.skills.items.mysql} </span>
              </div>
              </ScrollReveal>

              <ScrollReveal direction="scale" delay={9}>
              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <SiGithub size={40} />
                </div>
                <span className="skill-name"> {t.skills.items.git} </span>
              </div>
              </ScrollReveal>

              <ScrollReveal direction="scale" delay={10}>
              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <SiFigma size={40} />
                </div>
                <span className="skill-name"> {t.skills.items.uiux} </span>
              </div>
              </ScrollReveal>

              <ScrollReveal direction="scale" delay={11}>
              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <LuLayers size={40} />
                </div>
                <span className="skill-name"> {t.skills.items.architecture} </span>
              </div>
              </ScrollReveal>

              <ScrollReveal direction="scale" delay={12}>
              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <LuKanban size={40} />
                </div>
                <span className="skill-name"> {t.skills.items.agile} </span>
              </div>
              </ScrollReveal>


            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <ScrollReveal direction="flip">
          <h2 className="section-title" style={{ textAlign: 'center' }}>{t.contact.title}</h2>
        </ScrollReveal>
        <div className="contact-links">
          <ScrollReveal direction="wipe" delay={1}>
            <a href="https://github.com/lucasnsnt/" className="contact-item" target='_blank' rel='noopener noreferrer'>GITHUB</a>
          </ScrollReveal>
          <ScrollReveal direction="wipe" delay={3}>
            <a href="https://www.linkedin.com/in/lucasnsnt/" className="contact-item" target='_blank' rel='noopener noreferrer'>LINKEDIN</a>
          </ScrollReveal>
          <ScrollReveal direction="wipe" delay={5}>
            <a href="mailto:lucasnsntcontato@outlook.com" className="contact-item" target='_blank' rel='noopener noreferrer'>EMAIL</a>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      </main>
      <footer className="footer">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
};

export default Portfolio;