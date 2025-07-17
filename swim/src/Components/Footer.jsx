import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0B1B30] text-white pt-16 pb-8">
      {/* Decorative SVG Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F3F4F6" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo & Name */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="text-2xl font-bold tracking-tight">SwimDesigners</span>
        </div>
        {/* Nav Links */}
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="#home" className="hover:text-[#00BFFF] transition">Home</a>
          <a href="#about" className="hover:text-[#00BFFF] transition">About</a>
          <a href="#services" className="hover:text-[#00BFFF] transition">Services</a>
          <a href="#projects" className="hover:text-[#00BFFF] transition">Projects</a>
          <a href="#contact" className="hover:text-[#00BFFF] transition">Contact</a>
        </div>
        {/* Contact Info */}
        <div className="text-sm text-gray-300 text-center md:text-right">
          <div>info@swimdesigners.com</div>
          <div>+1 (555) 123-4567</div>
          <div>123 Pool Lane, Miami, FL</div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400 text-xs">&copy; {new Date().getFullYear()} SwimDesigners. All rights reserved.</div>
    </footer>
  );
};

export default Footer; 