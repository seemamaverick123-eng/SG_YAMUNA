module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
      },

      keyframes: {
        neonBlue: {
          '0%': { textShadow: '0 0 5px #60a5fa, 0 0 10px #60a5fa' },
          '50%': { textShadow: '0 0 15px #3b82f6, 0 0 30px #3b82f6' },
          '100%': { textShadow: '0 0 5px #60a5fa, 0 0 10px #60a5fa' },
        },

        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },

      animation: {
        neonBlue: 'neonBlue 1.8s ease-in-out infinite',
        fadeUp: 'fadeUp 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
