module.exports = {
  // mode: 'jit',
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
  ],
  corePlugins: {
    preflight: false,
  },
};
