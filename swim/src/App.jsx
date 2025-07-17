import React from 'react';
// import Hero from './Components/Hero';
import About from './Components/About'; 
import Button from './Components/Button';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Service from './Components/Service';
import Testimonials from './Components/Testimonials';
import WhyUs from './Components/WhyUs';



function App() {
  return (
    <>
      <Navbar />
      <About />
      <Button />
      <Hero />
      <Projects />
      <Service />
      <Testimonials />
      <WhyUs />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
