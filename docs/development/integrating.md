---
id: integrating
title: Integrating Yoast SEO
description: A hub for describing the technical specifications and requirements for integrating Yoast SEO.
---
This documentation is a hub for describing the technical specifications and requirements for integrating [Yoast SEO](https://yoast.com/wordpress/plugins/seo/).

## Automatic optimization
The following standards must be met, automatically and without user intervention, when the software is installed and activated.
### System behavior
* The site must output and use 'pretty permalinks' (human-readable, structured URLs).
* All public-facing URLs, meta tags and content must be rendered server-side, in the initial response from the server. Client-side rendering solutions are not supported.
* The site must output a complete and valid [XML Sitemap](features/xml-sitemaps/functional-specification.md).
* The site must generate (or alter) a [robots.txt file](features/robots-txt/functional-specification.md).

### Integrations
* Creating, updating or publishing content should ping [IndexNow](features/integrations/indexnow.md) (and ping the [XML Sitemap](features/xml-sitemaps/functional-specification.md) to Google).
## Metadata & output
### Meta tags
All pages and content types should output metadata in line with the following standards:

* [Title tags](features/seo-tags/titles/functional-specification.md)
* [Description tags](features/seo-tags/descriptions/functional-specification.md)
* [Canonical URL tags](features/seo-tags/canonical-urls/functional-specification.md)
* [Meta robots tags](features/seo-tags/meta-robots/functional-specification.md)
* [Open Graph tags](features/opengraph/functional-specification.md)
* [Twitter tags](features/twitter/functional-specification.md)
* [Alternate content formats](/features/alternate-formats/)

### Structured data
All pages should output structured data in line with the following standards:

* [Schema specification](features/schema/functional-specification.md) (general/foundational behavior)
* [Schema specification for Yoast SEO](features/schema/plugins/yoast-seo.md) (Yoast-specific behavior)
## Controls & Analysis
For all posts, pages and content types, users must:

* Be able to [Analyze](features/analysis/overview.md) their content
* Be provided with [Controls](features/controls/overview.md)
* Be able to edit page titles and descriptions in bulk (without needing to visit/open each individual page)