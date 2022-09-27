---
id: change-metabox-prio-filter
title: Yoast SEO - Change metabox priority
sidebar_label: Change metabox priority
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/yoast-seo/filters/change-metabox-prio-filter.md
---
By default, the Yoast SEO metabox has a high priority. This means it will be displayed just below the editor. When needed, the priority can be lowered so it will be displayed below other metaboxes.

## Usage
### Lower metabox priority

The example below shows how to lower the priority of the metabox.
```php
<?php
add_filter( 'wpseo_metabox_prio', 'low' );
```
