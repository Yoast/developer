---
id: shortcodes-filter
title: "Yoast SEO: Analyzing shortcodes"
sidebar_label: Analyzing shortcodes
---
As of [Yoast SEO 21.4](https://yoast.com/yoast-seo-october-17-2023/), we have removed our default analysis of shortcodes.
As of [Yoast SEO 21.7](https://yoast.com/yoast-seo-december-12-2023/), we have introduced a filter to enable the content analysis for the shortcodes provided through this filter.
When enabling this filter, we will be able to parse and expand the provided shortcodes, and use our analysis to detect any favorable or infavorable content.
However, note that we are unable to highlight analysis results, and therefore, we disable these buttons when this filter is activated.

## Example
You can use our shortcode filter `yoast.analysis.shortcodes` through a JavaScript implementation.
Please note that this means you have to register a JavaScript file via the `wp_enqueue_script` method in your own plugin or theme (e.g., in `functions.php`), as follows:

```php
// functions.php or MyCustomPlugin.php
<?php
wp_enqueue_script(
    'my-shortcodes-filter',
    get_template_directory_uri() . '/js/MyShortcodesFilter.js',
    [],
    '1.0',
    true
);
```

Let's say that you would like to use our content analysis to detect images added through the `gallery` and `su_custom_gallery` (from the [Shortcodes Ultimate plugin](https://wordpress.org/plugins/shortcodes-ultimate/)) shortcodes:

```js
// js/MyShortcodesFilter.js
const getShortcodes = (shortcodes) => {
  shortcodes.push( "gallery", "su_custom_gallery" );
  return shortcodes;
};

wp.hooks.addFilter( "yoast.analysis.shortcodes", "getShortcodes", getShortcodes );
```
