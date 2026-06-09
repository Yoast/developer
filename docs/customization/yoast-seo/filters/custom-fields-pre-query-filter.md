---
id: custom-fields-pre-query-filter
title: "Yoast SEO: Short-circuit the custom fields lookup"
sidebar_label: Short-circuit custom fields lookup
---

The `wpseo_custom_fields_pre_query` filter lets you bypass Yoast SEO's default
`SELECT DISTINCT meta_key` query against the `wp_postmeta` table. On sites with
a very large `postmeta` table, that query can be slow. Use this filter to supply
a pre-computed or alternative list of custom field keys, and Yoast SEO will skip
the database query entirely.

## Parameters

| Parameter        | Type              | Description                                                                                 |
|------------------|-------------------|---------------------------------------------------------------------------------------------|
| `$custom_fields` | `string[]`\|`null`| Pre-computed list of `meta_key` names. Return `null` to let the default query run.          |
| `$limit`         | `int`             | The configured result limit (default `30` via `postmeta_form_limit`). Honor it in custom queries. |

When the filter returns a non-null array, Yoast SEO uses that array directly and
does **not** run the default query.

## Usage

### Supplying a static list

```php
<?php

/**
 * Supplies a hard-coded list of custom field keys, skipping the postmeta query.
 *
 * @param string[]|null $custom_fields Pre-computed list of meta_key names, or null.
 * @param int           $limit         The configured result limit.
 *
 * @return string[] The custom field keys to use.
 */
function my_custom_fields_list( $custom_fields, $limit ) {
    return [
        'my_seo_field',
        'product_sku',
        'featured_text',
    ];
}

add_filter( 'wpseo_custom_fields_pre_query', 'my_custom_fields_list', 10, 2 );
```

### Supplying a cached list

```php
<?php

/**
 * Returns a transient-cached list of custom field keys.
 *
 * @param string[]|null $custom_fields Pre-computed list, or null.
 * @param int           $limit         The configured result limit.
 *
 * @return string[]|null Cached list, or null to fall back to the default query.
 */
function my_cached_custom_fields( $custom_fields, $limit ) {
    $cached = get_transient( 'my_custom_field_keys' );

    if ( is_array( $cached ) ) {
        return array_slice( $cached, 0, $limit );
    }

    return null; // Fall back to Yoast SEO's own query this time.
}

add_filter( 'wpseo_custom_fields_pre_query', 'my_cached_custom_fields', 10, 2 );
```
