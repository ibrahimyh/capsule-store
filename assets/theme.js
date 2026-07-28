/* Thème Tailwind partagé — doit être chargé juste après le CDN Tailwind. */
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink:    '#111111',
        paper:  '#FAF9F7',
        accent: '#C7513A',
      },
    },
  },
};
