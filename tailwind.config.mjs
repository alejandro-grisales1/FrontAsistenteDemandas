/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        fondo: "#012D5A",
        fondo1: "#24517E",
        fondo2: "#90ABC3",
        fondo3: "#F7F7F7",
        verde: "#4CAF50",
        rojo: "#D23E3E",
        azulOscuro: "#012D5A",
        azulClaro: "#24517E",
        azulMasClaro: "#90ABC3",
      },
    },
  },
  plugins: [],
};
