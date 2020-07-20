---
id: organization
title: Schema piece - Organization
sidebar_label: Organization
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/pieces/organization.md
description: Describes an organization (a company, business or institution). Most commonly used to identify the publisher of a 'WebSite'.
---
import YoastSchemaExample from '../../../../../developer-site/src/components/YoastSchemaExample';

Describes an organization (a company, business or institution). Most commonly used to identify the publisher of a `WebSite`.

May be transformed into a more specific type (such as  `Corporation` or `LocalBusiness` ) if the required conditions are met.

## Triggers
Should be output on all public pages.

## Required properties
A valid `Organization` must have the following properties.

* `@id`: The site's home URL appended by `#/schema/organization/{{ID}}`, where `{{ID}}` is a globally unique, stable identifier (e.g., a database ID representing the `organization`).
  * If the `organization` is the publisher of the `WebSite` (i.e., the "*primary organization*", or "*this organization*"), then the value of `{{ID}}` should be `1`.
* `logo`: A reference-by-ID to an `image` of the organization's logo.
* `URL:` The site's home URL.
* `name`: The name of the `Organization`.

### Failure scenarios
If any of the required fields are missing or invalid, the node should not be output.

If the node is not output, any entities which would otherwise have declared a relationship with the `Organization` (e.g., as the `publisher` of a `WebSite`, or the `manufacturer` of a `Product`) should remove those references.

## Optional properties
The following should be added whenever available and valid:

* `sameAs`: An array of URLs representing declared social/authoritative profiles of the organization (e.g., a Wikipedia page, or Facebook profile).
* `image`: An array of `images` which represent the organization (including the `logo` ), referenced by ID.

## Transformations
The `Organization` type may be transformed in the following scenarios.

### When the business is 'local'
* When location information is available, the `Organization` may be eligible for extension into a [LocalBusiness](localbusiness.md) type.

## Examples

### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "Organization",
              "@id": "https://www.example.com/#/schema/organization/1",
              "url": "https://www.example.com/",
              "logo": {
                  "@id": "https://www.example.com/#/schema/image/abc123"
              },
              "url": "https://www.example.com/#/schema/organization/",
              "name": "Example organization name"
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
              "@type": "Organization",
              "@id": "https://www.example.com/#/schema/organization/1",
              "url": "https://www.example.com/",
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
          }
      ]
  }`}
</YoastSchemaExample>
