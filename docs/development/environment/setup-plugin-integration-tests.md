---
id: setup-plugin-integration-tests
title: "Yoast SEO Development: Set up integration tests"
sidebar_label: Setting up integration tests
description: When running integration tests we have to set up some WordPress Docker containers. This allows us to test against WordPress, which is the 'integration' part.
---

When running integration tests we have to run a MySQL database. For this we use the WordPress Docker containers. This allows us to test against WordPress, which is the 'integration' part. An added bonus of this is that you also have a separate setup for writing patches and unit tests for WordPress itself.

## Clone the `wordpress-develop` repository
Clone [WordPress/wordpress-develop](https://github.com/WordPress/wordpress-develop).

## Expose the Docker MySQL instance
We'll expose the Docker MySQL instance locally so PHPUnit tests can access it.

### Expose MySQL port
After cloning has been done, you have to expose the MySQL port, which allows us to connect to it later on.

In `wordpress-develop`, copy the `docker-compose.yml` to `docker-compose.override.yml`, and open the override file. Then change:

> \- "3306"

into

> \- "3306:3306"

This will expose the port to the local environment.

### Edit your hosts file
Edit your hosts file by running `sudo nano /etc/hosts` in your terminal and add the following:

```shell script
127.0.0.1 localhost
10.254.254.254 mysql
```

### Making your database accessible
To make your database accessible, run the following command:

* on Mac:
```shell script
sudo ifconfig lo0 alias 10.254.254.254
```

* on Linux:
```shell script
sudo ifconfig lo:0 10.254.254.254
```

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

```shell script
npm run env:stop
```

## Tying it all together
The last step is to tie it together with your `wordpress-seo` cloned repository.

To do this, please ensure you've followed the steps regarding [setting up PHPUnit](setup.md#set-up-phpunit) and start running the tests.

## Troubleshooting

### Conflicting MySQL connections

If you get errors about the database connection, make sure other no MySQL processes are running in the background by running `brew services stop mysql` in your terminal.

### Accessing the admin 

The Docker setup actually runs a complete local WordPress site. For debugging purposes you can access the admin of this testing environment. By default, the credentials to access the WordPress admin, are:

* Host - `http://localhost:8889/wp-admin`
* Username - `admin`
* Password - `password`

### Accessing the database

In case you need to access the database to check something (i.e. whether or not all database tables have been created), you can use the following credentials in your database tool of choice:

* Host - `10.254.254.254`
* Username - `root`
* Password - `password`
* Database - `wordpress_develop`
* Port - `3306`
