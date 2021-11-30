# vercel deployment

with-tailwindcss-daisyui.vercel.app

# Astro custom template starter from github.com

- make code repository public 


# Astro with Tailwind

```
npm init astro -- --template garywu125/with-tailwindcss-daisyui
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github.com/garywu125/with-tailwindcss-daisyui)

Astro comes with [Tailwind](https://tailwindcss.com) support out of the box. This example showcases how to style your Astro project with Tailwind.

For complete setup instructions, please see our [Styling Guide](https://docs.astro.build/guides/styling#-tailwind).

# tailwindcss + daisyui

- install daizyui package

```
npm i daisyui

```

- Then add daisyUI to your tailwind.config.js

```
module.exports = {

  plugins: [
    require('daisyui'),
  ],

}

```

produce production version

```
npm run build
http-server ./dist
```
