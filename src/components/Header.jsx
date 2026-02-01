import './Header.css'
import { useEffect, useState } from 'react'
import { FiSun, FiMoon, FiGlobe } from 'react-icons/fi'
import { useLanguage } from '../contexts/LanguageContext'

const Header = () => {
  const [theme, setTheme] = useState('light')
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const initial = saved === 'dark' ? 'dark' : 'light'
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="#" className="logo">Juliano M. R. Alencar | {language === 'pt' ? 'Estudante' : 'Student'}</a>
          <ul className="nav-links">
            <li><a href="#sobre">{t('nav.about')}</a></li>
            <li><a href="#experiencia">{t('nav.experience')}</a></li>
            <li><a href="#projetos">{t('nav.projects')}</a></li>
            <li><a href="#certificacoes">{t('nav.certifications')}</a></li>
            <li><a href="#habilidades">{t('nav.skills')}</a></li>
          </ul>
          <div className="header-controls">
            <button
              className="lang-toggle"
              onClick={toggleLanguage}
              aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
              title={language === 'pt' ? 'English' : 'Português'}
            >
              <FiGlobe />
              <span className="lang-label">{language.toUpperCase()}</span>
            </button>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Alternar para modo claro' : 'Alternar para modo escuro'}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header

