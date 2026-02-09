export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Bebas Neue', 'sans-serif'],
        'sans': ['Bebas Neue', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.15em',
        'editorial': '0.05em',
      },
      width: {
        '112': '28rem',
        '128': '32rem',
        '140': '36rem',
        '152': '40rem',
      },
      height: {
        '112': '28rem',
        '128': '32rem',
        '140': '36rem',
        '152': '40rem',
      },
    },
  },
  plugins: [],
};