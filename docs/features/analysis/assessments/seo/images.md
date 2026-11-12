---
id: images
title: "Assessments: Images"
sidebar_label: Images
description: How the Images assessment of the Yoast SEO analysis works and how it is scored.
---
The **Images** assessment checks whether the text has images.

| **Images** | |
|---|---|
| **Name in code** | [`TextImagesAssessment`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/seo/ImageCountAssessment.js) |
| **Title URL** | [https://yoa.st/4f4](https://yoa.st/4f4) |
| **Call to action URL** | [https://yoa.st/4f5](https://yoa.st/4f5) |
| **When it applies** | Always. |
| **Product** | Yoast SEO (Free) |
| **Content types** | Posts and pages, product pages |
| **Related keyphrases** | ❌ |
| **Uses synonyms** | ❌ |
| **Languages** | All languages |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ❌ |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 3 | No images | **Images**: No images appear on this page. **Add some!** |
| Green | 9 | At least 1 image | **Images**: Good job! |

## Custom feedback strings
The strings above are the defaults. A platform can replace them by passing `callbacks.getResultTexts` in the assessment config.
