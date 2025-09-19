---
id: product
title: "Schema piece - Product"
sidebar_label: Product
description: Describes a product sold by a business.
---
import YoastSchemaExample from '../../../../src/components/YoastSchemaExample';

Describes a product sold by a business.

## Triggers
* Should be output on a page which represents a product (e.g., a product page).

## Required properties
A valid `Product` must have the following properties.

* `@type`: `Product`.
* `@id`: The site's home URL appended by `#/schema/Product/{{ID}}`, where `{{ID}}` is a unique identifier.
* `name`: The name of the product.
* `image`: A reference-by-ID to one or more `ImageObject` s which represent the product.

### Failure scenarios
If any of the required fields are missing or invalid, the node should not be output.

If the node is not output, any entities which would otherwise have declared themselves to be part of the `Product` should remove those references (e.g., an `Offer` relating to the `Product`).

## Optional properties
The following should be added whenever available and valid:

* `offers`: A reference by ID to an `Offer` or `AggregateOffer` piece.
* `brand`: A reference to an `Organization` piece, representing brand associated with the `Product`.
* `seller`: A reference to an `Organization` piece which represents the `WebSite.`
* `description`: A text description of the product.
* `review`: An array of references-by-id to one or more `Review` pieces.
* `sku`: A merchant-specific identifier for the `Product`.
* `aggregateRating`: an `AggregateRating` object.
* `manufacturer`: A reference to an `Organization` piece, representing the brand which produces the `Product`.
* `gtin8`: The GTIN-8 (Global Trade Item Number) code of the `Product`.
* `gtin12` / `UPC`: The GTIN-12 (Global Trade Item Number) code of the `Product`.
* `gtin13` / `EAN`: The GTIN-13 (Global Trade Item Number) code of the `Product`.
* `gtin14` / `ITF-14`: The GTIN-14 (Global Trade Item Number) code of the `Product`.
* `isbn`: The ISBN (International Standard Book Number) of the `Book`. When provided, the `@type` of the `Product` changes to `Book`.
* `mpn`: The MPN (Manufacturer Part Number) of the `Product`.

## Examples

### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "Product",
              "@id": "https://www.example.com/#/schema/Product/abc123",
              "name": "Example Product",
              "image": {
                  "@id": "https://www.example.com/uploads/example-image.jpg"
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
              "@id": "https://www.example.com/#/schema/Product/abc123",
              "name": "Example Product",
              "description": "Example product description",
              "image": {
                  "@id": "https://www.example.com/uploads/example-image.jpg"
              },
              "offers": {
                  "@id": "https://www.example.com/#/schema/Offer/abc123"
              },
              "brand": {
                  "@id": "https://www.example.com/#/schema/Organization/abc123"
              },
              "manufacturer": {
                  "@id": "https://www.example.com/#/schema/Organization/def456"
              },
              "review": [
                  {
                      "@id": "https://www.example.com/#/schema/Review/abc123"
                  },
                  {
                      "@id": "https://www.example.com/#/schema/Review/def456"
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

## Yoast WooCommerce SEO API: Change Product Schema output {#api}

To make changes to the `Product` schema that Yoast SEO outputs, you can use our `wpseo_schema_product` filter. Here is an example:

```php
add_filter( 'wpseo_schema_product', 'example_change_product' );

/**
 * Adds the color to the product schema.
 *
 * @param array $data The Schema Product data.
 *
 * @return array Schema.org Product data array.
 */
function example_change_product( $data ) {
	$data['color'] = 'red';

	return $data;
}
```

We also have a more specific filter for the offer part of the product schema: `wpseo_schema_offer`, see [Offer Schema piece](../pieces/offer.md#api) for more information.

To make more changes to our Schema output, see the [Yoast SEO Schema API](../api.md).
