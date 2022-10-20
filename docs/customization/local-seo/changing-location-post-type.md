---
id: changing-location-post-type
title: "Local SEO: Change the default Location post type"
image: https://yoast.com/shared-assets/opengraph/?title=Local%20SEO%20:NEWLINEChange%20the%20default%20Location%20post%20type
sidebar_label: Change the default Location post type
---

As of version 13.2, you or your developer can change the default locations post type with the `wpseo_local_post_type` filter. This filter takes a single parameter: `$post_type` (required).
This filter is particularly useful in cases where you have defined a custom post type that you're using for your locations.

:::caution

If you change the post type, please make sure to [reindex Yoast SEO's indexables](../../features/wp-cli/reindex-indexables.md).

:::

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
