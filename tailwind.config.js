/** @type {import('tailwindcss').Config} */
// Akoi brand tokens — the only colors and fonts allowed (see brand/tokens.css)
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#10233A",
        cream: "#F6F4EF",
        accent: "#8EBBE6",
        sand: "#EAE6DC",
        slate: "#4A5D70",
        "accent-dark": "#2F5F8F",
        "blue-mid": "#2B4A6B",
        mist: "#DCE3EA",
        line: "#E2DED5",
      },
      fontFamily: {
        heading: ['"Noto Kufi Arabic"', "sans-serif"],
        body: ['"Noto Sans Arabic"', "sans-serif"],
      },
      borderRadius: { brand: "14px" },
      // Sorani headings need taller lines than Tailwind's defaults (brand: 1.35–1.4)
      fontSize: {
        "2xl": ["1.5rem", { lineHeight: "1.4" }],
        "3xl": ["1.875rem", { lineHeight: "1.4" }],
        "4xl": ["2.25rem", { lineHeight: "1.4" }],
        "5xl": ["3rem", { lineHeight: "1.4" }],
        "6xl": ["3.75rem", { lineHeight: "1.4" }],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
