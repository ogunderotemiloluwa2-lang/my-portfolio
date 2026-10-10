import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi'
import './ProjectCard.css'

export default function ProjectCard({ project, index }) {
  const { featured, github, live } = project

  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay: Math.min(index, 4) * 0.08 },
    },
  }

  return (
    <motion.article
      className={`project-card${featured ? ' featured' : ''}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} loading="lazy" />
        {featured && <span className="project-badge">Startup · Live</span>}
      </div>

      <div className="project-content">
        <div className="project-body">
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <ul className="project-tags">
            {project.tags.map((tag) => (
              <li key={tag} className="tag">{tag}</li>
            ))}
          </ul>
        </div>

        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="link-btn">
              <FiGithub /> Code
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn primary"
            >
              {featured ? 'Visit EventFlow' : 'Live demo'}
              <FiArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
