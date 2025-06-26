import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Awards from './pages/Awards';
import Clients from './pages/Clients';
import Testimonials from './pages/Testimonials';
import BusinessIntelligence from './pages/BusinessIntelligence';
import DataAutomation from './pages/DataAutomation';
import DocumentManagement from './pages/DocumentManagement';
import Integrations from './pages/Integrations';
import Solutions from './pages/Solutions';
import CaseStudies from './pages/CaseStudies';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Resources from './pages/Resources';
import Support from './pages/Support';
import CompanyInfo from './pages/CompanyInfo';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Awards" element={<Awards />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/BusinessIntelligence" element={<BusinessIntelligence />} />
        <Route path="/DataAutomation" element={<DataAutomation />} />
        <Route path="/DocumentManagement" element={<DocumentManagement />} />
        <Route path="/Integrations" element={<Integrations />} />
        <Route path="/Solutions" element={<Solutions />} />
        <Route path="/CaseStudies" element={<CaseStudies />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/BlogPost" element={<BlogPost />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/CompanyInfo" element={<CompanyInfo />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container" style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
