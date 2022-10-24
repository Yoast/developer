---
id: api
title: "Yoast SEO Titles - API documentation"
sidebar_label: API
description: Instructions on how to modify our title values programmatically.
---

To change the title tag that Yoast SEO generated programmatically, you can use the `wpseo_title` filter.

## Change the title tag
For example, the following code would change the title on a page with ID `12345`:

```php
/**
 * Filters the title.
 *
 * @param string $title The current page's generated title.
 *
 * @return string The filtered title.
 */
function prefix_filter_title_example( $title ) {
  if ( is_page( 12345 ) ) {
    $title = 'My custom title';
  }
  return $title;
}
add_filter( 'wpseo_title', 'prefix_filter_title_example' );
```
