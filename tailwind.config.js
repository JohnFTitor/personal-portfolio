module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  important: '#root',
  theme: {
    extend: {
      fontFamily: {
        display: ['IBM Plex Mono', 'Menlo', 'monospace'],
        body: ['IBM Plex Mono', 'Menlo', 'monospace'],
      },
      spacing: {
        128: '32rem',
      },
      rotate: {
        40: '40deg',
        20: '20deg',
        15: '15deg',
        10: '10deg',
      },
      borderRadius: {
        large: '50px',
      },
      gridTemplateRows: {
        auto_1fr: 'auto 1fr',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slide_left: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slide_out: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slide_right: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slide_up: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        slide_down: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        slide_up_half: {
          '0%': { transform: 'translateY(150%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        fade: 'fade 1s cubic-bezier(0.2, 0.85, 0.9, 1)',
        slow_fade: 'fade 2s cubic-bezier(0.2, 0.4, 0.8, 1)',
        slide_left: 'slide_left 1s cubic-bezier(0.2, 0.85, 0.9, 1)',
        slide_up: 'slide_up 1s cubic-bezier(0.2, 0.85, 0.9, 1)',
        slide_down: 'slide_down 1s cubic-bezier(0.2, 0.85, 0.9, 1)',
        slide_right: 'slide_right 1s cubic-bezier(0.2, 0.85, 0.9, 1)',
        slide_up_half: 'slide_up_half 1s cubic-bezier(0.2, 0.7, 0.3, 1)',
        slide_in: 'slide_left 1s cubic-bezier(0.2, 1, 0.3, 1)',
        slide_out: 'slide_out 1s cubic-bezier(0.2, 1, 0.3, 1)',
      },
      colors: {
        primary: {
          50: '#e9eff6',
          100: '#bdcfe5',
          200: '#92afd3',
          300: '#668fc1',
          400: '#3a6fb0',
          500: '#245FA7',
          600: '#205696',
          700: '#194375',
          800: '#123054',
          900: '#0b1c32',
          1000: '#040911',
        },
        secondary: {
          50: '#FDFCFF',
          100: '#EBF1FF',
          200: '#D9E3F8',
          300: '#BDC7DC',
          400: '#A1ABC0',
          500: '#8791A5',
          600: '#6E788A',
          700: '#555F71',
          800: '#3D4758',
          900: '#273141',
          1000: '#121C2B',
        },
        tertiary: {
          50: '#f0f2f3',
          100: '#d3d9db',
          200: '#b5bfc3',
          300: '#97a5ab',
          400: '#7a8c93',
          500: '#6B7F87',
          600: '#60727a',
          700: '#4b595f',
          800: '#364044',
          900: '#202628',
          1000: '#0b0d0d',
        },
      },
    },
  },
  plugins: [],
};
