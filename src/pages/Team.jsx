import React from 'react';
import { motion } from 'framer-motion';
import './team.css'; // Ensure filename and import match

const Team = () => {
  const CTAButton = ({ text, primary = false }) => {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`team-cta-button ${primary ? 'team-primary' : 'team-secondary'}`}
      >
        {text}
      </motion.button>
    );
  };

  return (
    <div className="team-container">
      {/* Header */}
      <motion.header 
        className="team-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="team-logo"
          whileHover={{ scale: 1.1 }}
        >
          IntelliTeam
        </motion.div>
        <nav className="team-nav">
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
        <CTAButton text="Join Us" />
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        className="team-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.h1
          animate={{ x: [-50, 0] }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Meet Our Team
        </motion.h1>
        <motion.p
          animate={{ x: [50, 0] }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          50+ expert solution architects, engineers, and designers<br />
          <br />
          All dedicated in Office Automation<br />
          <br />
          Driving Innovation and Excellence Together<br />
          <br />
          Lead by CEO and Founder, Ezekiel Mbori
          <br />
        </motion.p>
        <div className="hero-cta-buttons">
          <CTAButton text="Join Us" primary />
          <CTAButton text="Contact Team" />
        </div>
      </motion.section>
    </div>
  );
};

export default Team;
