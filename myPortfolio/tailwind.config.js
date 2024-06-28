/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "1/4": "1fr 4fr"
      },
      borderWidth: {
        1: "1px"
      },
      boxShadow: {
        10: "0px 0px 20px black"
      },
      dropShadow: {
        10: "-1px -5px 1px #22c55e"
      },
      borderRadius: {
        "2.5xl": "1.25rem"
      }
    },
  },
  plugins: [],
}