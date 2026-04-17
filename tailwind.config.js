/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        hanken: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'sm': ['16px', '20px'],
        'lg': ['20px' , '28px'],
      },
    },
  },
};
