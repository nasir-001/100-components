module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'layout2firstcard': '#e4e6f6',
        'layout2secondcard': '#f6e4f5',
        'layout2thirdcard': '#fae5e5',
        'layout2firstborder': '#d9dbf3',
        'layout2secondborder': '#f3d9ed',
        'layout2thirdborder': '#f7dede',
      },
      // eslint-disable-next-line no-unused-vars
      backgroundImage: theme => ({
        'soil-background': "url('/img/pexels-mitchell-luo-3707669.jpg')"
      }),
      spacing: {
        88: '22rem',
        144: '36rem',
        124: '32rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
