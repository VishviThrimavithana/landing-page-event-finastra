// tailwind.config.js
module.exports = {
  // ... your existing config
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '100%' },
          '100%': { backgroundPosition: '-100%' },
        },
      },
      animation: {
        shine: 'shine var(--shine-speed, 3s) linear infinite',
      },
    },
  },
}