---
id: disable-table-of-content-block
title: "Yoast SEO Premium: Disable Table of Content Block"
sidebar_label: Disable Table of Content Block
---

We added a filter in Yoast SEO Premium version 21.5 to allow disabling the `Table of Content` block.

Used to prevent auto-generation of HTML anchors for headings when `Table of Content` block is registered.

Please add the following code to your theme's `functions.php` file.

```php
add_filter( 'Yoast\WP\SEO\disable_table_of_content_block', '__return_true' );
```
