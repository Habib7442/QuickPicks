/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          '500': '#8B5CF6',
        },
        pink: {
          '500': '#EC4899',
        },
        red: {
          '500': '#EF4444',
        },
        yellow: {
          '300': '#FBBF24',
        },
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}