module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'lively-orange': '#FF4500',
        'sunset-orange': '#FF7043',
        'peach': '#FFCCB3',
        'ivory-white': '#FFF8E1',
        'cool-white': '#F8F9FA',
        'soft-gray': '#E0E0E0',
        'taupe': '#BDBDBD',
        'charcoal-grey': '#424242',
        'teal-blue': '#008080',
        'dark-gray': '#333',
        'light-blue': '#E0F7FA'
      },
      borderColor: theme => ({
        ...theme('colors'),
        'sunset-orange': theme('colors.sunset-orange'),
      })
    },
  },
  plugins: [],
}

