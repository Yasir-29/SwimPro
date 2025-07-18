import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
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
    <nav className="bg-white text-[#0B1B30] shadow-md fixed top-0 left-0 right-0 z-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight text-[#0B1B30]">
          SwimDesigners
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-[#00BFFF] transition"
          >
            Home
          </Link>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollOrNavigate("about");
            }}
            className="hover:text-[#00BFFF] transition"
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              scrollOrNavigate("services");
            }}
            className="hover:text-[#00BFFF] transition"
          >
            Services
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollOrNavigate("projects");
            }}
            className="hover:text-[#00BFFF] transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollOrNavigate("contact");
            }}
            className="hover:text-[#00BFFF] transition"
          >
            Contact
          </a>
          <Link
            to="/products"
            className="hover:text-[#00BFFF] transition"
          >
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
