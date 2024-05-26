/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-facebook': '#1877F2',
        'gray-facebook':'#F0F2F5',
        'gren-facebook':'#36A428',
      },
      spacing: {
        '580': '580px',
        '380':'380px',
      }
    },
  },
  plugins: [],
}

