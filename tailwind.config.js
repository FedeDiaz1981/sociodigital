/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(255,255,255,0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(255,255,255,0.8)' },
        },
      },
      animation: {
        glow: 'glow 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
