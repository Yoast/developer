---
id: offer
title: Schema piece - Offer
sidebar_label: Offer
description: Describes an offer for a 'Product' (typically prices, stock availability, etc).
---
import YoastSchemaExample from '../../../../src/components/YoastSchemaExample';

Describes an offer for a `Product` (typically prices, stock availability, etc).

## Triggers
* Should be output when required by a `Product` piece.

## Required properties
A valid `Offer` must have the following properties.

* `@type`: `Offer`.
* `@id`: The site's home URL appended by `#/schema/Offer/{{ID}}`, where `{{ID}}` is a unique identifier.
* `availability`: A schema.org URL representing a schema `itemAvailability` value (e.g., *https://schema.org/OutOfStock*).
* `url`: The canonical URL of the page containing the `Offer`.
* `priceSpecification`: A `PriceSpecification` object, including a `price`, `priceCurrency`, and `valueAddedTaxIncluded` property (of either `true` or `false`).

## Optional properties
The following should be added whenever available and valid:

* `priceValidUntil`: A date (in YYYY-mm-dd format) representing the end of a current, temporary pricing value (e.g., a sales period with a defined end-date).
* `seller`: A reference-by-ID to the `WebSite`'s publishing `Organization`.

### Failure scenarios
If any of the required fields are missing or invalid, the node should not be output.

If the node is not output, any entities which would otherwise have referenced the `Offer` should remove those references (e.g., when a product references an  `Offer` by ID).

## Examples

### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "Offer",
              "@id": "https://www.example.com/#/schema/Offer/abc123",
              "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "22.00",
                  "valueAddedTaxIncluded": "false"              
                  "priceCurrency": "GBP",
              },
              "availability": "http://schema.org/InStock",
              "url": "https://www.example.com/example-product-page/",
              "seller": {
                  "@id": "https://www.example.com/#/schema/Organization/1"
              }
          }
      ]
  }`}
</YoastSchemaExample>
