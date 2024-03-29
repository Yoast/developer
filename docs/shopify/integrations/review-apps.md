---
id: review-apps
title: "Yoast SEO for Shopify: Integrations with review apps"
sidebar_label: Review apps
description: Details about how Yoast SEO for Shopify integrates with review apps
---
import YoastSchemaExample from '../../../src/components/YoastSchemaExample';

To integrate with review apps on the Shopify platform, we rely on the standard metafield definitions as provided by Shopify.
These definitions are interoperable across the entire platform and allow different apps to connect with each other,
and to integrate seamlessly in themes.

## Changes in the Yoast SEO for Shopify schema

Based on the standard metafield definitions, an extra `aggregateRating` property is added to the schema on product pages.
To generate this `AggregateRating` we use the product metafield data from `reviews.rating_count` and `reviews.rating` for the
`reviewCount` and `ratingValue` properties respectively.

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

## Supported integrations

Next to the integration with the standard metafield defintions, at the moment Yoast SEO for Shopify also integrates with the following services:

- [Judge.me](https://apps.shopify.com/judgeme)
- [Loox](https://apps.shopify.com/loox)
- [Ali Reviews](https://apps.shopify.com/ali-reviews)
- [Opinews](https://apps.shopify.com/photo-reviews)

**Judge.me** adds a separate schema property on the page that connects to Yoast SEO for Shopify product schema via an `@id` reference.
This separate schema property can not be found in the schema graph generated by Yoast SEO for Shopify.
