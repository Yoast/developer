---
id: text-presence
title: "Assessments: Text presence"
sidebar_label: Text presence
description: How the Text presence assessment of the Yoast SEO readability analysis works and how it is scored.
---
The **Text presence** assessment checks whether there is enough text for a good analysis.

| **Text presence** | |
|---|---|
| **Name in code** | [`TextPresenceAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/readability/TextPresenceAssessment.js) |
| **Title URL** | [https://yoa.st/35h](https://yoa.st/35h) |
| **Call to action URL** | [https://yoa.st/35i](https://yoa.st/35i) |
| **When it applies** | Only shown when the text is too short (less than 50 characters). |
| **Product** | Yoast SEO (Free) |
| **Content types** | **WordPress**: posts and pages, taxonomies, products (WooCommerce SEO)<br/>**Shopify**: products, collections, blog posts and pages<br/>**Google Docs**: documents |
| **Languages** | All languages |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ❌ |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 3 | < 50 characters | **Not enough content**: **Please add some content to enable a good analysis**. |
