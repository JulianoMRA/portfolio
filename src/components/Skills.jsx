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
  SiMysql,
  SiDart,
  SiPhp,
  SiRubyonrails,
  SiFlutter,
  SiPostgresql,
  SiGooglesheets,
  SiLinux,
  SiExpress,
} from 'react-icons/si'
import { FaJava, FaServer, FaShieldAlt, FaCode } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

const Skills = () => {
  const { t } = useLanguage()

  const skillCategories = [
    {
      key: 'languages',
      color: '#7c3aed',
      skills: [
        { name: 'Python', icon: SiPython },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Java', icon: FaJava },
        { name: 'C', icon: SiC },
        { name: 'C++', icon: SiCplusplus },
        { name: 'Ruby', icon: SiRuby },
        { name: 'Dart', icon: SiDart },
        { name: 'PHP', icon: SiPhp },
      ],
    },
    {
      key: 'frontend',
      color: '#06b6d4',
      skills: [
        { name: 'React', icon: SiReact },
        { name: 'HTML5', icon: SiHtml5 },
        { name: 'CSS3', icon: SiCss3 },
      ],
    },
    {
      key: 'backend',
      color: '#10b981',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express', icon: SiExpress },
        { name: 'Flutter', icon: SiFlutter },
        { name: 'Django', icon: SiDjango },
        { name: 'Rails', icon: SiRubyonrails },
      ],
    },
    {
      key: 'database',
      color: '#f59e0b',
      skills: [
        { name: 'MySQL', icon: SiMysql },
        { name: 'SQL Server', icon: FaServer },
        { name: 'PostgreSQL', icon: SiPostgresql },
      ],
    },
    {
      key: 'devops',
      color: '#ef4444',
      skills: [
        { name: 'Git', icon: SiGit },
        { name: 'GitHub', icon: SiGithub },
        { name: 'Docker', icon: SiDocker },
        { name: 'Linux', icon: SiLinux },
        { name: 'Sheets', icon: SiGooglesheets },
      ],
    },
    {
      key: 'other',
      color: '#8b5cf6',
      skills: [
        { name: 'Godot', icon: SiGodotengine },
        { name: 'Seg. Info.', icon: FaShieldAlt },
        { name: 'CTF / Hack', icon: FaCode },
      ],
    },
  ]

  return (
    <section id="habilidades" className="skills">
      <div className="skills-bg" aria-hidden="true">
        <div className="skills-blob" />
      </div>
      <div className="container">
        <h2 className="section-title-skills">{t('skills.title')}</h2>

        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="skill-category">
            <h3 className="category-title" style={{ '--cat-color': category.color }}>
              {t(`skills.categories.${category.key}`)}
            </h3>
            <div className="skills-grid">
              {category.skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <div
                    key={index}
                    className="skill-card"
                    style={{ '--cat-color': category.color, animationDelay: `${index * 0.06}s` }}
                  >
                    <div className="skill-icon">
                      <Icon size={36} />
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
