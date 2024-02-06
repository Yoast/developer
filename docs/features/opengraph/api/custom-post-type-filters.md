---
id: wpseo-opengraph-post-type-filters
title: "Yoast SEO: Change the OpenGraph tags for post type"
sidebar_label: Alter OpenGraph output for post type
---
These filters allow altering an existing OpenGraph output for a specific post type. <br />
They are used in `Yoast SEO Premium` for Social media appearance for the default post, with priority 10. When using with `Yoast SEO Premium`, make sure to use the right priotity to avoid conflicts.

## Alter the OpenGraph title

Sets the `og:title` value returned by the filter. 
Embed the post type in the filter name:

```php
add_filter( 'Yoast\WP\SEO\open_graph_title_{post_type}', 'callback_function' );
```

### Usage

```php
<?php
/**
 * Alter the OpenGraph title for post type `post`.
 * 
 * @param  string $title   The default OpenGraph title.
 * @param  int    $post_id The post ID.
 * @return string The new OpenGraph title.
 */
public function alter_open_graph_title_for_post( $title, $post_type ) {
    // Add your logic here.

    return $title;
}
add_filter( 'Yoast\WP\SEO\open_graph_title_post', 'alter_open_graph_title_for_post', 10, 2 );
```

## Alter the OpenGraph description

Sets the `og:description` value returned by the filter. 
Embed the post type in the filter name:

```php
add_filter( 'Yoast\WP\SEO\open_graph_description_{post_type}', 'callback_function' );
```

### Usage

```php
<?php
/**
 * Alter the OpenGraph description for post type `post`.
 * 
 * @param  string  $description The default OpenGraph description.
 * @param  string  $post_type   The post type.
 * @return string  The new OpenGraph description.
 */
public function alter_open_graph_description_for_post( $description, $post_type ) {
    // Add your logic here.

    return $description;
}
add_filter( 'Yoast\WP\SEO\open_graph_description_post', 'alter_open_graph_description_for_post', 10, 2 );
```

## Alter the OpenGraph image

Sets the `og:image` value returned by the filter. 
Embed the post type in the filter name:

```php
add_filter( 'Yoast\WP\SEO\open_graph_image_{post_type}', 'callback_function' );
```

### Usage

```php
<?php
/**
 * Alter the OpenGraph image for post type `post`.
 * 
 * @param  string $image     The default image URL.
 * @param  string $post_type The post type.
 * @return string The new image URL.
 */
public function alter_open_graph_image_for_post( $image, $post_type ) {
    // Add your logic here.

    return $image;
}
add_filter( 'Yoast\WP\SEO\open_graph_image_post', 'alter_open_graph_image_for_post', 10, 2 );
```

## Alter the OpenGraph image by id

Sets the Open Graph image values by the image id returned by the filter. 
Embed the post type in the filter name:

```php
add_filter( 'Yoast\WP\SEO\open_graph_image_id_{post_type}', 'callback_function' );
```

### Usage

```php
<?php
/**
 * Alter the OpenGraph image for post type `post`.
 * 
 * @param  int    $image_id  The default image id.
 * @param  string $post_type The post type.
 * @return string The new image id.
 */
public function alter_open_graph_image_id_for_post( $image_id, $post_type ) {
    // Add your logic here.

    return $image_id;
}
add_filter( 'Yoast\WP\SEO\open_graph_image_id_post', 'alter_open_graph_image_id_for_post', 10, 2 );
```