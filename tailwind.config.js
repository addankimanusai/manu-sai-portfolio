/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          main: '#09090F',
          secondary: '#11111B',
          card: '#161624',
          cardHover: '#1c1c30'
        },
        accent: {
          purple: '#8B5CF6',
          purpleLight: '#A78BFA',
          purpleDark: '#7C3AED',
          blue: '#3B82F6',
          blueLight: '#60A5FA',
          blueDark: '#2563EB'
        },
        text: {
          main: '#F8FAFC',
          secondary: '#A1A1AA',
          muted: '#71717A'
        },
        border: {
          dark: '#29293A',
          highlight: '#3b3b52'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
