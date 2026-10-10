import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaAward, FaBriefcase } from 'react-icons/fa'
import './Timeline.css'

export default function Timeline() {
  const timelineEvents = [
    {
      year: '2022',
      title: 'Started with HTML and CSS',
      description: 'Built my first static pages by hand. Learned Flexbox and Grid the hard way — by breaking layouts and rebuilding them until they held.',
      icon: FaCode,
    },
    {
      year: '2023',
      title: 'Moved into React',
      description: 'Rebuilt my old projects as React apps. This is where components, hooks, and state finally clicked for me.',
      icon: FaRocket,
    },
    {
      year: '2024',
      title: 'Started building full products',
      description: 'Went past tutorials and shipped real apps — booking systems, marketplaces, and dashboards with real users and real bugs.',
      icon: FaBriefcase,
    },
    {
      year: '2025',
      title: 'Full-stack and deployment',
      description: 'Learned to build and deploy the backend too — Node, Express, MongoDB, auth, and getting everything live on Netlify, Vercel, and Render.',
      icon: FaAward,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="timeline-section">
      <div className="timeline-container">
        <motion.div
          className="timeline-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow">Journey</span>
          <h2 className="section-title timeline-title">How I got here</h2>
          <p className="timeline-subtitle">A short version of the last few years</p>
        </motion.div>

        <motion.div
          className="timeline-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {timelineEvents.map((event, index) => {
            const Icon = event.icon
            return (
              <motion.div key={index} className="timeline-item" variants={itemVariants}>
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-content-box">
                  <div className="timeline-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <div className="timeline-year">{event.year}</div>
                  <h3 className="timeline-event-title">{event.title}</h3>
                  <p className="timeline-description">{event.description}</p>
                </div>
              </motion.div>
            )
          })}
          <div className="timeline-line" />
        </motion.div>
      </div>
    </section>
  )
}
