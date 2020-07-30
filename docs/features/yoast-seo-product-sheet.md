---
id: yoast-seo-product-sheet
title: Standards - Product sheet
sidebar_label: Product sheet
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/standards/yoast-seo-product-sheet.md
description: This document is a living document, describing the functionality of Yoast SEO for any platform.
---
import useBaseUrl from '@docusaurus/useBaseUrl';

This document is a living document, describing the functionality of Yoast SEO for any platform.

It starts with a general specification, describing the functionality a Yoast SEO module should always guarantee, regardless of the platform for which it has been built. Further down you will find more platform specific requirements.

## Automatic optimization
The following standards must be met, automatically and without user intervention, when the module is activated.

### URLs
* The site needs to support and use 'pretty permalinks' (human-readable, structured URLs).
* System permalinks should refer to their human-readable equivalents through [canonical URL tags](features/seo-tags/canonical-urls/overview.md).

### Meta tags
All pages should output meta tags in line with the following standards:
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

### Content analysis & meta controls
Our JavaScript content analysis tool, [YoastSEO.js](https://github.com/Yoast/javascript/tree/master/packages/yoastseo), is able to analyze content for a whole range of SEO, accessibility and readability checks.
It contains a 'snippet editor', which generates previews of how the page will (probably) be displayed in Google desktop or mobile search.
It also contains an editor in which users can edit the page's title, URL and meta description intuitively.

Example of the SEO & accessibility checks
<img src={useBaseUrl( 'img/seo-analysis.png' )} alt='Example of the SEO & accessibility checks' />

Example of the readability checks
<img src={useBaseUrl( 'img/readability.png' )} alt='Example of the SEO & accessibility checks' />

Snippet editor (desktop)
<img src={useBaseUrl( 'img/desktop-preview.png' )} alt='Snippet editor (desktop)' />

Snippet editor (mobile)
<img src={useBaseUrl( 'img/mobile-preview.png' )} alt='Snippet editor (mobile)' />

These UI elements should be integrated into the content editing experience and should update in a real-time or semi-realtime manner. For inspiration, implementors are recommended to take a look at how these elements are integrated into [Yoast SEO for WordPress](https://wordpress.org/plugins/wordpress-seo/).

### Advanced page controls
Users should also be able to define the following for any given page:

| Setting | Behavior |
| ---- | -- |
| Whether search engines should show the page in search results (yes / no) | Sets a *meta robots* value of *noindex* |
| Whether search engines should follow links on the page (yes / no) | Sets a *meta robots* value of *nofollow* |
| Advanced meta robots directives | Allows users to select additional (valid) *meta robots* values |
| Breadcrumbs title | Defines the title of the page as/when used in breadcrumbs (markup and structured data) |
| Canonical URL | Allows users to define a custom canonical URL value |

## For Magento
* Magento's standard CMS functionality can be somewhat compared to WordPress in terms of content management because content is edited in one field only. Therefore the Yoast content analysis will be easy to integrate in the standard CMS functionality.
* Nice to have: there are a lot of modules that extend Magento's basic CMS functionality. Some add custom fields to the content editing experience. It would be nice to integrate with the most used amongst these modules.
* Products are not part of Magento's CMS functionality. These are in fact built up out of a pretty much endless set of fields. To integrate the content analysis for product detail pages, the approach that was chosen is to create a template for analysis in which we load a standard set of fields in logical positions. The template is then fed to the content analysis and analyzed for SEO and readability.
* Product category pages can be content only, product only (often with content widgets) or contain both content and a list of products. We should probably only integrate our content analysis for product category pages that contain content.
* Every variant to a product can have its own page or only be visible through a product page of a configurable product (a product with many variants i.e. different sizes and colors) or a bundle. One could think of a red XL shirt which is a separate product but is only shown on the product page for "shirt" as a variant.
* In case a product that is a variant to a configurable product does have its own page, should it canonicalize to the configurable product's page?
* It would probably be a good idea to add structured metadata for [Product](https://schema.org/Product). The idea is to only add properties that Google actually looks at. `offers` and `review` seem like good candidates. What else?
* Magento is licensed under OSL. We should check if there are any compatibility issues with GPLv3 that might bite us.
