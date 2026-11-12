---
id: keyphrase-in-introduction
title: "Assessments: Keyphrase in introduction"
sidebar_label: Keyphrase in introduction
description: How the Keyphrase in introduction assessment of the Yoast SEO analysis works and how it is scored.
---
The **Keyphrase in introduction** assessment checks whether words from the keyphrase can be found in the first paragraph of the text.

| **Keyphrase in introduction** | |
|---|---|
| **Name in code** | [`IntroductionKeywordAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/IntroductionKeywordAssessment.js) |
| **Title URL** | [https://yoa.st/33e](https://yoa.st/33e) |
| **Call to action URL** | [https://yoa.st/33f](https://yoa.st/33f) |
| **When it applies** | Always. |
| **Product** | Yoast SEO (Free) |
| **Content types** | **WordPress**: posts and pages, taxonomies, products (WooCommerce SEO)<br/>**Shopify**: products, collections, blog posts and pages<br/>**Google Docs**: documents |
| **Related keyphrases** | ✅ |
| **Uses synonyms** | ✅ |
| **Languages** | All languages |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ✅ |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 3 | There is no keyphrase and/or content | **Keyphrase in introduction**: **Please add both a keyphrase and an introduction containing the keyphrase**. |
| Red | 3 | Not all content words are found in the first paragraph | **Keyphrase in introduction**: Your keyphrase or its synonyms do not appear in the first paragraph. **Make sure the topic is clear immediately**. |
| Orange | 6 | All content words are found in the first paragraph, but not in the same sentence | **Keyphrase in introduction**: Your keyphrase or its synonyms appear in the first paragraph of the copy, but not within one sentence. **Fix that**! |
| Green | 9 | All content words from the keyphrase or synonym phrase are within one sentence in the first paragraph | **Keyphrase in introduction**: Well done! |
