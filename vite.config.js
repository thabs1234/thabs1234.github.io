/** @type {import('vite').UserConfig} */
export default {
  plugins: [require('@vitejs/plugin-react')()],
  server: {
    port: 3000,
    host: true
  }
}
