/** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      // change in some style of tailwind 
      container: {
        center: true, // Center the container
        padding: '1rem', // Default padding for all screens
        screens: {
          sm: '600px', // Full width on small screens
          md: '700px', // Custom width on medium screens
          lg: '990px', // Custom width on large screens
          xl: '1050px', // Custom width on extra-large screens
          '2xl': '1200px', // Custom width on 2XL screens
        },
      },
      extend: {
        // Adding some style to my tailwind utilites
        boxShadow: {
          'nav': ' 0 1px 7px #bdbdbd ',

        },
        colors:{
          main:"rgb(94 8 255 / 73%);",
          sec : "rgb(90 80 109 / 86%);"
        },
        fontFamily:{
          rubic : "Rubik ",
        }
      },
    },
    
    plugins: [],
  }

