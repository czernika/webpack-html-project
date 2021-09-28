# Simple webpack configuration for HTML/Pug

This is a simple example webpack config to compile CSS, Javascript and other assets for simple projects without Vue, React, etc. I like them a lot but sometimes they're too heavy for simple projects. So this where this project can be handy

## Features

- Production optimization (included babel, autoprefixer, cssnano and more)
- Works with images, SVG, fonts, static files. Small images may be inlined with data:image
- `jpe(?)g` and `png` images will be converted to `webp` (originals will stay untouched but minified)
- Watchers and linters
- Sourcemaps in development mode and gzip/brotli files in production
- HMR for styles and scripts (with `npm run serve`)
- Tailwind config by default
- Extends HTML webpack plugin
- Friendly errors

## Run

Fill `entries` with correct information for your project. Syntax is same as for webpack `entry`. Next fill in `htmlConfig` - it is same as for HTML webpack plugin, but `fromTo` key is combined for `template` and `filename` - for example `fromTo: 'pages/about.html'` means, that `app/pages/about.html` will be compiled as `dist/pages/about.html`.

> Currently only `.pug` and `.html` extensions are supported

Start with

```sh
npm run watch
```

This will open page at `http://localhost:3000` with BrowserSync features enabled (liveReload). You may configure it within `app.config.js` file at `browserSync` options.

```sh
npm run serve
```

This will open page at `http://localhost:9000` with webpack devServer features enabled like Friendly errors overlay and HMR. You may configure it within `app.config.js` file at `devServerConfig` options.

To compile assets for production run `npm run prod`. After finishing you will see some extra scripts (it will split scripts into chunks) and gzip/brotli files.

## Build directory

This is where custom webpack configurations are. In a future I'll probably create a simple Node package and remove it from here (so the only option for configuration will be `app.config.js`) but for now it is opened for extra edits as `app.config.js` is not fully customizable.

## Todo

- Converted to `.webp` format images must be injected into HTML
- Make `spritemap.svg` useful

## Maybe

- Include bundle analyzer
- Include modernizr library
- Include webp-in-css
- Lazy load library by default
- Some features like `focus-visible`
