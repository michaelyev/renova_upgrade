module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customGray: '#413535',
        main: '#312626',
        main1: '#F9F3F2',
        additional1: '#E6BEBD',
        additional2: '#B28A87',
        accent: '#C85048',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        darkGrotesque: ['Darker Grotesque', 'sans-serif'],
      },
      backgroundImage: {
        heroImage: "url('/images/HeroBackgroundImage.png')",
      },
      fontSize: {
        16: '16px',
        20: '20px',
        48: '48px',
        64: '64px',
        24: '24px',
        40: '40px',
      },
      fontWeight: {
        900: 900,
        700: 700,
        500: 500,
      },
    },
  },
  plugins: [],
};
