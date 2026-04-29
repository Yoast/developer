---
id: using-composer
title: "Yoast SEO: Install using Composer"
sidebar_label: Using Composer
---

[Composer](https://getcomposer.org/) is the PHP dependency manager. If you run a Composer-managed WordPress site, you can pull Yoast SEO and Yoast SEO Premium in as Composer dependencies.

Working on Yoast SEO itself rather than consuming it? See the [contributor setup](/development/environment/setup) instead.

## Requirement: your project must register a Composer autoloader

The Composer-distributed Yoast SEO package does not ship its own `vendor/autoload.php`. Yoast SEO's classes are loaded through your project's root autoloader, which must be registered before WordPress loads plugins. In practice this means a line equivalent to:

```php
require_once __DIR__ . '/vendor/autoload.php';
```

before `require ABSPATH . 'wp-settings.php';` runs. Most Composer-managed WordPress stacks already do this; if yours doesn't, add it (in `wp-config.php`, in your scaffold's pre-WP bootstrap file, or via a small must-use plugin).

If no autoloader is registered, Yoast SEO will detect this on the first admin request, display a *"plugin installation is incomplete"* notice and self-deactivate.

## Yoast SEO (free)

From the **root of your Composer-managed WordPress project**:

```shell
composer require yoast/wordpress-seo
```

The package is routed to `wp-content/plugins/wordpress-seo/`.

## Yoast SEO Premium

Premium is distributed via Yoast's private Composer repository at `https://my.yoast.com/packages/`. You will need a Composer install token from your MyYoast account.

```shell
composer config -g http-basic.my.yoast.com token <your-token>
composer config repositories.my-yoast composer https://my.yoast.com/packages/
composer require yoast/wordpress-seo-premium
```

This installs both Premium and the free plugin (which Premium depends on) into `wp-content/plugins/`. Premium relies on the same project-level autoloader as the free plugin — see the [requirement](#requirement-your-project-must-register-a-composer-autoloader) above.

## Updating

```shell
composer update
```

Composer tracks the resolved state in `composer.lock`. Commit `composer.lock` so every environment installs the same versions.

:::caution

Updating Composer dependencies is a delicate process and may introduce regressions. Always test before committing an updated `composer.json` / `composer.lock`.

:::
