import './Projects.css'
import { useState } from 'react'
import { useLanguage, PROJECTS } from '../contexts/LanguageContext'
import { useReveal } from '../hooks/useReveal'

const Projects = () => {
    const { t, language } = useLanguage()
    const headRef = useReveal()
    const [expanded, setExpanded] = useState(null)

    return (
        <section id="work" className="work">
            <div className="wrap">
                <header className="sec-head reveal" ref={headRef}>
                    <div>
                        <span className="kicker">{t('work.kicker')}</span>
                        <h2 className="sec-head__title">{t('work.title')}</h2>
                    </div>
                    <span className="sec-head__num">02 / 05</span>
                </header>

                <p className="work__intro">{t('work.subtitle')}</p>

                <div className="work__list">
                    {PROJECTS.map((p, i) => (
                        <ProjectRow
                            key={p.key}
                            project={p}
                            index={i}
                            lang={language}
                            t={t}
                            expanded={expanded === p.key}
                            onToggle={() => setExpanded(expanded === p.key ? null : p.key)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

const ProjectRow = ({ project, index, lang, t, expanded, onToggle }) => {
    const ref = useReveal()
    return (
        <article
            className={`project reveal ${expanded ? 'expanded' : ''}`}
            ref={ref}
            onClick={onToggle}
        >
            <div className="project__num">/{String(index + 1).padStart(2, '0')}</div>
            <div className="project__main">
                <div className="project__year">
                    <span className="project__year-chip">{project.year}</span>
                    <span>{project.type[lang]}</span>
                </div>
                <h3 className="project__title">{project.title[lang]}</h3>
                <p className="project__subtitle">{project.subtitle[lang]}</p>
                <div className="project__tags">
                    {project.tags.map((tag) => (
                        <span key={tag} className="project__tag">{tag}</span>
                    ))}
                </div>
            </div>
            <div className="project__body">
                <p className="project__desc">{project.description[lang]}</p>
                <div className="project__footer">
                    <div className="project__metric">
                        <span className="project__metric-value">{project.metric.value}</span>
                        <span className="project__metric-label">{project.metric.label[lang]}</span>
                    </div>
                </div>
            </div>
            <span className="project__arrow">↗</span>
            <div className="project__details">
                <div className="project__details-inner">
                    {project.details[lang]}
                    <br />
                    <div className="project__details-links">
                        <a
                            className="project__details-link"
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {t('work.view')} <span>→</span>
                        </a>
                        {project.liveUrl && (
                            <a
                                className="project__details-link"
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {t('work.play')} <span>↗</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Projects
