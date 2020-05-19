---
id: changing-location-post-type
title: Local SEO - Changing the default Location post type
sidebar_label: Changing the default Location post type
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/local-seo/changing-location-post-type.md
---

As of version 13.2, you or your developer can change the default locations post type with the `wpseo_local_post_type` filter. This filter takes a single parameter: `$post_type` (required).
This filter is particularly useful in cases where you have defined a custom post type that you're using for your locations.

You will find an example of how to use the filter below.

## Single location
```php
add_filter( 'wpseo_local_post_type', 'my_custom_locations_post_type' );
```
