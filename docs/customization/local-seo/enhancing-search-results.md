---
id: enhancing-search-results
title: Local SEO - Enhancing search results
sidebar_label: Enhancing search results
custom_edit_url: https://github.com/Yoast/developer/edit/main/docs/customization/local-seo/enhancing-search-results.md
---
One of the hidden features of the Local SEO plugin is enhancing your website's internal search results with your location content. In rare cases, the enhanced search results can conflict with other plugin or theme features. Therefore, Local SEO version 7.1 introduced developer filters to disable these enhancements.

These filters would go in your theme's `function.php` file. If you are not sure where that is please speak to your theme developer.

We recommend that a backup of your site be taken before adding the filters or editing theme files.

The filters accept a `true` or `false` boolean.

* `yoast_local_seo_enhanced_search_enabled`
* `yoast_local_seo_enhanced_search_result_enabled`

To disable searching in location meta fields use:

```php
add_filter( 'yoast_local_seo_enhanced_search_enabled', '__return_false' );
```

To also disable markup for found locations use:

```php
add_filter( 'yoast_local_seo_enhanced_search_result_enabled', '__return_false' );
```
