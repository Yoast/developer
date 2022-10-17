---
id: searchaction
title: Schema piece - SearchAction
sidebar_label: SearchAction
description: Describes a 'SearchAction' on a 'WebSite'.
---
import YoastSchemaExample from '../../../../src/components/YoastSchemaExample';

Describes a `SearchAction` on a [`WebSite`](website.md).

## Triggers
Should be added as a `potentialAction` property on the `WebSite` node, when the site has/supports an internal search function.

## Required properties
A valid `SearchAction` must have the following properties.

* `target`: An object of type `EntryPoint`, with a `urlTemplate` which describes the URL pattern of the internal search function (e.g., `https://www.example.com/?s={search_term_string}`).
* `query-input`: An object of type `PropertyValueSpecification`, with the following properties:
 * `valueRequired`: Boolean `true`.
 * `valueName`: The search term string as described in the `target` (e.g., `search_term_string)`.

### Failure scenarios
If any of the required fields are missing or invalid, the node should not be output.

## Examples

### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "SearchAction",
              "target": "https://www.example.com/?s={search_term_string}",
              "query-input": {
                  "@type": "PropertyValueSpecification",
                  "valueRequired": true,
                  "valueName": "search_term_string"
              }
          }
      ]
  }`}
</YoastSchemaExample>

## API: Change SearchAction Schema output {#api}

To change the `SearchAction` schema Yoast SEO outputs, you can use the following filters:

### Disable `SearchAction` output
This will disable the `SearchAction` output entirely:

```php
add_filter( 'disable_wpseo_json_ld_search', '__return_true' );
```

### Change `SearchAction` URL
To change the search URL, use the `wpseo_json_ld_search_url` filter. Make sure that the URL you return contains a search parameter 
variable `{search_term_string}` as otherwise it won't work.

```php
add_filter( 'wpseo_json_ld_search_url', 'schema_change_search_url' );

function schema_change_search_url() {
    return 'https://example.com/search/?q={search_term_string}';
}
```

To make more changes to our Schema output, see the [Yoast SEO Schema API](../api.md).
