/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'main-background': 'var(--main-background)',
        'fourth-color': 'var(--fourth-color)',
        'text-color': 'var(--text-color)',
        'sec-color': 'var(--sec-color)',
        'third-color': 'var(--third-color)',
        'rare-color': 'var(--rare-color)',
        'scrollbar-color': 'var(--scrollbar-color)'
      },
      transitionProperty: { 
        'width': 'width',
        'bgColor' : 'backgroundColor'
      },
      boxShadow: { 
        'card' : 'var(--main-gray) 0px 5px 15px'
      },
      backgroundImage : {
        rainbow : "url('/src/assets/rainbow background.gif')"
      },
      keyframes: { 
        "rainbowAnimateColors" : {
          '0%' : {'color': 'green'},
          '50%' : {'color': 'blue'},
          '100%' : {'color': 'red'},
        },
        


        breathing : {
          '0%' : {
            '-webkit-transform': 'scale(0.9)',
            '-ms-transform': 'scale(0.9)',
            'transform': 'scale(0.9)',
          },

          '25%' : {
            '-webkit-transform': 'scale(1.2)',
            '-ms-transform': 'scale(1.2)',
            'transform': 'scale(1.2)',
          },

          '60%' : {
            '-webkit-transform': 'scale(0.9)',
            '-ms-transform': 'scale(0.9)',
            'transform': 'scale(0.9)',
          },

          '100%' : {
            '-webkit-transform': 'scale(0.9)',
            "-ms-transform": 'scale(0.9)',
            'transform': 'scale(0.9)',
          }
        },
        
      },
      animation : { 
        "rainbowAnimateColors" : 'rainbowAnimateColors 2s linear infinite',
        'breathing' : 'breathing 2s linear infinite'
        
      },
      cursor :  {
        'lobster' : "url('/src/assets/lobster-normal.png'), auto",
        'lobsterHover' : `url('/src/assets/lobster-hover 1.png'), auto`
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
}

