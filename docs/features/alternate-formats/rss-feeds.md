---
id: rss-feeds
title: "RSS Feeds - Functional specification"
sidebar_label: RSS Feeds
description: This documentation explains Yoast SEO modifies RSS feeds.
---
This documentation provides technical information about how [Yoast SEO](https://yoast.com/wordpress/plugins/seo/) modifies RSS feeds.

For any feed(s) of public posts/pages*, Yoast SEO allows the user to automatically prefix and/or append a dynamic content string (for the purposes of branding, attribution or similar).

\* Excluding WordPress' "comment feeds".

## Default settings
The default prefix setting (_"Content to put before each post in the feed"_) is blank/empty.

The default suffix setting (_"Content to put after each post in the feed"_) is `The post %%POSTLINK%% appeared first on %%BLOGLINK%%.`.

## Replacement variables

The following variables are available, and are automatically replaced in the generated prefix/suffix.

| Variable | Description |
|--|----|
| `%%AUTHORLINK%%` | A link to the archive for the post author, with the _author's name_ as anchor text. |
| `%%POSTLINK%%` | A link to the post, with the _title_ as anchor text. |
| `%%BLOGLINK%%` | A link to your site, with your _site's name_ as anchor text. |
| `%%BLOGDESCLINK%%` | A link to your site, with the _site's name and description_ as anchor text. |

## Indexing & canonical URLs
Depending on the type of feed, additional HTTP headers must be set:

* Feeds representing *content* (posts, pages or taxonomies) should set a canonical URL of the 'parent' URL, via a `link` header.
* Feeds represending *comments* on content should set a meta robots directive of `noindex, follow`, via an `x-robots-tag` header.
