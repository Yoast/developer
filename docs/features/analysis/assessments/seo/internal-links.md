---
id: internal-links
title: "Assessments: Internal links"
sidebar_label: Internal links
description: How the Internal links assessment of the Yoast SEO analysis works and how it is scored.
---
The **Internal links** assessment checks whether the text has internal links (links to other pages on the same site), and whether they are followed.

| **Internal links** | |
|---|---|
| **Name in code** | [`InternalLinksAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/InternalLinksAssessment.js) |
| **Title URL** | [https://yoa.st/33z](https://yoa.st/33z) |
| **Call to action URL** | [https://yoa.st/34a](https://yoa.st/34a) |
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
| Red | 3 | No internal links | **Internal links**: No internal links appear in this page, **make sure to add some!** |
| Orange | 7 | All internal links are nofollowed | **Internal links**: The internal links in this page are all nofollowed. **Add some good internal links.** |
| Green | 8 | There are both followed and nofollowed internal links | **Internal links**: There are both nofollowed and normal internal links on this page. Good job! |
| Green | 9 | All internal links are followed | **Internal links**: You have enough internal links. Good job! |

## Product pages
This assessment does not run on product pages. On a product page, the main goal is that the visitor buys the product, so we don't encourage links to other pages. On informative blog posts, links such as "continue reading another post" do make sense.
