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

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
    { label: "Products", to: "/products" },
  ];

  const linkBase =
    "relative inline-block px-3 py-1 text-white transition-all duration-300 hover:text-primary";
  const underline =
    "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300";

  return (
    <nav className="bg-black/90 backdrop-blur-sm shadow-md fixed top-0 left-0 right-0 z-50 border-b border-gray-800 font-bebas">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-3xl font-bold tracking-wide text-white uppercase"
        >
          Swim Designers
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-lg font-normal items-center">
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => {
                  if (link.to === "/")
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`${linkBase} ${underline}`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollOrNavigate(link.id);
                }}
                className={`${linkBase} ${underline}`}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Mobile Nav Placeholder */}
        <div className="md:hidden">
          {/* You can add a hamburger menu here if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
