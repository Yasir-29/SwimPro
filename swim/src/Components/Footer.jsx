import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const scrollOrNavigate = (id) => {
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-[#0B1B30] text-white pt-16 pb-8 font-poppins">
      {/* SVG Wave Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F3F4F6" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <h3 className="text-2xl font-bold mb-4">SwimDesigners</h3>
          <p className="text-gray-400 text-sm">
            We offer world-class designing, construction, and installation services for swimming pools across India.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-[#00BFFF]">Home</Link></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollOrNavigate("about"); }} className="hover:text-[#00BFFF]">About Us</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollOrNavigate("services"); }} className="hover:text-[#00BFFF]">Services</a></li>
            <li><Link to="/products" className="hover:text-[#00BFFF]">Products</Link></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollOrNavigate("projects"); }} className="hover:text-[#00BFFF]">Gallery</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollOrNavigate("contact"); }} className="hover:text-[#00BFFF]">Contact Us</a></li>
          </ul>
        </div>

        {/* Services Offered */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Services Offered</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Swimming Pool Construction</li>
            <li>Swimming Pool Services</li>
          </ul>
          <div className="mt-4 text-sm text-gray-400">
            <div><strong>Address:</strong><br />No: 18, Thiruverkadu Main Road,<br />Opp. RMK Super Market,<br />M.G.R. Puram, Ayapakkam, Chennai - 600077</div>
            <div className="mt-2"><strong>Phone:</strong><br />+91 9176203070 / 7358342429</div>
            <div className="mt-2"><strong>Email:</strong><br />venienter@gmail.com</div>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter Signup</h4>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to our newsletter to get important news, amazing offers & inside scoops.
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-xl border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-[#00BFFF] outline-none"
            />
            <button
              type="submit"
              className="w-full bg-[#00BFFF] hover:bg-[#0099cc] transition py-2 px-4 rounded-xl text-sm font-medium text-black"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-12 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} SwimDesigners. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
