/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      playwrite: ['Playwrite CU', 'cursive'],
      tiroBangla: ['Tiro Bangla', 'serif']
    },
    extend: { 
      colors:{ 
        app:{ 
          primaryColor:'#16325B',
          secondaryColor:'#227B94',
        }
      },
    },
  },
  plugins: [],
}

