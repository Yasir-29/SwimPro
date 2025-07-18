import Navbar from './Components/Navbar'
import Hero from "./Pages/Hero"
import About from "./Pages/About"
import Services from "./Pages/Service"
import Projects from "./Pages/Projects"
import WhyChooseUs from "./Pages/WhyUs"
import Testimonials from "./Pages/Testimonials"
import Contact from "./Pages/Contact"
import Footer from "./Components/footer"
import WhatsAppFloat from "./Pages/whatsapp"


export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
