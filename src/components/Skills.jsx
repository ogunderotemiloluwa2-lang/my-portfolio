import { motion } from 'framer-motion'
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaGithub,
  FaNodeJs,
  FaJs,
  FaServer,
  FaShieldAlt,
  FaFigma,
  FaChrome,
  FaNetworkWired,
} from 'react-icons/fa'
import { SiNetlify, SiVercel, SiMongodb, SiTypescript, SiFramer, SiVite, SiEslint, SiJest, SiTestinglibrary } from 'react-icons/si'
import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: FaReact, color: '#61dafb', level: 'Advanced' },
        { name: 'HTML5', icon: FaHtml5, color: '#e34c26', level: 'Expert' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572b6', level: 'Advanced' },
        { name: 'JavaScript', icon: FaJs, color: '#f7df1e', level: 'Advanced' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', level: 'Intermediate' },
        { name: 'Framer Motion', icon: SiFramer, color: '#000000', level: 'Advanced' },
      ],
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: '#68a063', level: 'Intermediate' },
        { name: 'Express', icon: FaServer, color: '#ffffff', level: 'Intermediate' },
        { name: 'MongoDB', icon: SiMongodb, color: '#13aa52', level: 'Intermediate' },
        { name: 'REST API', icon: FaNetworkWired, color: '#ffffff', level: 'Advanced' },
        { name: 'JWT Auth', icon: FaShieldAlt, color: '#f59e0b', level: 'Intermediate' },
      ],
    },
    {
      title: 'Tools & Deployment',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: '#f1502f', level: 'Advanced' },
        { name: 'GitHub', icon: FaGithub, color: '#ffffff', level: 'Advanced' },
        { name: 'Netlify', icon: SiNetlify, color: '#00c7b7', level: 'Advanced' },
        { name: 'Vercel', icon: SiVercel, color: '#000000', level: 'Advanced' },
        { name: 'Vite', icon: SiVite, color: '#646cff', level: 'Advanced' },
        { name: 'Figma', icon: FaFigma, color: '#f24e1e', level: 'Intermediate' },
      ],
    },
    {
      title: 'Testing & Quality',
      subtitle: 'Tools I use to ship reliable code',
      skills: [
        { name: 'ESLint', icon: SiEslint, color: '#4b3263', level: 'Advanced' },
        { name: 'Jest', icon: SiJest, color: '#c21325', level: 'Intermediate' },
        { name: 'React Testing Library', icon: SiTestinglibrary, color: '#e3335f', level: 'Intermediate' },
        { name: 'Chrome DevTools', icon: FaChrome, color: '#4285f4', level: 'Advanced' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
    hover: { scale: 1.1, y: -5 },
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow">Toolkit</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} className="skill-category" variants={itemVariants}>
              <h3>{category.title}</h3>
              {category.subtitle && <p className="skill-subtitle">{category.subtitle}</p>}
              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skillIdx}
                      className="skill-item"
                      variants={iconVariants}
                      whileHover="hover"
                      title={`${skill.name} — ${skill.level}`}
                    >
                      <Icon size={40} color={skill.color} />
                      <span>{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
