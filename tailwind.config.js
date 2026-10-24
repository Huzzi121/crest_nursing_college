/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crest: {
          bg: '#FFFFFF',
          bgAlt: '#F4F9F8',
          teal: '#086B68',
          tealDark: '#064e4c',
          tealSecondary: '#0D7772',
          turquoise: '#13A6A0',
          turquoiseLight: '#E6F7F6',
          gold: '#F5BC28',
          goldDark: '#D49D14',
          goldLight: '#FEF8E8',
          heading: '#103A43',
          body: '#53676A',
          border: '#DFEAE8',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'crest-sm': '0 2px 8px -2px rgba(8, 107, 104, 0.08)',
        'crest-md': '0 8px 24px -4px rgba(8, 107, 104, 0.12)',
        'crest-lg': '0 20px 40px -8px rgba(8, 107, 104, 0.16)',
        'crest-glow': '0 0 25px rgba(19, 166, 160, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
