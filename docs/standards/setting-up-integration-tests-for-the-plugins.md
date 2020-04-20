---
id: setting-up-integration-tests-for-the-plugins
title: Setting up integration tests for the plugins
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/standards/setting-up-integration-tests-for-the-plugins.md
description: When running integration test we have to setup some WordPress Docker containers. This allows us to test against WordPress, which is the 'integration' part.
---
import Alert from '../../../developer-site/src/components/Alert';

When running integration test we have to setup some WordPress Docker containers. This allows us to test against WordPress, which is the 'integration' part. An added bonus of this is that you also have a separate setup for writing patches and unit tests.

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

```
127.0.0.1 localhost
10.254.254.254 mysql
```

## Making your database accessible

To make your database accessible, run the following command:

`sudo ifconfig lo0 alias 10.254.254.254`

## Tying it all together

The last step is to tie it together with your `wordpress-seo` cloned repository.
To do this, you'll have to define two environment variables:

* `WP_DEVELOP_DIR` - Refers to the cloned repository of `wordpress-develop`, as it's located on your system.
* `WP_PLUGIN_DIR` - Refers to the directory where the WordPress plugins are located.

Example:

```
WP_DEVELOP_DIR=/Users/andy/Documents/Development/wordpress-develop/
WP_PLUGIN_DIR=/Users/andy/Documents/Development/plugin-development-docker/plugins
```

<Alert type="warning">

Note the trailing slash in `WP_DEVELOP_DIR` and the absence of it in `WP_PLUGIN_DIR`.
</Alert>

## Setup PHPUnit

<Alert>

If you have `WP_DEVELOP_DIR` and `WP_PLUGIN_DIR` as environment variables, you can skip this section.
</Alert>

Configure your PHPUnit configuration in PhpStorm by going to `Edit Configurations...` -> `PHPUnit` and ensure it looks similar to the following screenshot:

![](https://lh5.googleusercontent.com/9TJaufyDOzjcM9bGn6ELSVnGTL6tfFOlW8LMoTmmOLoOtvANfN36B5kVZ72iesKy8isliFQHmSq2uMPR58FkHwRVqPCF_O9MvdEAhy4QHK1h53Kp6ppiJ83d70AUNLOSFBDvuxyv)

## Spin up the containers

If you've gone through all the above steps, it's time to start the containers!

In your terminal, run the following commands:

```
npm install
npm run build:dev
npm run env:start
npm run env:install
```

When you want to stop the containers, you simply can do:

`npm run env:stop`


## Troubleshooting

If you get errors about the database connection, make sure other no MySQL processes are running in the background by running `brew services stop mysql` in your terminal.



