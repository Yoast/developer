---
id: custom-fields-pre-query-filter
title: "Yoast SEO: Short-circuit the custom-fields lookup"
sidebar_label: Short-circuit custom-fields lookup
---
Yoast SEO populates the custom-field autocomplete in the settings meta box by running a `SELECT DISTINCT meta_key` query against the `wp_postmeta` table. On sites with very large postmeta tables this query can become expensive.

The `wpseo_custom_fields_pre_query` filter lets you short-circuit that query. When the filter callback returns a non-`null` value, the database query is skipped entirely and the returned array is used instead.

## Parameters

- `string[]|null $custom_fields` — Pre-computed list of meta key names, or `null` to run the default query.
- `int $limit` — The configured result limit (default 30, from the `postmeta_form_limit` filter). Honor this value if running a custom query.

## Example: supply a hardcoded list

The simplest use case is returning a fixed list of known custom fields to avoid the database query entirely:

```php
<?php

/**
 * Replaces Yoast SEO's custom-fields DB query with a hardcoded list.
 *
 * @param string[]|null $custom_fields Pre-computed list, or null to run the default query.
 * @param int           $limit         The configured result limit.
 *
 * @return string[] The list of custom field names.
 */
function my_custom_fields_list( $custom_fields, $limit ) {
    return [
        'my_seo_title',
        'my_seo_description',
        'my_custom_field',
    ];
}

add_filter( 'wpseo_custom_fields_pre_query', 'my_custom_fields_list', 10, 2 );
```

## Example: supply a cached list

For sites where the set of custom fields changes over time you can cache the result to avoid repeated queries:

```php
<?php

/**
 * Returns a transient-cached list of postmeta keys.
 *
 * Falls back to null (triggering Yoast SEO's own query) when the cache is empty,
 * so the first uncached request still returns a complete list.
 *
 * @param string[]|null $custom_fields Pre-computed list, or null to run the default query.
 * @param int           $limit         The configured result limit.
 *
 * @return string[]|null The cached list, or null to let Yoast SEO run its default query.
 */
function my_cached_custom_fields( $custom_fields, $limit ) {
    $cached = get_transient( 'my_site_custom_fields' );

    if ( is_array( $cached ) ) {
        return $cached;
    }

    return null; // Let Yoast SEO run its default query and prime your cache separately.
}

add_filter( 'wpseo_custom_fields_pre_query', 'my_cached_custom_fields', 10, 2 );
```

Returning `null` (the default) causes Yoast SEO to run its built-in query unchanged.
