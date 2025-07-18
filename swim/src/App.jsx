import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="why-us">
        <WhyUs />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
