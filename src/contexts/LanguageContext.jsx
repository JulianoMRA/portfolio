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
            subtitle: 'Estudante de Ciência da Computação.',
            description: 'Focado em desenvolvimento fullstack (Node.js/Flutter/React), com experiência prática em arquitetura REST e gestão ágil. Buscando estágio onde possa contribuir com soluções escaláveis e bem estruturadas.',
            viewProjects: 'Ver Projetos',
            downloadCV: 'Baixar Currículo'
        },
        about: {
            title: 'Sobre',
            p1: '<strong>Bacharelando em Ciência da Computação</strong> pela Universidade Federal do Ceará (UFC), focado em desenvolvimento fullstack com Node.js, Flutter e React. Desenvolvo habilidades em arquitetura REST, modelagem relacional e boas práticas de engenharia de software.',
            p2: 'Atualmente, sou <strong>Bolsista Remunerado</strong> no Programa de Educação Tutorial (PET) da computação, onde organizo eventos acadêmicos de grande porte e colaboro em projetos de ensino, pesquisa e extensão. Também atuei como <strong>Bolsista Voluntário</strong> no RSI (Residência em Segurança da Informação), aprofundando conhecimentos práticos em segurança cibernética por meio de CTFs e Hackathons.',
            p3: 'Também atuei como <strong>Assessor Comercial</strong> na Ceos Jr., Empresa Júnior da Computação da UFC, onde gerenciei o ciclo completo de vendas de serviços de tecnologia e otimizei processos com dashboards orientados a dados e metodologias ágeis.',
            p4: 'Busco oportunidades de estágio onde possa contribuir com soluções escaláveis e bem estruturadas, colaborando com equipes que valorizam qualidade de código, boas práticas e aprendizado contínuo.'
        },
        experience: {
            title: 'Experiência',
            pet: {
                title: 'PET Computação',
                role: 'Bolsista Remunerado',
                highlights: [
                    'Organizei e conduzi eventos acadêmicos de grande porte (INCLUDE, OCI, SAC, UWEB)',
                    'Desenvolvi e adaptei problemas de programação para a OCI, estimulando o raciocínio computacional de dezenas de participantes',
                    'Colaborei em projetos que integram ensino, pesquisa e extensão, promovendo iniciativas de tecnologia para a comunidade acadêmica'
                ]
            },
            rsi: {
                title: 'RSI - Residência em Segurança da Informação',
                role: 'Bolsista Voluntário',
                highlights: [
                    'Aprofundei conhecimentos práticos em Segurança da Informação por meio de desafios CTF (Capture The Flag) e Hackathons',
                    'Auxiliei na organização de palestras internas, contribuindo para a disseminação de boas práticas de segurança cibernética'
                ]
            },
            ceos: {
                title: 'Ceos Jr. - Empresa Júnior da Computação',
                role: 'Assessor Comercial',
                highlights: [
                    'Conduzi o ciclo completo de vendas de serviços de tecnologia, da prospecção ao fechamento, contribuindo para o aumento de novos contratos',
                    'Otimizei a análise de desempenho da equipe via dashboards e relatórios orientados a dados, reduzindo o tempo de geração de relatórios mensais',
                    'Gerenciei demandas com metodologias ágeis (Scrum/Kanban), garantindo entregas no prazo e fortalecendo o relacionamento com parceiros'
                ]
            }
        },
        projects: {
            title: 'Projetos',
            context: 'Contexto:',
            details: 'Detalhes:',
            viewOnGithub: 'Ver no GitHub →',
            image: 'imagem',
            imagePreview: 'Visualização ampliada',
            closeModal: 'Fechar',
            items: {
                fala_torcedor: {
                    title: 'Fala, Torcedor — Sistema de Gestão de Sócios',
                    period: 'Mar de 2026',
                    description: 'Sistema fullstack de gestão de sócios-torcedores para clubes de futebol, desenvolvido com foco em arquitetura REST escalável, segurança e cobertura de testes.',
                    details: 'Backend em Node.js/Express com PostgreSQL, integrado a um aplicativo mobile em Flutter. Conta com 7 relatórios analíticos agregados (distribuição demográfica, métricas de desempenho, estatísticas de sócios), validação de CPF, proteção contra SQL injection via queries parametrizadas e medidas de segurança como headers Helmet, CORS e rate limiting (500 req/15 min). A suíte cobre 87 testes automatizados com Jest e Supertest.',
                },
                van_bijoux: {
                    title: 'VanBijoux — Sistema Desktop de Gestão',
                    period: 'Mar de 2026',
                    description: 'Sistema desktop para gestão completa de um negócio de bijuterias — produtos, estoque, matérias-primas, vendas e feiras, com dashboard analítico e calculadora de precificação.',
                    details: 'Construído com React + TypeScript no renderer e Electron + SQLite (Drizzle ORM) no processo principal. Inclui calculadora de precificação com fórmula personalizada, gestão de vendas por canal (WhatsApp, Instagram, feiras), suporte a eventos multidia com rastreamento de custos e 40 testes automatizados com Vitest cobrindo fórmulas de preço, workflows de vendas e integridade do banco.',
                },
                gvp: {
                    title: 'GVP — Gestor de Vestuário Pessoal',
                    period: 'Jul de 2025',
                    description: 'Sistema desktop em Java desenvolvido como trabalho final da disciplina de Técnicas de Programação, para organizar e gerenciar vestuário pessoal.',
                    details: 'O sistema conta com cadastro completo de roupas, acessórios, calçados e roupas íntimas; montagem de looks e registro de utilizações; controle de lavagens e empréstimos; estatísticas visuais sobre uso e empréstimos; interface intuitiva e padronizada com persistência automática dos dados via serialização.',
                    details2: 'Um exercício intenso de organização, boas práticas e foco na experiência do usuário — aplicando Java, Swing, arquitetura MVC e serialização para transformar uma ideia em produto funcional.',
                },
                oci: {
                    title: 'Interface de Gerenciamento — OCI',
                    period: 'Jun de 2025',
                    description: 'Sistema web fullstack para gestão de gabaritos da Olimpíada Cearense de Informática (OCI), desenvolvido durante o processo seletivo do PET Computação UFC 2025.1.',
                    details: 'Aplicação fullstack com backend em Django e frontend em React, integrando banco de dados SQLite e uma biblioteca em C++ para leitura automática de gabaritos a partir de imagens. Toda a aplicação foi containerizada com Docker, garantindo portabilidade e execução estável em ambientes Linux.',
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
            viewCertificate: 'Ver certificado'
        },
        skills: {
            title: 'Habilidades',
            categories: {
                languages: 'Linguagens',
                frontend: 'Frontend',
                backend: 'Backend',
                database: 'Banco de Dados',
                devops: 'DevOps & Ferramentas',
                other: 'Outros'
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
            subtitle: 'Computer Science Student.',
            description: 'Focused on fullstack development (Node.js/Flutter/React), with practical experience in REST architecture and agile management. Seeking an internship to contribute with scalable, well-structured solutions.',
            viewProjects: 'View Projects',
            downloadCV: 'Download CV'
        },
        about: {
            title: 'About',
            p1: "<strong>Bachelor's student in Computer Science</strong> at the Federal University of Ceará (UFC), focused on fullstack development with Node.js, Flutter, and React. Building skills in REST architecture, relational modeling, and software engineering best practices.",
            p2: "Currently a <strong>Paid Fellow</strong> at the Tutorial Education Program (PET) in Computing, where I organize large-scale academic events and collaborate on teaching, research, and outreach projects. I also served as a <strong>Volunteer Fellow</strong> at RSI (Information Security Residence), deepening practical cybersecurity knowledge through CTFs and Hackathons.",
            p3: "I also worked as a <strong>Commercial Advisor</strong> at Ceos Jr., the Computing Junior Enterprise at UFC, managing the full sales cycle for tech services and optimizing processes through data-driven dashboards and agile methodologies.",
            p4: "I seek internship opportunities where I can contribute with scalable and well-structured solutions, collaborating with teams that value code quality, best practices, and continuous learning."
        },
        experience: {
            title: 'Experience',
            pet: {
                title: 'PET Computing',
                role: 'Paid Fellow',
                highlights: [
                    'Organized and led large-scale academic events (INCLUDE, OCI, SAC, UWEB)',
                    'Developed and adapted programming problems for the OCI, stimulating computational thinking in dozens of participants',
                    'Collaborated on projects integrating teaching, research, and outreach, promoting technology initiatives for the academic community'
                ]
            },
            rsi: {
                title: 'RSI - Information Security Residence',
                role: 'Volunteer Fellow',
                highlights: [
                    'Deepened practical Information Security knowledge through CTF (Capture The Flag) challenges and Hackathons',
                    'Assisted in organizing internal talks, contributing to the spread of cybersecurity best practices among project members'
                ]
            },
            ceos: {
                title: 'Ceos Jr. - Computing Junior Enterprise',
                role: 'Commercial Advisor',
                highlights: [
                    'Led the complete sales cycle for tech services, from prospecting to closing, contributing to growth in new contracts',
                    'Optimized team performance analysis through data-driven dashboards and reports, reducing monthly report generation time',
                    'Managed workflows with agile methodologies (Scrum/Kanban), ensuring on-time delivery and strengthening partner relationships'
                ]
            }
        },
        projects: {
            title: 'Projects',
            context: 'Context:',
            details: 'Details:',
            viewOnGithub: 'View on GitHub →',
            image: 'image',
            imagePreview: 'Enlarged preview',
            closeModal: 'Close',
            items: {
                fala_torcedor: {
                    title: 'Fala, Torcedor — Fan Membership Management System',
                    period: 'Mar 2026',
                    description: 'Fullstack fan membership management system for football clubs, built with a focus on scalable REST architecture, security, and test coverage.',
                    details: 'Backend in Node.js/Express with PostgreSQL, integrated with a Flutter mobile app. Features 7 aggregated analytics reports (demographic distribution, performance metrics, membership statistics), CPF validation, SQL injection protection via parameterized queries, and security measures including Helmet headers, CORS, and rate limiting (500 req/15 min). Test suite covers 87 automated cases with Jest and Supertest.',
                },
                van_bijoux: {
                    title: 'VanBijoux — Desktop Management System',
                    period: 'Mar 2026',
                    description: 'Desktop system for comprehensive management of a jewelry business — products, inventory, raw materials, sales, and fairs, with an analytics dashboard and automated pricing calculator.',
                    details: 'Built with React + TypeScript on the renderer and Electron + SQLite (Drizzle ORM) on the main process. Includes a pricing calculator with a custom formula, sales management by channel (WhatsApp, Instagram, fairs), multi-day event support with cost tracking, and 40 automated tests with Vitest covering pricing formulas, sales workflows, and database integrity.',
                },
                gvp: {
                    title: 'GVP — Personal Wardrobe Manager',
                    period: 'Jul 2025',
                    description: 'Java desktop system developed as the final project for the Programming Techniques course, designed to organize and manage a personal wardrobe.',
                    details: 'The system features full registration of clothing, accessories, shoes, and underwear; outfit assembly and usage tracking; laundry and loan management; visual statistics on usage and loans; intuitive and standardized UI with automatic data persistence via serialization.',
                    details2: 'An intensive exercise in organization, best practices, and UX focus — applying Java, Swing, MVC architecture, and serialization to turn an idea into a functional, enjoyable product.',
                },
                oci: {
                    title: 'Management Interface — OCI',
                    period: 'Jun 2025',
                    description: 'Fullstack web system for managing answer sheets at the Ceará Informatics Olympiad (OCI), developed during the PET Computação UFC 2025.1 selection process.',
                    details: 'Fullstack application with a Django backend and React frontend, integrating an SQLite database and a C++ library for automatic answer sheet reading from images. The entire application was containerized with Docker, ensuring portability and stable execution in Linux environments.',
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
            viewCertificate: 'View certificate'
        },
        skills: {
            title: 'Skills',
            categories: {
                languages: 'Languages',
                frontend: 'Frontend',
                backend: 'Backend',
                database: 'Database',
                devops: 'DevOps & Tools',
                other: 'Other'
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
