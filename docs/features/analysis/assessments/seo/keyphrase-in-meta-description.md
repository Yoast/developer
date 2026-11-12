---
id: keyphrase-in-meta-description
title: "Assessments: Keyphrase in meta description"
sidebar_label: Keyphrase in meta description
description: How the Keyphrase in meta description assessment of the Yoast SEO analysis works and how it is scored.
---
The **Keyphrase in meta description** assessment checks whether all (content) words from the keyphrase are used in the meta description. A match is counted if all words from the keyphrase appear in one sentence. Multiple matches in one sentence are counted multiple times.

| **Keyphrase in meta description** | |
|---|---|
| **Name in code** | [`MetaDescriptionKeywordAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/MetaDescriptionKeywordAssessment.js) |
| **Title URL** | [https://yoa.st/33k](https://yoa.st/33k) |
| **Call to action URL** | [https://yoa.st/33l](https://yoa.st/33l) |
| **When it applies** | Always. |
| **Product** | Yoast SEO (Free) |
| **Content types** | **WordPress**: posts and pages, taxonomies, products (WooCommerce SEO)<br/>**Shopify**: products, collections, blog posts and pages, blogs<br/>**Google Docs**: not available |
| **Related keyphrases** | ✅ |
| **Uses synonyms** | ✅ |
| **Languages** | All languages |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ✅ |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 3 | There is no keyphrase and/or meta description | **Keyphrase in meta description**: **Please add both a keyphrase and a meta description containing the keyphrase.** |
| Red | 3 | 0 keyphrase matches | **Keyphrase in meta description**: The meta description has been specified, but it does not contain the keyphrase. **Fix that!** |
| Red | 3 | > 2 matches found | **Keyphrase in meta description**: The meta description contains the keyphrase X times, which is over the advised maximum of 2 times. **Limit that!** |
| Green | 9 | 1-2 sentences with a match | **Keyphrase in meta description**: Keyphrase or synonym appear in the meta description. Well done! |
