import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaLightbulb, FaCode, FaCheckCircle, FaRocket } from 'react-icons/fa'
import './ImpactStats.css'

export default function ImpactStats() {
  const [isVisible, setIsVisible] = useState(false)

  const approaches = [
    {
      label: 'Ask before building',
      description: 'I would rather spend an hour understanding what you actually need than a week building the wrong thing.',
      icon: FaLightbulb,
    },
    {
      label: 'Write it so I can read it later',
      description: 'Six months from now, someone has to change this code. I write it so that person is not cursing me.',
      icon: FaCode,
    },
    {
      label: 'Test the boring cases',
      description: 'Empty forms, slow networks, double-clicks. The edge cases are where real users live.',
      icon: FaCheckCircle,
    },
    {
      label: 'Ship, then fix',
      description: 'A live product teaches you more in a week than a month of planning. I ship early and improve from real feedback.',
      icon: FaRocket,
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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="impact-stats-section">
      <div className="impact-stats-container">
        <motion.div
          className="impact-stats-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow">How I work</span>
          <h2 className="impact-stats-title section-title">The way I build things</h2>
          <p className="impact-stats-subtitle">Four habits I picked up from shipping real projects</p>
        </motion.div>

        <motion.div
          className="impact-stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {approaches.map((approach, index) => {
            const Icon = approach.icon
            return (
              <motion.div
                key={index}
                className="impact-stat-card"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div className="stat-icon">
                  <Icon />
                </div>
                <h3>{approach.label}</h3>
                <p>{approach.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
