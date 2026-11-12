---
id: passive-voice
title: "Assessments: Passive voice"
sidebar_label: Passive voice
description: How the Passive voice assessment of the Yoast SEO readability analysis works and how it is scored.
---
The **Passive voice** assessment checks whether the share of sentences with passive voice is higher than the recommended maximum.

| **Passive voice** | |
|---|---|
| **Name in code** | [`PassiveVoiceAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/readability/PassiveVoiceAssessment.js) |
| **Title URL** | [https://yoa.st/34t](https://yoa.st/34t) |
| **Call to action URL** | [https://yoa.st/34u](https://yoa.st/34u) |
| **When it applies** | When the assessment is supported for the language of the text. |
| **Product** | Yoast SEO (Free) |
| **Content types** | **WordPress**: posts and pages, taxonomies, products (WooCommerce SEO)<br/>**Shopify**: products, collections, blog posts and pages<br/>**Google Docs**: documents |
| **Languages** | Only [supported languages](https://github.com/Yoast/wordpress-seo/tree/trunk/packages/yoastseo/README.md#readability-analysis) |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ✅ Highlights the sentences with passive voice |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 3 | > 15% of sentences | **Passive voice**: X of the sentences contain passive voice, which is more than the recommended maximum of X. **Try to use their active counterparts**. |
| Orange | 6 | Between 10% and 15% of sentences | **Passive voice**: X of the sentences contain passive voice, which is more than the recommended maximum of X. **Try to use their active counterparts**. |
| Green | 9 | ≤ 10% of sentences | **Passive voice**: You are not using too much passive voice. That's great! |
