// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.
import path from 'node:path';
// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // dist: '../xxx',  // setting build output directory
  devOptions: {
    // hostname: '0.0.0.0',   // share your development progress on the local network or check out the app from a phone
    // hostname: 'localhost',  // The hostname to run the dev server on.
    // port: 3030,             // The port to run the dev server on.
    tailwindConfig: './tailwind.config.js', // Path to tailwind.config.js if used, e.g. './tailwind.config.js'
  },
  // Enable the Preact renderer to support Preact JSX components.
  renderers: ['@astrojs/renderer-preact'],
  vite: {
    resolve: {
      alias: {
        $src: path.resolve('./src'),
        $components: path.resolve('./src/components'),
        $layouts: path.resolve('./src/layouts'),
        $utils: path.resolve('./src/utils'),
      },
    },  
  },
});
