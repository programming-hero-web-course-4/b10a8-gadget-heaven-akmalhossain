/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#9538E2',
        dark:'#09080F',
        dark60:'rgba(9, 8, 15, 0.6)',
        dark80:'rgba(9, 8, 15, 0.8)',
        dark05:'rgba(9, 8, 15, 0.05)',
        white30:'rgba(255, 255, 255, 0.3)'
        
      },
      fontFamily: {
        sora: 'Sora',
        inter: 'Inter',
    }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

