---
id: cornerstone-post-types-filter
title: Yoast SEO - Altering Yoast SEO cornerstone post types
sidebar_label: Altering Yoast SEO cornerstone post types
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/yoast-seo/filters/cornerstone-post-types-filter.md
---
Yoast SEO allows you to mark public (custom) post types as cornerstone content. In some cases, you might want to limit what can be marked.
The `wpseo_cornerstone_post_types` filter allows you to alter what post types will be able to be marked as cornerstone content.

## Usage

### Removing post types

The example below shows how you can use the filter to remove a particular custom post type from being able to be marked as cornerstone content.
```php
<?php

/**
 * Removes 'my_custom_post_type' from being allowed to be marked as cornerstone content.
 *
 * @param array $post_types The currently included post types.
 *
 * @return array The remaining post types.
 */
function remove_custom_post_type_from_cornerstone( $post_types ) {
	if ( isset( $post_types['my_custom_post_type'] ) ) {
		unset( $post_types['my_custom_post_type'] );
	}

	return $post_types;
}

add_filter( 'wpseo_cornerstone_post_types', 'remove_custom_post_type_from_cornerstone' );
```
