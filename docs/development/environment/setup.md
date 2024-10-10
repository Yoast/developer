---
id: setup
title: "Yoast SEO development setup"
sidebar_label: Development setup
---

This page describes the process of how we set up development environments at Yoast.

:::note
These instructions assume you're working with Mac OSX and PHP 7.4+.
:::

## Getting started
Before you start contributing to the Yoast plugins, ensure you've checked out our [development tools page](tools.md) which lists the various tools that need to be used (unless otherwise noted).

## Organizing your projects
Generally speaking, we advise people to create a `~/Projects/Yoast` folder to keep all things together.  

:::note
Don't create a `Yoast` folder in `~/Documents`, `~/Desktop` or `~/Downloads` as this will likely cause errors when using dockerized environments such as the `plugin-development-docker`.
:::

After creating this folder, you have two flavors:

*   Clone plugins on an environment-by-environment basis, which allows you to have various versions of the same plugin on your system, without them (possibly) conflicting.
*   Clone all plugins into a single directory and symlink them to the development environments. This results in the same version (branch) running across all development environments that were linked.

:::note
Symlinking is generally preferable, as there's a lower chance of messing things up, as there is a single source of truth.
:::

### Cloning plugins on an environment-by-environment basis
If you use [Local](https://localwp.com/) as your development environment of choice, you can follow these steps to clone the plugins to your Local site's plugins directory.

:::note
These steps assume that you have already [installed Local, and have set up a site within Local to use for plugin development](tools.md#local).
:::

#### On Mac
* Clone the plugin(s) you want to develop to `~/Applications/Local\ Sites/<site-name>/app/public/wp-contents/plugins`, where `<site-name>` is the name of the Local site you want to use for plugin development.

### Cloning plugins into a single directory and symlinking them
If you use Local as your development environment of choice, you can follow these steps to clone the plugins to a separate directory and symlink them to your Local site's plugin directory.

#### On Mac
* Clone the plugins that you want to develop to a single folder of choice.
* [Symlink this folder](https://www.howtogeek.com/297721/how-to-create-and-use-symbolic-links-aka-symlinks-on-a-mac/) to the `~/Applications/Local\ Sites/<site-name>/app/public/wp-contents/plugins` folder, where `<site-name>` is the name of the Local site you want to use for plugin development. 

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
WP_DEVELOP_DIR=/Users/<your name>/Projects/WordPress/wordpress-develop/
WP_PLUGIN_DIR=/Users/<your name>/Projects/Yoast
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

## Installing the plugin
Now, on to installing the plugin. First, if you haven't already, clone [the wordpress-seo repository](https://github.com/Yoast/wordpress-seo) in your `/plugins/` folder.

Then, run the following commands in the directory where you cloned the repository:

* Run `composer install` to make sure all PHP dependencies are installed.
* Run `nvm use` to set the right Node version.
* Run `yarn` to install the JavaScript dependencies.
* Run `grunt build` to build JavaScript (and CSS) manually.

After this, you can run `yarn start` to watch for changes and build JavaScript automatically.

### Additional plugins

We have several other plugins available. All our publicly accessible repositories can be [found on GitHub](https://github.com/Yoast/).

## Enable indexable indexation
* Install [the Yoast Test helper plugin](https://wordpress.org/plugins/yoast-test-helper/).
* Enable "Development mode" in Yoast Test helper's settings. This will enable Indexable indexation on development sites.

## Generating fake data for testing
You can use [Yoast WP CLI Faker](https://github.com/Yoast/wp-cli-faker) to generate fake data like posts, terms and users.

* Make use of the _Open site shell_ button in Local by Flywheel.
* Follow [the _Install as WordPress package_ instructions](https://github.com/Yoast/wp-cli-faker#install-as-wordpress-package) to get the package.
* Follow [the _Core_ instructions](https://github.com/Yoast/wp-cli-faker#core) to generate the fake data.
  * Note that for multisites you can use the `--url=<url>` parameter to target a specific subsite.
    * (See [how to run a WP-CLI command on one or more sites on WordPress multisite](https://danielbachhuber.com/tip/run-wp-cli-command-wordpress-multisite/).)
* Optional: follow [the _WooCommerce_ instructions](https://github.com/Yoast/wp-cli-faker#woocommerce) to generate fake data for WooCommerce.
* To exit the shell, use `exit`.

## Now what?
After you've cloned the repositories, you can navigate to `basic.wordpress.test` in your browser to see the development environment. Open the plugin directory in your IDE and you should be ready to develop!
