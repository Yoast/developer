---
id: product-identifier
title: "Assessments: Product identifier"
sidebar_label: Product identifier
description: How the Product identifier assessment of the Yoast SEO analysis for product pages works and how it is scored.
---
The **Product identifier** assessment checks whether a product has an identifier (like a GTIN code). If the product has variants, it checks each variant. In Shopify, this assessment is called **Barcode**.

| **Product identifier** | |
|---|---|
| **Name in code** | [`ProductIdentifiersAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/ProductIdentifiersAssessment.js) |
| **Title URL** | [https://yoa.st/4ly](https://yoa.st/4ly) |
| **Call to action URL** | [https://yoa.st/4lz](https://yoa.st/4lz) |
| **When it applies** | See [When it applies](#when-it-applies). |
| **Product** | Yoast WooCommerce SEO, Yoast SEO for Shopify |
| **Content types** | Product pages |
| **Related keyphrases** | ❌ |
| **Uses synonyms** | ❌ |
| **Languages** | All languages |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ❌ |

## When it applies
* **WooCommerce, products without variants**: when the content of all global identifier fields can be retrieved, or when at least one identifier is found for the product (even if the content of all identifier fields cannot be retrieved).
* **WooCommerce, products with variants**: when the content of all global identifier fields of all variants can be retrieved, or when at least one identifier is found for every variant (even if the content of all identifier fields cannot be retrieved).
* **Shopify**: when the product doesn't have variants.

The content of identifier fields can't be retrieved when, for example, the user adds code to remove these fields.

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Orange | 6 | No identifier for a simple product, or (in WooCommerce) no identifier for a variable product without variations | _WooCommerce_: **Product identifier**: Your product is missing an identifier (like a GTIN code). **Include it if you can, as it will help search engines to better understand your content.** <br/> _Shopify_: **Barcode**: Your product is missing a barcode (like a GTIN code). **Include it if you can, as it will help search engines to better understand your content.** |
| Orange | 6 | One or more variants are missing an identifier | _WooCommerce_: **Product identifier**: Not all your product variants have an identifier. **Include it if you can, as it will help search engines to better understand your content.** <br/> _Shopify_: not applicable |
| Green | 9 | The identifier is filled in for a simple product, or (in WooCommerce) for a variable product without variations | _WooCommerce_: **Product identifier**: Your product has an identifier. Good job! <br/> _Shopify_: **Barcode**: Your product has a barcode. Good job! |
| Green | 9 | There is at least one variant, and each variant has an identifier (whether the default is filled in or not) | _WooCommerce_: **Product identifier**: All your product variants have an identifier. Good job! <br/> _Shopify_: not applicable |
