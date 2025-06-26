import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeGroup, setActiveGroup] = useState(null);

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleDropdownClick = (idx) => {
    setActiveGroup(activeGroup === idx ? null : idx); // toggle
  };

  const navGroups = [
    {
      title: 'Overview',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/About' },
        { name: 'Team', path: '/Team' },
        { name: 'Awards', path: '/Awards' },
        { name: 'CompanyInfo', path: '/CompanyInfo' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'BusinessIntelligence', path: '/BusinessIntelligence' },
        { name: 'DataAutomation', path: '/DataAutomation' },
        { name: 'DocumentManagement', path: '/DocumentManagement' },
        { name: 'Integrations', path: '/Integrations' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Solutions', path: '/Solutions' },
        { name: 'CaseStudies', path: '/CaseStudies' },
        { name: 'Customers', path: '/Customers' },
        { name: 'Testimonials', path: '/Testimonials' },
        { name: 'Pricing', path: '/Pricing' },
      ],
    },
    {
      title: 'Blogs',
      links: [
        { name: 'Blog', path: '/Blog' },
        { name: 'BlogPost', path: '/BlogPost' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact', path: '/Contact' },
        { name: 'Resources', path: '/Resources' },
        { name: 'Support', path: '/Support' },
      ],
    },
  ];

  return (
    <header className="navbar-fixed">
      <div className="navbar-container">
        <div className="logo">IntelliSync-IOA</div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navGroups.map((group, idx) => (
            <div key={idx} className="nav-group">
              <span
                className="nav-group-title"
                onClick={() => handleDropdownClick(idx)}
              >
                {group.title} ▾
              </span>
              <ul className={`dropdown ${activeGroup === idx ? 'open' : ''}`}>
                {group.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      onClick={() => {
                        setMenuOpen(false); // close mobile menu
                        setActiveGroup(null); // close dropdown
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

         <div className="theme-toggle">
          <label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="toggle-label">{darkMode ? '🌙' : '☀️'}</span>
          </label>
        </div>

      </div>

    </header>

  );
  
};

export default Navbar;
