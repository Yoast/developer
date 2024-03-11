---
id: schema-graph
title: "Yoast SEO for Shopify: Schema"
sidebar_label: Schema
description: Extending the Yoast SEO for Shopify schema output
---
import YoastSchemaExample from '@site/src/components/YoastSchemaExample';


Yoast SEO for Shopify outputs [schema.org markup](/features/schema/plugins/yoast-seo-shopify). It does this based on
data available in Shopify and additional data filled through the app's interface. Other apps that add structured data
functionality (e.g., reviews, recipes, etc) can stitch that data into our schema.org data. More information about our
approach, technology, and specification can be found [here](/features/schema/).

## Altering the schema graph

All pieces in our graph contain an `@id` attribute. This ID can be used for a property to _reference_ an existing piece, 
or to _extend_ an existing piece with additional data. Multiple `<script>` tags can be placed on a webpage, where the
combination of all pieces from all `<script>` tags should result in one connected graph of schema data. Validate all
changes with our [preferred validation tools](/features/schema/functional-specification#5-validation-tools).

More about the specific `@id` values and how we create them can be found [here](#constructing-id-parameters).

### Adding pieces

Generally, our graph will contain an `Organization`, and references that `Organization` as the publisher of a `WebSite`.
We'll also add that the current `WebPage` is a part of the `WebSite`. If you want to add additional data to this graph
that references a specific piece, this can be done by referencing the `@id` property. For example, you could add 
an `AggregateRating` where the item that is being reviewed is the `Organization`:

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "AggregateRating",
              "@id": "https://www.example.com/#/schema/AggregateRating/1",
              "ratingValue": "4",
              "ratingCount": "250"
              "itemReviewed": {
                  "@id": "https://www.example.com/#/schema/Organization/1"
              }
          }
      ]
  }`}
</YoastSchemaExample>


### Editing pieces

Existing pieces on the schema graph can also be edited. This can only be done by adding additional data to the pieces.
For example, the current `WebPage` can be enhanced with the `FAQPage` type and have `Question` pieces added. This example
relies on the `@id` property of the existing `WebPage`, which will result in merging the data into one big `WebPage / 
FAQPage` piece.

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.example.com/pages/frequently-asked-questions",
      "mainEntity": [{
          "@type": "Question",
          "name": "Is there a local shop we can visit?",
          "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The shop is only online."
          }
      }]
  }`}
</YoastSchemaExample>

### Availability of each piece

Not all pieces will be relevant for every page on an online store. We describe the 
[core logic](/features/schema/plugins/yoast-seo-shopify) of when these pieces are added to a page. When altering the
graph, the same logic should be taken into account.

#### Check the pieces are enabled

Through the Yoast SEO for Shopify app, several pieces can be disabled. In these cases, the pieces will never be output.
We store this data in the metafield `yoast_seo.settings` on the `shop` object.  It's a JSON-type metafield, where the
boolean enabled status of these pieces is stored in `schema.outputControls`.

| Schema piece     | Metafield                                                            |
|------------------|----------------------------------------------------------------------|
| The entire graph | `shop.metafields.yoast_seo.value.schema.outputControls.schema`       |
| `Organization`   | `shop.metafields.yoast_seo.value.schema.outputControls.organization` |
| `WebSite`        | `shop.metafields.yoast_seo.value.schema.outputControls.website`      |
| `WebPage`        | `shop.metafields.yoast_seo.value.schema.outputControls.webpage`      |
| `Article`        | `shop.metafields.yoast_seo.value.schema.outputControls.article`      |
| `Product`        | `shop.metafields.yoast_seo.value.schema.outputControls.product`      |
| `BreadcrumbList` | `shop.metafields.yoast_seo.value.schema.outputControls.breadcrumb`   |

#### Check the Organization's name and logo being defined

In the same `yoast_seo.settings` metafield on the `shop` object, the data for the representation of the organization
also exists. The organization name should not be empty. That name is stored in
`shop.metafields.yoast_seo.value.schema.siteRepresentation.organizationName`.

**TODO**. Figure this out: The logo data is only conditionally outputting the `logo` property of the `Organization`. Is this correct??

Besides the organization name, we also require an organization logo. The url of the logo is stored in
`shop.metafields.yoast_seo.value.schema.siteRepresentation.organizationLogo.url`. Through the app, the image is stored
within Shopify. We extract the filename from the url, and retrieve the logo data from the global Liquid variable
`images`. Only if the logo exists as an image in this global variable, **_we output the `logo` property / we output the 
Organization piece_.**

#### Checking for a valid Article

While a `WebPage` might always be put on the page, the `Article` relies on the `Organization` and thus it also relies on
the organization name (**_and logo???_**) to be defined. 

An `Article` also requires data for the `description` page. We re-use the meta description for this by default. Without
a meta description, the article will not be output.

**TODO**. Figure this out: The article is only conditionally being output when the `image` property can be set. Is this correct??

The third requirement for an `Article` is to have an image to show. This image can be the `page_image`, a defined site
image which is stored in `shop.metafields.yoast_seo.value.siteSettings.siteDefaults.siteImage.url` and exists in the 
global Liquid variable `images`. The image can also be taken from the `article.image` object, or used from our OpenGraph
setting which is stored in `article.metafields.yoast_seo.indexable.value.open_graph_image_url`.

## Constructing ID parameters

All pieces in our schema output can referenced via an `@id` attribute. To replicate the `@id` value, this is the logic we apply.

* `Organization`: `shop.url | append: '/#/schema/organization/1'`
* `WebSite`: `shop.url | append: '/#/schema/website/1'`
* `WebPage`: `canonical_url`
* `Article`: `canonical_url | append: '#/schema/article/' | append: article.id`
* `Product`: `canonical_url | append: "/#/schema/Product"`
* `Offer`: `shop.url | append: '/#/schema/Offer/' | append: variant.id`
* `BreadcrumbList`: `canonical_url | append: '/#/schema/breadcrumb'`
* `ImageObject`: `shop.url | append: '/#/schema/ImageObject/' | append: image.id`
