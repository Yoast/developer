---
id: disabling-yoast-seo
title: Yoast SEO - Disabling Yoast SEO output for a specific page
sidebar_label: Disabling Yoast SEO output
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/yoast-seo/disabling-yoast-seo.md
---
As of Yoast SEO 14.0, we've changed the way you can interact with the output of Yoast SEO. 
However, in some cases, you might want to disable the output coming from Yoast SEO on a specific post.

Please add the following code to your theme's `functions.php` file.

```php
add_action( 'template_redirect', 'remove_wpseo' );

/**
 * Removes output from Yoast SEO on the frontend for a specific post, page or custom post type.
 */
function remove_wpseo() {
	if ( is_single ( 1 ) ) {
		$front_end = YoastSEO()->classes->get( Yoast\WP\SEO\Integrations\Front_End_Integration::class );

		remove_action( 'wpseo_head', [ $front_end, 'present_head' ], -9999 );
	}
}
```

The above example will disable output for the post with the ID of 1. You can also adapt the code to a variety of different situations:

* To disable the output for a page, you can replace `is_single` with `is_page` function: 

```php 
if ( is_page ( 1 ) ) { //... }
```

* To disable the output for multiple posts, you can pass an array to the `is_single` function. This can also be used with the previous `is_page` solution: 

```php 
if ( is_single( [ 123456, 234567, 345678 ] ) ) { //... }
```

* To disable the output for a custom post type, you need to change `is_single` to `is_singular` and then pass the slug of your custom post type to the `is_singular` function:

```php 
if ( is_singular( 'my_custom_posttype' ) ) { //... }
```
