---
id: orphaned-content-count-cache-filters
title: "Yoast SEO Premium: Alter Yoast SEO orphaned content count cache"
sidebar_label: Alter Yoast SEO orphaned content count cache
---
Yoast SEO Premium allows you to either disable the orphaned content count cache, or change the way it's invalidated.
The `wpseo_premium_orphaned_count_cache` filter allows you to disable the cache in its entirety.
The `wpseo_premium_orphaned_count_cache_invalidation_method` filter allows you to change the way the cache is invalidated.

## Usage

### Disabling the cache

The example below shows how you can use the filter to disable the orphaned count caching.
```php
<?php

add_filter( 'wpseo_premium_orphaned_count_cache', '__return_false' );
```
### Changing the way the cache is invalidated

The example below shows how you can use the filter to change the way the cache is invalidated.

There are two options:
* `flush`, which is this is the default behaviour. With this option the entire cache group `orphaned_counts` is flushed when the cache is invalidated, using `wp_cache_flush_group()`.
* or `delete`. With this option only the cache keys that are related to the post type of the changed post are deleted, using `wp_cache_delete()`.

To change the invalidation method to `delete` use the following code:
```php
<?php

add_filter( 'wpseo_premium_orphaned_count_cache_invalidation_method', function() {
    return 'delete';
} );
```
