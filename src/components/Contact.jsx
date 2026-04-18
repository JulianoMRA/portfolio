import './Contact.css'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useReveal } from '../hooks/useReveal'

const EMAIL = 'julianomelorodriguesalencar@gmail.com'

const Contact = () => {
    const { t } = useLanguage()
    const ref = useReveal()
    const [copied, setCopied] = useState(false)

    const copy = async (e) => {
        e.stopPropagation()
        try {
            await navigator.clipboard.writeText(EMAIL)
            setCopied(true)
            setTimeout(() => setCopied(false), 1800)
        } catch {
            /* ignore */
        }
    }

    return (
        <section id="contact" className="contact">
            <div className="wrap">
                <header
                    className="sec-head reveal"
                    ref={ref}
                    style={{ borderBottom: '1px solid color-mix(in oklab, var(--paper) 20%, transparent)' }}
                >
                    <div>
                        <span
                            className="kicker"
                            style={{ color: 'color-mix(in oklab, var(--paper) 65%, transparent)' }}
                        >
                            {t('contact.kicker')}
                        </span>
                    </div>
                    <span
                        className="sec-head__num"
                        style={{ color: 'color-mix(in oklab, var(--paper) 55%, transparent)' }}
                    >
                        05 / 05
                    </span>
                </header>

                <h2 className="contact__title">
                    {t('contact.title_a')}
                    <em>{t('contact.title_em')}</em>
                    <br />
                    {t('contact.title_b')}
                </h2>
                <p className="contact__sub">{t('contact.subtitle')}</p>

                <div className="contact__grid">
                    <div>
                        <div className="contact__email">
                            <a className="contact__email-addr" href={`mailto:${EMAIL}`}>
                                {EMAIL}
                            </a>
                            <button className="contact__copy" onClick={copy}>
                                {copied ? t('contact.copied') : t('contact.copy')}
                            </button>
                        </div>
                    </div>
                    <div className="contact__social">
                        <span className="contact__social-label">◦ {t('contact.social')}</span>
                        <a
                            href="https://linkedin.com/in/julianomra"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact__social-link"
                        >
                            <span>LinkedIn</span>
                            <span>↗</span>
                        </a>
                        <a
                            href="https://github.com/JulianoMRA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact__social-link"
                        >
                            <span>GitHub</span>
                            <span>↗</span>
                        </a>
                        <a href={`mailto:${EMAIL}`} className="contact__social-link">
                            <span>Email</span>
                            <span>↗</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
