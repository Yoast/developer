---
id: sku
title: "Assessments: SKU"
sidebar_label: SKU
description: How the SKU assessment of the Yoast SEO analysis for product pages works and how it is scored.
---
The **SKU** assessment checks whether a product has a SKU. If the product has variants, it checks each variant.

| **SKU** | |
|---|---|
| **Name in code** | [`ProductSKUAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/ProductSKUAssessment.js) |
| **Title URL** | [https://yoa.st/4lw](https://yoa.st/4lw) |
| **Call to action URL** | [https://yoa.st/4lx](https://yoa.st/4lx) |
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
* **WooCommerce, products without variants**: when the content of the global SKU field can be retrieved.
* **WooCommerce, products with variants**: when the content of the SKU fields of all variants can be retrieved.
* **Shopify**: when the product doesn't have variants.

The content of SKU fields can't be retrieved when, for example, another plugin overrides the fields (such as the Product SKU Generator for WooCommerce).

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Orange | 6 | No SKU for a simple product, or (in WooCommerce) no SKU for a variable product without variations | **SKU**: Your product is missing a SKU. **Include it if you can, as it will help search engines to better understand your content.** |
| Orange | 6 | One or more variants are missing a SKU | **SKU**: Not all your product variants have a SKU. **Include it if you can, as it will help search engines to better understand your content.** |
| Green | 9 | The SKU is filled in for a simple product, or (in WooCommerce) for a variable product without variations | **SKU**: Your product has a SKU. Good job! |
| Green | 9 | There is at least one variant, and each variant has a SKU (whether the default is filled in or not) | **SKU**: All your product variants have a SKU. Good job! |
