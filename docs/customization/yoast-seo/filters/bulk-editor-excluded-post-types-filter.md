---
id: bulk-editor-excluded-post-types-filter
title: "Yoast SEO: Exclude post types from the bulk editor"
sidebar_label: Exclude post types from the bulk editor
---

The Yoast SEO bulk editor (located at **SEO → Tools → Bulk editor**) lets you edit SEO titles and meta descriptions for multiple posts at once. By default, the `attachment` post type is excluded from the bulk editor.

The `wpseo_bulk_editor_excluded_post_types` filter lets you change which post types are excluded. The filter receives the current exclusion list as an `array<string>` of post type names and must return an `array<string>`.

## Usage

### Excluding additional post types

The example below excludes the `product` post type in addition to the default `attachment` exclusion.

```php
<?php

/**
 * Excludes the 'product' post type from the Yoast SEO bulk editor.
 *
 * @param array<string> $excluded_post_types Post types currently excluded from the bulk editor.
 *
 * @return array<string> The updated list of excluded post types.
 */
function my_exclude_product_from_bulk_editor( $excluded_post_types ) {
    $excluded_post_types[] = 'product';
    return $excluded_post_types;
}

add_filter( 'wpseo_bulk_editor_excluded_post_types', 'my_exclude_product_from_bulk_editor' );
```

