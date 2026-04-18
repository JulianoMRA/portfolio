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
            role: 'Desenvolvedor Fullstack · UFC',
        },
        hero: {
            title_a: 'Construindo',
            title_b: 'software',
            title_c: 'com cuidado',
            title_d: 'e intenção.',
            lede: 'Sou Juliano Melo. Foco em desenvolvimento fullstack com TypeScript, React e Node.js. Projetos em produção, testes automatizados e entrega no prazo.',
            cta_work: 'Ver projetos',
            cta_cv: 'Baixar CV',
            scroll: 'Role para explorar',
        },
        about: {
            kicker: 'Sobre',
            title: 'Um desenvolvedor que entrega.',
            label: 'Apresentação',
            p1_bold: 'Desenvolvedor fullstack',
            p1: ' focado em TypeScript, React e Node.js. Construí do zero o VanBijouxSys, um ERP desktop em produção com 8 módulos e 62 testes automatizados, hoje usado diariamente em um negócio real. Também mantenho o Coup Online — jogo multiplayer em tempo real com Next.js e Socket.IO — e entreguei solo um desafio técnico mobile fullstack em Flutter + Node + PostgreSQL.',
            p2: 'Estou no 5º semestre de Ciência da Computação na UFC. Como bolsista do PET Computação, coordeno o Processo Seletivo 2026 do programa e ajudei a organizar a Olimpíada Cearense de Informática (736 participantes, 20 escolas) e a Semana Acadêmica da Computação.',
            p3: 'Busco meu primeiro estágio em desenvolvimento. Disponível presencial em Fortaleza ou remoto.',
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
            subtitle: 'Quatro projetos que resumem o que venho construindo — da web ao desktop, com foco em arquitetura, testes e entrega.',
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
                languages: 'Linguagens',
                frontend: 'Frontend & Mobile',
                backend: 'Backend',
                database: 'Banco de dados',
                devops: 'DevOps & Ferramentas',
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
            type: 'Fraunces · Inter · JetBrains Mono',
            rights: 'Todos os direitos reservados.',
        },
    },
    en: {
        nav: { about: 'About', work: 'Work', experience: 'Experience', skills: 'Skills', contact: 'Contact' },
        meta: {
            location: 'Fortaleza, Brazil',
            availability: 'Available for internship — 2026',
            role: 'Fullstack Developer · UFC',
        },
        hero: {
            title_a: 'Building',
            title_b: 'software',
            title_c: 'with care',
            title_d: 'and intent.',
            lede: "I'm Juliano Melo. Fullstack developer focused on TypeScript, React, and Node.js. Projects in production, tested architectures, and on-time delivery.",
            cta_work: 'View work',
            cta_cv: 'Download CV',
            scroll: 'Scroll to explore',
        },
        about: {
            kicker: 'About',
            title: 'A developer who ships.',
            label: 'Introduction',
            p1_bold: 'Fullstack developer',
            p1: " focused on TypeScript, React, and Node.js. I built VanBijouxSys from scratch — a desktop ERP in production with 8 modules and 62 automated tests, used daily in a real business. I also maintain Coup Online, a real-time multiplayer game with Next.js and Socket.IO, and delivered solo a mobile fullstack technical challenge in Flutter + Node + PostgreSQL.",
            p2: "I'm in my 5th semester of Computer Science at UFC. As a scholarship member of PET Computação, I coordinate the program's 2026 selection process and helped organize the Ceará Informatics Olympiad (736 participants, 20 schools) and the Computing Academic Week.",
            p3: 'Looking for my first development internship. Available in-person in Fortaleza or remote.',
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
            subtitle: "Four projects that summarize what I've been building — from web to desktop, focused on architecture, testing, and delivery.",
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
                languages: 'Languages',
                frontend: 'Frontend & Mobile',
                backend: 'Backend',
                database: 'Databases',
                devops: 'DevOps & Tools',
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
            type: 'Fraunces · Inter · JetBrains Mono',
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
            pt: 'ERP desktop em produção para gestão de um negócio de bijuterias, em uso diário por usuária real. 8 módulos interdependentes e 62 testes automatizados.',
            en: 'Desktop ERP in production for managing a jewelry business, used daily by a real user. 8 interdependent modules and 62 automated tests.',
        },
        details: {
            pt: 'TypeScript com React 18 no renderer e Electron + SQLite (Drizzle ORM) no main process. 62 testes no Vitest cobrindo fórmula de precificação, dedução de insumos e restauração transacional de estoque. IPC seguro via contextBridge, SQL parametrizado e ErrorBoundary em produção.',
            en: 'TypeScript with React 18 on the renderer and Electron + SQLite (Drizzle ORM) on the main process. 62 Vitest tests covering pricing formula, input deduction, and transactional stock restoration. Secure IPC via contextBridge, parameterized SQL, and ErrorBoundary in production.',
        },
        tags: ['TypeScript', 'React', 'Electron', 'SQLite', 'Drizzle', 'Vitest'],
        github: 'https://github.com/JulianoMRA/VanBijouxSys',
        metric: { value: '62', label: { pt: 'testes', en: 'tests' } },
    },
    {
        key: 'coup_online',
        year: '2026',
        type: { pt: 'Web · Multiplayer', en: 'Web · Multiplayer' },
        title: { pt: 'Coup Online', en: 'Coup Online' },
        subtitle: { pt: 'Jogo multiplayer em tempo real', en: 'Real-time multiplayer game' },
        description: {
            pt: 'Jogo de cartas multiplayer em tempo real direto no navegador. Salas criadas por código, sem cadastro nem instalação.',
            en: 'Real-time multiplayer card game playable in the browser. Rooms created by code, no sign-up or install.',
        },
        details: {
            pt: 'Monorepo TypeScript com npm workspaces compartilhando tipos entre frontend (Next.js) e backend (Express + Socket.IO). Servidor autoritativo com máquina de estados, WebSocket bidirecional e salas em memória. CI no GitHub Actions e deploy contínuo em Vercel + Railway.',
            en: 'TypeScript monorepo with npm workspaces sharing types between frontend (Next.js) and backend (Express + Socket.IO). Authoritative server with state machine, bidirectional WebSocket, and in-memory rooms. CI on GitHub Actions and continuous deployment to Vercel + Railway.',
        },
        tags: ['TypeScript', 'Next.js', 'Express', 'Socket.IO', 'Vitest', 'CI/CD'],
        github: 'https://github.com/JulianoMRA/Coup',
        liveUrl: 'https://coup-rho-ten.vercel.app',
        metric: { value: 'live', label: { pt: 'em produção', en: 'in production' } },
    },
    {
        key: 'fala_torcedor',
        year: '2026',
        type: { pt: 'Mobile · Fullstack', en: 'Mobile · Fullstack' },
        title: { pt: 'Fala, Torcedor', en: 'Fala, Torcedor' },
        subtitle: { pt: 'Desafio técnico mobile fullstack', en: 'Mobile fullstack technical challenge' },
        description: {
            pt: 'Aplicativo mobile fullstack desenvolvido solo como desafio técnico. Autenticação, CRUDs interdependentes e dashboards estatísticos.',
            en: 'Mobile fullstack app developed solo as a technical challenge. Auth, interdependent CRUDs, and statistical dashboards.',
        },
        details: {
            pt: 'Backend Node.js/Express com PostgreSQL e frontend Flutter. REST com 5 módulos interdependentes, controle transacional, validação, queries parametrizadas e segurança (Helmet, CORS, rate limiting). 87 testes com Jest e Supertest.',
            en: 'Node.js/Express backend with PostgreSQL and Flutter frontend. REST with 5 interdependent modules, transactional control, validation, parameterized queries, and security (Helmet, CORS, rate limiting). 87 tests with Jest and Supertest.',
        },
        tags: ['Flutter', 'Node.js', 'Express', 'PostgreSQL', 'Jest', 'REST'],
        github: 'https://github.com/JulianoMRA/ProcessoSeletivoG4Flex',
        metric: { value: '87', label: { pt: 'testes', en: 'tests' } },
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
    },
]

export const EXPERIENCES = [
    {
        key: 'pet',
        title: { pt: 'PET Computação', en: 'PET Computing' },
        role: { pt: 'Bolsista Remunerado', en: 'Paid Fellow' },
        period: { pt: 'Jul 2025 — Presente', en: 'Jul 2025 — Present' },
        location: 'Fortaleza, CE',
        highlights: {
            pt: [
                'Coordeno o Processo Seletivo 2026 do programa, liderando comitê de ~10 membros na definição de cronograma, edital e rubricas de avaliação.',
                'Coordenei o INCLUDE 2026, evento de acolhimento para 60–70 calouros de Ciência da Computação.',
                'Co-organizei a Olimpíada Cearense de Informática (736 participantes, 20 escolas) e a Semana Acadêmica da Computação (~200 participantes), incluindo elaboração de problemas de programação.',
            ],
            en: [
                "Coordinate the program's 2026 selection process, leading a ~10-member committee on schedule, guidelines, and evaluation rubrics.",
                'Coordinated INCLUDE 2026, an onboarding event for 60–70 Computer Science freshmen.',
                'Co-organized the Ceará Informatics Olympiad (736 participants, 20 schools) and the Computing Academic Week (~200 participants), including designing programming problems.',
            ],
        },
    },
    {
        key: 'ceos',
        title: { pt: 'Ceos Jr. — Empresa Júnior', en: 'Ceos Jr. — Junior Enterprise' },
        role: { pt: 'Assessor Comercial', en: 'Commercial Advisor' },
        period: { pt: 'Mai 2024 — Mai 2025', en: 'May 2024 — May 2025' },
        location: 'Fortaleza, CE',
        highlights: {
            pt: [
                'Conduzi o ciclo completo de vendas de serviços de tecnologia (prospecção, diagnóstico, proposta e fechamento), fechando 2 contratos no período.',
                'Construí dashboards e relatórios mensais de desempenho da equipe comercial, reduzindo o tempo manual de consolidação de dados.',
                'Gerenciei demandas com Scrum/Kanban em contato direto com times técnicos e parceiros externos.',
            ],
            en: [
                'Led the full sales cycle of technology services (prospecting, discovery, proposal, and closing), closing 2 contracts in the period.',
                "Built monthly dashboards and reports on the commercial team's performance, reducing manual data consolidation time.",
                'Managed demands with Scrum/Kanban in direct contact with technical teams and external partners.',
            ],
        },
    },
]

export const SKILLS = [
    { group: 'languages', items: ['TypeScript', 'JavaScript', 'Python', 'Dart', 'Java'] },
    { group: 'frontend', items: ['React', 'Next.js', 'Tailwind', 'Flutter'] },
    { group: 'backend', items: ['Node.js', 'Express', 'Socket.IO', 'Django', 'Electron'] },
    { group: 'database', items: ['PostgreSQL', 'SQLite', 'Drizzle ORM'] },
    { group: 'devops', items: ['Git', 'Docker', 'GitHub Actions', 'Vercel', 'Railway', 'Linux', 'Vitest'] },
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
