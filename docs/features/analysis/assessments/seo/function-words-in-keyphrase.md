---
id: function-words-in-keyphrase
title: "Assessments: Function words in keyphrase"
sidebar_label: Function words in keyphrase
description: How the Function words in keyphrase assessment of the Yoast SEO analysis works and how it is scored.
---
The **Function words in keyphrase** assessment checks whether the keyphrase consists of function words only (for example, "the", "and", "of").

| **Function words in keyphrase** | |
|---|---|
| **Name in code** | [`FunctionWordsInKeyphraseAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/FunctionWordsInKeyphraseAssessment.js) |
| **Title URL** | [https://yoa.st/functionwordskeyphrase-1](https://yoa.st/functionwordskeyphrase-1) |
| **Call to action URL** | [https://yoa.st/functionwordskeyphrase-2](https://yoa.st/functionwordskeyphrase-2) |
| **When it applies** | Only when the keyphrase consists of function words only. |
| **Product** | Yoast SEO (Free) |
| **Content types** | **WordPress**: posts and pages, taxonomies, products (WooCommerce SEO)<br/>**Shopify**: products, collections, blog posts and pages, blogs<br/>**Google Docs**: documents |
| **Related keyphrases** | ✅ |
| **Uses synonyms** | ❌ |
| **Languages** | Only languages with function word support |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ❌ |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Gray | 0 | The keyphrase consists of function words only | **Function words in keyphrase**: Your keyphrase "X" contains function words only. **Learn more about what makes a good keyphrase.** |
