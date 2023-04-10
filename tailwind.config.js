/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary-orange': 'hsl(26, 100%, 55%)', //#FF6B6B
        'primary-pale-orange': 'hsl(25, 100%, 94%)', //#FFEDEE
        'neutral-very-dark-blue': 'hsl(220, 13%, 13%)', //#1F2937
        'neutral-dark-grayish-blue': 'hsl(219, 9%, 45%)', //#6E8098
        'neutral-grayish-blue': 'hsl(220, 14%, 75%)', //#BDC2C9
        'neutral-light-grayish-blue': 'hsl(223, 64%, 98%)', //#F3F4F6
        'neutral-greyish-white': '#F6F8FD',
        'neutral-white': 'hsl(0, 0%, 100%)', //#FFFFFF
        'neutral-black': 'rgba(0, 0, 0, 0.75)', //#000000
      },
      colors: {
        'primary-orange': 'hsl(26, 100%, 55%)',
        'primary-pale-orange': 'hsl(25, 100%, 94%)',
        'neutral-very-dark-blue': 'hsl(220, 13%, 13%)',
        'neutral-dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'neutral-grayish-blue': 'hsl(220, 14%, 75%)',
        'neutral-light-grayish-blue': 'hsl(223, 64%, 98%)',
        'neutral-white': 'hsl(0, 0%, 100%)',
        'neutral-black': 'rgba(0, 0, 0, 0.75)',
      },
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
      },
      boxShadow: {
        'btn': '0 19px 25px 0 hsl(25, 100%, 85%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

