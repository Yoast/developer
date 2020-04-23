---
id: hiding-version-number
title: Yoast SEO Premium - Hiding the version number
sidebar_label: Hiding the version number
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/hiding-version-number.md
---

We added a filter in Yoast SEO Premium version 2.3.3 to allow hiding of the version number in your HTML source code.

Please add the following code to your theme’s `functions.php` file.

```php
add_filter( 'wpseo_hide_version', '__return_true' );
```
