const production = !process.env.ROLLUP_WATCH;

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
  },
  theme: {
    extend: {
      colors: {
        orange: {
          500: "#ff3e00",
        },
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('https://www.vagabondosrest.com/wp-content/uploads/2011/12/vagabondos_restaurant_bg_1jpg.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
       }),
    },
  },
};