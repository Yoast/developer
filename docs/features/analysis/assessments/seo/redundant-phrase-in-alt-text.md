---
id: redundant-phrase-in-alt-text
title: "Assessments: Redundant phrase in alt text"
sidebar_label: Redundant phrase in alt text
description: How the Redundant phrase in alt text assessment of the Yoast SEO analysis works and how it is scored.
---
The **Redundant phrase in alt text** assessment checks whether the assessed images have alt text with a redundant phrase, such as "Image of", "A picture showing" or "This image depicts". The phrase is usually at the start of the alt text. In some languages (Hungarian, Japanese, Turkish), it can also be in the middle or at the end.

| **Redundant phrase in alt text** | |
|---|---|
| **Name in code** | [`RedundantPhraseInAltTextAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/RedundantPhraseInAltTextAssessment.js) |
| **Title URL** | [https://yoa.st/redundant-phrase-in-alt-text](https://yoa.st/redundant-phrase-in-alt-text) |
| **Call to action URL** | [https://yoa.st/redundant-phrase-in-alt-text-cta](https://yoa.st/redundant-phrase-in-alt-text-cta) |
| **When it applies** | Only when at least one assessed image has alt text with a redundant phrase. |
| **Product** | Yoast SEO (Free) |
| **Content types** | Posts and pages, product pages |
| **Related keyphrases** | ❌ |
| **Uses synonyms** | ❌ |
| **Languages** | Languages with a list of redundant phrases (`redundantPhraseInAltText.js` in the [language config](https://github.com/Yoast/wordpress-seo/tree/trunk/packages/yoastseo/src/languageProcessing/languages)) |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ❌ |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Orange | 6 | At least 1 image has alt text with a redundant phrase | **Redundant phrase in alt text**: X of your images have alt text with a phrase like "Image of" or similar. **Remove it as screen readers already announce that it's an image. You may keep phrases that describe the type of image (e.g. "photograph", "illustration", "screenshot") if the type is worth pointing out.** |

## Custom feedback strings
A platform can supply its own feedback strings through `callbacks.getResultTexts`. This callback receives `urlTitleAnchorOpeningTag`, `urlActionAnchorOpeningTag` and `redundantPhraseCount`, and must return `redundantPhrase`. The returned object is used as is.

## Product pages
On product pages, the phrases and the score are the same. Only the feedback strings are different: the assessed images are the product's own, so the strings say "product images" instead of "images". WooCommerce SEO and Shopify both supply their own feedback strings, so a user sees the platform's strings, not the defaults.
