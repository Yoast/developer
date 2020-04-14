---
id: development-tools
title: Development tools
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/standards/development-tools.md
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

[Add a global git ignore file](version-control-conventions.md#global-git-ignore) so you don't accidentally add system files like `.DS_Store` to the repository.

### VVV

VVV is a development setup specifically created for developing WordPress websites on your local machine. VVV is built on top of Vagrant and makes use of virtual machines to ensure you end up with the same basic setup as others contributing to the project.

To get VVV up and running, you need the following three pieces of software before cloning the VVV GitHub repository:

*   [VirtualBox](https://www.virtualbox.org/wiki/Downloads) ( run `brew cask install virtualbox` ) In case of an error during installation: check if Oracle has permission in System Preferences → Security & Privacy → General
*   [Vagrant](http://www.vagrantup.com/downloads.html) ( run `brew cask install vagrant` )
*   [Vagrant Hostsupdater](https://github.com/cogitatio/vagrant-hostsupdater) ( run `vagrant plugin install vagrant-hostsupdater` )

To allow vagrant to automatically update the hosts file without asking for a sudo password, add the following snippet to a new sudoers file include, i.e. `sudo visudo -f /etc/sudoers.d/vagrant_hostsupdater`:

    # Allow passwordless startup of Vagrant with vagrant-hostsupdater.
    Cmnd_Alias VAGRANT_HOSTS_ADD = /bin/sh -c echo "*" >> /etc/hosts
    Cmnd_Alias VAGRANT_HOSTS_REMOVE = /usr/bin/sed -i -e /*/ d /etc/hosts
    %admin ALL=(root) NOPASSWD: VAGRANT_HOSTS_ADD, VAGRANT_HOSTS_REMOVE

**Note: the above snippet uses vi. If you don't know how to exit vi, you should first exit insert mode ( see `INSERT` in the bottom left corner ) by pressing `esc` and then type `:wq` to save and exit or `:q!` to exit without saving.**

After you've installed bot VirtualBox and Vagrant, you can clone the VVV repository by navigating to the desired directory via the command line and run `git clone -b master git://github.com/Varying-Vagrant-Vagrants/VVV.git` . This will automatically create a VVV directory in the current directory and will default to the master branch. Once this has completed, navigate to the VVV direcotry and run `vagrant up` to start provisioning the virtual machine.

For more information see the [VVV installation guide](https://varyingvagrantvagrants.org/docs/en-US/installation/).

### Sequel Pro

To manage and search your database in an easy and quick way, Sequel Pro is the tool to use. You can download the latest version from: [https://www.sequelpro.com/](https://www.sequelpro.com/)

After installation, start up Sequel Pro and add a new connection with the following configuration settings:

<figure class="wp-block-image">![sequel_pro](https://user-images.githubusercontent.com/35524806/56283625-9c3c1680-6112-11e9-84cf-cd80c369e008.png)</figure>

_The default password for VVV is `root`_

### xgettext

xgettext is a GNU internationalization (i18n) and localization (l10n) library. At the time of writing this is needed to build the wordpress-seo plugin.

```
brew install gettext
brew link gettext --force
```

## Project tools

### Composer

Composer is a package manager for PHP and is used in our WordPress plugins to manage code dependencies in an easy way. To install it, run the following command in your terminal:

```
brew install composer
```

After Composer has been installed, you'll be able to run the following command in the plugin directories which contain a `composer.json` file to install all necessary dependencies:

```
composer install
```

**Note: To update the packages, run `composer update`. However, this is generally something that isn't necessary to do.**

### Node via NVM

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is used by our tools and to compile our JavaScript. Node Version Manager (NVM) is a simple bash script to manage multiple active Node.js versions.

First off, [install NVM](https://github.com/nvm-sh/nvm#installation-and-update). After that, you can install a node version by running the following command

```
nvm install <version>
```

[Check the Node.js website](https://nodejs.org/en/) to see what the latest LTS version is.

### Yarn

Yarn is a package manager used for managing JavaScript dependencies. To install Yarn, ensure you have Brew installed first and then run the following command to globally install it on your machine. Note that this method will install Node too, _but we don't use that version_.

```
brew install yarn
```

Just like with Composer, you need to navigate to the directories containing a specific file. In the case of JavaScript you need to ensure you're in the same directory as the `package.json` file prior to running:

```
yarn
```

### Grunt CLI

Grunt CLI is a tool that helps running repetitive tasks, such as running a code linter, minifying code or any other kind of task that could be automated for development purposes. Generally speaking, Grunt is used to manage JavaScript code.

To install Grunt CLI, run the following command in your terminal:

```
yarn global add grunt-cli
```

After this has been installed, you can run various commands in your project's directory to deal with various tasks. A command that is usually used is `grunt watch`. This command will watch for changes in directories and run a set of predefined commands over the source code to ensure it's properly outputted.

Please make sure you check out the Grunt directory and especially the `aliases.yml` file to see what commands are available.
