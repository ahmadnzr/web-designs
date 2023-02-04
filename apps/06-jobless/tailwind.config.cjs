/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        one: `linear-gradient(90deg, #0500FF 0.52%, #F8FB76 35.41%, #4EFF75 63.63%, #00FFD1 99.03%)`,
      },
    },
  },
  plugins: [],
};
