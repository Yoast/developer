---
id: overview
title: "Schema Aggregator: Overview"
sidebar_label: Overview
description: An introduction to the Schema Aggregator feature in Yoast SEO.
---

The Schema Aggregator is a powerful feature in Yoast SEO that collects and serves structured data (schema.org markup) for all content across your WordPress site.

### What gets aggregated

By default, the Schema Aggregator processes:

- All **public post types** (posts, pages, custom post types)

You can customize which post types are included using the `wpseo_schema_aggregator_post_types` filter.

### Schema types

The aggregator handles schema.org types, categorized into 10 contexts:

- **Website**: Site information 
- **Content**: Articles, blog posts, creative works
- **Commerce**: Products, offers, orders
- **Entity**: Organizations, persons, places
- **Event**: Events, schedules
- **Data**: Datasets, statistical information
- **Medical**: Medical conditions, therapies
- **Action**: Potential actions (filtered by default)
- **Enumeration**: Type definitions (filtered by default)
- **Meta**: Schema.org metadata (filtered by default)
- **Website Meta**: Site structure elements, breadcrumbs (filtered by default)

The specific schema types that get filtered can be found at the [source](https://github.com/Yoast/wordpress-seo/blob/trunk/src/schema-aggregator/infrastructure/elements-context-map/default-elements-context-map.php).
## Key features

### REST API endpoints

Access aggregated schema through clean REST endpoints:

```
GET /wp-json/yoast/v1/schema-aggregator/get-schema/{post_type}[/{page}]
GET /wp-json/yoast/v1/schema-aggregator/get-xml
```

### CLI commands

Automate schema aggregation with WP-CLI:

```bash
wp yoast aggregate_site_schema <post_type> [--page=<page>]
wp yoast clear_schema_aggregator_cache [<post_type>]
```

### Caching

The Schema Aggregator implements a dynamic caching strategy:

- **Dynamic TTL**: Cache duration adapts to site size
  - Small sites (< 100 posts): 24 hours
  - Medium sites (100-1000 posts): 12 hours
  - Large sites (> 1000 posts): 6 hours
- **Automatic invalidation**: Cache clears when posts are updated
- **Per-post-type caching**: Each post type has its own cache
- **Debug mode**: Bypass cache with `?debug=1` parameter

### Schema map (XML sitemap for structured data)

The schema map provides a XML index of all available schema endpoints:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<schemalist>
    <schema>
        <loc>https://example.com/wp-json/yoast/v1/schema-aggregator/get-schema/post</loc>
    </schema>
    <schema>
        <loc>https://example.com/wp-json/yoast/v1/schema-aggregator/get-schema/page</loc>
    </schema>
</schemalist>
```

The schema map is automatically referenced in your site's `robots.txt`:

```
Sitemap: https://example.com/wp-json/yoast/v1/schema-aggregator/get-xml
```

### External source support

The Schema Aggregator seamlessly integrates with:

- **WooCommerce**: Product schema automatically included
- **Easy Digital Downloads**: Download schema automatically included
- **Custom sources**: Extend with your own external schema repositories

## Getting started

### Enable the feature

The Schema Aggregator is disabled by default in Yoast SEO. If you need to enable it, you can do so programmatically:

```php
WPSEO_Options::set( 'enable_schema_aggregation_endpoint', true );
```
Or by enabling it via the Yoast SEO settings in the WordPress admin.

### Example aggregated schema in JSON-L format

Fetch schema for the `post` post type:

```bash
curl https://example.com/wp-json/yoast/v1/schema-aggregator/get-schema/post
```

Response:

```json lines
{
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://example.com/hello-world/#article",
    "headline": "Hello World",
    "datePublished": "2026-01-15T10:30:00+00:00",
    "author": {
        "@id": "https://example.com/#/schema/person/1"
    }
}
{
  "@context": "https://schema.org",

  "@type": "Article",
  "@id": "https://example.com/your-second-post/#article",
  "headline": "The second post",
  "datePublished": "2026-01-15T10:30:00+00:00",
  "author": {
    "@id": "https://example.com/#/schema/person/1"
  }
}
```

### Clear cache

Clear all cached schema:

```bash
wp yoast clear_schema_aggregator_cache
```

Clear cache for specific post type:

```bash
wp yoast clear_schema_aggregator_cache post
```
## Learn more

- [Schema.org documentation](https://schema.org/)
- [JSON-LD specification](https://json-ld.org/)
- [Google structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
