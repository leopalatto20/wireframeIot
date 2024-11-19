/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
        colors: {
            'grisClaro': 'rgb(179, 174, 173)',
            'grisOscuro': 'rgb(84, 83, 83)'
        }
    },
  },
  plugins: [],
}

