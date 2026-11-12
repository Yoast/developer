---
id: non-descriptive-alt-text
title: "Assessments: Non-descriptive alt text"
sidebar_label: Non-descriptive alt text
description: How the Non-descriptive alt text assessment of the Yoast SEO analysis works and how it is scored.
---
The **Non-descriptive alt text** assessment checks whether the assessed images have alt text that consists only of a meaningless phrase:
* a placeholder ("Untitled", "N/A", "Alt text"),
* a file name ("IMG_1234", "red-shoes.jpg", or the image's own file name),
* or a generic default that says nothing about the image ("Product image", "Image 1").

The whole alt text is matched: "Product image" is flagged, "Product image of a red bike on a beach" is not.

| **Non-descriptive alt text** | |
|---|---|
| **Name in code** | [`NonDescriptiveAltTextAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/NonDescriptiveAltTextAssessment.js) |
| **Title URL** | [https://yoa.st/non-descriptive-alt-text](https://yoa.st/non-descriptive-alt-text) |
| **Call to action URL** | [https://yoa.st/non-descriptive-alt-text-cta](https://yoa.st/non-descriptive-alt-text-cta) |
| **When it applies** | Only when at least one assessed image has non-descriptive alt text. Empty alt text is not flagged: that case is covered by the _Image alt attributes_ assessment on product pages. |
| **Product** | Yoast SEO (Free) |
| **Content types** | Posts and pages, product pages |
| **Related keyphrases** | ❌ |
| **Uses synonyms** | ❌ |
| **Languages** | Some checks work in all languages. Language-specific phrases are only available for English for now (see below). |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ❌ |

## Language support
* **Checks in all languages**: only numbers or punctuation, a name ending in an image file extension, file names that cameras, phones or WhatsApp generate, English screenshot names ("Screenshot 2026-03-14 at 10.32.45"), and the image's own file name. The file name check also works when the image is a resized, scaled or edited copy ("red-bike" for `red-bike-1024x576.jpg`).
* **English phrases**: also checked in every other language that has its own researcher, without the words that are ordinary words in other languages ("file", "pic", "alt", "null", "todo", "na").
* Languages without their own researcher only get the checks that work in all languages.
* Each language can add its own phrases. Only English has them for now.

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 3 | At least 1 image has non-descriptive alt text | **Non-descriptive alt text**: X of your images have alt text that doesn't describe the image. **Describe what the image shows, or leave the alt text empty if the image is decorative.** |

## Custom feedback strings
A platform can supply its own feedback strings through `callbacks.getResultTexts`. This callback receives `urlTitleAnchorOpeningTag`, `urlActionAnchorOpeningTag` and `nonDescriptiveCount`, and must return `nonDescriptive`. The returned object is used as is.

## Product pages
On product pages, the checks and the score are the same. Only the feedback strings are different: the assessed images are the product's own, so the strings say "product images" instead of "images". WooCommerce SEO and Shopify both supply their own feedback strings, so a user sees the platform's strings, not the defaults.
