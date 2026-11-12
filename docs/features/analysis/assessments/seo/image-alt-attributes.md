---
id: image-alt-attributes
title: "Assessments: Image alt attributes"
sidebar_label: Image alt attributes
description: How the Image alt attributes assessment of the Yoast SEO analysis for product pages works and how it is scored.
---
The **Image alt attributes** assessment checks whether all assessed images have alt attributes. It only runs on product pages.

By default, it assesses the images in the text. A platform can limit all image assessments to the product's own images (featured, gallery, variations) by providing the `providedImages` attribute of the `Paper`. An empty array counts as a product without images.

| **Image alt attributes** | |
|---|---|
| **Name in code** | [`ImageAltTagsAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/ImageAltTagsAssessment.js) |
| **Title URL** | [https://yoa.st/33c](https://yoa.st/33c) |
| **Call to action URL** | [https://yoa.st/33d](https://yoa.st/33d) |
| **When it applies** | Always, on product pages. |
| **Product** | Yoast WooCommerce SEO, Yoast SEO for Shopify |
| **Content types** | **WordPress**: products (WooCommerce SEO)<br/>**Shopify**: products<br/>**Google Docs**: not available |
| **Related keyphrases** | ❌ |
| **Uses synonyms** | ❌ |
| **Languages** | All languages |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ❌ |

## Scoring
These are the default feedback strings. WooCommerce SEO and Shopify supply their own strings (see [Custom feedback strings](#custom-feedback-strings)), so the strings a user sees on a product page are different.

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 3 | No images | **Image alt attributes**: This page does not have images with alt attributes. **Add some!** |
| Red | 3 | None of the images have alt attributes | **Image alt attributes**: None of the images have alt attributes. **Add alt attributes to your images!** |
| Red | 3 | One image has no alt attribute | **Image alt attributes**: One image doesn't have alt attributes. **Add alt attributes to your images!** |
| Red | 3 | Not all images have alt attributes | **Image alt attributes**: Some images don't have alt attributes. **Add alt attributes to your images!** |
| Green | 9 | All images have alt attributes | **Image alt attributes**: All images have alt attributes. Good job! |

## Flagged items
The result names the images without alt text in `flaggedItems`, each once, by their `id`, or else by their `src`. An image with neither is counted, but not named. An alt text of only whitespace counts as missing.

## Custom feedback strings
A platform can supply its own feedback strings through `callbacks.getResultTexts`. This callback receives `urlTitleAnchorOpeningTag`, `urlActionAnchorOpeningTag`, `numberOfImagesWithoutAlt`, `totalNumberOfImages` and `isVariableProduct`, and must return all four of `good`, `noImagesBad`, `noneHasAltBad` and `someHaveAltBad`. The returned object is used as is, so an omitted key renders as an empty result text. It does not fall back to the default.
