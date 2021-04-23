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
        'layout6backcardcolor': '#6d6de6',
        'layout7backgroundColor': '#e9ebf9',
        'layout7firstCircle': '#f9e9e9',
        'layout7firstText': '#9e6363',
        'layout7secondCircle': '#e9ebf9',
        'layout7secondText': '#655997',
        'layout7thirdCircle': '#e9f9ee',
        'layout7thirdText': '#599787',
        'layout7fourthCircle': '#e9f3f9',
        'layout7fourthText': '#5d659a',
        'layout7linkTextColor': '#816dee',
        'layout8backgroundColor': '#151e33',
        'layout8secondbackgroundColor': '#1b263f',
        'layout8backgroundCardColor': '#1f2d4c',
        'layout8textColor': '#c7768f',
        'layout8inputBorderColor': '#33456b',
        'layout8buttonColor': '#e3627f',
        'layout8smallCardColor': '#202e4e',
        'layout9backgroundColor': '#dadde1',
        'layout9cardBorderColor': '#f2f2f2',
        'layout10backgroundColor': '#023d52'
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
        164: '40rem',
        170: '42rem'
      },
      width: {
        '2/7': '28.333333%',
        '4/7': '60%',
        '3/7': '40%',
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
