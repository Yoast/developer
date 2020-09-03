---
id: running-unit-tests-code-style-checks-and-linters
title: Standards - Running unit tests, code style checks and linters
sidebar_label: Running unit tests, code style checks & linters
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/standards/running-unit-tests-code-style-checks-and-linters.md
---
At Yoast we use a variety of tools to ensure our code adheres to a certain set of standards, which allow us to ship our products with more confidence and less bugs.

These tools include the following:

* Unit tests - To ensure isolated functions / methods behave as expected.
* Integration tests - To ensure that a chain of actions (i.e function/method calls) behave as expected.
* Linters - To ensure that code is written in a uniform way (i.e. structure, spacing etc.).

## PHP

### Unit tests
For our PHP code, we make use of PHPUnit to test code for expected behavior. Please make sure you've read the [guide on setting up PHPUnit](development-setup.md#setting-up-phpunit) before running any tests.

Also make sure to read up on the section regarding [running tests in a multisite environment](development-setup.md#running-multisite-tests).

#### Running unit test with code coverage
Running unit tests with code coverage is very similar to 'just' running unit tests, with one difference: While a test runs, all your code gets analyzed to see what parts of your code base are covered by the tests.

The results of this analysis are then stored as a report that can later be used to determine what parts of your code might need more tests. Please note that running unit tests with code coverage takes up more time, as analyzing your code requires extra resources.

To configure your system to be able to run with code coverage, follow these steps:

1. Run `pecl install xdebug` in your terminal to install XDebug.
1. To run the tests including the coverage, click <img alt="Coverage button in PhpStorm" src="https://user-images.githubusercontent.com/17744553/53946611-714ab580-40c4-11e9-85b6-fde5576e4609.png" /> in the upper right corner of PhpStorm.

##### Troubleshooting
If you get an error `"Failed loading /usr/local/Cellar/php@7.1/7.1.26/lib/php/20160303/xdebug.so"` or something similar, it is possible your extension directory needs to be configured so PHP knows where to look for it.

Follow these steps to configure your extension directory:

1. Run `php --ini` in your terminal to find your `php.ini` file.
1. Open the `php.ini` file in your preferred editor.
1. To find out what the proper extension directory is, run: `pecl config-get ext_dir` in a separate terminal window.
1. Now uncomment and update the extension_dir in your php.ini:`extension_dir = /usr/local/lib/php/pecl/<php_api_version>` and replace the pathname with the one you found in the previous step.

Sometimes the unit tests will run on a different PHP version than the one used for code coverage. This is because of a quirk in PhpStorm.

To fix this, under `Edit Configurations...` -> `Command line` -> `Interpreter`, you can specify an interpreter. However, running with code coverage always uses the `<Default project interpreter>`, even when you have specified another interpreter. In case you get fatal errors when running with code coverage, take a look at the default project interpreter (`Preferences` -> `Languages & Frameworks` -> `PHP`) and ensure that this one is also properly configured.

### Integration tests
If you're interested in getting integration tests up and running, make sure to check out our guide on [Setting up integration tests for the plugins](setting-up-integration-tests-for-the-plugins.md).

#### Other plugins
Most of our other plugins also contain a variety of tests, written to check the PHP code. To run these tests, use the following command in your terminal:

* `composer test`

### Linting

#### Checking for PHP syntax errors
**Free**

* Use `composer lint`

**Premium**

* Use `composer premium-lint`

**Other**

To check for syntax errors, run `find -L . -path ./vendor -prune -o -path ./node_modules -prune -o -name '*.php' -print0 | xargs -0 -n 1 -P 4 php -l`

#### Coding standards
When using a linter on our code base, we utilize a combination of various coding standards, which are as follows:

* WPCS
* PHPCompatibility
* [YoastCS sniffs](https://github.com/Yoast/yoastcs)

#### Running the linter
**Free**

* For an interactive menu use: `composer cs`
* To check the files of your branch against a branch other than `trunk`: `composer check-branch-cs {BRANCH-TO-CHECK-AGAINST}`. The parameter should be the name of the branch you wish to merge to.

**Premium**

* All the commands from Free work for Premium as well.

**News**
* To check everything: `grunt phpcs`

**Video**
* To check everything: `vendor/bin/phpcs`

**WooCommerce**
* To check everything: `grunt phpcs`

## JavaScript

### Unit tests
For our JavaScript code, we utilize Jest and Jasmine to test code for expected behavior. Please ensure you've run `yarn` prior to trying to run the following commands so that all necessary NPM packages are installed.

To run the tests, use the following command in your terminal:

* `yarn test`

#### Coverage
To run the tests, including coverage, use the following command in your terminal:

* `yarn test --coverage`

### Linting
To run the linter, use the following command in your terminal:

* `grunt eslint`

## Availability
|                  | wordpress-seo | wordpress-seo-premium | wpseo-news | wpseo-video | wpseo-woocommerce |
|------------------|---------------|-----------------------|------------|-------------|-------------------|
| PHPUnit          | ✅            | ✅                   | ✅         | ✅          | ✅                |
| PHPLint          | ✅            | ✅                   | ✅         | ✅          | ✅                |
| PHPCS            | ✅            | ✅                   | ✅         | ✅          | ✅                |
| JavaScript tests | ✅            | ✅                   | ❌         | ❌          | ❌                |
| ESLint           | ✅            | ✅                   | ❌         | ✅          | ❌                |
