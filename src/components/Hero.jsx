import './Hero.css'
import { useLanguage } from '../contexts/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {t('hero.greeting')} <span className="highlight">{t('hero.name')}</span>
          </h1>
          <h2 className="hero-subtitle">{t('hero.subtitle')}</h2>
          <p className="hero-description">
            {t('hero.description')}
          </p>
          <div className="hero-buttons">
            <a href="#projetos" className="btn btn-primary">{t('hero.viewProjects')}</a>
            <a
              href="https://github.com/JulianoMRA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/julianomra/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-linkedin"
            >
              LinkedIn
            </a>
            <a
              href="/curriculo.pdf"
              className="btn btn-download"
              download
            >
              {t('hero.downloadCV')}
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-circle">
            <img src="/foto-perfil.jpg" alt="Juliano Alencar" className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

