import React from 'react';
import { motion } from 'framer-motion';
import './Awards.css'; // Fixed case sensitivity to match actual filename

const Awards = () => {
  // CTA Button with updated class names
  const CTAButton = ({ text, primary = false }) => {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`awardscta-button ${primary ? 'awards-primary' : 'awards-secondary'}`}
      >
        {text}
      </motion.button>
    );
  };

  return (
    <div className="awards-container">
      {/* Header */}
      <motion.header 
        className="awards-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="awards-logo"
          whileHover={{ scale: 1.1 }}
        >
          YourBrand
        </motion.div>
        <nav className="awards-nav">
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
        className="awards-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.h1
          animate={{ x: [-50, 0] }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Awards & Recognition
        </motion.h1>
        <motion.p
          animate={{ x: [50, 0] }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Bold Solutions Provider Award 2022<br />
          Best Innovative Solutions Design Architecture<br />
          (Contract Management System)
        </motion.p>
      </motion.section>
    </div>
  );
};

export default Awards;
