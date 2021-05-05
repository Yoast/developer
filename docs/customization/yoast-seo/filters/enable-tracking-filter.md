---
id: enable-tracking-filter
title: Yoast SEO - Enables the data tracking of Yoast SEO Premium and add-ons
sidebar_label: Enables the data tracking of Yoast SEO Premium and add-ons
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/yoast-seo/filters/enable-tracking-filter.md
---
Yoast SEO has a usage tracking feature to track basic site data, server date, the plugin usage and the others plugins on the site as well as the theme used on the site.
The `wpseo_enable_tracking` filter allows you to alter if whether Yoast SEO will track this data.
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
