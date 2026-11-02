---
id: technical-specification
title: "Indexables: Technical specification"
sidebar_label: Technical specification 
description: An overview of how we decide to build indexables for objects.
---

## Introduction

We created indexables for all the indexable objects on your site. All the URLs that a search engine can see. Because of how
WordPress stores content, most of those will be "posts" (pages are considered "posts" in WordPress' data model too). Hence, 
the majority of Indexables on most sites will be posts.

We create some special indexables for things that could otherwise too easily clog up the database. This is specifically true 
for date archives and system pages (search results, 404s). They get one indexable each, that stores our title templates for them
so we can use those on the frontend.

## Which "things" get an indexable?

### Posts

There are quite a few different types of using posts within WordPress. Only those that are publicly viewable should be
considered indexable objects. Of course a post has to _exist_ to be a valid Indexable object.

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'edgeLabelBackground':'#ffffff', 'stroke':'#000'}}}%%
flowchart TD
  Input([Post]) --> PTRegistered{Post <em>type</em> registered?}
  PTRegistered -- Yes --> PTExcluded{Post <em>type</em> excluded<br/><a href='/features/indexables/indexables-filters/#post_types'>through filter</a>?}
  PTRegistered -- No --> NoIndexable([Do <strong>not</strong> create an indexable])
  PTExcluded -- Yes --> PTIncluded{Post <em>type</em> force included<br/><a href='/features/indexables/indexables-filters/#included_post_types'>through filter</a>?}
  PTExcluded -- No --> PTPublic{Is the<br/>post <em>type</em> <code>public</code>?}
  PTPublic -- Yes --> PTAttachment{Is the post<br/><em>type</em> <code>attachment</code>?}
  PTPublic -- No --> PTIncluded
  PTAttachment -- Yes --> AttDisabled{Are <a href='https://yoast.com/features/redirect-attachment-urls/'>attachment URLs<br/> disabled</a> in Yoast SEO?}
  AttDisabled -- Yes --> PTIncluded
  AttDisabled -- No --> PSRegistered{Post <em>status</em> registered?}
  PTAttachment -- No --> PSRegistered
  PSRegistered -- No --> NoIndexable
  PSRegistered -- Yes --> PSPublic{Is the post<br/><em>status</em> <code>public</code>?}
  PSPublic -- No --> IncludedNonPublishPostStatus{Post <em>status</em> one of:<br/><code>draft</code>, <code>pending</code>, <code>future</code>?}
  PTIncluded -- No --> NoIndexable
  PTIncluded -- Yes --> CreateIndexable([Create an indexable])
  IncludedNonPublishPostStatus -- No --> NoIndexable
  IncludedNonPublishPostStatus -- Yes --> CreateIndexable
  PSPublic -- Yes --> CreateIndexable
  style Input fill:#ddf,stroke:#aaf,stroke-width:2px
  style NoIndexable fill:#ffcccc,stroke:#f00,stroke-width:2px
  style CreateIndexable fill:#ccffcc,stroke:#0f0,stroke-width:2px
```

### Post type archives

A post type archive will only have an indexable when the post type it's registered for is public.

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'edgeLabelBackground':'#ffffff', 'stroke':'#000'}}}%%
 flowchart TD
  Input([Post type archive]) --> PTRegistered{Post <em>type</em> registered?}
  PTRegistered == Yes ==>PTPublic{Is the<br/>post <em>type</em> <code>public</code>?}
  PTRegistered -- No -->NoIndexable([Do <strong>not</strong> create an indexable])
  PTPublic == Yes ==>CreateIndexable([Create an indexable])
  PTPublic -- No -->NoIndexable
  style Input fill:#ddf,stroke:#aaf,stroke-width:2px
  style NoIndexable fill:#ffcccc,stroke:#f00,stroke-width:2px
  style CreateIndexable fill:#ccffcc,stroke:#0f0,stroke-width:2px
```

### Terms

A term has to be part of a registered, public taxonomy to be an indexable object.

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'edgeLabelBackground':'#ffffff', 'stroke':'#000'}}}%%
 flowchart TD
  Input([Term]) --> TaxRegistered{<em>Taxonomy</em> registered?}
  TaxRegistered == Yes ==> TaxExcluded{Is the <em>taxonomy</em><br>excluded <a href='/features/indexables/indexables-filters/#taxonomies'>through filter</a>?}
  TaxRegistered -- No -->NoIndexable([Do <strong>not</strong> create an indexable])
  TaxExcluded -- Yes -->NoIndexable
  TaxExcluded == No ==>TaxPublic{Is the<br><em>taxonomy</em> public?}
  TaxPublic == Yes ==>TaxForbidden{Is the<br><em>taxonomy</em> one of:<br/><code>post_format</code>?}
  TaxPublic -- No -->NoIndexable
  TaxForbidden -- Yes -->NoIndexable
  TaxForbidden == No ==>CreateIndexable([Create an indexable])
  style Input fill:#ddf,stroke:#aaf,stroke-width:2px
  style NoIndexable fill:#ffcccc,stroke:#f00,stroke-width:2px
  style CreateIndexable fill:#ccffcc,stroke:#0f0,stroke-width:2px
```

### Users

Only when a user has published posts that are public, do they get an author archive. At that point, they become an indexable object.

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'edgeLabelBackground':'#ffffff', 'stroke':'#000'}}}%%
 flowchart TD
  Input([User]) --> AuthorArchivesDisabled{Are author archives<br/>disabled in Yoast SEO?}
  AuthorArchivesDisabled -- Yes -->NoIndexable([Do <strong>not</strong> create an indexable])
  AuthorArchivesDisabled == No ==>UserHasPosts{Does the user have<br/><em>published, public</em> posts?}
  UserHasPosts == Yes ==>CreateIndexable([Create an indexable])
  UserHasPosts -- No -->NoIndexable
  style Input fill:#ddf,stroke:#aaf,stroke-width:2px
  style NoIndexable fill:#ffcccc,stroke:#f00,stroke-width:2px
  style CreateIndexable fill:#ccffcc,stroke:#0f0,stroke-width:2px
```
