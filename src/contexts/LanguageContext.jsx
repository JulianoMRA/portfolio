import { createContext, useContext, useState } from 'react'

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

    const toggleLanguage = () => {
        const next = language === 'pt' ? 'en' : 'pt'
        setLanguage(next)
        localStorage.setItem('language', next)
    }

    const t = (key) => {
        const keys = key.split('.')
        let value = translations[language]

        for (const k of keys) {
            value = value?.[k]
        }

        return value || key
    }

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

// Traduções centralizadas
const translations = {
    pt: {
        nav: {
            about: 'Sobre',
            experience: 'Experiência',
            projects: 'Projetos',
            certifications: 'Certificações',
            skills: 'Habilidades'
        },
        hero: {
            greeting: 'Olá, meu nome é',
            name: 'Juliano!',
            subtitle: 'Desenvolvedor Fullstack.',
            description: 'Focado em TypeScript, React e Node.js, com projetos em produção e arquiteturas testadas. Estudante de Ciência da Computação na UFC, buscando estágio em desenvolvimento.',
            viewProjects: 'Ver Projetos',
            downloadCV: 'Baixar Currículo'
        },
        about: {
            title: 'Sobre',
            p1: 'Desenvolvedor fullstack focado em TypeScript, React e Node.js. Construí do zero o VanBijouxSys, um ERP desktop em produção com 8 módulos e 62 testes automatizados, hoje usado diariamente em um negócio real. Também mantenho o Coup Online — jogo multiplayer em tempo real com Next.js e Socket.IO — e entreguei solo um desafio técnico mobile fullstack em Flutter + Node + PostgreSQL.',
            p2: 'Estou no 5º semestre de Ciência da Computação na UFC. Como bolsista do PET Computação, coordeno o Processo Seletivo 2026 do programa e ajudei a organizar a Olimpíada Cearense de Informática (736 participantes, 20 escolas) e a Semana Acadêmica da Computação.',
            p3: 'Busco meu primeiro estágio em desenvolvimento. Disponível presencial em Fortaleza ou remoto.'
        },
        experience: {
            title: 'Experiência',
            pet: {
                title: 'PET Computação',
                role: 'Bolsista Remunerado',
                highlights: [
                    'Coordeno o Processo Seletivo 2026 do programa, liderando comitê de ~10 membros na definição de cronograma, edital e rubricas de avaliação.',
                    'Coordenei o INCLUDE 2026, evento de acolhimento para 60–70 calouros de Ciência da Computação.',
                    'Co-organizei a Olimpíada Cearense de Informática (736 participantes, 20 escolas) e a Semana Acadêmica da Computação (~200 participantes), incluindo elaboração de problemas de programação para a OCI.'
                ]
            },
            ceos: {
                title: 'Ceos Jr. - Empresa Júnior da Computação',
                role: 'Assessor Comercial',
                highlights: [
                    'Conduzi o ciclo completo de vendas de serviços de tecnologia (prospecção, diagnóstico, proposta e fechamento), fechando 2 contratos no período.',
                    'Construí dashboards e relatórios mensais de desempenho da equipe comercial, reduzindo o tempo manual de consolidação de dados.',
                    'Gerenciei demandas com Scrum/Kanban em contato direto com times técnicos e parceiros externos.'
                ]
            }
        },
        projects: {
            title: 'Projetos',
            context: 'Contexto:',
            details: 'Detalhes:',
            viewOnGithub: 'Ver no GitHub →',
            playLive: 'Jogar ao vivo →',
            image: 'imagem',
            imagePreview: 'Visualização ampliada',
            closeModal: 'Fechar',
            items: {
                van_bijoux: {
                    title: 'VanBijouxSys — ERP desktop em produção',
                    period: '2024 – Presente',
                    description: 'ERP desktop em produção para gestão de um negócio de bijuterias, em uso diário por usuária real. Inclui 8 módulos interdependentes: dashboard, produtos, estoque, precificação, vendas, feiras e fluxo de caixa.',
                    details: 'Construído em TypeScript com React 18 no renderer e Electron + SQLite (Drizzle ORM) no processo principal. Possui 62 testes automatizados (unitários e de integração) no Vitest, cobrindo fórmula de precificação, dedução de insumos e restauração transacional de estoque. Arquitetura com IPC seguro via contextBridge, SQL parametrizado e ErrorBoundary em produção. Hoje na versão 1.5.',
                },
                coup_online: {
                    title: 'Coup Online — Jogo multiplayer em tempo real',
                    period: '2025 – Presente',
                    description: 'Jogo de cartas multiplayer em tempo real jogável direto pelo navegador, sem cadastro nem instalação. Cada sala é criada por código e compartilhada via link.',
                    details: 'Monorepo em TypeScript com npm workspaces compartilhando tipos entre frontend (Next.js) e backend (Express + Socket.IO). Servidor autoritativo com máquina de estados do jogo, comunicação bidirecional via WebSocket e gerenciamento de salas em memória. CI configurado no GitHub Actions (lint, testes, secretlint) e deploy contínuo na Vercel (frontend) e Railway (backend).',
                },
                fala_torcedor: {
                    title: 'Fala, Torcedor — Desafio técnico mobile fullstack',
                    period: 'Mar de 2026',
                    description: 'Aplicativo mobile fullstack desenvolvido solo como desafio técnico de processo seletivo. Sistema de gestão esportiva com autenticação, CRUDs interdependentes e dashboards estatísticos.',
                    details: 'Backend em Node.js/Express com PostgreSQL e frontend mobile em Flutter. Arquitetura REST com 5 módulos de negócio interdependentes, controle transacional, validação de entradas, queries parametrizadas e medidas de segurança (Helmet, CORS, rate limiting). Cobertura de 87 testes automatizados com Jest e Supertest. Painéis dinâmicos com visualização de estatísticas em tempo real.',
                },
                oci: {
                    title: 'Interface de Gerenciamento — OCI',
                    period: 'Jun de 2025',
                    description: 'Sistema web fullstack para gestão de gabaritos da Olimpíada Cearense de Informática (OCI), desenvolvido durante o processo seletivo do PET Computação UFC 2025.1.',
                    details: 'Aplicação fullstack com backend em Django e frontend em React, integrando banco de dados SQLite e uma biblioteca em C++ para leitura automática de gabaritos a partir de imagens. Toda a aplicação foi containerizada com Docker, garantindo portabilidade e execução estável em ambientes Linux.',
                },
                gvp: {
                    title: 'GVP — Gestor de Vestuário Pessoal',
                    period: 'Jul de 2025',
                    description: 'Sistema desktop em Java desenvolvido como trabalho final da disciplina de Técnicas de Programação, para organizar e gerenciar vestuário pessoal.',
                    details: 'O sistema conta com cadastro completo de roupas, acessórios, calçados e roupas íntimas; montagem de looks e registro de utilizações; controle de lavagens e empréstimos; estatísticas visuais sobre uso e empréstimos; interface intuitiva e padronizada com persistência automática dos dados via serialização.',
                    details2: 'Um exercício intenso de organização, boas práticas e foco na experiência do usuário — aplicando Java, Swing, arquitetura MVC e serialização para transformar uma ideia em produto funcional.',
                },
                cockatiel: {
                    title: 'Cockatiel Adventures',
                    period: 'Mai de 2025 – Jul de 2025',
                    description: 'Jogo 2D desenvolvido com a engine Godot para o projeto final da disciplina de Programação para Jogos I (SMD – Sistemas e Mídias Digitais, UFC).',
                    details: 'Trabalhei em todas as etapas: planejamento, programação em GDScript, design das fases e implementação das mecânicas de jogo. O projeto aprimorou minhas habilidades em lógica de jogos, design de interfaces e organização de cenas na engine Godot.',
                },
            },
        },
        certifications: {
            title: 'Certificações',
            viewCertificate: 'Ver progresso'
        },
        skills: {
            title: 'Habilidades',
            categories: {
                languages: 'Linguagens',
                frontend: 'Frontend & Mobile',
                backend: 'Backend',
                database: 'Banco de dados',
                devops: 'DevOps & Ferramentas'
            }
        },
        footer: {
            contact: 'Contato',
            languages: 'Idiomas',
            portuguese: 'Português (Nativo)',
            english: 'Inglês (Avançado)',
            rights: 'Todos os direitos reservados.'
        }
    },
    en: {
        nav: {
            about: 'About',
            experience: 'Experience',
            projects: 'Projects',
            certifications: 'Certifications',
            skills: 'Skills'
        },
        hero: {
            greeting: "Hi, I'm",
            name: 'Juliano!',
            subtitle: 'Fullstack Developer.',
            description: 'Focused on TypeScript, React, and Node.js, with projects in production and tested architectures. Computer Science student at UFC, looking for a development internship.',
            viewProjects: 'View Projects',
            downloadCV: 'Download CV'
        },
        about: {
            title: 'About',
            p1: "Fullstack developer focused on TypeScript, React, and Node.js. I built VanBijouxSys from scratch — a desktop ERP in production with 8 modules and 62 automated tests, used daily in a real business. I also maintain Coup Online, a real-time multiplayer game with Next.js and Socket.IO, and delivered solo a mobile fullstack technical challenge in Flutter + Node + PostgreSQL.",
            p2: "I'm in my 5th semester of Computer Science at UFC. As a scholarship member of PET Computação, I coordinate the program's 2026 selection process and helped organize the Ceará Informatics Olympiad (736 participants, 20 schools) and the Computing Academic Week.",
            p3: "Looking for my first development internship. Available in-person in Fortaleza or remote."
        },
        experience: {
            title: 'Experience',
            pet: {
                title: 'PET Computing',
                role: 'Paid Fellow',
                highlights: [
                    "I coordinate the program's 2026 selection process, leading a ~10-member committee on schedule, guidelines, and evaluation rubrics.",
                    'I coordinated INCLUDE 2026, an onboarding event for 60–70 Computer Science freshmen.',
                    'I co-organized the Ceará Informatics Olympiad (736 participants, 20 schools) and the Computing Academic Week (~200 participants), including designing programming problems for the Olympiad.'
                ]
            },
            ceos: {
                title: 'Ceos Jr. - Computing Junior Enterprise',
                role: 'Commercial Advisor',
                highlights: [
                    'Led the full sales cycle of technology services (prospecting, discovery, proposal, and closing), closing 2 contracts in the period.',
                    "Built monthly dashboards and reports on the commercial team's performance, reducing manual data consolidation time.",
                    'Managed demands with Scrum/Kanban in direct contact with technical teams and external partners.'
                ]
            }
        },
        projects: {
            title: 'Projects',
            context: 'Context:',
            details: 'Details:',
            viewOnGithub: 'View on GitHub →',
            playLive: 'Play live →',
            image: 'image',
            imagePreview: 'Enlarged preview',
            closeModal: 'Close',
            items: {
                van_bijoux: {
                    title: 'VanBijouxSys — Desktop ERP in production',
                    period: '2024 – Present',
                    description: 'Desktop ERP in production for managing a jewelry business, used daily by a real user. Includes 8 interdependent modules: dashboard, products, inventory, pricing, sales, fairs, and cash flow.',
                    details: 'Built in TypeScript with React 18 on the renderer and Electron + SQLite (Drizzle ORM) on the main process. Includes 62 automated tests (unit and integration) in Vitest, covering the pricing formula, input material deduction, and transactional stock restoration. Architecture with secure IPC via contextBridge, parameterized SQL, and ErrorBoundary in production. Currently on version 1.5.',
                },
                coup_online: {
                    title: 'Coup Online — Real-time multiplayer game',
                    period: '2025 – Present',
                    description: 'Real-time multiplayer card game playable directly in the browser, no sign-up or installation required. Each room is created by a code and shared via link.',
                    details: 'TypeScript monorepo with npm workspaces sharing types between frontend (Next.js) and backend (Express + Socket.IO). Authoritative server with a game state machine, bidirectional WebSocket communication, and in-memory room management. CI configured with GitHub Actions (lint, tests, secretlint) and continuous deployment to Vercel (frontend) and Railway (backend).',
                },
                fala_torcedor: {
                    title: 'Fala, Torcedor — Mobile fullstack technical challenge',
                    period: 'Mar 2026',
                    description: 'Mobile fullstack app developed solo as a technical challenge for a selection process. Sports management system with authentication, interdependent CRUDs, and statistical dashboards.',
                    details: 'Backend in Node.js/Express with PostgreSQL and mobile frontend in Flutter. REST architecture with 5 interdependent business modules, transactional control, input validation, parameterized queries, and security measures (Helmet, CORS, rate limiting). Coverage of 87 automated tests with Jest and Supertest. Dynamic dashboards with real-time statistics visualization.',
                },
                oci: {
                    title: 'Management Interface — OCI',
                    period: 'Jun 2025',
                    description: 'Fullstack web system for managing answer sheets at the Ceará Informatics Olympiad (OCI), developed during the PET Computação UFC 2025.1 selection process.',
                    details: 'Fullstack application with a Django backend and React frontend, integrating an SQLite database and a C++ library for automatic answer sheet reading from images. The entire application was containerized with Docker, ensuring portability and stable execution in Linux environments.',
                },
                gvp: {
                    title: 'GVP — Personal Wardrobe Manager',
                    period: 'Jul 2025',
                    description: 'Java desktop system developed as the final project for the Programming Techniques course, designed to organize and manage a personal wardrobe.',
                    details: 'The system features full registration of clothing, accessories, shoes, and underwear; outfit assembly and usage tracking; laundry and loan management; visual statistics on usage and loans; intuitive and standardized UI with automatic data persistence via serialization.',
                    details2: 'An intensive exercise in organization, best practices, and UX focus — applying Java, Swing, MVC architecture, and serialization to turn an idea into a functional, enjoyable product.',
                },
                cockatiel: {
                    title: 'Cockatiel Adventures',
                    period: 'May 2025 – Jul 2025',
                    description: '2D game developed with the Godot engine for the final project of the Game Programming I elective (SMD – Digital Systems and Media, UFC).',
                    details: 'I worked on all development stages: planning, GDScript programming, level design, and game mechanic implementation. The project sharpened my skills in game logic, UI design, and scene organization in the Godot engine.',
                },
            },
        },
        certifications: {
            title: 'Certifications',
            viewCertificate: 'View progress'
        },
        skills: {
            title: 'Skills',
            categories: {
                languages: 'Languages',
                frontend: 'Frontend & Mobile',
                backend: 'Backend',
                database: 'Databases',
                devops: 'DevOps & Tools'
            }
        },
        footer: {
            contact: 'Contact',
            languages: 'Languages',
            portuguese: 'Portuguese (Native)',
            english: 'English (Advanced)',
            rights: 'All rights reserved.'
        }
    }
}

export default LanguageContext
