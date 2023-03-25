/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      pink: "#C93D8D",
      white: "#ffffff",
      purple: "#120227",
      purple2: "#1F0443",
      purple3: "#321655",
      gray: "#DADADA4D",
      black: "#000000",
      green: "#22EE98",
      red: "#FF1515",
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
};