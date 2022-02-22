module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu'],
        'open-sans': ['Open Sans'],
        'rozha-one': ['Rozha One']
      },
      colors: {
        'eton-blue': '#8FCB9B',
        'emerald': '#5B9279',
        'wood': '#938071',
        'wall': '#AFA798',
        'wall-soft': '#F3EDE9',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
