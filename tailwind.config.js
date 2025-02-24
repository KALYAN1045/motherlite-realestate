/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          gold: '#C6A87D',
        },
        secondary: {
          DEFAULT: '#f5f5f5',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};