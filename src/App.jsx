import React from 'react';
import "./styles/index.css"
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
import { ScrollReveal } from "./components/ScrollReveal"
import { BiFontSize } from 'react-icons/bi';

const Portfolio = () => {

  return (
    <div className="container">
      {/* Header / Menu */}
      <nav className="navbar" aria-label="Navegação principal">
        <div className="logo">PORTFÓLIO</div>
        <ul className="nav-links">
          <li><a href="#about">SOBRE</a></li>
          <li><a href="#projects">PROJETOS</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#contact">CONTATO</a></li>
        </ul>
      </nav>

      <main>
      <header className="hero-section">
        <section className='Hero-description'>
          <ScrollReveal direction="wipe">
            <h1 className="hero-title">Lucas Santos</h1>
            <h2 className="hero-subtitle">Desenvolvedor web</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={3}>
            <p className="hero-text">Sou desenvolvedor e meu objetivo é criar soluções digitais que unem inovação, funcionalidade e experiência do usuário.</p>
          </ScrollReveal>
        </section>

      </header>

      {/* About*/}
      <section id='about' className="about-section">
        <div className="about-container">
          
      
          <div className="about-content">
            <ScrollReveal direction="diagonal">
              <h2 className="about-main-title">SOBRE MIM</h2>
              <h3 className="about-subtitle">QUEM EU SOU</h3>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={2}>
            <p className="about-description">
              Meu nome é <strong>Lucas</strong>, sou <strong>desenvolvedor web</strong> e estudante de <strong>Ciência da Computação</strong>, tenho experiência em projetos acadêmicos aplicados a empresas reais, neles desenvolvi habilidades práticas para o mercado.  Atualmente, concentro meus estudos em <strong>Java</strong>, <strong>React</strong>, <strong>JavaScript</strong> e tecnologias de <strong>desenvolvimento web</strong>. Busco diariamente aprimorar meu conhecimento técnico e contribuir de forma efetiva em   projetos.
            </p>

            <a href="#contact" className="btn-talk">
              VAMOS CONVERSAR
            </a>
            </ScrollReveal>
          </div>

       
          <ScrollReveal direction="flip">
          <div className="about-image-wrapper">
            <div className="photo-frame">
              <img src={fotopessoal} alt="Lucas Santos - Desenvolvedor Web Full-Stack" />
            </div>
          </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Projetos */}
      <section id="projects" className="section projects-section">
        <ScrollReveal direction="spread">
        <div className="projects-header">
          <h2 className="section-title">MEUS PROJETOS</h2>
          <p className="section-subtitle">Projetos focados no desenvolvimento de aplicações web e soluções práticas.</p>
        </div>
        </ScrollReveal>

        <div className="projects-grid">
          

          {/* PROJETO 01 */}
          <ScrollReveal direction="left" delay={1}>
          <div className="project-card">
            <div className="project-image-container mobile">
             
              <img src={cencosudtraining} alt="Plataforma de treinamento digital Cencosud - projeto de desenvolvimento web com React e Node.js" className="project-screenshot" />
            </div>
            <div className="project-info">
              <h3 className="project-name">TREINAMENTO CENCOSUD</h3>
              <p className="project-desc">
                Plataforma digital voltada ao treinamento de equipes, com simulação de tomada de decisões em cenários práticos. Atuei na definição da identidade visual e da stack do <strong>front-end</strong> com <strong>React</strong>, além de estruturar as primeiras interfaces e estabelecer um padrão visual e técnico para o desenvolvimento do time. Também contribuí no <strong>back-end</strong> com<strong> Node.js</strong> e <strong>Prisma</strong>, implementando lógica de sessões e integração com APIs.
              </p>
            </div>
          </div>
          </ScrollReveal>

          {/* PROJETO 02 */}
          <ScrollReveal direction="right" delay={3}>
          <div className="project-card">
            <div className="project-image-container mobile">
      
              <img src={webapplogin} alt="Sistema de login e autenticação web desenvolvido em Java com Spring Boot e MySQL" className="project-screenshot" />
            </div>
            <div className="project-info">
              <h3 className="project-name">Sistema de Login</h3>
              <p className="project-desc">
                Sistema de autenticação web desenvolvido em <strong>Java</strong> com <strong>SpringBoot</strong>, responsável pelo gerenciamento completo do ciclo de usuários <strong>(cadastro, login, logout e controle de acesso a rotas protegidas)</strong>. Persistência em <strong>MySQL</strong>, com <strong>Hibernate</strong> como ORM para acesso a dados. Estruturado em arquitetura em camadas, com separação de responsabilidades e implementação de controle de sessões no <strong>back-end</strong>.
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
            <h2 className="skills-title">Minhas Skills</h2>
            <p className="skills-description">
              Desenvolvimento <strong>back-end</strong> em <strong>Java (SpringBoot)</strong>, com implementação de validações, controle de fluxo e persistência de dados em arquitetura em camadas. Experiência com <strong>Node.js</strong> no desenvolvimento de lógicas de sessão e controle de execução de partidas em aplicações interativas. Integração de <strong>APIs</strong> e versionamento com<strong> Git</strong> e <strong>GitHub</strong>. Desenvolvimento <strong>front-end</strong> com <strong>React</strong> e prototipação de interfaces no <strong>Figma (UI/UX)</strong>. Construção de interfaces com <strong>HTML</strong> e <strong>CSS</strong>.
            </p>
            <div className="capabilities-tags">
              <span >JAVA (SPRINGBOOT)</span> / <span>NODE.JS</span> / <span>REACT</span> / <span>JAVASCRIPT </span> / <span>MODELAGEM DE DADOS (MYSQL)</span> / <span>GIT & GITHUB</span> / <span>UI/UX DESIGN</span>
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
                <span className="skill-name"> Modelagem de Dados (MySQL) </span>
              </div>
              </ScrollReveal>

              <ScrollReveal direction="scale" delay={9}>
              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <SiGithub size={40} />
                </div>
                <span className="skill-name"> Versionamento (Git/GitHub) </span>
              </div>
              </ScrollReveal>

              <ScrollReveal direction="scale" delay={10}>
              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <SiFigma size={40} />
                </div>
                <span className="skill-name"> UI/UX Design </span>
              </div>
              </ScrollReveal>

              <ScrollReveal direction="scale" delay={11}>
              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <LuLayers size={40} />
                </div>
                <span className="skill-name"> Arquitetura de Sistemas </span>
              </div>
              </ScrollReveal>

              <ScrollReveal direction="scale" delay={12}>
              <div className="skill-card">
                <div className="skill-icon-placeholder">
                  <LuKanban size={40} />
                </div>
                <span className="skill-name"> Metodologias Ageis </span>
              </div>
              </ScrollReveal>


            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <ScrollReveal direction="flip">
          <h2 className="section-title" style={{ textAlign: 'center' }}> ENTRE EM CONTATO</h2>
        </ScrollReveal>
        <div className="contact-links">
          <ScrollReveal direction="wipe" delay={1}>
            <a href="https://github.com/lucassantos4" className="contact-item" target='_blank' rel='noopener noreferrer'>GITHUB</a>
          </ScrollReveal>
          <ScrollReveal direction="wipe" delay={3}>
            <a href="https://www.linkedin.com/in/lucassantos4/" className="contact-item" target='_blank' rel='noopener noreferrer'>LINKEDIN</a>
          </ScrollReveal>
          <ScrollReveal direction="wipe" delay={5}>
            <a href="mailto:lucasnsntcontato@outlook.com" className="contact-item" target='_blank' rel='noopener noreferrer'>EMAIL</a>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      </main>
      <footer className="footer">
        <p>© 2026 Lucas Santos — Desenvolvedor Web Full-Stack. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Portfolio;