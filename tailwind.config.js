/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'p-2',
    
    // Add anything you might use dynamically
  ],
  theme: {
    extend: {
      screens: {
        'sm': '370px',  // Small (default)
        'md': '640px',  // Medium (default)
        'lg': '1024px', // Large (default)
        'xl': '1280px', // Extra large (default)
      },
      colors: {
        MarineBlue: "hsl(213, 96%, 18%)", 
        PurplishBlue: "hsl(243, 100%, 62%)", 
        PastelBlue: "hsl(228, 100%, 84%)", 
        LightBlue: "hsl(206, 94%, 87%)",
        StrawberryRed: "hsl(354, 84%, 57%)",
        CoolGray: "hsl(231, 11%, 63%)",
        LightGray: "hsl(229, 24%, 87%)",
        Magnolia: "hsl(217, 100%, 97%)",
        Alabaster: "hsl(231, 100%, 99%)"
      }, 
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        bounceSlow: 'bounceSlow 2s infinite',
        spinFast: 'spinFast 0.5s linear infinite',
        slideIn: 'slideIn 0.5s ease-out',
        slideOut: 'slideOut 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(0)' },
        },
        spinFast: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

