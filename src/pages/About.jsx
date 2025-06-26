import React from 'react';
import { motion } from 'framer-motion';
import './About.css'; // Ensure this filename matches exactly (case-sensitive)

const About = () => {
  // CTA Button with updated class names
  const CTAButton = ({ text, primary = false }) => {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`about-cta-button ${primary ? 'about-primary' : 'about-secondary'}`}
      >
        {text}
      </motion.button>
    );
  };

  return (
    <div className="about-container">
      {/* Header */}
      <motion.header 
        className="about-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="about-logo"
          whileHover={{ scale: 1.1 }}
        >
          YourBrand
        </motion.div>
        <nav className="about-nav">
          {['About', 'Services', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1, color: '#007bff' }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <CTAButton text="Sign Up" />
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.h1
          animate={{ x: [-50, 0] }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          About Us
        </motion.h1>
        <motion.p
          animate={{ x: [50, 0] }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Founded in 2025,<br />
          Leading Office Technology Integration Experts<br />
          Headquartered in Nairobi, Kenya
        </motion.p>
        <div className="about-hero-cta">
          <CTAButton text="Learn More" primary={true} />
          <CTAButton text="Contact Us" />
        </div>
      </motion.section>
    </div>
  );
};

export default About;
