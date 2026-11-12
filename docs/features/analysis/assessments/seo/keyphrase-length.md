---
id: keyphrase-length
title: "Assessments: Keyphrase length"
sidebar_label: Keyphrase length
description: How the Keyphrase length assessment of the Yoast SEO analysis works and how it is scored.
---
The **Keyphrase length** assessment checks whether the number of (content) words in the keyphrase is within the recommended limit. For languages with function word support, only content words are counted. For languages without function word support, all words are counted.

| **Keyphrase length** | |
|---|---|
| **Name in code** | [`KeyphraseLengthAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/KeyphraseLengthAssessment.js) |
| **Title URL** | [https://yoa.st/33i](https://yoa.st/33i) |
| **Call to action URL** | [https://yoa.st/33j](https://yoa.st/33j) |
| **When it applies** | Always. |
| **Product** | Yoast SEO (Free) |
| **Content types** | Posts and pages, taxonomies, product pages |
| **Related keyphrases** | ✅ |
| **Uses synonyms** | ❌ |
| **Languages** | Different limits for languages without function word support. Japanese counts characters instead of words. |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ❌ |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | -999 | No focus keyphrase set | **Keyphrase length**: No focus keyphrase was set for this page. **Set a focus keyphrase in order to calculate your SEO score**. |
| Red | 3 | Keyphrase length > 8 words (> 9 for languages without function words support, > 18 characters for Japanese) | **Keyphrase length**: The keyphrase contains X (content) words/characters. That's way more than the recommended maximum of X (content) words/characters. **Make it shorter!** |
| Orange | 6 | Keyphrase length between 5-8 words (7-9 for languages without function words support, 13-18 characters for Japanese) | **Keyphrase length**: The keyphrase contains X (content) words/characters. That's more than the recommended maximum of X (content) words/characters. **Make it shorter!** |
| Green | 9 | Keyphrase length between 1-4 words (1-6 for languages without function words support, 1-12 characters for Japanese) | **Keyphrase length**: Good job! |

## Product pages
On product pages, keyphrases that are too short also get a lower score. Dutch, German and Swedish get an orange or red traffic light with shorter keyphrases than other languages, because keyphrases tend to be shorter in these languages (compound words are written as one word).

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | -999 | No focus keyphrase set | **Keyphrase length**: No focus keyphrase was set for this page. **Set a focus keyphrase in order to calculate your SEO score**. |
| Red | 3 | Keyphrase length > 8 words (> 9 for languages without function words support; > 7 for Dutch, German and Swedish; > 18 characters for Japanese) | **Keyphrase length**: The keyphrase contains X (content) words/characters. That's way more than the recommended maximum of X (content) words/characters. **Make it shorter!** |
| Red | 3 | Keyphrase length 1-2 words (1 word for Dutch, German and Swedish; 1-4 characters for Japanese) | **Keyphrase length**: The keyphrase contains X (content) word(s)/character(s). That's way less than the recommended minimum of X (content) words. **Make it longer!** |
| Orange | 6 | Keyphrase length 7-8 words (7-9 for languages without function words support; 7 for Dutch, German and Swedish; 13-18 characters for Japanese) | **Keyphrase length**: The keyphrase contains X (content) words/characters. That's more than the recommended maximum of X (content) words/characters. **Make it shorter!** |
| Orange | 6 | Keyphrase length 3 words (2 words for Dutch, German and Swedish; 5-7 characters for Japanese) | **Keyphrase length**: The keyphrase contains X (content) words/characters. That's less than the recommended minimum of X (content) words/characters. **Make it longer!** |
| Green | 9 | Keyphrase length 4-6 words (3-6 for Dutch, German and Swedish; 8-12 characters for Japanese) | **Keyphrase length**: Good job! |
