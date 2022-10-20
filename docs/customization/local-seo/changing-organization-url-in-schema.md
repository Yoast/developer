---
id: changing-organization-url-in-schema
title: "Local SEO: Change the Organization URL in the Schema"
image: https://yoast.com/shared-assets/opengraph/?title=Local%20SEO:NEWLINEChange%20the%20Organization%20URLNEWLINEin%20the%20Schema
sidebar_label: Change the Organization URL in the Schema
---

As of version 13.9, you or your developer can change the default URL in the `Organization` piece of the [Schema](https://developer.yoast.com/features/schema/pieces/organization/) with the `yoast-local-seo-schema-organization-url` filter. This filter takes a single parameter: `$url` (required).
This filter is particularly useful in cases where you have a URL for your organization which does not match the URL of the home page of your website.

In either your custom plugin or your theme's `functions.php`, add the following line and change the default value to your desired URL.

```php
/** 
 * Changes URL in the main Organization piece in the Schema. 
 *
 * @param string $url The URL we're replacing.
 *
 * @return string The URL for the Organization piece in the Schema.
 */
function my_custom_organization_url( $url ) {
    return 'https://mycustomurl.tld';
}

add_filter( 'yoast-local-seo-schema-organization-url', 'my_custom_organization_url', 10, 1 );
```
