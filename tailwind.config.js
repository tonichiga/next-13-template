/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {},
      transitionTimingFunction: {
        accordion: "cubic-bezier(0.17,0.67,0.83,0.67) 1s linear",
      },

      keyframes: {
        dropdown: {
          "0%": { transform: "translateY(-25%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        swipe: {
          "0%": { transform: "translateX(120%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        dropdown: "dropdown 0.2s ease-in-out",
        fade: "fade 0.5s ease-in-out",
        swipe: "swipe 0.5s ease-in-out",
      },

      boxShadow: {
        taste_card: "0px 3px 33.75px 0px #7C7C7C40",
        dropdown: "0px 4px 45px 0px rgba(180, 180, 180, 0.25)",
      },

      borderRadius: {
        48: "48px", // example
        incoming: "3px 0px 0px 3px", // example
        outcoming: "13.8377px 0px 13.8377px 13.8377px", // example
      },
      fontSize: {
        13: "13px", // example
      },
      lineHeight: {
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
        additional: "1017px",
      },
    },
  },
  plugins: [],
};
