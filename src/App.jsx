import React from 'react';
import "./App.css"
import { FaJava } from "react-icons/fa";
import { 
  SiSpringboot, 
  SiHibernate, 
  SiJavascript, 
  SiHtml5, 
  SiReact,
  SiMysql,  
  SiGithub,
  SiPython,
  SiFigma 
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { LuUsers, LuLayers, LuKanban } from "react-icons/lu"; // Ícones de gestão/design
import fotopessoal from "./assets/fotopessoal.png" 
import webapplogin from "./assets/projetosimage/sistemaloginweb.png"
import cencosudtraining from "./assets/projetosimage/cencosudtraining.png"

const Portfolio = () => {
  return (
    <div className="container">
      {/* Header / Menu */}
      <nav className="navbar">
        <div className="logo">PORTFÓLIO</div>
        <ul className="nav-links">
          <li><a href="#about">SOBRE</a></li>
          <li><a href="#projects">PROJETOS</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#contact">CONTATO</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <h1 className="hero-title">DESENVOLVEDOR <br/> FULL-STACK</h1>
        <p className="hero-subtitle">Sou desenvolvedor e meu objetivo é criar soluções digitais que unem inovação, funcionalidade e experiência do usuário.</p>
      </header>

      {/* About Section */}
      <section id='about' className="about-section">
        <div className="about-container">
          
          {/* Lado Esquerdo: Conteúdo */}
          <div className="about-content">
            <h1 className="about-main-title">SOBRE MIM</h1>
            <h2 className="about-subtitle">QUEM EU SOU</h2>
            
            <p className="about-description">
              <strong>Lucas Santos</strong>, estudante de <strong>Ciência da Computação</strong>, tenho experiência em projetos acadêmicos aplicados a empresas reais, o que me permitiu desenvolver habilidades práticas para o mercado. Atualmente, concentro meus estudos em <strong>Java (SpringBoot) </strong>, <strong>React</strong>, <strong>Javascript</strong> e tecnologias de <strong>desenvolvimento web</strong>. Busco diariamente aprimorar meu conhecimento técnico e contribuir de forma efetiva em   projetos.
            </p>

            <a href="#contact" className="btn-talk">
              VAMOS CONVERSAR
            </a>
          </div>

          {/* Lado Direito: Foto */}
          <div className="about-image-wrapper">
            <div className="photo-circle">
              <img src={fotopessoal} alt="Lucas Santos" style={{width: '100%', height: '100%', objectFit: 'cover'}}></img>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="projects-header">
          <h2 className="section-title">MEUS PROJETOS</h2>
          <p className="section-subtitle">Soluções digitais inovadoras que potencializam o crescimento do seu negócio.</p>
        </div>

        <div className="projects-grid">
          

          {/* PROJETO 01 */}
          <div className="project-card">
            <div className="project-image-container mobile">
              {/* Adicione sua imagem colorida aqui */}
              <img src={cencosudtraining} alt="Cencosud image" className="project-screenshot" />
            </div>
            <div className="project-info">
              <h3 className="project-name">TREINAMENTO CENCOSUD</h3>
              <p className="project-desc">
                Plataforma digital associada a empresa <strong>Cencosud</strong> focada no treinamento de equipes, simulando decisões em ambiente real.
                Atuei na definição da identidade visual, arquitetura e stack do <strong>front-end (React)</strong>, além da prototipação e
                desenvolvimento das interfaces.Contribuí no <strong>back-end (Node.js/Prisma)</strong> com lógica de sessões e integração 
                via API, apoiando a coesão entre as camadas do sistema.
              </p>
            </div>
          </div>

          {/* PROJETO 02 */}
          <div className="project-card">
            <div className="project-image-container mobile">
              {/* Adicione sua imagem colorida aqui (formato celular) */}
              <img src={webapplogin} alt="App Login" className="project-screenshot" />
            </div>
            <div className="project-info">
              <h3 className="project-name">Autenticacao web</h3>
              <p className="project-desc">
                Sistema de autenticação web utilizando <strong>Java</strong> e <strong>Spring Boot</strong> para consolidar conhecimentos em desenvolvimento <strong>back-end</strong>. A aplicação gerencia o fluxo completo de usuários, incluindo cadastro, login, logout e proteção de rotas restritas, utilizando <strong>MySQL</strong> e <strong>Hibernate</strong> para a persistência dos dados. O projeto foi estruturado seguindo boas práticas de organização em camadas, focando na segurança e no controle eficiente de sessões.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section id='skills' className="skills-section">
        <div className="skills-container">
          {/* Bloco de Texto: Capacitações e Experiência */}
          <div className="skills-content">
            <h2 className="skills-title">Minhas Skills</h2>
            <p className="skills-description">
              Desenvolvimento com <strong>Java</strong> e tecnologias do ecossistema (<strong>Spring Boot</strong>, <strong>Hibernate</strong>), atuando na construção de soluções<strong> back-end</strong> com regras de negócio, persistência de dados e arquitetura em camadas. Experiência com <strong>Node.js</strong> e aplicações em <strong>React</strong> no <strong>front-end</strong>. Atuação em sistemas interativos e escaláveis, incluindo plataforma de simulação corporativa. Criação de interfaces com HTML e CSS como suporte ao desenvolvimento.
            </p>
            <div className="capabilities-tags">
              <span>JAVA (SPRINGBOOT)</span> / <span>HIBERNATE (JPA)</span> / <span>NODE.JS</span> / <span>REACT & JSX</span> / <span>JAVASCRIPT (ES6+)</span> / <span>MODELAGEM DE DADOS (MYSQL)</span> / <span>ENGENHARIA DE SOFTWARE</span> / <span>GIT & GITHUB</span> / <span>UI/UX DESIGN</span>
            </div>
          </div>

          {/* Bloco de Ícones: Tech Stack */}
          <div className="skills-grid-wrapper">
            <div className="skills-grid">
              {/* Repita este bloco para cada ícone */}
              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <SiReact size={40} />
                </div>
                <span className="skill-name">React & JSX:</span>
              </div>

              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <FaJava size={40}/>
                </div>
                <span className="skill-name">JAVA</span>
              </div>

              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <SiSpringboot size={40} />
                </div>
                <span className="skill-name">SPRINGBOOT</span>
              </div>

              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <SiHibernate size={40} />
                </div>
                <span className="skill-name">HIBERNATE</span>
              </div>

              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <SiPython size={40} />
                </div>
                <span className="skill-name">Python</span>
              </div>

              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <SiJavascript size={40} />
                </div>
                <span className="skill-name">JavaScript</span>
              </div>

              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <SiHtml5 size={40} /> <IoLogoCss3 size={40} />
                </div>
                <span className="skill-name">HtML/CSS</span>
              </div>
              
              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <SiMysql size={40} />
                </div>
                <span className="skill-name"> Modelagem de Dados (MySQL) </span>
              </div>

              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <SiGithub size={40} />
                </div>
                <span className="skill-name"> Versionamento (Git/GitHub) </span>
              </div>

              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <SiFigma size={40} />
                </div>
                <span className="skill-name"> UI/UX Design </span>
              </div>

              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <LuLayers size={40} />
                </div>
                <span className="skill-name"> Arquitetura de Sistemas </span>
              </div>

              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <LuKanban size={40} />
                </div>
                <span className="skill-name"> Metodologias Ageis </span>
              </div>

              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <LuUsers size={40} />
                </div>
                <span className="skill-name"> Gestao de equipes </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <h2 className="section-title" style={{ textAlign: 'center' }}> ENTRE EM CONTATO CONTATO</h2>
        <div className="contact-links">
          <a href="https://github.com/lucassantos4" className="contact-item" target='blank' >GITHUB</a>
          <a href="https://www.linkedin.com/in/lucassantos4/" className="contact-item" target='blank'>LINKEDIN</a>
          <a href="mailto:lucasnsntcontato@outlook.com" className="contact-item" target='blank'>EMAIL</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 — TODOS OS DIREITOS RESERVADOS.</p>
      </footer>
    </div>
  );
};

export default Portfolio;