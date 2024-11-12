import daisyui from "./node_modules/daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        check: {
          100: `#6148FF`,
        },
        darkblue: "#6148FF",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [daisyui],
};
