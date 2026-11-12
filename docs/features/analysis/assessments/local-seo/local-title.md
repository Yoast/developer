---
id: local-title
title: "Assessments: Local title"
sidebar_label: Local title
description: How the Local title assessment of Yoast Local SEO works and how it is scored.
---
The **Local title** assessment checks whether the location's city is in the SEO title, or in the H1 or H2 headings in the text. It is part of the SEO analysis of [Yoast Local SEO](https://yoast.com/product/local-seo-wordpress/).

At the moment, it only detects the city in heading tags without attributes.

| **Local title** | |
|---|---|
| **Name in code** | `LocalTitleAssessment` |
| **Title URL** | None |
| **Call to action URL** | None |
| **When it applies** | Always, on the **Location** post type. The assessment only appears after you save and reload the location page. |
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
| Red | 4 | The SEO title does not contain the city, and no H1 or H2 contains the city | Your h1 and/or h2 headings do not contain your location's city, you should really add that. |
| Green | 9 | The SEO title contains the city | Your title contains your location's city, well done! |
| Green | 9 | The SEO title doesn't contain the city, but an H1 or H2 heading does | Your h1 and/or h2 headings contain your location's city, well done! |
