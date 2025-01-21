/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        prompt: ["Prompt", "sans-serif"],
      },
      colors: {
        highlight: "#FF7A00",
      },
    },
  },
  plugins: [],
};

