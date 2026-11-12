---
id: previously-used-keyphrase
title: "Assessments: Previously used keyphrase"
sidebar_label: Previously used keyphrase
description: How the Previously used keyphrase assessment of the Yoast SEO analysis works and how it is scored.
---
The **Previously used keyphrase** assessment checks whether the keyphrase was already used as the keyphrase of other content on the site.

| **Previously used keyphrase** | |
|---|---|
| **Name in code** | [`PreviouslyUsedKeyword`](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/bundledPlugins/previouslyUsedKeywords.js) (a bundled plugin of the `yoastseo` package, not an assessment class) |
| **Title URL** | [https://yoa.st/33x](https://yoa.st/33x) |
| **Call to action URL** | [https://yoa.st/33y](https://yoa.st/33y) |
| **When it applies** | Always, in the Yoast SEO WordPress plugin. |
| **Product** | Yoast SEO (Free) |
| **Content types** | Posts and pages, taxonomies, product pages |
| **Related keyphrases** | ✅ |
| **Uses synonyms** | ❌ |
| **Languages** | All languages |
| **Cornerstone** | ❌ Same scoring |
| **Uses highlighting** | ❌ |
| **Uses morphology (Premium)** | ❌ |

## Scoring

| Traffic light | Score | Criterion | Feedback |
|---|---|---|---|
| Red | 1 | There is no keyphrase | **Previously used keyphrase**: No focus keyphrase was set for this page. **Please add a focus keyphrase you haven't used before on other content**. |
| Red | 1 | The keyphrase was used more than once before | **Previously used keyphrase**: You've used this keyphrase X times before. **Do not use your keyphrase more than once.** |
| Orange | 6 | The keyphrase was used once before | **Previously used keyphrase**: You've used this keyphrase once before. **Do not use your keyphrase more than once.** |
| Green | 9 | The keyphrase was not used before | **Previously used keyphrase**: You've not used this keyphrase before, very good. |

## Disabling the assessment
In the Yoast SEO WordPress plugin, you can turn off this assessment with the `wpseo_previously_used_keyword_active` filter:

```php
add_filter( 'wpseo_previously_used_keyword_active', '__return_false' );
```
