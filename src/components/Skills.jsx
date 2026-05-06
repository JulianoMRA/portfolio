import './Skills.css'
import { useLanguage, SKILLS, CERTS } from '../contexts/LanguageContext'
import { useReveal } from '../hooks/useReveal'

const Skills = () => {
    const { t } = useLanguage()
    const headRef = useReveal()

    return (
        <section id="skills" className="skills">
            <div className="wrap">
                <header className="sec-head reveal" ref={headRef}>
                    <span className="sec-head__num">04 / 05</span>
                    <div>
                        <span className="kicker">{t('skills.kicker')}</span>
                        <h2 className="sec-head__title">{t('skills.title')}</h2>
                    </div>
                </header>

                <p className="skills__intro">{t('skills.subtitle')}</p>

                <div className="skills__grid">
                    {SKILLS.map((s, i) => (
                        <div key={s.group} className={`skills__group${s.group === 'learning' ? ' skills__group--learning' : ''}`}>
                            <div className="skills__group-label">
                                <span className="skills__group-num">{String(i + 1).padStart(2, '0')}</span>
                                {t(`skills.groups.${s.group}`)}
                            </div>
                            <div className="skills__items">
                                {s.items.map((item) => (
                                    <span key={item} className="skills__item">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <CertsBlock t={t} />
            </div>
        </section>
    )
}

const CertsBlock = ({ t }) => (
    <div className="certs">
        <header className="sec-head" style={{ paddingTop: 'var(--s-7)' }}>
            <div>
                <span className="kicker">{t('certs.kicker')}</span>
                <h2 className="sec-head__title" style={{ fontSize: 'clamp(1.4rem, 2.4vw, 2rem)' }}>
                    {t('certs.title')}
                </h2>
            </div>
        </header>
        <div className="certs__list">
            {CERTS.map((c) => (
                <div key={c.id} className="cert">
                    <span className="cert__id pill pill--pass">{c.id}</span>
                    <div>
                        <h4 className="cert__name">{c.name}</h4>
                        <span className="cert__meta">{c.issuer} · {c.year}</span>
                    </div>
                    <a href={c.link} target="_blank" rel="noopener noreferrer" className="cert__link btn btn--ghost">
                        {t('certs.view')} <span className="btn__arrow">↗</span>
                    </a>
                </div>
            ))}
        </div>
    </div>
)

export default Skills
