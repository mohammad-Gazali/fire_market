/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mydark: '#023047',
        myyellow: '#FFB703',
        myorange: '#FB8500',
        myblue: '#219EBC',
        mylightblue: '#8ECAE6'
      },
    },
  },
  plugins: [],
}
