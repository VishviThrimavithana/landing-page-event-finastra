module.exports = {
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { 'background-position': '200% 0' },
          '100%': { 'background-position': '-200% 0' },
        },
      },
      animation: {
        shine: 'shine 3s linear infinite',
      },
    },
  },
}