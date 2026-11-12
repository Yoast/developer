---
id: overview
title: "Assessments: Overview"
sidebar_label: Overview
description: This documentation provides a list of all assessments in the Yoast SEO content analysis, and explains how they are scored.
---
The Yoast SEO content analysis is made up of separate checks, called **assessments**. Each assessment checks one aspect of a text, gives it a score, and shows feedback with a traffic light. This page explains how the scores work and lists all assessments. Each assessment has its own page with the details.

Most assessments are part of the [`yoastseo`](https://github.com/Yoast/wordpress-seo/tree/trunk/packages/yoastseo) JavaScript package. Some assessments are only available in [Yoast SEO Premium](https://yoast.com/product/yoast-seo-premium-wordpress/), in [Yoast SEO for Shopify](https://yoast.com/product/yoast-seo-shopify/), or in the add-ons [Yoast Local SEO](https://yoast.com/product/local-seo-wordpress/), [Yoast Video SEO](https://yoast.com/product/video-seo-wordpress/) and [Yoast WooCommerce SEO](https://yoast.com/product/yoast-woocommerce-seo/).

The inclusive language assessments are not documented here yet.

## How to read an assessment page
Each assessment page starts with a card with the main information:

| Field | Meaning |
|---|---|
| **Name in code** | The class name of the assessment, linked to its source code when the code is public. |
| **Title URL** | The link on the assessment name in the feedback. The linked part is shown in bold in the feedback strings. |
| **Call to action URL** | The link on the call to action in the feedback. The linked part is shown in bold in the feedback strings. |
| **When it applies** | When the assessment runs and shows a result. |
| **Product** | The product the assessment is part of: Yoast SEO (Free), Yoast SEO Premium, Yoast SEO for Shopify, or an add-on. |
| **Content types** | The content types the assessment runs on. See [Assessments per content type](#assessments-per-content-type). |
| **Related keyphrases** (SEO only) | Whether the assessment also runs for related keyphrases (a Yoast SEO Premium feature). |
| **Uses synonyms** (SEO only) | Whether keyphrase synonyms (a Yoast SEO Premium feature) are also used. |
| **Languages** | Whether the assessment works the same in all languages, or has language-specific behavior. |
| **Cornerstone** | Whether the scoring is different for [cornerstone content](https://yoast.com/cornerstone-content-guide/). |
| **Uses highlighting** | Whether the assessment can highlight the relevant parts of the text in the editor (the eye icon). |
| **Uses morphology (Premium)** (SEO only) | Whether the assessment also matches other word forms of the keyphrase (for example, plural forms) in Yoast SEO Premium. |

Below the card, a table shows the scoring criteria. In the feedback strings, `X` stands for a number that is filled in by the analysis.

## SEO analysis: how are individual traffic lights assigned?
Each SEO assessment gives an individual score. The score defines the traffic light:

| Individual score | Rating |
|---|---|
| < 0 | Very bad (red traffic light) |
| 0 (if it is not explicitly set as a score) | Feedback (gray traffic light) |
| ≤ 4 | Bad (red traffic light) |
| 5-7 | OK (orange traffic light) |
| 8-9 | Good (green traffic light) |

## SEO analysis: how is the overall score calculated?

* Overall score<sup>1</sup> = ( sum of individual scores from each assessment ) / ( number of individual scores * 9 ) * 100
* Round this number.
* Example with three individual scores of 3, 6, and 9:

( 3 + 6 + 9 ) / ( 3 * 9 ) * 100 = **66.67** → rounded to **67**

<sup>1</sup> The logic behind the formula is as follows:
* The overall score is the mean of the individual scores, adjusted to fit a 0-100 scale.
* Multiplying the result by 100 is necessary to fit a 0-100 scale instead of a 0-1 scale.
* Dividing the sum of individual scores by the number of scores * 9 (rather than simply by the number of scores) is necessary because the maximum score an individual assessment can have is 9.

Assessments that return a result without a score (for example, image assessments when no image is flagged) are not shown and are not counted.

## Readability analysis: how are individual traffic lights assigned?
Each readability assessment gives an individual score. The score defines the traffic light and a penalty:

| Individual score | Rating | Penalty (fully supported languages) | Penalty (other languages) |
|---|---|---|---|
| 0 (if it is not explicitly set as a score) | Feedback (gray traffic light) | - | - |
| 0-4 | Bad (red traffic light) | 3 | 4 |
| 5-7 | OK (orange traffic light) | 2 | 2 |
| 8-10 | Good (green traffic light) | 0 | 0 |

Fully supported languages are English, Dutch, German, Italian, Russian, French and Spanish. In these languages, all language-specific readability assessments are available. See the [readability support per language](https://github.com/Yoast/wordpress-seo/tree/trunk/packages/yoastseo/README.md#readability-analysis).

## Readability analysis: how is the overall score calculated?
The penalties of all assessments are added up. The sum defines the overall score:

| Sum of penalties (fully supported languages) | Sum of penalties (other languages) | Overall score | Traffic light |
|---|---|---|---|
| 7 or more | 5 or more | 30 | Red |
| 5-6 | 3-4 | 60 | Orange |
| 4 or less | 2 or less | 90 | Green |

## SEO assessments

### Keyphrase-based assessments
* [Keyphrase in introduction](seo/keyphrase-in-introduction.md)
* [Keyphrase length](seo/keyphrase-length.md)
* [Keyphrase density](seo/keyphrase-density.md)
* [Keyphrase in meta description](seo/keyphrase-in-meta-description.md)
* [Keyphrase in subheadings](seo/keyphrase-in-subheadings.md)
* [Competing links](seo/competing-links.md)
* [Keyphrase in SEO title](seo/keyphrase-in-seo-title.md)
* [Keyphrase in slug](seo/keyphrase-in-slug.md)
* [Previously used keyphrase](seo/previously-used-keyphrase.md)
* [Keyphrase distribution](seo/keyphrase-distribution.md) (Premium)
* [Keyphrase stuffing in alt text](seo/keyphrase-stuffing-in-alt-text.md)

### Other SEO assessments
* [Text length](seo/text-length.md)
* [Outbound links](seo/outbound-links.md)
* [Internal links](seo/internal-links.md)
* [SEO title width](seo/seo-title-width.md)
* [Meta description length](seo/meta-description-length.md)
* [Single title](seo/single-title.md)
* [Function words in keyphrase](seo/function-words-in-keyphrase.md)
* [Images](seo/images.md)
* [Alt text length](seo/alt-text-length.md)
* [Duplicate alt text](seo/duplicate-alt-text.md)
* [Redundant phrase in alt text](seo/redundant-phrase-in-alt-text.md)
* [Non-descriptive alt text](seo/non-descriptive-alt-text.md)
* [Title](seo/title.md) (Premium)

### Product page assessments
* [Image alt attributes](seo/image-alt-attributes.md)
* [Product identifier](seo/product-identifier.md)
* [SKU](seo/sku.md)

## Readability assessments
* [Subheading distribution](readability/subheading-distribution.md)
* [Paragraph length](readability/paragraph-length.md)
* [Sentence length](readability/sentence-length.md)
* [Consecutive sentences](readability/consecutive-sentences.md)
* [Passive voice](readability/passive-voice.md)
* [Transition words](readability/transition-words.md)
* [Text presence](readability/text-presence.md)
* [Word complexity](readability/word-complexity.md) (Premium, Shopify)
* [Text alignment](readability/text-alignment.md) (Premium)
* [Lists](readability/lists.md) (product pages)

## Add-on assessments

### Yoast Local SEO
* [Local schema](local-seo/local-schema.md)
* [Local title](local-seo/local-title.md)
* [Local slug](local-seo/local-slug.md)

### Yoast Video SEO
* [Video body](video-seo/video-body.md)
* [Video title](video-seo/video-title.md)

### Yoast WooCommerce SEO
* [Product description](woocommerce-seo/product-description.md)

## Assessments per content type
Different content types use a different set of assessments. The table below shows which SEO assessments run for the focus keyphrase on each content type, and which also run for related keyphrases.

| Assessment | Posts and pages | Taxonomies | Product pages | Related keyphrases |
|---|---|---|---|---|
| Keyphrase in introduction | ✅ | ✅ | ✅ | ✅ |
| Keyphrase length | ✅ | ✅ | ✅ | ✅ |
| Keyphrase density | ✅ | ✅ | ✅ | ✅ |
| Keyphrase in meta description | ✅ | ✅ | ✅ | ✅ |
| Keyphrase in subheadings | ✅ | ❌ | ✅ | ❌ |
| Competing links | ✅ | ❌ | ✅ | ✅ |
| Keyphrase in SEO title | ✅ | ✅ | ✅ | ❌ |
| Keyphrase in slug | ✅ | ✅ | ✅ | ❌ |
| Previously used keyphrase<sup>1</sup> | ✅ | ✅ | ✅ | ✅ |
| Keyphrase stuffing in alt text | ✅ | ❌ | ✅ | ✅ |
| Text length | ✅ | ✅ | ✅ | ❌ |
| Outbound links | ✅ | ❌ | ❌ | ❌ |
| Internal links | ✅ | ❌ | ❌ | ❌ |
| SEO title width | ✅ | ✅ | ✅ | ❌ |
| Meta description length | ✅ | ✅ | ✅ | ❌ |
| Single title | ✅ | ✅ | ✅ | ❌ |
| Function words in keyphrase | ✅ | ✅ | ✅ | ✅ |
| Images | ✅ | ❌ | ✅ | ❌ |
| Alt text length | ✅ | ❌ | ✅ | ❌ |
| Duplicate alt text | ✅ | ❌ | ✅ | ❌ |
| Redundant phrase in alt text | ✅ | ❌ | ✅ | ❌ |
| Non-descriptive alt text | ✅ | ❌ | ✅ | ❌ |

<sup>1</sup> Only in the Yoast SEO WordPress plugin. See [Previously used keyphrase](seo/previously-used-keyphrase.md).

The Premium assessments [Keyphrase distribution](seo/keyphrase-distribution.md) and [Title](seo/title.md) are added to the SEO analysis by Yoast SEO Premium. See their pages for when they apply.

The assessor configuration for each content type can be found in the [`assessors` folder](https://github.com/Yoast/wordpress-seo/tree/trunk/packages/yoastseo/src/scoring/assessors) of the `yoastseo` package.
