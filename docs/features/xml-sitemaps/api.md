---
id: api
title: XML Sitemaps - API documentation
sidebar_label: API
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/xml-sitemaps/specification.md
description: Coming soon.
---

Whilst Yoast SEO provides sensible default behaviours for XML sitemaps (and UI controls for inclusion/exclusion), custom themes or plugins sometimes need to alter our markup or logic.
In those cases, you can use the examples below to modify how our sitemaps are generated and output.

## Excluding content types

### Exclude specific posts
```php
/**
 * Excludes posts from XML sitemaps
 */
function exclude_posts_from_xml_sitemaps() {
    $posts = array( 1, 2, 3 );
    return $posts;
}
add_filter( 'wpseo_exclude_from_sitemap_by_post_ids', 'exclude_posts_from_xml_sitemaps' );
```

### Exclude a post type
```php
/**
 * Exclude a post type from XML sitemaps
 */
function sitemap_exclude_post_type( $value, $post_type ) {
    $post_type_slug = 'recipes'; // An example custom post type slug.
    if ( $post_type == $post_type_slug ) return true;
}
add_filter( 'wpseo_sitemap_exclude_post_type', 'sitemap_exclude_post_type', 10, 2 );
```

### Exclude a taxonomy
```php
/**
 * Exclude a taxonomy from XML sitemaps
 */
function sitemap_exclude_taxonomy( $value, $taxonomy ) {
    $taxonomy_slug = 'ingredients'; // An example taxonomy slug.
    if ( $taxonomy == $taxonomy_slug ) return true;
}
add_filter( 'wpseo_sitemap_exclude_taxonomy', 'sitemap_exclude_taxonomy', 10, 2 );
```

### Exclude an author
Coming soon. See `wpseo_sitemap_exclude_author`.

### Exclude a taxonomy term
Coming soon. See `wpseo_exclude_from_sitemap_by_term_ids`.

## Adding content

### Add a custom post type
```php
/**
 * Adds an XML sitemap for a custom post type
 */
function enable_custom_sitemap() {
    $post_type = 'recipes'; // An example custom post type slug.
    global $wpseo_sitemaps;
    if ( isset( $wpseo_sitemaps ) && ! empty ( $wpseo_sitemaps ) ) {
        $wpseo_sitemaps->register_sitemap( $post_type, 'create_TYPE_sitemap' );
    }
}
add_action( 'init', 'enable_custom_sitemap' );
```

### Add additional/external XML sitemaps to the XML sitemap index
```php
/**
 * Writes additional/custom XML sitemap strings to the XML sitemap index
 */
function add_sitemap_custom_items( $sitemap_custom_items ) {
   $sitemap_custom_items .= '
<sitemap>
<loc>http://www.example.com/external-sitemap-1.xml</loc>
<lastmod>2017-05-22T23:12:27+00:00</lastmod>
</sitemap>';

return $sitemap_custom_items;
}
add_filter( 'wpseo_sitemap_index', 'add_sitemap_custom_items' );
```

### Add additional/dynamic URLs to a sitemap
Coming soon. See `apply_filters( 'wpseo_sitemap_{$type}_content', string $content )`.

## Misc

## Alter the URL of an entry
Coming soon. See `wpseo_xml_sitemap_post_url`.

### Alter the number of sitemap entries
```php
/**
 * Alters the number of entries in each XML sitemap
 */
function max_entries_per_sitemap() {
    return 100;
}

add_filter( 'wpseo_sitemap_entries_per_page', 'max_entries_per_sitemap' );
```
