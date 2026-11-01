/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#ecebe7",
        surface: "#e1dfd9",
        ink: "#38450f",
        muted: "#5d683a",
        accent: "#38450f",
      },
    },
  },
  plugins: [],
}
