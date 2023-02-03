/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "rgba(53, 57, 152, 0.01)",
      },
      backgroundImage: {
        bgImage: `conic-gradient(from 190.41deg at 57.15% 45.7%, #353998 0deg, #27637D 247.5deg, #27637D 360deg)`,
      },
    },
  },
  plugins: [],
};
