---
id: website
title: Schema piece - WebSite
sidebar_label: WebSite
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/pieces/website.md
description: Describes a 'WebSite'. Parent to 'WebPage'.
---
import YoastSchemaExample from '../../../../src/components/YoastSchemaExample';

Describes a `WebSite`. Parent to `WebPage`.

## Triggers
Should be output on all public pages.

## Required properties
A valid `WebSite` must have the following properties.

* `@type`: `WebSite`.
* `@id`: The site's home URL appended by `#/schema/WebSite/{{ID}}`, where `{{ID}}` is a globally unique, stable identifier.
  * If the `WebSite` is the website being viewed/consumed (i.e., "*this website*"), then the value of `{{ID}}` should be `1`.
* `url`: The site's home URL (excluding a trailing slash).
* `name`: The name of the website.

### Failure scenarios
If any of the required fields are missing or invalid, the node should not be output.

## Optional properties
The following should be added whenever available and valid:

* `publisher`: A reference-by-ID to the node representing the entity which publishes the `WebSite`.
* `potentialAction`: A `SearchAction` object describing the site's internal search.
* `inLanguage`: The language code for the WebSite; e.g., `en-GB`.
 * If the website is available in multiple languages, then output an array of `inLanguage` values.
* `description`: A description of the website (e.g., the site's tagline).

## Examples

### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "WebSite",
              "@id": "https://www.example.com/#/schema/WebSite/1",
              "url": "https://www.example.com",
              "name": "Example website"
          }
      ]
  }`}
</YoastSchemaExample>

### Extended criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "WebSite",
              "@id": "https://www.example.com/#/schema/WebSite/1",
              "url": "https://www.example.com",
              "name": "Example website",
              "inLanguage": "en-US",
              "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.example.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
              },
              "publisher": {
                  "@id": "https://www.example.com/#/schema/Organization/1"
              }
          }
      ]
  }`}
</YoastSchemaExample>
