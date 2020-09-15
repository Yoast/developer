---
id: technology-approach
title: Schema - Technology and approach
sidebar_label: Technology & approach
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/technology-approach.md
description: An overview of some of the technical choices and standards used in our schema.org outputs.
---
import YoastSchemaExample from '../../../../developer-site/src/components/YoastSchemaExample';

## JSON-LD as a preferred format
Structured markup can be implemented in a number of ways, and via a number of different standards. We're particularly interested in the standards defined by [schema.org](https://schema.org/) , given Google's close adherence to their specifications.

[Schema.org](http://schema.org/) markup can be added to web pages in a number of ways. Of all of the available approaches, **we believe that including JSON-LD in the HTML source code of the page is the best (current) approach**.

JSON-LD provides the flexibility, scalability, and standardization we require to achieve a consistent and extensible foundation. While it lacks some of the potential benefits of 'inlining' (where structured markup is implemented directly as part of the HTML code representing those entities), its strengths, flexibility and scalability far outweigh these limitations.

## IDs, relationships and nesting
JSON-LD allows properties to reference other pieces by their *ID*. For example, a *product page* needn't include (or repeat) all of the markup for the *organization* which sells that product, if it can just reference the ID of a piece which represents that *organization*.
In theory, this allows us to avoid having to duplicate or repeat shared properties, and to reduce the amount of code/processing/overhead required to represent a page's content.

Unfortunately, the level of  *cross-page* support for this technique is limited - Google's documentation is vague, and there's ambiguity around the relationship between IDs and URIs (anecdotally, they "can't extract structured data from other pages" [*verbatim*]). Given this constraint, we require that every page output all of the relevant pieces, and cross-reference these through `hasPart`, `isPartOf`, `mainEntityOfPage` and similar lookup mechanisms.

E.g., the following (simplified) JSON snippet defines an `Organization`, and references that `Organization` as the `Publisher` of a `Website`:

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "Organization",
              "@id": "https://www.example.com/#/schema/organization/1",
              "url": "https://www.example.com/",
              "name": "Example organization name"
          },
          {
              "@type": "WebSite",
              "@id": "https://www.example.com/#/schema/website/1",
              "url": "https://www.example.com/",
              "name": "Example website",
              "publisher": {
                  "@id": "https://www.example.com/#/schema/organization/1"
              }
          }
      ]
  }`}
</YoastSchemaExample>

In this example, we know that the `publisher` of the website is the same as the `Organization`. And because we already have a top-level piece in the graph representing that `Organization`, we can simply reference it by its `@id` in the `WebSite` piece. This provides enormous flexibility, and prevents us from repeating ourselves.

Given this capability, we prefer to avoid deep nesting of properties whenever possible and prefer to break out individual pieces, as in the examples which follow. This keeps the code readable, modularized, and extensible.

### Constructing ID parameters
ID parameters should always adopt the following structure:

`{{website}}{{slug}}/#/schema/{{type}}/{{ID}}` (e.g., `https://www.example.com/#/schema/image/abc123`).

[Pieces](https://developer.yoast.com/features/schema/pieces/) may be either *local* or *global*. Local pieces are explicitly related/connect to a WebPage and only exist in the context of page content, whereas global pieces may exist independently of page content.

For example, a [HowTo](https://developer.yoast.com/features/schema/pieces/howto/) piece is an explicit child of the [WebPage](https://developer.yoast.com/features/schema/pieces/webpage/) (or [Article](https://developer.yoast.com/features/schema/pieces/article/)) within which it resides. A [Person](https://developer.yoast.com/features/schema/pieces/person/) or an [image](https://developer.yoast.com/features/schema/pieces/image/), however, exists independently of a [WebPage](https://developer.yoast.com/features/schema/pieces/webpage/) or [Article](https://developer.yoast.com/features/schema/pieces/article/) which references it.

Local pieces should include the `{{slug}}` component. Global pieces should not.

**Example global pieces:**
* `https://www.example.com/#/schema/organization/abc123`
* `https://www.example.com/#/schema/image/abc123`
* `https://www.example.com/#/schema/person/abc123`
* `https://www.example.com/#/schema/location/abc123`
* `https://www.example.com/#/schema/address/abc123`
* `https://www.example.com/#/schema/website/abc123`
* `https://www.example.com/#/schema/product/abc123`
* `https://www.example.com/#/schema/offer/abc123`

**Example local pieces:**
* `https://www.example.com/example-page/#/schema/article/abc123`
* `https://www.example.com/example-category/example-post/#/schema/breadcrumb/abc123`
* `https://www.example.com/example-category/example-post/#/schema/howto/abc123`
* `https://www.example.com/example-category-2/example-post-2/#/schema/itemlist/abc123`

See the relevant [pieces documentation](pieces.md) in each case for the correct structure (where defined).

**Notes:**
* `website` is the `protocol` + `hostname` of the site (e.g., `https://www.example.com`).
* `type` should always be forced to lowercase, and all spaces/delimiters removed.
* `slug` is the page/request path (e.g., `/example-category/example-post/`).

### `{{identifier}}` composition
The `{{identifier}}` parameter should always be constructed using the following cascade:

* A globally unique, stable system ID (e.g., the database ID of an `image`).
* A globally unique, stable ID synthesized from context (e.g., `abc123-3` for the third `offer` associated with a `product` having ID `abc123`).
* A sequential integer local to the `WebPage` in which the entity resides (e.g., `4` for the fourth `itemlist` on a given page).

### Exceptions
These are also documented in their various [pieces documentation](https://developer.yoast.com/features/schema/pieces/), but bear repeating here.

* The ID of a `WebPage` should always be the unmodified canonical URL of the page (i.e. the *permalink*).
* The `{{identifier}}` fragment of the `Organization` which represents the site should always be `1` (e.g., https://www.example.com/#/schema/organization/1).
* The `{{identifier}}` fragment of the `WebSite` which represents "this site" should always be `1` (e.g., https://www.example.com/#/schema/website/1).
* The `{{identifier}}` fragment of a `person` should always be obfuscated.

### Hybrid types & composite IDs
When the node is a hybrid type (i.e., `@type` is an array of values, such as `['Organization', 'Person']`), then:

* The `{{type}}` value should concatenate the `@type` values in alphabetical order, separated by a hyphen (e.g., `organization-person`), and;
* The `{{identifier}}`value should concatenate the `{{identifier}}` values from each member, in alphabetical order by `@type` (e.g., `1-abc123` for an `organization` with ID `1` and a `person` with ID `abc123`).

## Primary entities
Our model assumes that every URL should represent a *primary entity*- be it an organization, a product, a blog post (or collection of blog posts), a person, or some other *thing*.

We always aim for that 'primary entity' to be at the centre of the network graph on each page. This mental model aligns closely to how we want search engines to understand our networks; it allows us to articulate our content in ways such as, "This *URL* represents a `Recipe`, which is part of an `Article`, which was written by a `Person`, on a `WebPage`, which is part of a `WebSite`, which is operated by an `Organization`".

The code examples throughout this document reflect this approach; we constructs directional relationships between entities with the use of `hasPart`, `isPartOf`, `mainEntityOfPage` and similar connections.

## Code fragmentation & placement
Sometimes placement in the `<head>` is impossible, for example due to architectural restraints, where a process may be unable to access necessary context while constructing the `<head>`. Given that the `<body>` content may sometimes contain content or logic which should be reflected in the schema, we also allow code to be output at the end of the page, preceding the closing `</body>` tag.

Because we're using `@id` attributes to join pieces, it's technically possible to split and distribute the code throughout the page, through multiple `<script>` tags and graph structures, and to simply cross-reference entities via their IDs as per the approach outlined in this document. It's also possible to *extend* an existing piece by creating a new reference to it with the same ID, elsewhere in the page.

We generally recommend that system authors attempt to avoid this kind of fragmentation when possible (as it introduces fragility and obfuscation into an already complex system), but, recognize that it's sometimes necessary.

In fact, we use this approach in some of our own solutions when it's not possible to compute and output everything in the `<head>`. For example, our [Yoast WooCommerce SEO plugin](https://yoast.com/wordpress/plugins/yoast-woocommerce-seo/) relies on parsing product information which isn't available during initialization, and so outputs a secondary `<script>` blog in the page's footer which contains additions to the page's graph (specifically, product and review information). This additional graph stitches seamlessly to create a cohesive whole.

## Hybrid types
Sometimes, an object might be two different things. A book, for example, can be a `book` *and* a `product`, and have properties of both. It may have both an `author` and a `price`.

Adding multiple *types* allows for greater flexibility and more precise descriptions of objects.

We use hybrid types sparingly throughout our approach, however, as they can blur the 'focus' of a specific page. If the main entity of a page (or a URL) is a complex, compound type, we risk deviating from our "One URL, one thing" model.
