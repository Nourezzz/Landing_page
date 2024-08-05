module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '8xl': '6rem',
    },
    extend: {
      colors: {
        primary: '#dd7191',
        secondary: '#bcdfd1',
        tertiary: '#bacf6d',
        quarto: '#272cae',
        border: '#ffffff',
        background: '#ffffff',
        redz: '#FF0000',
      },
      animation: {
        vote: 'vote 1s ease-in-out',
      },
      keyframes: {
        vote: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(-20deg)',
          },
          '75%': {
            transform: 'rotate(30deg)',
          },
        },
      },
    },
  },
  fontFamily: {
    sans: ['Roboto', 'sans-serif'], // Aggiungi qui il tuo font
    serif: ['Merriweather', 'serif'], // Esempio di un altro font
    futura: ['Futura', 'sans-serif'],
    cursive: ['Dancing Script', 'cursive'],
  },
  clipPath: {
    'circle-50': 'circle(50% at 50% 50%)',
  },
  variants: {},
  plugins: [],
};
