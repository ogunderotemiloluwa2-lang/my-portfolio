import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaLightbulb, FaCode, FaCheckCircle, FaRocket } from 'react-icons/fa'
import './ImpactStats.css'

export default function ImpactStats() {
  const [isVisible, setIsVisible] = useState(false)

  const approaches = [
    {
      label: 'Think First',
      description: 'Plan and understand requirements before coding',
      icon: FaLightbulb,
    },
    {
      label: 'Clean Code',
      description: 'Write readable, maintainable, and scalable solutions',
      icon: FaCode,
    },
    {
      label: 'Test Thoroughly',
      description: 'Ensure quality through testing and debugging',
      icon: FaCheckCircle,
    },
    {
      label: 'Iterate & Improve',
      description: 'Continuously refine based on feedback and learning',
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
          <span className="eyebrow">Approach</span>
          <h2 className="impact-stats-title section-title">My Creative Approach</h2>
          <p className="impact-stats-subtitle">How I build exceptional solutions</p>
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
