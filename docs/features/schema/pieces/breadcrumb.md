---
id: breadcrumb
title: Schema piece - Breadcrumb
sidebar_label: Breadcrumb
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/pieces/breadcrumb.md
description: Describes the hierarchical position a 'WebPage' within a 'WebSite'.
---
import YoastSchemaExample from '../../../../../developer-site/src/components/YoastSchemaExample';

Describes the hierarchical position a `WebPage` within a `WebSite`.

## Triggers
Should be added as top-level node in the graph, as/when required by other nodes.

## Required properties
A valid `BreadcrumbList` must have the following properties.

* `@id`: The unmodified *canonical URL* of the page, appended by `#/schema/breadcrumb/{{ID}}`, where `{{ID}}` is a unique identifier.
* `itemListElement`: An array of `ListItem` objects, with the following properties:
  * `position`: An integer (starting at `1`), counting the depth of the page from the homepage.
  * `item`: A `WebPage` object *stub*, with the following properties:
    * `@id`: The unmodified *canonical URL* of the page in question.
    * `url`: The unmodified *canonical URL* of the page in question.
    * `name`: The name of the page in question, as it appears in the breadcrumb navigation.

### Failure scenarios
If any of the required fields are missing or invalid, the node should not be output.

If the node is not output, any entities which would otherwise have declared a relationship with the `breadcrumb` should remove those references.

## Conditional properties
* The `item` representing the current WebPage should omit all properties except for `@id`.

## Examples

### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "BreadcrumbList",
              "@id": "https://www.example.com/example-section/example-page/#/schema/breadcrumb/abc123",
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
                          "@id": "https://www.example.com/example-section/",
                          "url": "https://www.example.com/example-section/",
                          "name": "Example page"
                      }
                  },
                  {
                      "@type": "ListItem",
                      "position": 3,
                      "item": {
                          "@id": "https://www.example.com/example-section/example-page/"
                      }
                  }
              ]
          }
      ]
  }`}
</YoastSchemaExample>
