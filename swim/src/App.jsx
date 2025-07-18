import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar'
import Hero from "./Pages/Hero"
import About from "./Pages/About"
import Services from "./Pages/Service"
import Projects from "./Pages/Projects"
import WhyChooseUs from "./Pages/WhyUs"
import Testimonials from "./Pages/Testimonials"
import Contact from "./Pages/Contact"
import Footer from "./Components/Footer"
import WhatsAppFloat from "./Pages/whatsapp"
import Product from "./Pages/Product" // Add this

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <Projects />
              <WhyChooseUs />
              <Testimonials />
              <Contact />
            </>
          } />
          <Route path="/products" element={<Product />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  )
}
