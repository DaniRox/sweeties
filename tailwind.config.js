/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.htmlt", "/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "mandali": ["Mandali", "sans-serif"],
        "bodoni": ["Libre Bodoni", "serif"],
      },

      fontSize: {
        h1: "30px",
        h2: "24px",
        h3: "18px",
        p1: "16px",
        p2: "14px",
      },

      colors: {
        eerie: "1F2119",
        hookers: "517664",
        tiffany: "7BC5B3",
        azure: "D6E5E3",
        french: "CACFD6",
        snow: "F0EBED",
        smoke: "F3F1F2",
      },

    },
  },
  plugins: [],
}

