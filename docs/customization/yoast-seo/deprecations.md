---
id: api-filter-actions-deprecations
title: Yoast SEO - Deprecated filters and actions
sidebar_label: Deprecated filters & actions
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/yoast-seo/deprecations.md
---

We sometimes deprecate filters and actions. In this document we highlight the deprecations and try
to point you to their replacements.

## Filters and actions deprecated in Yoast SEO 14.0

### Filters

#### `wpseo_twitter_taxonomy_image`
You can now always filter the Twitter image on any page, including a taxonomy page through the `wpseo_twitter_image` filter.

#### `wpseo_twitter_metatag_key`
We removed this filter without a replacement. Please add a new meta data presenter per [this documentation](https://developer.yoast.com/blog/yoast-seo-14-0-adding-metadata/) if you need to add more values.

### Actions

#### `wpseo_opengraph`
We removed this action without a replacement. Please add a new meta data presenter per [this documentation](https://developer.yoast.com/blog/yoast-seo-14-0-adding-metadata/) if you need to add more values.

#### `wpseo_twitter`
We removed this action without a replacement. Please add a new meta data presenter per [this documentation](https://developer.yoast.com/blog/yoast-seo-14-0-adding-metadata/) if you need to add more values.
