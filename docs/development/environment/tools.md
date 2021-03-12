---
id: tools
title: Development - Tools
sidebar_label: Development tools
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/development/environment/tools.md
---

This page describes the tools used at Yoast when developing the various plugins and libraries.

**Note: These instructions assume you're working with OSX.**

## Generic tools

### Homebrew
Homebrew is a package manager for OSX, similar to `apt`, `yum` and `pip` and allows you to easily install and update software from the command line.

Installing Homebrew is pretty straight-forward:

*   Open your terminal: `Applications/Utilities/Terminal`
*   Run the following command: `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

More information about how to work with Homebrew can be found at: [http://brew.sh/](http://brew.sh/)

### Iterm2 and Oh-My-Zsh (Optional)
iTerm2 is a replacement for the default terminal application that can be found on Mac OSX. The reason we suggest you install this is because it adds a lot of extra features when working in your terminal. [Click here](https://www.iterm2.com/features.html) to see what kind of snazzy features are included!

[Oh-My-Zsh](https://ohmyz.sh/) is a shell for your command line that adds certain features that can't be done in a regular shell without a lot of hassle. It also allows you to more easily manage your zsh configurations.

You can install both by running:

*   `brew cask install iterm2`
*   `sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`

After installing both you'll want to change your shell from bsh to zsh by running `chsh -s /bin/zsh`. Otherwise you won't get to see [all those snazzy features](https://github.com/robbyrussell/oh-my-zsh#using-oh-my-zsh) from Oh-My-Zsh.

Example:

*   ZSH can display the current active Git branch in your shell.
*   Better auto-completion for directories and filenames.

### Git / GitHub
Within Yoast, Git is used for version control. Don't know how Git works? Check out [this tutorial](https://try.github.io/levels/1/challenges/1). Our Git repositories are all hosted on GitHub. If you don't have one already, go and [create an account](https://github.com/signup).

Install git by running `brew install git`

Documentation on how to configure your local Git setup and how to add your SSH key to GitHub can be found [here](https://help.github.com/articles/set-up-git) and [here](https://help.github.com/articles/generating-ssh-keys).

[Add a global git ignore file](/development/standards/version-control-conventions.md#global-git-ignore) so you don't accidentally add system files like `.DS_Store` to the repository.

### Docker
At Yoast, we make use of [Docker](https://docker.com) as the foundation for our development setup. To get developers up and running faster, we created [our own development setup](https://github.com/Yoast/plugin-development-docker), based on Docker, that you can freely use.

### Sequel Pro
To manage and search your database in an easy and quick way, Sequel Pro is the tool to use. You can download the latest version from: [https://www.sequelpro.com/](https://www.sequelpro.com/)

To find out how to connect to the Docker database, [check out the instructions](https://github.com/Yoast/plugin-development-docker#connecting-to-the-database) on the Plugin Development Docker repository.

### xgettext
xgettext is a GNU internationalization (i18n) and localization (l10n) library. At the time of writing this is needed to build the wordpress-seo plugin.

```shell script
brew install gettext
brew link gettext --force
```

## Project tools

### PHP
As the plugins are written in PHP, it is necessary to have PHP locally installed.

```bash
brew install php@7.3
```

#### PECL
PHP extensions are distributed through PECL. Pecl is installed with PHP, but you may need to make it accessible on your computer's path.
Find the PHP bin directory, which should follow the pattern (or a similar one) below:

```bash
export PATH=$PATH:/usr/local/Cellar/php@7.3/7.3.21/bin/ 
```

#### Brew PHP Switcher (Optional)

**Please note: Currently only usable with Homebrew.***

[Brew PHP Switcher](https://github.com/philcook/brew-php-switcher) is a simple shell script to switch your Apache and CLI quickly between major versions of PHP. Useful if you support multiple products/projects that are built using either brand new or old legacy PHP functionality.

Assuming you're running the latest version of PHP and want to downgrade to an earlier version, you can do the following:

* Install PHP 7.2 (or older) with `brew install php@7.2`
* Install Brew PHP Switcher `brew install brew-php-switcher`
* Switch to PHP 7.2 (or older) `brew-php-switcher 7.2`
* Reopen your terminal and check the PHP version `php -v`

### Composer
Composer is a package manager for PHP and is used in our WordPress plugins to manage code dependencies in an easy way. To install it, run the following command in your terminal:

```shell script
brew install composer
```

After Composer has been installed, you'll be able to run the following command in the plugin directories which contain a `composer.json` file to install all necessary dependencies:

```shell script
composer install
```

**Note: To update the packages, run `composer update`. However, this is generally something that isn't necessary to do.**

### Node via NVM
Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is used by our tools and to compile our JavaScript. Node Version Manager (NVM) is a simple bash script to manage multiple active Node.js versions.

First off, [install NVM](https://github.com/nvm-sh/nvm#installation-and-update). After that, you can install a node version by running the following command

```shell script
nvm install <version>
```

[Check the Node.js website](https://nodejs.org/en/) to see what the latest LTS version is.

### Yarn
Yarn is a package manager used for managing JavaScript dependencies. To install Yarn, ensure you have Brew installed first and then run the following command to globally install it on your machine. Note that this method will install Node too, _but we don't use that version_.

```shell script
brew install yarn
```

Just like with Composer, you need to navigate to the directories containing a specific file. In the case of JavaScript you need to ensure you're in the same directory as the `package.json` file prior to running:

```shell script
yarn
```

### Grunt CLI
Grunt CLI is a tool that helps running repetitive tasks, such as running a code linter, minifying code or any other kind of task that could be automated for development purposes. Generally speaking, Grunt is used to manage JavaScript code.

To install Grunt CLI, run the following command in your terminal:

```shell script
yarn global add grunt-cli
```

After this has been installed, you can run various commands in your project's directory to deal with various tasks. A command that is usually used is `grunt watch`. This command will watch for changes in directories and run a set of predefined commands over the source code to ensure it's properly outputted.

As our repositories use a lot of similar tasks, we ended up [creating a repository](https://github.com/Yoast/plugin-grunt-tasks) to bring these similar tasks together.

Please make sure you also check out the Grunt directory and especially the `aliases.yml` file to see what commands are available.

### Debug Bar

To assist in debugging WordPress (plugins), you can make use of the [Debug Bar](https://wordpress.org/plugins/debug-bar/) plugin.

What this plugin can do for you, is log what queries have run, what environmental parameters are defined and can help you find other obscured (but useful) data.
