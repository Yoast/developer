---
id: ai-errors
title: "Yoast AI error messages"
sidebar_label: AI errors
description: This documentation provides information about the errors that the Yoast AI feature shows.
---

This documentation provides information about the errors displayed by the [Yoast AI](https://yoast.com/features/ai-generated-titles-and-meta-descriptions/#medium=software&source=yoast-seo&term=ai-feature-page&content=ai-modal) features of the [Yoast SEO](https://yoast.com/wordpress/plugins/seo/) plugin.

## SEO analysis required
Our Yoast AI optimization tool requires the SEO analyse to be enabled in the settings of the plugin. When a Yoast SEO premium user tries to make use of the AI features without having the SEO analyse enabled, the following error message will be shown: 

Example of the SEO analysis requirement error
![Example of the SEO analysis requirement error](seo-analysis-required-error.png)

## Unethical Usage Error
The use of the Yoast AI features relies on the [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/content-filter?tabs=warning%2Cpython-new#text-content) content filtering, which enforces its usage policies concerning unethical content. The model filters for hate, sexual, violence, and self-harm content. 

When a Yoast SEO Premium user tries to use the Yoast AI features in a post, OpenAI will scan the content for unethical content. If any such content is found, the Yoast AI will display the following error:

Example of the ethical content policy violation error
![Example of the ethical content policy violation error](non-ethical-content-error.png)