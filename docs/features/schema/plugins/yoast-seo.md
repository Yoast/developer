---
id: yoast-seo
title: Schema output for Yoast SEO
sidebar_label: Yoast SEO
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/plugins/yoast-seo.md
description: Describes the schema output of the Yoast SEO plugin for WordPress.
---
import YoastSchemaExample from '../../../../../developer-site/src/components/YoastSchemaExample';

This page documents the [schema.org](https://schema.org/) markup output by the Yoast SEO plugin. More information about our API, integration mechanics, and methodology can be found [here](../overview.md).

## Core logic
Every page should (attempt to) output the following [pieces](../pieces.md):
* [Organization](../pieces/organization.md)
* [WebSite](../pieces/website.md)
* [WebPage](../pieces/webpage.md)

This produces a 'base script', which will typically looks something like the following (a composite of the above *pieces*):

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "Organization",
              "@id": "https://www.example.com/#/schema/organization/1",
              "url": "https://www.example.com/#/schema/organization/",
              "name": "Example organization name",
              "sameAs": [
                  "https://www.wikipedia.com/example-organization",
                  "https://www.linkedin.com/company/1234"
              ],
              "logo": {
                  "@id": "https://www.example.com/#/schema/image/abc123"
              },
              "image": [
                  {
                      "@id": "https://www.example.com/#/schema/image/abc123"
                  },
                  {
                      "@id": "https://www.example.com/#/schema/image/def456"
                  }
              ]
          },
          {
              "@type": "WebSite",
              "@id": "https://www.example.com/#/schema/website/1",
              "url": "https://www.example.com/",
              "name": "Example website",
              "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.example.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
              },
              "publisher": {
                  "@id": "https://www.example.com/#/schema/organization/1"
              }
          },
          {
              "@type": "WebPage",
              "@id": "https://www.example.com/example-page/test/",
              "url": "https://www.example.com/example-page/test/",
              "name": "Example page name",
              "description": "Example page description",
              "keywords": "cats,dogs,cake",
              "isPartOf": {
                  "@id": "https://www.example.com/#/schema/website/1"
              },
              "inLanguage": "en-US",
              "datePublished": "2019-07-10T08:08:40+00:00",
              "dateModified": "2019-07-10T08:43:03+00:00",
              "breadcrumb": {
                  "@id": "https://www.example.com/example-page/#/schema/breadcrumb/abc123"
              },
              "image": [
                  {
                      "@id": "https://www.example.com/#/schema/image/abc123"
                  },
                  {
                      "@id": "https://www.example.com/#/schema/image/def456"
                  }
              ]
          },
          {
              "@type": "BreadcrumbList",
              "@id": "https://www.example.com/example-page/#/schema/breadcrumb/abc123",
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
                          "@id": "https://www.example.com/example-page/test/"
                      }
                  }
              ]
          },
          {
              "@type": "ImageObject",
              "@id": "https://www.example.com/#/schema/image/abc123",
              "url": "https://www.example.com/uploads/example-image.jpg",
              "caption": "Example caption",
              "width": 120,
              "height": 120
          },
          {
              "@type": "ImageObject",
              "@id": "https://www.example.com/#/schema/image/def456",
              "url": "https://www.example.com/uploads/example-image.jpg",
              "caption": "Example caption",
              "width": 120,
              "height": 120
          }
      ]
  }`}
</YoastSchemaExample>

## Additional scenarios
The above base script should be altered or extended in the following scenarios.

### When the website represents a Person
* Add an additional `@type` value of `Person` to the `Organization`.
* Merge the properties of the `Person` into those of the `Organization`.

### On single Posts
* Add an [Article](../pieces/article.md) piece, and connect this to the `WebPage` (via a `mainEntityOfPage` property).

### When a page contains a HowTo block
* Add a [HowTo](../pieces/howto.md) piece, and connect thit to the `WebPage` - or instead to the `Article`, if one is present (via a `mainEntityOfPage` property).

### When a page contains an FAQ block
* Add an additional `@type` value of `FAQPage` to the `WebPage`.
* Add a `mainEntity` property to the `WebPage`, referencing the IDs of each `question` node (in an array).

## More information
* [Article Schema pieces](../pieces/article.md)
* [BreadcrumbList Schema pieces](../pieces/breadcrumb.md)
* [HowTo Schema pieces](../pieces/howto.md)
* [ImageObject Schema pieces](../pieces/image.md)
* [Organization Schema pieces](../pieces/organization.md)
* [Person Schema pieces](../pieces/person.md)
* [Question Schema pieces](../pieces/question.md)
* [WebSite Schema pieces](../pieces/website.md)
* [WebPage Schema pieces](../pieces/webpage.md)
