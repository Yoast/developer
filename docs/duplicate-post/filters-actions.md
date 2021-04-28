---
id: filters-actions
title: Yoast Duplicate Post - Filters and actions
sidebar_label: Filters & actions
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/duplicate-post/filters-actions.md
---

## Filters

### `duplicate_post_excludelist_filter`
In some cases, you might not want Duplicate Post to copy custom fields when duplicating a post. This filter allows you to filter out such fields.

In either your custom plugin or your theme's `functions.php`, add the following code and filter out any custom field you don't want to be duplicated.

```php
/** 
 * Filters out custom fields from being duplicated in addition to the defaults.
 *
 * @param array $meta_excludelist The default exclusion list, based on the “Do not copy these fields” setting, plus some other field names.
 *
 * @return array The custom fields to exclude.
 */
function my_custom_fields_filter( $meta_excludelist ) {
    // Merges the defaults array with our own array of custom fields.
    return array_merge( $meta_excludelist, [ 'my_custom_field1', 'my_custom_field2' ] );
}

add_filter( 'duplicate_post_excludelist_filter', 'my_custom_fields_filter' );
```

### `duplicate_post_meta_keys_filter`
If you want to retrieve or alter custom fields' keys _after_ excluding custom fields you don't want to be duplicated, you can use this filter.

In either your custom plugin or your theme's `functions.php`, add the following code and filter the meta keys.

```php
/** 
 * Adds an additional meta key to the stack.
 *
 * @param array $meta_keys The keys of the custom fields in the original post, minus those that were previously excluded.
 *
 * @return array The custom fields.
 */
function my_custom_post_meta_keys_filter( $meta_keys ) {
    // Example: Add key my_custom_field3
    $meta_keys[] = 'my_custom_field3';

    return $meta_keys;
}

add_filter( 'duplicate_post_meta_keys_filter', 'my_custom_post_meta_keys_filter' );
```

### `duplicate_post_get_clone_post_link`

If (for some reason) you need to retrieve or alter the duplicate post link for a post, you can use this filter to do so.

In either your custom plugin or your theme's `functions.php`, add the following code and retrieve or alter the post link

```php
/** 
 * Add a custom argument to the clone post link.
 *
 * @param string $link The post clone link URL.
 *
 * @return string The post clone link URL with the added argument.
 */
function my_custom_get_clone_post_link( $link ) {
    // Example: Add a query argument to the link.
    return add_query_arg( 'my_arg', 'hello-world', $link );
}

add_filter( 'duplicate_post_get_clone_post_link', 'my_custom_get_clone_post_link' );
```

### `duplicate_post_clone_post_link`

This filter is used in conjunction with the [`duplicate_post_clone_post_link`](functions-template-tags.md#duplicate_post_clone_post_link) template tag and allows you to manipulate parts of the outputted link.

In either your custom plugin or your theme's `functions.php`, add the following code and retrieve or alter the post link's HTML

```php
/** 
 * Ensure the HTML of the post's clone link is always wrapped in a div with some custom CSS.
 *
 * @param string $link The post clone link as HTML.
 *
 * @return string The post clone link as HTML.
 */
function my_custom_clone_post_link( $link ) {
    return '<div class="my_custom_css">' . $link . '</div>';
}

add_filter( 'duplicate_post_clone_post_link', 'my_custom_clone_post_link' );
```

Now, any time you call the `duplicate_post_clone_post_link` in your theme, the outputted link will _always_ be wrapped in our custom div tag.

### `duplicate_post_enabled_post_types`

If (for some reason) you need to alter the list of post types for which the plugin is enabled, you can use this filter to do so.
It is called after the value for the option has been read from the database, so it can be used to override the settings or to enable post types that are not displayed in the Options page.

For example, in either your custom plugin or your theme's `functions.php`, add the following code to enable the plugin for the `product` post type:

```php
/** 
 * Enable the plugin for the WooCommerce "product" post type, which is unavailable by default.
 *
 * @param array $enabled_post_types The array of post type names for which the plugin is enabled.
 *
 * @return array The filtered array of post types names.
 */
function my_custom_enabled_post_types( $enabled_post_types ) {
	$enabled_post_types[] = 'product';
	return $enabled_post_types;
}
add_filter('duplicate_post_enabled_post_types', 'my_custom_enabled_post_types');
```

Now, any time you call the `duplicate_post_clone_post_link` in your theme, the outputted link will _always_ be wrapped in our custom div tag.

## Actions

### `duplicate_post_pre_copy`

This action is called right before cloning of the post or page starts.

In either your custom plugin or your theme's `functions.php`, add the following code if you want to hook into this action.

```php
/**
 * Performs some actions before copying the post.
 */
function my_custom_duplicate_post_pre_copy() {
    // Perform some actions before copying the post.
}

add_action( 'duplicate_post_pre_copy', 'my_custom_duplicate_post_pre_copy' );
```

### `duplicate_post_post_copy`

This action is called right after cloning of the post or page starts.

In either your custom plugin or your theme's `functions.php`, add the following code if you want to hook into this action.

```php
/**
 * Performs some actions after copying the post.
 */
function my_custom_duplicate_post_post_copy() {
    // Perform some actions after copying the post.
}

add_action( 'duplicate_post_post_copy', 'my_custom_duplicate_post_post_copy' );
```

### `dp_duplicate_post`

This action is called right after the WordPress standard fields of a post, or a non-hierarchical custom type item, have been copied.
Duplicate Post itself hooks some functions to this action to copy custom fields, taxonomies, attachments, comments etc.

This action has the following parameters:

 * `$new_post_id` (int) - The newly created post's ID.
 * `$post` (WP_Post) - The original post's object.
 * `$status` (string) - The destination status as set by the calling method: e.g. ‘draft’ if the function has been called using the “New Draft” links. Empty otherwise.

In either your custom plugin or your theme's `functions.php`, add the following code if you want to hook into this action.

```php
/**
 * Performs some actions after the WordPress standard fields of a post, or a non-hierarchical custom type item, have been copied.
 * 
 * @param int $new_post_id The newly created post's ID.
 * @param WP_Post $post The original post's object.
 * @param string $status The destination status as set by the calling method: e.g. ‘draft’ if the function has been called using the “New Draft” links. Empty otherwise.
 */
function my_custom_dp_duplicate_post( $new_post_id, $post, $status ) {
    // Perform some actions after the post has been duplicated.
}

add_action( 'dp_duplicate_post', 'my_custom_dp_duplicate_post' );
```

### `dp_duplicate_page`

This action is called right after the WordPress standard fields of a page, or a non-hierarchical custom type item, have been copied.
Duplicate Post itself hooks some functions to this action to copy custom fields, taxonomies, attachments, comments etc.

This action has the following parameters:

 * `$new_post_id` (int) - The newly created post's ID.
 * `$post` (WP_Post) - The original post's object.
 * `$status` (string) - The destination status as set by the calling method: e.g. ‘draft’ if the function has been called using the “New Draft” links. Empty otherwise.

In either your custom plugin or your theme's `functions.php`, add the following code if you want to hook into this action.

```php
/**
 * Performs some actions the WordPress standard fields of a page, or a non-hierarchical custom type item, have been copied.
 * 
 * @param int $new_post_id The newly created post's ID.
 * @param WP_Post $post The original post's object.
 * @param string $status The destination status as set by the calling method: e.g. ‘draft’ if the function has been called using the “New Draft” links. Empty otherwise.
 */
function my_custom_dp_duplicate_page( $new_post_id, $post, $status ) {
    // Perform some actions after the post has been duplicated.
}

add_action( 'dp_duplicate_page', 'my_custom_dp_duplicate_page' );
```
