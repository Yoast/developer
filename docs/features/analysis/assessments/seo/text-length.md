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
| **Content types** | **WordPress**: posts and pages, taxonomies, products (WooCommerce SEO)<br/>**Shopify**: products, collections, blog posts and pages<br/>**Google Docs**: documents |
| **Related keyphrases** | ❌ |
| **Uses synonyms** | ❌ |
| **Languages** | Japanese counts characters instead of words, with different boundaries (see the scoring tables). |
| **Cornerstone** | ✅ Higher boundaries and lower scores (see the scoring tables). Not on taxonomies and collection pages. |
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

## Product pages

### Default

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | -20 | 0-49 words (Japanese: 0-99 characters) | **Text length**: The text contains X words. This is far below the recommended minimum of 200 words (Japanese: 400 characters). **Add more content.** |
| Red | -10 | 50-99 words (Japanese: 100-199 characters) | **Text length**: The text contains X words. This is far below the recommended minimum of 200 words (Japanese: 400 characters). **Add more content.** |
| Red | 3 | 100-149 words (Japanese: 200-299 characters) | **Text length**: The text contains X words. This is below the recommended minimum of 200 words (Japanese: 400 characters). **Add more content.** |
| Orange | 6 | 150-199 words (Japanese: 300-399 characters) | **Text length**: The text contains X words. This is slightly below the recommended minimum of 200 words (Japanese: 400 characters). **Add more content.** |
| Green | 9 | 200 words or more (Japanese: 400 characters or more) | **Text length**: The text contains X words. Good job! |

### Cornerstone content

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | -20 | 0-199 words (Japanese: 0-399 characters) | **Text length**: The text contains X words. This is far below the recommended minimum of 400 words (Japanese: 800 characters). **Add more content.** |
| Red | -20 | 200-299 words (Japanese: 400-599 characters) | **Text length**: The text contains X words. This is below the recommended minimum of 400 words (Japanese: 800 characters). **Add more content.** |
| Orange | 6 | 300-399 words (Japanese: 600-799 characters) | **Text length**: The text contains X words. This is below the recommended minimum of 400 words (Japanese: 800 characters). **Add more content.** |
| Green | 9 | 400 words or more (Japanese: 800 characters or more) | **Text length**: The text contains X words. Good job! |

## Taxonomies and collection pages
On taxonomies (WordPress) and collection pages (Shopify), the boundaries are lower, and the links in the feedback are different:
* Title URL: [https://yoa.st/34j](https://yoa.st/34j)
* Call to action URL: [https://yoa.st/34k](https://yoa.st/34k)

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | -20 | 0 words | **Text length**: **Please add some content.** |
| Red | 3 | 1-9 words (Japanese: 1-19 characters) | **Text length**: The text contains X words. This is below the recommended minimum of 30 words (Japanese: 60 characters). **Add more content.** |
| Orange | 6 | 10-29 words (Japanese: 20-59 characters) | **Text length**: The text contains X words. This is slightly below the recommended minimum of 30 words (Japanese: 60 characters). **Add more content.** |
| Green | 9 | 30 words or more (Japanese: 60 characters or more) | **Text length**: The text contains X words. Good job! |
