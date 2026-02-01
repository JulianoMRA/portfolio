import './Experience.css'
import { FaGraduationCap, FaShieldAlt, FaBriefcase } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

const Experience = () => {
    const { t, language } = useLanguage()

    const experiences = [
        {
            key: 'pet',
            period: 'Jul/25 - ' + (language === 'pt' ? 'Presente' : 'Present'),
            location: 'Fortaleza, Ceará',
            icon: FaGraduationCap
        },
        {
            key: 'rsi',
            period: 'Abr/25 - Jul/25',
            location: 'Fortaleza, Ceará',
            icon: FaShieldAlt
        },
        {
            key: 'ceos',
            period: 'Mai/24 - Mai/25',
            location: 'Fortaleza, Ceará',
            icon: FaBriefcase
        }
    ]

    return (
        <section id="experiencia" className="experience">
            <div className="container">
                <h2 className="section-title">{t('experience.title')}</h2>

                <div className="experience-timeline">
                    {experiences.map((exp, index) => {
                        const Icon = exp.icon
                        const expData = t(`experience.${exp.key}`)
                        return (
                            <div key={index} className="experience-card">
                                <div className="experience-icon">
                                    <Icon size={24} />
                                </div>

                                <div className="experience-content">
                                    <div className="experience-header">
                                        <h3 className="experience-title">{expData?.title}</h3>
                                        <span className="experience-period">{exp.period}</span>
                                    </div>

                                    <p className="experience-role">{expData?.role}</p>
                                    <p className="experience-location">{exp.location}</p>

                                    <ul className="experience-highlights">
                                        {expData?.highlights?.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Experience

