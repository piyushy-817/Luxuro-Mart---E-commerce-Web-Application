/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "50%": { "border-color": "transparent" },
        },
      },
      animation: {
        typing: "typing 4s steps(12, end) infinite, blink 0.5s step-end infinite",
      },
    },
  

      fontFamily: {
        
        arvo: ['Arvo', 'serif'],
        doto: ['Doto', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        
      },
    },
  
  plugins: [],
}
