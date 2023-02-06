/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:{
      backgroundImage:{
        "radial-gradient": `radial-gradient(50% 50% at 50% 50%, #3A3AF4 0%, rgba(58, 58, 244, 0) 100%)`
      }
    }
  },
  plugins: [],
};
