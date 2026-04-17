/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        hanken: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
};
