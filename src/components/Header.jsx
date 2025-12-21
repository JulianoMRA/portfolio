import './Header.css'
import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

const Header = () => {
  const [theme, setTheme] = useState('light')

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
          <a href="#" className="logo">Juliano M. R. Alencar | Estudante</a>
          <ul className="nav-links">
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#certificacoes">Certificações</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
          </ul>
          <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            aria-label={theme === 'dark' ? 'Alternar para modo claro' : 'Alternar para modo escuro'}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
