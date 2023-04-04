// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './public/index.html',
  'index.html',
  "./**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [ require("daisyui")],
}
