/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b1a',
        secondary: '#ff8c42',
        orange: {
          500: '#ff6b1a',
          600: '#e85d0f',
          700: '#d64f00',
        },
      },
    },
  },
  plugins: [],
}
