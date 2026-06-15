/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: "09090B",
        cyberpurple: '#8B5CF6',
        neoncyan: '#22D3EE',
        glass: 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


