/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sansPro: ["Source Sans Pro", "sans-serif"],
    },
    backgroundImage: {
      "gradient-primary": `linear-gradient(180deg, #192653 0%, #131D41 100%)`,
    },
  },
  plugins: [],
};
