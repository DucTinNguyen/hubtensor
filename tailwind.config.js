const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-sidebar': 'linear-gradient(90deg, rgba(151, 71, 255, 0.20) 0%, rgba(91, 43, 153, 0.14) 100%)',
        'gradient-border': 'linear-gradient(180deg, #57576F -16.81%, #6C3BEF 118.51%)',
        'gradient-card': 'linear-gradient(180deg, #070814 0%, #080518 48.66%, #140734 100%)'
      },
      fontFamily: {
        'jetbrain': ['JetBrain', 'sans-serif']
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
