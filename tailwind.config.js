/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cursor: {
          black: '#07080b',
          charcoal: '#0d1017',
          card: '#11151f',
          border: '#252b3a',
          muted: '#9aa4b2',
          purple: '#a78bfa',
          blue: '#60a5fa',
        },
      },
      boxShadow: {
        soft: '0 24px 80px rgba(0, 0, 0, 0.28)',
      },
      fontFamily: {
        sans: [
          'Inter',
          'Geist',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
