/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sgInter: ["Inter", "sans-serif"],
      sgSourcePro: ["Source Sans Pro", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "rgba(255, 255, 255, 0.6)",
        title: "#ffff",
      },
    },
  },
  plugins: [],
};
