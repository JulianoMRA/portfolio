import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </main>
  )
}