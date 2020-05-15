---
id: disabling-primary-category
title: Yoast SEO - Disabling the Primary category feature
sidebar_label: Disabling the Primary category feature
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/yoast-seo/disabling-primary-category.md
---
As of Yoast SEO 3.1, we've added the ability to [set a Primary category for a post](https://yoast.com/help/how-to-select-a-primary-category/). 
However, in some cases, you might not want to use this feature. That's why we've added a filter to allow you to completely disable it.

Please add the following code to your theme's `functions.php` file.

```php
add_filter( 'wpseo_primary_term_taxonomies', '__return_empty_array' );
```
