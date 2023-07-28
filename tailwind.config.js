/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      "hero-mobile": "url('/images/hero-mobile.jpeg')", // example
    },
    colors: {
      "text-primary": "#ffffff", // example
    },
    extend: {
      spacing: {},

      borderRadius: {
        48: "48px",
      },
      fontSize: {
        13: "13px",
        32: "32px",
        64: "64px",
      },
      lineHeight: {
        105: "105%",
        130: "130%",
      },
      fontWeight: {
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
      },

      screens: {
        "max-mobile": { max: "767px" },
        // => @media (max-width: 767px) { ... }
        "max-tablet": { max: "1339px" },
        // => @media (max-width: 1339px) { ... }
        "max-laptop": { max: "1919px" },
        // => @media (max-width: 1919px) { ... }
        tablet: "768px",
        // => @media (min-width: 768px) { ... }
        laptop: "1440px",
        // => @media (min-width: 1440px) { ... }
        desktop: "1920px",
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
  plugins: [],
};
