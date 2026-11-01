/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        hills: {
          primary: '#1a3a4a',
          secondary: '#e8d5b7',
          accent: '#4a7c6f',
          dark: '#0d1f2a',
          warm: '#c4a882'
        }
      },
      fontFamily: {
        sans: ['Gambarino', 'General Sans', 'serif'],
        display: ['Gambarino', 'General Sans', 'serif']
      }
    }
  },
  plugins: []
}
