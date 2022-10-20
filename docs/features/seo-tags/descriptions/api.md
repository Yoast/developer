---
id: api
title: "Yoast SEO Meta descriptions: API documentation"
image: https://yoast.com/shared-assets/opengraph/?title=Yoast%20SEONEWLINEMeta%20descriptions:NEWLINEAPI%20documentation
sidebar_label: API
description: Instructions on how to modify our description values programmatically.
---

To change the meta description tag that Yoast SEO generated programmatically, you can use the `wpseo_metadesc` filter.

## Change the meta description tag
For example, the following code would change the meta description on a page with ID `12345`:

```php
/**
 * Filters the description.
 *
 * @param string $description The current page's generated meta description.
 *
 * @return string The filtered meta description.
 */
function prefix_filter_description_example( $description ) {
  if ( is_page( 12345 ) ) {
    $description = 'My custom custom meta description';
  }
  return $description;
}
add_filter( 'wpseo_metadesc', 'prefix_filter_description_example' );
```
