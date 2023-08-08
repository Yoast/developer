---
id: disabling-autoloading-redirect-options
title: "Yoast SEO Premium: Disabling the autoloading of the redirect options"
sidebar_label: Disabling the autoloading of the redirect options
---

Since Yoast SEO Premium 17.7 the two options (`wpseo-premium-redirects-export-plain` and `wpseo-premium-redirects-export-regex`) used to calculate the redirect destinations are autoloaded to save two queries.
If the number of redirects grows bigger, you may be interested in disabling the autoloading of such options, e.g. when you are using object caching and the autoloaded options pass the maximum object size limit.  
Switching the `autoload` value to `no` for the two options in the database is not enough, because Yoast SEO Premium will force the options to be autoloaded again.

In Yoast SEO Premium 20.13 we introduced the `Yoast\WP\SEO\redirects_options_autoload` to assist you in changing this behaviour. You can add this code to your theme's `functions.php` to prevent Yoast SEO Premium to force the autoloading of the redirect options: 

```php
add_filter( 'Yoast\WP\SEO\redirects_options_autoload', '__return_false');
```

Please note that this is not enough, by itself, to stop the autoloading: you will still need to switch the `autoload` value to `no` for the two options in the database.
You can also add/delete a redirect in the Redirect manager, or edit one (as long as it's actually changed and not saved as it is), but if this is a _plain_ redirect only the `wpseo-premium-redirects-export-plain`, and the same for _regex_ redirects.

Besides the value for `autoload`, the filter also accepts two parameters: the type of the redirects (either `plain` or `regex`) and the array of the redirects currently defined.  
So for example you can ensure that the option for `plain` redirects won't be autoloaded, while keeping the default behaviour for the `regex` redirects. Add a snippet like this one in your theme's `functions.php`:

```php
function yoast_set_autoload_no_plain( $autoload, $type, $redirects ) {
	if ( $type === 'plain' ) {
		return false;
	}
	return $autoload;
}

add_filter( 'Yoast\WP\SEO\redirects_options_autoload', 'yoast_set_autoload_no_plain', 3, 10);
```
