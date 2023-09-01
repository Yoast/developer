---
id: setup-plugin-integration-tests
title: "Yoast SEO Development: Set up integration tests"
sidebar_label: Setting up integration tests
description: How to setup your local enviroment to run the Yoast WordPress plugin integration tests 
---

In order to run the integration tests in any of our WordPress plugins, you need the following:
1. Access to PHP with the version that you want to test with.
2. A copy of the wordpress-develop repository that includes the base-testcases.
3. A MySQL server with an empty database.

## Install PHP
If you haven't already, you can install PHP on your machine by following the [PHP installation docs](https://www.php.net/manual/en/install.php).
You could also choose to run the tests with a Docker container if for whatever reason you can't/don't want to install PHP locally, but that process is not documented here.

## Clone the `wordpress-develop` repository
Clone [WordPress/wordpress-develop](https://github.com/WordPress/wordpress-develop).
The integration tests load WordPress and all its functions and API's from this clone when you start your integration tests. This means that this allows us to test against your locally installed version of WordPress, which is the 'integration' part.
It also provides some utility classes (e.g. the test-cases) for our own tests.

## Setup up the MySQL server
There are a lot of ways in which you can satisfy this requirement. Here we outline a couple of options that the Yoast teams like to use. You can pick either one of them, depending on your personal needs/preference.

### Option 1: Using the MySQL server provided by the wordpress-develop Docker environment
An added bonus of this option is that you also have a separate setup for writing patches and unit tests for WordPress itself.

#### Expose the Docker MySQL instance
We'll expose the Docker MySQL instance locally so PHPUnit tests can access it.

#### Expose MySQL port
In your local copy of wordpress-develop that you cloned before, you have to expose the MySQL port, which allows us to connect to it later on.

In `wordpress-develop`, copy the `docker-compose.yml` to `docker-compose.override.yml`, and open the override file. Then change:

> \- "3306"

into

> \- "3306:3306"

This will expose the port to the local environment.

#### Edit your hosts file
Edit your hosts file by running `sudo nano /etc/hosts` in your terminal and add the following:

```shell script
127.0.0.1 localhost
10.254.254.254 mysql
```

#### Making your database accessible
To make your database accessible, run the following command:

* on Mac:
```shell script
sudo ifconfig lo0 alias 10.254.254.254
```

* on Linux:
```shell script
sudo ifconfig lo:0 10.254.254.254
```

* on Windows:
```shell script
netsh interface ipv4 add address "Loopback Pseudo-Interface 1" 10.254.254.254 255.255.255.255
```

#### Spin up the containers
If you've gone through all the above steps, it's time to start the containers!

In your terminal, run the following commands:

```shell script
npm install
npm run build:dev
npm run env:start
npm run env:install
```

When you want to stop the containers, you simply can do:

```shell script
npm run env:stop
```

### Option 2: Using the MySQL server provided by your Local by Flywheel dev environment
If you use Local for development, this could be an easy alternative.

1. Start your development site in Local.
2. Switch to the "Database" tab.
3. Here, you should see an "Open Adminer" link. Click it.
4. In Adminer, near the top-left there is a "SQL command" link. Click it.
5. In the textarea enter ``CREATE DATABASE `plugins-integration-test` `` and click "Execute".

Now you have your database, now we need to tell the test suite how to connect to it:

1. In your `wordpress-depelop` clone, find the `wp-tests-config.php` file. If it doesn't exist yet, copy `wp-tests-config-sample.php` and name it `wp-tests-config.php`.
2. Find the block that looks like this
	```
		define( 'DB_NAME', 'youremptytestdbnamehere' );
		define( 'DB_USER', 'yourusernamehere' );
		define( 'DB_PASSWORD', 'yourpasswordhere' );
		define( 'DB_HOST', 'localhost' );
		define( 'DB_CHARSET', 'utf8' );
		define( 'DB_COLLATE', '' );
	```
3. Change the `DB_NAME`	 value to `plugins-integration-test`.
4. Change the values for `DB_USER`, `DB_PASSWORD` and `DB_HOST` to the values that are listed in the "Database" tab of your Local by Flywheel site.

## Tying it all together
The last step is to tie it together with your `wordpress-seo` cloned repository.

To do this, please ensure you've followed the steps regarding [setting up PHPUnit](setup.md#set-up-phpunit) and start running the tests.

## Troubleshooting

### Conflicting MySQL connections

If you get errors about the database connection, make sure other no MySQL processes are running in the background by running `brew services stop mysql` in your terminal.

### Accessing the admin (wordpress-develop docker)

The Docker setup actually runs a complete local WordPress site. For debugging purposes you can access the admin of this testing environment. By default, the credentials to access the WordPress admin, are:

* Host - `http://localhost:8889/wp-admin`
* Username - `admin`
* Password - `password`

### Accessing the database (wordpress-develop docker)

In case you need to access the database to check something (i.e. whether or not all database tables have been created), you can use the following credentials in your database tool of choice:

* Host - `10.254.254.254`
* Username - `root`
* Password - `password`
* Database - `wordpress_develop`
* Port - `3306`
