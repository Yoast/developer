---
id: hiding-version-number
title: Yoast SEO Premium - Hiding the version number
image: https://yoast.com/shared-assets/opengraph/image.php?title=Yoast%20SEO%20Premium%20-%20Hiding%20the%20version%20number
sidebar_label: Hiding the version number
---

We added a filter in Yoast SEO Premium version 2.3.3 to allow hiding of the version number in your HTML source code.

Please add the following code to your theme's `functions.php` file.

```php
add_filter( 'wpseo_hide_version', '__return_true' );
```
