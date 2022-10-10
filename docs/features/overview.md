---
id: overview
title: Overview
custom_edit_url: https://github.com/Yoast/developer/edit/main/docs/features/overview.md
description: A placeholder which acts as a hub for all of the technical documentation and specifications of the Yoast SEO product suite.
---
import useBaseUrl from '@docusaurus/useBaseUrl';

This document is a living document, describing the functionality of [Yoast SEO](https://yoast.com/wordpress/plugins/seo/) product suite.

It starts with a general specification, describing the functionality a Yoast SEO module should always guarantee, regardless of the platform for which it has been built. Further down you will find more platform specific requirements.

## Automatic optimization
The following standards must be met, automatically and without user intervention, when the module is activated.

### URLs
* The site needs to support and use 'pretty permalinks' (human-readable, structured URLs).
* System permalinks should refer to their human-readable equivalents through [canonical URL tags](features/seo-tags/canonical-urls/overview.md).

### Meta tags
All pages should output metadata in line with the following standards:
* [Title tags](features/seo-tags/titles/functional-specification.md)
* [Description tags](features/seo-tags/descriptions/functional-specification.md)
* [Canonical URL tags](features/seo-tags/canonical-urls/functional-specification.md)
* [Meta robots tags](features/seo-tags/meta-robots/functional-specification.md)
* [Open Graph tags](features/opengraph/functional-specification.md)

### Structured data
All pages should output structured data in line with the following standards:
* [Schema specification](features/schema/functional-specification.md) (general/foundational behavior)
* [Schema specification for Yoast SEO](features/schema/plugins/yoast-seo.md) (Yoast-specific behavior)

## Global site controls
As a site owner, I want to be able to set the following metadata globally.

### Default meta options
| Option | Description | Values |
| --- | ----- | --- |
| `og:site_name` | The name of the site for when shared in social platforms | `string` |
| `twitter:card` | The size/format of Twitter Card to use when a page is shared | `summary` or `summary_large_image` |
| `twitter:site` | The Twitter handle of the Twitter profile associated with the site | `string` |
| *Social profiles* | An array of the URLs of social media properties representing the publisher | `array` |
| *Title separator* | The character used to delimit a page's 'name' and brand components in the *title* tag | `char` |

### Publisher information
| Option | Description | Values |
| --- | ----- | --- |
| *Publisher type* | Whether the site represents a user or organization | `user` or `organization` |
| `organization.name` | The name of the organization which publishes the site | `string` |
| `organization.logo` | An image representing the organization which publishes the site | `string` |
| `person.name` | The name of the person which publishes the site | `string` |
| `person.logo` | An image of the person which publishes the site | `string` |

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