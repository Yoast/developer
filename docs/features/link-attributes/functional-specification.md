---
id: functional-specification
title: Link Attributes - Functional specification
sidebar_label: Link attributes
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/link-attributes/functional-specification.md
description: This documentation provides technical information about Yoast SEO manages link attributes.
---
This documentation provides technical information about [Yoast SEO](https://yoast.com/wordpress/plugins/seo/) manages link attributes.

We provide tools which allow users to declare special properties of links within editable content areas, in order to help them adhere to search engine guidelines.

## Search engine guidelines
Search engines typically require that links which are sponsored (or otherwise incentivised) - i.e., those bought/sold, placed in exchange for goods or services, or which are otherwise 'non-organic' - to be disclosed.
To do this, a `rel` (relational) attribute with a value of `nofollow`, `sponsored` or `ugc` must be added to the anchor (`<a>`) tag in question.

Our article, "[What are sponsored, nofollow and ugc links, and why use them?](https://yoast.com/outbound-link-sponsored-nofollow-ugc-attributes/)", describes the difference between these attributes.

## Controls
Yoast SEO provides a UI control for users when placing links, which allows users to select how a link should be treated.

Our help article, "[Which link settings should I use?](https://yoast.com/help/which-link-settings-should-i-use/)" describes these options and their behaviors.
