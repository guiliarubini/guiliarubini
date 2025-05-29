export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        '112': '28rem', // Adds w-112 class (448px)
        '128': '32rem', // Adds w-128 class (512px)
        '140': '36rem', // Adds w-140 class (576px)
        '152': '40rem', // Adds w-152 class (640px)
      },
      height: {
        '112': '28rem', // Adds h-112 class (448px)
        '128': '32rem', // Adds h-128 class (512px)
        '140': '36rem', // Adds h-140 class (576px)
        '152': '40rem', // Adds h-152 class (640px)
      },
    },
  },
  plugins: [],
};