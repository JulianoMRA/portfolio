import './Header.css'
import { useEffect, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Header = ({ activeSection }) => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
    const [scrolled, setScrolled] = useState(false)
    const { language, toggleLanguage, t } = useLanguage()

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

    const links = [
        { id: 'about', num: '01', label: t('nav.about') },
        { id: 'work', num: '02', label: t('nav.work') },
        { id: 'experience', num: '03', label: t('nav.experience') },
        { id: 'skills', num: '04', label: t('nav.skills') },
        { id: 'contact', num: '05', label: t('nav.contact') },
    ]

    return (
        <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
            <div className="wrap nav__inner">
                <a href="#top" className="nav__brand">
                    <span className="nav__brand-mark">JM</span>
                    <span>
                        Juliano<em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>.</em>M
                    </span>
                </a>
                <div className="nav__links">
                    {links.map((l) => (
                        <a
                            key={l.id}
                            href={`#${l.id}`}
                            data-num={l.num}
                            className={`nav__link ${activeSection === l.id ? 'active' : ''}`}
                        >
                            {l.label}
                        </a>
                    ))}
                </div>
                <div className="nav__tools">
                    <button className="toggle" onClick={toggleLanguage} aria-label="Toggle language">
                        {language.toUpperCase()}
                    </button>
                    <button className="toggle toggle--icon" onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === 'dark' ? '☀' : '☾'}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header
