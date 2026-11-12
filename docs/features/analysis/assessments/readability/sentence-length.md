---
id: sentence-length
title: "Assessments: Sentence length"
sidebar_label: Sentence length
description: How the Sentence length assessment of the Yoast SEO readability analysis works and how it is scored.
---
The **Sentence length** assessment checks how many sentences are longer than the recommended maximum length.

The recommended maximum sentence length is:
* 20 words (default)
* 25 words for Catalan, Spanish, Persian, Italian and Portuguese
* 15 words for Hebrew, Russian and Turkish
* 40 characters for Japanese

| **Sentence length** | |
|---|---|
| **Name in code** | [`SentenceLengthInTextAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/readability/SentenceLengthInTextAssessment.js) |
| **Title URL** | [https://yoa.st/34v](https://yoa.st/34v) |
| **Call to action URL** | [https://yoa.st/34w](https://yoa.st/34w) |
| **When it applies** | Always. |
| **Product** | Yoast SEO (Free) |
| **Content types** | Posts and pages, taxonomies, product pages |
| **Languages** | Different maximum sentence length per language (see above), and different percentages for Polish and Turkish (see the scoring table). |
| **Cornerstone** | ✅ Lower percentages (see the scoring table) |
| **Uses highlighting** | ✅ Highlights the sentences that are too long |

## Scoring
The percentage is the share of sentences that are longer than the recommended maximum.

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 3 | > 30% (cornerstone: > 25%; Turkish: > 25%; Polish: > 20%) | **Sentence length**: X of the sentences contain more than X words/characters, which is more than the recommended maximum of X%. **Try to shorten the sentences**. |
| Orange | 6 | > 25% and ≤ 30% (cornerstone: 20-25%; Turkish: 20-25%; Polish: 15-20%) | **Sentence length**: X of the sentences contain more than X words/characters, which is more than the recommended maximum of X%. **Try to shorten the sentences**. |
| Green | 9 | ≤ 25% (cornerstone: ≤ 20%; Turkish: ≤ 20%; Polish: ≤ 15%) | **Sentence length**: Great! |

For Polish, the percentages are the same for cornerstone content.
