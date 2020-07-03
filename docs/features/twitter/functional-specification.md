---
id: functional-specification
title: Twitter Tags - Functional specification
sidebar_label: Twitter
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/twitter/functional-specification.md
description: This documentation provides technical information about which twitter tags Yoast SEO generates and outputs.

---
This documentation provides technical information about which twitter tags [Yoast SEO](https://yoast.com/wordpress/plugins/seo/) generates and outputs. These tags are only consumed by Twitter.

We output a variety of `<meta>` tags for Twitter in the `<head>` of each page, in order to better inform Twitter about the content of the page in question.

Note that for a lot of tags, Twitter falls back on OpenGraph metadata. Where it falls back, we provide the OpenGraph metadata and don't provide the Twitter tag specifically unless it has been customized.

## Twitter metadata
The following tags provide social networks and platforms (e.g., Facebook, Twitter, Pinterest) with additional information about the page and its content.

Assuming that the respective admin settings are not disabled, these tags are output on all pages (except for _error_ templates, which are described separately).

| Tag | Description |
|---|----|
| twitter:card | The card type to use when previewing the page. |
| twitter:site | The twitter handle of the site owner/operator. |

## Conditional tags
The following tags are only output when their conditions are met:

| Tag | Description | Notes |
|---|----|---|
| twitter:creator | The twitter handle of the content author. | Only populated when the user has a valid Twitter handle. <br /> Only populated on `post` types. |
| twitter:title | The title of the page, specifically for sharing on Twitter. | Only populated when a specific value (different from the `og:title` value) is defined for Twitter. |
| twitter:description | The description of the page, specifically for sharing on Twitter. | Only populated when a specific value (different from the `og:description` value) is defined for Twitter. |
| twitter:image | The URL of the primary image of the page, specifically for sharing on Twitter. | Only populated when a specific image (different from the `og:image`) is defined for Twitter, or, when Facebook / `og:image` tags are disabled. |
