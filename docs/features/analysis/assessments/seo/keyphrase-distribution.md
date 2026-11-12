---
id: keyphrase-distribution
title: "Assessments: Keyphrase distribution"
sidebar_label: Keyphrase distribution
description: How the Keyphrase distribution assessment of the Yoast SEO Premium analysis works and how it is scored.
---
The **Keyphrase distribution** assessment checks how evenly the words from the keyphrase (and its synonyms) are spread over the text.

| **Keyphrase distribution** | |
|---|---|
| **Name in code** | [`KeyphraseDistributionAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/KeyphraseDistributionAssessment.js) |
| **Title URL** | [https://yoa.st/33q](https://yoa.st/33q) |
| **Call to action URL** | [https://yoa.st/33u](https://yoa.st/33u) |
| **When it applies** | Always, when Yoast SEO Premium is active. |
| **Product** | Yoast SEO Premium |
| **Content types** | Added by Yoast SEO Premium to the focus keyphrase analysis |
| **Related keyphrases** | ❌ |
| **Uses synonyms** | ✅ |
| **Languages** | All languages |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ✅ Highlights the sentences that contain the keyphrase or its synonyms |
| **Uses morphology (Premium)** | ✅ |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 1 | No keyphrase set and/or keyphrase not found in the text | **Keyphrase distribution**: **Please add both a keyphrase and some text containing the keyphrase or its synonyms.** |
| Red | 1 | Texts of 15 sentences or longer: the distraction percentage<sup>1</sup> is > 50% | **Keyphrase distribution**: Very uneven. Large parts of your text do not contain the keyphrase or its synonyms. **Distribute them more evenly.** |
| Orange | 6 | Texts of 15 sentences or longer: the distraction percentage is > 30% and ≤ 50% | **Keyphrase distribution**: Uneven. Some parts of your text do not contain your keyphrase or its synonyms. **Distribute them more evenly.** |
| Green | 9 | Texts of 15 sentences or longer: the distraction percentage is ≤ 30% | **Keyphrase distribution**: Good job! |
| Green | 9 | Texts shorter than 15 sentences: the keyphrase is found in the text at least once | **Keyphrase distribution**: Good job! |

<sup>1</sup> The distraction percentage is calculated with this formula:

( maximum number of consecutive sentences that don't contain the keyphrase ) / ( total number of sentences ) * 100

Example: 6 / 15 * 100 = 40%

For the full implementation details, see [YoastSEO.js#1558](https://github.com/Yoast/YoastSEO.js/issues/1558) and [YoastSEO.js#1868](https://github.com/Yoast/YoastSEO.js/issues/1868).
