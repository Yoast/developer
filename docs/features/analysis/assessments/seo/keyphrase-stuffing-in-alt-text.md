---
id: keyphrase-stuffing-in-alt-text
title: "Assessments: Keyphrase stuffing in alt text"
sidebar_label: Keyphrase stuffing in alt text
description: How the Keyphrase stuffing in alt text assessment of the Yoast SEO analysis works and how it is scored.
---
The **Keyphrase stuffing in alt text** assessment checks whether the alt text of the assessed images uses the topic phrase (the keyphrase or its synonyms) too often.

By default, it assesses the images in the text. A platform can limit all image assessments to the item's own images by providing the `providedImages` attribute of the `Paper`.

| **Keyphrase stuffing in alt text** | |
|---|---|
| **Name in code** | [`KeyphraseStuffingInAltTextAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/KeyphraseStuffingInAltTextAssessment.js) |
| **Title URL** | [https://yoa.st/alt-text-keyphrase-stuffing](https://yoa.st/alt-text-keyphrase-stuffing) |
| **Call to action URL** | [https://yoa.st/alt-text-keyphrase-stuffing-cta](https://yoa.st/alt-text-keyphrase-stuffing-cta) |
| **When it applies** | Only when a keyphrase is set and at least one assessed image overuses it. |
| **Product** | Yoast SEO (Free) |
| **Content types** | Posts and pages, product pages |
| **Related keyphrases** | ✅ |
| **Uses synonyms** | ✅ The keyphrase and synonym matches in one alt text are added up: the keyphrase once plus a synonym once counts as 2. Words that one topic phrase matched are not matched again by the next one. |
| **Languages** | All languages |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ✅ |

**What counts as a keyphrase match**: all (content) words of the keyphrase or of a synonym, within one sentence of the alt text. With exact matching (keyphrase in double quotes), the exact phrase.

**Why there is no green traffic light**: using the keyphrase once does not prove that the alt text is good. It can still read unnaturally, which we cannot judge without the context. A missing keyphrase is not good either. So when nothing is flagged, the assessment returns a result without a score and without a text. `Assessor.isValidResult` drops this result, and the assessment is not shown at all. Red criteria are checked first.

## Scoring
X is the number of images, not the number of keyphrase occurrences.

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 3 | Images with more than 2 occurrences and images with exactly 2 occurrences on the same page | **Keyphrase stuffing in alt text**: X of your images have alt text that uses the keyphrase or its synonym twice or more. **Do not overuse the keyphrase!** |
| Red | 3 | X images with more than 2 occurrences | **Keyphrase stuffing in alt text**: X of your images have alt text that uses the keyphrase or its synonym more than twice. **Do not overuse the keyphrase!** |
| Red | 3 | X images with more than 1 occurrence, and exact matching is requested | **Keyphrase stuffing in alt text**: X of your images have alt text that uses the keyphrase or its synonym multiple times. **Do not overuse the keyphrase!** |
| Orange | 6 | X images with exactly 2 occurrences | **Keyphrase stuffing in alt text**: X of your images have alt text that uses the keyphrase or its synonym twice. **Do not overuse the keyphrase!** |

## Custom feedback strings
A platform can supply its own feedback strings through `callbacks.getResultTexts`. This callback receives `urlTitleAnchorOpeningTag`, `urlActionAnchorOpeningTag`, `overusedCount`, `twiceCount` and `exactMatchRequested`, and must return all four of `moreThanTwice`, `multipleTimes`, `twice` and `twiceOrMore`. The returned object is used as is, so an omitted key renders as an empty result text. It does not fall back to the default.

## Product pages
The scoring is the same on product pages. WooCommerce SEO and Shopify can supply their own feedback strings and links through the assessor options.
