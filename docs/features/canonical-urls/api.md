---
id: api
title: API documentation
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/xml-sitemaps.md
---

# Yoast SEO canonical API

To change the canonical URL that Yoast SEO generated for a URL programatically, you can use the `wpseo_canonical` filter. 

For example, the following code would change the canonical on a page with ID `12345`:

```php
/**
 * Filter the canonical URL.
 *
 * @param string $canonical The current page's generated canonical URL.
 *
 * @return string The filtered canonical.
 */
function prefix_filter_canonical_example( $canonical ) {
  if ( is_page( 12345 ) ) {
    $canonical = 'https://example.com/canonical-url/';
  }

  return $canonical;
}

add_filter( 'wpseo_canonical', 'prefix_filter_canonical_example' );
```
