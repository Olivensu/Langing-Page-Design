const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        "primary-500": "#1A1A1B",
    },
  },
  plugins: [
    require('daisyui'),
    flowbite.plugin(),
  ],
}
}
