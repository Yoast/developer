---
id: overview
title: Overview
description: A placeholder which acts as a hub for all of the technical documentation and specifications of the Yoast SEO product suite.
---

This document is a living document, describing the functionality of [Yoast SEO](https://yoast.com/wordpress/plugins/seo/) product suite.

It starts with a general specification, describing the functionality a Yoast SEO module should always guarantee, regardless of the platform for which it has been built. Further down you will find more platform specific requirements.

## Automatic optimization
The following standards must be met, automatically and without user intervention, when the module is activated.

### URLs
* The site needs to support and use 'pretty permalinks' (human-readable, structured URLs).
* System permalinks should refer to their human-readable equivalents through [canonical URL tags](features/seo-tags/canonical-urls/).

### Meta tags
All pages should output metadata in line with the following standards:
* [Title tags](features/seo-tags/titles/functional-specification.md)
* [Description tags](features/seo-tags/descriptions/functional-specification.md)
* [Canonical URL tags](features/seo-tags/canonical-urls/functional-specification.md)
* [Meta robots tags](features/seo-tags/meta-robots/functional-specification.md)
* [Open Graph tags](features/opengraph/functional-specification.md)
* [Twitter tags](features/twitter/functional-specification.md)

### Structured data
All pages should output structured data in line with the following standards:
* [Schema specification](features/schema/functional-specification.md) (general/foundational behavior)
* [Schema specification for Yoast SEO](features/schema/plugins/yoast-seo.md) (Yoast-specific behavior)
