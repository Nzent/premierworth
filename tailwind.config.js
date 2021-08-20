module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bgimage1': "url('/images/bgimg1.webp')",
        'bgimage2': "url('/images/bgimg2.webp')",
        'bgerror': "url('/images/error.webp')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}