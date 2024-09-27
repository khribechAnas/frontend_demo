/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        'custom-blue1': '#3DBEDD',
        'custom-blue2': '#92E9FD',
    
      },
      width: {
        '0.5': '0.125rem', // Add a custom width
        '0.1': '0.025rem',  // 0.1rem = 2.5px
        '0.05': '0.0125rem',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

