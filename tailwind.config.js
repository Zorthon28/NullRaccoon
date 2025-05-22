module.exports = {
  theme: {
    extend: {
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.2' },
          '50%': { transform: 'translateY(-20px)', opacity: '0.4' },
        },
      },
    },
  },
}
