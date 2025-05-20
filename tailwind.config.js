/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          /** @todo: this doesn't work, and idk why, so I added it to globals.css <insert shrug emoji> */
          handwritten: ['var(--font-rock-salt)'],
          medieval: ['var(--font-pirata-one)'],
        },
      },
      brightness: {
        25: '.25',
      },
      colors: {
        'chartreuse-yellow': {
          DEFAULT: '#D8FF00',
          50: '#F4FFB8',
          100: '#F1FFA3',
          200: '#EBFF7A',
          300: '#E4FF52',
          400: '#DEFF29',
          500: '#D8FF00',
          600: '#A8C700',
          700: '#798F00',
          800: '#495700',
          900: '#1A1F00',
          950: '#020300'
        },
        'mustard': {
          DEFAULT: '#FFE661',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFF9DB',
          300: '#FFF3B3',
          400: '#FFED8A',
          500: '#FFE661',
          600: '#FFDD29',
          700: '#F0CA00',
          800: '#B89B00',
          900: '#806C00',
          950: '#635400'
        },
      },
    },
  },
  plugins: [],
}
