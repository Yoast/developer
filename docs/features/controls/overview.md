---
id: overview
title: Controls - Overview
sidebar_label: Overview
description: This documentation provides information about the types of controls that Yoast SEO provides.
---
This documentation provides information about the tyoes of controls that [Yoast SEO](https://yoast.com/wordpress/plugins/seo/) provides.

## Global site controls
As a site owner, I want to be able to set the following metadata globally.

### Default meta options
| Option | Description | Values |
| --- | ----- | --- |
| `og:site_name` | The name of the site for when shared in social platforms | `string` |
| `twitter:site` | The Twitter handle of the Twitter profile associated with the site | `string` |
| *Social profiles* | An array of the URLs of social media properties representing the publisher | `array` |
| *Title separator* | The character used to delimit a page's 'name' and brand components in the *title* tag | `char` |

### Publisher information
| Option | Description | Values |
| --- | ----- | --- |
| *Publisher type* | Whether the site represents a user or organization | `user` or `organization` |
| `organization.name` | The name of the organization which publishes the site. Only used if the user chose `organization`. | `string` |
| `organization.logo` | An image representing the organization which publishes the site. Only used if the user chose `organization`. | `string` |
| `person.name` | The name (and identity, e.g., a user ID/profile) of the person who publishes the site. Only used if the user chose `person`. | `string` |
| `person.logo` | An image representing the person who publishes the site. Only used if the user chose `person`. | `string` |

NB: Only values for *one* of `organization` or `person` fields are required, depending on the *Publisher type*.

## Template controls
For each template (and/or content) type, the user should be able to set:

| Option | Description | Values |
| --- | ----- | --- |
| *Title patterns* | The default pattern which *title* values should use | `string` supporting replacement vars |
| *Description patterns* | The default pattern which *meta description* values should use | `string` supporting replacement vars |
| *Meta robots values* | Crawling/indexing controls which deviate from the defaults | One or more of `index`, `noindex`, `follow`, `nofollow`, `noodp`, `noimageindex`, `noarchive`, `nosnippet` |

## Page-level controls
For each page, the user should be able to preview and control their SEO settings via our [analysis tools](https://developer.yoast.com/features/analysis/overview)

## Misc Tools
Tools must be provided to allow users to manage:
* [Link attributes](features/link-attributes/functional-specification.md)
* [RSS feeds](features/rss-feeds/functional-specification.md)

