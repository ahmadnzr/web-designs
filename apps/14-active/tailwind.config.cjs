/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-10": "#A394FF",
        "primary-20": "#7761FF",
        "primary-30": "#4D30FF",
        "primary-40": "#2300FA",
        "primary-50": "#1C00C7",
        "neutral-10": "#FFF",
        "neutral-20": "#DDD",
        "neutral-30": "#D9D9D9",
        "neutral-40": "#989898",
        "neutral-50": "#414141",
        "neutral-60": "#000",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
