---
id: disable-search-engine-pings
title: "Yoast SEO: Disable search engine pings"
image: https://yoast.com/shared-assets/opengraph/?title=Yoast%20SEONEWLINEDisable%20search%20engine%20pings
sidebar_label: Disable search engine pings
---
By default, Yoast SEO pings Google and Bing when you publish a new post with the URL of your XML sitemap. By doing this, the search engine can easily find the new URL and index it. If publishing on your site is disconnected from the URL being accessible live on the site, you will want to disable this functionality and do your own pings.

## Usage
### Disabling the pings

The code below disables the automatic ping:

```php
<?php

add_filter( 'wpseo_allow_xml_sitemap_ping', '__return_false' );
```

### Pinging when you're ready

When you're ready to do the ping yourself, you can do it with the code below:

```php
<?php


$url = rawurlencode( WPSEO_Sitemaps_Router::get_base_url( 'sitemap_index.xml' ) );

// Ping Google and Bing.
wp_remote_get( 'https://www.google.com/ping?sitemap=' . $url, [ 'blocking' => false ] );
wp_remote_get( 'https://www.bing.com/ping?sitemap=' . $url, [ 'blocking' => false ] );

```
