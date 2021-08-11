module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bgimage': "url('/images/img3.jpg')",
        'bgerror': "url('/images/error.webp')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
