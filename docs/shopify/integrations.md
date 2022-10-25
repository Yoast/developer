---
id: integrations
title: "Yoast SEO for Shopify: Integrations"
sidebar_label: Integrations
description: Details about how Yoast SEO for Shopify integrates with apps and services
---
import YoastSchemaExample from '../../src/components/YoastSchemaExample';

At the moment, Yoast SEO for Shopify integrates with the following services:
- [Judge.me](https://apps.shopify.com/judgeme)
- [Loox](https://apps.shopify.com/loox)
- [Ali Reviews](https://apps.shopify.com/ali-reviews)
- [Opinews](https://apps.shopify.com/photo-reviews)

## Changes in the Yoast SEO for Shopify schema

For Loox, Ali Reviews and Opinews integrations, an extra `aggregateRating` property is added to the schema on product pages.

Here is an example of how the new schema property looks:

<YoastSchemaExample>
{`{
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4",
        "reviewCount": "3077"
    }
}`}
</YoastSchemaExample>

## Special case for the Judge.me integration

**Judge.me** add a separate schema property on the page that connects to Yoast SEO for Shopify product schema via an `@id` reference.
