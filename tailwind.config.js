/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        enquiry:"#68E1FD",
        darkblue:"#0F98F9",
        pinkish:"#E86484",
        lightorange:"#FFE779",
      }
    },
  },
  plugins: [],
}
