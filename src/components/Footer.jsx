import './Footer.css'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const { t, language } = useLanguage()

    const contacts = [
        {
            icon: FaEnvelope,
            label: 'Email',
            value: 'julianomelorodriguesalencar@gmail.com',
            href: 'mailto:julianomelorodriguesalencar@gmail.com'
        },
        {
            icon: FaLinkedin,
            label: 'LinkedIn',
            value: '/in/julianomra',
            href: 'https://linkedin.com/in/julianomra'
        },
        {
            icon: FaGithub,
            label: 'GitHub',
            value: '/JulianoMRA',
            href: 'https://github.com/JulianoMRA'
        }
    ]

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-info">
                        <h3 className="footer-title">Juliano M. R. Alencar</h3>
                        <p className="footer-subtitle">
                            {language === 'pt' ? 'Estudante de Ciência da Computação' : 'Computer Science Student'}
                        </p>
                        <p className="footer-location">
                            <FaMapMarkerAlt /> Fortaleza, Ceará - Brasil
                        </p>
                    </div>

                    <div className="footer-contacts">
                        <h4 className="footer-section-title">{t('footer.contact')}</h4>
                        <ul className="contact-list">
                            {contacts.map((contact, index) => {
                                const Icon = contact.icon
                                return (
                                    <li key={index}>
                                        <a
                                            href={contact.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="contact-link"
                                        >
                                            <Icon className="contact-icon" />
                                            <span>{contact.value}</span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="footer-languages">
                        <h4 className="footer-section-title">{t('footer.languages')}</h4>
                        <ul className="language-list">
                            <li>🇧🇷 {t('footer.portuguese')}</li>
                            <li>🇺🇸 {t('footer.english')}</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {currentYear} Juliano Melo Rodrigues Alencar. {t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

