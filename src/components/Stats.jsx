import { motion } from 'framer-motion'
import { FaUsers, FaCode, FaRocket, FaClock } from 'react-icons/fa'
import './Stats.css'

function Stats() {
  const stats = [
    {
      icon: FaUsers,
      number: '15+',
      label: 'Projects Shipped',
      description: 'Apps I built and put online, not just tutorials',
    },
    {
      icon: FaCode,
      number: '3',
      label: 'Live Products',
      description: 'Currently running with real users',
    },
    {
      icon: FaRocket,
      number: '3 yrs',
      label: 'Writing React',
      description: 'Since I rebuilt my first project as a React app',
    },
    {
      icon: FaClock,
      number: '<2s',
      label: 'Typical Load Time',
      description: 'On a mid-range phone over 3G',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: {
      y: -8,
      boxShadow: '0 20px 40px rgba(224, 165, 74, 0.15)',
      transition: { duration: 0.3 },
    },
  }

  const iconVariants = {
    hover: {
      scale: 1.1,
      color: 'var(--accent)',
      transition: { type: 'spring', stiffness: 300, damping: 10 },
    },
  }

  return (
    <section className="stats" id="stats">
      <div className="container">
        <motion.div
          className="stats-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow">Numbers</span>
          <h2 className="section-title">What I bring to the table</h2>
          <p className="stats-subtitle">A few metrics that matter to hiring managers</p>
        </motion.div>

        <motion.div
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                className="stat-card"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div className="stat-icon" variants={iconVariants} whileHover="hover">
                  <IconComponent />
                </motion.div>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
                <p className="stat-description">{stat.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
