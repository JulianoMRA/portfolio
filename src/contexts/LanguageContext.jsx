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
