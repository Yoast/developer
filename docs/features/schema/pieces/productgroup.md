---
id: productgroup
title: "Schema piece - ProductGroup"
sidebar_label: ProductGroup
description: Describes a group of `Product`s that have variations in attributes (colors, sizes, prices).
---

import YoastSchemaExample from '../../../../src/components/YoastSchemaExample';

Describes a `Product` that has variations in attributes (colors, sizes, prices).
See [Product Schema piece](../pieces/product.md) for more information.

## Triggers

* Should be output on a page which represents a product (e.g., a product page). Specifically, when the product has
  variations (e.g. an instance of the WC_Product_Variable class in WooCommerce).

## Required properties

A valid `ProductGroup` must have `offers`. Each `offer` of the `Product` will be translated to a `Product` entry
under `hasVariant` in the `ProductGroup`.

### Failure scenarios

If `offers` is missing, we will not change a `Product` to a `ProductGroup`.

## Optional properties

The following should be added whenever available and valid:

* `productGroupID`: by default, the `sku` is used for this.

Other than these, the `ProductGroup` can have all the optional properties of a `Product`.

## Examples

### Minimum criteria

<YoastSchemaExample>
{`{
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "ProductGroup",
            "@id": "https://www.example.com/#/schema/Product/abc123",
            "name": "Example Product",
            "image": {
                "@id": "https://www.example.com/uploads/example-image.jpg"
            },
            "hasVariant": [
                  {
                      "@id": "https://www.example.com/#/schema/Product/def456"
                  },
                  {
                      "@id": "https://www.example.com/#/schema/Product/hij789"
                  }
            ]
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
            "@type": "ProductGroup",
            "@id": "https://www.example.com/#/schema/Product/abc123",
            "name": "Example Product",
            "description": "Example product description",
            "image": {
                "@id": "https://www.example.com/uploads/example-image.jpg"
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
            "productGroupID": "abc123",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4",
                "reviewCount": "3077"
            },
            "hasVariant": [
                {
                    "@type": "Product",
                    "@id": "https://www.example.com/#/schema/Product/def456",
                    "name": "Example Product - Red",
                    "image": {
                        "@id": "https://www.example.com/uploads/example-image-red.jpg"
                    },
                    "color": "red"
                },
                {
                    "@type": "Product",
                    "@id": "https://www.example.com/#/schema/Product/hij789",
                    "name": "Example Product - Blue",
                    "image": {
                        "@id": "https://www.example.com/uploads/example-image-blue.jpg"
                    },
                    "color": "Blue"
                }
            ]
        }
    ]
}`}
</YoastSchemaExample>
