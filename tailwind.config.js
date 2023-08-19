/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        lg: { max: '1439.99px' },
        md: { max: '992.99px' },
        sm: { max: '767.99px' },
        xs: { max: '479.99px' },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        heroGradient: 'linear-gradient(110deg, #4923B4 0%, #E878CF 100%)',
      },
      colors: {
        blueViolet: '#5027B5',
        lightGrey: '#666768',
      },
    },
  },
  plugins: [],
};
