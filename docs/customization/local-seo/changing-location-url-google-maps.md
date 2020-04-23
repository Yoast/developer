---
id: changing-location-url-google-maps
title: Changing the Location URL in Google Maps
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/local-seo/changing-location-url-google-maps.md
---

[Yoast SEO: Local](https://yoast.com/wordpress/plugins/local-seo/) and [Yoast SEO: Local SEO for WooCommerce](https://yoast.com/wordpress/plugins/local-seo-for-woocommerce/) include the ability to add a Google map for your location(s). The URL in the map, by default, points to the Yoast SEO location page on your website. In some cases, you may prefer to link to a different URL.

As of version 6.2, you or your developer can change the URL with the `yoast_seo_local_change_map_location_url` filter. This filter takes 2 params: `$url` (required) and `$location_id`.

You will find an example of how to use the filter below.

## Single location
```php
add_filter('yoast_seo_local_change_map_location_url', 'yoast_seo_local_change_map_location_url', 10, 1 );

function yoast_seo_local_change_map_location_url( $url ) {
    $url = 'https://www.yoast.com';

    return $url;
}
```

## Multiple locations
```php
add_filter('yoast_seo_local_change_map_location_url', 'yoast_seo_local_change_map_location_url', 10, 2 );

function yoast_seo_local_change_map_location_url( $url, $post_id ) {
    // Change this to the post ID you want to match against
    if( $post_id == 1 ) {
        $url = 'https://www.yoast.com';
    }

    return $url;
}
```
