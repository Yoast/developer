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
| **Content types** | **WordPress**: posts and pages, products (WooCommerce SEO)<br/>**Shopify**: products, blog posts and pages<br/>**Google Docs**: documents |
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

## Product pages
On product pages, the assessment recommends at least 4 images.

By default, it counts the images in the text. A platform can count the product's own images instead (featured, gallery, variations) by providing the `providedImages` attribute of the `Paper`. An empty array counts as a product without images. When the `Paper` provides its own images, videos in the text are not counted.

| Traffic light | Score | Criterion | Feedback (default) |
|---|---|---|---|
| Red | 3 | No images | **Images**: No images appear on this page. **Add some!** |
| Orange | 6 | 1 to 3 images | **Images**: Only X image(s) appear(s) on this page. We recommend at least 4. **Add more relevant images!** |
| Green | 9 | 4 or more images | **Images**: Good job! |

On product pages, the callback in `callbacks.getResultTexts` receives `urlTitleAnchorOpeningTag`, `urlActionAnchorOpeningTag`, `mediaCount`, `recommendedCount`, `includeVideos` and `isVariableProduct`, and must return all three of `noMedia`, `okay` and `good`. The returned object is used as is, so an omitted key renders as an empty result text. Without a callback, the default strings in the table above are used.
