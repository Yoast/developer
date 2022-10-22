---
id: markdown-enabled-filter
title: "Yoast SEO - Enable Markdown for the SEO and readability analysis"
sidebar_label: Enable Markdown for the SEO and readability analysis
---
Yoast SEO can offer Markdown support in the SEO and readability analysis. This is disabled by default, unless Jetpack's Markdown module is enabled. It is possible to extend this to other plugins that parse Markdown in the content.

## Usage
### Enable Markdown support

The example below shows how you can use this filter to enable Markdown support.
```php
<?php
add_filter( 'wpseo_is_markdown_enabled', '__return_true' );
```
