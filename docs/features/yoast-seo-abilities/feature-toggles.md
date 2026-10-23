---
id: feature-toggles
title: "Yoast SEO Abilities - Feature toggles"
sidebar_label: Feature toggles
description: This documentation explains the abilities that enable or disable Yoast SEO features.
---

Yoast SEO registers six abilities that let agents enable or disable individual features. Each ability writes the corresponding option and—when the feature has side-effects on toggle—performs the additional work (generating or removing a file, flushing a cache, etc.).

All six are listed at `/wp-json/wp-abilities/v1/abilities?category=yoast-seo`.

## Permissions

Every feature-toggle ability is gated behind the `wpseo_manage_options` capability, the same capability that gates the Yoast SEO settings page where those toggles live.

## Annotations

Every ability declares [behavior annotations](overview.md#annotations) as hints for AI agents and other MCP clients:

| Ability | Read-only | Destructive | Idempotent |
|---|---|---|---|
| `yoast-seo/set-llms-txt-status` | No | Not declared (`null`) | Yes |
| `yoast-seo/set-schema-aggregation-endpoint-status` | No | Not declared (`null`) | Yes |
| `yoast-seo/set-schema-framework-status` | No | Not declared (`null`) | Yes |
| `yoast-seo/set-xml-sitemap-status` | No | Not declared (`null`) | Yes |
| `yoast-seo/set-open-graph-status` | No | Not declared (`null`) | Yes |
| `yoast-seo/set-x-card-status` | No | Not declared (`null`) | Yes |

`destructive` is left undeclared (`null`) for all of them rather than set to `false`: disabling a feature removes or stops serving content (the llms.txt file, Open Graph tags, the schema graph, sitemaps, etc.), which may be unwanted. All six are idempotent: calling them again with the same `enabled` value leaves the site in the same state.

:::caution
Abilities can change settings that the Yoast UI normally double-checks with confirmation warnings, such as turning the Schema Framework off. That double check doesn't happen here, so it's worth knowing what you're changing before you change it. Use is at the user's discretion.
:::

## Input and output

Every ability accepts a single `enabled` boolean and returns an `enabled` boolean confirming the new state. The `set-llms-txt-status` ability additionally returns a `warning` string when the feature was enabled but the llms.txt file could not be generated.

**Request body (POST to `/run`):**

```json
{
    "input": {
        "enabled": true
    }
}
```

**Typical response:**

```json
{
    "enabled": true
}
```

**Response for `set-llms-txt-status` when file generation fails:**

```json
{
    "enabled": true,
    "warning": "The llms.txt file could not be generated."
}
```

## Availability

Most feature-toggle abilities are always available. Two have conditions:

- **`yoast-seo/set-llms-txt-status`** — not available on WordPress multisite installations. The llms.txt feature cannot be enabled on a network, so the ability is not offered rather than failing on every call.
- **`yoast-seo/set-xml-sitemap-status`** — not available when a network admin has forbidden the XML sitemap for the site. In that case the option validation silently forces the feature back off on save, making every call a no-op, so the ability is not offered instead.

An unavailable ability does not appear in the `/wp-json/wp-abilities/v1/abilities` listing.

## `yoast-seo/set-llms-txt-status`

Enables or disables Yoast SEO's llms.txt feature. Enabling it generates an llms.txt file for the site and keeps it up to date; disabling it removes the generated file.

**Usage:**

```
POST /wp-json/wp-abilities/v1/abilities/yoast-seo/set-llms-txt-status/run
```

```json
{
    "input": {
        "enabled": true
    }
}
```

## `yoast-seo/set-schema-aggregation-endpoint-status`

Enables or disables Yoast SEO's Schema aggregation endpoint feature. Enabling it serves the site's public structured data as a schema map at `/schemamap.xml` and through the schema aggregator REST endpoints, so conversational interfaces like NLWeb can query the site's content; disabling it stops serving them.

**Usage:**

```
POST /wp-json/wp-abilities/v1/abilities/yoast-seo/set-schema-aggregation-endpoint-status/run
```

```json
{
    "input": {
        "enabled": true
    }
}
```

## `yoast-seo/set-schema-framework-status`

Enables or disables Yoast SEO's Schema Framework feature. Enabling it outputs a single structured data graph (JSON-LD) on the site's pages, so search engines and language models can consistently read every person, product, organization, and piece of content; disabling it stops outputting the graph.

**Usage:**

```
POST /wp-json/wp-abilities/v1/abilities/yoast-seo/set-schema-framework-status/run
```

```json
{
    "input": {
        "enabled": true
    }
}
```

## `yoast-seo/set-xml-sitemap-status`

Enables or disables Yoast SEO's XML sitemap feature. Enabling it serves the sitemap index at `/sitemap_index.xml` and its sub-sitemaps, and replaces the WordPress core sitemaps; disabling it stops serving them.

**Usage:**

```
POST /wp-json/wp-abilities/v1/abilities/yoast-seo/set-xml-sitemap-status/run
```

```json
{
    "input": {
        "enabled": true
    }
}
```

## `yoast-seo/set-open-graph-status`

Enables or disables Yoast SEO's Open Graph data feature. Enabling it outputs Open Graph meta tags on the site's pages, so Facebook and other social media can display a preview with an image and a text excerpt when a link to the site is shared; disabling it stops outputting the tags.

**Usage:**

```
POST /wp-json/wp-abilities/v1/abilities/yoast-seo/set-open-graph-status/run
```

```json
{
    "input": {
        "enabled": false
    }
}
```

## `yoast-seo/set-x-card-status`

Enables or disables Yoast SEO's X card data feature. Enabling it outputs X card meta tags on the site's pages, so X can display a preview with an image and a text excerpt when a link to the site is shared; disabling it stops outputting the tags.

**Usage:**

```
POST /wp-json/wp-abilities/v1/abilities/yoast-seo/set-x-card-status/run
```

```json
{
    "input": {
        "enabled": false
    }
}
```

## How to disable them programmatically

You can unregister any of these abilities through the WordPress-native `wp_abilities_api_init` action:

```php
<?php
add_action( 'wp_abilities_api_init', function() {
    $abilities = [
        'yoast-seo/set-llms-txt-status',
        'yoast-seo/set-schema-aggregation-endpoint-status',
        'yoast-seo/set-schema-framework-status',
        'yoast-seo/set-xml-sitemap-status',
        'yoast-seo/set-open-graph-status',
        'yoast-seo/set-x-card-status',
    ];
    foreach ( $abilities as $ability ) {
        if ( wp_has_ability( $ability ) ) {
            wp_unregister_ability( $ability );
        }
    }
}, 20 ); // Run after Yoast SEO registers at default priority 10.
```
