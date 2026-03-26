import React from 'react';
import "./App.css"
import { FaJava , FaNodeJs} from "react-icons/fa";
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
import { LuUsers, LuLayers, LuKanban } from "react-icons/lu"; 
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

      
      <header className="hero-section">
        <h1 className="hero-title">Desenvolvedor Web</h1>
        <p className="hero-subtitle">Sou desenvolvedor e meu objetivo é criar soluções digitais que unem inovação, funcionalidade e experiência do usuário.</p>
      </header>

      {/* About*/}
      <section id='about' className="about-section">
        <div className="about-container">
          
      
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

       
          <div className="about-image-wrapper">
            <div className="photo-circle">
              <img src={fotopessoal} alt="Lucas Santos" style={{width: '100%', height: '100%', objectFit: 'cover'}}></img>
            </div>
          </div>

        </div>
      </section>

      {/* Projetos */}
      <section id="projects" className="section projects-section">
        <div className="projects-header">
          <h2 className="section-title">MEUS PROJETOS</h2>
          <p className="section-subtitle">Soluções digitais inovadoras que potencializam o crescimento do seu negócio.</p>
        </div>

        <div className="projects-grid">
          

          {/* PROJETO 01 */}
          <div className="project-card">
            <div className="project-image-container mobile">
             
              <img src={cencosudtraining} alt="Cencosud image" className="project-screenshot" />
            </div>
            <div className="project-info">
              <h3 className="project-name">TREINAMENTO CENCOSUD</h3>
              <p className="project-desc">
                Plataforma digital voltada ao treinamento de equipes, com simulação de tomada de decisões em cenários práticos. Atuei na definição da identidade visual e da stack do <strong>front-end (React)</strong>, além de estruturar as primeiras interfaces e estabelecer um padrão visual e técnico para o desenvolvimento do time. Também contribuí no <strong>back-end</strong> com<strong> Node.js</strong> e <strong>Prisma</strong>, implementando lógica de sessões e integração com APIs.
              </p>
            </div>
          </div>

          {/* PROJETO 02 */}
          <div className="project-card">
            <div className="project-image-container mobile">
      
              <img src={webapplogin} alt="App Login" className="project-screenshot" />
            </div>
            <div className="project-info">
              <h3 className="project-name">Autenticacao web</h3>
              <p className="project-desc">
                Sistema de autenticação web desenvolvido com <strong>Java</strong> com <strong>Spring Boot</strong>, responsável pelo gerenciamento completo do ciclo de usuários <strong>(cadastro, login, logout e controle de acesso a rotas protegidas)</strong>. Persistência em <strong>MySQL</strong>, com abstração de acesso a dados via <strong>Hibernate (ORM)</strong> e mapeamento objeto-relacional. Estruturado em arquitetura em camadas, com separação de responsabilidades e implementação de controle de sessões no <strong>back-end</strong>.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section id='skills' className="skills-section">
        <div className="skills-container">
         
          <div className="skills-content">
            <h2 className="skills-title">Minhas Skills</h2>
            <p className="skills-description">
              Desenvolvimento <strong>back-end</strong> em <strong>Java (Spring Boot)</strong>, com implementação de validações, controle de fluxo e persistência de dados em arquitetura em camadas. Experiência com <strong>Node.js</strong> no desenvolvimento de lógicas de sessão e controle de execução de partidas em aplicações interativas. Integração de <strong>APIs</strong> e versionamento com<strong> Git</strong> e <strong>GitHub</strong>. Desenvolvimento <strong>front-end</strong> com <strong>React</strong> e prototipação de interfaces no <strong>Figma (UI/UX)</strong>. Construção de interfaces com <strong>HTML</strong> e <strong>CSS</strong>.
            </p>
            <div className="capabilities-tags">
              <span >JAVA (SPRINGBOOT)</span> / <span>HIBERNATE </span> / <span>NODE.JS</span> / <span>REACT</span> / <span>JAVASCRIPT </span> / <span>MODELAGEM DE DADOS (MYSQL)</span> / <span>ENGENHARIA DE SOFTWARE</span> / <span>GIT & GITHUB</span> / <span>UI/UX DESIGN</span>
            </div>
          </div>

         
          <div className="skills-grid-wrapper">
            <div className="skills-grid">

              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <SiReact size={40} />
                </div>
                <span className="skill-name">React</span>
              </div>

              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <FaJava size={40}/>
                </div>
                <span className="skill-name">JAVA</span>
              </div>

              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <FaNodeJs size={40}/>
                </div>
                <span className="skill-name">NODE</span>
              </div>

              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <SiSpringboot size={40} />
                </div>
                <span className="skill-name">SPRINGBOOT</span>
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
                <span className="skill-name">HTML/CSS</span>
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


            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
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