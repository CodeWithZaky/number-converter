/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        retroWhite: "#E4D8B4",
        retroBrown: "#2E282A",
        retroBlue: "#A4CBB4",
        retroPink: "#EF9995",
        retroOrange: "#DC8850",
      },
    },
  },
  plugins: [require("daisyui")],
};
