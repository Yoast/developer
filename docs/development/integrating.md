---
id: integrating
title: "Integrating Yoast SEO"
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

## Integrating with our Yoast SEO content analysis

### Current set-up

At the moment, much of our analysis is tied deeply into either our WordPress or Shopify integrations.
Here, we specify how our Yoast SEO plugin integrates with the (default) block editor, the classic editor, and Elementor. 
For understandable reasons, we focus on the parts of our Free plugin.

#### PHP integration

On the PHP side, we work with the concept of `Metabox`es for the different parts of our content analysis. This is a slight misnomer, as these are used as parts of both our **Yoast SEO metabox** (in the classic and block editor) and **Yoast SEO sidebar** (in the block editor, Elementor editor, and Shopify app). Refer to the code [for posts](https://github.com/Yoast/wordpress-seo/tree/trunk/admin/metabox/class-metabox.php) and [for taxonomies](https://github.com/Yoast/wordpress-seo/tree/trunk/admin/taxonomy/class-taxonomy-metabox.php) for more details. We are currently working on [decoupling the metabox and the sidebar](https://github.com/Yoast/wordpress-seo/issues/20866), so please stay tuned to for updates on that front. 

The [Elementor integration](https://github.com/Yoast/wordpress-seo/tree/trunk/src/integrations/third-party/elementor.php) shows how these `Metabox` units can be integrated (`implements Integration_Interface`) on other pages, in this case, the Elementor edit post page (see `Elementor_Edit_Conditional`). It also shows how we can enqueue additional scripts and styling (see `register_hooks`).

#### JavaScript integration

On the JavaScript side, the starting point is `packages/js/src/post-edit.js` ([here on GitHub](https://github.com/Yoast/wordpress-seo/tree/trunk/packages/js/src/post-edit.js)), which initializes the metabox and its behaviour (`initTabs`, `initAdminMedia`, `initAdmin`, `initializeInsights`, `initializeAiGenerator`), the initialization of the Redux store (`initEditorStore`), and the integration with various parts of the editor:
* an integration with the editor as a whole (`initEditorIntegration`). Here, there are implementations for the [default block editor](https://github.com/Yoast/wordpress-seo/tree/trunk/packages/js/src/initializers/block-editor-integration.js) and [the Classic Editor](https://github.com/Yoast/wordpress-seo/tree/trunk/packages/js/src/initializers/classic-editor-integration.js). These integrations make sure the sidebar is displayed and the highlighting functionality is activated. 
* a scraper that updates the editor data and links the Yoast SEO content analysis (`initPostScraper`)
* an integration with the primary category element (`initPrimaryCategory`)
* an integration with the featured image elements (`initFeaturedImageIntegration`)

In `term-edit.js` ([here on GitHub](https://github.com/Yoast/wordpress-seo/tree/trunk/packages/js/src/term-edit.js)), we have a very similar integration for terms, without integrations for elements that do not appear on terms. 

For other editors, like Elementor in `packages/js/src/elementor.js`, we have a similar approach (cf. [this code](https://github.com/Yoast/wordpress-seo/tree/trunk/packages/js/src/elementor.js). There are some small differences: 
- Instead of a scraper, we work with a watcher there (`initElementorWatcher`) to update the editor store.
- The setup of the YoastSEO analysis app (see `initializePostAnalysis` in [the post scraper](https://github.com/Yoast/wordpress-seo/tree/trunk/packages/js/src/initializers/post-scraper.js)) is done in the integration instead of in the watcher.
- There is some extra code to introduce the Yoast SEO integration to new users (`initializeIntroduction`).
- The rendering of the sidebar is taken care of through `initElementEditorIntegration`.

### Future set-up

In the (hopefully near) future, we hope to increasingly de-couple our analysis tools from their respective back-ends, and to create a 'standalone' editor. 
We aim to make this easy to implement in any content editing context, simply by "pointing" it at the relevant fields (and "hooking up" relevant back-end behaviour based on user settings and controls).

#### Resources

* A simple example [standalone app](https://github.com/Yoast/wordpress-seo/tree/feature/agnostic-analysis/apps/seo-integration), which includes readability and SEO analysis (for multiple keyphrases and synonyms) as well as a working snippet preview (with replacemant variables)
  * Note that this currently excludes our *inclusive language*, *formality*, *insights*, and *social previews* checks/features.
* [Documentation](https://github.com/Yoast/wordpress-seo/tree/feature/agnostic-analysis/packages/seo-integration) on how to configure and integrate the standalone app.

Note that these resources should be considered a work in progress, and might not be stable in production environments.
If you encounter problems or errors, we encourage you to create issues on the respective repositories, and/or to contribute fixes and patches.
