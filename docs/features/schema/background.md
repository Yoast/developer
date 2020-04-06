---
id: background
title: Background information
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/background.md
---
import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.

This section provides information about our approach, rationale, and considerations. It describes the key underlying principles, design decisions, and methodologies.

## Understanding the role of structured markup
Structured markup allows search engines, users and systems to understand the content, context and relationship of entities. It adds meta information about the properties of *things* on web pages and their relationship, which may not be immediately available or easy to parse from the ‘human’ version of the page.

For our purposes, we’re particularly interested in how search engines understand the relationship between a website’s *pages*, the *organization* which operates the website, the *products* they offer, and other related concepts. Structured markup allows us to describe how these entities are connected, and to define their properties.


Including this kind of markup may result in search engines providing additional or enhanced coverage in their results (such as ‘rich listings’), and eligibility for new/emerging features (e.g., ‘Knowledge graph panels’).

Beyond the immediate marketing applications, structured markup will enable future systems, processes and software to *understand* the relationship between entities, and to utilize this understanding to deliver new types of services.

Platforms such as Google, Bing and Facebook are continually rolling out support for new features and formats, which rely on structured markup.

<img src={useBaseUrl( 'img/docs/larry-page.png' )} alt='Knowledge graph panel of Larry Page' />

## Why have we created a new standard/approach?
Many content management systems, platforms, themes and plugins already provide some level of structured markup. However, the implementations are frequently incomplete, inconsistent, conflicting, or incorrect.

While there’s extensive documentation on the possible *structures* and *properties* of entities and their markup (from [schema.org](https://schema.org/) and others), advice and documentation on the *implementation* of schema markup — particularly of the kinds of complex, structured data we need — is limited, and inconsistent.

The documentation that does exist effectively describes how to represent individual *things*, it provides little direction on how to create and maintain a *graph* of entities and their relationships.

As the capabilities of structured markup continue to grow, the lack of standardized approaches to implementation means that most websites are increasingly likely to make mistakes - in the worst cases, leading to Google ignoring, or blacklisting, those sites for eligibility in rich listings.

## The challenges of integration and linking
In particular, systems which rely on multiple moving parts (such as a WordPress website with a third-party theme and/or multiple plugins) already struggle with interoperability - without a shared way of working, developers don’t have an easy way of consistently linking data, cross-referencing entities, or sharing code.

For example, one plugin may add *product* schema, another, *local business* schema. These blobs of markup have no way of reliably communicating or integrating their data. There’s no universal or easy way for these plugins to *declare* their schema, or, to specify that a the *product* in our example is explicitly sold by that particular *local business*, or is *manufactured* by the same *organization* who operates the website.

In most cases, current implementations are limited to declaring the existence of each individual *piece*, but have no way of declaring their *relationships*. They have no shared mechanism to connect their *entities*.

This fragmentation results in markup errors, and/or limits the scalability of a website’s structured data. The ‘linked’ part of *JSON-LD* is hard to achieve without standardization!

## Building on schema.org
Note that, this document doesn’t aim to define, recreate, replace or extend the [schema.org](http://schema.org/) markup, but rather, outlines the underlying principles and conceptual models which should be used when designing and implementing solutions.

The examples herein represent recommended approaches, rather than examples of every possible scenario, with every single variation.

Implementations should build upon these examples, and make liberal use of [schema.org](http://schema.org/) ’s documentation to define or add additional object properties as desired.
