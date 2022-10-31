---
id: functional-specification
title: "Indexables - Functional specification"
image: https://yoast.com/shared-assets/opengraph/?title=Yoast%20SEO:NEWLINEHTTP%20HeadersNEWLINEFunctional%20specification
sidebar_label: Indexables
description: An overview of how Indexables work in Yoast SEO.
---
Yoast SEO's "Indexables" framework provides an abstraction layer for interacting with post metadata relating to SEO.

## A page-centric model of the web
A large part of what our software does is store, manage, and evaluate information relating to _pages_. Each of these pages has a unique ([canonical](https://developer.yoast.com/features/seo-tags/canonical-urls/functional-specification/)) _URL_.

This is how most search engines and systems 'think' about the web. They build a _map_ of all the pages they know about, based on their URLs. We do the same thing. When we have that map, we can easily check, update, and manage information about a given page.

On the surface, this seems like a straightforward concept. But words like 'page' have hidden complexity and nuance - especially in the context of WordPress.

For example, in WordPress, posts stored in the database _don't get stored with a URL_. Every time the system needs to know the URL of a page, it has to be _calculated_ (based on the user-defined URL structure settings for the site). That's computationally expensive.

But processing overheads aren't the only challenge here - there are also scenarios where it's not clear what we mean by 'page'.

### But what's a page?  
Beyond what we might concieve to be a conventional 'page' on a website, we might also have _archive_ views (e.g., all posts published by a given author), _alternate content_ formats (e.g., RSS feeds), _taxonomies_ (e.g., tags and categories) _error templates_ (e.g., 404 pages), _paginated_ results, and other esoteric types of content. These are all 'pages', as far as search engines are concerned.

From an SEO perspective, each of these scenarios must be handled differently - each with its own rules and conditions. Even a simple blog post may have _dozens_ of values that we need to consider and evaluate. These range from crawling and indexing controls, to content evaluation scores, keywords, presentation settings, media, and beyond. We must consider all of these fields and the relationships between them, in the process of determining what SEO metadata should be output on the page.

For example, simply determining the appropriate [canonical URL](https://developer.yoast.com/features/seo-tags/canonical-urls/functional-specification/) of a page requires extensive querying and evaluation.

For larger sites, all of that logic, storage, and processing can impact performance - particularly in WordPress, where the database structure isn't designed or optimized for this kind of requirement.

Furthermore, websites contain many 'pages' which we _don't_ want to evaluate for SEO purposes. Some content types may exist within the system (eg., to be used solely within an admin view), but are never exposed on a public URL. It doesn't make sense for us to store and process information about these, because they're not _indexable_ by search engines.

Knowing what _is_ and _isn't_ an _indexable_ is key to performant metadata management.

### What's an indexable?
An _indexable_ is any resource that can (theoretically) be _indexed_ by a search engine, against a given URL. That includes many content types beyond just 'pages' - like categories, author archives, paginated states of date archives, media files, and more.

Examples:

* https://www.example.com/example-page/ - A conventional webpage.
* https://www.example.com/example-category/page/2/ - A paginated state of a category archive.
* https://www.example.com/2018/10/20/ - A date archive.
* https://www.example.com/author/laura/ - An author archive.
* https://www.example.com/colors/red/ - A custom taxonomy term archive.

NB, we intentionally _exclude_ any non-public pages, as well as pages which return errors.

## Yoast SEO's Indexables table(s) in WordPress
Yoast SEO creates and manages indexables in WordPress with a dedicated database table. This stores all of the information we might need from an SEO perspective, about every indexable we know about. That means that when we want to query a given page to determine what the SEO metadata should be, we can do so extremely efficiently.

This process operates silently in the background, and seamlessly syncronises with WordPress' native metadata fields and processes. 

The table also automatically populates and updates itself. When we encounter an indexable that we _don't_ know about, we create a new record, so that the data is available on subsequent requests. We also provide a (re)indexing process in our admin tools, which proactively builds our indexables table from the site's database.

With the indexables table in place, we have an 'SEO-centric' view of the website, which is focused on _pages_ (and the metadata which should be output on them).

### Indexing
Our indexables table is constructed and maintained via two methods:

* Various optimization processes in the Yoast SEO interface will prompt users to undertake an 'indexing' process, as a prerequiste for various tools and controls.
* Requests to previously undiscovered indexables will trigger a lazy generation process.

These processes ensure that the indexables table is always a complete and accurate representation of the site.

### What types of indexables does Yoast SEO store?
Types of indexables we store include:

* All public* posts and taxonomies
* The homepage
* Author archives (for authors with published, public posts)

We also store several 'patterns' which represent _template_ and content types where it isn't valuable or necessary to include discreet indexables for every possible permutation. These include:

* Date archives
* Post type archives
* Error pages
* Search results

*We consider a page to be 'public' when the `public` attribute for the post/taxonomy type is set to `true` in `register_post_type`/`register_taxonomy`.
## Use-cases
When we have a robust understanding of all of the public pages on a site, we can use our database to power functionality and tools. For example:

* When retrieving metadata for a page's `<head>`, we can make a single database request for all of the relevant, pre-calculated fields.
* When constructing in an XML sitemap, we can instantly determine which indexables should or shouldn't be included.
* Other software and systems can easily integrate with, modify, and build on our logic. 

## Altering indexables behavior
Most users won't ever need to interact directly with the indexables table or logic. However, advanced users may wish to customize the behaviour to fit their needs.
To enable this, we provide a range of filters to alter the default behaviour or interact with the table:

* You can [disable the creation of new indexables](https://developer.yoast.com/customization/yoast-seo/filters/filtering-yoast-seo-indexables/).
* You can exclude a specific _post type_ (by filtering an array of excluded types) via `wpseo_indexable_excluded_post_types`.
* You can exclude a specific _taxonomy type_ (by filtering an array of excluded types) via `wpseo_indexable_excluded_taxonomies`.
* You [force a (re)indexing process](https://developer.yoast.com/features/wp-cli/reindex-indexables/) via WP CLI.

