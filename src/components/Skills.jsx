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
  SiGodotengine,
  SiRuby,
  SiNodedotjs,
  SiMysql
} from 'react-icons/si'
import { FaJava, FaDatabase, FaServer } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

const Skills = () => {
  const { t } = useLanguage()

  const skillCategories = [
    {
      key: 'languages',
      skills: [
        { name: 'Python', icon: SiPython },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Java', icon: FaJava },
        { name: 'C', icon: SiC },
        { name: 'C++', icon: SiCplusplus },
        { name: 'Ruby', icon: SiRuby }
      ]
    },
    {
      key: 'frontend',
      skills: [
        { name: 'React', icon: SiReact },
        { name: 'HTML5', icon: SiHtml5 },
        { name: 'CSS3', icon: SiCss3 }
      ]
    },
    {
      key: 'backend',
      skills: [
        { name: 'Django', icon: SiDjango },
        { name: 'Node.js', icon: SiNodedotjs }
      ]
    },
    {
      key: 'database',
      skills: [
        { name: 'MySQL', icon: SiMysql },
        { name: 'SQL Server', icon: FaServer },
        { name: 'SQL', icon: FaDatabase }
      ]
    },
    {
      key: 'devops',
      skills: [
        { name: 'Git', icon: SiGit },
        { name: 'GitHub', icon: SiGithub },
        { name: 'Docker', icon: SiDocker }
      ]
    },
    {
      key: 'gamedev',
      skills: [
        { name: 'Godot', icon: SiGodotengine }
      ]
    }
  ]

  return (
    <section id="habilidades" className="skills">
      <div className="container">
        <h2 className="section-title-skills">{t('skills.title')}</h2>

        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="skill-category">
            <h3 className="category-title">{t(`skills.categories.${category.key}`)}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <div key={index} className="skill-card">
                    <div className="skill-icon">
                      <Icon size={40} />
                    </div>
                    <h4 className="skill-name">{skill.name}</h4>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

