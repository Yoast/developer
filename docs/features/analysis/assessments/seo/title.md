---
id: title
title: "Assessments: Title"
sidebar_label: Title
description: How the Title assessment of the Yoast SEO Premium analysis works and how it is scored.
---
The **Title** assessment checks whether the page has a title.

| **Title** | |
|---|---|
| **Name in code** | [`TextTitleAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/TextTitleAssessment.js) |
| **Title URL** | [https://yoa.st/4nh](https://yoa.st/4nh) |
| **Call to action URL** | [https://yoa.st/4ni](https://yoa.st/4ni) |
| **When it applies** | Always, when Yoast SEO Premium is active. Does not apply to taxonomies. |
| **Product** | Yoast SEO Premium |
| **Content types** | Added by Yoast SEO Premium to the SEO analysis when a title is available. Not on taxonomies. |
| **Related keyphrases** | ❌ |
| **Uses synonyms** | ❌ |
| **Languages** | All languages |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ❌ |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | -10000 | No title | **Title**: Your page does not have a title yet. **Add one!** |
| Green | 9 | There is a title | **Title**: Your page has a title. Well done! |
