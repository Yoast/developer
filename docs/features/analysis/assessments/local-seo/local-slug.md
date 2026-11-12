---
id: local-slug
title: "Assessments: Local slug"
sidebar_label: Local slug
description: How the Local slug assessment of Yoast Local SEO works and how it is scored.
---
The **Local slug** assessment checks whether the location's city is in the slug. It is part of the SEO analysis of [Yoast Local SEO](https://yoast.com/product/local-seo-wordpress/).

| **Local slug** | |
|---|---|
| **Name in code** | `LocalSlugAssessment` |
| **Title URL** | None |
| **Call to action URL** | None |
| **When it applies** | Always on the **Location** post type, except when the site language is Japanese. The assessment only appears after you save and reload the location page. |
| **Product** | Yoast Local SEO |
| **Content types** | The **Location** post type (for businesses with multiple locations) |
| **Related keyphrases** | ❌ |
| **Uses synonyms** | ❌ |
| **Languages** | All languages, except Japanese |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ❌ |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 4 | The slug doesn't contain the city | Your URL does not contain your location's city, you should really add that. |
| Green | 9 | The slug contains the city | Your URL contains your location's city, well done! |
