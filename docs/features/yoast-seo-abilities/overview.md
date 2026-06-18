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
Yoast SEO currently registers three read-only abilities that return the scores of its content analyses for the most recently modified posts:

* The SEO analysis score
* The readability analysis score
* The inclusive language analysis score

All three are documented on the [Analysis scores](analysis-scores.md) page. They can also be discovered at `/wp-json/wp-abilities/v1/abilities?category=yoast-seo` along with their most relevant information.

## Use cases for the Yoast SEO Abilities

### AI agents
Assuming that an AI agent is connected to a WordPress-enabled MCP site (details on how one can do that, in [this helpful tutorial](https://developer.wordpress.org/news/2026/02/from-abilities-to-ai-agents-introducing-the-wordpress-mcp-adapter) from the WP Core team) with Yoast SEO active, it can then discover the above abilities and answer questions like:
* _"Take a look at the latest posts of my website and give me a report of the analysis of their SEO scores. Do you see a clear pattern in the subjects of the best performing ones?"_
* _"Do you see the readability of my recent content going upwards or downwards?"_
* _"I want to know if I have content on my site that uses non-inclusive language. If there's indeed not inclusive language in my content, do you see a correlation between the subjects covered?"_

That way, Yoast SEO exposes the results of its analyses to authenticated AI agents, enabling users to use AI capabilities to easily navigate through useful SEO data of their website and create reports, map out plans and perform SEO-related actions accordingly.

### Third-party code
For plugins interested in building features on top of Yoast SEO Analyses, a more traditional way to consume the Yoast SEO Abilities would be to use the new WP REST API endpoints. This allows information about a website's recent posts to be reliably retrieved in a structured way.

## Prerequisites
* WordPress 6.9 or higher.
* [Indexables](/features/indexables/functional-specification.md) should be enabled and fully built.
