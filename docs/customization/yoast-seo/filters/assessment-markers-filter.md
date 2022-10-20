---
id: assessment-markers-filter
title: Yoast SEO - Disable assessment markers
image: https://yoast.com/shared-assets/opengraph/image.php?title=Yoast%20SEO%20-%20Disable%20assessment%20markers
sidebar_label: Disable assessment markers
---
In some editors, the assessment markers in the SEO and readability analysis in Yoast SEO, will not be functional. To prevent confusion, the markers can be disabled.

## Usage
### Disable assessment markers

The example below shows how you can use this filter to disable the assessment markers.
```php
<?php
add_filter( 'wpseo_enable_assessment_markers', '__return_false' );
```
