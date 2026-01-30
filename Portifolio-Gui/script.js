const translations = {
  pt: {
    navSobre: "Sobre",
    navStats: "Estatísticas",
    navProjetos: "Projetos",
    navContato: "Contato",
    heroTitle: "Olá eu sou Guilherme Analista de QA",
    heroDesc: "Sou QA e desenvolvedor com foco em backend usando Java e Python. Faço automações, APIs robustas e pipelines de testes confiáveis para entregar software estável e escalável.",
    heroBtn1: "Ver Projetos",
    heroBtn2: "Fale Comigo",
    profileTitle: "Guilherme — QA & Dev",
    profileInfo: "Java • Spring • Python • Flask/Django • Test Automation • SQL",
    statsTitle: "Estatísticas",
    stat1Label: "Projetos Completados",
    stat2Label: "Anos de Experiência",
    stat3Label: "Tecnologias Dominadas",
    stat4Label: "Dedicação",
    sobreTitle: "Sobre Mim",
    sobreDesc: "Tenho experiência em desenvolvimento backend e automação de testes. Trabalho com projetos que exigem confiabilidade, escrita de testes automatizados e integração contínua.",
    educacaoTitle: "Educação",
    educacaoDesc: "Formado em <strong>Análise e Desenvolvimento de Sistemas</strong> (graduação / técnico) e atualmente cursando pós-graduação em <strong>Engenharia de Software</strong>.",
    softSkillTitle: "Soft Skill",
    projetosTitle: "Projetos",
    projeto1Title: "Gerador de QR Code (Python)",
    projeto1Desc: "Geração de QR codes para URLs, interface web",
    projeto1Link: "Repositório",
    projeto2Title: "Sistema de Gestão (Spring Boot)",
    projeto2Desc: "Backend, API REST, autenticação, testes",
    projeto2Link: "Repositório",
    projeto3Title: "Automação de Testes (Python)",
    projeto3Desc: "Scripts, integração CI, relatórios",
    projeto3Link: "Repositório",
    projeto4Title: "API REST (Flask)",
    projeto4Desc: "Endpoints, documentação, testes",
    projeto4Link: "Repositório",
    contatoTitle: "Contato",
    contatoDesc: "Envie um email:",
    contatoLink: "Enviar Email",
    footerText: "© 2026 Guilherme — Desenvolvedor & QA"
  },
  en: {
    navSobre: "About",
    navStats: "Statistics",
    navProjetos: "Projects",
    navContato: "Contact",
    heroTitle: "Hi, I'm Guilherme QA Analyst",
    heroDesc: "I am a QA and backend developer focused on Java and Python. I create automations, robust APIs, and reliable test pipelines to deliver stable and scalable software.",
    heroBtn1: "View Projects",
    heroBtn2: "Contact Me",
    profileTitle: "Guilherme — QA & Dev",
    profileInfo: "Java • Spring • Python • Flask/Django • Test Automation • SQL",
    statsTitle: "Statistics",
    stat1Label: "Completed Projects",
    stat2Label: "Years of Experience",
    stat3Label: "Mastered Technologies",
    stat4Label: "Dedication",
    sobreTitle: "About Me",
    sobreDesc: "I have experience in backend development and test automation. I work on projects that require reliability, writing automated tests, and continuous integration.",
    educacaoTitle: "Education",
    educacaoDesc: "Graduated in <strong>Systems Analysis and Development</strong> (undergraduate / technical) and currently pursuing a postgraduate degree in <strong>Software Engineering</strong>.",
    softSkillTitle: "Soft Skill",
    projetosTitle: "Projects",
    projeto1Title: "QR Code Generator (Python)",
    projeto1Desc: "Generation of QR codes for URLs, web interface",
    projeto1Link: "Repository",
    projeto2Title: "Management System (Spring Boot)",
    projeto2Desc: "Backend, REST API, authentication, tests",
    projeto2Link: "Repository",
    projeto3Title: "Test Automation (Python)",
    projeto3Desc: "Scripts, CI integration, reports",
    projeto3Link: "Repository",
    projeto4Title: "REST API (Flask)",
    projeto4Desc: "Endpoints, documentation, tests",
    projeto4Link: "Repository",
    contatoTitle: "Contact",
    contatoDesc: "Send an email:",
    contatoLink: "Send Email",
    footerText: "© 2026 Guilherme — Developer & QA"
  },
  es: {
    navSobre: "Sobre",
    navStats: "Estadísticas",
    navProjetos: "Proyectos",
    navContato: "Contacto",
    heroTitle: "Hola, soy Guilherme Analista de QA",
    heroDesc: "Soy QA y desarrollador backend enfocado en Java y Python. Creo automatizaciones, APIs robustas y pipelines de pruebas confiables para entregar software estable y escalable.",
    heroBtn1: "Ver Proyectos",
    heroBtn2: "Contáctame",
    profileTitle: "Guilherme — QA & Dev",
    profileInfo: "Java • Spring • Python • Flask/Django • Test Automation • SQL",
    statsTitle: "Estadísticas",
    stat1Label: "Proyectos Completados",
    stat2Label: "Años de Experiencia",
    stat3Label: "Tecnologías Dominadas",
    stat4Label: "Dedicación",
    sobreTitle: "Sobre Mí",
    sobreDesc: "Tengo experiencia en desarrollo backend y automatización de pruebas. Trabajo en proyectos que requieren confiabilidad, escritura de pruebas automatizadas e integración continua.",
    educacaoTitle: "Educación",
    educacaoDesc: "Graduado en <strong>Análisis y Desarrollo de Sistemas</strong> (licenciatura / técnico) y actualmente cursando posgrado en <strong>Ingeniería de Software</strong>.",
    softSkillTitle: "Soft Skill",
    projetosTitle: "Proyectos",
    projeto1Title: "Generador de Código QR (Python)",
    projeto1Desc: "Generación de códigos QR para URLs, interfaz web",
    projeto1Link: "Repositorio",
    projeto2Title: "Sistema de Gestión (Spring Boot) - En Progreso",
    projeto2Desc: "Backend, API REST, autenticación, pruebas",
    projeto2Link: "En Progreso",
    projeto3Title: "Automatización de Pruebas (Python) - En Progreso",
    projeto3Desc: "Scripts, integración CI, informes",
    projeto3Link: "En Progreso",
    projeto4Title: "API REST (Flask) - En Progreso",
    projeto4Desc: "Endpoints, documentación, pruebas",
    projeto4Link: "En Progreso",
    contatoTitle: "Contacto",
    contatoDesc: "Envía un email:",
    contatoLink: "Enviar Email",
    footerText: "© 2026 Guilherme — Desarrollador & QA"
  }
};

function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href=a.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        const el=document.querySelector(href);
        if(el) {
          el.scrollIntoView({behavior:'smooth',block:'start'});
          // Set active class immediately
          const navLinks = document.querySelectorAll('nav a');
          navLinks.forEach(link=>link.classList.remove('active'));
          a.classList.add('active');
        }
      }
    });
  });
}

function sendEmail(){
  const user = 'guilhermeosilva2406';
  const domain = 'gmail.com';
  const subject = encodeURIComponent('Contato via portfólio');
  const mailto = `mailto:${user}@${domain}?subject=${subject}`;
  window.location.href = mailto;
}

function mudarTema() {
  document.documentElement.classList.toggle("light-mode");
  const isLight = document.documentElement.classList.contains("light-mode");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  const themeToggle = document.getElementById('themeToggle');
  if (isLight) {
    themeToggle.innerHTML = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/></svg>';
  } else {
    themeToggle.innerHTML = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
  }
}

function mudarIdioma() {
  const select = document.getElementById('languageSelect');
  const lang = select.value;
  document.documentElement.lang = lang;
  localStorage.setItem("language", lang);
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update typing SVG based on language
  const typingSvg = document.getElementById('typingSvg');
  if (typingSvg) {
    if (lang === 'en') {
      typingSvg.src = 'https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&width=435&lines=Hello%2C+I+am+Guilherme%2C+a+QA+Analyst';
    } else if (lang === 'es') {
      typingSvg.src = 'https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&width=435&lines=Hola%2C+soy+Guilherme%2C+Analista+de+QA';
    } else {
      typingSvg.src = 'https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&width=435&lines=Ol%C3%A1++eu+sou+Guilherme+Analista+de+QA';
    }
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  smoothScroll();
  const emailBtn = document.getElementById('emailBtn');
  if(emailBtn) emailBtn.addEventListener('click', e=>{ e.preventDefault(); sendEmail(); });
  const footerEmail = document.getElementById('footerEmail');
  if(footerEmail) footerEmail.addEventListener('click', e=>{ e.preventDefault(); sendEmail(); });
  // marcar link ativo conforme a seção visível
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('nav a');
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`nav a[href="#${id}"]`);
      if(entry.isIntersecting){
        navLinks.forEach(a=>a.classList.remove('active'));
        if(link) link.classList.add('active');
      }
    });
  },{root:null,rootMargin:'0px 0px -40% 0px',threshold:0});
  sections.forEach(s=>observer.observe(s));

  // header pequeno efeito ao rolar
  const header = document.querySelector('header');
  const onScroll = ()=>{
    if(window.scrollY > 16) header.classList.add('scrolled'); else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // language selector
  const languageSelect = document.getElementById('languageSelect');
  if(languageSelect) languageSelect.addEventListener('change', mudarIdioma);

});
