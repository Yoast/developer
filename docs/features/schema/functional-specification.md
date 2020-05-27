---
id: functional-specification
title: Schema - Specification
sidebar_label: Specification
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/specification.md
description: This page describes our functional and technical approach to constructing schema.org markup.
---
import YoastSchemaExample from '../../../../developer-site/src/components/YoastSchemaExample';

The core of our approach is to output a "base script" - a `@graph` object rendered in `JSON-LD` - which describes the `WebPage`, the `WebSite`, and the `Organization` (or `Person`, in the case of a website which represents an individual). This is included on every page of a website running the [Yoast SEO plugin](https://yoast.com/wordpress/plugins/seo/) .

On any given page, the graph may be altered and/or extended to reflect the specific *type* of web page and its attributes. For any given scenario, we aim to identify the 'main entity' of the page, and to develop the graph to represent this entity (see '[Primary entities](technology-approach.md#primary-entities)').

All markup, properties and attributes are drawn directly from [schema.org](https://schema.org/), and (other than the *base script* below) all code provided is for demonstrative purposes only.

## The base script
The following is a simplified representation of the graph which we construct on each page.

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "Organization",
              "@id": "https://www.example.com/#/schema/organization/abc123",
              "url": "https://www.example.com/#/schema/organization/",
              "name": "Example organization name"
          },
          {
              "@type": "WebSite",
              "@id": "https://www.example.com/#/schema/website/abc123",
              "url": "https://www.example.com/",
              "name": "Example website",
              "publisher": {
                  "@id": "https://www.example.com/#/schema/organization/abc123"
              }
          },
          {
              "@type": "WebPage",
              "@id": "https://www.example.com/example-page/test/",
              "url": "https://www.example.com/example-page/test/",
              "name": "Example page name",
              "description": "Example page description",
              "isPartOf": {
                  "@id": "https://www.example.com/#/schema/website/abc123"
              }
          }
      ]
}`}
</YoastSchemaExample>

What makes this different from most approaches to schema markup is that, rather than trying to construct a complex 'tree' (i.e., an array of nested properties), we output a distinct, top-level 'piece' (a 'node', in technical terms) for each distinct entity. These pieces are contained in one or more `@graph` objects, which enables us to cross-references pieces by ID. See '[Exploring IDs, relationships and nesting](technology-approach.md#ids-relationships-and-nesting)' for more information on this approach.

Observe that, when testing in Google's Structured Data Testing Tool, the result is a single, cohesive graph which features the main entity (in this case, the `WebPage`) as the primary focus. Conventional approaches will display each individual *piece*, but don't 'stitch' these together into a single graph.

## Example graphs
The following examples demonstrate how our base script may be extended and altered to support different scenarios. Regardless of circumstance, we always aim to represent the 'main entity' of the web page in question (and its attributes), and, its relationship to the website and organization (or person) who published that page.

### A company homepage
<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "Organization",
              "@id": "https://www.example.com/#/schema/organization/abc123",
              "name": "Example Orgnaization",
              "url": "https://www.example.com/",
              "sameAs": [
                  "https://www.facebook.com/example/",
                  "https://www.instagram.com/example/",
                  "https://www.linkedin.com/example/",
                  "https://www.youtube.com/example/",
                  "https://www.pinterest.com/example/",
                  "https://en.wikipedia.org/wikiexample/",
                  "https://twitter.com/example/"
              ],
              "logo": {
                  "@type": "ImageObject",
                  "@id": "https://www.example.com/#/schema/image/abc123",
                  "url": "https://www.example.com/images/example.jpg",
                  "width": 120,
                  "height": 120,
                  "caption": "Example Image"
              },
              "image": {
                  "@id": "https://www.example.com/#/schema/image/abc123"
              }
          },
          {
              "@type": "WebSite",
              "@id": "https://www.example.com/#/schema/website/abc123",
              "url": "https://www.example.com/",
              "name": "Example Website",
              "publisher": {
                  "@id": "https://www.example.com/#/schema/organization/abc123"
              },
              "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.example.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
              }
          },
          {
              "@type": "WebPage",
              "@id": "https://www.example.com/",
              "url": "https://www.example.com/",
              "inLanguage": "en-US",
              "name": "Example Page",
              "isPartOf": {
                  "@id": "https://www.example.com/#/schema/website/abc123"
              },
              "about": {
                  "@id": "https://www.example.com/#/schema/organization/abc123"
              },
              "datePublished": "2015-09-14T08:13:22+00:00",
              "dateModified": "2019-03-28T12:46:37+00:00",
              "description": "Example description"
          }
      ]
  }`}
</YoastSchemaExample>

### An article, with an author, on a company website
<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "Organization",
              "@id": "https://www.example.com/#/schema/organization/abc123",
              "name": "Example Orgnaization",
              "url": "https://www.example.com/",
              "sameAs": [
                  "https://www.facebook.com/example/",
                  "https://www.instagram.com/example/",
                  "https://www.linkedin.com/example/",
                  "https://www.youtube.com/example/",
                  "https://www.pinterest.com/example/",
                  "https://en.wikipedia.org/wikiexample/",
                  "https://twitter.com/example/"
              ],
              "logo": {
                  "@type": "ImageObject",
                  "@id": "https://www.example.com/#/schema/image/abc123",
                  "url": "https://www.example.com/images/example.jpg",
                  "width": 120,
                  "height": 120,
                  "caption": "Example Image"
              },
              "image": {
                  "@id": "https://www.example.com/#/schema/image/abc123"
              }
          },
          {
              "@type": "WebSite",
              "@id": "https://www.example.com/#/schema/website/abc123",
              "url": "https://www.example.com/",
              "name": "Example Website",
              "publisher": {
                  "@id": "https://www.example.com/#/schema/organization/abc123"
              },
              "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.example.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
              }
          },
          {
              "@type": "WebPage",
              "@id": "https://www.example.com/blog/example-article/",
              "url": "https://www.example.com/blog/example-article/",
              "inLanguage": "en-US",
              "breadcrumb": {
                  "@id": "https://www.example.com/blog/example-article/#/schema/breadcrumb/abc123"
              },
              "name": "Example Page",
              "isPartOf": {
                  "@id": "https://www.example.com/#/schema/website/abc123"
              },
              "datePublished": "2015-09-14T08:13:22+00:00",
              "dateModified": "2019-03-28T12:46:37+00:00",
              "description": "Example description"
          },
          {
              "@type": "Article",
              "@id": "https://www.example.com/blog/example-article/#/schema/article/abc123",
              "headline": "Example article headline",
              "description": "Example article description",
              "isPartOf": {
                  "@id": "https://www.example.com/blog/example-article/"
              },
              "mainEntityOfPage": {
                  "@id": "https://www.example.com/blog/example-article/"
              },
              "datePublished": "2019-07-10T08:08:40+00:00",
              "dateModified": "2019-07-10T08:43:03+00:00",
              "commentCount": 6,
              "articleSection": "Cats,Dogs,Recipes",
              "author": {
                  "@id": "https://www.example.com/#/schema/person/abc123"
              },
              "publisher": {
                  "@id": "https://www.example.com/#/schema/organization/abc123"
              },
              "image": [
                  {
                      "@id": "https://www.example.com/#/schema/image/abc123"
                  },
                  {
                      "@id": "https://www.example.com/#/schema/image/def456"
                  }
              ],
              "video": [
                  {
                      "@id": "https://www.example.com/#/schema/video/abc123"
                  },
                  {
                      "@id": "https://www.example.com/#/schema/video/def456"
                  }
              ]
          },
          {
              "@type": "Person",
              "@id": "https://www.example.com/#/schema/person/abc123",
              "name": "Example person name",
              "image": {
                  "@id": "https://www.example.com/#/schema/image/abc123"
              },
              "sameAs": [
                  "https://www.wikipedia.com/example-organization",
                  "https://www.linkedin.com/company/1234"
              ]
          },
          {
              "@type": "BreadcrumbList",
              "@id": "https://www.example.com/blog/example-article/#/schema/breadcrumb/abc123",
              "itemListElement": [
                  {
                      "@type": "ListItem",
                      "position": 1,
                      "item": {
                          "@type": "WebPage",
                          "@id": "https://www.example.com/",
                          "url": "https://www.example.com/",
                          "name": "Home"
                      }
                  },
                  {
                      "@type": "ListItem",
                      "position": 2,
                      "item": {
                          "@type": "WebPage",
                          "@id": "https://www.example.com/blog/",
                          "url": "https://www.example.com/blog/",
                          "name": "Example page"
                      }
                  },
                  {
                      "@type": "ListItem",
                      "position": 3,
                      "item": {
                          "@type": "WebPage",
                          "@id": "https://www.example.com/blog/example-article/",
                          "name": "Example Page"
                      }
                  }
              ]
          }
      ]
  }`}
</YoastSchemaExample>

### A product in a WooCommerce store
Note that these are actually two separate graph blocks in reality, that are stitched together. The result when parsing however is the same.

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "Organization",
              "@id": "https://www.example.com/#/schema/organization/abc123",
              "name": "Example Orgnaization",
              "url": "https://www.example.com/",
              "sameAs": [
                  "https://www.facebook.com/example/",
                  "https://www.instagram.com/example/",
                  "https://www.linkedin.com/example/",
                  "https://www.youtube.com/example/",
                  "https://www.pinterest.com/example/",
                  "https://en.wikipedia.org/wikiexample/",
                  "https://twitter.com/example/"
              ],
              "logo": {
                  "@type": "ImageObject",
                  "@id": "https://www.example.com/#/schema/image/abc123",
                  "url": "https://www.example.com/images/example.jpg",
                  "width": 120,
                  "height": 120,
                  "caption": "Example Image"
              },
              "image": {
                  "@id": "https://www.example.com/#/schema/image/abc123"
              }
          },
          {
              "@type": "WebSite",
              "@id": "https://www.example.com/#/schema/website/abc123",
              "url": "https://www.example.com/",
              "name": "Example Website",
              "publisher": {
                  "@id": "https://www.example.com/#/schema/organization/abc123"
              },
              "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.example.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
              }
          },
          {
              "@type": [
                  "WebPage",
                  "ItemPage"
              ],
              "@id": "https://www.example.com/products/example-page/",
              "url": "https://www.example.com/products/example-page/",
              "inLanguage": "en-US",
              "breadcrumb": {
                  "@id": "https://www.example.com/products/example-page/#/schema/breadcrumb/abc123"
              },
              "name": "Example Product Page",
              "isPartOf": {
                  "@id": "https://www.example.com/#/schema/website/abc123"
              },
              "datePublished": "2015-09-14T08:13:22+00:00",
              "dateModified": "2019-03-28T12:46:37+00:00",
              "description": "Example description"
          },
          {
              "@type": "BreadcrumbList",
              "@id": "https://www.example.com/products/example-page/#/schema/breadcrumb/abc123",
              "itemListElement": [
                  {
                      "@type": "ListItem",
                      "position": 1,
                      "item": {
                          "@type": "WebPage",
                          "@id": "https://www.example.com/",
                          "url": "https://www.example.com/",
                          "name": "Home"
                      }
                  },
                  {
                      "@type": "ListItem",
                      "position": 2,
                      "item": {
                          "@type": "WebPage",
                          "@id": "https://www.example.com/products/",
                          "url": "https://www.example.com/products/",
                          "name": "Example page"
                      }
                  },
                  {
                      "@type": "ListItem",
                      "position": 3,
                      "item": {
                          "@type": "WebPage",
                          "@id": "https://www.example.com/products/example-page/",
                          "name": "Example Product Page"
                      }
                  }
              ]
          },
          {
              "@type": "Product",
              "@id": "https://www.example.com/#/schema/product/abc123",
              "name": "Vneck Tshirt",
              "image": {
                  "@id": "https://www.example.com/#/schema/image/abc123"
              },
              "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
              "sku": 83,
              "offers": [
                  {
                      "@type": "Offer",
                      "price": "18.00",
                      "priceValidUntil": "2020-12-31",
                      "priceSpecification": {
                          "price": "18.00",
                          "priceCurrency": "EUR",
                          "valueAddedTaxIncluded": "false"
                      },
                      "priceCurrency": "EUR",
                      "availability": "https://schema.org/InStock",
                      "url": "https://www.example.com/products/example-page/",
                      "seller": {
                          "@id": "https://www.example.com/#/schema/organization/abc123"
                      }
                  }
              ],
              "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.50",
                  "reviewCount": 2
              },
              "review": [
                  {
                      "@id": "https://www.example.com/#/schema/review/abc123",
                      "datePublished": "2019-04-09T09:10:12+00:00",
                      "description": "What a nice turtle shirt.",
                      "reviewRating": {
                          "@type": "Rating",
                          "ratingValue": "4"
                      },
                      "author": {
                          "@type": "Person",
                          "name": "Tim"
                      }
                  },
                  {
                      "@id": "https://www.example.com/#/schema/review/def456",
                      "datePublished": "2019-04-09T09:10:29+00:00",
                      "description": "Awesome shirt",
                      "reviewRating": {
                          "@type": "Rating",
                          "ratingValue": "5"
                      },
                      "author": {
                          "@type": "Person",
                          "name": "Patrice"
                      }
                  }
              ],
              "brand": {
                  "@type": "Organization",
                  "name": "Turtle"
              },
              "mainEntityOfPage": {
                  "@id": "https://www.example.com/products/example-page/"
              },
              "manufacturer": {
                  "@type": "Organization",
                  "name": "Turtle"
              }
          }
      ]
  }`}
</YoastSchemaExample>

### Other examples
Our [technical documentation](overview.md) contains more extensive and varied examples, as well details on how [Yoast SEO software](https://yoast.com/wordpress/plugins/seo/) determines what to output in various scenarios.

## Altering or extending our graphs
All of our output can be altered, extended or disabled (by *piece* or in totality) via a full API. The documentation for this is available [here](api.md).

In scenarios where third-party plugins, themes or systems result in 'un-stitching' of the graph, duplicate/conflated properties, or shared ID spaces, we recommend adopting our framework and [utilizing our APIs](api.md) (or encouraging the relevant solution authors to do so).

## Use in Yoast software
This specification forms the basis of our [schema.org](http://schema.org/) / JSON-LD output from [Yoast SEO](https://yoast.com/wordpress/plugins/seo/) version 11.0 onwards. Specific information on how our software utilizes and extends this specification can be found [here](overview.md) .

## Support and feedback
This spec is a continual work in progress, and, we're always keen to assist others in adoption, extension or refinement. If you have questions about the mechanics described here, or if you'd like to apply the spec to your own theme/plugin(s), feel free to create an issue on [our GitHub repository](https://github.com/Yoast/wordpress-seo/).

Don't forget that we also have [technical documentation](overview.md), and [an API for modifying our schema output](api.md)!

## Appendix

### 1: JSON-LD vs other standards
On the surface, JSON-LD's requirement to output a single, static snippet of code in the template may seem limited, compared to the flexibility of *inlining* provided by alternative methods (e.g., RDFa or Microdata). However, as use-cases increase in complexity, it becomes quickly apparent that approaches based on inlining lack the flexibility and scalability which we require. Specifically:

* They're tied to the structure of the page's HTML markup. That means that it's hard to represent structures and entities whose properties don't align perfectly to the page's layout, and often, representing meta properties or linked data requires inlining of hidden properties and meta tags.
* They do a poor job of handling the complexity of relationships. If *entity A* shares or inherits a property with *entity B*, or is a child of *entity C*, there's no easy way to represent this. There's also no easy way to reverse the direction of relationship declarations.
* Not all entities can be easily represented by a neat hierarchy, which can align to the HTML markup of a template. For example, correctly positioning the *main content* of a `WebPage`  which contains an `Article`  - which is published by an `Organization` on a `WebSite`, and which has an `Author`  and other attributes - as the explicit centre of a network graph, isn't always easy when working with linear, nested markup. There's an amount of cross-linking and relationship referencing required to abstract away from the page's code structure.
* Even if you can overcome all of this, it's hard to universally integrate into all of the individual templates of websites where the schema is required - businesses and users will utilize a variety of templates, themes, markups, plugins, coding techniques and processes - making it incredibly difficult to rely on maintaining valid markup. In the WordPress world, at least, we can't guarantee that themes and plugins will be able to reliably and cleanly communicate, integrate and structure inline markup.

As we're attempting to maximize flexibility and interoperability, in this context, JSON-LD is a clear winner.

#### 1a: Avoiding content duplication via CSS/XPath selection
One of the main objections to JSON-LD as a format is that it can result in duplication of (large chunks of) content. For example, if I wish to represent a *review*, I must include the entire review content in the page's 'human' readable content, as well as in the JSON markup (at least, according to Google's structured data requirements).

This is often perceived as a performance concern, and, rightly so. Even with GZIP enabled and configured (which, we can't assume will always be the case), this can cause (albeit minor) overheads on server responses and browser processing.

In the future, we hope to be able to bypass this issue by using [schema.org](http://schema.org) 's [CssSelectorType](https://pending.schema.org/CssSelectorType) or [XPathType](https://pending.schema.org/XPathType) markup. This allows us to target specific containers (or composites/arrays of containers) which represent the content in question, rather than duplicating the text. At the moment, this only supports `webPageElement` and `Speakable` content areas.

Until these targeting methods achieve greater support, content should only be duplicated when explicitly required by search engines and external agents. These scenarios are reflected in this document.

### 2: Use of tag management solutions and JavaScript injection
We prefer the JSON-LD markup to be included and rendered server-side, rather than being injected via a tag management solution or JavaScript file/function. Additionally, whenever possible, all attribute values should be 'hard-coded' into the graph, rather than referencing/calling functions or variables from elsewhere.

The computational cost of crawling, processing and utilizing values injected by JavaScript is significantly higher and more complex than just scraping HTML, and as a result, many platforms offer only partial (if any) support for an approach which relies heavily on JavaScript.

Approaches which rely on external scripts and platforms - such as tag management systems - can also introduce fragility in the form of conflicts, race conditions, latency and dependency management.

### 3. Handling images
Throughout the examples in this document, we generally make a few assumptions about images:

* Even though the core [schema.org](https://schema.org) definitions don't always list image as a required attribute of a piece, Google *does* frequently require an image for almost all piece types (i.e., eligibility for their 'rich snippets' and similar experiences almost always require pages, blog posts, products and other piece entities to have at least one image). **Assume that anywhere where we've included an image parameter, it should be considered to be mandatory.**
* All image properties should be registered as arrays of `imageObject`  entities, so as to be able to set advanced properties (like caption) where feasible, and to be able to inherit/share images across pieces via ID. This enables ease of sharing of images between related pieces (e.g., where the main/featured image of a `blogPosting`  is often likely to be the same entity as the `primaryImageOfPage`  of the page where the blog post resides).
* Size and format constraints vary by agent, but, common sense should be applied.

### 4. Using canonical URLs
`url` attributes should always inherit from the 'true canonical' value of the page where the JSON snippet resides (i.e., if the canonical URL tag has been manually set to reference a different page/URL, the original 'true' canonical value should be used).

For example, if *Page A* has a URL of [https://www.example.com/page-a/](https://www.example.com/page-A/), but includes a canonical URL tag which references *Page B* (at [https://www.example.com/page-b/](https://www.example.com/page-b/) ), then all `url`  parameters which would normally relate to *Page A* should continue to use *Page A* 's 'true' canonical URL.

### 5. Validation tools
We rely heavily on [Google's Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/u/0/) (or 'SDTT') to evaluate and debug our approach. While other tools exist, we've found that this one consistently provides the most sophisticated parsing, error handling and feedback. Also, as the primary consumer of our structured markup, it makes sense that we position feedback from Google's own tool as our single version of the truth.

That's not to say, however, that it's not without issues, and that we agree completely with their interpretation of schema.org's standards. Read on to explore our  *known issues*.

### 6. Known issues
There are a number of scenarios where the SDTT deviates from the schema.org definitions. In some cases, we've adapted or compromised our approach to find a solution which applies to both - in others, we've swayed in favor of one or the other, depending on the context.

For example, the SDTT requires that a `recipe`  has an `image`. This isn't a mandatory attribute according to [the schema.org recipe specification](https://schema.org/Recipe), but Google requires it. There are many scenarios like this, where the SDTT reveals Google-specific idiosyncrasies and requirements which are either the product of deliberate 'bending' of the standards to fit their needs, or of somewhat arbitrary decision-making.

The following are specific scenarios where our approach causes conflicts and issues, where we're petitioning to alter how Google interpret and process our markup.

#### A `Person`  cannot be the `Publisher`  of an `Article`
This is a particularly challenging issue, as a `WebSite` which represents a `Person` (as opposed to one which represents an `Organization`; i.e., a personal website) will naturally 'publish' articles where that `Person` should be considered to be the 'publisher'. This is an extremely common use-case, but one which the STDD flags as invalid.

Additionally, a critical piece of our graph approach relies on identifying the connection between a `WebPage` (or an `Article`) and the `WebSite`  on which it resides. The `Publisher`  is the key connection between these entities, and so, **we've chosen to ignore the error in this case** (but have alerted Google to it).

To work around this, we merge the `Person`  with an `Organization`  to create a hybrid type ( `[Person, Organization]` ), which then expects/accepts a `logo`  and other 'Publisher' properties. This validates in the SDTT, but, is an acknowledged 'hack'.

#### The SDTT often prefers an array of properties, rather than an `itemList`
E.g., an array of individual `reviews` must occupy a `review` property, rather than being contained in a `reviews` property. This pattern of 'an array of multiple things in a singular property' is common throughout their requirements. We believe is less semantically rich, and less flexible than alternative approaches.

We'd typically prefer to use a container as a parent to these items, as this can then be cross-referenced via ID elsewhere. Placing arrays like this into an `itemList` is valid schema, but the SDTT returns validation errors in many cases where this is used. We vary our approach in these types of scenario, based on how critical it is for us to have a 'parent' element with an addressable ID.

### 7. Other consumers
At the time of publishing, it appears that Bing does not support this approach; their 'Markup Validator' tool (part of [Bing Webmaster Tools](https://www.bing.com/toolbox/webmaster)) does not detect (and/or parse) markup contained within a `@graph` structure (which forms the backbone of our approach). We're seeking to engage in dialogue with Bing to determine their stance on support.

Social platforms like Facebook, Twitter, Pinterest, etc, have varying levels of support for this markup. Most rely on *Open Graph* markup *(*'OG tags') and similar, but may use components of schema.org markup when OG tags are missing or invalid.

The support of other search engines (e.g., Baidu, Yandex, others) is unknown; it's our assumption that support will generated be limited, or not exist. We hope that the broad adoption of our approach will encourage these, and other consumers, to expand their support.
