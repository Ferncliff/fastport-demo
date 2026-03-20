/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fastport': {
          primary: '#0066CC',
          secondary: '#00A86B',
          accent: '#FFB800',
        }
      }
    },
  },
  plugins: [],
}
