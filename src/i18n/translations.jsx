const currentYear = new Date().getFullYear();
const translations = {
  pt: {
    nav: {
      cv: "BAIXAR CV",
      about: "SOBRE",
      projects: "PROJETOS",
      skills: "SKILLS",
      contact: "CONTATO",
    },
    hero: {
      tagline: "Desenvolvedor web.",
    },
    about: {
      title: "SOBRE MIM",
      subtitle: "QUEM EU SOU",
      description: (
        <>
          Meu nome é <strong>Lucas</strong>, sou <strong>desenvolvedor web</strong> e estudante de <strong>Ciência da Computação</strong>, tenho experiência em projetos acadêmicos aplicados a empresas reais, neles desenvolvi habilidades práticas para o mercado. Atualmente, concentro meus estudos em <strong>Java</strong>, <strong>React</strong>, <strong>JavaScript</strong> e tecnologias de <strong>desenvolvimento web</strong>. Busco diariamente aprimorar meu conhecimento técnico e contribuir de forma efetiva em projetos.
        </>
      ),
      btnContact: "ENTRE EM CONTATO",
      btnCv: "BAIXAR CV",
      imgAlt: "Lucas Santos - Desenvolvedor Web Full-Stack",
    },
    projects: {
      title: "MEUS PROJETOS",
      subtitle: "Projetos focados no desenvolvimento de aplicações web e soluções práticas.",
      cencosud: {
        name: "TREINAMENTO CENCOSUD",
        alt: "Plataforma de treinamento digital Cencosud - projeto de desenvolvimento web com React e Node.js",
        desc: (
          <>
            Plataforma gamificada de simulação empresarial para varejo com rodadas em tempo real. Liderei a stack e identidade do <strong>front-end (React)</strong>, criando páginas de configuração, lobby e estratégia. No <strong>back-end (Node, Express, Prisma)</strong>, atuei na <strong>API REST</strong>, gestão de salas, <strong>sessões com tokens</strong> e <strong>motor financeiro</strong> (CAPEX, juros, custos). Implementei <strong>validação de regras</strong>, <strong>sanitização de dados</strong> e c<strong>omunicação em tempo real via Socket.IO</strong>.
          </>
        ),
      },
      login: {
        name: "Sistema de Login",
        alt: "Sistema de login e autenticação web desenvolvido em Java com Spring Boot e MySQL",
        desc: (
          <>
            Sistema de autenticação web desenvolvido em <strong>Java</strong> com <strong>SpringBoot</strong>, responsável pelo gerenciamento completo do ciclo de usuários <strong>(cadastro, login, logout e controle de acesso a rotas protegidas)</strong>. Persistência em <strong>MySQL</strong>, com <strong>Hibernate</strong> como ORM para acesso a dados. Estruturado em arquitetura em camadas, com separação de responsabilidades e implementação de controle de sessões no <strong>back-end</strong>.
          </>
        ),
      },
    },
    skills: {
      title: "Minhas Skills",
      description: (
        <>
          Desenvolvimento <strong>back-end</strong> em <strong>Java (SpringBoot)</strong>, com implementação de validações, controle de fluxo e persistência de dados em arquitetura em camadas. Experiência com <strong>Node.js</strong> no desenvolvimento de lógicas de sessão e controle de execução de partidas em aplicações interativas. Integração de <strong>APIs</strong> e versionamento com<strong> Git</strong> e <strong>GitHub</strong>. Desenvolvimento <strong>front-end</strong> com <strong>React</strong> e prototipação de interfaces no <strong>Figma (UI/UX)</strong>. Construção de interfaces com <strong>HTML</strong> e <strong>CSS</strong>.
        </>
      ),
      tags: "JAVA (SPRINGBOOT) / NODE.JS / REACT / JAVASCRIPT / MODELAGEM DE DADOS (MYSQL) / GIT & GITHUB / UI/UX DESIGN",
      items: {
        mysql: "Modelagem de Dados (MySQL)",
        git: "Versionamento (Git/GitHub)",
        uiux: "UI/UX Design",
        architecture: "Arquitetura de Sistemas",
        agile: "Metodologias Ágeis",
      },
    },
    contact: {
      title: "ENTRE EM CONTATO",
    },
    footer: `© ${currentYear} Lucas Santos. Todos os direitos reservados.`,
  },

  en: {
    nav: {
      cv: "DOWNLOAD CV",
      about: "ABOUT",
      projects: "PROJECTS",
      skills: "SKILLS",
      contact: "CONTACT",
    },
    hero: {
      tagline: "Web developer.",
    },
    about: {
      title: "ABOUT ME",
      subtitle: "WHO I AM",
      description: (
        <>
          My name is <strong>Lucas</strong>, I'm a <strong>web developer</strong> and <strong>Computer Science</strong> student with experience in academic projects applied to real companies, where I developed practical skills for the market. Currently, I focus my studies on <strong>Java</strong>, <strong>React</strong>, <strong>JavaScript</strong> and <strong>web development</strong> technologies. I strive daily to improve my technical knowledge and contribute effectively to projects.
        </>
      ),
      btnContact: "GET IN TOUCH",
      btnCv: "DOWNLOAD CV",
      imgAlt: "Lucas Santos - Full-Stack Web Developer",
    },
    projects: {
      title: "MY PROJECTS",
      subtitle: "Projects focused on web application development and practical solutions.",
      cencosud: {
        name: "CENCOSUD TRAINING",
        alt: "Cencosud digital training platform - web development project with React and Node.js",
        desc: (
          <>
            Gamified business simulation for retail with real-time rounds. <strong>I led the front-end stack and UI (React)</strong>  , developing config pages, lobby, and strategy dashboards with integration services. On the <strong>back-end (Node, Express, Prisma)</strong>, I built the <strong>REST API</strong>, room management, <strong>token auth</strong>, and a <strong>financial engine</strong> (CAPEX, interest, costs). I also implemented <strong>business rules</strong>, data sanitization, and <strong>real-time communication</strong> using <strong>Socket.IO</strong>.
          </>
        ),
      },
      login: {
        name: "Login System",
        alt: "Web login and authentication system developed in Java with Spring Boot and MySQL",
        desc: (
          <>
            Web authentication system developed in <strong>Java</strong> with <strong>SpringBoot</strong>, responsible for complete user lifecycle management <strong>(registration, login, logout and protected route access control)</strong>. Persistence in <strong>MySQL</strong>, with <strong>Hibernate</strong> as ORM for data access. Structured in layered architecture, with separation of concerns and session control implementation on the <strong>back-end</strong>.
          </>
        ),
      },
    },
    skills: {
      title: "My Skills",
      description: (
        <>
          <strong>Back-end</strong> development in <strong>Java (SpringBoot)</strong>, with validation implementation, flow control and data persistence in layered architecture. Experience with <strong>Node.js</strong> in session logic development and match execution control in interactive applications. <strong>API</strong> integration and versioning with <strong>Git</strong> and <strong>GitHub</strong>. <strong>Front-end</strong> development with <strong>React</strong> and interface prototyping in <strong>Figma (UI/UX)</strong>. Interface building with <strong>HTML</strong> and <strong>CSS</strong>.
        </>
      ),
      tags: "JAVA (SPRINGBOOT) / NODE.JS / REACT / JAVASCRIPT / DATA MODELING (MYSQL) / GIT & GITHUB / UI/UX DESIGN",
      items: {
        mysql: "Data Modeling (MySQL)",
        git: "Versioning (Git/GitHub)",
        uiux: "UI/UX Design",
        architecture: "Systems Architecture",
        agile: "Agile Methodologies",
      },
    },
    contact: {
      title: "GET IN TOUCH",
    },
    footer: `© ${currentYear} Lucas Santos. All rights reserved.`,
  },
};

export default translations;
