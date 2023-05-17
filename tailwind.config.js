/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        wildJoyColorOne: "#fdfcf3",
        wildJoyColorTwo: "#102949",
        wildJoyColorThree: "#da3f24",
      },
      fontFamily: {
        display: ["Bangers", "cursive"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
