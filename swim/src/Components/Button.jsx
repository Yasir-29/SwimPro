import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`bg-[#00BFFF] text-white rounded-xl px-6 py-2 font-semibold shadow-lg hover:bg-[#0099cc] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 