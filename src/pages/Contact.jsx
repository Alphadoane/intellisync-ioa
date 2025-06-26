import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  // Form input animation variants
  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 0 2px rgba(0,123,255,0.25)" },
  };

  return (
    <motion.div 
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Header */}
      <motion.header 
        className="contact-header"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <br />
        <br />
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you! Reach out for inquiries or partnerships.</p>
      </motion.header>

      <div className="contact-container">
        {/* Contact Form */}
        <motion.div 
          className="contact-form"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <motion.input
                id="name"
                type="text"
                placeholder="Your name"
                whileFocus="focus"
                variants={inputVariants}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <motion.input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                whileFocus="focus"
                variants={inputVariants}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <motion.input
                id="subject"
                type="text"
                placeholder="What's this about?"
                whileFocus="focus"
                variants={inputVariants}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <motion.textarea
                id="message"
                rows="5"
                placeholder="Your message here..."
                whileFocus="focus"
                variants={inputVariants}
              />
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.03, backgroundColor: "#0056b3" }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          className="contact-info"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2>Contact Information</h2>
          
          <div className="info-item">
            <motion.div 
              className="icon-container"
              whileHover={{ scale: 1.1 }}
            >
              <i className="fas fa-map-marker-alt"></i>
            </motion.div>
            <div>
              <h3>Address</h3>
              <p>P.O.Box 27346-01000<br />Nairobi, Kenya</p>
            </div>
          </div>

          <div className="info-item">
            <motion.div 
              className="icon-container"
              whileHover={{ scale: 1.1 }}
            >
              <i className="fas fa-phone-alt"></i>
            </motion.div>
            <div>
              <h3>Phone</h3>
              <p>+254 (722) 952-138</p>
            </div>
          </div>

          <div className="info-item">
            <motion.div 
              className="icon-container"
              whileHover={{ scale: 1.1 }}
            >
              <i className="fas fa-envelope"></i>
            </motion.div>
            <div>
              <h3>Email</h3>
              <p>info@intellisync-ioa.com</p>
              <p>support@intellisync-ioa.com</p>
            </div>
          </div>

          <div className="social-links">
            <motion.a 
              href="#" 
              whileHover={{ y: -3 }}
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ y: -3 }}
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ y: -3 }}
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div 
        className="map-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <iframe 
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2692505416353!2d-79.38924548450282!3d43.64256617912184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div>
    </motion.div>
  );
};

export default Contact;