---
id: wp-get-environment-type-in-yoast-seo
title: Yoast SEO - wp_get_environment_type() in Yoast SEO
sidebar_label: wp_get_environment_type() in Yoast SEO
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/yoast-seo/wp-get-environment-type-in-yoast-seo.md
---
Since WordPress 5.5, the new [`wp_get_environment_type()`](https://developer.wordpress.org/reference/functions/wp_get_environment_type/) function can be used to retrieve the current environment of a site. Among other things, this allows authors of themes and plugins to easily find the environment of a site, and possibly to propose specific features for each type of environment.

Yoast SEO makes use of this feature to enable or disable certain options of the plugin that are either relevant or irrelevant to have for each type of environment.

## Using `wp_get_environment_type()` to retrieve a site’s environment

The use of `wp_get_environment_type()` is rather simple and straightforward. The value returned by the function is defined by the global variable `WP_ENVIRONMENT_TYPE`.

The possible values of this variable are `local`, `development`, `staging` and `production`.

So a conditional check is performed on the return value of the function, and depending on the result, given instructions are executed.

Here is what it looks like in practice:

```php
<?php
switch ( wp_get_environment_type() ) {
    case 'local':
    case 'development':
        do_nothing();
        break;
    
    case 'staging':
        do_staging_thing();
        break;
    
    case 'production':
    default:
        do_production_thing();
        break;
}
```

A couple of quick details. If `wp_get_environment_type()` returns `development`, [the value of the `WP_DEBUG` constant is set to true](https://github.com/WordPress/wordpress-develop/blob/029dd1bbb929eec4df5f57789ef42c076aab83f0/src/wp-includes/default-constants.php#L77), if not previously defined in the wp-config.php file.

Another feature of WordPress, Application Passwords is tied to the value returned by `wp_get_environment_type()`. [It is available by default when this value is `local`](https://github.com/WordPress/wordpress-develop/blob/73b353ef95d61177fd246f6c316382c3a94e44a7/src/wp-includes/user.php#L4306).

## How does Yoast SEO use `wp_get_environment_type()`?

### On non-production environments

On sites that are not live - `if ( wp_get_environment_type() !== 'production' )` - , several things are not necessary. Thus, in these cases, the plugin does not fetch Ryte data, does not execute the Ryte Site Health check, disables data tracking and disables search engine pinging about the XML sitemap.
