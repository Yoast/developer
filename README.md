# Yoast Developer docs

This repository holds all documentation that is hosted on [developer.yoast.com](https://developer.yoast.com).
All documentation is written in Markdown and is read by [Docusaurus](https://docusaurus.io) to be presented in a user-friendly manner.

## A few do's and dont's

### Do...
* ...ensure files always contain a proper Docusaurus header. Otherwise, the file will not properly show up.
* ...ensure you edit the `editUrl` property to point to the exact path of the file on this repository.
* ...check that files are grouped logically (i.e. a category or feature) to ensure users can easily find information.
* ...use headings.
* ...split up large bodies of text in smaller files, if possible.
* ...test (newly added) links before submitting a PR to ensure we keep 404's at bay.

### Don't...
* ...hesitate to ask for help if something is unclear in how this project should work.

## Contribute

Found a typo? Want to add some missing documentation? Feel free to fork this repository, make your desired changes and submit a pull-request

## Installation

After cloning this repository navigate to the directory where this repository is located and run:

```
$ yarn
```

Next, you must duplicate the `.env.example` file, and rename it to `.env`. The file contains the `DOCSEARCH_KEY` variable which is the key to the Algolia API that powers the search on the portal.

You must therefore have an Algolia account to obtain this key. After having created or you are connected to your Algolia account, go to the "API Keys" menu of your application and copy the value of "Application ID". Paste this value instead of `YOUR_KEY_HERE` in the `.env` file.

That's it, you are ready to use the portal on your local machine.


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


## Contributing to Yoast Developer portal
Howdy! It's really great that you want to contribute to the Yoast developer portal. The development of the portal takes place on GitHub.

There are two main ways to contribute:
1. [Contributing to issues](#contributing-to-issues)
2. [Contributing to code](#contributing-to-code)

### Contributing to issues
We use GitHub to track public changes and improvements to the portal that need to be discussed and completed. 

Before creating an issue, please make sure what you want to raise have not already been mentionned in another one.

Please be as descriptive and succinct as possible in your issue, and if necessary, to help better understand the issue, add screenshots or video captures.

### Contributing to code

To submit code, please fork the repository and submit a pull request. In your pull request's description, please explain your update and reference the associated issue you're fixing.

After you send your proposed changes, one of the portal maintainers will test and review the pull request. After it's reviewed and the changes are accepted by at least one of the maintainers, someone will merge the pull request. 
