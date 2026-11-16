---
id: keyphrase-in-subheadings
title: "Assessments: Keyphrase in subheadings"
sidebar_label: Keyphrase in subheadings
description: How the Keyphrase in subheadings assessment of the Yoast SEO analysis works and how it is scored.
---
The **Keyphrase in subheadings** assessment checks whether the H2 and H3 subheadings reflect the topic of the text (based on the keyphrase or its synonyms).
* For languages with function word support, a subheading reflects the topic if more than half of the (content) words from the keyphrase are used in it.
* For languages without function word support, a subheading reflects the topic if all content words from the keyphrase are used in it.

| **Keyphrase in subheadings** | |
|---|---|
| **Name in code** | [`SubHeadingsKeywordAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/SubHeadingsKeywordAssessment.js) |
| **Title URL** | [https://yoa.st/33m](https://yoa.st/33m) |
| **Call to action URL** | [https://yoa.st/33n](https://yoa.st/33n) |
| **When it applies** | Always, except on taxonomies. |
| **Product** | Yoast SEO (Free) |
| **Content types** | **WordPress**: posts and pages, products (WooCommerce SEO)<br/>**Shopify**: products, blog posts and pages<br/>**Google Docs**: documents |
| **Related keyphrases** | ❌ |
| **Uses synonyms** | ✅ |
| **Languages** | Different matching for languages without function word support. Japanese counts characters instead of words. |
| **Cornerstone** | ✅ Lower text length boundary (see the scoring table). In Shopify, not on cornerstone blog posts and pages. |
| **Uses highlighting** | ✅ When at least one H2 or H3 subheading reflects the topic |
| **Uses morphology (Premium)** | ✅ |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 1 | No focus keyphrase set and/or no content | **Keyphrase in subheading**: **Please add both a keyphrase and some text to receive relevant feedback**. |
| Red | 2 | **Default**: A text of 300 words or more (cornerstone: 250) and no subheading. <br/> **Japanese**: A text of 600 characters or more (cornerstone: 500) and no subheading. | **Keyphrase in subheading**: You are not using any higher-level subheadings containing the keyphrase or its synonyms. **Fix that**! |
| Red | 3 | Less than 30% of H2/H3 subheadings reflect the topic | **Keyphrase in subheading**: **Use more keyphrases or synonyms in your H2 and H3 subheadings**! |
| Red | 3 | More than 75% of H2/H3 subheadings reflect the topic | **Keyphrase in subheading**: More than 75% of your H2 and H3 subheadings reflect the topic of your copy. That's too much. **Don't over-optimize**! |
| Green | 9 | Between 30% and 75% of H2/H3 subheadings reflect the topic | **Keyphrase in subheading**: X of your H2 and H3 subheadings reflect(s) the topic of your copy. Good job! |
| Green | 9 | The only H2/H3 subheading in the text reflects the topic | **Keyphrase in subheading**: Your H2 or H3 subheading reflects the topic of your copy. Good job! |
| Green | 9 | **Default**: A text of less than 300 words (cornerstone: 250) and no subheading. <br/> **Japanese**: A text of less than 600 characters (cornerstone: 500) and no subheading. | **Keyphrase in subheading**: You are not using any higher-level subheadings containing the keyphrase or its synonyms, but your text is short enough and probably doesn't need them. |
