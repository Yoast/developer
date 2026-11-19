---
id: local-schema
title: "Assessments: Local schema"
sidebar_label: Local schema
description: How the Local schema assessment of Yoast Local SEO works and how it is scored.
---
The **Local schema** assessment checks whether the text contains an address shortcode (Classic editor) or an address block (Block editor). It is part of the SEO analysis of [Yoast Local SEO](https://yoast.com/product/local-seo-wordpress/).

| **Local schema** | |
|---|---|
| **Name in code** | `LocalSchemaAssessment` |
| **Title URL** | None |
| **Call to action URL** | None |
| **When it applies** | Always, on the **Location** post type. |
| **Product** | Yoast Local SEO |
| **Content types** | The **Location** post type (for businesses with multiple locations) |
| **Related keyphrases** | ❌ |
| **Uses synonyms** | ❌ |
| **Languages** | All languages |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ❌ |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 4 | There is no address shortcode (Classic editor) | Your content does not contain an address shortcode which is important for search engines to validate your business address. You should really add that. |
| Green | 9 | There is an address shortcode (Classic editor) | Your content contains an address shortcode which is important for search engines to validate your business address. Well done! |
| Red | 4 | There is no address block (Block editor) | Your content does not contain an address block which is important for search engines to validate your business address. You should really add that. |
| Green | 9 | There is an address block (Block editor) | Your content contains an address block which is important for search engines to validate your business address. Well done! |
