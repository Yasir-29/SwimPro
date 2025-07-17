import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Pages/Hero';
import About from './Pages/About';
import Services from './Pages/Service';
import Projects from './Pages/Projects';
import WhyUs from './Pages/WhyUs';
import Testimonials from './Pages/Testimonials';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <Projects />
            <WhyUs />
            <Testimonials />
            <Contact />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
