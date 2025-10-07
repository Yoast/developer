---
id: disable-opcache-reset-on-upgrade
title: "Yoast SEO: Disable opcache reset on upgrade"
sidebar_label: Disable opcache reset on Yoast SEO upgrade
---
Yoast SEO runs `opcache_reset()` every time it is upgraded to a new version to take care of stale and new PHP files.

There is also the `Yoast\WP\SEO\should_invalidate_opcache` filter that can be used to disable this behavior.

## Usage

The example below shows how you can use the filter to disable the opcache reset on Yoast SEO upgrade.
```php
<?php

add_filter( 'Yoast\WP\SEO\should_invalidate_opcache', '__return_false' );
```
