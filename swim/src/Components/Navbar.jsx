import React, { useState } from "react";
import Button from "../Pages/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white/80 backdrop-blur sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="#hero" className="text-2xl font-bold text-[#0B1B30] tracking-tight">
            SwimDesigners
          </a>
        </div>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex gap-8 text-[#0B1B30] font-medium">
          <a href="#hero" className="hover:text-[#00BFFF] transition">Home</a>
          <a href="#about" className="hover:text-[#00BFFF] transition">About</a>
          <a href="#services" className="hover:text-[#00BFFF] transition">Services</a>
          <a href="#projects" className="hover:text-[#00BFFF] transition">Projects</a>
          <a href="#why-us" className="hover:text-[#00BFFF] transition">Why Us</a>
          <a href="#testimonials" className="hover:text-[#00BFFF] transition">Testimonials</a>
          <a href="#contact" className="hover:text-[#00BFFF] transition">Contact</a>
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <a href="#contact">
            <Button>Request Quote</Button>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={handleToggle}
            className="text-[#0B1B30] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pt-4 pb-6 space-y-4 text-[#0B1B30] font-medium">
          <a href="#hero" onClick={closeMenu} className="block hover:text-[#00BFFF] transition">Home</a>
          <a href="#about" onClick={closeMenu} className="block hover:text-[#00BFFF] transition">About</a>
          <a href="#services" onClick={closeMenu} className="block hover:text-[#00BFFF] transition">Services</a>
          <a href="#projects" onClick={closeMenu} className="block hover:text-[#00BFFF] transition">Projects</a>
          <a href="#why-us" onClick={closeMenu} className="block hover:text-[#00BFFF] transition">Why Us</a>
          <a href="#testimonials" onClick={closeMenu} className="block hover:text-[#00BFFF] transition">Testimonials</a>
          <a href="#contact" onClick={closeMenu} className="block hover:text-[#00BFFF] transition">Contact</a>
          <div className="pt-2">
            <a href="#contact" onClick={closeMenu}>
              <Button>Request Quote</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
