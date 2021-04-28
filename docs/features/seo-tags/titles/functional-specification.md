---
id: functional-specification
title: Titles - Functional specification
sidebar_label: Specification
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/seo-tags/titles/functional-specification.md
description: An overview of how title tags work in Yoast SEO.
---

Every page on a website should include a unique, descriptive title tag in the `<head>` of the document.

A valid title tag takes the following format: `<title>{{VALUE}}</title>`.

The following sections describe how the value of the `{{VALUE}}` component of the tag should be constructed.

## Default logic per request type
The table below describes all of the request types which we consider and the structure of the title tag in each case. Note that this doesn't cover every conceivable scenario or edge-case, as we only expect this specification to be typically applied within the constraints of a content management system or website.

Also note that the word 'page' is used throughout to indicate any 'non-system' response served for a requested URL. This includes archives, taxonomies and error states. It excludes 'non-page' results (which typically don't support a `<title>` tag), like RSS feeds and XML sitemaps.

| Request type | Notes | Title structure | Example |
| :--- | :--- | :--- | :--- |
| Home page | Assumes that the homepage resides at the site root. Otherwise, see Single page. | `%%sitename%% %%page%% %%sep%% %%tagline%%` | Acme Inc - The best widgets in the world |
| Single page | In WordPress, also considers a single post. E.g. an 'about us' page or a blog post. | `%%postname%% %%page%% %%sep%% %sitename%` | Top 10 widgets - Acme Inc |
| Taxonomy index page | Any template which lists a selection of posts or pages based on a taxonomy or similar. E.g. a category page or tag page, or a page listing all posts by a particular author. | `%%term_title%% archive %%page%% %%sep%% %sitename%` | Blue widgets archive - Acme Inc |
| Date index page | Any template which lists a selection of posts or pages filtered by date. E.g, all posts which were published in a certain year, or, all pages which were added on a certain day/date. | `%%date%% %%page%% %%sep%% %sitename%` | 2018 - Acme Inc |
| Search pages | Any template which lists a selection of posts or pages filtered by a user query. E.g, all posts which are relevant for the word 'widget'. | `You searched for %%search_phrase%% %%page%% %%sep%% %sitename%` | You searched for red widgets - Acme Inc |
| 404 pages | Any template is served when the user requests a URL which returns a 404 error. | `Page not found %%sep%% %sitename%` | Page not found - Acme Inc |

Most of these variables should be fairly self-descriptive, and shouldn't need extensive documentation. However, for the avoidance of doubt:

- `%%sitename%%`: The name of the website. E.g., "Acme Inc".
- `%%sep%%`: A separator character. E.g., `-`, `|`, or similar.
- `%%tagline%%`: A short description of the site, or similar. E.g., "The best widgets in the world".
- `%%postname%%`: The name of a page/post. E.g., "Widget FAQs".
- `$%page%%`: A representation of the pagination state (omitted on the first page in a series). E.g., "Page 2 of 8".
- `%%term_title%%`: The name of the taxonomy/archive. E.g., "Blue widgets".
- `%%date%%`: The date of the archive. E.g., "July 2016".
- `%%search_phrase%%`: The search string. E.g., "How much do red widgets cost".

### Sanitizing
Any user-input values (i.e., any component of the URL, but in particular, arbitrary strings and refinements such as search terms) should always be appropriately sanitized.

## User-specified patterns
Whenever the user has defined an alternate pattern/template for titles (e.g., using Yoast SEO's replacement variables), that pattern should be used in place of the defaults.

## User-specified values
Whenever the user has defined a specific value for a page, that value should be used in place of the default (or type-specific) pattern.
