/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        paper: '#f7f3eb',
        ink: '#12253f',
        slateblue: '#2e4c70',
        accent: '#c15c34',
        mist: '#dce4ec'
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Sora', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 24px 58px -36px rgba(13, 33, 58, 0.55)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -6px, 0)' }
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translate3d(0, 18px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        reveal: 'reveal 700ms cubic-bezier(0.22, 1, 0.36, 1) both'
      }
    }
  },
  plugins: []
};
