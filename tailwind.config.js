module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["'Montserrat'", 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      gridColumn: ['first'],
    },
  },
  plugins: [],
};
