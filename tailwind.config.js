/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { 
    colors: {
      'customGreen': '#00df9a',
    }},
  },
  plugins: [],

}
