import { motion } from 'framer-motion'
import { FiArrowRight, FiArrowDown } from 'react-icons/fi'
import './Hero.css'

export default function Hero() {
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <motion.div className="hero-text" variants={container} initial="hidden" animate="visible">
          <motion.span className="hero-badge" variants={item}>
            <span className="hero-dot" aria-hidden="true" />
            Available for work · Lagos, Nigeria
          </motion.span>

          <motion.h1 variants={item}>
            Samson Ogundero
          </motion.h1>

          <motion.p className="hero-role" variants={item}>
            Frontend Developer <span className="hero-amp">&amp;</span> <em>React specialist</em>
          </motion.p>

          <motion.p className="hero-lead" variants={item}>
            I turn complex product requirements into polished, accessible interfaces, from
            AI platforms serving 1,000+ users to <strong>EventFlow</strong>, my own event-management
            startup. I care about performance, clean code, and details that make a product feel effortless.
          </motion.p>

          <motion.div className="hero-buttons" variants={item}>
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View work <FiArrowRight />
            </button>
            <button className="btn btn-ghost" onClick={() => scrollToSection('contact')}>
              Get in touch
            </button>
          </motion.div>

          <motion.ul className="hero-meta" variants={item}>
            <li><strong>6+</strong><span>Products shipped</span></li>
            <li><strong>1,000+</strong><span>Users served</span></li>
            <li><strong>React</strong><span>Core stack</span></li>
          </motion.ul>
        </motion.div>
      </div>

      <button className="hero-scroll" onClick={() => scrollToSection('about')} aria-label="Scroll to about">
        <FiArrowDown />
      </button>
    </section>
  )
}
