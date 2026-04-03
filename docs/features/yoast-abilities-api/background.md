---
id: background
title: "Yoast SEO Abilities API - Background information"
sidebar_label: Background
description: This documentation explains what is the Abilities API and how Yoast SEO integrates with it.
---
This documentation explains how [Yoast SEO](https://yoast.com/product/yoast-seo-wordpress/) integrates with the Abilities API.

## What is the Abilities API
Abilities API was introduced in WordPress 6.9, as a new standardized way for plugins to expose what they can do. It allows plugins to do so by providing:
* A **registry** where plugins declare their capabilities (also know as `abilities`) with structured input/output schemas.
* A **central REST discovery endpoint** (`/wp-json/wp-abilities/v1/abilities`) where any client/plugin can list everything that's available.
* A **standardized execution endpoint** (`/run`) to invoke any registered ability.
* **Permission checks** baked into every ability, so access control is consistent.


## Yoast SEO Abilities
The abilities that Yoast SEO is registering:

* [Recent Posts' SEO Ability](recent-posts-seo-ability.md)
* [Recent Posts' Readability Ability](recent-posts-readability-ability.md)
* [Recent Posts' Inclusive Language Ability](recent-posts-inclusive-language-ability.md)