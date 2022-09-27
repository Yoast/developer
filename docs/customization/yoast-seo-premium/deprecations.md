---
id: api-filter-actions-deprecations
title: Yoast SEO Premium - Deprecated filters and actions
sidebar_label: Deprecated filters & actions
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/yoast-seo-premium/deprecations.md
---

We sometimes deprecate filters and actions. In this document we highlight the deprecations and try
to point you to their replacements.

## Filters and actions deprecated in Yoast SEO Premium 12.9

### Filters

#### `wpseo_premium_post_redirect_slug_change`
Automatic redirect on page or post slug changes can now be done through the `Yoast\WP\SEO\post_redirect_slug_change` filter.

#### `wpseo_premium_term_redirect_slug_change`
Automatic redirect on term slug changes can now be done through the `Yoast\WP\SEO\term_redirect_slug_change` filter.
