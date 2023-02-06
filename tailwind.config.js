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
    },
    screens: {
      xs: "384px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
