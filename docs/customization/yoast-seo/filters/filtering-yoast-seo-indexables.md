---
id: filtering-yoast-seo-indexables
title: Yoast SEO - Filtering Yoast SEO Indexables
sidebar_label: Filtering Yoast SEO Indexables
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/yoast-seo/filters/filtering-yoast-seo-indexables.md
---

[Indexables were introduced in Yoast SEO 14.0](https://yoast.com/innovations/indexables/) as a single source of truth for all the informations that can be optimized on a site. Yoast SEO 18.2 has introduced a new filter (`Yoast\WP\SEO\should_index_indexables`) to programmatically enable or disable the creation of indexables.

## Indexables default behavior

## Filter usage

### Disabling indexables

```php
<?php
add_filter( 'Yoast\WP\SEO\should_index_indexables', '__return_false' );
```

This code will prevent Yoast SEO from creating indexables.
