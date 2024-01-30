/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        xsm: "280px",
        lg: "1250px",
      },
      fontFamily: {
        text: ["text", "sans-serif"],
        competence: ["competence", "sans-serif"],
      },
      backgroundImage: {
        "noise-pattern": 'url("../assets/noise.webp")',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        Background: "#000000",
        Block: "#131315",
        Highlights: "#FB8154" /* 7A85E9 */,
        Text: "#F2F2F2",
        SmText: "#7B7B7B",
      },
    },
  },
  plugins: [],
};
