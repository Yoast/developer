---
id: searchaction
title: Schema piece - SearchAction
sidebar_label: SearchAction
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/pieces/searchaction.md
description: Describes a 'SearchAction' on a 'WebSite'.
---
import YoastSchemaExample from '../../../../src/components/YoastSchemaExample';

Describes a `SearchAction` on a `WebSite`.

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
