# Yoast Developer portal

This portal is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

After cloning this repository **and** the [Yoast Developer docs](https://github.com/yoast/developer-docs/) repository in a sibling directory (i.e. `/User/YourName/developer-site` and `/User/YourName/developer-docs`), navigate to the directory where this repository is located and run:

```
$ yarn
```

**Please note:** If you decide to clone both repositories into different directories and locations, ensure you edit the `docusaurus.config.js` file and change the `path` property that can be found under the `presets` -> `docs` property so that it points to the correct docs directory. 

After this, you have the following options:

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

**Please note:** If you don't want to keep reopening a new tab, ensure you run `yarn start --no-open`. You can also combine this command with `BROWSER=<your preferred browser>` to force Docusaurus to open in a different browser than Chrome.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Deployment is fully automatic and thus requires no configuration or user interaction.
