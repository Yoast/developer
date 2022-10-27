---
id: api
title: "Yoast SEO XML Sitemaps: API documentation"
sidebar_label: API
description: The API to change the XML sitemap Yoast SEO puts out.
---

Whilst Yoast SEO provides sensible default behaviors for XML sitemaps (and UI controls for inclusion/exclusion), custom themes or plugins sometimes need to alter our markup or logic.
In those cases, you can use the examples below to modify how our sitemaps are generated and output.

## Excluding content types

### Exclude specific posts
```php
/**
 * Excludes posts from XML sitemaps.
 *
 * @return array The IDs of posts to exclude.
 */
function exclude_posts_from_xml_sitemaps() {
    return [ 1, 2, 3 ];
}

add_filter( 'wpseo_exclude_from_sitemap_by_post_ids', 'exclude_posts_from_xml_sitemaps' );
```

### Exclude a post type
```php
/**
 * Exclude a post type from XML sitemaps.
 *
 * @param boolean $excluded  Whether the post type is excluded by default.
 * @param string  $post_type The post type to exclude.
 *
 * @return bool Whether or not a given post type should be excluded.
 */
function sitemap_exclude_post_type( $excluded, $post_type ) {
    return $post_type === 'recipes';
}

add_filter( 'wpseo_sitemap_exclude_post_type', 'sitemap_exclude_post_type', 10, 2 );
```

### Exclude a taxonomy
```php
/**
 * Exclude a taxonomy from XML sitemaps.
 *
 * @param boolean $excluded Whether the taxonomy is excluded by default.
 * @param string  $taxonomy The taxonomy to exclude.
 *
 * @return bool Whether or not a given taxonomy should be excluded.
 */
function sitemap_exclude_taxonomy( $excluded, $taxonomy ) {
    return $taxonomy === 'ingredients';
}

add_filter( 'wpseo_sitemap_exclude_taxonomy', 'sitemap_exclude_taxonomy', 10, 2 );
```

### Exclude an author
```php
/**
 * Excludes author with ID of 5 from author sitemaps.
 *
 * @param array $users Array of User objects to filter through.
 *
 * @return array The remaining authors.
 */
function sitemap_exclude_authors( $users ) {
   return array_filter( $users, function( $user ) {
        if ( $user->ID === 5 ) {
            return false;
        }

        return true;
    } );
}

add_filter( 'wpseo_sitemap_exclude_author', 'sitemap_exclude_authors', 10, 1 );
```

### Exclude a taxonomy term
```php
/**
 * Excludes terms with ID of 3 and 11 from terms sitemaps.
 *
 * @param array $terms Array of term IDs already excluded.
 *
 * @return array The terms to exclude.
 */
function sitemap_exclude_terms( $terms ) {
    return [ 3, 11 ];
}

add_filter( 'wpseo_exclude_from_sitemap_by_term_ids', 'sitemap_exclude_terms', 10, 1 );
```

## Adding content

### Add a custom post type
```php
/**
 * Adds an XML sitemap for a custom post type.
 */
function enable_custom_sitemap() {
    global $wpseo_sitemaps;
    if ( isset( $wpseo_sitemaps ) && ! empty ( $wpseo_sitemaps ) ) {
        $wpseo_sitemaps->register_sitemap( 'recipe', 'create_recipe_sitemap' );
    }
}

add_action( 'init', 'enable_custom_sitemap' );
```

### Add additional/external XML sitemaps to the XML sitemap index
```php
/**
 * Writes additional/custom XML sitemap strings to the XML sitemap index.
 *
 * @param string $sitemap_custom_items XML describing one or more custom sitemaps.
 *
 * @return string The XML sitemap index with the additional XML.
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

## Misc

### Alter the URL of an entry
```php
/**
 * Alters the URL structure for an example custom post type.
 *
 * @param string  $url  The URL to modify.
 * @param WP_Post $post The post object.
 *
 * @return string The modified URL.
 */
function sitemap_post_url( $url, $post ) {
	if ( $post->post_type === 'guest_authors' ) {
		return \str_replace( 'guest-authors', 'guests', $url );
	}

	return $url;
}

add_filter( 'wpseo_xml_sitemap_post_url', 'sitemap_post_url', 10, 2 );
```

### Alter the number of sitemap entries
```php
/**
 * Alters the number of entries in each XML sitemap.
 *
 * @return integer The maximum entries per sitemap.
 */
 function max_entries_per_sitemap() {
    return 100;
}

add_filter( 'wpseo_sitemap_entries_per_page', 'max_entries_per_sitemap' );
```
