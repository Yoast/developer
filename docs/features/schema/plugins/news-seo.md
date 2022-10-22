---
id: news-seo
title: "Yoast News SEO for WordPress: Schema output"
image: https://yoast.com/shared-assets/opengraph/?title=Yoast%20News%20SEO%20for%20WordPress:%20Schema%20output
sidebar_label: News SEO for WordPress
description: Describes the schema output of Yoast's "News SEO" plugin for WordPress.
---
The schema output for [News SEO for WordPress](https://yoast.com/wordpress/plugins/news-seo/) builds upon [Yoast SEO for WordPress' base schema output](yoast-seo.md), to provide additional *news* context and detail.

## Core logic
When a post type has been elected as a *News Article* format, then:
* Change the `@type` attribute of the `Article` to `NewsArticle`.
* Add a `copyrightYear` property, with the year of publication.
* Add a `copyrightHolder` property, which references the publishing `Organization` by ID.

## Additional scenarios

### NewsArticle subtypes
When a user nominates a _post type_ or _individual post_ as a specific subtype of `NewsArticle` (e.g., `OpinionNewsArticle`), set the `@type` attribute to this value.

### On 'news pages' which don't have an `Article`
In some rare cases, a non-post format (e.g., a page, a custom post type, a homepage, a product page, etc) may be elected as a news type. Typically, these page formats won't contain an `Article`.

In these cases, an `Article` (and dependent pieces) should be added to the graph and multi-typed into a `Article` and `NewsArticle`, as if the page were a conventional *news post*.

In some scenarios, this may result in multiple entities declaring a `mainEntityOfPage` relationship with the `WebPage` (e.g., when the page already contains a `Product`). When this happens, the `mainEntityOfPage` property on the conflicting node(s) (e.g., the `Product`) should be altered to reference the ID of the `NewsArticle`.

## More information
* [Article Schema pieces](../pieces/article.md)
* [Organization Schema pieces](../pieces/organization.md)
* [Product Schema pieces](../pieces/product.md)
* [WebPage Schema pieces](../pieces/webpage.md)
