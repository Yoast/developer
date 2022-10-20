---
id: functional-specification
title: robots.txt - Functional specification
image: https://yoast.com/shared-assets/opengraph/image.php?title=robots.txt - Functional specification
sidebar_label: robots.txt
description: This documentation explains how Yoast SEO modifies robots.txt files.
---
This documentation explains how [Yoast SEO](https://yoast.com/wordpress/plugins/seo/) modifies robots.txt files.

## Default content
When a site does not have a user-defined `robots.txt` file (at the point of installation/activation), Yoast SEO generates a default output.

```
# START YOAST BLOCK
# ---------------------------
User-agent: *
Disallow:

Sitemap: https://www.example.com/sitemap_index.xml
# ---------------------------
# END YOAST BLOCK
```

If a `robots.txt` file already exists and contains non-empty rules, this block should be prefixed before any existing rules.

## Controls
Users must be able to edit the contents of their `robots.txt` file.
