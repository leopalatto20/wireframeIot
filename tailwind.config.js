/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
        colors: {
            'azulTec': '#003B5C',
            'blanco': '#FFFFFF',
            'grisClaro': '#333333',
            'negroSuave': '#1C1C1C',
            'azulClaro': '#c4daf2',
        }
    },
  },
  plugins: [],
}

