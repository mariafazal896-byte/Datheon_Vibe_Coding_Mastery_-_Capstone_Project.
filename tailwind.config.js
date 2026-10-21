/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2fb',
          100: '#d6def5',
          200: '#aebdea',
          300: '#7f97d8',
          400: '#5673c4',
          500: '#3a57a8',
          600: '#2a4183',
          700: '#1e3163',
          800: '#152449',
          900: '#0c1832',
          950: '#070f22',
        },
        electric: {
          50: '#ecf8ff',
          100: '#d2efff',
          200: '#a4e2ff',
          300: '#6bd0ff',
          400: '#2fb8ff',
          500: '#059bff',
          600: '#007ae0',
          700: '#0060b4',
          800: '#004f8f',
          900: '#033f73',
          950: '#012747',
        },
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(16, 24, 50, 0.08), 0 4px 16px -4px rgba(16, 24, 50, 0.06)',
        card: '0 4px 24px -6px rgba(16, 24, 50, 0.12), 0 2px 8px -4px rgba(16, 24, 50, 0.08)',
        glow: '0 0 0 1px rgba(5, 155, 255, 0.2), 0 8px 32px -8px rgba(5, 155, 255, 0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.8s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
