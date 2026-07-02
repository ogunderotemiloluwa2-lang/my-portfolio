import { motion } from 'framer-motion'
import { FiLayout, FiZap, FiSmartphone } from 'react-icons/fi'
import './About.css'

export default function About() {
  const highlights = [
    {
      icon: <FiLayout />,
      title: 'Interface & UX',
      text: 'Clean, intuitive interfaces built with attention to hierarchy, accessibility, and the small details users feel but rarely notice.',
    },
    {
      icon: <FiZap />,
      title: 'Performance',
      text: 'Fast, responsive applications, optimised rendering, smooth interactions, and code that stays maintainable as it grows.',
    },
    {
      icon: <FiSmartphone />,
      title: 'Responsive by default',
      text: 'Layouts that hold up from a 320px phone to a wide desktop, tested across real breakpoints rather than assumed.',
    },
  ]

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About
        </motion.span>

        <div className="about-grid">
          <motion.div
            className="about-text"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="section-title" variants={item}>
              Frontend developer focused on interfaces that feel effortless.
            </motion.h2>
            <motion.p variants={item}>
              I build beautiful, responsive, and performant user interfaces. My work spans
              AI-powered platforms, fintech tools, and high-traffic marketplaces, products used by
              thousands of people who expect them to just work.
            </motion.p>
            <motion.p variants={item}>
              My approach pairs clean code with modern design principles and real performance
              discipline, from interactive real-time interfaces to complex state management. Recently
              I've been building EventFlow, an event-management platform with live check-in, QR passes,
              and analytics.
            </motion.p>
            <motion.p variants={item}>
              Above all, I care about intuitive, accessible experiences, whether the domain is
              healthcare, education, or events, that people genuinely enjoy using.
            </motion.p>
          </motion.div>

          <motion.div
            className="about-highlights"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((h) => (
              <motion.div className="highlight-box" key={h.title} variants={item}>
                <span className="highlight-icon">{h.icon}</span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
