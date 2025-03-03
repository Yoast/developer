---
id: breadcrumb
title: "Schema piece - Breadcrumb"
sidebar_label: Breadcrumb
description: Describes the hierarchical position a 'WebPage' within a 'WebSite'.
---
import YoastSchemaExample from '../../../../src/components/YoastSchemaExample';

Describes the hierarchical position a `WebPage` within a `WebSite`.

:::caution Breadcrumbs in local environments
In local environments, or in websites that <a href="/features/indexables/indexables-filters/#disabling-indexables-completely">disable the indexable creation in general</a>, breadcrumbs are not working properly.

Specifically, in those setups the hierarchy of a breadcrumb path might be missing intermediate nodes like the category a post belongs to, or a parent page of a subpage. 
:::

## Triggers
Should be added as top-level node in the graph, on all public pages which have a valid `WebPage`, except for 4xx and 5xx range error pages/scenarios.

## Required properties
A valid `BreadcrumbList` must have the following properties.

* `@type`: `BreadcrumbList`.
* `@id`: The site's home URL appended by `#/schema/BreadcrumbList/{{ID}}`, where `{{ID}}` is a unique identifier for the 'parent' webpage.
* `itemListElement`: An array of `ListItem` objects, representing the position of the current page in the site hierarchy, each with the following properties:
  * `position`: An integer (starting at `1`), counting the 'depth' of the page from (including) the homepage.
  * `name`: The name of the page in question, as it appears in the breadcrumb navigation.
  * `item`: The unmodified *canonical URL* of the page in question.

**Also note that:**
- _Paginated states_ should not be included/represented in the list.
- The final/current 'crumb' should omit the `item` property.

### Failure scenarios
If any of the required fields are missing or invalid, the node should not be output.

If the node is not output, any entities which would otherwise have declared a relationship with the `BreadcrumbList` should remove those references.

## Examples

### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "BreadcrumbList",
              "@id": "https://www.example.com/#/schema/BreadcrumbList/abc123",
              "itemListElement": [
                  {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://www.example.com/"
                  },
                  {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Example Section",
                      "item": "https://www.example.com/example-section/"
                  },
                  {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Example Page"
                  }
              ]
          }
      ]
}`}
</YoastSchemaExample>


## WordPress API: Change Breadcrumb Schema output {#api}

To make changes to the `Breadcrumb` schema that Yoast SEO outputs, you can use our `wpseo_schema_breadcrumb` filter. Here is an example:

### Replace domain name in the breadcrumb schema

```php

If you want to replace the domain name in the breadcrumb schema, you can use the `wpseo_schema_breadcrumb` filter to hook into the breadcrumb schema piece individually.
add_filter( 'wpseo_schema_breadcrumb', 'replace_domain_name_to_breadcrumb_schema', 11, 2 );
/**
 * Replace domain name in the breadcrumb schema piece individually.
 * 
 * 
 * @param array $piece Schema.org Breadcrumb data array.
 * @return array Altered Schema.org Breadcrumb data array.
 */
function replace_domain_name_to_breadcrumb_schema( $piece ) {
    $piece['@id'] = str_replace( 'olddomain.tld', 'newdomain.tld', $piece['@id'] );
    foreach ( $piece['itemListElement'] as &$list ) {
            $list['item'] = str_replace( 'olddomain.tld', 'newdomain.tld', $list['item'] );
        if ( $list['item'] ) {
        }
    }
    return $piece;
}
```
To make more changes to our Schema output, see the [Yoast SEO Schema API](../api.md).

