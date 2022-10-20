---
id: integrating
title: Integrating Yoast SEO
image: https://yoast.com/shared-assets/opengraph/image.php?title=Integrating%20Yoast%20SEO
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

* [Schema specification](features/schema/functional-specification.md) (general/foundational behavior).
* [Schema specification for Yoast SEO](features/schema/plugins/yoast-seo.md) (Yoast-specific behavior).

## Controls & Analysis
For all posts, pages and content types, users must:

* Be able to [Analyze](features/analysis/overview.md) their content.
* Be provided with [Controls](features/controls/overview.md).
* Be able to edit page titles and descriptions in bulk (without needing to visit/open each individual page).

## Integrating our Analysis tools
At the moment, much of our analysis is tied deeply into either our WordPress or Shopify integrations. In the (near) future, we hope to increasingly de-couple our analysis tools from their respective back-ends, and to create a 'standalone' editor. 
We aim to make this easy to implement in any content editing context, simply by "pointing" it at the relevant fields (and "hooking up" relevant back-end behaviour based on user settings and controls).

We encourage integrators to pursue this method, rather than (re)building our analysis tools from scratch in their own context.

### Resources

* A simple example [standalone app](https://github.com/Yoast/wordpress-seo/tree/feature/agnostic-analysis/apps/seo-integration), which includes readability and SEO analysis (for multiple keyphrases and synonyms) as well as a working snippet preview (with replacemant variables)
  * Note that this currently excludes our *inclusive language*, *formality*, *insights*, and *social previews* checks/features.
* [Documentation](https://github.com/Yoast/wordpress-seo/tree/feature/agnostic-analysis/packages/seo-integration) on how to configure and integrate the standalone app.

Note that these resources should be considered a work in progress, and might not be stable in production environments.
If you encounter problems or errors, we encourage you to create issues on the respective repositories, and/or to contribute fixes and patches. 

### Rough roadmap
Whilst we can't provide specific timeframes on our roadmap, we *can* outline the key steps that we still need to undertake in order to release a stable production version of our 'agnostic' tools.
This may be subject to change.

* Convert NPM packages to built code.
* Restructure various Yoast GitHub repositories (de-coupling/moving various modules).
* Formal testing and release.
