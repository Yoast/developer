---
id: subheading-distribution
title: "Assessments: Subheading distribution"
sidebar_label: Subheading distribution
description: How the Subheading distribution assessment of the Yoast SEO readability analysis works and how it is scored.
---
The **Subheading distribution** assessment checks whether long texts are divided by subheadings.

| **Subheading distribution** | |
|---|---|
| **Name in code** | [`SubheadingsDistributionTooLong`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/readability/SubheadingDistributionTooLongAssessment.js) |
| **Title URL** | [https://yoa.st/34x](https://yoa.st/34x) |
| **Call to action URL** | [https://yoa.st/34y](https://yoa.st/34y) |
| **When it applies** | Always. |
| **Product** | Yoast SEO (Free) |
| **Content types** | **WordPress**: posts and pages, taxonomies, products (WooCommerce SEO)<br/>**Shopify**: products, collections, blog posts and pages<br/>**Google Docs**: documents |
| **Languages** | Japanese counts characters instead of words, with different boundaries (see the scoring table). |
| **Cornerstone** | ✅ Lower boundaries (see the scoring table) |
| **Uses highlighting** | ✅ Highlights the text sections that are too long |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 2 | **Default**: A text with more than 300 words (cornerstone: 250) and no subheading. <br/> **Japanese**: A text with more than 600 characters (cornerstone: 500) and no subheading. | **Subheading distribution**: You are not using any subheadings, although your text is rather long. **Try and add some subheadings.** |
| Red | 3 | **Default**: There are subheadings, and a subheading is followed or preceded (if applicable) by more than 350 words (cornerstone: 300). <br/> **Japanese**: more than 700 characters (cornerstone: 600). | **Subheading distribution**: X sections of your text are longer than the recommended number of words (X) and are not separated by any subheadings. **Add subheadings to improve readability.** |
| Red | 3 | **Default**: There are subheadings. The first one is preceded by more than 350 words (cornerstone: 300), and the text after the subheadings is shorter than 300 words (cornerstone: 250). <br/> **Japanese**: preceded by more than 700 characters (cornerstone: 600), text after shorter than 600 characters (cornerstone: 500). | **Subheading distribution**: The beginning of your text is longer than X words and is not separated by any subheadings. **Add subheadings to improve readability.** |
| Orange | 6 | **Default**: A subheading is followed by 300-350 words (cornerstone: 250-300). <br/> **Japanese**: 600-700 characters (cornerstone: 500-600). | **Subheading distribution**: X sections of your text are longer than the recommended number of words (X) and are not separated by any subheadings. **Add subheadings to improve readability.** |
| Orange | 6 | **Default**: There are subheadings. The first one is preceded by 300-350 words (cornerstone: 250-300), and the text after the subheadings is shorter than 300 words (cornerstone: 250). <br/> **Japanese**: preceded by 600-700 characters (cornerstone: 500-600), text after shorter than 600 characters (cornerstone: 500). | **Subheading distribution**: The beginning of your text is longer than X words and is not separated by any subheadings. **Add subheadings to improve readability.** |
| Green | 9 | **Default**: A text with 300 words or less (cornerstone: 250) and no subheading. <br/> **Japanese**: A text with 600 characters or less (cornerstone: 500) and no subheading. | **Subheading distribution**: You are not using any subheadings, but your text is short enough and probably doesn't need them. |
| Green | 9 | **Default**: There are subheadings, and each subheading is followed or preceded (if applicable) by less than 300 words (cornerstone: 250). <br/> **Japanese**: less than 600 characters (cornerstone: 500). | **Subheading distribution**: Great job! |

For Japanese, the feedback says "characters" instead of "words".
