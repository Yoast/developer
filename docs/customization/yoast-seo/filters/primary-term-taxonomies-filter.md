---
id: primary-term-taxonomies-filter
title: Yoast SEO - Altering Yoast SEO primary terms
sidebar_label: Altering Yoast SEO primary terms
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/yoast-seo/filters/primary-term-taxonomies-filter.md
---
Yoast SEO allows you to set categories as a primary term for posts and pages. In some cases, you might want to allow your users to use additional, custom taxonomies to be used as a primary term.
The `wpseo_primary_term_taxonomies` filter allows you to alter what taxonomies are available to be assigned as a primary term.

## Usage
### Adding taxonomies

The example below shows how you can use the filter to add a taxonomy to the list of potential primary terms.
```php
<?php

/**
 * Adds the custom category to be selectable as a primary term.
 *
 * @param array  $taxonomies     The current taxonomies that can be used as a primary term.
 * @param string $post_type      The current post type.
 * @param array  $all_taxonomies All registered taxonomies.
 *
 * @return mixed The taxonomies that can be used as primary terms.
 */
function add_additional_primary_term_taxonomies( $taxonomies, $post_type, $all_taxonomies ) {
	if ( $post_type === 'my_custom_post_type' && isset( $all_taxonomies['my_custom_category'] ) ) {
		$taxonomies['my_custom_category'] = $all_taxonomies['my_custom_category'];
	}

	return $taxonomies;
}

add_filter( 'wpseo_primary_term_taxonomies', 'add_additional_primary_term_taxonomies', 10, 3 );
```

### Removing taxonomies

The example below shows how you can use the filter to remove a particular taxonomy from being selected as a primary term.
```php
<?php

/**
 * Removes a custom category to be selectable as a primary term.
 *
 * @param array  $taxonomies     The current taxonomies that can be used as a primary term.
 * @param string $post_type      The current post type.
 * @param array  $all_taxonomies All registered taxonomies.
 *
 * @return mixed The taxonomies that can be used as primary terms.
 */
function remove_primary_term_taxonomies( $taxonomies, $post_type, $all_taxonomies ) {
	if ( isset( $taxonomies['my_custom_category'] ) ) {
		unset( $taxonomies['my_custom_category'] );
	}

	return $taxonomies;
}

add_filter( 'wpseo_primary_term_taxonomies', 'remove_primary_term_taxonomies', 11, 3 );
```
