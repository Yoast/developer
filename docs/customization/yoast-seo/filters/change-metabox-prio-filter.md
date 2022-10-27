---
id: change-metabox-prio-filter
title: "Yoast SEO: Change metabox priority"
sidebar_label: Change metabox priority
---
By default, the Yoast SEO metabox has a `high` priority. This means it will be displayed just below the editor. If 
needed, the priority can be lowered, so it will be displayed below other metaboxes.

Accepted values for metabox priority are (in order of appearance)[^1]:

* `high` 
* `core`
* `default`
* `low`

In most cases, `core` will already put the metabox below important metaboxes for you, for instance if you're using WooCommerce.

## Lower metabox priority

The example below shows how to lower the priority of the metabox.
```php
add_filter( 'wpseo_metabox_prio', 'lower_yoast_metabox_priority' );

/**
 * Lowers the metabox priority to 'core' for Yoast SEO's metabox.
 *
 * @param string $priority The current priority.
 *
 * @return string $priority The potentially altered priority.
 */
function lower_yoast_metabox_priority( $priority ) {
  return 'core';
}
```

[^1]: Per the docs for [`add_meta_box`](https://developer.wordpress.org/reference/functions/add_meta_box/).
