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
        'layout4cardbackground': '#f7f8fb',
        'layout4cardborder': '#ebeef5',
        'layout5backgroundcolor': '#2a344a',
        'layout5cardcolor': '#232c3e',
        'layout5cancelcolor': '#2a344a',
        'layout5focuscolor': '#283348',
        'layout6backcardcolor': '#6d6de6'
      },
      // eslint-disable-next-line no-unused-vars
      backgroundImage: theme => ({
        'soil-background': "url('/img/pexels-mitchell-luo-3707669.jpg')"
      }),
      spacing: {
        88: '22rem',
        108: '27rem',
        124: '32rem',
        144: '36rem',
      },
      width: {
        '2/7': '28.333333%',
        '4/7': '60%',
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
