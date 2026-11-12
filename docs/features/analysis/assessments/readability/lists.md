---
id: lists
title: "Assessments: Lists"
sidebar_label: Lists
description: How the Lists assessment of the Yoast SEO readability analysis for product pages works and how it is scored.
---
The **Lists** assessment checks whether the text has a list. It only runs on product pages.

| **Lists** | |
|---|---|
| **Name in code** | [`ListAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/readability/ListAssessment.js) |
| **Title URL** | [https://yoa.st/4fe](https://yoa.st/4fe) |
| **Call to action URL** | [https://yoa.st/4ff](https://yoa.st/4ff) |
| **When it applies** | Always, on product pages. |
| **Product** | Yoast WooCommerce SEO, Yoast SEO for Shopify |
| **Content types** | **WordPress**: products (WooCommerce SEO)<br/>**Shopify**: products<br/>**Google Docs**: not available |
| **Languages** | All languages |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ❌ |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 3 | No list | **Lists**: No lists appear on this page. **Add at least one ordered or unordered list**. |
| Green | 9 | At least one list | **Lists**: There is at least one list on this page. Great! |

The links in the feedback are different in WordPress and Shopify, but they lead to the same pages. This page lists the WordPress links.
