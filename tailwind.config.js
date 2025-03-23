
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./tail_002/*.html', './tail_003/*.html', './tail_004/*.html',  './otp-2/*.html'],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#F5F5F5',
        'custom-red': '#FF5634',
        'badge-red': '#E10E0E',
        'text-gray': '#6B7280',
        'text-dark': '#1F2937',
        'button-gray': '#E5E7EB',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      },
      spacing: {
        18: '4.5rem',
        96: '24rem', // For sidebar width
        '834px': '834px', // Sidebar height
        '344px': '344px', // Main menu height
        '120px': '120px', // Other links height
      },
      borderRadius: {
        '48px': '48px',
        '24px': '24px',
        '32px': '32px',
        '51.2px': '51.2px',
      },
    },
  },
  plugins: [],
};