import { motion } from 'framer-motion'
import { FiLayout, FiZap, FiSmartphone } from 'react-icons/fi'
import './About.css'

export default function About() {
  const highlights = [
    {
      icon: <FiLayout />,
      title: 'Interfaces people can use',
      text: 'I test on a real phone, not just a resized browser window. If a form is confusing or a button is too small to tap, it gets fixed before it ships.',
    },
    {
      icon: <FiZap />,
      title: 'Speed that holds up',
      text: 'I profile before I optimise. Most of my apps load in under two seconds on a mid-range Android over 3G, which is what my users actually have.',
    },
    {
      icon: <FiSmartphone />,
      title: 'Built mobile-first',
      text: 'Most of my traffic comes from phones, so that is where I start. Desktop is the easy part once the small screen works.',
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
              I build the front end, and I make sure it actually works.
            </motion.h2>
            <motion.p variants={item}>
              I'm a front-end developer based in Lagos. I mostly work in React, and I've spent the
              last few years building things end to end — from a barber booking site for a shop in
              Abeokuta to EventFlow, the event platform I run myself.
            </motion.p>
            <motion.p variants={item}>
              I didn't come from a bootcamp or a big company. I learned by building real projects,
              breaking them, and fixing them. That means I'm comfortable with the messy parts: wiring
              up an API, debugging a booking conflict, or figuring out why a page is slow on a cheap phone.
            </motion.p>
            <motion.p variants={item}>
              What I care about is simple — does it work, is it fast, and can a normal person use it
              without being told how. Everything else is detail.
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
