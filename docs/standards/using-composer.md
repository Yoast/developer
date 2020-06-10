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
To install Yoast SEO via Composer, run the following command in your `plugins` directory:

```shell script
composer require yoast/wordpress-seo
``` 

The command above downloads the latest version of the Yoast SEO plugin and installs all necessary dependencies.

## Installing a development version of Yoast SEO
If you are looking to help develop Yoast SEO (i.e. patch a bug, for example), we recommend you use `git clone git@github.com:Yoast/wordpress-seo.git` as we don't support downloading development versions of Yoast SEO through Composer.

## Post-installation
Once Composer has completed its installation process, or git is done cloning the repository, please make sure you run `yarn`, followed by `grunt:build` in the `wordpress-seo` directory to ensure all necessary files are properly built.

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
