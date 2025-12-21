import { Code2, Database, Gamepad2, GitBranch, Globe, Terminal } from 'lucide-react'

const skillCategories = [
  {
    title: 'Linguagens',
    icon: Code2,
    skills: ['Python', 'C/C++', 'Java', 'JavaScript', 'HTML/CSS', 'SQL', 'GDScript'],
  },
  {
    title: 'Frameworks',
    icon: Globe,
    skills:  ['Django', 'React'],
  },
  {
    title:  'Ferramentas',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'Docker', 'IntelliJ IDEA'],
  },
  {
    title:  'Game Dev',
    icon:  Gamepad2,
    skills: ['Godot Engine'],
  },
  {
    title:  'Banco de Dados',
    icon: Database,
    skills: ['SQLite', 'SQL Server', 'MySQL'],
  },
  {
    title:  'Conceitos',
    icon: Terminal,
    skills:  ['POO', 'MVC', 'REST API', 'Versionamento'],
  },
]

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          <span className="text-accent-primary">Habilidades</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-dark-800 rounded-2xl p-6 border border-dark-600 hover:border-accent-primary transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent-primary/20 rounded-lg">
                  <category.icon className="text-accent-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 bg-dark-700 text-gray-300 text-sm rounded-lg hover:bg-accent-primary/20 hover:text-accent-secondary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}