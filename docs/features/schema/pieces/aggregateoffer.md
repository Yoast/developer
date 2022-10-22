---
id: aggregateoffer
title: "Schema piece - AggregateOffer"
sidebar_label: AggregateOffer
description: Describes a group of 'offers' for a 'Product', typically due to variations in attributes (colors, sizes, prices).
---
import YoastSchemaExample from '../../../../src/components/YoastSchemaExample';

Describes a group of `offers` for a `Product`, typically due to variations in attributes (colors, sizes, prices).

## Triggers
* Should be output when required by a `Product` piece.

## Required properties
A valid `AggregateOffer` must have the following properties.

* `@type`: `AggregateOffer`.
* `@id`: The site's home URL appended by `#/schema/AggregateOffer/{{ID}}`, where `{{ID}}` is a unique identifier for the (aggregate) offer in question.
* `lowPrice`: The lowest price of the group, omitting any currency symbols, and using '.' to indicate a decimal place.
* `highPrice`: The lowest price of the group, omitting any currency symbols, and using '.' to indicate a decimal place.
* `priceCurrency`: The currency used to describe the product price, in three-letter ISO 4217 format.
* `offerCount`: The number of offers in the group
* `offers`: An array of `Offer` pieces, referenced by ID.

### Failure scenarios
If any of the required fields are missing or invalid, the node should not be output.
If the node is not output, any entities which would otherwise have referenced the `AggregateOffer` should remove those references (e.g., when a product references an `AggregateOffer` by ID).

## Examples

### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "AggregateOffer",
              "@id": "https://www.example.com/#/schema/AggregateOffer/abc123",
              "lowPrice": "22.00",
              "highPrice": "136.00",
              "priceCurrency": "GBP",
              "offerCount": 3,
              "offers": [
                  {
                      "@id": "https://www.example.com/#/schema/Offer/abc123"
                  },
                  {
                      "@id": "https://www.example.com/#/schema/Offer/def456"
                  },
                  {
                      "@id": "https://www.example.com/#/schema/Offer/ghi789"
                  }
              ]
          }
      ]
  }`}
</YoastSchemaExample>
