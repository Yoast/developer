---
id: yoast-seo-shopify
title: Schema output for Yoast SEO Shopify
sidebar_label: Yoast SEO for Shopify
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/plugins/yoast-seo-shopify.md
description: Describes the schema output of the Yoast SEO plugin for Shopify.
---

import YoastSchemaExample from '../../../../../developer-site/src/components/YoastSchemaExample';

This page documents the [schema.org](https://schema.org/) markup output by the Yoast SEO for Shopify plugin.

## Core logic

Every page should (attempt to) output the following pieces:

- Organization
- Website
- Webpage

This produces a 'base script', which will typically looks something like the following (a composite of the above _pieces_):

<YoastSchemaExample>
{`{
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://www.example.com/#/schema/organization/1",
            "url": "https://www.example.com",
            "name": "Example organization name",
            "logo": {
                "@id": "https://www.example.com/#/schema/ImageObject/1234"
            },
            "image": [
                {
                    "@id": "https://www.example.com/#/schema/ImageObject/1234"
                }
            ],
            "sameAs": [
                "https:\/\/www.wikipedia.com\/example-organization",
                "https:\/\/facebook.com\/example-organization",
                "https:\/\/twitter.com\/example-organization",
                "https:\/\/www.instagram.com\/example-organization"
            ]
        },
        {
            "@type": "ImageObject",
            "@id": "https://www.example.com/#/schema/ImageObject/1234",
            "url": "https://www.example.com/content/images/1234",
            "contentUrl": "https://www.example.com/content/images/1234",
            "width": 520,
            "height": 240
        },
        {
            "@type": "WebSite",
            "@id": "https://www.example.com/#/schema/website/1",
            "url": "https://www.example.com",
            "name": "Example store",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.example.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
            },
            "inLanguage": "en",
            "publisher": {
                "@id": "https://www.example.com/#/schema/organization/1"
            }
        },
        {
            "@type": [
                "WebPage",
                "CollectionPage"
            ],
            "@id": "https://www.example.com/",
            "url": "https://www.example.com/",
            "name": "Example store",
            "about": {
                "@id": "https://www.example.com/#/schema/organization/1"
            },
            "breadcrumb": {
                "@id": "https://www.example.com/#/schema/breadcrumb"
            },
            "isPartOf": {
                "@id": "https://www.example.com/#/schema/website/1"
            }
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.example.com/#/schema/breadcrumb",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "name": "Example store",
                    "position": 1
                }
            ]
        }
    ]
}`}
</YoastSchemaExample>

## On product pages

- Change the `@type` of `WebPage` to `Product`
- Alter the `Product` piece
- Add the `mainEntityOfPage` piece to the product
- Add the `offers` piece

### Example

<YoastSchemaExample>
{`{
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Product",
            "@id": "https://www.example.com/products/example-product/#/schema/Product",
            "mainEntityOfPage": {
                "@id": "https://www.example.com/products/example-product"
            },
            "name": "Example product",
            "image": {
                  "@id": "https://www.example.com/#/schema/image/abc123"
            },
            "description": "Product description",
            "sku": "abc123",
            "url": "https://www.example.com/products/example-product",
            "offers": {
                "@type": "AggregateOffer",
                "@id": "https://www.example.com/products/example-product/#/schema/AggregateOffer",
                "availability": "https://schema.org/InStock",
                "offerCount": 1,
                "lowPrice": 10.0,
                "highPrice": 10.0,
                "priceCurrency": "EUR",
                "url": "https://www.example.com/products/example-product",
                "priceSpecification": {
                    "@type": "PriceSpecification",
                    "valueAddedTaxIncluded": true
                }
            }
        }
    ]
}`}
</YoastSchemaExample>
