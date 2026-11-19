---
id: competing-links
title: "Assessments: Competing links"
sidebar_label: Competing links
description: How the Competing links assessment of the Yoast SEO analysis works and how it is scored.
---
The **Competing links** assessment checks whether there are links in the text that use the keyphrase or its synonym as the anchor text.

| **Competing links** | |
|---|---|
| **Name in code** | [`TextCompetingLinksAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/TextCompetingLinksAssessment.js) |
| **Title URL** | [https://yoa.st/34l](https://yoa.st/34l) |
| **Call to action URL** | [https://yoa.st/34m](https://yoa.st/34m) |
| **When it applies** | Always. Does not apply to taxonomies (in WordPress), or to collection pages and store blogs (in Shopify). |
| **Product** | Yoast SEO (Free) |
| **Content types** | **WordPress**: posts and pages, products (WooCommerce SEO)<br/>**Shopify**: products, blog posts and pages<br/>**Google Docs**: documents |
| **Related keyphrases** | ✅ |
| **Uses synonyms** | ✅ |
| **Languages** | All languages |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ✅ |

## Scoring

| Traffic light | Score | Criterion | Feedback                                                                                                    |
|---|---|---|-------------------------------------------------------------------------------------------------------------|
| Red | 2 | There is a link with the keyphrase or synonym as anchor text | **Competing links**: You have a link which uses your keyphrase or synonym as its anchor text. **Fix that**! |
| Green | 8 | There are no links with the keyphrase or synonym as anchor text | **Competing links**: There are no links which use your keyphrase or synonym as their anchor text. Nice!     |

## What counts as a competing link?
With the example keyphrase `cat and dog`:

| Link text | Competing link? | Notes |
|---|---|---|
| cat and dog | ✅ | Full match. |
| cat | ❌ | A partial match of the keyphrase is not a competing link. |
| cat and dog food | ❌ | A full match of the keyphrase is not a competing link if the link text contains other content words. |
