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
            Ogundero Samson
          </motion.h1>

          <motion.p className="hero-role" variants={item}>
            Front-End Developer <span className="hero-amp">&amp;</span> <em>React</em>
          </motion.p>

          <motion.p className="hero-lead" variants={item}>
            I build web apps that people actually use — booking systems, dashboards, and
            marketplaces. Right now I'm running <strong>EventFlow</strong>, an event platform I
            built from scratch, and shipping client work on the side. I like the unglamorous
            parts: making forms behave, keeping pages fast, and fixing the bugs nobody else wants to touch.
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
            <li><strong>15+</strong><span>Projects shipped</span></li>
            <li><strong>3 yrs</strong><span>Writing React</span></li>
            <li><strong>Lagos</strong><span>Based in</span></li>
          </motion.ul>
        </motion.div>
      </div>

      <button className="hero-scroll" onClick={() => scrollToSection('about')} aria-label="Scroll to about">
        <FiArrowDown />
      </button>
    </section>
  )
}
