---
id: transition-words
title: "Assessments: Transition words"
sidebar_label: Transition words
description: How the Transition words assessment of the Yoast SEO readability analysis works and how it is scored.
---
The **Transition words** assessment checks whether enough sentences contain transition words (for example, "because", "however", "first").

| **Transition words** | |
|---|---|
| **Name in code** | [`TransitionWordsAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/readability/TransitionWordsAssessment.js) |
| **Title URL** | [https://yoa.st/34z](https://yoa.st/34z) |
| **Call to action URL** | [https://yoa.st/35a](https://yoa.st/35a) |
| **When it applies** | When the assessment is supported for the language of the text. |
| **Product** | Yoast SEO (Free) |
| **Content types** | Posts and pages, taxonomies, product pages |
| **Languages** | Only [supported languages](https://github.com/Yoast/wordpress-seo/tree/trunk/packages/yoastseo/README.md#readability-analysis). Japanese counts characters instead of words for the text length. |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ✅ Highlights the sentences with transition words |

## Scoring
A long text has more than 200 words (Japanese: 400 characters).

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 3 | No transition words in a long text | **Transition words**: None of the sentences contain transition words. **Use some**. |
| Red | 3 | < 20% of sentences in a long text | **Transition words**: Only X of the sentences contain them. This is not enough. **Use more transition words**. |
| Orange | 6 | Between 20% and 30% of sentences in a long text | **Transition words**: Only X of the sentences contain them. This is not enough. **Use more transition words**. |
| Green | 9 | ≥ 30% of sentences in a long text | **Transition words**: Well done! |
| Green | 9 | At least one sentence with transition words in a short text | **Transition words**: Well done! |
| Green | 9 | No transition words in a short text | **Transition words**: You are not using any transition words, but your text is short enough and probably doesn't need them. |
