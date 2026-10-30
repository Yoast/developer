---
id: overview
title: "Yoast SEO Abilities"
sidebar_label: Overview
description: This documentation explains what the Abilities API is and how Yoast SEO integrates with it.
---
This documentation explains what the Abilities API is and how [Yoast SEO](https://yoast.com/product/yoast-seo-wordpress/) integrates with it.

## What is the Abilities API?
Abilities API is a standardized way for plugins to expose what they can do, [introduced in WordPress 6.9](https://developer.wordpress.org/news/2025/11/introducing-the-wordpress-abilities-api/). It allows plugins to do so by providing:
* A **registry** where plugins declare their capabilities/features/functionalities (also known as **abilities**) with structured input and output schemas.
* A **central REST discovery endpoint** (`/wp-json/wp-abilities/v1/abilities`) where any client/plugin can list everything that's available.
* A **standardized execution endpoint** (`/run`) to invoke any registered ability.
* **Permission checks** for every ability, so access control is consistent.

Once an ability is registered, it is discoverable and executable from PHP, JavaScript, and the REST API. That way, AI agents (and other third-party systems) can use that ability for their purposes.

## Yoast SEO Abilities
Yoast SEO registers the following abilities:

* Three **read-only** [Analysis scores](analysis-scores.md) abilities that return the scores of its content analyses for the most recently modified posts:
  * the SEO analysis score
  * the readability analysis score
  * the inclusive language analysis score.
* Two [Post's SEO data](posts-seo-data.md) abilities for working with the SEO data of individual posts:
  * one that **reads** a post's SEO data
  * one that **updates** it.
* Two [Term SEO data](terms-seo-data.md) abilities for working with the SEO data of individual taxonomy terms (categories, tags, and custom taxonomies):
  * one that **reads** a term's SEO data
  * one that **updates** it.
* One [Author schema](author-schema.md) ability for working with the author schema settings of individual users, which populate their Person schema:
  * it **reads** a user's author schema settings
  * and **updates** them.
* Six [Feature toggle](feature-toggles.md) abilities that enable or disable individual Yoast SEO features:
  * `yoast-seo/set-llms-txt-status` — toggle the llms.txt feature on or off
  * `yoast-seo/set-schema-aggregation-endpoint-status` — toggle the Schema Aggregation endpoint on or off
  * `yoast-seo/set-schema-framework-status` — toggle the Schema Framework (JSON-LD output) on or off
  * `yoast-seo/set-xml-sitemap-status` — toggle the XML sitemap on or off
  * `yoast-seo/set-open-graph-status` — toggle Open Graph data output on or off
  * `yoast-seo/set-x-card-status` — toggle X card data output on or off
* One [Site representation](site-representation.md) ability that updates the name, logo, social profiles, and person/organization toggle used in the site's organization schema. With [Yoast SEO Premium](site-representation.md#yoast-seo-premium-fields) active, it also updates the organization's additional details and identifiers.

They can all be discovered at `/wp-json/wp-abilities/v1/abilities?category=yoast-seo` along with their most relevant information.

## Annotations
Every ability declares a set of behavior annotations in its `meta.annotations`. They are hints (primarily for AI agents and other MCP clients) describing how the ability behaves, so a client can reason about how risky it is to call:

* **Read-only** – when `true`, the ability should only read data and never change anything on your site.
* **Destructive** – only meaningful when the ability is not read-only. When `true`, the ability may overwrite or remove existing data in a way that is not easily reversible; when `false`, any changes it makes should be additive or reversible. When `null`, the ability makes no claim either way, so a client should treat it as potentially destructive.
* **Idempotent** – only meaningful when the ability is not read-only. When `true`, calling the ability again with the same input should have no further effect beyond the first call.

The annotations for each ability are listed on its documentation page: [Analysis scores](analysis-scores.md#annotations), [Post's SEO data](posts-seo-data.md#annotations), [Term SEO data](terms-seo-data.md#annotations), [Author schema](author-schema.md#annotations), [Feature toggles](feature-toggles.md#annotations), and [Site representation](site-representation.md#annotations).

## Use cases for the Yoast SEO Abilities

### AI agents
Assuming that an AI agent is connected to a WordPress-enabled MCP site (details on how one can do that, in [this helpful tutorial](https://developer.wordpress.org/news/2026/02/from-abilities-to-ai-agents-introducing-the-wordpress-mcp-adapter) from the WP Core team) with Yoast SEO active, it can then discover the above abilities and answer questions like:
* _"Take a look at the latest posts of my website and give me a report of the analysis of their SEO scores. Do you see a clear pattern in the subjects of the best performing ones?"_
* _"Do you see the readability of my recent content going upwards or downwards?"_
* _"I want to know if I have content on my site that uses non-inclusive language. If there's indeed not inclusive language in my content, do you see a correlation between the subjects covered?"_

Beyond reading analysis scores, the agent can also read and update the SEO data of individual posts and terms, and the author schema settings of users:
* _"Show me the SEO settings for the post at https://example.com/homemade-sourdough-bread/. Is it set to be indexed?"_
* _"Write a meta description of at most 155 characters for the post with ID 42, making sure it includes its focus keyphrase."_
* _"Mark my post about sourdough bread as cornerstone content and set its canonical URL to https://example.com/sourdough/."_
* _"Remove the custom Open Graph title from the post at https://example.com/homemade-sourdough-bread/ so that Facebook and other social platforms show the default title instead."_
* Or even a bulk fetch and update of posts: _"Get me the SEO titles of all posts about hiking boots and noindex the ones without a custom SEO title"_
* _"Get me the SEO data for my Recipes category."_
* _"Set a custom meta description for the category at https://example.com/category/recipes/."_
* _"Update the LinkedIn profile for user ID 3 to https://www.linkedin.com/in/jane-doe/."_

See [Post's SEO data](posts-seo-data.md#update-post-seo-data), [Term SEO data](terms-seo-data.md#update-term-seo-data), and [Author schema](author-schema.md#input) for the full list of fields the agent can read and update.

That way, Yoast SEO exposes both the results of its analyses and the SEO data of individual posts to authenticated AI agents. This allows users to exploit AI capabilities to easily navigate through useful SEO data of their website and create reports, map out plans and perform SEO-related actions accordingly.

### Third-party code
AI agents are not the only consumers: plugins and other integrations can call the same abilities directly through the ability WP REST API `/run` endpoint, without any AI in the loop.

Every ability declares structured input and output schemas providing consumers a reliable, versioned way to read and update a site's analysis scores and post SEO data in a predictable shape, rather than depending on Yoast SEO's internal storage.

## Prerequisites
* WordPress 6.9 or higher.
* [Indexables](/features/indexables/functional-specification.md) should be enabled and fully built.
