import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('pt')

    useEffect(() => {
        const saved = localStorage.getItem('language')
        if (saved === 'en' || saved === 'pt') {
            setLanguage(saved)
        }
    }, [])

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
            description: 'Atualmente no 5º semestre na Universidade Federal do Ceará (UFC). Apaixonado por desenvolvimento, programação e tecnologia. Buscando oportunidades para crescer e contribuir com projetos reais.',
            viewProjects: 'Ver Projetos',
            downloadCV: 'Baixar Currículo'
        },
        about: {
            title: 'Sobre',
            p1: '<strong>Bacharelando em Ciência da Computação</strong> pela Universidade Federal do Ceará (UFC), atualmente no 5º semestre. Aprovado via SISU, desenvolvo habilidades em raciocínio lógico, programação, algoritmos e desenvolvimento.',
            p2: 'Atualmente, sou <strong>Bolsista Remunerado</strong> no Programa de Educação Tutorial (PET) da computação, onde participo ativamente de projetos de ensino, pesquisa e extensão. Também atuei como <strong>Bolsista Voluntário</strong> no Residência em Segurança da Informação (RSI), laboratório focado em Segurança Digital, intensificando conhecimentos na área.',
            p3: 'Além disso, trabalhei como <strong>Assessor Comercial</strong> na Ceos Jr., Empresa Júnior do curso de Ciência da Computação da UFC, desenvolvendo visão sobre gestão, operação, comunicação e trabalho em equipe.',
            p4: 'Busco oportunidades de estágio que me permitam aplicar e aprofundar os conhecimentos adquiridos, contribuindo com projetos reais e desafiadores. Tenho como objetivo desenvolver uma carreira sólida como desenvolvedor de software, com foco em solucionar problemas, aprender novos recursos e colaborar com uma equipe.'
        },
        experience: {
            title: 'Experiência',
            pet: {
                title: 'PET Computação',
                role: 'Bolsista Remunerado',
                highlights: [
                    'Aprovado em 2º lugar via processo seletivo',
                    'Participação em projetos de ensino, pesquisa e extensão',
                    'Apoio na organização da OCI (Olimpíada Cearense de Informática)',
                    'Contribuição na SAC (Semana Acadêmica da Computação) e UWEB'
                ]
            },
            rsi: {
                title: 'RSI - Residência em Segurança da Informação',
                role: 'Bolsista Voluntário',
                highlights: [
                    'Aprovado via processo seletivo',
                    'Aprimoramento de conhecimentos em Segurança da Informação',
                    'Participação em Hackathons e CTFs',
                    'Organização de palestras internas'
                ]
            },
            ceos: {
                title: 'Ceos Jr. - Empresa Júnior da Computação',
                role: 'Assessor Comercial',
                highlights: [
                    'Prospecção de novos clientes e reuniões de diagnóstico',
                    'Elaboração de estratégias comerciais e análise de desempenho',
                    'Relacionamento com parceiros e leads',
                    'Atuação com metodologias ágeis (Scrum/Kanban)'
                ]
            }
        },
        projects: {
            title: 'Projetos',
            context: 'Contexto:',
            details: 'Detalhes:',
            viewOnGithub: 'Ver no GitHub →'
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
                gamedev: 'Game Dev'
            }
        },
        footer: {
            contact: 'Contato',
            languages: 'Idiomas',
            portuguese: 'Português (Nativo)',
            english: 'Inglês (Intermediário Avançado)',
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
            description: "Currently in my 5th semester at the Federal University of Ceará (UFC). Passionate about development, programming, and technology. Looking for opportunities to grow and contribute to real projects.",
            viewProjects: 'View Projects',
            downloadCV: 'Download CV'
        },
        about: {
            title: 'About',
            p1: "<strong>Bachelor's student in Computer Science</strong> at the Federal University of Ceará (UFC), currently in the 5th semester. Admitted through SISU, developing skills in logical reasoning, programming, algorithms, and development.",
            p2: "Currently, I'm a <strong>Paid Fellow</strong> at the Tutorial Education Program (PET) in Computing, where I actively participate in teaching, research, and extension projects. I also worked as a <strong>Volunteer Fellow</strong> at the Information Security Residence (RSI), a lab focused on Digital Security, deepening my knowledge in the field.",
            p3: "Additionally, I worked as a <strong>Commercial Advisor</strong> at Ceos Jr., the Junior Enterprise of the Computer Science program at UFC, developing skills in management, operations, communication, and teamwork.",
            p4: "I'm seeking internship opportunities that allow me to apply and deepen the knowledge I've acquired, contributing to real and challenging projects. My goal is to build a solid career as a software developer, focused on problem-solving, learning new skills, and collaborating with a team."
        },
        experience: {
            title: 'Experience',
            pet: {
                title: 'PET Computing',
                role: 'Paid Fellow',
                highlights: [
                    'Ranked 2nd in the selection process',
                    'Participation in teaching, research, and extension projects',
                    'Support in organizing OCI (Ceará Informatics Olympiad)',
                    'Contribution to SAC (Academic Week of Computing) and UWEB'
                ]
            },
            rsi: {
                title: 'RSI - Information Security Residence',
                role: 'Volunteer Fellow',
                highlights: [
                    'Selected through competitive process',
                    'Enhancement of Information Security knowledge',
                    'Participation in Hackathons and CTFs',
                    'Organization of internal talks'
                ]
            },
            ceos: {
                title: 'Ceos Jr. - Computing Junior Enterprise',
                role: 'Commercial Advisor',
                highlights: [
                    'Prospecting new clients and diagnostic meetings',
                    'Development of commercial strategies and performance analysis',
                    'Relationship management with partners and leads',
                    'Working with agile methodologies (Scrum/Kanban)'
                ]
            }
        },
        projects: {
            title: 'Projects',
            context: 'Context:',
            details: 'Details:',
            viewOnGithub: 'View on GitHub →'
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
                gamedev: 'Game Dev'
            }
        },
        footer: {
            contact: 'Contact',
            languages: 'Languages',
            portuguese: 'Portuguese (Native)',
            english: 'English (Upper Intermediate)',
            rights: 'All rights reserved.'
        }
    }
}

export default LanguageContext
