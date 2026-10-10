import { FaCode, FaPalette, FaRocket, FaMobile, FaClock, FaAward } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Services.css';

function Services() {
  const services = [
    {
      icon: FaCode,
      title: 'React apps, built to last',
      description: 'I build React front ends that are easy to hand over. Clear components, sensible state, and no clever tricks that break the moment someone else edits the code.',
      features: ['Component architecture', 'State management', 'Custom hooks', 'Readable code'],
    },
    {
      icon: FaPalette,
      title: 'Designs turned into real pages',
      description: 'Give me a Figma file or even a rough sketch and I will build it. I match spacing, type, and states closely, and I flag the parts that will not work on a phone.',
      features: ['Figma to code', 'Responsive layouts', 'Accessible markup', 'Consistent spacing'],
    },
    {
      icon: FaMobile,
      title: 'Works on cheap phones',
      description: 'Most of my users are on mid-range Android over slow data. I build for that first, so the site feels fast for everyone else too.',
      features: ['Mobile-first', 'Tested on real devices', 'Touch-friendly', 'Light on data'],
    },
    {
      icon: FaRocket,
      title: 'Making slow pages fast',
      description: 'If your app feels sluggish, I will find out why. Usually it is images, unnecessary re-renders, or a bundle that grew without anyone noticing.',
      features: ['Bundle trimming', 'Lazy loading', 'Image optimisation', 'Render profiling'],
    },
    {
      icon: FaClock,
      title: 'Working to a deadline',
      description: 'I have shipped under real deadlines, including a booking site that had to be live before a shop opened. I scope honestly and tell you early if something will slip.',
      features: ['Clear scope', 'Regular updates', 'Honest timelines', 'No surprises'],
    },
    {
      icon: FaAward,
      title: 'Helping other developers',
      description: 'I review code and help newer developers get unstuck. Not lectures — just sitting with the code and figuring out what is actually wrong.',
      features: ['Code review', 'Debugging help', 'React guidance', 'Pairing sessions'],
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
          <h2 className="section-title">What I can help with</h2>
          <p>Straightforward work, done properly</p>
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
