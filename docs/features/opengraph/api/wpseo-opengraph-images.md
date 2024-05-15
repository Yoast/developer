---
id: wpseo-opengraph-images
title: "Yoast SEO: change the OpenGraph image output"
sidebar_label: Alter OpenGraph images output
---
These filters allow altering an existing OpenGraph image and/or adding images to the output. 

## Usage

### Alter the OpenGraph image for a single post

If an `og:image` already exists for the page/post/archive, it is replaced by the new one returned by the filter. If there is no `og:image`, nothing is done by the filter.

```php
<?php
/**
 * Alter the OpenGraph image for a single post
 */
function alter_existing_opengraph_image( $image ) {
    $image_id = $an_image_id;
    $post_id = $a_post_id;
    if ( is_single( $post_id ) ) {
        $image = wp_get_attachment_image_src( $image_id )[0];
    }
    return $image;
}
add_filter( 'wpseo_opengraph_image', 'alter_existing_opengraph_image' );
```

The same can be done for the `width`, `height` and `type` tags. This can done by using the following three filters:
```php
<?php
/**
 * Alter the OpenGraph image width for a single post type.
 */
function change_opengraph_image_width( $width ) {
    if( is_singular( 'books' ) ) {
        return 150;
    }
    return $width;
}
/**
 * Alter the OpenGraph image height for a single post type.
 */
function change_opengraph_image_height ( $height ) {
	if( is_singular( 'books' ) ) {
        return 250;
    }
    return $height;
}
/**
 * Alter the OpenGraph image type for a single post type.
 */
function change_opengraph_image_type ( $type ) {
	if( is_singular( 'books' ) ) {
        return 'png';
    }
    return $type;
}

add_filter( 'wpseo_opengraph_image_width', 'change_opengraph_image_width' );
add_filter( 'wpseo_opengraph_image_height', 'change_opengraph_image_height' );
add_filter( 'wpseo_opengraph_image_type', 'change_opengraph_image_type' );
```

### Add an extra image to the top of the og:image tags array

The `wpseo_add_opengraph_images` filter allows to add an extra image to the top of the og:image tags array. Each image added through the filter will have `og:image`, `og:image:width` and `og:image:height` tags.

```php
<?php
/**
 * Add an extra image to the top of the og:image tags array
 */
function add_image_to_opengraph_tags( $image_container ) {
    $image_id = $some_id;
    $image_container->add_image_by_id( $image_id );
}
add_filter( 'wpseo_add_opengraph_images', 'add_image_to_opengraph_tags' );
```

### Add an image to the end of the og:image tags array

The `wpseo_add_opengraph_additional_images` filter allows to add an image to the end of the `og:image` tags array. Each image added through the filter will have `og:image`, `og:image:width` and `og:image:height` tags.

```php
<?php
/**
 * Add an image to the end of the og:image tags array
 */
function add_additional_image_to_opengraph_tags( $image_container ) {
    $image_id = $some_id;
    $image_container->add_image_by_id( $image_id );
}
add_filter( 'wpseo_add_opengraph_additional_images', 'add_additional_image_to_opengraph_tags' );
```

