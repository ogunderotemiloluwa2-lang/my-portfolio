import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow">Selected work</span>
          <h2 className="section-title">Projects</h2>
          <p className="projects-subtitle">
            Things I have actually built and put online. Some are client work, some are my own
            products, and a couple started as ideas I wanted to see working.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
