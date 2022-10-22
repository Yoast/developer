---
id: changing-location-url-google-maps
title: "Local SEO: Change the Location URL in Google Maps"
image: https://yoast.com/shared-assets/opengraph/?title=Local%20SEO:%20Change%20the%20Location%20URL%20in%20Google%20Maps
sidebar_label: Change the Location URL in Google Maps
---
[Yoast SEO: Local](https://yoast.com/wordpress/plugins/local-seo/) and [Yoast SEO: Local SEO for WooCommerce](https://yoast.com/wordpress/plugins/local-seo-for-woocommerce/) include the ability to add a Google map for your location(s). The URL in the map, by default, points to the Yoast SEO location page on your website. In some cases, you may prefer to link to a different URL.

As of version 6.2, you or your developer can change the URL with the `yoast_seo_local_change_map_location_url` filter. This filter takes 2 params: `$url` (required) and `$location_id`.

You will find an example of how to use the filter below.

## Single location
```php
add_filter( 'yoast_seo_local_change_map_location_url', 'yoast_seo_local_change_map_location_url', 10, 1 );

/**
 * Changes the location of the Google Maps URLs for your location.
 *
 * @param string $url The URL we're replacing.
 *
 * @return string The maps URL.
 */
function yoast_seo_local_change_map_location_url( $url ) {
   return 'https://www.yoast.com';
}
```

## Multiple locations
```php
add_filter( 'yoast_seo_local_change_map_location_url', 'yoast_seo_local_change_map_location_url', 10, 2 );

/**
 * Changes the location of the Google Maps URLs for your location, per location.
 *
 * @param string $url         The URL we're replacing.
 * @param int    $location_id The ID of the location we're changing the map for.
 *
 * @return string The maps URL.
 */
function yoast_seo_local_change_map_location_url( $url, $location_id ) {
    // Change this to the post ID you want to match against.
    if ( $location_id === 1 ) {
        $url = 'https://www.yoast.com';
    }

    return $url;
}
```
