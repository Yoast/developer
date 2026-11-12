---
id: outbound-links
title: "Assessments: Outbound links"
sidebar_label: Outbound links
description: How the Outbound links assessment of the Yoast SEO analysis works and how it is scored.
---
The **Outbound links** assessment checks whether the text has outbound links (links to other websites), and whether they are followed.

| **Outbound links** | |
|---|---|
| **Name in code** | [`OutboundLinksAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/OutboundLinksAssessment.js) |
| **Title URL** | [https://yoa.st/34f](https://yoa.st/34f) |
| **Call to action URL** | [https://yoa.st/34g](https://yoa.st/34g) |
| **When it applies** | Always. |
| **Product** | Yoast SEO (Free) |
| **Content types** | Posts and pages |
| **Related keyphrases** | ❌ |
| **Uses synonyms** | ❌ |
| **Languages** | All languages |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ❌ |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 3 | No outbound links | **Outbound links**: No outbound links appear in this page. **Add some!** |
| Orange | 7 | All outbound links are nofollowed | **Outbound links**: All outbound links on this page are nofollowed. **Add some normal links.** |
| Green | 8 | There are both followed and nofollowed outbound links | **Outbound links**: There are both nofollowed and normal outbound links on this page. Good job! |
| Green | 9 | All outbound links are followed | **Outbound links**: Good job! |

## Product pages
This assessment does not run on product pages. On a product page, the main goal is that the visitor buys the product, so we don't encourage links to other pages. On informative blog posts, links such as "continue reading another post" do make sense.
