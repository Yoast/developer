---
id: functional-specification
title: Meta robots - Functional specification
sidebar_label: Specification
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/seo-tags/meta-robots/functional-specification.md
description: An overview of how meta robots tags work in Yoast SEO.
---
When a user wishes to proactively restrict the crawling, indexing, or presentation of a page by search engines, we output a meta robots tag in the `<head>` of that page.

The tag takes the following format: `<meta name="{{agent}}" content="{{values}}" />`, where:

* `{{agent}}` identifies which agent(s) the rules should apply to (with a default of 'robots', which matches all agents).
* `{{values}}` may be a single value, or a comma-separated list of values.

## Constructing {{values}}
Given that a meta robots tag may have multiple (potentially conflicting) values, and that multiple overlapping conditions may apply, then:

* All conditions should be evaluated and the resultant tag values combined additively, for each agent, using the rules defined below (see _Resolving conflict_).
* The final set of values should be de-duplicated and reconciled.
An up-to-date list of all possible meta robots values and their relationships is maintained [here](https://yoast.com/robots-meta-tags/) .

## Standard structure
Yoast SEO outputs *three* meta robots tags by default on each (public) page, with the following structure:

```html
<meta name="robots" content="{{values}}" />
<meta name="googlebot" content="{{values}}, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta name="bingbot" content="{{values}}, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
```

This provides generic instructions to all robots, and, opts users into Google and Bing's specific handling of snippet/media restrictions.

Unless otherwise defined by the user (or via page/template/filtering logic), `{{values}}` outputs `index, follow`.

## Scenarios

### On non-public pages
Any 'non-public' page - i.e., a page, post or archive type which the user has determined should *not* appear in search results (e.g., via our Search Appearance settings) - should return `noindex` and `follow` properties, and omit the `googlebot` and `bingbot` tags. E.g.,
`<meta name="robots" content="noindex, follow" />`

### Custom controls per-post/page
Any advanced/custom properties which a user specifies for a given post or page should be returned in the `{{values}}` property, as defined.

If a `noindex` value is set, then the page should be treated as if it is *non-public* (see above).

### Error templates
No robots tag should be output on `4xx` and `5xx` templates.

### Resolving conflict
In the case of opposing directives, the most restrictive setting should always take precedence, using the following rules:

* `noindex` over `index`.
* `nofollow` over `follow`.
* `none` over `nofollow` OR `noindex`.

E.g., a combination of `index`, `noindex`, `noimageindex` and `follow` values should result in an output of `noindex, noimageindex, follow` (as `noindex` is more restrictive than `index`, but the other tags are unrelated to each other).
