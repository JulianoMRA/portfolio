import './Footer.css'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
    const { t } = useLanguage()

    return (
        <footer className="footer">
            <div className="wrap footer__row">
                <span className="footer__tag">{t('footer.tagline')}</span>
                <span>{t('footer.type')}</span>
                <span>© 2026 Juliano M. R. Alencar — {t('footer.rights')}</span>
            </div>
        </footer>
    )
}

export default Footer
