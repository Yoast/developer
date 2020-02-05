---
id: product
title: Schema piece - Product
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/pieces/product.md
---
import YoastSchemaExample from '../../../../../developer-site/src/components/YoastSchemaExample';

Describes a product sold by a business.

## Triggers
* Should be output on a page which represents a product (e.g., a product page).
* Should be output on product listing pages (e.g., a product category, or homepage listing products).

## Required properties
A valid `Product` must have the following properties.

* `@id`: The site’s home URL appended by `#/schema/product/{{ID}}`, where  `{{ID}}`  is a unique identifier.
* `name`: The name of the product.
* `image`: A reference-by-ID to one or more `imageObject` s which represent the product.

### Failure scenarios
If any of the required fields are missing or invalid, the node should not be output.

If the node is not output, any entities which would otherwise have declared themselves to be part of the `Product` should remove those references 
(e.g., an  `Offer`  relating to the `Product` ).

## Optional properties
The following should be added whenever available and valid:

* `offers`: An array of references-by-ID to one or more `Offer` or `aggregateOffer` pieces.
* `brand`: A reference to an `Organization` piece, representing brand associated with the `Product`.
* `seller`: A reference to an `Organization` piece which represents the `WebSite.`
* `description`: A text description of the product.
* `review`: An array of references-by-id to one or more `Review` pieces.
* `sku`: A merchant-specific identifier for the `Product`.
* `aggregateRating`: an `AggregateRating` object.
* `manufacturer`: A reference to an `Organization` piece, representing the brand which produces the `Product`.

## Examples
### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "Product",
              "@id": "https://www.example.com/#/schema/product/abc123",
              "name": "Example Product",
              "image": {
                  "@id": "https://www.example.com/#/schema/image/abc123"
              }
          }
      ]
  }`}
</YoastSchemaExample>

### Extended criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "Product",
              "@id": "https://www.example.com/#/schema/product/abc123",
              "name": "Example Product",
              "description": "Example product description",
              "image": {
                  "@id": "https://www.example.com/#/schema/image/abc123"
              },
              "offers": {
                  "@id": "https://www.example.com/#/schema/offer/abc123"
              },
              "brand": {
                  "@id": "https://www.example.com/#/schema/organization/abc123"
              },
              "seller": {
                  "@id": "https://www.example.com/#/schema/organization/def456"
              },
              "manufacturer": {
                  "@id": "https://www.example.com/#/schema/organization/def456"
              },
              "review": [
                  {
                      "@id": "https://www.example.com/#/schema/review/abc123"
                  },
                  {
                      "@id": "https://www.example.com/#/schema/review/def456"
                  }
              ],
              "sku": "abc123",
              "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4",
                  "reviewCount": "3077"
              }
          }
      ]
  }`}
</YoastSchemaExample>
