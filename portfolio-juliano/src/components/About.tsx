import { GraduationCap, Briefcase, Award } from 'lucide-react'

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          <span className="text-accent-primary">Sobre</span> Mim
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-dark-800 rounded-2xl p-8 border border-dark-600">
            <p className="text-gray-300 leading-relaxed mb-4">
              Sou estudante do 5º semestre de <strong className="text-accent-secondary">Ciência da Computação</strong> na 
              Universidade Federal do Ceará (UFC), com formação base no Colégio Militar de Fortaleza.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Tenho interesse em desenvolver uma carreira como <strong className="text-accent-secondary">desenvolvedor de software</strong>, 
              com foco em solucionar problemas, aprender novas tecnologias e colaborar com equipes. 
            </p>
            <p className="text-gray-300 leading-relaxed">
              Atualmente, participo do <strong className="text-accent-secondary">PET Computação</strong> e já passei pela 
              Residência em Segurança da Informação e pela empresa júnior Ceos Jr. 
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-dark-800 rounded-xl p-6 border border-dark-600 hover:border-accent-primary transition-colors duration-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-primary/20 rounded-lg">
                  <GraduationCap className="text-accent-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Bacharelado em Ciência da Computação</h3>
                  <p className="text-gray-400">Universidade Federal do Ceará</p>
                  <p className="text-accent-secondary text-sm">Mar 2024 - Presente</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-800 rounded-xl p-6 border border-dark-600 hover:border-accent-primary transition-colors duration-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-primary/20 rounded-lg">
                  <Briefcase className="text-accent-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Bolsista Voluntário - PET</h3>
                  <p className="text-gray-400">Programa de Educação Tutorial</p>
                  <p className="text-accent-secondary text-sm">Jul 2025 - Presente</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-800 rounded-xl p-6 border border-dark-600 hover: border-accent-primary transition-colors duration-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-primary/20 rounded-lg">
                  <Award className="text-accent-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">HarvardX CS50W</h3>
                  <p className="text-gray-400">Web Programming with Python and JavaScript</p>
                  <p className="text-accent-secondary text-sm">Certificação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}