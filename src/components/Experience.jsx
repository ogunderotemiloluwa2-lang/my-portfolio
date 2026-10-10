import { motion } from 'framer-motion'
import { FaBriefcase, FaGlobe, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Experience.css'

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Freelance Web Developer',
      company: 'Self-employed',
      period: '2023 — Present',
      location: 'Lagos, Nigeria (Remote)',
      description:
        'Building and shipping production applications for clients across healthcare, fintech, and marketplace sectors. I handle the full web development lifecycle — from initial scoping and architecture to deployment and post-launch fixes.',
      highlights: [
        'Shipped 8+ production applications with real users, deployed on Netlify and Vercel',
        'Reduced client support tickets by 70% through proactive bug fixes and clear handover docs',
        'Average project delivery time: 2-3 weeks from kickoff to live',
        'Maintained 99.9% uptime across all deployed applications',
      ],
      links: [
        { label: 'EventFlow', href: 'https://eventtracking.vercel.app/' },
        { label: 'PA Boss', href: 'https://personal-assistan.netlify.app' },
        { label: 'Beacon Scholar', href: 'https://scholarhipandgrant.netlify.app' },
      ],
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      company: 'DevLink Network',
      period: '2024 — 2025',
      location: 'Open-source contributor',
      description:
        'Built and maintained a developer collaboration platform from the ground up. Led the frontend architecture and contributed to the Node.js/Express backend across 11 development phases.',
      highlights: [
        'Designed and implemented React component architecture with Vite + Tailwind',
        'Built real-time chat with Socket.IO supporting 100+ concurrent users',
        'Implemented JWT authentication and role-based access control',
        'Created Swagger-documented REST API with 50+ endpoints',
      ],
      links: [
        { label: 'Live site', href: 'https://devlinkconnect.vercel.app/' },
        { label: 'GitHub', href: 'https://github.com/ogunderotemiloluwa2-lang/devlink' },
      ],
    },
    {
      id: 3,
      title: 'Web Developer',
      company: 'LG CUT Barber Platform',
      period: '2023 — 2024',
      location: 'Abeokuta, Nigeria',
      description:
        'Built a full-stack barber appointment platform for a local business. Handled both the React frontend and the Node.js/Express backend, including booking logic, admin dashboard, and notification system.',
      highlights: [
        'Live price calculation based on service type and location',
        'Telegram + email notifications — zero missed bookings since launch',
        'Admin dashboard with password protection and availability management',
        'Deployed frontend on Netlify, backend API on Render',
      ],
      links: [
        { label: 'Live site', href: 'https://lg-barbing.netlify.app' },
        { label: 'Frontend code', href: 'https://github.com/ogunderotemiloluwa2-lang/frontend-LGcut' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="experience" id="experience">
      <div className="container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">What I've built and shipped</h2>
          <p className="experience-subtitle">
            Real projects, real users, real deadlines. Here's what I've delivered.
          </p>
        </motion.div>

        <motion.div
          className="experience-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp) => (
            <motion.div key={exp.id} className="experience-item" variants={itemVariants}>
              <div className="experience-icon">
                <FaBriefcase />
              </div>
              <div className="experience-content">
                <div className="experience-header-row">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-company">{exp.company} · {exp.location}</p>
                <p className="experience-description">{exp.description}</p>

                <ul className="experience-highlights">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>
                      <span className="highlight-bullet" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {exp.links && exp.links.length > 0 && (
                  <div className="experience-links">
                    {exp.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience-link"
                      >
                        <FaExternalLinkAlt size={14} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
