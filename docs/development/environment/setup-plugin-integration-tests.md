---
id: setup-plugin-integration-tests
title: Development - Setting up integration tests for the plugins
image: https://yoast.com/shared-assets/opengraph/image.php?title=Development%20-%20Setting%20up%20integration%20tests%20for%20the%20plugins
sidebar_label: Setting up integration tests
description: When running integration tests we have to set up some WordPress Docker containers. This allows us to test against WordPress, which is the 'integration' part.
---

When running integration tests we have to set up some WordPress Docker containers. This allows us to test against WordPress, which is the 'integration' part. An added bonus of this is that you also have a separate setup for writing patches and unit tests.

## Clone the repository
Clone [WordPress/wordpress-develop](https://github.com/WordPress/wordpress-develop).

## Expose MySQL port
After cloning has been done, you have to expose the MySQL port, which allows us to connect to it later on.

In `wordpress-develop`, open the `docker-compose.yml` file and change:

> \- "3306"

into

> \- "3306:3306"

This will expose the port to the local environment.

## Edit your hosts file
Edit your hosts file by running `sudo nano /etc/hosts` in your terminal and add the following:

```shell script
127.0.0.1 localhost
10.254.254.254 mysql
```

## Making your database accessible
To make your database accessible, run the following command:

```shell script
sudo ifconfig lo0 alias 10.254.254.254
```

## Tying it all together
The last step is to tie it together with your `wordpress-seo` cloned repository.

To do this, please ensure you've followed the steps regarding [setting up PhpUnit](setup.md#set-up-phpunit).


## Spin up the containers
If you've gone through all the above steps, it's time to start the containers!

In your terminal, run the following commands:

```shell script
npm install
npm run build:dev
npm run env:start
npm run env:install
```

When you want to stop the containers, you simply can do:

`npm run env:stop`

## Accessing the admin 

Before running the tests, you will need to access the admin of this testing environment, to activate Yoast SEO to ensure all the necessary database tables are created.

By default, the credentials to access the WordPress admin, are:

* Host - `http://localhost:8889/wp-admin`
* Username - `admin`
* Password - `password`

## Accessing the database

In case you need to access the database to check something (i.e. whether or not all database tables have been created), you can use the following credentials in your database tool of choice:

* Host - `10.254.254.254`
* Username - `root`
* Password - `password`
* Database - `wordpress_develop`
* Port - `3306`

## Troubleshooting
If you get errors about the database connection, make sure other no MySQL processes are running in the background by running `brew services stop mysql` in your terminal.
