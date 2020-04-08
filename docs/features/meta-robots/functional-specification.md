---
id: functional-specification
title: Functional specification
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/meta-robots/functional-specification.md
---
When a user wishes to proactively restrict the crawling, indexing, or presentation of a page by search engines, we output a meta robots tag in the `<head>` of that page.
The tag takes the following format, where {{values}} may be a single value or a comma-separated list of values.
`<meta name="robots" content="{{values}}" />`
In cases where crawling, indexing and content usage are unrestricted, no tag is output.

## Constructing {{values}}

Given that a meta robots tag may have multiple (potentially conflicting) values, and that multiple overlapping conditions may apply, then:
* All conditions should be evaluated and the resulted tag values combined additively. 
* The final set of values should be de-duplicated and reconciled.
An up-to-date list of all possible meta robots values and their relationships is maintained [here](https://yoast.com/robots-meta-tags/) .

### Conditions
#### Noindex’ing by content type
Any page, post or archive type which the user has determined should *not*appear in search results (e.g., via our Search Appearance settings) should return noindex and follow properties.

#### Custom controls per-post/page
Any advanced/custom properties which a user specifies for a given post or page should be returned as defined.

#### Error templates
No robots tag should be output on 4xx and 5xx templates.

### Resolving conflict
In the case of opposing directives, the most restrictive setting should always take precedence, using the following rules:
* noindex over index OR all.
* nofollow over follow OR all.
* none over nofollow OR noindex.
E.g., a combination of index, noindex, noimageindex and follow values should result in an output of noindex, noimageindex, follow (as noindex is more restrictive than index, but the other tags are unrelated to each other).

## Google-specific properties
In any scenario when a page and/or template is eligible to be indexed (i.e., it does *not* have a noindex or equivalent tag) we output an *additional* meta robots tag with site-wide directives specific to Google. It has the following format and fixed value (unless filtered/disabled):
`<meta name="googlebot" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />`
