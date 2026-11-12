---
id: seo-title-width
title: "Assessments: SEO title width"
sidebar_label: SEO title width
description: How the SEO title width assessment of the Yoast SEO analysis works and how it is scored.
---
The **SEO title width** assessment checks whether the SEO title has a good width. It checks the SEO title as it appears in the search appearance preview, so it includes the content of replacement variables. The separator and the site title replacement variables are not included in the calculation.

| **SEO title width** | |
|---|---|
| **Name in code** | [`PageTitleWidthAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/PageTitleWidthAssessment.js) |
| **Title URL** | [https://yoa.st/34h](https://yoa.st/34h) |
| **Call to action URL** | [https://yoa.st/34i](https://yoa.st/34i) |
| **When it applies** | Always. |
| **Product** | Yoast SEO (Free) |
| **Content types** | **WordPress**: posts and pages, taxonomies, products (WooCommerce SEO)<br/>**Shopify**: products, collections, blog posts and pages, blogs<br/>**Google Docs**: not available |
| **Related keyphrases** | ❌ |
| **Uses synonyms** | ❌ |
| **Languages** | All languages |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ❌ |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 1 | No SEO title | **SEO title width**: **Please create an SEO title.** |
| Red | 3 | SEO title width > 600 px | **SEO title width**: The SEO title is wider than the viewable limit. **Try to make it shorter.** |
| Green | 9 | SEO title width between 1 px and 600 px | **SEO title width**: Good job! |
