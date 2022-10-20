---
id: yoast-seo-usage-tracking-filter
title: Yoast SEO - Enables Yoast SEO usage tracking
image: https://yoast.com/shared-assets/opengraph/image.php?title=Yoast%20SEO%20-%20Enables%20Yoast%20SEO%20usage%20tracking
sidebar_label: Enables Yoast SEO usage tracking
---
Yoast SEO has a usage tracking feature to track basic site and server data, the plugin usage and the other plugins on the site as well as the theme used on the site.
The `wpseo_enable_tracking` filter allows you to alter whether Yoast SEO will track this data.
On Yoast SEO free, usage tracking is only enabled when the user explicitly opt in to this in the configuration wizard. On our add-ons or Yoast SEO Premium, we opt in the data tracking by default.

## Usage

### Enabling Yoast SEO data tracking

The example below shows how you can use the filter to enable Yoast SEO data tracking.
```php
<?php

/**
 * Enable Yoast SEO data tracking
 */
add_filter( 'wpseo_enable_tracking', '__return_true' ); 
```
