---
id: functional-specification
title: "Yoast SEO X Tags: Functional specification"
sidebar_label: X
description: This documentation provides technical information about which X tags Yoast SEO generates and outputs.

---
This documentation provides technical information about which X tags [Yoast SEO](https://yoast.com/wordpress/plugins/seo/) generates and outputs. These tags are only consumed by X.

We output a variety of `<meta>` tags for X in the `<head>` of each page, in order to better inform X about the content of the page in question.

Note that for a lot of tags, X falls back on OpenGraph metadata. Where it falls back, we provide the OpenGraph metadata and don't provide the X tag specifically unless it has been customized.

## X metadata
The following tags provide social networks and platforms (e.g., Facebook, X, Pinterest) with additional information about the page and its content.

Assuming that the respective admin settings are not disabled, these tags are output on all pages (except for _error_ templates, which are described separately).

| Tag | Description |
|---|----|
| twitter:card | The card type to use when previewing the page (defaulting to `summary_large_image`). |
| twitter:site | The X handle of the site owner/operator. |

## Conditional tags
The following tags are only output when their conditions are met:

| Tag | Description | Notes |
|---|----|---|
| twitter:creator | The X handle of the content author. | Only populated when the content author has a valid X handle. <br /> Only populated on `post` types. |
| twitter:title | The title of the page, specifically for sharing on X. | Only populated when a specific value (which is different from the `og:title` value) is defined for X. |
| twitter:description | The description of the page, specifically for sharing on X. | Only populated when a specific value (different from the `og:description` value) is defined for X. <br /> <br /> The hierarchy for this is as follows: <ul><li>A user-defined "X description" value for the page.</li><li>An auto-generated "Social description" from the template in Search Appearance.</li><li>No output, i.e. falls back on `og:description`.</li></ul> |
| twitter:image | The URL of the primary image of the page, specifically for sharing on X. | Only populated when a specific image (different from the `og:image`) is defined for X, or, when Facebook / `og:image` tags are disabled. <br /> <br /> <ul><li>A user-defined “X image” in the Social tab of the Yoast metabox in a `twitter:image` tag</li><li>A user-defined “Facebook image” in the Social tab of the Yoast metabox in an `og:image` tag</li><li>A user-defined “Featured image” for the page (in an  `og:image` tag, or in a `twitter:image` tag if Open Graph is disabled)</li><li>A prominent image from the page’s content. (in an  `og:image` tag, or in a `twitter:image` tag if Open Graph is disabled) — when that image is resized in the content, we show its full-sized counterpart (this isn't true <a href="/features/indexables/indexables-filters/#disabling-indexables-completely">when indexables are disabled</a>)</li><li>Yoast SEO WooCommerce only: Woo SEO adds one more image fallback: the first image in the Woo Product gallery.  (in an  `og:image` tag, or in a `twitter:image` tag if Open Graph is disabled)</li><li>The “Social default image” from the template in Search Appearance in an `og:image` tag</li><li>The site-wide Social default image from SEO > Social in an `og:image` tag</li><li>No output.</li></ul> In case of an author archive, the image is based on the following hierarchy: <ul><li>The “Social default image” from the template in Search Appearance in an `og:image` tag</li><li>The user’s Gravatar image (in an  `og:image` tag, or in a `twitter:image` tag if Open Graph is disabled)</li><li>No output, i.e. falls back to `og:image`.</li></ul> |

## "Enhanced Slack sharing" tags
We utilize X's "label/data" meta tag format to add additional data, which is shown when sharing URLs on Slack.
Note that this should only be output if the "Enhanced Slack sharing" setting is enabled for the site.

| Tag | Description | Notes |
|---|----|---|
| `<meta name="twitter:label1" content="Est. reading time" />` | Only output on `post` and `page` types. |
| `<meta name="twitter:data1" content="%x% minutes" />` | Where `%x%` is the estimated reading time, rounded down to the closest minute. |
