import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './Button.jsx';

const Hero = ({ personal, highlights }) => (
  <section className="hero">
    <div className="hero__content">
      <motion.p
        className="hero__eyebrow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {personal.title}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {personal.name}
      </motion.h1>
      <motion.p
        className="hero__summary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {personal.objective}
      </motion.p>
      <motion.div
        className="hero__actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Button as={Link} to="/projects">
          View Projects
        </Button>
        <Button as={Link} to="/contact" variant="outline">
          Contact
        </Button>
      </motion.div>
      <div className="hero__highlights">
        {highlights.map((item) => (
          <span key={item} className="hero__highlight">
            {item}
          </span>
        ))}
      </div>
    </div>
    <div className="hero__panel">
      <div className="hero__card">
        <p className="hero__label">Location</p>
        <p>{personal.location}</p>
        <p className="hero__label">Email</p>
        <p>{personal.email}</p>
        <p className="hero__label">Phone</p>
        <p>{personal.phone}</p>
        <div className="hero__socials">
          <a href={personal.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
