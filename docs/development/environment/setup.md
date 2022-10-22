---
id: setup
title: "Yoast SEO development setup"
sidebar_label: Development setup
---

This page describes the process of how we set up development environments at Yoast.

**Note: These instructions assume you're working with OSX and PHP 7.4+.**

## Getting started
Before you start contributing to the Yoast plugins, ensure you've checked out our [development tools page](tools.md) which lists the various tools that need to be used (unless otherwise noted).

## Organizing your projects
Generally speaking, we advise people to create a `~/Projects/Yoast` folder to keep all things together. Note: don't create a Yoast folder in Documents, Desktop or Downloads; this will likely cause an error. After this, you have two flavors:

*   Clone plugins on an environment-by-environment basis, which allows you to have various versions of the same plugin on your system, without them (possibly) conflicting.
*   Clone all plugins into a single directory and symlink them to the development environments. This results in the same version (branch) running across all development environments that were linked.

**Note: The first option is preferable, as there's a lower chance of messing things up.**

In your terminal, `cd` to the newly created `Yoast` directory. In there, you should locate the Docker directory and navigate to `<your docker directory>/plugins` where you can clone the various plugin repositories.

## Set up PHPUnit

### Enabling PHPUnit in PhpStorm
The setup in PhpStorm can be completed by following the next steps:

*   Under the Run menu in PhpStorm, go to `Edit configurations`.
*   In the following window, press the `+` in the left corner and choose PHPUnit in the options.
*   Select the option: `Defined in the configuration file` and check the checkbox for `Use alternative configuration file`.
*   Behind the checkbox, enter the full path to the `phpunit.xml.dist` file. This file is located in the plugin directory. If the repository contains a `phpunit.xml` file, use that one instead. (i.e wordpress-seo has two types of tests. Use `phpunit-integration.xml.dist` for the 'old' integration tests, and `phpunit.xml.dist` for the BrainMonkey tests.)
*   Now you've entered the path, press the icon on the far right. This will bring you to the `Test frameworks` window.
*   Press the plus icon and select the first option: `PHPUnit Local`. Select `Use Composer autoloader`, which will autofill the `Path to script` to a path that ends with `/vendor/autoload.php`. This selection will prompt PhpStorm to use the version as retrieved via Composer.
*   Finally, when you return to the `Run/Debug configurations` window, there might be an error message at the bottom. Press the `Fix` button next to it and select PHP as your CLI interpreter. Apply and done!

### Configuring PHPUnit to work with WordPress and the plugins
In order to ensure that unit tests can properly run, you need to add the following two constants:

* `WP_DEVELOP_DIR` - Refers to the cloned repository of `wordpress-develop`, as it's located on your system.
* `WP_PLUGIN_DIR` - Refers to the directory where the WordPress plugins are located.

Example:

```
WP_DEVELOP_DIR=/Users/<your name>/Documents/Development/wordpress-develop/
WP_PLUGIN_DIR=/Users/<your name>/Documents/Development/plugin-development-docker/plugins
```

:::caution
Note the trailing slash in `WP_DEVELOP_DIR` and the absence of it in `WP_PLUGIN_DIR`.
:::

:::info
If you have `WP_DEVELOP_DIR` and `WP_PLUGIN_DIR` as environment variables, you can skip the following section.
:::

Configure your PHPUnit configuration in PhpStorm by going to `Edit Configurations...` -> `PHPUnit` and ensure it looks similar to the following screenshot:

  ![](https://lh5.googleusercontent.com/9TJaufyDOzjcM9bGn6ELSVnGTL6tfFOlW8LMoTmmOLoOtvANfN36B5kVZ72iesKy8isliFQHmSq2uMPR58FkHwRVqPCF_O9MvdEAhy4QHK1h53Kp6ppiJ83d70AUNLOSFBDvuxyv)

### Running multisite tests
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

### Working on JavaScript used in the plugins
If you're developing within the JavaScript code that is part of one of the plugins, you need to ensure that the code is also available in your WordPress environment. This can be achieved by using the following steps:

* Run `yarn` to install dependencies.
* Run `grunt build:js` to build JavaScript manually.
* Run `grunt shell:webpack-watch` (Free) or `grunt webpack:watch` (Premium) to watch and build JavaScript automatically.

:::caution
If your pull-request requires a specific branch from the monorepo, please ensure that you create a branch on the monorepo with the *exact* same name as the branch on the plugin's repository.
This ensures that Travis uses the correct branches when building. 
:::

### Working on standalone JavaScript
If you're planning on working on the JavaScript code, _outside_ of a WordPress environment, you can follow the instructions in the [readme](https://github.com/Yoast/javascript) of the monorepo, which includes all the information you'll need to get the JavaScript side of things up and running.

A list if [useful commands](https://github.com/Yoast/javascript#useful-commands) is also available.

## Now what?
After you've cloned the repositories, you can navigate to `basic.wordpress.test` in your browser to see the development environment. Open the plugin directory in your IDE and you should be ready to develop!
