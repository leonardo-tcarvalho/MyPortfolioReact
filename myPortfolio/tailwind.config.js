/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#e11d48', // Cor principal (rosa/vermelho)
          hover: '#be123c', // Tom mais escuro para hover
          light: '#fecdd3', // Versão clara para contraste
        }
      },
      gridTemplateColumns: {
        "1/4": "1fr 4fr"
      },
      borderWidth: {
        1: "1px"
      },
      boxShadow: {
        5: "0px 0px 2px black",
        10: "0px 0px 10px black"
      },
      dropShadow: {
        10: "0px 0px 5px #000"
      },
      borderRadius: {
        "2.5xl": "1.25rem"
      }
    },
  },
  plugins: [],
}