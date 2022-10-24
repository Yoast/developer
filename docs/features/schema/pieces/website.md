---
id: website
title: "Schema piece - WebSite"
sidebar_label: WebSite
description: Describes a 'WebSite'. Parent to 'WebPage'.
---
import YoastSchemaExample from '../../../../src/components/YoastSchemaExample';

Describes a `WebSite`. Parent to [`WebPage`](webpage.md).

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
* `potentialAction`: A [`SearchAction`](searchaction.md) object describing the site's internal search.
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
              "alternateName": "Example.com",
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

## WordPress API: Change Website Schema output {#api}

To change the `Website` schema Yoast SEO outputs, you can use our `wpseo_schema_website` filter, for instance as follows:

```php
add_filter( 'wpseo_schema_website', 'example_change_website' );

/**
 * Changes Website Schema data output, overwriting the name and alternateName.
 *
 * @param array $data Schema.org Website data array.
 *
 * @return array Schema.org Website data array.
 */
function example_change_website( $data ) {
    $data['name']          = 'Yoast';
    $data['alternateName'] = 'Yoast.com';

    return $data;
}
```

To change the [`SearchAction`](searchaction.md) output, please see [its API documentation](searchaction.md#api).

To make more changes to our Schema output, see the [Yoast SEO Schema API](../api.md).
