---
id: keyphrase-in-seo-title
title: "Assessments: Keyphrase in SEO title"
sidebar_label: Keyphrase in SEO title
description: How the Keyphrase in SEO title assessment of the Yoast SEO analysis works and how it is scored.
---
The **Keyphrase in SEO title** assessment checks whether the keyphrase is used in the SEO title. When function words come before the keyphrase in the title, they are ignored when determining the position of the keyphrase.

| **Keyphrase in SEO title** | |
|---|---|
| **Name in code** | [`KeyphraseInSEOTitleAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/KeyphraseInSEOTitleAssessment.js) |
| **Title URL** | [https://yoa.st/33g](https://yoa.st/33g) |
| **Call to action URL** | [https://yoa.st/33h](https://yoa.st/33h) |
| **When it applies** | Always. |
| **Product** | Yoast SEO (Free) |
| **Content types** | **WordPress**: posts and pages, taxonomies, products (WooCommerce SEO)<br/>**Shopify**: products, collections, blog posts and pages, blogs<br/>**Google Docs**: not available |
| **Related keyphrases** | ❌ |
| **Uses synonyms** | ❌ |
| **Languages** | All languages. Japanese has no exact match check (see [Japanese](#japanese)). |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ✅ |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 2 | There is no keyphrase and/or SEO title | **Keyphrase in SEO title**: **Please add both a keyphrase and an SEO title beginning with the keyphrase**. |
| Red | 2 | Not all content words from the keyphrase are in the SEO title | **Keyphrase in SEO title**: Not all the words from your keyphrase "X" appear in the SEO title. **For the best SEO results write the exact match of your keyphrase in the SEO title, and put the keyphrase at the beginning of the title**. |
| Red | 2 | The exact keyphrase is not used, when the keyphrase is in quotation marks | **Keyphrase in SEO title**: Does not contain the exact match. **Try to write the exact match of your keyphrase in the SEO title and put it at the beginning of the title**. |
| Orange | 6 | The exact match of the keyphrase is not at the beginning of the SEO title | **Keyphrase in SEO title**: The exact match of the focus keyphrase appears in the SEO title, but not at the beginning. **Move it to the beginning for the best results**. |
| Orange | 6 | The SEO title does not contain an exact match of the keyphrase | **Keyphrase in SEO title**: Does not contain the exact match. **Try to write the exact match of your keyphrase in the SEO title and put it at the beginning of the title**. |
| Green | 9 | The SEO title contains the exact match of the keyphrase at the beginning | **Keyphrase in SEO title**: The exact match of the focus keyphrase appears at the beginning of the SEO title. Good job! |

## Japanese
For Japanese, there is no exact match check:

* When all words of the keyphrase are in the SEO title and the title starts with the keyphrase, the score is 9: **Keyphrase in SEO title**: The focus keyphrase appears at the beginning of the SEO title. Good job!
* When all words of the keyphrase are in the SEO title, but the title doesn't start with it, the score is 6: **Keyphrase in SEO title**: Title does not begin with the focus keyphrase. **Move your focus keyphrase to the beginning of the title**.
* When not all words are in the SEO title, the call to action in the red result is: **For the best SEO results include all words of your keyphrase in the SEO title, and put the keyphrase at the beginning of the title**.
