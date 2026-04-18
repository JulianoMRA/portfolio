import './Experience.css'
import { useLanguage, EXPERIENCES } from '../contexts/LanguageContext'
import { useReveal } from '../hooks/useReveal'

const Experience = () => {
    const { t, language } = useLanguage()
    const headRef = useReveal()

    return (
        <section id="experience" className="exp">
            <div className="wrap">
                <header className="sec-head reveal" ref={headRef}>
                    <div>
                        <span className="kicker">{t('experience.kicker')}</span>
                        <h2 className="sec-head__title">{t('experience.title')}</h2>
                    </div>
                    <span className="sec-head__num">03 / 05</span>
                </header>

                <div className="exp__list">
                    {EXPERIENCES.map((exp) => (
                        <ExpItem key={exp.key} exp={exp} lang={language} />
                    ))}
                </div>
            </div>
        </section>
    )
}

const ExpItem = ({ exp, lang }) => {
    const ref = useReveal()
    return (
        <article className="exp__item reveal" ref={ref}>
            <div className="exp__period">
                {exp.period[lang]}
                <span className="exp__period-loc">{exp.location}</span>
            </div>
            <div className="exp__body">
                <h3 className="exp__title">{exp.title[lang]}</h3>
                <p className="exp__role">{exp.role[lang]}</p>
                <ul className="exp__highlights">
                    {exp.highlights[lang].map((h, i) => (
                        <li key={i} className="exp__highlight">
                            <span />
                            <span>{h}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default Experience
