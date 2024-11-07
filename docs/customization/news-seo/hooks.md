---
id: hooks
title: "Yoast News SEO: Hooks"
sidebar_label: Hooks
---

The Yoast News SEO plugin has a couple of hooks you can use to modify its usage, they're listed below:

## Header tags
### `Yoast\WP\News\head`

This action allows running additional code before outputting the header tags.

### `Yoast\WP\News\head_display_noindex`
Arguments: `$display_noindex` (bool), `$post` (WP_Post)

This filter allows preventing the output of the noindex meta tag for a specific post.

## Sitemap
### `wpseo_news_sitemap_content`
Arguments: `$str` (string)

This filter allows adding extra content to the News XML sitemap.
The output that's added in `$str` defaults to an empty string.

### `Yoast\WP\News\publication_language`
Arguments: `$publication_lang` (string), `$item` (Indexable)

This filter allows changing the publication language of a specific post in the News XML sitemap.

### `Yoast\WP\News\sitemap_name`
Arguments: `$sitemap_name` (string)

This filters allows changing the name of the News XML sitemap.

### `Yoast\WP\News\skip_build_item`
Arguments: `$skip_build_item` (bool), `$item_id` (int)

This filter allows skipping the building of a specific item in the News XML sitemap.
