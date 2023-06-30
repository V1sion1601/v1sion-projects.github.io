/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#2743d2",
        subColor: "#B1A7FF",
      },
      fontFamily: {
        lobsterTwo: "Lobster Two, cursive",
        signika: "Signika Negative, sans-serif",
        gudea: "Gudea, sans-serif",
      },
    },
  },
  plugins: [],
};
