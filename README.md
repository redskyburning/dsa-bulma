# DSA Bulma
A Bulma theme built for smashing capitalism

## Usage
* Install using npm: `npm i -S dsa-bulma`

You have a few options for including the theme in your project.

* If you're using Scss in your project, import the main bundle with `scss/bundle.scss`.
* If you need to import non-rendering scss (ie variables, mixins, etc) into a single component, import `scss/imports.scss`.
* Just want the css in a handy, standalone package? `dist/bundle.css` has you covered. Just pull it in as a static file, import into some js, you do you.

### Fonts

This package comes with the ManifoldDSA font included, but it requires a bit of setup. The css bundle uses relative paths to reference the font files in the dist folder, so if you copy the dist folder as a unit the fonts should resolve without issue. If you're using scss you can use the `$font-path-manifold` variable to override the default path to match your configuration. You can see an example of this in the demo app at `src/assets/scss/app.scss`.

## Local Development

DSA Bulma comes packaged with a small Vue app to allow for easy testing of changes. Just run `npm run serve` to spin it up.

## Making a new build

Just run `npm run build`.
