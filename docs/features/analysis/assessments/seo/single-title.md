---
id: single-title
title: "Assessments: Single title"
sidebar_label: Single title
description: How the Single title assessment of the Yoast SEO analysis works and how it is scored.
---
The **Single title** assessment checks whether the text has more than one H1 heading.

| **Single title** | |
|---|---|
| **Name in code** | [`SingleH1Assessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/SingleH1Assessment.js) |
| **Title URL** | [https://yoa.st/3a6](https://yoa.st/3a6) |
| **Call to action URL** | [https://yoa.st/3a7](https://yoa.st/3a7) |
| **When it applies** | Always. |
| **Product** | Yoast SEO (Free) |
| **Content types** | **WordPress**: posts and pages, taxonomies, products (WooCommerce SEO)<br/>**Shopify**: products, collections, blog posts and pages<br/>**Google Docs**: documents |
| **Related keyphrases** | ❌ |
| **Uses synonyms** | ❌ |
| **Languages** | All languages |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ✅ Highlights the H1 headings in the text |
| **Uses morphology (Premium)** | ❌ |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 1 | There are two or more H1 headings in the text<sup>1</sup> | **Single title**: H1s should only be used as your main title. Find all H1s in your text that aren't your main title and **change them to a lower heading level!** |
| Green | 8 | There are fewer than two H1 headings in the text<sup>1</sup> | **Single title**: You don't have multiple H1 headings, well done! |

<sup>1</sup> In the Google Docs add-on, an H1 at the top of the document is not counted, because it is treated as the title.
