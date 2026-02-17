---
id: api-reference
title: "Schema Aggregator: API Reference"
sidebar_label: API Reference
description: REST API endpoints and CLI commands for the Schema Aggregator feature.
---

This document provides a complete reference for the Schema Aggregator REST API endpoints and CLI commands.

## REST API Endpoints

### Get Schema for Post Type (JSON-L)

Retrieve aggregated schema pieces for a specific post type in JSON-L format.

**Endpoint:**
```
GET /wp-json/yoast/v1/schema-aggregator/get-schema/{post_type}[/{page}]
```

**Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `post_type` | string | Yes | - | The post type to aggregate (e.g., `post`, `page`, `product`) |
| `page` | integer | No | 1 | Page number for pagination |
| `debug` | boolean | No | false | Disables cache when set to true (add `?debug=1` to URL) |

**Pagination:**

- Standard post types: 1000 items per page
- Big schema post types (e.g., `product`): 100 items per page

You can customize pagination using filters:
- `wpseo_schema_aggregator_per_page`: Default items per page (1000)
- `wpseo_schema_aggregator_per_page_big`: Items per page for big schema post types (100)
- `wpseo_schema_aggregator_big_schema_post_types`: Define which post types use big pagination (default: `['product']`)

**Response Format:**

```json lines
{
   "@context": "https://schema.org",
   "@type": "Article",
   "@id": "https://example.com/hello-world/#article",
   "headline": "Hello World",
   "description": "A brief description of the article",
   "articleBody": "The full article content...",
   "keywords": ["hello", "world"],
   "datePublished": "2024-01-15T10:30:00+00:00",
   "dateModified": "2024-01-20T14:45:00+00:00",
   "author": {
       "@id": "https://example.com/#/schema/person/1"
   },
   "publisher": {
       "@id": "https://example.com/#organization"
   }
    
}
```

**Cache Headers:**

Responses include cache control headers with a 5-minute (300 seconds) cache duration:

```
Cache-Control: max-age=300
```

**Example Request (cURL):**

```bash
# Get first page of posts
curl https://example.com/wp-json/yoast/v1/schema-aggregator/get-schema/post

# Get second page
curl https://example.com/wp-json/yoast/v1/schema-aggregator/get-schema/post/2

# Debug mode (bypass cache)
curl "https://example.com/wp-json/yoast/v1/schema-aggregator/get-schema/post?debug=1"
```

---

### Get XML Schema Map

Retrieve an XML sitemap of all available schema endpoints.

**Endpoint:**
```
GET /wp-json/yoast/v1/schema-aggregator/get-xml
```

**Parameters:**

None.

**Response Format:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url contentType="structuredData/schema.org">
      <loc>https://exampple.com/wp-json/yoast/v1/schema-aggregator/get-schema/page</loc>
      <lastmod>2026-01-01T14:03:56Z</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
   </url>
   <url contentType="structuredData/schema.org">
      <loc>https://exampple.com/wp-json/yoast/v1/schema-aggregator/get-schema/post</loc>
      <lastmod>2026-01-01T14:03:56Z</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
   </url>
</urlset>
```


**Cache Headers:**

Responses include cache control headers matching the dynamic TTL strategy:
- Small sites (< 100 posts): 24 hours
- Medium sites (100-1000 posts): 12 hours
- Large sites (> 1000 posts): 6 hours

**robots.txt Integration:**

The schema map is automatically referenced in your site's `robots.txt`:

```
Sitemap: https://example.com/wp-json/yoast/v1/schema-aggregator/get-xml
```

**Example Request:**

```bash
curl https://example.com/wp-json/yoast/v1/schema-aggregator/get-xml
```

**Customizing Post Types:**

By default, the schema map includes all public post types. You can customize this using the `wpseo_schema_aggregator_post_types` filter:

```php
add_filter( 'wpseo_schema_aggregator_post_types', 'customize_schema_post_types' );

/**
 * Customize which post types appear in schema aggregator.
 *
 * @link https://developer.yoast.com/features/schema/schema-aggregator/api-reference/#get-schema-map-xml
 *
 * @param array $post_types Array of post type names.
 *
 * @return array Modified array of post type names.
 */
function customize_schema_post_types( $post_types ) {
    // Only include posts and pages.
    return [ 'post', 'page' ];
}
```

---

## CLI Commands

### Aggregate Site Schema

Retrieve aggregated schema for a post type via WP-CLI.

**Command:**
```bash
wp yoast aggregate_site_schema <post_type> [--page=<page>]
```

**Arguments:**

| Argument | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `<post_type>` | string | Yes | - | The post type to aggregate |
| `--page` | integer | No | 1 | Page number for pagination |

**Output Format:**

JSON-LD output is printed to stdout.

**Example Usage:**

```bash
# Get first page of posts
wp yoast aggregate_site_schema post

# Get second page of products
wp yoast aggregate_site_schema product --page=2
```
---

### Clear Schema Cache

Invalidate cached schema data for all or specific post types.

**Command:**
```bash
wp yoast clear_schema_aggregator_cache [<post_type>]
```

**Arguments:**

| Argument | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `<post_type>` | string | No | - | Optional post type to clear cache for |

**Example Usage:**

```bash
# Clear all schema caches
wp yoast clear_schema_aggregator_cache

# Clear cache for posts only
wp yoast clear_schema_aggregator_cache post

# Clear cache for products only
wp yoast clear_schema_aggregator_cache product
```



## Filtering and Enhancement

### What Gets Filtered Out

By default, the Schema Aggregator removes schema pieces in the following categories:

- **Actions**: Potential actions (e.g., `SearchAction`, `ReadAction`)
- **Enumerations**: Type definitions (e.g., `ItemAvailability`, `OfferItemCondition`)
- **Meta**: Schema.org metadata (e.g., `DataType`, `Class`)
- **Website**: Site structure elements (e.g., `WebSite`, `WebPage` when not the main entity)

This filtering reduces noise and focuses on meaningful content entities.

**Customize filtering:**

### What Gets Enhanced

The Schema Aggregator enhances certain schema types with additional data:

#### Article Enhancement

Articles (and subtypes like `BlogPosting`, `NewsArticle`) are enhanced with:

1. **articleBody**: Full post content (configurable max length, default: 5000 characters)
2. **description**: Post excerpt (configurable max length, default: 320 characters)
3. **keywords**: Post tags as keyword array

**Configuration:**

```php
// Adjust article body length.
add_filter( 'wpseo_article_enhance_config_max_article_body_length', function() {
    return 10000; // Increase to 10,000 characters.
} );

// Adjust description length.
add_filter( 'wpseo_article_enhance_config_max_description_length', function() {
    return 500; // Increase to 500 characters.
} );

// Disable article body enhancement.
add_filter( 'wpseo_article_enhance_config_add_article_body', '__return_false' );

// Disable description enhancement.
add_filter( 'wpseo_article_enhance_config_add_description', '__return_false' );

// Disable keywords enhancement.
add_filter( 'wpseo_article_enhance_config_add_keywords', '__return_false' );
```

## See Also

- [Overview](overview.md): Introduction to Schema Aggregator
- [Schema.org documentation](https://schema.org/)
- [JSON-LD specification](https://json-ld.org/)
