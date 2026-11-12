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
`kd` is the keyphrase density: ( number of keyphrase matches / number of words in the text ) * 100.

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | -50 | No keyphrase and/or content | **Keyphrase density**: **Please add both a keyphrase and some text containing the keyphrase.** |
| Red | 4 | Keyphrase not found in content | **Keyphrase density**: The keyphrase was found 0 times. That's less than the recommended minimum of X times for a text of this length. **Focus on your keyphrase!** |
| **Texts 100+ words** | | | |
| Red | -50 | kd > 4 | **Keyphrase density**: The keyphrase was found X times. That's way more than the recommended maximum of X times for a text of this length. **Don't overoptimize!** |
| Red | -10 | 3 < kd ≤ 4 (3.5 < kd ≤ 4 for multiple word forms) | **Keyphrase density**: The keyphrase was found X times. That's more than the recommended maximum of X times for a text of this length. **Don't overoptimize!** |
| Red | 4 | 0 < kd < 0.5 | **Keyphrase density**: The keyphrase was found X times. That's less than the recommended minimum of X times for a text of this length. **Focus on your keyphrase!** |
| Green | 9 | 0.5 ≤ kd ≤ 3 (0.5 ≤ kd ≤ 3.5 for multiple word forms) | **Keyphrase density**: The keyphrase was found X times. This is great! |
| **Texts 51-99 words** | | | |
| Red | -50 | Keyphrase found 4+ times | **Keyphrase density**: The keyphrase was found X times. That's way more than the recommended maximum of X times for a text of this length. **Don't overoptimize!** |
| Red | -10 | Keyphrase found 3 times | **Keyphrase density**: The keyphrase was found X times. That's more than the recommended maximum of X times for a text of this length. **Don't overoptimize!** |
| Green | 9 | Keyphrase found 1-2 times | **Keyphrase density**: The keyphrase was found X times. This is great! |
| **Texts < 51 words** | | | |
| Red | -50 | Keyphrase found 3+ times | **Keyphrase density**: The keyphrase was found X times. That's way more than the recommended maximum of X times for a text of this length. **Don't overoptimize!** |
| Red | -10 | Keyphrase found 2 times | **Keyphrase density**: The keyphrase was found X times. That's more than the recommended maximum of X times for a text of this length. **Don't overoptimize!** |
| Green | 9 | Keyphrase found once | **Keyphrase density**: The keyphrase was found 1 time. This is great! |

## More on the minimum keyphrase usage
A simple model shows that as the text length (in words) goes up, the assessment requires a larger number of keyphrase uses. This happens in steps. The step size depends on the keyphrase length (shorter steps for shorter keyphrases), not on the text length. The step size for the shortest keyphrase (1 word) is 214 words.
