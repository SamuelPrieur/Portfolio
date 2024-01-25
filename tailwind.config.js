/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 5px 2px -3px rgba(0,0,0,0.2)",
      },
      screens: {
        xsm: "350px",
      },
      fontFamily: {
        text: ["text", "sans-serif"],
      },
      backgroundImage: {
        "noise-pattern": 'url("../assets/noise.png")',
        pc: 'url("../assets/pc.svg")',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        principal: "#1E1E1E",
        secondary: "#292929",
        important: "#e45b54" /* "#b48cf5" */,
        border: "#353535",
        text: "#F2F2F2",
        cube: "#19376D",
        blue: {
          950: "#0B2447",
        },
      },
    },
  },
  plugins: [],
};
