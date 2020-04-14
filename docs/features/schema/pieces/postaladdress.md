---
id: postaladdress
title: Schema piece - PostalAddress
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/pieces/postaladdress.md
---
import YoastSchemaExample from '../../../../../developer-site/src/components/YoastSchemaExample';

Describes the postal address of a place; usually in the context of a `LocalBusiness`.

## Triggers
Should be added as top-level nodes in the graph, as/when required by other nodes. E.g., when a `LocalBusiness` has an address.

## Required properties
A valid `postalAddress` must have the following properties.

* `@id`: The site's home URL appended by `#/schema/address/{{ID}}`, where `{{ID}}` is a unique identifier.
* `streetAddress`: The building number and street (e.g., *123 fake road* ).
* `postalCode`: The postal code.
* `addressCountry`: The two-digit country-code representing the country (e.g., *US* ).

### Failure scenarios
If any of the required fields are missing or invalid, the node should not be output.

If the node is not output, any entities which would otherwise have declared a relationship with the `Address` (e.g., when included by reference by a `localBusiness` ) should remove those references.

## Optional properties
The following should be added whenever available and valid:

* `addressLocality`: The town, city or equivalent.
* `addressRegion`: The region or district.
* `postOfficeBoxNumber`: A PO box number.

## Examples
### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "PostalAddress",
              "@id": "https://www.example.com/#/schema/address/abc123",
              "streetAddress": "123 Fake Street",
              "postalCode": "ABC 123",
              "addressCountry": "US"
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
              "@type": "PostalAddress",
              "@id": "https://www.example.com/#/schema/address/abc123",
              "streetAddress": "123 Example Street",
              "addressLocality": "Example Town",
              "addressRegion": "Example Region",
              "postalCode": "ABC 123",
              "postOfficeBoxNumber": "123",
              "addressCountry": "US"
          }
      ]
  }`}
</YoastSchemaExample>
