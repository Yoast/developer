---
id: keyphrase-in-slug
title: "Assessments: Keyphrase in slug"
sidebar_label: Keyphrase in slug
description: How the Keyphrase in slug assessment of the Yoast SEO analysis works and how it is scored.
---
The **Keyphrase in slug** assessment checks whether the keyphrase is used in the slug.

| **Keyphrase in slug** | |
|---|---|
| **Name in code** | [`SlugKeywordAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/UrlKeywordAssessment.js) |
| **Title URL** | [https://yoa.st/33o](https://yoa.st/33o) |
| **Call to action URL** | [https://yoa.st/33p](https://yoa.st/33p) |
| **When it applies** | Always. |
| **Product** | Yoast SEO (Free) |
| **Content types** | **WordPress**: posts and pages, taxonomies, products (WooCommerce SEO)<br/>**Shopify**: products, collections, blog posts and pages, blogs<br/>**Google Docs**: not available |
| **Related keyphrases** | ❌ |
| **Uses synonyms** | ❌ |
| **Languages** | All languages |
| **Cornerstone** | ✅ Red instead of orange when not all content words are in the slug |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ✅ |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 3 | There is no keyphrase and/or slug | **Keyphrase in slug**: **Please add both a keyphrase and a slug containing the keyphrase**. |
| Orange (cornerstone: Red) | 6 (cornerstone: 3) | Not all content words are in the slug | **Keyphrase in slug**: (Part of) your keyphrase does not appear in the slug. **Change that!** |
| Green | 9 | Short keyphrases (1-2 content words): all content words are in the slug | **Keyphrase in slug**: Great work! |
| Green | 9 | Longer keyphrases (> 2 content words): more than half of the content words are in the slug | **Keyphrase in slug**: More than half of your keyphrase appears in the slug. That's great! |
