/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xxs: '320px',
      // => @media (min-width: 320px) { ... }

      xs: '428px',
      // => @media (min-width: 428px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      Sugarpunch: ['Sugarpunch DEMO', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif'],
      Roboto: ['Roboto Serif', 'sans-serif'],
      RobotoSlab: ['Roboto Slab', 'sans-serif'],
    },
    extend: {
      animation: {
        typing: 'blink 1s linear infinite',
        moveup: 'up 2s ease-in-out infinite alternate',
      },
      keyframes: {
        blink: {
          '0%,100%': { 'border-right-color': '0adea3' },
          '50%': { 'border-right-color': 'transparent' },
        },
        up: {
          to: {
            transform: 'translateY(20px)',
          },
        },
      },
      colors: {
        dark: '#000',
        light: '#f5f5f5',
        primary: '#db2777', // 240,86,199
        primaryDark: '#2563eb', // 80,230,217
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
