import './Skills.css'
import { 
  SiPython,
  SiJavascript,
  SiReact,
  SiDjango,
  SiC,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiGodotengine
} from 'react-icons/si'
import { FaJava, FaDatabase, FaServer } from 'react-icons/fa'

const Skills = () => {
  const skills = [
    { name: 'Python', icon: SiPython },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'React', icon: SiReact },
    { name: 'Django', icon: SiDjango },
    { name: 'Java', icon: FaJava },
    { name: 'C', icon: SiC },
    { name: 'C++', icon: SiCplusplus },
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Docker', icon: SiDocker },
    { name: 'SQL', icon: FaDatabase },
    { name: 'SQL Server', icon: FaServer },
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'Godot', icon: SiGodotengine }
  ]

  return (
    <section id="habilidades" className="skills">
      <div className="container">
        <h2 className="section-title-skills">Habilidades</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  <Icon size={40} />
                </div>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
            )
          })}
        </div>
        <p className="skills-footer">
          Desenvolvido para exibir projetos de desenvolvimento de software e programação.
        </p>
      </div>
    </section>
  )
}

export default Skills
