---
id: localbusiness
title: Schema piece - LocalBusiness
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/pieces/localbusiness.md
---
import YoastSchemaExample from '../../../../../developer-site/src/components/YoastSchemaExample';

Describes a business which allows public visitation. Typically used to represent the business 'behind' the website, or on a page about a specific business.

May be transformed into a more specific type (such as `library` ), or extend an existing `Organization` if the required conditions are met.

## Triggers
* Should be output on a page which represents the business in question.
* Should be output on the homepage when the website represents the business in question, or is a `branchOf` that business.
* When the business is the same entity which represents the whole site (e.g., the website represents an `Organization`, which has local properties), that `Organization` should be altered/extended into this `LocalBusiness` provided it meets the requirements below.

## Required properties
A valid `LocalBusiness` must have the following properties.

* `@type`: Should always be an array of  `Organization`,  `Place`, and the most specific sub-type selected (e.g.,  `['Organization','Place','Dentist']` ).
* `ID`: The site's home URL appended by `#/schema/organization/{{ID}}`, where  `{{ID}}`  is a unique identifier (e.g., the *Post ID* ).
* `name`: The name of the business.
* `image`: A reference-by-ID to an `imageObject` which represents the business.
* `address`: A reference-by-ID to an `PostalAddress` piece.

### Failure scenarios
If any of the required fields are missing or invalid, the node should fall back to a normal `Organization` (removing any 'local' `@type` values), whilst retaining any optional properties from below.

## Optional properties
The following should be added whenever available and valid:

* `telephone`: The primary public telephone number of the business.
* `email`: The primary public email address of the business.
* `faxNumber`: The primary public fax number of the business.
* `priceRange`: The price range of the business, represented by a string of dollar symbols (e.g., `$`, `$$`, or `$$$` ).
* `areaServed`: An array of `GeoShape`, `Place` or string definitions.
* `openingHoursSpecification`: An `OpeningHoursSpecification` object.
* `geo`: A `GeoCoordinates` object.
* `url`: The canonical URL of the page which represents the business.
* `vatID`: The VAT ID of the business.
* `taxID`: The tax ID of the business.

## Examples
### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": [
                  "Organization",
                  "Place",
                  "Dentist"
              ],
              "@id": "https://www.example.com/#/schema/organization/abc123",
              "name": "Example business name",
              "image": {
                  "@id": "https://www.example.com/#/schema/image/abc123"
              },
              "address": {
                  "@id": "https://www.example.com/#/schema/address/abc123"
              }
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
              "@type": [
                  "Organization",
                  "Place",
                  "Dentist"
              ],
              "@id": "https://www.example.com/#/schema/organization/abc123",
              "url": "https://www.example.com/example-business-page/",
              "email": "example@example.com",
              "priceRange": "$$",
              "areaServed": [
                  "Bournemouth",
                  "Poole",
                  "Dorset"
              ],
              "telephone": "01234 56789",
              "faxNumber": "02345 67890",
              "name": "Example business name",
              "openingHoursSpecification": {
                  "@type": "openingHoursSpecification",
                  "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday"
                  ],
                  "opens": "09:00",
                  "closes": "17:00"
              },
              "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "51.8066986",
                  "longitude": "5.7284488"
              },
              "vatID": "abc123",
              "taxID": "def456",
              "image": {
                  "@id": "https://www.example.com/#/schema/image/abc123"
              },
              "address": {
                  "@id": "https://www.example.com/#/schema/address/abc123"
              }
          }
      ]
  }`}
</YoastSchemaExample>
