import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('language')
        return saved === 'en' || saved === 'pt' ? saved : 'pt'
    })

    useEffect(() => {
        document.documentElement.setAttribute('lang', language === 'pt' ? 'pt-BR' : 'en')
    }, [language])

    const toggleLanguage = () => {
        const next = language === 'pt' ? 'en' : 'pt'
        setLanguage(next)
        localStorage.setItem('language', next)
    }

    const t = (key) => {
        const keys = key.split('.')
        let value = translations[language]
        for (const k of keys) value = value?.[k]
        return value ?? key
    }

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const translations = {
    pt: {
        nav: { about: 'Sobre', work: 'Projetos', experience: 'Experiência', skills: 'Habilidades', contact: 'Contato' },
        meta: {
            location: 'Fortaleza, Brasil',
            availability: 'Disponível para estágio — 2026',
            role: 'QA & Test Automation Engineer · UFC',
        },
        hero: {
            title_a: 'Construindo',
            title_b: 'software',
            title_c: 'com cuidado',
            title_d: 'e intenção.',
            lede: 'QA Engineer no LSBD/UFC, atuando em projetos industriais de diagnóstico de hardware para a Lenovo (LDAR e LTAD). Base sólida em desenvolvimento fullstack (TypeScript, React, Node.js) com foco em automação de testes, CI/CD e garantia de qualidade.',
            cta_work: 'Ver projetos',
            cta_cv: 'Baixar CV',
            scroll: 'Role para explorar',
        },
        about: {
            kicker: 'Sobre',
            title: 'Um dev que pensa como QA.',
            label: 'Apresentação',
            p1_bold: 'QA Engineer no LSBD/UFC',
            p1: ', em projetos industriais de diagnóstico de hardware para a Lenovo (LDAR e LTAD). Venho de uma base prática em desenvolvimento fullstack: penso como dev (leio o código, entendo a arquitetura) e atuo como QA (modelo casos de teste, monto pipelines, busco regressões antes do usuário).',
            p2: 'Antes do LSBD, construí prática real em projetos próprios: implementei 62 testes automatizados (unitários + integração) em Vitest no VanBijouxSys, ERP desktop em produção — cobrindo fórmula de precificação, dedução de insumos e restauração transacional de estoque. No Coup Online, montei pipeline CI/CD no GitHub Actions com lint, testes e secretlint a cada push, com deploy contínuo para Vercel + Railway.',
            p3: 'Estou no 5º semestre de Ciência da Computação na UFC. Em estudo agora: Playwright (E2E web), pytest, Postman/RestAssured, ISTQB CTFL.',
            facts: {
                projects: 'Projetos em produção',
                tests: 'Testes automatizados',
                events: 'Eventos organizados',
                years: 'Anos na universidade',
            },
        },
        work: {
            kicker: 'Projetos selecionados',
            title: 'Trabalhos recentes.',
            subtitle: 'Projetos pessoais construídos em paralelo aos estudos e à atuação profissional — foco em arquitetura, testes automatizados e CI/CD.',
            view: 'Ver no GitHub',
            play: 'Jogar ao vivo',
        },
        experience: {
            kicker: 'Trajetória',
            title: 'Onde passei meu tempo.',
            present: 'Presente',
        },
        skills: {
            kicker: 'Stack',
            title: 'Ferramentas do ofício.',
            subtitle: 'O que uso no dia a dia — linguagens, frameworks e ferramentas.',
            groups: {
                qa: 'Automação de Testes & Qualidade',
                languages: 'Linguagens',
                apis: 'APIs & Dados',
                frontend: 'Frontend & Mobile',
                backend: 'Backend',
                learning: 'Em Estudo',
            },
        },
        certs: {
            kicker: 'Certificações',
            title: 'Aprendizado contínuo.',
            view: 'Ver progresso',
        },
        contact: {
            kicker: 'Contato',
            title_a: 'Vamos construir ',
            title_em: 'algo',
            title_b: 'juntos.',
            subtitle: 'Estou aberto a oportunidades de estágio e colaborações técnicas. Resposta em até 48h.',
            copy: 'Copiar',
            copied: 'Copiado!',
            social: 'Redes',
        },
        footer: {
            tagline: 'Feito à mão com HTML, CSS e café forte.',
            type: 'Inter · JetBrains Mono',
            rights: 'Todos os direitos reservados.',
        },
    },
    en: {
        nav: { about: 'About', work: 'Work', experience: 'Experience', skills: 'Skills', contact: 'Contact' },
        meta: {
            location: 'Fortaleza, Brazil',
            availability: 'Available for internship — 2026',
            role: 'QA & Test Automation Engineer · UFC',
        },
        hero: {
            title_a: 'Building',
            title_b: 'software',
            title_c: 'with care',
            title_d: 'and intent.',
            lede: 'QA Engineer at LSBD/UFC, working on industrial hardware diagnostics projects for Lenovo (LDAR and LTAD). Solid fullstack background (TypeScript, React, Node.js) with focus on test automation, CI/CD, and quality assurance.',
            cta_work: 'View work',
            cta_cv: 'Download CV',
            scroll: 'Scroll to explore',
        },
        about: {
            kicker: 'About',
            title: 'A dev who thinks like QA.',
            label: 'Introduction',
            p1_bold: 'QA Engineer at LSBD/UFC',
            p1: ', on industrial hardware diagnostics projects for Lenovo (LDAR and LTAD). I come from a hands-on fullstack background: I think like a dev (I read the code, understand the architecture) and act like a QA (modeling test cases, building pipelines, catching regressions before the user does).',
            p2: 'Before LSBD, I built real practice in personal projects: I implemented 62 automated tests (unit + integration) in Vitest on VanBijouxSys, a desktop ERP in production — covering pricing formulas, inventory deduction, and transactional stock recovery. On Coup Online, I set up a CI/CD pipeline on GitHub Actions running lint, tests, and secretlint on every push, with continuous deployment to Vercel + Railway.',
            p3: "I'm in my 5th semester of Computer Science at UFC. Currently learning: Playwright (E2E web), pytest, Postman/RestAssured, ISTQB CTFL.",
            facts: {
                projects: 'Projects in production',
                tests: 'Automated tests',
                events: 'Events organized',
                years: 'Years at university',
            },
        },
        work: {
            kicker: 'Selected work',
            title: 'Recent projects.',
            subtitle: 'Personal projects built alongside studies and professional work — focused on architecture, automated testing, and CI/CD.',
            view: 'View on GitHub',
            play: 'Play live',
        },
        experience: {
            kicker: 'Path',
            title: "Where I've spent my time.",
            present: 'Present',
        },
        skills: {
            kicker: 'Stack',
            title: 'Tools of the craft.',
            subtitle: 'What I use day-to-day — languages, frameworks, and tooling.',
            groups: {
                qa: 'Test Automation & Quality',
                languages: 'Languages',
                apis: 'APIs & Data',
                frontend: 'Frontend & Mobile',
                backend: 'Backend',
                learning: 'Currently Learning',
            },
        },
        certs: {
            kicker: 'Certifications',
            title: 'Continuous learning.',
            view: 'View progress',
        },
        contact: {
            kicker: 'Contact',
            title_a: "Let's build ",
            title_em: 'something',
            title_b: 'together.',
            subtitle: "I'm open to internship opportunities and technical collaborations. Reply within 48h.",
            copy: 'Copy',
            copied: 'Copied!',
            social: 'Social',
        },
        footer: {
            tagline: 'Handcrafted with HTML, CSS, and strong coffee.',
            type: 'Inter · JetBrains Mono',
            rights: 'All rights reserved.',
        },
    },
}

export const PROJECTS = [
    {
        key: 'van_bijoux',
        year: '2026',
        type: { pt: 'Desktop · ERP', en: 'Desktop · ERP' },
        title: { pt: 'VanBijouxSys', en: 'VanBijouxSys' },
        subtitle: { pt: 'ERP desktop em produção', en: 'Desktop ERP in production' },
        description: {
            pt: '62 testes automatizados (unitários + integração) em Vitest cobrindo fórmula de precificação, dedução de insumos e restauração transacional de estoque. ERP desktop em produção para gestão de um negócio de bijuterias, em uso diário por usuária real.',
            en: '62 automated tests (unit + integration) in Vitest covering pricing formulas, inventory deduction, and transactional stock recovery. Desktop ERP in production for managing a jewelry business, used daily by a real user.',
        },
        details: {
            pt: 'TypeScript com React 18 no renderer e Electron + SQLite (Drizzle ORM) no main process. 8 módulos interdependentes, IPC seguro via contextBridge, SQL parametrizado e ErrorBoundary em produção.',
            en: 'TypeScript with React 18 on the renderer and Electron + SQLite (Drizzle ORM) on the main process. 8 interdependent modules, secure IPC via contextBridge, parameterized SQL, and ErrorBoundary in production.',
        },
        tags: ['TypeScript', 'React', 'Electron', 'SQLite', 'Drizzle', 'Vitest'],
        github: 'https://github.com/JulianoMRA/VanBijouxSys',
        metric: { value: '62', label: { pt: 'testes', en: 'tests' } },
        coverage: 92,
        suite: 'Vitest · unit + integration',
    },
    {
        key: 'coup_online',
        year: '2026',
        type: { pt: 'Web · Multiplayer', en: 'Web · Multiplayer' },
        title: { pt: 'Coup Online', en: 'Coup Online' },
        subtitle: { pt: 'Jogo multiplayer em tempo real', en: 'Real-time multiplayer game' },
        description: {
            pt: 'Pipeline CI/CD no GitHub Actions com lint, testes e secretlint a cada push, e deploy contínuo para Vercel (frontend) + Railway (backend). Jogo de cartas multiplayer em tempo real direto no navegador, sem cadastro nem instalação.',
            en: 'CI/CD pipeline on GitHub Actions running lint, tests, and secretlint on every push, with continuous deployment to Vercel (frontend) + Railway (backend). Real-time multiplayer card game playable in the browser, no sign-up or install.',
        },
        details: {
            pt: 'Monorepo TypeScript com npm workspaces compartilhando tipos entre frontend (Next.js) e backend (Express + Socket.IO). Servidor autoritativo com máquina de estados, WebSocket bidirecional e salas em memória.',
            en: 'TypeScript monorepo with npm workspaces sharing types between frontend (Next.js) and backend (Express + Socket.IO). Authoritative server with state machine, bidirectional WebSocket, and in-memory rooms.',
        },
        tags: ['TypeScript', 'Next.js', 'Express', 'Socket.IO', 'Vitest', 'GitHub Actions'],
        github: 'https://github.com/JulianoMRA/Coup',
        liveUrl: 'https://coup-rho-ten.vercel.app',
        metric: { value: 'live', label: { pt: 'em produção', en: 'in production' } },
        coverage: 84,
        suite: 'Vitest · unit · GitHub Actions CI',
    },
    {
        key: 'fala_torcedor',
        year: '2026',
        type: { pt: 'Mobile · Fullstack', en: 'Mobile · Fullstack' },
        title: { pt: 'Fala, Torcedor', en: 'Fala, Torcedor' },
        subtitle: { pt: 'Desafio técnico mobile fullstack', en: 'Mobile fullstack technical challenge' },
        description: {
            pt: 'Desafio técnico solo: API RESTful em Node/Express com schema PostgreSQL relacional, 5 módulos CRUD testáveis com autenticação. App mobile fullstack de gestão esportiva em Flutter, com dashboards estatísticos dinâmicos.',
            en: 'Solo technical challenge: RESTful API on Node/Express with relational PostgreSQL schema, 5 testable CRUD modules with authentication. Fullstack mobile sports management app in Flutter, with dynamic statistical dashboards.',
        },
        details: {
            pt: 'Backend Node.js/Express com PostgreSQL e frontend Flutter. Controle transacional, validação, queries parametrizadas e segurança (Helmet, CORS, rate limiting). 87 testes com Jest e Supertest.',
            en: 'Node.js/Express backend with PostgreSQL and Flutter frontend. Transactional control, validation, parameterized queries, and security (Helmet, CORS, rate limiting). 87 tests with Jest and Supertest.',
        },
        tags: ['Flutter', 'Node.js', 'Express', 'PostgreSQL', 'Jest', 'REST'],
        github: 'https://github.com/JulianoMRA/ProcessoSeletivoG4Flex',
        metric: { value: '87', label: { pt: 'testes', en: 'tests' } },
        coverage: 89,
        suite: 'Jest · Supertest · REST integration',
    },
    {
        key: 'oci',
        year: '2025',
        type: { pt: 'Web · Fullstack', en: 'Web · Fullstack' },
        title: { pt: 'Interface OCI', en: 'OCI Interface' },
        subtitle: {
            pt: 'Gestão de gabaritos — Olimpíada Cearense de Informática',
            en: 'Answer-sheet management — Ceará Informatics Olympiad',
        },
        description: {
            pt: 'Sistema web fullstack para gestão de gabaritos da OCI, desenvolvido no processo seletivo do PET Computação UFC 2025.1.',
            en: 'Fullstack web system for OCI answer-sheet management, built during the PET Computação UFC 2025.1 selection.',
        },
        details: {
            pt: 'Backend Django, frontend React, SQLite e biblioteca C++ para leitura automática de gabaritos a partir de imagens. Containerizado com Docker.',
            en: 'Django backend, React frontend, SQLite, and a C++ library for automatic answer-sheet reading from images. Containerized with Docker.',
        },
        tags: ['Django', 'React', 'SQLite', 'Docker', 'C++', 'Linux'],
        github: 'https://github.com/JulianoMRA/FASE1-PSPET-2025.1',
        metric: { value: '4', label: { pt: 'stacks', en: 'stacks' } },
        coverage: 71,
        suite: 'Django tests · unit + e2e',
    },
]

export const EXPERIENCES = [
    {
        key: 'lsbd',
        title: { pt: 'LSBD – Laboratório de Sistemas e Bancos de Dados', en: 'LSBD – Laboratory of Systems and Databases' },
        role: { pt: 'QA Engineer (Bolsista)', en: 'QA Engineer (Scholarship)' },
        period: { pt: 'Mai 2026 — Presente', en: 'May 2026 — Present' },
        location: 'Fortaleza, CE',
        highlights: {
            pt: [
                'Atuação em testes de software no LSBD, laboratório de pesquisa aplicada da UFC, nos projetos LDAR (Lenovo Diagnostics for ARM) e LTAD (Lenovo ThinkSmart Office Diagnostics) — ferramentas de diagnóstico de hardware desenvolvidas para a Lenovo.',
            ],
            en: [
                'Software testing at LSBD, an applied research lab at UFC, on the LDAR (Lenovo Diagnostics for ARM) and LTAD (Lenovo ThinkSmart Office Diagnostics) projects — hardware diagnostics tools developed for Lenovo.',
            ],
        },
        tags: ['QA', 'Test Automation', 'Jira', 'Bug Reporting', 'Hardware Testing'],
    },
    {
        key: 'pet',
        title: { pt: 'PET Computação UFC', en: 'PET Computing UFC' },
        role: { pt: 'Bolsista Remunerado', en: 'Paid Scholarship' },
        period: { pt: 'Jul 2025 — Mai 2026', en: 'Jul 2025 — May 2026' },
        location: 'Fortaleza, CE',
        highlights: {
            pt: [
                'Coordenei o planejamento estratégico do Processo Seletivo 2026, liderando comitê de ~10 membros na definição de cronograma, edital e rubricas de avaliação.',
                'Co-organizei a Olimpíada Cearense de Informática (736 participantes, 20 escolas) e a Semana Acadêmica da Computação.',
            ],
            en: [
                'Led the strategic planning of the 2026 selection process, coordinating a committee of ~10 members on schedule, regulations, and evaluation rubrics.',
                'Co-organized the Ceará Informatics Olympics (736 participants, 20 schools) and the Computer Science Academic Week.',
            ],
        },
        tags: {
            pt: ['Liderança', 'Coordenação', 'Planejamento', 'Critérios de Qualidade'],
            en: ['Leadership', 'Coordination', 'Planning', 'Quality Criteria'],
        },
    },
    {
        key: 'ceos',
        title: { pt: 'Ceos Jr — Empresa Júnior da Computação UFC', en: 'Ceos Jr — UFC Computing Junior Enterprise' },
        role: { pt: 'Assessor Comercial', en: 'Sales Associate' },
        period: { pt: 'Mai 2024 — Mai 2025', en: 'May 2024 — May 2025' },
        location: 'Fortaleza, CE',
        highlights: {
            pt: [
                'Conduzi o ciclo completo de vendas de serviços de tecnologia (prospecção, proposta e fechamento), fechando 2 contratos no período.',
                'Construí dashboards e relatórios mensais de desempenho da equipe comercial.',
            ],
            en: [
                'Led the full sales cycle for technology services (prospecting, proposals, and closing), securing 2 contracts during the period.',
                'Built monthly dashboards and reports for sales team performance.',
            ],
        },
        tags: {
            pt: ['Vendas', 'Scrum/Kanban', 'Dashboards', 'Comunicação'],
            en: ['Sales', 'Scrum/Kanban', 'Dashboards', 'Communication'],
        },
    },
]

export const SKILLS = [
    { group: 'qa',        items: ['Vitest', 'GitHub Actions', 'Jira', 'Bug Reporting', 'Test Case Design', 'Git', 'Docker'] },
    { group: 'languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'] },
    { group: 'apis',      items: ['REST', 'PostgreSQL', 'SQLite', 'Drizzle ORM'] },
    { group: 'frontend',  items: ['React', 'Next.js', 'Tailwind CSS', 'Flutter'] },
    { group: 'backend',   items: ['Node.js', 'Express', 'Socket.IO', 'Django', 'Electron'] },
    { group: 'learning',  items: ['Playwright', 'pytest', 'Postman / RestAssured', 'ISTQB CTFL'] },
]

export const CERTS = [
    {
        id: 'CS50W',
        name: 'CS50W — Web Programming with Python and JavaScript',
        issuer: 'HarvardX',
        year: '2025',
        link: 'https://github.com/JulianoMRA/CS50-s-Web-Programming-with-Python-and-JavaScript',
    },
]

export const FACTS = {
    projects: '04',
    projectsSuffix: '.',
    tests: '149',
    testsSuffix: '+',
    events: '03',
    eventsSuffix: '+',
    years: '02',
    yearsSuffix: '+',
}

export default LanguageContext
