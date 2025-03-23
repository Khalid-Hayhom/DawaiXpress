
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
          50: '#F2EEFF',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        indigo: {
          600: '#4F46E5',
        },
      },
    },
  },
  plugins: [],
}
