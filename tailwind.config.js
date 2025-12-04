/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#034F3B",
        secondary: "#FE9A37",
        background: "#FFF7DF"
      }
    },
  },
  plugins: [],
}

