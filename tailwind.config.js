/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mexico-pink": "#E4007C", // Rosa mexicano
        "mexico-yellow": "#FFD700", // Amarillo cempasúchil
        "mexico-blue": "#005A9C", // Azul talavera
        "mexico-clay": "#B54B26", // Rojo arcilla/ladrillo
        "off-white": "#F9FAFB",
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
