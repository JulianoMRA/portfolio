import { Analytics } from '@vercel/analytics/react'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
    const [activeSection, setActiveSection] = useState('about')

    useEffect(() => {
        const ids = ['about', 'work', 'experience', 'skills', 'contact']
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActiveSection(e.target.id)
                })
            },
            { rootMargin: '-40% 0px -50% 0px' }
        )
        ids.forEach((id) => {
            const el = document.getElementById(id)
            if (el) io.observe(el)
        })
        return () => io.disconnect()
    }, [])

    return (
        <div className="App">
            <Header activeSection={activeSection} />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
            <Footer />
            <Analytics />
        </div>
    )
}

export default App
