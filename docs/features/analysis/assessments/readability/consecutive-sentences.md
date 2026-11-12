---
id: consecutive-sentences
title: "Assessments: Consecutive sentences"
sidebar_label: Consecutive sentences
description: How the Consecutive sentences assessment of the Yoast SEO readability analysis works and how it is scored.
---
The **Consecutive sentences** assessment checks whether 3 or more sentences in a row start with the same word.

| **Consecutive sentences** | |
|---|---|
| **Name in code** | [`SentenceBeginningsAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/readability/SentenceBeginningsAssessment.js) |
| **Title URL** | [https://yoa.st/35f](https://yoa.st/35f) |
| **Call to action URL** | [https://yoa.st/35g](https://yoa.st/35g) |
| **When it applies** | When the assessment is supported for the language of the text. |
| **Product** | Yoast SEO (Free) |
| **Content types** | **WordPress**: posts and pages, taxonomies<br/>**Shopify**: collections, blog posts and pages<br/>**Google Docs**: documents |
| **Languages** | Only [supported languages](https://github.com/Yoast/wordpress-seo/tree/trunk/packages/yoastseo/README.md#readability-analysis) |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ✅ Highlights the consecutive sentences |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 3 | 3 or more consecutive sentences start with the same word | **Consecutive sentences**: The text contains X consecutive sentences starting with the same word. **Try to mix things up!** |
| Green | 9 | Fewer than 3 consecutive sentences start with the same word | **Consecutive sentences**: There are no repetitive sentence beginnings. That's great! |
