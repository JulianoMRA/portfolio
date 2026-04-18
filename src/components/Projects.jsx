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

  // Dados estáticos (não traduzíveis): links, imagens, tags técnicas
  const projectsStatic = [
    {
      key: 'van_bijoux',
      github: 'https://github.com/JulianoMRA/VanBijouxSys',
      tags: ['TypeScript', 'React', 'Electron', 'SQLite', 'Drizzle ORM', 'Vitest', 'Tailwind'],
    },
    {
      key: 'coup_online',
      liveUrl: 'https://coup-rho-ten.vercel.app',
      github: 'https://github.com/JulianoMRA/Coup',
      tags: ['TypeScript', 'Next.js', 'Express', 'Socket.IO', 'Vitest', 'GitHub Actions'],
    },
    {
      key: 'fala_torcedor',
      github: 'https://github.com/JulianoMRA/ProcessoSeletivoG4Flex',
      tags: ['Flutter', 'Node.js', 'Express', 'PostgreSQL', 'REST API', 'Jest', 'Security'],
    },
    {
      key: 'oci',
      github: 'https://github.com/JulianoMRA/FASE1-PSPET-2025.1',
      tags: ['Django', 'React', 'SQLite', 'Docker', 'C++', 'Linux', 'Teamwork'],
      images: [
        '/projects/oci-1.jpg',
        '/projects/oci-2.jpg',
        '/projects/oci-3.jpg',
        '/projects/oci-4.jpg',
        '/projects/oci-5.jpg',
        '/projects/oci-6.jpg',
      ],
    },
  ]

  return (
    <section id="projetos" className="projects">
      <div className="container">
        <h2 className="section-title">{t('projects.title')}</h2>
        <div className="projects-grid">
          {projectsStatic.map((staticData) => {
            const text = t(`projects.items.${staticData.key}`)

            return (
              <div key={staticData.key} className="project-card">
                <div className="project-header">
                  <h3 className="project-title">{text.title}</h3>
                  <span className="project-period">{text.period}</span>
                </div>

                {staticData.videoUrl && (
                  <div className="project-video">
                    <div className="video-wrapper">
                      <iframe
                        src={toEmbed(staticData.videoUrl)}
                        title={`${text.title} vídeo`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

                {staticData.images && staticData.images.length > 0 && (
                  <div className="project-images">
                    {staticData.images.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`${text.title} — ${t('projects.image')} ${i + 1}`}
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
                    <strong>{t('projects.context')}</strong> {text.description}
                  </p>

                  <p className="project-action">
                    <strong>{t('projects.details')}</strong> {text.details}
                  </p>

                  {text.details2 && <p className="project-result">{text.details2}</p>}

                  {staticData.liveUrl && (
                    <a
                      href={staticData.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      {t('projects.playLive')}
                    </a>
                  )}

                  {staticData.github && (
                    <a
                      href={staticData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      {t('projects.viewOnGithub')}
                    </a>
                  )}
                </div>

                <div className="project-tags">
                  {staticData.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {modalImage && (
          <div className="image-modal" onClick={() => setModalImage(null)}>
            <div className="image-modal-content">
              <img
                src={modalImage}
                alt={t('projects.imagePreview')}
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/1200x800?text=Preview'
                }}
              />
              <button
                className="image-modal-close"
                aria-label={t('projects.closeModal')}
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
