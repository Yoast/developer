---
id: functional-specification
title: "HTTP Headers - Functional specification"
sidebar_label: HTTP headers
description: An overview of how HTTP headers work in Yoast SEO.
---
Yoast SEO constructs and optimizes various HTTP headers, in order to manage indexing, assist with debugging, and compliment other functionality.

## x-robots-tag
It's sometimes desirable to prevent 'non-page' resources (resources like PDFs or XML files, which don't support HTML `<head>` mark-up) from being crawled or indexed by search engines.
When the content management system serves these resources, we can manipulate their HTTP headers to provide crawl and indexing directives via an `x-robots-tag` HTTP header.

We do this in the following cases:
- All XML sitemaps return a `noindex, follow` directive. *NB, this does not affect sitemap consumption or processing.*
- XMLRPC files return a `noindex, follow` directive.

## x-redirected-by
When our redirect manager executes a redirect, we pass a value of 'Yoast SEO Premium' to WordPress' `wp_redirect()` function. This adds a `x-redirected-by` header to the response, which can be helpful when debugging.
