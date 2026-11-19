---
id: keyphrase-density
title: "Assessments: Keyphrase density"
sidebar_label: Keyphrase density
description: How the Keyphrase density assessment of the Yoast SEO analysis works and how it is scored.
---
The **Keyphrase density** assessment checks whether the (content) words from the keyphrase are used in the text, and whether they are used often enough (but not too often). For a match, all content words should occur in one sentence. Multiple occurrences of all content words within one sentence count as multiple matches.

| **Keyphrase density** | |
|---|---|
| **Name in code** | [`KeyphraseDensityAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/KeywordDensityAssessment.js) |
| **Title URL** | [https://yoa.st/33v](https://yoa.st/33v) |
| **Call to action URL** | [https://yoa.st/33w](https://yoa.st/33w) |
| **When it applies** | Always. |
| **Product** | Yoast SEO (Free) |
| **Content types** | **WordPress**: posts and pages, taxonomies, products (WooCommerce SEO)<br/>**Shopify**: products, collections, blog posts and pages<br/>**Google Docs**: documents |
| **Related keyphrases** | ✅ |
| **Uses synonyms** | ❌ |
| **Languages** | All languages |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ✅ When the keyphrase is found |
| **Uses morphology (Premium)** | ✅ The boundaries are higher when multiple word forms are matched. |

## Scoring
`kd` is the keyphrase density, adjusted for the length of the keyphrase:

kd = ( number of keyphrase matches / number of words in the text ) * 100 * ( 0.7 + keyphrase length / 3 )

The keyphrase length is the number of (content) words in the keyphrase. Because of this factor, a longer keyphrase needs fewer matches for the same `kd`. For example, a match of a 3-word keyphrase counts 1.7 times, and a match of a 1-word keyphrase counts about 1.03 times.

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | -50 | No keyphrase and/or content | **Keyphrase density**: **Please add both a keyphrase and some text containing the keyphrase**. |
| Red | 4 | Keyphrase not found in content | **Keyphrase density**: The keyphrase was found 0 times. That's less than the recommended minimum of X times for a text of this length. **Focus on your keyphrase**! |
| **Texts 100+ words** | | | |
| Red | -50 | kd > 4 | **Keyphrase density**: The keyphrase was found X times. That's way more than the recommended maximum of X times for a text of this length. **Don't overoptimize**! |
| Red | -10 | 3 < kd ≤ 4 (3.5 < kd ≤ 4 for multiple word forms) | **Keyphrase density**: The keyphrase was found X times. That's more than the recommended maximum of X times for a text of this length. **Don't overoptimize**! |
| Red | 4 | 0 < kd < 0.5, or the keyphrase is found only once | **Keyphrase density**: The keyphrase was found X times. That's less than the recommended minimum of X times for a text of this length. **Focus on your keyphrase**! |
| Green | 9 | 0.5 ≤ kd ≤ 3 (0.5 ≤ kd ≤ 3.5 for multiple word forms), or the keyphrase is found twice and the recommended minimum (see below) is 2 | **Keyphrase density**: The keyphrase was found X times. This is great! |
| **Texts 51-99 words** | | | |
| Red | -50 | Keyphrase found 4+ times | **Keyphrase density**: The keyphrase was found X times. That's way more than the recommended maximum of X times for a text of this length. **Don't overoptimize**! |
| Red | -10 | Keyphrase found 3 times | **Keyphrase density**: The keyphrase was found X times. That's more than the recommended maximum of X times for a text of this length. **Don't overoptimize**! |
| Green | 9 | Keyphrase found 1-2 times | **Keyphrase density**: The keyphrase was found X times. This is great! |
| **Texts < 51 words** | | | |
| Red | -50 | Keyphrase found 3+ times | **Keyphrase density**: The keyphrase was found X times. That's way more than the recommended maximum of X times for a text of this length. **Don't overoptimize**! |
| Red | -10 | Keyphrase found 2 times | **Keyphrase density**: The keyphrase was found X times. That's more than the recommended maximum of X times for a text of this length. **Don't overoptimize**! |
| Green | 9 | Keyphrase found once | **Keyphrase density**: The keyphrase was found 1 time. This is great! |

## Recommended minimum and maximum number of matches
For texts of 100 words or more, the feedback shows a recommended minimum and maximum number of matches. They come from the `kd` boundaries above:

* Recommended minimum = round up ( 0.5 * number of words / ( 100 * ( 0.7 + keyphrase length / 3 ) ) ), but at least 2.
* Recommended maximum = round down ( 3 * number of words / ( 100 * ( 0.7 + keyphrase length / 3 ) ) ), but at least 2. With multiple word forms, 3.5 is used instead of 3.

So the recommended minimum goes up in steps as the text gets longer. The step size depends on the keyphrase length, not on the text length:

| Keyphrase length | One more match needed every |
|---|---|
| 1 word | about 207 words |
| 2 words | about 273 words |
| 3 words | 340 words |

For example, a 1-word keyphrase needs at least 2 matches in a text of up to 413 words, and 3 matches in a text of 414 to 619 words.

See [`recommendedKeywordCount.js`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/helpers/assessments/recommendedKeywordCount.js) and [`keyphraseLengthFactor.js`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/helpers/assessments/keyphraseLengthFactor.js).
