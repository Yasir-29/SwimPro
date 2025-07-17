/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#00BFFF",
        navy: "#0B1B30",
        graybg: "#F3F4F6",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
