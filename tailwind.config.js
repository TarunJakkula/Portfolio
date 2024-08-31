/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-vertical": {
          "writing-mode": "vertical-rl",
          "text-orientation": "mixed",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
