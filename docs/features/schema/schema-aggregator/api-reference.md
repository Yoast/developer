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
      <loc>https://example.com/wp-json/yoast/v1/schema-aggregator/get-schema/page</loc>
      <lastmod>2026-01-01T14:03:56Z</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
   </url>
   <url contentType="structuredData/schema.org">
      <loc>https://example.com/wp-json/yoast/v1/schema-aggregator/get-schema/post</loc>
      <lastmod>2026-01-01T14:03:56Z</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
   </url>
</urlset>
```


**Cache Headers:**

Responses include cache control headers with a 5-minute (300 seconds) cache duration:

```
Cache-Control: max-age=300
```

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

By default, the schema map includes all indexable post types. You can customize this using the `wpseo_schema_aggregator_post_types` filter:

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

### What Gets Enhanced

The Schema Aggregator enhances certain schema types with additional data:

#### Article Enhancement

Articles (and subtypes like `BlogPosting`, `NewsArticle`) are enhanced with:

1. **articleBody**: Full post content (configurable max length, default: 500 characters)
2. **description**: Post excerpt (configurable max length, default: no limit)
3. **keywords**: Post tags as keyword array (optionally includes categories)

**Configuration:**

```php
// Adjust article body length.
add_filter( 'wpseo_article_enhance_config_article_body_max_length', function() {
    return 2000; // Increase to 2,000 characters.
} );

// Adjust excerpt length.
add_filter( 'wpseo_article_enhance_config_excerpt_max_length', function() {
    return 500; // Limit to 500 characters.
} );

// Include categories as keywords.
add_filter( 'wpseo_article_enhance_config_categories_as_keywords', '__return_true' );

// Disable article body enhancement.
add_filter( 'wpseo_article_enhance_article_body', '__return_false' );

// Disable excerpt enhancement.
add_filter( 'wpseo_article_enhance_use_excerpt', '__return_false' );

// Disable keywords enhancement.
add_filter( 'wpseo_article_enhance_keywords', '__return_false' );
```

#### Person Enhancement

Person schema (`@type: Person`) is enhanced with:

1. **jobTitle**: Retrieved from WordPress user meta (`job_title` field)

**Configuration:**

```php
// Disable job title enhancement.
add_filter( 'wpseo_person_enhance_person_job_title', '__return_false' );
```

### Customize Filtering

The Schema Aggregator uses a **strategy pattern** for filtering. The default strategy categorizes schema pieces using an elements-to-context map and filters out entire categories (Actions, Enumerations, Meta, Website). You can customize filtering at three levels:

#### Replace the Entire Filtering Strategy

Implement `Filtering_Strategy_Interface` and register it via the `wpseo_schema_aggregator_filtering_strategy` hook:

```php
add_filter( 'wpseo_schema_aggregator_filtering_strategy', function( $default_filter ) {
    return new My_Custom_Filter();
} );
```

Your custom class must implement the `filter` method, which receives a `Schema_Piece_Collection` and returns a filtered `Schema_Piece_Collection`.

#### Modify the Elements-to-Context Map

The default filtering strategy maps schema types into categories (e.g., `website`, `actions`, `meta`). You can modify this map with two filters:

```php
// Replace the entire map.
add_filter( 'wpseo_schema_aggregator_elements_context_map', function( $map ) {
    $map['my_category'] = [ 'WebPage', 'SomeOtherType' ];
    return $map;
} );

// Modify a single category (e.g., add Table to the website category).
add_filter( 'wpseo_schema_aggregator_elements_context_map_website', function( $types ) {
    $types[] = 'Table';
    return $types;
} );
```

#### Conditional and Property-Level Filtering

The default strategy also supports fine-grained control through node-level filters:

- **Node filters** (`{Type}_Schema_Node_Filter`): Conditionally decide whether a schema piece of a given type should be filtered. For example, `WebPage` is only filtered when it represents an `Article`; otherwise it is kept.
- **Property filters** (`{Type}_Schema_Node_Property_Filter`): Remove specific properties from a schema piece rather than filtering the entire piece.

## See Also

- [Overview](overview.md): Introduction to Schema Aggregator
- [Filters](filters.md): Complete filter reference with examples
- [Schema.org documentation](https://schema.org/)
- [JSON-LD specification](https://json-ld.org/)
