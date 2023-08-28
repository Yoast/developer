---
id: customizing-attachment-parsing
title: "Yoast SEO: Customizing the way Yoast SEO handles attachments"
sidebar_label: Customizing the way Yoast SEO handles attachments
---

There are multiple ways Yoast SEO can handle attachments added in posts. We have added multiple filters to assure performance in multiple scenario's.
## The scenario's

### Not so many attachments < 10.000

The normal implementation which implements a file scan with `WP_HTML_Tag_Processor` is most likely performant enough.

### A huge amount of attachments > 75.000 and a fast disk
The normal implementation which implements a file scan with `WP_HTML_Tag_Processor` is most likely performant enough.

### A huge amount of attachments > 75.000 and a slow disk

If there are performance issues when saving a post, the following filters can help speed up the process.

```php
add_filter( 'wpseo_indexable_forced_included_post_types', function( $post_types ) {
    $post_types[] = 'attachment';
    return $post_types;
} );
add_action( 'init', function( $post_types ) {
    add_filter( 'wpseo_indexable_excluded_post_types', function( $post_types ) {
       $filtered_post_types = [];
       foreach ( $post_types as $post_type ) {
          if ( $post_type !== 'attachment' ) {
             $filtered_post_types[] = $post_type;
          }
       }
       return $filtered_post_types;
    } );
} );
add_filter('wpseo_force_creating_and_using_attachment_indexables', '__return_true'  );
```
Using this combination of filters allows the system to create indexables for attachments without the need to also enable media archive pages. When these filters are first enabled you will have to run the SEO optimisation in the tools page.
The filters used in this situation are described on [Indexables: Filters](/features/indexables/indexables-filters/)

### A huge amount of attachments > 75.000 and the content scanning slows down the performance.

If the new content scanning solution or the indexables solution happen to slow down the performance there is also an option to revert back to using a regex.

```php
add_filter('wpseo_force_skip_image_content_parsing', '__return_true'  );
```

### When using an image or gallery implementation that does not follow the same html structure as WordPress
Some gallery and image plugins use different HTML markup then WordPress. Our content scan implementation relies on finding the image id in the class of the image tag.
There are two filters that allow the user to change this in order to allow different types of markup. The example below is based on the envira-gallery plugin. This plugin uses the id field in combination with a  `envira-gallery-image-<image_ID>` format, instead of the class field.
```php
add_filter( 'wpseo_image_attribute_containing_id', 'image_attribute_containing_id', 10 );

/**
 * Filter 'wpseo_image_attribute_containing_id' - Allows filtering what attribute will be used to extract image IDs from.
 *
 * Defaults to "class", which is where WP natively stores the image IDs, in a `wp-image-<ID>` format.
 *
 * @api string The attribute to be used to extract image IDs from.
 */
function image_attribute_containing_id() {
    return 'id';
}

add_filter( 'wpseo_extract_id_pattern', 'extract_id_pattern', 10 );

/**
 * Filter 'wpseo_extract_id_pattern' - Allows filtering the regex pattern to be used to extract image IDs from class/attribute names.
 *
 * Defaults to the pattern that extracts image IDs from core's `wp-image-<ID>` native format in image classes.
 *
 * @api string The regex pattern to be used to extract image IDs from class names. Empty string if the whole class/attribute should be returned.
 */
function extract_id_pattern() {
    return '/(?<!\S)envira-gallery-image-(\d+)(?!\S)/i';
}
```
