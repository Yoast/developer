# Yoast Developer docs

This repository holds all documentation that is hosted on [developer.yoast.com](https://developer.yoast.com).
All documentation is written in Markdown and is read by [Docusaurus](https://docusaurus.io) to be presented in a 
user-friendly manner.

## A few do's and dont's

### Do...
* ...ensure files always contain a proper Docusaurus header. Otherwise, the file will not properly show up.
* ...check that files are grouped logically (i.e. a category or feature) to ensure users can easily find information.
* ...use headings.
* ...split up large bodies of text in smaller files, if possible.
* ...test (newly added) links before submitting a PR to ensure we keep 404's at bay.
* ...Use [admonitions](https://docusaurus.io/docs/markdown-features/admonitions) for tips, highlights and cautionary alerts. 

### Don't...
* ...hesitate to ask for help if something is unclear in how this project should work.

## Contribute

Found a typo? Want to add some missing documentation? Feel free to fork this repository, make your desired changes and 
submit a pull-request.

## Installation

After cloning this repository navigate to the directory where this repository is located and run:

```
$ yarn
```

That's it! You are ready to use the portal on your local machine.

After this, you have the following options:

### Local Development
To quickly test docs changes, just run:

```shell
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without 
having to restart the server.

**Please note:** If you don't want to keep reopening a new tab, ensure you run `yarn start --no-open`. You can also 
combine this command with `BROWSER=<your preferred browser>` to force Docusaurus to open in a different browser than 
Chrome.

If you want to test a bit more thoroughly, run a full build, and serve that locally.

### Production and development build
Just run:

```shell
yarn build
# And then to test it locally: 
yarn serve
```

This command generates static content into the `build` directory and can be served using any static contents hosting 
service.

**Note:** the build will fail when there are broken internal links, so running this to test before you commit is a good 
idea. 

### Search
Search relies on this [Docusaurus search local package](https://github.com/easyops-cn/docusaurus-search-local), and only 
works when you've done a full build as it needs to build a search index. 

### Adding redirects
To add redirects, add them to the [_redirects](_redirects) file. The pattern used is the Cloudflare pages [redirects 
format](https://developers.cloudflare.com/pages/platform/redirects/), which includes support for splats and placeholders. 

### Deployment
Deployment is fully automatic and thus requires no configuration or user interaction.

## Contributing to Yoast Developer portal
Howdy! It's really great that you want to contribute to the Yoast developer portal. The development of the portal takes 
place on GitHub.

There are two main ways to contribute:
1. [Contributing to issues](#contributing-to-issues)
2. [Contributing to code](#contributing-to-code)

### Contributing to issues
We use GitHub to track public changes and improvements to the docs that need to be discussed and completed. Before creating 
an issue, please make sure what you want to raise have not already been mentioned in another one.

Please be as descriptive and succinct as possible in your issue, and if necessary, to help better understand the issue, 
add screenshots or video captures.
