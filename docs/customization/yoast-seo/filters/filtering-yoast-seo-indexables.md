---
id: filtering-yoast-seo-indexables
title: Yoast SEO - Filtering Yoast SEO Indexables
sidebar_label: Filtering Yoast SEO Indexables
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/yoast-seo/filters/filtering-yoast-seo-indexables.md
---

[Indexables were introduced in Yoast SEO 14.0](https://yoast.com/innovations/indexables/) as a single source of truth for all the informations that can be optimized on a site. Yoast SEO 18.2 has introduced a new filter (`Yoast\WP\SEO\should_index_indexables`) to programmatically enable or disable the creation of indexables.

## Indexables default behavior

Per default, Yoast SEO will continuously create indexables for all the content that can be optimized on a site. This includes posts, pages, custom post types, taxonomies, categories, tags, custom fields, comments, users, terms, attachments and so on. When the `Yoast\WP\SEO\should_index_indexables` filter is set to false, the plugin will stop storing newly created indexables.

## Filter usage

### Disabling indexables

```php
<?php
add_filter( 'Yoast\WP\SEO\should_index_indexables', '__return_false' );
```

This code will prevent Yoast SEO from storing newly created indexables.
