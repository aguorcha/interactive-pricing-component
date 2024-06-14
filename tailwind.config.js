/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue, js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      colors: {
        'soft-cyan': 'hsl(174, 77%, 80%)',
        'strong-cyan': 'hsl(174, 86%, 45%)',
        'light-grayish-red': 'hsl(14, 92%, 95%)',
        'light-red': 'hsl(15, 100%, 70%)',
        'pale-blue': 'hsl(226, 100%, 87%)',
        'white': 'hsl(0, 0%, 100%)',
        'very-pale-blue': 'hsl(230, 100%, 99%)',
        'light-grayish-blue-slider': 'hsl(224, 65%, 95%)',
        'light-grayish-blue-toggle': 'hsl(223, 50%, 87%)',
        'grayish-blue': 'hsl(225, 20%, 60%)',
        'dark-desaturated-blue': 'hsl(227, 35%, 25%)',
      },
      backgroundColor: {
        'custom-bg': "url('/assets/images/pattern-circles.svg')",
      },
      borderRadius: {
        '6': '6px',
      },
      cursor: {
        grabbing: 'grabbing',
      },
    },
  },
  variants: {
    extend: {
      cursor: ['active'],
    }
  },
  plugins: [],
}

