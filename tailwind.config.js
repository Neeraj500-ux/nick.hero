/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: { ink: '#000000', brand: { DEFAULT: '#1d4ed8', light: '#3b82f6', sky: '#dbeafe' }, sun: { DEFAULT: '#facc15', deep: '#eab308' } },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        drift: { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(30px,-20px) scale(1.08)' } },
        pop: { '0%': { opacity: 0, transform: 'translateY(16px) scale(.97)' }, '100%': { opacity: 1, transform: 'none' } },
        slide: { '0%': { transform: 'translateX(100%)' }, '100%': { transform: 'none' } },
      },
      animation: { float: 'float 6s ease-in-out infinite', drift: 'drift 14s ease-in-out infinite', pop: 'pop .35s ease-out both', slide: 'slide .4s cubic-bezier(.2,.8,.2,1) both' },
    },
  },
  plugins: [],
}
