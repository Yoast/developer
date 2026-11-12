---
id: paragraph-length
title: "Assessments: Paragraph length"
sidebar_label: Paragraph length
description: How the Paragraph length assessment of the Yoast SEO readability analysis works and how it is scored.
---
The **Paragraph length** assessment checks whether paragraphs are longer than the recommended maximum length.

| **Paragraph length** | |
|---|---|
| **Name in code** | [`ParagraphTooLongAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/readability/ParagraphTooLongAssessment.js) |
| **Title URL** | [https://yoa.st/35d](https://yoa.st/35d) |
| **Call to action URL** | [https://yoa.st/35e](https://yoa.st/35e) |
| **When it applies** | Always. |
| **Product** | Yoast SEO (Free) |
| **Content types** | Posts and pages, taxonomies, product pages (with different boundaries) |
| **Languages** | Japanese counts characters instead of words, with different boundaries (see the scoring tables). |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ✅ Highlights the paragraphs that are too long |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 3 | > 200 words (Japanese: > 400 characters) | **Paragraph length**: X of the paragraphs contain(s) more than the recommended maximum number of words/characters (X). **Shorten your paragraphs!** |
| Orange | 6 | Between 150 and 200 words (Japanese: 300-400 characters) | **Paragraph length**: X of the paragraphs contain(s) more than the recommended maximum number of words/characters (X). **Shorten your paragraphs!** |
| Green | 9 | ≤ 150 words (Japanese: ≤ 300 characters) | **Paragraph length**: There are no paragraphs that are too long. Great job! |

## Product pages
On product pages, the boundaries are lower:

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 3 | > 100 words (Japanese: > 200 characters) | **Paragraph length**: X of the paragraphs contain(s) more than the recommended maximum number of words/characters (X). **Shorten your paragraphs!** |
| Orange | 6 | Between 70 and 100 words (Japanese: 140-200 characters) | **Paragraph length**: X of the paragraphs contain(s) more than the recommended maximum number of words/characters (X). **Shorten your paragraphs!** |
| Green | 9 | ≤ 70 words (Japanese: ≤ 140 characters) | **Paragraph length**: There are no paragraphs that are too long. Great job! |
