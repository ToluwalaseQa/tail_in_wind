/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./tail_002/*.html'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'], // Add Lato font
      },
      boxShadow: {
        'red-custom': '-3px 0 1px rgba(202, 2, 2, 0.722)', // Red shadow
        'green-custom': '-3px 0 1px green', // Green shadow
      },
      borderWidth: {
        '4-dashed': '4px', // For dashed border
      },
    },
  },
  plugins: [],
};
