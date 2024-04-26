/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{jsx,js}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors:{
        bgPrimary:'#ADD8E6',
        bgSecondary:'#FFC0CB',
        btnColor:'#E5E4E2',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      animation:{
        blob:"blob 7s infinite"
      }
    },
  },
  plugins: [],
}

