import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Interface de Gerenciamento OCI',
    period: 'Jun 2025',
    context: 'Sistema web para gerenciamento dos gabaritos da Olimpíada Cearense de Informática (OCI), desenvolvido no Processo Seletivo PET Computação UFC.',
    action: 'Desenvolvimento de aplicação full stack com backend em Django e frontend em React, integrando banco de dados SQL e biblioteca C++ para leitura automática de gabaritos.  Aplicação containerizada com Docker.',
    result: 'Sistema funcional que permite gerenciar gabaritos de forma eficiente, com leitura automática a partir de imagens e interface intuitiva.',
    technologies: ['Django', 'React', 'SQLite', 'Docker', 'C++', 'Git'],
    github: null,
  },
  {
    title: 'GVP - Gestor de Vestuário Pessoal',
    period: 'Jul 2025',
    context:  'Sistema desktop em Java para organizar, visualizar e cuidar do vestuário pessoal, desenvolvido como trabalho final de Técnicas de Programação.',
    action: 'Desenvolvimento completo com cadastro de roupas, montagem de looks, controle de lavagens e empréstimos, estatísticas visuais e persistência automática de dados.',
    result: 'Aplicação funcional com interface intuitiva e colorida, código limpo e orientado a objetos seguindo padrão MVC.',
    technologies: ['Java', 'Swing', 'MVC', 'POO', 'IntelliJ IDEA'],
    github: null,
  },
  {
    title: 'Cockatiel Adventures',
    period:  'Mai - Jul 2025',
    context: 'Jogo 2D desenvolvido para a disciplina "Programação para Jogos I" no curso de Sistemas e Mídias Digitais da UFC.',
    action: 'Desenvolvimento completo do jogo utilizando a engine Godot:  planejamento, programação, design das fases e implementação de mecânicas de jogo.',
    result: 'Jogo funcional que demonstra habilidades em GDScript, lógica de jogos, design de interfaces e organização de cenas.',
    technologies: ['Godot', 'GDScript', 'Game Design'],
    github: 'https://github.com/JulianoMRA/Cockatiel-Adventures',
  },
]

export default function Projects() {
  return (
    <section id="projetos" className="py-20 bg-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          <span className="text-accent-primary">Projetos</span>
        </h2>

        <div className="space-y-8">
          {projects. map((project, index) => (
            <div
              key={index}
              className="bg-dark-900 rounded-2xl p-8 border border-dark-600 hover:border-accent-primary transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-accent-secondary text-sm">{project.period}</p>
                    </div>
                    
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-dark-700 hover:bg-accent-primary rounded-lg transition-colors duration-200"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-accent-primary font-semibold">Contexto:  </span>
                      <span className="text-gray-300">{project.context}</span>
                    </div>
                    <div>
                      <span className="text-accent-primary font-semibold">Ação: </span>
                      <span className="text-gray-300">{project.action}</span>
                    </div>
                    <div>
                      <span className="text-accent-primary font-semibold">Resultado:  </span>
                      <span className="text-gray-300">{project.result}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project. technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-accent-primary/20 text-accent-secondary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}