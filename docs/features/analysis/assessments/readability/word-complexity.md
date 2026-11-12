---
id: word-complexity
title: "Assessments: Word complexity"
sidebar_label: Word complexity
description: How the Word complexity assessment of the Yoast SEO Premium readability analysis works and how it is scored.
---
The **Word complexity** assessment checks whether the text contains too many complex words. Word forms of the keyphrase are not counted.

| **Word complexity** | |
|---|---|
| **Name in code** | [`WordComplexityAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/readability/WordComplexityAssessment.js) |
| **Title URL** | [https://yoa.st/4ls](https://yoa.st/4ls) |
| **Call to action URL** | [https://yoa.st/4lt](https://yoa.st/4lt) |
| **When it applies** | When the assessment is supported for the language of the text. |
| **Product** | Yoast SEO Premium. Also in Yoast SEO for Shopify and Yoast SEO for Google Docs. |
| **Content types** | **WordPress**: added by Yoast SEO Premium to the readability analysis of all content types<br/>**Shopify**: added by Yoast SEO for Shopify<br/>**Google Docs**: documents |
| **Languages** | English, German, Spanish and French |
| **Cornerstone** | ✅ Red instead of orange when there are too many complex words |
| **Uses highlighting** | ✅ Highlights the complex words |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Orange (cornerstone: Red) | 6 (cornerstone: 3) | More than 10% of the words are complex | **Word complexity**: X% of the words in your text are considered complex. **Try to use shorter and more familiar words to improve readability**. |
| Green | 9 | 10% of the words or fewer are complex | **Word complexity**: You are not using too many complex words, which makes your text easy to read. Good job! |
