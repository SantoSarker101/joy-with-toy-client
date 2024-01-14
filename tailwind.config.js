/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          ".btn-twitter": {
            "background-color": "#1EA1F1",
            "border-color": "#1EA1F1",
          },
          ".btn-twitter:hover": {
            "background-color": "#1C96E1",
            "border-color": "#1C96E1",
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

