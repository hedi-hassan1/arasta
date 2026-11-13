/** @type {import('tailwindcss').Config} */
// Arasta brand tokens — the only colors and fonts allowed (see brand/tokens.css)
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#10233A",
        cream: "#F6F4EF",
        amber: "#E8A33D",
        sand: "#EAE6DC",
        slate: "#4A5D70",
        "amber-dark": "#8A5A12",
        "blue-mid": "#2B4A6B",
        mist: "#DCE3EA",
        line: "#E2DED5",
      },
      fontFamily: {
        heading: ['"Noto Kufi Arabic"', "sans-serif"],
        body: ['"Noto Sans Arabic"', "sans-serif"],
      },
      borderRadius: { brand: "14px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
