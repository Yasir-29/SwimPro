/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
    bebas: ['"Bebas Neue"', 'cursive'],
    inter: ['Inter', 'sans-serif'],
    poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: "#00BFFF",
          50: "#E6F7FF",
          100: "#CCF0FF",
          200: "#99E0FF",
          300: "#66D1FF",
          400: "#33C1FF",
          500: "#00BFFF",
          600: "#0099CC",
          700: "#007399",
          800: "#004D66",
          900: "#002633",
        },
        navy: {
          DEFAULT: "#0B1B30",
          50: "#F0F2F5",
          100: "#E1E5EB",
          200: "#C3CBD7",
          300: "#A5B1C3",
          400: "#8797AF",
          500: "#697D9B",
          600: "#54647C",
          700: "#3F4B5D",
          800: "#2A323E",
          900: "#0B1B30",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
