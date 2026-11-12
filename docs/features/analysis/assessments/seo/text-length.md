---
id: text-length
title: "Assessments: Text length"
sidebar_label: Text length
description: How the Text length assessment of the Yoast SEO analysis works and how it is scored.
---
The **Text length** assessment checks whether the text is long enough.

| **Text length** | |
|---|---|
| **Name in code** | [`TextLengthAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/TextLengthAssessment.js) |
| **Title URL** | [https://yoa.st/34n](https://yoa.st/34n) |
| **Call to action URL** | [https://yoa.st/34o](https://yoa.st/34o) |
| **When it applies** | Always. |
| **Product** | Yoast SEO (Free) |
| **Content types** | Posts and pages, taxonomies, product pages |
| **Related keyphrases** | ❌ |
| **Uses synonyms** | ❌ |
| **Languages** | Japanese counts characters instead of words, with different boundaries (see the scoring tables). |
| **Cornerstone** | ✅ Higher boundaries and lower scores (see the scoring tables) |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ❌ |

## Scoring
X stands for the number of words (Japanese: characters) in the text, or for the recommended minimum.

### Default

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | -20 | 0-99 words (Japanese: 0-199 characters) | **Text length**: The text contains X words. This is far below the recommended minimum of 300 words (Japanese: 600 characters). **Add more content.** |
| Red | -10 | 100-199 words (Japanese: 200-399 characters) | **Text length**: The text contains X words. This is far below the recommended minimum of 300 words (Japanese: 600 characters). **Add more content.** |
| Red | 3 | 200-249 words (Japanese: 400-499 characters) | **Text length**: The text contains X words. This is below the recommended minimum of 300 words (Japanese: 600 characters). **Add more content.** |
| Orange | 6 | 250-299 words (Japanese: 500-599 characters) | **Text length**: The text contains X words. This is slightly below the recommended minimum of 300 words (Japanese: 600 characters). **Add more content.** |
| Green | 9 | 300 words or more (Japanese: 600 characters or more) | **Text length**: The text contains X words. Good job! |

### Cornerstone content

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | -20 | 0-299 words (Japanese: 0-599 characters) | **Text length**: The text contains X words. This is far below the recommended minimum of 900 words (Japanese: 1800 characters). **Add more content.** |
| Red | -20 | 300-399 words (Japanese: 600-799 characters) | **Text length**: The text contains X words. This is below the recommended minimum of 900 words (Japanese: 1800 characters). **Add more content.** |
| Orange | 6 | 400-899 words (Japanese: 800-1799 characters) | **Text length**: The text contains X words. This is below the recommended minimum of 900 words (Japanese: 1800 characters). **Add more content.** |
| Green | 9 | 900 words or more (Japanese: 1800 characters or more) | **Text length**: The text contains X words. Good job! |
