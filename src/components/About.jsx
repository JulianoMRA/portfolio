import './About.css'
import { useLanguage, FACTS } from '../contexts/LanguageContext'
import { useReveal } from '../hooks/useReveal'

const About = () => {
    const { t } = useLanguage()
    const headRef = useReveal()
    const factsRef = useReveal()

    return (
        <section id="about" className="about">
            <div className="wrap">
                <header className="sec-head reveal" ref={headRef}>
                    <div>
                        <span className="kicker">{t('about.kicker')}</span>
                        <h2 className="sec-head__title">{t('about.title')}</h2>
                    </div>
                    <span className="sec-head__num">01 / 05</span>
                </header>

                <div className="about__grid">
                    <aside className="about__label">◦ {t('about.label')}</aside>
                    <div className="about__prose">
                        <p>
                            <strong>{t('about.p1_bold')}</strong>
                            {t('about.p1')}
                        </p>
                        <p>{t('about.p2')}</p>
                        <p>{t('about.p3')}</p>
                    </div>
                </div>

                <div className="about__facts reveal-stagger" ref={factsRef}>
                    <div className="about__fact">
                        <span className="about__fact-value">
                            {FACTS.projects}
                            <em>{FACTS.projectsSuffix}</em>
                        </span>
                        <span className="about__fact-label">{t('about.facts.projects')}</span>
                    </div>
                    <div className="about__fact">
                        <span className="about__fact-value">
                            {FACTS.tests}
                            <em>{FACTS.testsSuffix}</em>
                        </span>
                        <span className="about__fact-label">{t('about.facts.tests')}</span>
                    </div>
                    <div className="about__fact">
                        <span className="about__fact-value">
                            {FACTS.events}
                            <em>{FACTS.eventsSuffix}</em>
                        </span>
                        <span className="about__fact-label">{t('about.facts.events')}</span>
                    </div>
                    <div className="about__fact">
                        <span className="about__fact-value">
                            {FACTS.years}
                            <em>{FACTS.yearsSuffix}</em>
                        </span>
                        <span className="about__fact-label">{t('about.facts.years')}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
