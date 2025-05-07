module.exports = {
  darkMode: 'class', // Must be 'class' for manual toggling
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out forwards',
        glow: 'glow 1.5s ease-in-out infinite', // Custom glow animation
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        glow: {
          '0%': {
            boxShadow: '0 0 10px rgba(128, 0, 128, 0.5), 0 0 20px rgba(128, 0, 128, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(128, 0, 128, 0.7), 0 0 30px rgba(128, 0, 128, 0.7)',
          },
          '100%': {
            boxShadow: '0 0 10px rgba(128, 0, 128, 0.5), 0 0 20px rgba(128, 0, 128, 0.5)',
          },
        },
      },
      colors: {
        purple: {
          50: '#f7e8ff',
          100: '#f2d3ff',
          200: '#e5a6ff',
          300: '#d17aff',
          400: '#b94cff',
          500: '#9f1eff',
          600: '#7f00e6',
          700: '#5a00b3',
          800: '#3d007f',
          900: '#27004c',
        },
      },
      spacing: {
        28: '7rem',
      },
      boxShadow: {
        'md-glow': '0 4px 10px rgba(128, 0, 128, 0.2), 0 0 20px rgba(128, 0, 128, 0.3)',
      },
      fontSize: {
        'xxl': '1.75rem',
      },
    },
  },
  plugins: [],
}
