---
id: tools
title: "Yoast SEO Development: Tools"
sidebar_label: Development tools
---

This page describes the tools used at Yoast when developing the various plugins and libraries.

:::note
These instructions assume you're working with OSX.
:::

## Generic tools

### Homebrew
[Homebrew](http://brew.sh/) is a package manager for OSX, similar to `apt`, `yum`, and `pip`. It allows you to easily install and update software from the command line.

Installing Homebrew is pretty straight-forward. You just open your terminal (`Applications/Utilities/Terminal`) and run the following command:

```shell script
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Tools for building

When developing on a Mac, it's advised to install some additional development tools (Xcode command line tools, `autoconf`, `automake`, and `libtool` for building code from source:

```shell script
xcode-select --install
brew install autoconf automake libtool
```

### Iterm2 and Oh-My-Zsh (optional)
[iTerm2](https://www.iterm2.com/) is a replacement for the default terminal application that can be found on Mac OSX. We suggest you install this because it [adds a lot of extra features](https://www.iterm2.com/features.html) when working in your terminal.

[Oh-My-Zsh](https://ohmyz.sh/) is a shell for your command line that adds certain features that can't be done in a regular shell without a lot of hassle. It also allows you to more easily manage your zsh configurations.

You can install both by running:

```shell script
brew install --cask iterm2
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

After installing both you'll want to change your shell from bsh to zsh by running `chsh -s /bin/zsh`. Otherwise, you won't get to see [all those snazzy features](https://github.com/robbyrussell/oh-my-zsh#using-oh-my-zsh) from Oh-My-Zsh.

Example:

*   ZSH can display the current active Git branch in your shell.
*   Better auto-completion for directories and filenames.

### Git / GitHub

Within Yoast, [Git](https://git-scm.com/) is used for version control. Don't know how Git works? Check out [this tutorial](https://try.github.io/levels/1/challenges/1). Our Git repositories are all hosted on GitHub. If you don't have one already, go and [create an account](https://github.com/signup).

Install Git by running:

```shell script
brew install git
```

Then, read more on [how to configure your local Git setup](https://help.github.com/articles/set-up-git) and [how to add your SSH key to GitHub](https://help.github.com/articles/generating-ssh-keys).

One final suggestion: [add a global git ignore file](/development/standards/version-control-conventions.md#global-git-ignore) so you don't accidentally add system files like `.DS_Store` to the repository.

### Local
At Yoast, we make use of [Local](https://localwp.com/) as the foundation for our development setup. 

* Go to Flywheel's preferences » Advanced » Router Mode and set it to "Site Domains".
* Create a new site, call it `basic.wordpress.test`.
* Optional: make sure your browser / system trusts the SSL certificate of the newly created site.
  * For macOS, [that needs a few steps](https://localwp.com/help-docs/ssl/managing-local-sites-ssl-certificate-in-macos/).
 
Problems with [provisioning through Local](https://community.localwp.com/t/uh-oh-unable-to-provision-site-on-mac-m2/34705)? This command to install [Rosetta](https://en.wikipedia.org/wiki/Rosetta_(software)) helps if you're on a different chipset than the one Local (or any other software) was developed for:

```shell script
softwareupdate --install-rosetta
```

### Sequel Pro
To manage and search your database in an easy and quick way, [Sequel Pro](https://www.sequelpro.com/) is the tool to use. You can download the latest version from their website.

To find out how to connect to the Docker database, [check out the instructions](https://github.com/Yoast/plugin-development-docker#connecting-to-the-database) on the Plugin Development Docker repository.

### gettext
[gettext](https://www.gnu.org/software/gettext/) is a GNU internationalization (i18n) and localization (l10n) library. At the time of writing this package is required for building the `wordpress-seo` plugin.

```shell script
brew install gettext
brew link gettext --force
```

## Project tools

### PHP
As the plugins are written in PHP, it is necessary to have PHP locally installed. We currently develop our plugins in PHP 7.4. As that's not part of `brew`, you will need to add [the unofficial Homebrew PHP tap](https://github.com/shivammathur/homebrew-php) first before installing PHP:

```bash
brew tap shivammathur/php
brew install php@7.4
```

#### PECL
PHP extensions are distributed through [PECL](https://pecl.php.net/). PECL is installed with PHP, but you may need to make it accessible on your computer's path.
Find the PHP `bin` directory (which should follow the pattern below), and add that to the `PATH` variable as follows:

```bash
export PATH=$PATH:/usr/local/Cellar/php@7.4/7.4.33_4/bin/ 
```

#### Brew PHP Switcher (optional)

:::note
Currently only usable with Homebrew.
:::

[Brew PHP Switcher](https://github.com/philcook/brew-php-switcher) is a simple shell script to switch your Apache and CLI quickly between major versions of PHP. Useful if you support multiple products/projects that are built using either brand new or old legacy PHP functionality.

Assuming you're running the latest version of PHP and want to downgrade to an earlier version, you can do the following:

* Install PHP 7.2 (or older) with `brew install php@7.2`
* Install Brew PHP Switcher `brew install brew-php-switcher`
* Switch to PHP 7.2 (or older) `brew-php-switcher 7.2`
* Reopen your terminal and check the PHP version `php -v`

### Composer
[Composer](https://getcomposer.org/) is a package manager for PHP and is used in our WordPress plugins to manage code dependencies in an easy way. To install it, run the following command in your terminal:

```shell script
brew install composer
```

After Composer has been installed, you'll be able to run the following command in the plugin directories which contain a `composer.json` file to install all necessary dependencies:

```shell script
composer install
```

:::note
To update the dependencies, you can run `composer update`. However, this is generally something that isn't necessary to do -- we work with the fixed versions listed in `composer.lock`.
:::

### XDebug using Local
If you use Local as your development environment, XDebug should already be installed on your local site. To enable XDebug in your IDE, use the following steps.

Make sure that these paths are included in your PHP include path:
* `~/Local Sites/<site-name>/app/public`: the folder where the WordPress installation is located.
* `/Applications/Local.app/Contents/Resources/extraResources/local-bootstrap.php`: A file used by Local to bootstrap the site.

You can use [these steps](https://www.jetbrains.com/help/phpstorm/configuring-include-paths.html) to include these paths in your PHPStorm project.

Make sure that these paths are mapped to the right paths on the server:
* `~/Local Sites/<site-name>/app/public` should be mapped to the same path (`~/Local Sites/<site-name>/app/public`) on the server.
* `/Applications/Local.app/Contents/Resources/extraResources/local-bootstrap.php` should be mapped to the same path (`/Applications/Local.app/Contents/Resources/extraResources/local-bootstrap.php`) on the server.

To make sure you won't get spammed by breakpoints in PHPStorm for every request.
Disable `Break at first line in PHP scripts`. Also disable `Force break at first line when no path mapping specified` and `Force break at first line when a script is outside the project`. 
These settings can be found by opening `Settings` (`cmd ,`) -> `PHP` -> `Debug`

You can use [these steps](https://www.jetbrains.com/help/phpstorm/creating-a-php-debug-server-configuration.html) to add these path mappings in your PHPStorm project.

### Node via NVM
[Node.js®](https://nodejs.org/en) is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is used by our tools and to compile our JavaScript. Node Version Manager (NVM) is a simple bash script to manage multiple active Node.js versions.

First off, [install NVM](https://github.com/nvm-sh/nvm#installation-and-update). After that, you can install a node version by running the following command

```shell script
nvm install <version>
```

[Check the Node.js website](https://nodejs.org/en/) to see what the latest LTS version is.

### Yarn
[Yarn](https://yarnpkg.com/) is a package manager used for managing JavaScript dependencies. To install Yarn, ensure you have Brew installed first and then run the following command to globally install it on your machine. Note that this method will install Node too, _but we don't use that version_.

```shell script
brew install yarn
```

Just like with Composer, you need to navigate to the directories containing a specific file. In the case of Yarn, you need to ensure you're in the same directory as the `package.json` file prior to running:

```shell script
yarn
```

### Grunt
[Grunt](https://gruntjs.com/) is a tool that helps running repetitive tasks, such as running a code linter, minifying code or any other kind of task that could be automated for development purposes. Generally speaking, Grunt is used to manage JavaScript code.

To install the Grunt command line interface (CLI), run the following command in your terminal:

```shell script
yarn global add grunt-cli
```

After Grunt has been installed, you can run various commands in your project's directory to deal with various tasks. A command that is usually used is `grunt watch`. This command will watch for changes in directories and run a set of predefined commands over the source code to ensure it's properly output.

As our repositories use a lot of similar tasks, we ended up [creating a repository](https://github.com/Yoast/plugin-grunt-tasks) to bring these similar tasks together.

Please make sure you also check out the Grunt directory and especially the `aliases.yml` file to see what commands are available.

### Debug Bar

To assist in debugging WordPress (plugins), you can make use of the [Debug Bar](https://wordpress.org/plugins/debug-bar/) plugin.
This plugin can log which queries have run and which environmental parameters are defined. It can also help you find other obscured (but useful) data.
