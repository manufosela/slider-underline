# \<slider-underline>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.
slider-underline is based [https://codepen.io/nabaroa/pen/QWrGxLg](on example) created by @nabaroa
slider-underline uses [https://nakds.s3.eu-west-3.amazonaws.com/nakDS.min.css](nakDS)

## Installation

```bash
npm i slider-underline
```

## Usage

```html
<script type="module">
  import 'slider-underline/slider-underline.js';
</script>

<slider-underline>
  <!-- put list <ul>, with list elements <li>, with links <a> -->
  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#feature">Feature</a></li>
    <li><a href="#agenda">Agenda</a></li>
    <li><a href="#news">News</a></li>
  </ul>
</slider-underline>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
