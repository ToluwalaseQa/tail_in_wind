/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'slightly-red': '#ffcccc', // Slightly red
        'very-light-pink': '#fff0f0', // Very light pink
      },
    },
  },
  plugins: [],
};

