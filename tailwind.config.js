/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'full-shadow': 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        'full-shadow-2': 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
        'full-shadow-dark':'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;',
      },
      colors:{
        enquiry:"#68E1FD",
        darkblue:"#0F98F9",
        pinkish:"#E86484",
        lightorange:"#FFE779",
        lightestblue:"#E8F9FF",
        lighterblue:"#74DDFD",
        lightblue:"#0192F9",

      }
    },
  },
  plugins: [],
}
