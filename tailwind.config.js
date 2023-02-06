/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
      colors: {
        primary_light: "#2ED7FE",
        primary_dark: "#001464",
      },
      boxShadow: {
        center: "0px 0px 50px -6px rgba(0,0,0,0.5)",
      },
    },
    screens: {
      xs: "384px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
