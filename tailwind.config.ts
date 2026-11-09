import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        main: '#050505',
        secondary: '#0A0D12',
        nav: '#080808',
        text: '#FFFFFF',
        secondaryText: '#E8EDF3',
        bodyText: '#A7B0BC',
        mutedText: '#737D89',
        sky: '#38BDF8',
        skyLight: '#7DD3FC',
        deepBlue: '#0284C7',
        border: '#202832',
        hover: '#101820',
        buttonText: '#050505',
      },
      boxShadow: {
        glow: '0 0 28px rgba(56, 189, 248, 0.25)',
      },
      letterSpacing: {
        nav: '0.12em',
      },
    },
  },
  plugins: [],
};

export default config;
