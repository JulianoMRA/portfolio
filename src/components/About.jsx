import './About.css'
import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  return (
    <section id="sobre" className="about">
      <div className="container">
        <h2 className="section-title">{t('about.title')}</h2>
        <div className="about-content">
          <p className="about-text" dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
          <p className="about-text" dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
          <p className="about-text" dangerouslySetInnerHTML={{ __html: t('about.p3') }} />
          <p className="about-text" dangerouslySetInnerHTML={{ __html: t('about.p4') }} />
        </div>
      </div>
    </section>
  )
}

export default About

