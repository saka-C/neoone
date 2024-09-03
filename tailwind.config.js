/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['generalsans-medium', 'generalsans-semibold', 'generalsans-bold', 'sans-serif'],
      },
      colors: {
        primary: {
          100: "#d2e5ff",
          200: "#a6cbff",
          300: "#79b1ff",
          400: "#4d97ff",
          500: "#207dff",
          600: "#1a64cc",
          700: "#134b99",
          800: "#0d3266",
          900: "#061933",
        },
        secondary: {
          100: "#f7ffd9",
          200: "#eeffb2",
          300: "#e6ff8c",
          400: "#ddff65",
          500: "#d5ff3f",
          600: "#aacc32",
          700: "#809926",
          800: "#556619",
          900: "#2b330d",
        },
        accent: {
          100: "#fdfbe1",
          200: "#fbf6c4",
          300: "#faf2a6",
          400: "#f8ed89",
          500: "#f6e96b",
          600: "#c5ba56",
          700: "#948c40",
          800: "#625d2b",
          900: "#312f15",
        },
        basecolor: "#fcfcfc",
        darkcolor: "#22292f"
      },
    },
  },
  plugins: [],
};
