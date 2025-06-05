---
id: functional-specification
title: "Yoast SEO: llms.txt - functional specification"
sidebar_label: llms.txt
description: This documentation explains how Yoast SEO generates llms.txt files.
---
This documentation explains how [Yoast SEO](https://yoast.com/wordpress/plugins/seo/) generates llms.txt files.

## What does the Yoast SEO llms.txt feature do?
- Enabling the llms.txt feature will create an llms.txt file in the root directory of your website
- This file will be be updated weekly by a scheduled action
## How does Yoast SEO choose content to include in the llms.txt file?
**Posts/pages/custom post types**
- Yoast SEO includes the 5 latest updated posts/pages/custom post types in the llms.txt file (posts are only included if they have been published in the last 12 months)
- Custom post types are included if the “Show tags in search results” box in the Search Appearance settings is ticked for the specific custom post type

**Categories/tags/terms for custom taxonomies**
- Yoast SEO includes the 5 categories/tags with the most content pieces attached to them
- Terms for custom taxonomies are included if the “Show terms in search results” box in the Search Appearance settings is ticked for the specific taxonomy

## How can I delete an llms.txt file?
- You might see a warning from Yoast SEO that an llms.txt file can't be automatically generated because of an existing llms.txt file
- You need to remove the existing file from the server for Yoast SEO to be able to generate it automatically
## How can I create my own llms.txt file?
- Disable the feature
- Create an llms.txt file in the root directory of your site
- Follow https://llmstxt.org/ for best practices
## Known limitations
- When there’s another llms.txt file, we make sure to not overwrite it. But if a plugin serves a llms.txt file dynamically, our txt file is created and since it has higher prio, it will be displayed in the example.com/llms.txt URL.
- If you deactivate Yoast SEO while having the llms.txt feature enabled and then you activate it again at some point, for the next 5 minutes after activation the "View the llms.txt file" button in the settings will point to a 404.
- We do not yet support markdown code blocks with special markdown characters. Currently these characters will be escaped. For example:
  - The site tagline contains the following string: “This is \`the *tagline\`”
  - Llms.txt will output that as “This is \\\`the \\*tagline\\\`“
- If the server doesn’t serve .txt files with a UTF-8 encoding and the llms.txt file has non-english characters in it, they will appear garbled when accessed via the browser.
  - So, the word `Ελληνικά` will appear as `Î•Î»Î»Î·Î½Î¹ÎºÎ¬` there. 
- Post types that are set to `noindex` in the global settings will not be included in the llms.txt file. We don’t yet support the automatic exclusion of individual posts set as `noindex`.

