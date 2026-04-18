import './Hero.css'
import { useLanguage } from '../contexts/LanguageContext'
import { useReveal } from '../hooks/useReveal'

const Hero = () => {
    const { t, language } = useLanguage()
    const ref = useReveal({ threshold: 0.05 })

    return (
        <section id="top" className="hero reveal" ref={ref}>
            <div className="hero__marquee" aria-hidden="true">
                <div className="hero__marquee-track">
                    Juliano Melo &nbsp;·&nbsp; Juliano Melo &nbsp;·&nbsp; Juliano Melo &nbsp;·&nbsp;
                    Juliano Melo &nbsp;·&nbsp; Juliano Melo &nbsp;·&nbsp;
                </div>
            </div>
            <div className="wrap">
                <div className="hero__meta">
                    <div className="hero__meta-item">
                        <span className="hero__meta-label">◦ {language === 'pt' ? 'Status' : 'Status'}</span>
                        <span className="hero__meta-value">
                            <span className="hero__meta-dot" />
                            {t('meta.availability')}
                        </span>
                    </div>
                    <div className="hero__meta-item">
                        <span className="hero__meta-label">◦ {language === 'pt' ? 'Local' : 'Location'}</span>
                        <span className="hero__meta-value">{t('meta.location')}</span>
                    </div>
                    <div className="hero__meta-item">
                        <span className="hero__meta-label">◦ {language === 'pt' ? 'Função' : 'Role'}</span>
                        <span className="hero__meta-value">{t('meta.role')}</span>
                    </div>
                </div>

                <h1 className="hero__title">
                    <span className="line">{t('hero.title_a')}</span>
                    <span className="line indent">
                        <em>{t('hero.title_b')}</em>
                        <span className="asterisk">❋</span>
                    </span>
                    <span className="line">{t('hero.title_c')}</span>
                    <span className="line indent">{t('hero.title_d')}</span>
                </h1>

                <div className="hero__bottom">
                    <p className="hero__lede">{t('hero.lede')}</p>
                    <div className="hero__ctas">
                        <a href="#work" className="btn btn--primary">
                            {t('hero.cta_work')} <span className="btn__arrow">→</span>
                        </a>
                        <a href="/curriculo.pdf" className="btn btn--ghost" download>
                            {t('hero.cta_cv')} <span className="btn__arrow">↓</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="hero__scroll" aria-hidden="true">
                <span>{t('hero.scroll')}</span>
                <span className="hero__scroll-line" />
            </div>
        </section>
    )
}

export default Hero
