---
id: using-composer
title: Standards - Using Composer
sidebar_label: Using Composer
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/standards/using-composer.md
---
import Alert from '../../../developer-site/src/components/Alert';

## What is Composer?
[Composer](https://getcomposer.org/) is a dependency manager tool for PHP projects (similar to NPM) and can be run from your terminal.

## Installing Composer

To get Composer installed on your system, make sure you follow the [official installation steps](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos).

## Installing Yoast SEO via Composer
When installing Yoast SEO via Composer, there are two options:

1. `composer create-project yoast/wordpress-seo` - Downloads the latest version of the Yoast SEO plugin and installs all neccessary dependencies.
2. `composer create-project yoast/wordpress-seo:dev-trunk --prefer-source --keep-vcs` - Downloads a development version of Yoast SEO, including version control files.

<Alert>

Once Composer has completed its installation process, please make sure you run `yarn`, followed by `grunt:build` in the `wordpress-seo` directory to ensure all necessary files are properly built.
</Alert>

## Updating dependencies

Composer tracks the state of the project in the `composer.lock` file. Running `composer install` will always reproduce that state, ensuring consistency across developers' setups.
When dependencies need to be updated the following command will bring said dependencies to the latest versions, as far as is allowed by the version restrictions set in `composer.json`.

```shell script
composer update
```

After that, the updated `composer.lock` file needs to be committed into version control.

<Alert type="warning">

Please note that updating dependencies is somewhat of a delicate process and doing so might result in breakage. 
Always properly test before committing an updated version of `composer.json` and `composer.lock`. 
</Alert>
