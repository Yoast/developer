---
id: meta-description-length
title: "Assessments: Meta description length"
sidebar_label: Meta description length
description: How the Meta description length assessment of the Yoast SEO analysis works and how it is scored.
---
The **Meta description length** assessment checks whether the meta description has a good length. If the date is shown in the Google preview, the date and the separator (` - `) are included in the length.

| **Meta description length** | |
|---|---|
| **Name in code** | [`MetaDescriptionLengthAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/MetaDescriptionLengthAssessment.js) |
| **Title URL** | [https://yoa.st/34d](https://yoa.st/34d) |
| **Call to action URL** | [https://yoa.st/34e](https://yoa.st/34e) |
| **When it applies** | Always. |
| **Product** | Yoast SEO (Free) |
| **Content types** | Posts and pages, taxonomies, product pages |
| **Related keyphrases** | ❌ |
| **Uses synonyms** | ❌ |
| **Languages** | Japanese has different boundaries (see the scoring table). |
| **Cornerstone** | ✅ Red instead of orange when the meta description is too short or too long |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ❌ |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 1 | No meta description | **Meta description length**: No meta description has been specified. Search engines will display copy from the page instead. **Make sure to write one!** |
| Orange (cornerstone: Red) | 6 (cornerstone: 3) | Meta description (incl. the date) ≤ 120 characters (Japanese: ≤ 60 characters) | **Meta description length**: The meta description is too short (under X characters). Up to X characters are available. **Use the space!** |
| Orange (cornerstone: Red) | 6 (cornerstone: 3) | Meta description (incl. the date) > 156 characters (Japanese: > 80 characters) | **Meta description length**: The meta description is over X characters. To ensure the entire description will be visible, **you should reduce the length!** |
| Green | 9 | Meta description (incl. the date) > 120 and ≤ 156 characters (Japanese: > 60 and ≤ 80 characters) | **Meta description length**: Well done! |
