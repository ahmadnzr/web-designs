/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purpleLight: "#7C67FE",
        purpleDark: "#160E4B",
      },
      backgroundImage: {
        "gradient-primary": `conic-gradient(from 180deg at 50% 50%, #5B41FB 0deg, #4456F8 176.25deg, #53ACFF 260.62deg, #573DFB 360deg)`,
      },
    },
  },
  plugins: [],
};
