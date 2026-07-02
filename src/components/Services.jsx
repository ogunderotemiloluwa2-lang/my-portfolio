import { FaCode, FaPalette, FaRocket, FaMobile, FaClock, FaAward } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Services.css';

function Services() {
  const services = [
    {
      icon: FaCode,
      title: 'React Development',
      description: 'Custom React applications built with modern best practices. Component architecture, state management, hooks, and performance optimization for production-ready applications.',
      features: ['React Components', 'State Management', 'Custom Hooks', 'Code Quality'],
    },
    {
      icon: FaPalette,
      title: 'UI/UX Implementation',
      description: 'Transform designs into responsive, interactive interfaces. Pixel-perfect implementation with attention to user experience, accessibility, and design consistency.',
      features: ['Responsive Design', 'Interactive UI', 'Accessibility', 'Design Implementation'],
    },
    {
      icon: FaMobile,
      title: 'Responsive Design',
      description: 'Create beautiful interfaces that work seamlessly across all devices. Mobile-first approach, fluid layouts, and touch-friendly interactions for optimal user experience.',
      features: ['Mobile-First', 'Responsive Layouts', 'Cross-Device Testing', 'Performance'],
    },
    {
      icon: FaRocket,
      title: 'Performance Optimization',
      description: 'Build fast, efficient applications that users love. Code splitting, lazy loading, image optimization, and rendering performance improvements for lightning-fast experiences.',
      features: ['Code Optimization', 'Lazy Loading', 'Caching Strategy', 'Performance Metrics'],
    },
    {
      icon: FaClock,
      title: 'Quick Development',
      description: 'Rapid development and deployment of front-end solutions. Fast turnaround without compromising code quality, using agile practices and modern tooling.',
      features: ['Fast Delivery', 'Agile Approach', 'Clean Code', 'Easy Maintenance'],
    },
    {
      icon: FaAward,
      title: 'Code Mentorship',
      description: 'Help your team write better React code. Code reviews, best practices guidance, architecture decisions, and technical mentorship for growing developers.',
      features: ['Code Review', 'Best Practices', 'Architecture Help', 'Team Growth'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: {
      y: -4,
      transition: { duration: 0.3 },
    },
  }

  const iconVariants = {
    hover: {
      scale: 1.08,
      transition: { type: 'spring', stiffness: 300, damping: 12 },
    },
  }

  return (
    <section className="services" id="services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Services</span>
          <h2 className="section-title">What I Offer</h2>
          <p>Comprehensive solutions for your development needs</p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                className="service-card"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div className="service-icon" variants={iconVariants} whileHover="hover">
                  <IconComponent />
                </motion.div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <FiCheck className="feature-check" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
