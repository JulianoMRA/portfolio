import './Skills.css'
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiDart,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiDjango,
  SiElectron,
  SiPostgresql,
  SiSqlite,
  SiDrizzle,
  SiGit,
  SiDocker,
  SiGithubactions,
  SiVercel,
  SiRailway,
  SiLinux,
  SiVitest,
} from 'react-icons/si'
import { FaJava, FaDatabase } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

const Skills = () => {
  const { t } = useLanguage()

  const skillCategories = [
    {
      key: 'languages',
      color: '#7c3aed',
      skills: [
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Python', icon: SiPython },
        { name: 'Dart', icon: SiDart },
        { name: 'Java', icon: FaJava },
        { name: 'SQL', icon: FaDatabase },
      ],
    },
    {
      key: 'frontend',
      color: '#06b6d4',
      skills: [
        { name: 'React', icon: SiReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Flutter', icon: SiFlutter },
      ],
    },
    {
      key: 'backend',
      color: '#10b981',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express', icon: SiExpress },
        { name: 'Socket.IO', icon: SiSocketdotio },
        { name: 'Django', icon: SiDjango },
        { name: 'Electron', icon: SiElectron },
      ],
    },
    {
      key: 'database',
      color: '#f59e0b',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'SQLite', icon: SiSqlite },
        { name: 'Drizzle ORM', icon: SiDrizzle },
      ],
    },
    {
      key: 'devops',
      color: '#ef4444',
      skills: [
        { name: 'Git', icon: SiGit },
        { name: 'Docker', icon: SiDocker },
        { name: 'GitHub Actions', icon: SiGithubactions },
        { name: 'Vercel', icon: SiVercel },
        { name: 'Railway', icon: SiRailway },
        { name: 'Linux', icon: SiLinux },
        { name: 'Vitest', icon: SiVitest },
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
