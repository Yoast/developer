---
id: development-setup
title: Development setup
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/standards/development-setup.md
---
This page describes the process of how we setup development environments at Yoast.

**Note: These instructions assume you're working with OSX.**

## Getting started

Before you start contributing to the Yoast plugins, ensure you've checked out our [development tools page](development-tools.md) which lists the various tools that need to be used (unless otherwise noted).

## Organizing your projects

Generally speaking, we advise people to create a `Yoast` folder in their `Documents` directory to keep all things together. After this, you have two flavors:

*   Clone plugins on an environment-by-environment basis, which allows you to have various versions of the same plugin on your system, without them (possibly) conflicting.
*   Clone all plugins into a single directory and symlink them to the development environments. This results in the same version (branch) running across all development environments that were linked.

**Note: The first option is preferable, as there's a lower chance of messing things up.**

In your terminal, `cd` to the newly created `Yoast` directory. In there, you should locate the Docker directory and navigate to `<your docker directory>/plugins` where you can clone the various plugin repositories.

### Enabling PHPUnit in PhpStorm

The setup in PhpStorm can be completed by following the next steps:

*   Under the Run menu in PhpStorm, go to `Edit configurations`.
*   In the following window, press the `+` in the left corner and choose PHPUnit in the options.
*   Select the option: `Defined in the configuration page` and check the checkbox for `Use alternative configuration file`.
*   Behind the checkbox, enter the full path to the `phpunit.xml.dist` file. This file is located in the plugin directory. If the repository contains a `phpunit.xml` file, use that one instead. (i.e wordpress-seo has two types of tests. Use `phpunit-integration.xml.dist` for the 'old' integration tests, and `phpunit.xml.dist` for the BrainMonkey tests.)
*   Now you've entered the path, press the icon on the far right. This will bring you to the `Test frameworks` window.
*   Press the plus icon and select the first option: `PHPUnit Local`. Select `Path to phpunit.phar` and enter the path to the file. It's probably in your `/Cellar` directory. If you do not have a `phpunit.phar` file yet, you can download it here: [https://phar.phpunit.de/](https://phar.phpunit.de/)
*   Finally, when you return to the `Run/Debug configurations` window, there might be an error message at the bottom. Press the `Fix` button next to it and select PHP as your CLI interpreter. Apply and done!

#### Running multisite tests

Some of our plugins contain tests that are only run on multisite. To run those tests, select your PHPUnit configuration and add the `WP_MULTISITE` flag with value `1` in the command line section of the settings.

## Installing the plugins

To have the complete set of Yoast plugins, clone the following repositories in your: `<your docker directory/plugins/` folder.

Yoast SEO with the addons:

*   [https://github.com/Yoast/wordpress-seo](https://github.com/Yoast/wordpress-seo)
*   [https://github.com/Yoast/wpseo-news](https://github.com/Yoast/wpseo-news)
*   [https://github.com/Yoast/wpseo-woocommerce](https://github.com/Yoast/wpseo-woocommerce)

For each of these add-ons, run `composer install` and `yarn` in the respective directories to make sure all dependencies are installed.

Additional plugins:

*   [https://wordpress.org/plugins/yoast-test-helper/](https://wordpress.org/plugins/yoast-test-helper/) - Makes testing Yoast SEO, Yoast SEO add-ons and integrations and resetting the different features a lot easier.
*   [https://github.com/Yoast/yoast-acf-analysis](https://github.com/Yoast/yoast-acf-analysis) - Provide compatiblity with [Advanced Custom Fields](https://www.advancedcustomfields.com/)
*   [https://github.com/Yoast/yoastseo-amp](https://github.com/Yoast/yoastseo-amp) - Provide additional functionality for The [AMP plugin](https://nl.wordpress.org/plugins/amp/)

All our publicly accessible repositories can be [found on GitHub](https://github.com/Yoast/)

## Linking repositories via Yarn

If you're developing within the JavaScript code that is part of the plugin, you need to ensure that the code is also available in your WordPress environment. This can be achieved by using [linking](https://yarnpkg.com/lang/en/docs/cli/link/) in Yarn.

Due to how we've structured our JavaScript code into a monorepo, we've created [a separate page](https://github.com/Yoast/javascript) that includes all the information you'll need to get things up and running.

## Now what?

After you've cloned the repositories, you can navigate to `basic.wordpress.test` in your browser to see the development environment. Open the plugin directory in your IDE and you should be ready to develop!
