---
id: change-metabox-prio-filter
title: Yoast SEO - Change metabox priority
image: https://yoast.com/shared-assets/opengraph/image.php?title=Yoast%20SEO%20-%20Change%20metabox%20priority
sidebar_label: Change metabox priority
---
By default, the Yoast SEO metabox has a high priority. This means it will be displayed just below the editor. When needed, the priority can be lowered so it will be displayed below other metaboxes.

## Usage
### Lower metabox priority

The example below shows how to lower the priority of the metabox.
```php
<?php
add_filter( 'wpseo_metabox_prio', 'low' );
```
