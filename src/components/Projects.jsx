import './Projects.css'
import { useState } from 'react'

const Projects = () => {
  const [modalImage, setModalImage] = useState(null)

  // Converte URLs do YouTube (watch/shorts/share) para o formato embed
  const toEmbed = (url) => {
    if (!url) return ''
    const match = url.match(/(?:youtu.be\/|youtube.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/)
    return match ? `https://www.youtube.com/embed/${match[1]}` : url
  }

  const projects = [
    {
      title: "GVP - Gestor de Vestuário Pessoal",
      period: "Jul de 2025",
      description: "Desenvolvimento do GVP (Gestor de Vestuário Pessoal), um sistema desktop em Java criado para meu trabalho final da disciplina de Técnicas de Programação.",
      details: "O objetivo? Ajudar qualquer pessoa a organizar, visualizar e cuidar do seu vestuário de forma simples, moderna e eficiente. Principais destaques: cadastro completo de roupas, acessórios, calçados e roupas íntimas; montagem de looks e registro de utilizações; controle de lavagens e empréstimos; estatísticas visuais sobre uso, lavagens e empréstimos; interface intuitiva, colorida e padronizada; persistência automática dos dados; código limpo, comentado e orientado a objetos.",
      details2: "O projeto foi um grande exercício de organização, boas práticas de programação e foco na experiência do usuário. Aprendi muito sobre Java, Swing, MVC, serialização e, principalmente, sobre como transformar uma ideia em um produto funcional e agradável de usar.",
      github: "https://github.com/JulianoMRA/TrabalhoFinalGVP",
      tags: ["Java", "Programação Orientada à Objetos", "Swing", "MVC", "Design de Interface", "Persistência de Dados"],
      images: [
        '/projects/gvp-1.jpg',
        '/projects/gvp-2.jpg',
        '/projects/gvp-3.jpg',
      ]
    },
    {
      title: "Interface de Gerenciamento - OCI",
      period: "Jun de 2025",
      description: "Desenvolvimento de Interface para Gestão de Gabaritos - Processo Seletivo PET Computação UFC 2025.1.",
      details: "No contexto da primeira fase do Processo Seletivo do PET Computação da UFC, participei do desenvolvimento de um sistema web para gerenciamento dos gabaritos da Olimpíada Cearense de Informática (OCI). O projeto consistiu na criação de uma aplicação full stack com backend em Django e frontend em React, integrando um banco de dados SQL e uma biblioteca em C++ para realizar a leitura automática de gabaritos a partir de imagens. Toda a aplicação foi containerizada com Docker, garantindo portabilidade e execução estável em ambientes Linux.",
      github: "https://github.com/JulianoMRA/FASE1-PSPET-2025.1",
      tags: ["Django", "React.js", "SQLite", "Docker", "GitHub", "C++", "Trabalho em equipe"],
      images: [
        '/projects/oci-1.jpg',
        '/projects/oci-2.jpg',
        '/projects/oci-3.jpg',
        '/projects/oci-4.jpg',
        '/projects/oci-5.jpg',
        '/projects/oci-6.jpg',
      ]
    },
    {
      title: "Cockatiel Adventures",
      period: "Mai de 2025 - Jul de 2025",
      description: "Desenvolvi o jogo 2D 'Cockatiel Adventures' utilizando a engine Godot, para o projeto final da disciplina optativa de Programação para Jogos I ministrada no SMD - Sistemas e Mídias Digitais da UFC.",
      details: "Neste projeto, trabalhei em todas as etapas do desenvolvimento: planejamento, programação, design das fases e implementação de mecânicas de jogo. Esse projeto me permitiu aprimorar minhas habilidades em GDScript, lógica de jogos, design de interfaces e organização de cenas na engine Godot.",
      github: "https://github.com/JulianoMRA/Cockatiel-Adventures",
      tags: ["Godot", "GDScript", "Game Development", "Criatividade"],
      videoUrl: "https://www.youtube.com/watch?v=qMbqNA15g4E",
    }
  ]

  return (
    <section id="projetos" className="projects">
      <div className="container">
        <h2 className="section-title">Projetos</h2>
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
                      alt={`${project.title} imagem ${i+1}`}
                      className="project-image"
                      onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400?text=Imagem+do+Projeto' }}
                      onClick={() => setModalImage(src)}
                    />
                  ))}
                </div>
              )}
              
              <div className="project-content">
                <p className="project-context">
                  <strong>Contexto:</strong> {project.description}
                </p>
                
                <p className="project-action">
                  <strong>Detalhes:</strong> {project.details}
                </p>
                
                {project.details2 && (
                  <p className="project-result">
                    {project.details2}
                  </p>
                )}
                
                {project.responsibilities && (
                  <p className="project-result">
                    <strong>🔧 {project.responsibilities}</strong>
                  </p>
                )}
                
                {project.learnings && (
                  <p className="project-result">
                    <strong>💡 {project.learnings}</strong>
                  </p>
                )}
                
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Ver no GitHub →
                  </a>
                )}
              </div>
              
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {modalImage && (
          <div className="image-modal" onClick={() => setModalImage(null)}>
            <div className="image-modal-content">
              <img src={modalImage} alt="Visualização" onError={(e) => { e.currentTarget.src = 'https://placehold.co/1200x800?text=Preview' }} />
              <button className="image-modal-close" aria-label="Fechar" onClick={() => setModalImage(null)}>
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
