/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myfont: ['fonce'],
        pp: ['pp'],
        text: ['text'],
        head: ['head'],
        poppins: ['poppins'],
        joinning: ['joinning'],
        anydore: ['anydore'],
        adrinejoin: ['adrinejoin'],
        back: ['back'],
        roxbury: ['roxbury'],
        roboto: ['roboto']
      },
      boxShadow: {
        'custom-glow': '0 0 5px rgb(219, 14, 14), 0 0 15px rgb(196, 23, 17), 0 0 30px rgb(199, 22, 16), 0 0 60px rgb(216, 19, 19)',
        'custom-glow-light': '0 0 5px rgba(219, 14, 14, 0.6), 0 0 15px rgba(196, 23, 17, 0.6), 0 0 30px rgba(199, 22, 16, 0.6), 0 0 60px rgba(216, 19, 19, 0.6)',

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: '320px',
        xls: '380px',   // Extra small screens
        sm: '460px',    // Small screens
        md: '768px',    // Medium screens
        lg: '1024px',   // Large screens
        xl: '1440px',   // Extra large screens
        '2xl': '1536px', // 2X extra large screens
        '1366': '1300px', // Custom breakpoint for 1366px screens
      },
    },
  },
  plugins: [],
};
