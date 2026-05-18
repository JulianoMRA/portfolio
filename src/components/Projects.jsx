import './Projects.css'
import { useState } from 'react'
import { useLanguage, PROJECTS } from '../contexts/LanguageContext'
import { useReveal } from '../hooks/useReveal'
import { Check } from './Check'

const Projects = () => {
    const { t, language } = useLanguage()
    const headRef = useReveal()
    const [expanded, setExpanded] = useState(null)

    return (
        <section id="work" className="work">
            <div className="wrap">
                <header className="sec-head reveal" ref={headRef}>
                    <span className="sec-head__num">03 / 05</span>
                    <div>
                        <span className="kicker">{t('work.kicker')}</span>
                        <h2 className="sec-head__title">{t('work.title')}</h2>
                    </div>
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
            <div className="project__num">P-{String(index + 1).padStart(2, '0')}</div>
            <div className="project__main">
                <div className="project__head">
                    <span className="project__year-chip">{project.year}</span>
                    <span className="project__type">{project.type[lang]}</span>
                    <span className="pill pill--pass">passing</span>
                </div>
                <h3 className="project__title">{project.title[lang]}</h3>
                <p className="project__subtitle">{project.subtitle[lang]}</p>
                <div className="project__tags">
                    {project.tags.map((tag) => (
                        <span key={tag} className="project__tag">{tag}</span>
                    ))}
                </div>
                {project.suite && (
                    <div className="project__suite">
                        <Check />
                        <span>{project.suite}</span>
                    </div>
                )}
            </div>
            <div className="project__metric">
                <span className="project__metric-value">{project.metric.value}</span>
                <span className="project__metric-label">{project.metric.label[lang]}</span>
                {project.coverage != null && (
                    <div className="project__coverage">
                        <div className="project__coverage-bar">
                            <div
                                className="project__coverage-fill"
                                style={{ width: `${project.coverage}%` }}
                            />
                        </div>
                        <span className="project__coverage-label">cov · {project.coverage}%</span>
                    </div>
                )}
            </div>
            <div className="project__details">
                <div className="project__details-inner">
                    {project.details[lang]}
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
