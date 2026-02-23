---
id: filters
title: "Schema Aggregator: Filters"
sidebar_label: Filters
description: WordPress filters to customize the Schema Aggregator feature behavior and output.
---

The Schema Aggregator provides WordPress filters that allow you to customize its behavior, from cache configuration to content enhancement. This document provides a complete reference with practical examples for each filter.

## Quick Reference

| Filter | Category | Purpose |
|--------|----------|---------|
| [`wpseo_schema_aggregator_post_types`](#post-type-configuration) | Post Types | Control which post types to aggregate |
| [`wpseo_schema_aggregator_per_page`](#pagination-configuration) | Pagination | Set default items per page (1000) |
| [`wpseo_schema_aggregator_per_page_big`](#pagination-configuration) | Pagination | Set items per page for big schema post types (100) |
| [`wpseo_schema_aggregator_big_schema_post_types`](#pagination-configuration) | Pagination | Define which post types have large schema |
| [`wpseo_schema_aggregator_cache_enabled`](#cache-configuration) | Cache | Enable/disable caching |
| [`wpseo_schema_aggregator_cache_ttl`](#cache-configuration) | Cache | Set cache duration (dynamic by default) |
| [`wpseo_schema_aggregator_schemamap_changefreq`](#schema-map-configuration) | Schema Map | Set XML sitemap update frequency |
| [`wpseo_schema_aggregator_schemamap_priority`](#schema-map-configuration) | Schema Map | Set XML sitemap priority |
| [`wpseo_schema_aggregator_filtering_strategy`](#filtering-strategy) | Filtering | Implement custom filtering logic |
| [`wpseo_schema_aggregator_elements_context_map`](#elements-context-map) | Context Map | Override complete context map |
| [`wpseo_schema_aggregator_elements_context_map_{context}`](#wpseo_schema_aggregator_elements_context_map_context) | Context Map | Customize elements for specific context |
| [`wpseo_article_enhance_config_{key}`](#article-enhancement-configuration) | Article Enhancement | Configure article enhancement settings |
| [`wpseo_article_enhance_{enhancement}`](#article-enhancement-toggles) | Article Enhancement | Toggle article enhancements (article_body, use_excerpt, keywords) |
| [`wpseo_article_enhance_body_when_excerpt_exists`](#article-body-with-excerpt) | Article Enhancement | Include body when excerpt exists |
| [`wpseo_article_enhance_article_body_fallback`](#article-body-fallback) | Article Enhancement | Include body when no excerpt |
| [`wpseo_person_enhance_config_{key}`](#person-enhancement-configuration) | Person Enhancement | Configure person enhancement settings |
| [`wpseo_person_enhance_{enhancement}`](#person-enhancement-toggles) | Person Enhancement | Toggle person enhancements (person_job_title) |
| [`wpseo_disable_robots_schemamap`](#robotstxt-integration) | Robots.txt | Disable schema map in robots.txt |

## Post Type Configuration

### wpseo_schema_aggregator_post_types

Control which post types are included in the schema aggregation.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$post_types` | array | Array of post type names to aggregate |

**Default Value:** All indexable post types

**Example: Include Only Specific Post Types**

```php
add_filter( 'wpseo_schema_aggregator_post_types', 'limit_aggregated_post_types' );

/**
 * Limit schema aggregation to posts and pages only.
 *
 * This is useful when you have custom post types that don't need
 * structured data or when you want to improve performance.
 *
 * @link https://developer.yoast.com/features/schema/schema-aggregator/filters/#wpseo_schema_aggregator_post_types
 *
 * @param array $post_types Array of post type names.
 *
 * @return array Modified array of post type names.
 */
function limit_aggregated_post_types( $post_types ) {
	// Only aggregate posts and pages.
	return [ 'post', 'page' ];
}
```

**Example: Exclude Specific Post Types**

```php
add_filter( 'wpseo_schema_aggregator_post_types', 'exclude_custom_post_types' );

/**
 * Exclude internal post types from schema aggregation.
 *
 * Remove post types that are used for internal purposes and
 * should not appear in structured data output.
 *
 * @link https://developer.yoast.com/features/schema/schema-aggregator/filters/#wpseo_schema_aggregator_post_types
 *
 * @param array $post_types Array of post type names.
 *
 * @return array Modified array of post type names.
 */
function exclude_custom_post_types( $post_types ) {
	// Remove internal post types.
	$excluded = [ 'acf-field', 'acf-field-group', 'custom_css' ];

	return array_diff( $post_types, $excluded );
}
```

## Pagination Configuration

The Schema Aggregator uses different pagination limits based on the size of schema pieces. Some post types (like WooCommerce products) generate large schema objects and need smaller page sizes.

### wpseo_schema_aggregator_per_page

Set the default number of items per page for schema aggregation.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$per_page` | int | Number of items per page |

**Default Value:** 1000

**Example:**

```php
add_filter( 'wpseo_schema_aggregator_per_page', 'custom_default_per_page' );

/**
 * Reduce default items per page for better performance.
 *
 * Lower pagination can help with memory limits on shared hosting
 * or when dealing with post types that have moderate schema sizes.
 *
 * @link https://developer.yoast.com/features/schema/schema-aggregator/filters/#wpseo_schema_aggregator_per_page
 *
 * @param int $per_page Number of items per page.
 *
 * @return int Modified number of items per page.
 */
function custom_default_per_page( $per_page ) {
	return 500; // Reduce from 1000 to 500.
}
```

### wpseo_schema_aggregator_per_page_big

Set the number of items per page for post types with large schema pieces.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$per_page_big` | int | Number of items per page for big schema post types |

**Default Value:** 100

**Example:**

```php
add_filter( 'wpseo_schema_aggregator_per_page_big', 'custom_big_per_page' );

/**
 * Adjust pagination for post types with large schema.
 *
 * Increase or decrease based on your server's memory limits
 * and the actual size of your schema pieces.
 *
 * @link https://developer.yoast.com/features/schema/schema-aggregator/filters/#wpseo_schema_aggregator_per_page_big
 *
 * @param int $per_page_big Number of items per page for big schema.
 *
 * @return int Modified number of items per page.
 */
function custom_big_per_page( $per_page_big ) {
	return 50; // Reduce from 100 to 50 for very large schemas.
}
```

### wpseo_schema_aggregator_big_schema_post_types

Define which post types should use the "big schema" pagination limit.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$big_schema_post_types` | array | Array of post type names with large schema pieces |

**Default Value:** `[ 'product' ]`

**Example:**

```php
add_filter( 'wpseo_schema_aggregator_big_schema_post_types', 'add_big_schema_post_types' );

/**
 * Mark custom post types as having large schema pieces.
 *
 * Post types with extensive custom fields, galleries, or complex
 * relationships should use the lower pagination limit.
 *
 * @link https://developer.yoast.com/features/schema/schema-aggregator/filters/#wpseo_schema_aggregator_big_schema_post_types
 *
 * @param array $big_schema_post_types Array of post type names.
 *
 * @return array Modified array of post type names.
 */
function add_big_schema_post_types( $big_schema_post_types ) {
	// Add custom post types with large schemas.
	$big_schema_post_types[] = 'property'; // Real estate listings.
	$big_schema_post_types[] = 'event'; // Events with extensive details.

	return $big_schema_post_types;
}
```

## Cache Configuration

The Schema Aggregator implements intelligent caching to balance performance and freshness. Cache automatically clears when posts are updated.

### wpseo_schema_aggregator_cache_enabled

Enable or disable the cache system entirely.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$enabled` | bool | Whether caching is enabled |

**Default Value:** `true`

**Example:**

```php
add_filter( 'wpseo_schema_aggregator_cache_enabled', 'disable_schema_cache_in_dev' );

/**
 * Disable caching in development environment.
 *
 * This ensures you always see fresh data during development
 * without needing to manually clear the cache.
 *
 * @link https://developer.yoast.com/features/schema/schema-aggregator/filters/#wpseo_schema_aggregator_cache_enabled
 *
 * @param bool $enabled Whether caching is enabled.
 *
 * @return bool Modified cache enabled status.
 */
function disable_schema_cache_in_dev( $enabled ) {
	// Disable cache in local/staging environments.
	if ( defined( 'WP_ENV' ) && in_array( WP_ENV, [ 'development', 'staging' ], true ) ) {
		return false;
	}

	return $enabled;
}
```

### wpseo_schema_aggregator_cache_ttl

Set the cache time-to-live (TTL) in seconds.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$ttl` | int | Cache duration in seconds |

**Default Value:** Dynamic based on serialized payload size:
- Small payloads (< 100 KB): 1800 seconds (30 minutes)
- Normal payloads: 3600 seconds (1 hour)
- Large payloads (> 1 MB): 21600 seconds (6 hours)

**Example: Fixed TTL**

```php
add_filter( 'wpseo_schema_aggregator_cache_ttl', 'custom_cache_ttl' );

/**
 * Set a fixed cache duration.
 *
 * Use this when you want consistent cache behavior regardless
 * of payload size.
 *
 * @link https://developer.yoast.com/features/schema/schema-aggregator/filters/#wpseo_schema_aggregator_cache_ttl
 *
 * @param int $ttl Cache duration in seconds.
 *
 * @return int Modified cache duration.
 */
function custom_cache_ttl( $ttl ) {
	// Cache for 2 hours regardless of payload size.
	return 7200;
}
```

## Schema Map Configuration

The schema map is an XML sitemap that lists all available schema endpoints. It's automatically referenced in your site's `robots.txt`.

### wpseo_schema_aggregator_schemamap_changefreq

Set the change frequency for schema map entries.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$changefreq` | string | Change frequency (always, hourly, daily, weekly, monthly, yearly, never) |

**Default Value:** `'daily'`

**Example:**

```php
add_filter( 'wpseo_schema_aggregator_schemamap_changefreq', 'custom_schemamap_changefreq' );

/**
 * Set schema map change frequency to weekly.
 *
 * Use this to indicate how often search engines should check
 * for updated schema data.
 *
 * @link https://developer.yoast.com/features/schema/schema-aggregator/filters/#wpseo_schema_aggregator_schemamap_changefreq
 *
 * @param string $changefreq Change frequency value.
 *
 * @return string Modified change frequency.
 */
function custom_schemamap_changefreq( $changefreq ) {
	return 'weekly'; // Change from daily to weekly.
}
```

### wpseo_schema_aggregator_schemamap_priority

Set the priority value for schema map entries.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$priority` | float | Priority value between 0.0 and 1.0 |

**Default Value:** `0.8`

**Example:**

```php
add_filter( 'wpseo_schema_aggregator_schemamap_priority', 'custom_schemamap_priority' );

/**
 * Increase schema map priority to indicate importance.
 *
 * Higher priority suggests to search engines that this content
 * is important relative to other URLs on your site.
 *
 * @link https://developer.yoast.com/features/schema/schema-aggregator/filters/#wpseo_schema_aggregator_schemamap_priority
 *
 * @param float $priority Priority value (0.0 to 1.0).
 *
 * @return float Modified priority value.
 */
function custom_schemamap_priority( $priority ) {
	return 1.0; // Maximum priority.
}
```

## Filtering Strategy

The filtering strategy determines which schema pieces are included or excluded from aggregation. By default, the aggregator filters out Actions, Enumerations, Meta types, and Website elements.

### wpseo_schema_aggregator_filtering_strategy

Implement a custom filtering strategy by providing your own strategy class.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$strategy` | Filtering_Strategy_Interface | The filtering strategy instance |

**Default Value:** `Default_Filter` instance (filters Actions, Enumerations, Meta, and Website categories)

**Example:**

```php
add_filter( 'wpseo_schema_aggregator_filtering_strategy', 'custom_filtering_strategy' );

/**
 * Implement custom schema filtering logic.
 *
 * Use this to create advanced filtering rules beyond the default
 * context-based filtering. Your strategy class should implement
 * the filtering logic in its filter() method.
 *
 * @link https://developer.yoast.com/features/schema/schema-aggregator/filters/#wpseo_schema_aggregator_filtering_strategy
 *
 * @param object|null $strategy Custom filtering strategy instance.
 *
 * @return object Custom filtering strategy.
 */
function custom_filtering_strategy( $strategy ) {
	// Return custom strategy that only includes Article types.
	return new class {
		/**
		 * Filter schema pieces to only include Articles.
		 *
		 * @param array $schema_piece Schema piece to filter.
		 *
		 * @return bool Whether to include this schema piece.
		 */
		public function filter( $schema_piece ) {
			// Only include Article types and their subtypes.
			$article_types = [ 'Article', 'BlogPosting', 'NewsArticle', 'ScholarlyArticle' ];

			if ( isset( $schema_piece['@type'] ) ) {
				$type = $schema_piece['@type'];

				// Handle array of types.
				if ( is_array( $type ) ) {
					return ! empty( array_intersect( $type, $article_types ) );
				}

				return in_array( $type, $article_types, true );
			}

			return false;
		}
	};
}
```

## Elements Context Map

The context map categorizes schema.org types into contexts like Content, Commerce, Entity, etc. This is used by the default filtering strategy.

### wpseo_schema_aggregator_elements_context_map

Override the complete elements context map.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$context_map` | array | Complete mapping of schema types to contexts |

**Default Value:** Comprehensive map of 1000+ schema.org types

**Example:**

```php
add_filter( 'wpseo_schema_aggregator_elements_context_map', 'custom_context_map' );

/**
 * Provide a completely custom context map.
 *
 * This replaces the entire default mapping. Use this when you need
 * complete control over which types belong to which contexts.
 *
 * @link https://developer.yoast.com/features/schema/schema-aggregator/filters/#wpseo_schema_aggregator_elements_context_map
 *
 * @param array $context_map Complete context map.
 *
 * @return array Custom context map.
 */
function custom_context_map( $context_map ) {
	// Define a simplified context map.
	return [
		'content' => [
			'Article',
			'BlogPosting',
			'NewsArticle',
		],
		'commerce' => [
			'Product',
			'Offer',
		],
		'entity' => [
			'Person',
			'Organization',
		],
	];
}
```

### wpseo_schema_aggregator_elements_context_map_\{context\}

Modify elements for a specific context. Available contexts: `content`, `commerce`, `entity`, `event`, `data`, `medical`, `action`, `enumeration`, `meta`, `website`.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$elements` | array | Array of schema types in this context |

**Example: Add Custom Types to Content Context**

```php
add_filter( 'wpseo_schema_aggregator_elements_context_map_content', 'add_custom_content_types' );

/**
 * Add custom schema types to the content context.
 *
 * This is useful when you have custom schema types that should
 * be treated as content entities.
 *
 * @link https://developer.yoast.com/features/schema/schema-aggregator/filters/#wpseo_schema_aggregator_elements_context_map_context
 *
 * @param array $elements Schema types in the content context.
 *
 * @return array Modified array of schema types.
 */
function add_custom_content_types( $elements ) {
	// Add custom types to content context.
	$elements[] = 'Recipe';
	$elements[] = 'HowTo';
	$elements[] = 'FAQPage';

	return $elements;
}
```

**Example: Remove Types from Action Context**

```php
add_filter( 'wpseo_schema_aggregator_elements_context_map_action', 'remove_action_types' );

/**
 * Remove specific action types from the action context.
 *
 * This can help further refine which actions are filtered out.
 *
 * @link https://developer.yoast.com/features/schema/schema-aggregator/filters/#wpseo_schema_aggregator_elements_context_map_context
 *
 * @param array $elements Schema types in the action context.
 *
 * @return array Modified array of schema types.
 */
function remove_action_types( $elements ) {
	// Remove SearchAction from action context.
	// This means it won't be filtered out anymore.
	return array_diff( $elements, [ 'SearchAction' ] );
}
```

## Article Enhancement

Articles and their subtypes (BlogPosting, NewsArticle, etc.) can be enhanced with additional properties like `articleBody`, `description`, and `keywords`.

### Article Enhancement Configuration

Use the `wpseo_article_enhance_config_{key}` filter pattern to configure enhancement behavior. Available keys:

- `article_body_max_length` - Maximum length for articleBody in characters (default: 500)
- `excerpt_max_length` - Maximum length for excerpt in characters (default: 0, no limit)
- `categories_as_keywords` - Include categories as keywords (default: false)
- `excerpt_prefer_manual` - Only use manually written excerpts; skip auto-generated ones (default: false)
- `strip_shortcodes_from_body` - Strip shortcodes from article body (default: true)
- `strip_html_from_body` - Strip HTML tags from article body (default: true)

**Example: Adjust Article Body Length**

```php
add_filter( 'wpseo_article_enhance_config_article_body_max_length', 'custom_article_body_length' );

/**
 * Increase maximum article body length.
 *
 * Useful for long-form content where you want to include
 * more of the article text in the schema.
 *
 * @link https://developer.yoast.com/features/schema/schema-aggregator/filters/#article-enhancement-configuration
 *
 * @param int $max_length Maximum length in characters.
 *
 * @return int Modified maximum length.
 */
function custom_article_body_length( $max_length ) {
	return 2000; // Increase from 500 to 2000 characters.
}
```

**Example: Include Categories as Keywords**

```php
add_filter( 'wpseo_article_enhance_config_categories_as_keywords', '__return_true' );
```

**Example: Only Use Manual Excerpts**

```php
add_filter( 'wpseo_article_enhance_config_excerpt_prefer_manual', '__return_true' );
```

### Article Enhancement Toggles

Use the `wpseo_article_enhance_{enhancement}` filter pattern to enable or disable enhancements dynamically. Available enhancements: `article_body`, `use_excerpt`, `keywords` (all default to `true`).

**Example: Disable Article Body Enhancement**

```php
add_filter( 'wpseo_article_enhance_article_body', '__return_false' );
```

**Example: Disable Excerpt Enhancement**

```php
add_filter( 'wpseo_article_enhance_use_excerpt', '__return_false' );
```

### Article Body with Excerpt

Control whether to include article body when an excerpt already exists.

**Filter:** `wpseo_article_enhance_body_when_excerpt_exists`

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$include_body` | bool | Whether to include body when excerpt exists |

**Default Value:** `false`

**Example:**

```php
add_filter( 'wpseo_article_enhance_body_when_excerpt_exists', '__return_true');
```

### Article Body Fallback

Control whether to include article body when no excerpt exists.

**Filter:** `wpseo_article_enhance_article_body_fallback`

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$use_fallback` | bool | Whether to use body as fallback |

**Default Value:** `true`

**Example:**

```php
add_filter( 'wpseo_article_enhance_article_body_fallback', '__return_false' );
```

## Person Enhancement

Person schema pieces can be enhanced with additional properties based on WordPress user data.

### Person Enhancement Configuration

Use the `wpseo_person_enhance_config_{key}` filter pattern to configure person enhancement settings. This follows the same generic pattern as article enhancement configuration — the filter receives a default value and returns a customized one.

**Example:**

```php
add_filter( 'wpseo_person_enhance_config_my_custom_key', 'custom_person_config' );

/**
 * Customize a person enhancement configuration value.
 *
 * @link https://developer.yoast.com/features/schema/schema-aggregator/filters/#person-enhancement-configuration
 *
 * @param string|int|bool $value The default configuration value.
 *
 * @return string|int|bool Modified configuration value.
 */
function custom_person_config( $value ) {
	return 'custom_value';
}
```

### Person Enhancement Toggles

Use the `wpseo_person_enhance_{enhancement}` filter pattern to enable or disable specific person enhancements. Available enhancements: `person_job_title` (default: `true`).

**Example: Disable Job Title Enhancement**

```php
add_filter( 'wpseo_person_enhance_person_job_title', '__return_false' );
```

## Robots.txt Integration

By default, the schema map is automatically referenced in your site's `robots.txt` file. You can disable this integration if needed.

### wpseo_disable_robots_schemamap

Disable the schema map reference in robots.txt.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$disable` | bool | Whether to disable robots.txt integration |

**Default Value:** `false`

**Example:**

```php
add_filter( 'wpseo_disable_robots_schemamap', '__return_true' );
```

### Development Environment Configuration

Disable caching and adjust settings for easier development:

```php
/**
 * Schema Aggregator configuration for development.
 */

// Disable caching in development.
add_filter( 'wpseo_schema_aggregator_cache_enabled', function( $enabled ) {
	return defined( 'WP_DEBUG' ) && WP_DEBUG ? false : $enabled;
} );

// Smaller pagination for faster testing.
add_filter( 'wpseo_schema_aggregator_per_page', function() {
	return defined( 'WP_DEBUG' ) && WP_DEBUG ? 10 : 1000;
} );

// Don't add schema map to robots.txt in development.
add_filter( 'wpseo_disable_robots_schemamap', function() {
	return defined( 'WP_DEBUG' ) && WP_DEBUG;
} );
```

## Related Documentation

- [Schema Aggregator Overview](overview.md) - Introduction and key features
- [API Reference](api-reference.md) - REST API endpoints and CLI commands
- [Schema.org Documentation](https://schema.org/) - Schema types reference
- [JSON-LD Specification](https://json-ld.org/) - Format specification
- [Yoast Schema API](../api.md) - Main Schema output API
