import './Projects.css'
import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Projects = () => {
  const [modalImage, setModalImage] = useState(null)
  const { t } = useLanguage()

  useEffect(() => {
    if (!modalImage) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [modalImage])

  // Converte URLs do YouTube (watch/shorts/share) para o formato embed
  const toEmbed = (url) => {
    if (!url) return ''
    const match = url.match(/(?:youtu.be\/|youtube.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/)
    return match ? `https://www.youtube.com/embed/${match[1]}` : url
  }

  const projects = [
    {
      title: 'Fala, Torcedor — Sistema de Gestão de Sócios',
      period: 'Mar de 2026',
      description:
        'Sistema fullstack de gestão de sócios-torcedores para clubes de futebol, desenvolvido com foco em arquitetura REST escalável, segurança e cobertura de testes.',
      details:
        'Backend em Node.js/Express com PostgreSQL, integrado a um aplicativo mobile em Flutter. Conta com 7 relatórios analíticos agregados (distribuição demográfica, métricas de desempenho, estatísticas de sócios), validação de CPF, proteção contra SQL injection via queries parametrizadas e medidas de segurança como headers Helmet, CORS e rate limiting (500 req/15 min). A suíte cobre 87 testes automatizados com Jest e Supertest.',
      github: 'https://github.com/JulianoMRA/ProcessoSeletivoG4Flex',
      tags: ['Flutter', 'Node.js', 'Express', 'PostgreSQL', 'API REST', 'Jest', 'Segurança'],
    },
    {
      title: 'VanBijoux — Sistema Desktop de Gestão',
      period: 'Mar de 2026',
      description:
        'Sistema desktop para gestão completa de um negócio de bijuterias — produtos, estoque, matérias-primas, vendas e feiras, com dashboard analítico e calculadora de precificação.',
      details:
        'Construído com React + TypeScript no renderer e Electron + SQLite (Drizzle ORM) no processo principal. Inclui calculadora de precificação com fórmula personalizada, gestão de vendas por canal (WhatsApp, Instagram, feiras), suporte a eventos multidia com rastreamento de custos e 40 testes automatizados com Vitest cobrindo fórmulas de preço, workflows de vendas e integridade do banco.',
      github: 'https://github.com/JulianoMRA/VanBijouxSys',
      tags: ['React', 'TypeScript', 'Electron', 'SQLite', 'Drizzle ORM', 'Vitest', 'Recharts'],
    },
    {
      title: 'GVP - Gestor de Vestuário Pessoal',
      period: 'Jul de 2025',
      description:
        'Sistema desktop em Java desenvolvido como trabalho final da disciplina de Técnicas de Programação, para organizar e gerenciar vestuário pessoal.',
      details:
        'O sistema conta com cadastro completo de roupas, acessórios, calçados e roupas íntimas; montagem de looks e registro de utilizações; controle de lavagens e empréstimos; estatísticas visuais sobre uso e empréstimos; interface intuitiva e padronizada com persistência automática dos dados via serialização.',
      details2:
        'Um exercício intenso de organização, boas práticas e foco na experiência do usuário — aplicando Java, Swing, arquitetura MVC e serialização para transformar uma ideia em produto funcional.',
      github: 'https://github.com/JulianoMRA/TrabalhoFinalGVP',
      tags: ['Java', 'OOP', 'Swing', 'MVC', 'Serialização', 'Design de Interface'],
      images: ['/projects/gvp-1.jpg', '/projects/gvp-2.jpg', '/projects/gvp-3.jpg'],
    },
    {
      title: 'Interface de Gerenciamento - OCI',
      period: 'Jun de 2025',
      description:
        'Sistema web fullstack para gestão de gabaritos da Olimpíada Cearense de Informática (OCI), desenvolvido durante o processo seletivo do PET Computação UFC 2025.1.',
      details:
        'Aplicação fullstack com backend em Django e frontend em React, integrando banco de dados SQLite e uma biblioteca em C++ para leitura automática de gabaritos a partir de imagens. Toda a aplicação foi containerizada com Docker, garantindo portabilidade e execução estável em ambientes Linux.',
      github: 'https://github.com/JulianoMRA/FASE1-PSPET-2025.1',
      tags: ['Django', 'React.js', 'SQLite', 'Docker', 'C++', 'Linux', 'Trabalho em equipe'],
      images: [
        '/projects/oci-1.jpg',
        '/projects/oci-2.jpg',
        '/projects/oci-3.jpg',
        '/projects/oci-4.jpg',
        '/projects/oci-5.jpg',
        '/projects/oci-6.jpg',
      ],
    },
    {
      title: 'Cockatiel Adventures',
      period: 'Mai de 2025 – Jul de 2025',
      description:
        "Jogo 2D desenvolvido com a engine Godot para o projeto final da disciplina de Programação para Jogos I (SMD – Sistemas e Mídias Digitais, UFC).",
      details:
        'Trabalhei em todas as etapas: planejamento, programação em GDScript, design das fases e implementação das mecânicas de jogo. O projeto aprimorou minhas habilidades em lógica de jogos, design de interfaces e organização de cenas na engine Godot.',
      github: 'https://github.com/JulianoMRA/Cockatiel-Adventures',
      tags: ['Godot', 'GDScript', 'Game Development', 'Design de Fases'],
      videoUrl: 'https://www.youtube.com/watch?v=qMbqNA15g4E',
    },
  ]

  return (
    <section id="projetos" className="projects">
      <div className="container">
        <h2 className="section-title">{t('projects.title')}</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-period">{project.period}</span>
              </div>

              {project.videoUrl && (
                <div className="project-video">
                  <div className="video-wrapper">
                    <iframe
                      src={toEmbed(project.videoUrl)}
                      title={`${project.title} vídeo`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {project.images && project.images.length > 0 && (
                <div className="project-images">
                  {project.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${project.title} — imagem ${i + 1}`}
                      className="project-image"
                      role="button"
                      tabIndex={0}
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://placehold.co/600x400?text=Imagem+do+Projeto'
                      }}
                      onClick={() => setModalImage(src)}
                      onKeyDown={(e) => e.key === 'Enter' && setModalImage(src)}
                    />
                  ))}
                </div>
              )}

              <div className="project-content">
                <p className="project-context">
                  <strong>{t('projects.context')}</strong> {project.description}
                </p>

                <p className="project-action">
                  <strong>{t('projects.details')}</strong> {project.details}
                </p>

                {project.details2 && <p className="project-result">{project.details2}</p>}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {t('projects.viewOnGithub')}
                  </a>
                )}
              </div>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {modalImage && (
          <div className="image-modal" onClick={() => setModalImage(null)}>
            <div className="image-modal-content">
              <img
                src={modalImage}
                alt="Visualização ampliada"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/1200x800?text=Preview'
                }}
              />
              <button
                className="image-modal-close"
                aria-label="Fechar"
                onClick={() => setModalImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
