---
id: disable-table-of-content-block
title: "Yoast SEO Premium: Disabling the Table of Contents block"
sidebar_label: Disable the Table of Contents Block
---

We added a filter in Yoast SEO Premium 21.5 to allow disabling the _Table of Contents_ block. This is useful to prevent the auto-generation of HTML anchors for headings when the _Table of Contents_ block is registered, if you are not using the block at all.

Add a snippet like this one in your theme's `functions.php` file:

```php
add_filter( 'Yoast\WP\SEO\disable_table_of_content_block', '__return_true' );
```
