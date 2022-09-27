---
id: api
title: Descriptions - API documentation
sidebar_label: API
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/seo-tags/descriptions/api.md
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
