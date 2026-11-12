---
id: alt-text-length
title: "Assessments: Alt text length"
sidebar_label: Alt text length
description: How the Alt text length assessment of the Yoast SEO analysis works and how it is scored.
---
The **Alt text length** assessment checks whether the assessed images have alt text that is likely too short (10 characters or fewer) or too long (200 characters or more).

By default, it assesses the images in the text. A platform can limit all image assessments to the item's own images by providing the `providedImages` attribute of the `Paper`.

Images without alt text are not counted as too short. That case is covered by the _Image alt attributes_ assessment on product pages.

| **Alt text length** | |
|---|---|
| **Name in code** | [`AltTextLengthAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/AltTextLengthAssessment.js) |
| **Title URL** | [https://yoa.st/alt-text-length](https://yoa.st/alt-text-length) |
| **Call to action URL** | [https://yoa.st/alt-text-length-cta](https://yoa.st/alt-text-length-cta) |
| **When it applies** | Only when at least one assessed image has alt text that is too short or too long. |
| **Product** | Yoast SEO (Free) |
| **Content types** | **WordPress**: posts and pages, products (WooCommerce SEO)<br/>**Shopify**: products, blog posts and pages<br/>**Google Docs**: documents |
| **Related keyphrases** | ❌ |
| **Uses synonyms** | ❌ |
| **Languages** | Japanese has different limits: 5 characters or fewer, and 100 characters or more. |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ❌ |

**Why there is no green traffic light**: there is no good range for alt text length. When nothing is flagged, the assessment returns a result without a score and without a text. `Assessor.isValidResult` drops this result, and the assessment is not shown at all.

## Scoring
Each feedback text is two separately translated sentences: the count, then the action with the character limit. For Japanese, the limits in the action sentence are 5 and 100.

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Orange | 6 | X images have alt text of 10 characters or fewer | **Alt text length**: X of your images have very short alt text. **Consider making the alt text longer than 10 characters.** |
| Orange | 6 | X images have alt text of 200 characters or more | **Alt text length**: X of your images have very long alt text. **Consider making the alt text shorter than 200 characters.** |
| Orange | 6 | Both cases occur on the same page | **Alt text length**: X of your images have very short or very long alt text. **Consider making the alt text longer than 10 and shorter than 200 characters.** |

## Custom feedback strings
A platform can supply its own feedback strings through `callbacks.getResultTexts`. This callback receives `urlTitleAnchorOpeningTag`, `urlActionAnchorOpeningTag`, `tooShortCount`, `tooLongCount`, `tooShortBoundary` and `tooLongBoundary`, and must return all three of `tooShort`, `tooLong` and `both`. The returned object is used as is, so an omitted key renders as an empty result text. It does not fall back to the default.

## Product pages
On product pages, the limits and the score are the same. Only the feedback strings are different: the assessed images are the product's own, so the strings say "product images" instead of "images". WooCommerce SEO and Shopify both supply their own feedback strings, so a user sees the platform's strings, not the defaults.

In Shopify, the links are different: [https://yoa.st/shopify-alt-text-length](https://yoa.st/shopify-alt-text-length) and [https://yoa.st/shopify-alt-text-length-cta](https://yoa.st/shopify-alt-text-length-cta).
