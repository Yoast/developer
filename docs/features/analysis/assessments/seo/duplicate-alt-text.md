---
id: duplicate-alt-text
title: "Assessments: Duplicate alt text"
sidebar_label: Duplicate alt text
description: How the Duplicate alt text assessment of the Yoast SEO analysis works and how it is scored.
---
The **Duplicate alt text** assessment checks whether two or more different assessed images have the same alt text. Alt texts are compared after trimming and lowercasing.

By default, it assesses the images in the text. A platform can limit all image assessments to the item's own images by providing the `providedImages` attribute of the `Paper`.

* Two entries count as the same image (not as a duplicate) when they have the same `id` (provided images only), or else the same `src`. An image with neither counts as a different image.
* When images come from the text, the same image in two sizes has two `src` values, so it counts as two images.
* Images without alt text are not counted: several decorative images with an empty alt text are correct.

| **Duplicate alt text** | |
|---|---|
| **Name in code** | [`DuplicateAltTextAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/DuplicateAltTextAssessment.js) |
| **Title URL** | [https://yoa.st/duplicate-alt-text](https://yoa.st/duplicate-alt-text) |
| **Call to action URL** | [https://yoa.st/duplicate-alt-text-cta](https://yoa.st/duplicate-alt-text-cta) |
| **When it applies** | Only when at least two different assessed images have the same alt text. |
| **Product** | Yoast SEO (Free) |
| **Content types** | Posts and pages, product pages |
| **Related keyphrases** | ❌ |
| **Uses synonyms** | ❌ |
| **Languages** | All languages |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ❌ |

**Why there is no green traffic light**: "all your images have unique alt text" would be misleading when some or all alt texts are empty. When nothing is flagged, the assessment returns a result without a score and without a text. `Assessor.isValidResult` drops this result, and the assessment is not shown at all.

## Scoring
X is the number of images that share their alt text with at least one other image. For example, three images with the same alt text count as 3.

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Orange | 6 | Two or more different images have the same alt text | **Duplicate alt text**: X of your images don't have unique alt text. **Give each image its own alt text.** |

## Flagged items
The result names the flagged images in `flaggedItems`, by their `id`, or else by their `src`. An image with neither is counted, but not named.

## Custom feedback strings
A platform can supply its own feedback strings through `callbacks.getResultTexts`. This callback receives `urlTitleAnchorOpeningTag`, `urlActionAnchorOpeningTag` and `duplicateCount`, and must return `duplicate`. The returned object is used as is, so an omitted key renders as an empty result text. It does not fall back to the default.

## Product pages
On product pages, the criterion and the score are the same. Only the feedback strings are different: the assessed images are the product's own, so the strings say "product images" instead of "images". WooCommerce SEO and Shopify both supply their own feedback strings, so a user sees the platform's strings, not the defaults.

Provided images with the same `id` count as one image, so a product image that is also in the gallery is not a duplicate.

In Shopify, the links are different: [https://yoa.st/shopify-duplicate-alt-text](https://yoa.st/shopify-duplicate-alt-text) and [https://yoa.st/shopify-duplicate-alt-text-cta](https://yoa.st/shopify-duplicate-alt-text-cta).
