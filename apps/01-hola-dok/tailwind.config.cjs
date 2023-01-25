/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sansPro: ["Source Sans Pro", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
      },
      colors: {
        textDark: "#101C45",
        primary: "#203271",
      },
    },
  },
  plugins: [],
};
