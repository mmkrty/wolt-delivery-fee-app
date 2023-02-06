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
    },
    screens: {
      xs: "384px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
