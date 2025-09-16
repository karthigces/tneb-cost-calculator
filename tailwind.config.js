/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // scan your components
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // indigo-600 vibe
        accent: "#06b6d4",  // cyan-500 vibe
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
