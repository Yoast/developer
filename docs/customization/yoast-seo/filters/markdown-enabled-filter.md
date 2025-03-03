---
id: markdown-enabled-filter
title: "Yoast SEO: Enable Markdown in the content analysis"
sidebar_label: Enable Markdown in the content analysis
---
Yoast SEO can offer Markdown support in the content analysis. This is disabled by default, unless Jetpack's Markdown module is enabled. It is possible to extend this to other plugins that parse Markdown in the content.

## Usage
### Enable Markdown support

The example below shows how you can use this filter to enable Markdown support.
```php
<?php
add_filter( 'wpseo_is_markdown_enabled', '__return_true' );
```
