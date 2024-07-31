---
id: woocommerce-seo
title: "Yoast WooCommerce SEO: Schema output"
sidebar_label: WooCommerce SEO
description: Describes the schema output of Yoast's "WooCommerce SEO" plugin for WordPress.
---
The schema output for our [WooCommerce SEO plugin](https://yoast.com/wordpress/plugins/yoast-woocommerce-seo/) builds upon the [Yoast SEO schema output](yoast-seo.md), to add additional detail about products and ecommerce functionality.

## Core functionality

### On all pages
* Remove WooCommerce's breadcrumb schema.

### On product pages
* Change the `@type` of the `WebPage` piece into `ItemPage`.
* Alter the `Product` piece.
  * Apply our validation logic to each existing WooCommerce *piece* /value.
  * Add a `mainEntityOfPage` property to the `Product`, referencing the `WebPage` by ID.
  * Set the `brand` and `manufacturer` properties, based on taxonomy settings.
  * Set the `seller` to the `Organization` (or `Person` ) which is set as the `Publisher` of the `WebSite`.
  * Stitch `offers`, `review` and/or `aggregateRating` values into the graph (when available / as appropriate).
  * Unset the `datePublished` and `dateModified` values from the `ItemPage`.

#### Filters
* Customize the Yoast product schema with the `wpseo_schema_product` filter. See [Product Schema pieces](../pieces/product.md) for more information.
* Customize the offer part of the product schema with the `wpseo_schema_offer` filter. See [Offer Schema pieces](../pieces/offer.md) for more information.

### On checkout pages
* Change the `@type` of the `WebPage` piece to `CheckoutPage`.

### Optional on all pages.
* `hasMerchantReturnPolicy`: An array of the type `MerchantReturnPolicy` which represents a return policy of the organization.

## More information
* [Product Schema pieces](../pieces/product.md)
* [ProductGroup Schema pieces](../pieces/productgroup.md)
* [AggregateOffer Schema pieces](../pieces/aggregateoffer.md)
* [Organization Schema pieces](../pieces/organization.md)
* [Offer Schema pieces](../pieces/offer.md)
* [Person Schema pieces](../pieces/person.md)
* [Organization Schema pieces](../pieces/organization.md)
* [Review Schema pieces](../pieces/review.md)
* [WebSite Schema pieces](../pieces/website.md)
* [WebPage Schema pieces](../pieces/webpage.md)
