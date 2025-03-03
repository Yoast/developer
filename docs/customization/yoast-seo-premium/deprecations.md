---
id: api-filter-actions-deprecations
title: "Yoast SEO Premium: Deprecated filters and actions"
sidebar_label: Deprecated filters & actions
---

We sometimes deprecate filters and actions. In this document we highlight the deprecations in Yoast SEO Premium and try
to point you to their replacements.

## Filters and actions deprecated in Yoast SEO Premium 12.9

### Filters

#### `wpseo_premium_post_redirect_slug_change`
Automatic redirect on page or post slug changes can now be done through the `Yoast\WP\SEO\post_redirect_slug_change` filter.

#### `wpseo_premium_term_redirect_slug_change`
Automatic redirect on term slug changes can now be done through the `Yoast\WP\SEO\term_redirect_slug_change` filter.
