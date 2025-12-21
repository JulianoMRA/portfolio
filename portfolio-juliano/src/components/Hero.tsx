import Image from 'next/image'
import { Github, Linkedin, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm: px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
              Olá, me chamo{' '}
              <span className="text-accent-primary">Juliano Alencar</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl text-gray-400 mb-6 animate-fade-in-up animation-delay-200">
              Estudante de Ciência da Computação & Desenvolvedor de Software
            </h2>
            
            <p className="text-gray-300 text-lg max-w-xl mb-8 animate-fade-in-up animation-delay-400">
              Transformo ideias em código funcional e elegante. 
              Apaixonado por resolver problemas e criar soluções 
              que fazem a diferença. 
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#projetos"
                className="px-6 py-3 bg-accent-primary hover:bg-accent-secondary text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
              >
                Ver Projetos
              </a>
              
              <a
                href="/curriculo. pdf"
                download
                className="px-6 py-3 bg-dark-600 hover:bg-dark-500 text-white font-semibold rounded-lg border border-accent-primary transition-all duration-200 hover:scale-105 flex items-center gap-2"
              >
                <Download size={18} />
                Baixar Currículo
              </a>
              
              <a
                href="https://github.com/JulianoMRA"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-dark-700 hover:bg-dark-600 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center gap-2"
              >
                <Github size={18} />
                GitHub
              </a>
              
              <a
                href="https://linkedin.com/in/julianomra"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#0077b5] hover:bg-[#006399] text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center gap-2"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-accent-primary shadow-2xl shadow-accent-primary/20">
              <Image
                src="/foto-perfil.jpg"
                alt="Juliano M. R. Alencar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}