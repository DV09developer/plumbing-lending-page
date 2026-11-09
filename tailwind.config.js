/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#243B53',
          900: '#102A43',
          950: '#0A1C2E',
        },
        brand: {
          primary: '#102A43',
          secondary: '#1677C8',
          secondaryHover: '#1262A6',
          aqua: '#24B8C7',
          aquaDark: '#1CA1AF',
          aquaLight: '#E8F9FB',
          bg: '#F5F9FC',
          surface: '#FFFFFF',
          text: '#172B3A',
          muted: '#627789',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(16, 42, 67, 0.06)',
        'card': '0 10px 30px -4px rgba(16, 42, 67, 0.08), 0 4px 12px -2px rgba(16, 42, 67, 0.04)',
        'card-hover': '0 20px 35px -5px rgba(16, 42, 67, 0.12), 0 8px 16px -3px rgba(16, 42, 67, 0.06)',
        'elevated': '0 25px 50px -12px rgba(16, 42, 67, 0.18)',
      },
    },
  },
  plugins: [],
};

