module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#339DDA", // Blue
        secondary: "oklch(44.6% 0.043 257.281)",
        dark: "#0f172a", // Dark
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-stroke": {
          "-webkit-text-stroke": "1px black",
        },
        ".text-stroke-white": {
          "-webkit-text-stroke": "1px white",
        },
        ".text-stroke-2": {
          "-webkit-text-stroke": "2px black",
        },
        ".text-stroke-primary": {
          "-webkit-text-stroke": "1px #339DDA",
        },
      });
    },
  ],
};
