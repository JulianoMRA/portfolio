import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Skills />
    </div>
  )
}

export default App
