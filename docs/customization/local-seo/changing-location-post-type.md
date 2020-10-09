---
id: changing-location-post-type
title: Local SEO - Changing the default Location post type
sidebar_label: Changing the default Location post type
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/local-seo/changing-location-post-type.md
---
import Alert from '@site/src/components/Alert';

As of version 13.2, you or your developer can change the default locations post type with the `wpseo_local_post_type` filter. This filter takes a single parameter: `$post_type` (required).
This filter is particularly useful in cases where you have defined a custom post type that you're using for your locations.

<Alert>

If you change the post type, please make sure to [reindex Yoast SEO's indexables](../../standards/reindex-indexables).
</Alert>

In either your custom plugin or your theme's `functions.php`, add the following line and change the default value to your desired post type.

```php
/** 
 * Changes the Yoast SEO: Local post type used for locations.
 *
 * @param string $post_type The post type we're replacing.
 *
 * @return string Our locations post type.
 */
function my_custom_locations_post_type( $post_type ) {
    return 'my_custom_locations_post_type';
}

add_filter( 'wpseo_local_post_type', 'my_custom_locations_post_type', 10, 1 );
```
