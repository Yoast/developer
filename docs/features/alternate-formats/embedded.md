---
id: embedded
title: Embedded content - Functional specification
sidebar_label: Embedded content
description: This documentation explains how Yoast SEO modifies embedded content formats.
---
This documentation provides technical information about how [Yoast SEO](https://yoast.com/wordpress/plugins/seo/) modifies embedded content formats, such as oEmbed.

## Native embedding
Platforms like WordPress often support proprietory content embedding capabilities. These allow users to represent the content of a page as an embedded widget, in the content of another page.
These embedded components exist as discreet URLs and 'pages', and must be optimized accordingly.

For sites which suppport native embedding, Yoast SEO should:

* Ensure that a meta robots tag is output, with a value of `noindex, follow`

## oEmbed
For sites which provide [oEmbed](https://oembed.com/) capabilities, Yoast SEO alters the respective metadata to ensure that it's consistent with the respective 'parent' page. There should be no discrepency between the `title`, `description`, (canonical) `url` or other properties, as compared to the embedded page. 

