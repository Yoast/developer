---
id: ai-errors
title: "Yoast AI error messages"
sidebar_label: AI-errors
description: This documentation provides information about the errors that the Yoast AI feature shows.
---

This documentation provides information about the errors displayed by the Yoast AI features of the [Yoast SEO](https://yoast.com/wordpress/plugins/seo/) plugin.

## SEO analysis required
Our Yoast AI optimization tool, requires the SEO analyses to be enabled in the settings of the plugin. When a user premium user try to make use of the AI feature whithout having the SEO analyses enabled, the following error message will be shown: 

Example of the SEO analysis requirement error
![Example of the SEO analysis requirement error](seo-analysis-required-error.png)

## Unethical Usage Error
The use of the Yoast AI features relies on the [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/content-filter?tabs=warning%2Cpython-new#text-content) content filtering, which enforces its usage policies concerning unethical content. The model filters for hate, sexual, violence, and self-harm content. 

Example of the ethical content policy violation error
![Example of the ethical content policy violation error](unethical-usage-error.png)