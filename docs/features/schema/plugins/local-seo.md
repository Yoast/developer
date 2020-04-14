---
id: local-seo
title: Schema output for Local SEO for WordPress
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/plugins/local-seo.md
---
import YoastSchemaExample from '../../../../../developer-site/src/components/YoastSchemaExample';

The schema output for [Local SEO for WordPress](https://yoast.com/wordpress/plugins/local-seo/) builds upon [Yoast SEO for WordPress' base schema output](yoast-seo.md), to add additional *local business* detail (such as addresses and opening hours).

## Core logic
### When a Primary Location is defined
* Merge properties from the business' *Primary Location* into the main `Organization` (i.e., the one in the *base script* ) to attempt to extend it into a `LocalBusiness`.

### When a Primary Location is not defined
* Add any shared/default Location properties (such as `email`, `VAT`, `priceRange` ) to the main `Organization`.
	* Do *not* add `geo` properties, `areasServed` or `priceRange` properties.

## Additional scenarios
### On a single location page
#### When the page does *not* represent the Primary Location
* Add a `LocalBusiness` piece for the Location in question.

##### When the site represents a single business with multiple locations
* Add a `branchOf` property to the `LocalBusiness`, which references the ID of the main `Organization` piece.

#### In all cases
* Add a `mainEntityOfPage` property to the `LocalBusiness` piece which references the ID of the `WebPage`.
	* NOTE: In the case of the Primary Location, this should be attached to the main `Organization` / `LocalBusiness` piece in the base script).

## Examples
### An arbitrary post on a single-location business site
This example assumes that:

* The post contains / is a valid `Article`.

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
              "@id": "https://www.example.com/#/schema/organization/1",
              "url": "https://www.example.com/",
              "email": "example@example.com",
              "logo": {
                  "@id": "https://www.example.com/#/schema/image/abc123"
              },
              "priceRange": "$$",
              "areaServed": "Bournemouth, Poole, Dorset",
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
          },
          {
              "@type": "PostalAddress",
              "@id": "https://www.example.com/#/schema/address/abc123",
              "streetAddress": "123 Example Street",
              "addressLocality": "Example Town",
              "addressRegion": "Example Region",
              "postalCode": "ABC 123",
              "postOfficeBoxNumber": "123",
              "addressCountry": "US"
          },
          {
              "@type": "WebSite",
              "@id": "https://www.example.com/#/schema/website/abc123",
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
              "@id": "https://www.example.com/example-post/",
              "url": "https://www.example.com/example-post/",
              "name": "Example post name",
              "description": "Example post description",
              "keywords": "cats,dogs,cake",
              "isPartOf": {
                  "@id": "https://www.example.com/#/schema/website/abc123"
              },
              "inLanguage": "en-US",
              "datePublished": "2019-07-10T08:08:40+00:00",
              "dateModified": "2019-07-10T08:43:03+00:00",
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
          },
          {
              "@type": "Article",
              "@id": "https://www.example.com/example-post/#/schema/article/abc123",
              "headline": "Example article headline",
              "description": "Example article description",
              "isPartOf": {
                  "@id": "https://www.example.com/example-post/"
              },
              "mainEntityOfPage": {
                  "@id": "https://www.example.com/example-post/"
              },
              "datePublished": "2019-07-10T08:08:40+00:00",
              "dateModified": "2019-07-10T08:43:03+00:00",
              "commentCount": 6,
              "articleSection": "Cats,Dogs,Recipes",
              "author": {
                  "@id": "https://www.example.com/#/schema/person/abc123"
              },
              "publisher": {
                  "@id": "https://www.example.com/#/schema/organization/1"
              },
              "image": [
                  {
                      "@id": "https://www.example.com/#/schema/image/abc123"
                  },
                  {
                      "@id": "https://www.example.com/#/schema/image/def456"
                  }
              ],
              "video": [
                  {
                      "@id": "https://www.example.com/#/schema/video/abc123"
                  },
                  {
                      "@id": "https://www.example.com/#/schema/video/def456"
                  }
              ]
          },
          {
              "@type": "Person",
              "@id": "https://www.example.com/#/schema/person/abc123",
              "name": "Example person name",
              "image": {
                  "@id": "https://www.example.com/#/schema/image/abc123"
              },
              "sameAs": [
                  "https://www.wikipedia.com/example-organization",
                  "https://www.linkedin.com/company/1234"
              ]
          }
      ]
  }`}
</YoastSchemaExample>

### A location archive of a multi-location business
This example assumes that:

* Some shared/default values have been set, so the main `Organization` has a `@type` array, `email`, `vatID` and other address-agnostic location properties.
* No Primary Location is set, so no `address` can be inferred for the main `Organization`.

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "Organization",
              "@id": "https://www.example.com/#/schema/organization/1",
              "url": "https://www.example.com/",
              "email": "example@example.com",
              "logo": {
                  "@id": "https://www.example.com/#/schema/image/abc123"
              },
              "telephone": "01234 56789",
              "faxNumber": "02345 67890",
              "vatID": "abc123",
              "taxID": "def456",
              "name": "Example business name",
              "image": {
                  "@id": "https://www.example.com/#/schema/image/abc123"
              }
          },
          {
              "@type": "WebSite",
              "@id": "https://www.example.com/#/schema/website/abc123",
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
              "@id": "https://www.example.com/example-local-archive/",
              "url": "https://www.example.com/example-local-archive/",
              "name": "Example local archive name",
              "description": "Example local archive description",
              "isPartOf": {
                  "@id": "https://www.example.com/#/schema/website/abc123"
              },
              "inLanguage": "en-US",
              "datePublished": "2019-07-10T08:08:40+00:00",
              "dateModified": "2019-07-10T08:43:03+00:00",
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
          },
          {
              "@type": "ItemList",
              "@id": "http://www.example.com/page/#postlist",
              "mainEntityOfPage": {
                  "@id": "https://www.example.com/example-local-archive/"
              },
              "numberOfItems": 81,
              "itemListElement": [
                  {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Location One",
                      "url": "https://www.example.com/location-one/"
                  },
                  {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Location Two",
                      "url": "https://www.example.com/location-two/"
                  },
                  {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Location Three",
                      "url": "https://www.example.com/location-three/"
                  }
              ]
          }
      ]
  }`}
</YoastSchemaExample>

Note that the itemList is truncated at three items for demonstrative purposes only.

### A single location page
This example assumes that:

* The website represents a single business with multiple locations, therefore a `branchOf` property is added.
* A Primary Location has been set, therefore the main `Organization` has an `address` and multiple `@type` values.

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
              "@id": "https://www.example.com/#/schema/organization/1",
              "url": "https://www.example.com/",
              "email": "example@example.com",
              "logo": {
                  "@id": "https://www.example.com/#/schema/image/abc123"
              },
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
          },
          {
              "@type": "PostalAddress",
              "@id": "https://www.example.com/#/schema/address/abc123",
              "streetAddress": "123 Example Street",
              "addressLocality": "Example Town",
              "addressRegion": "Example Region",
              "postalCode": "ABC 123",
              "postOfficeBoxNumber": "123",
              "addressCountry": "US"
          },
          {
              "@type": "PostalAddress",
              "@id": "https://www.example.com/#/schema/address/def456",
              "streetAddress": "456 Example Street",
              "addressLocality": "Example City",
              "addressRegion": "Example County",
              "postalCode": "DEF 456",
              "postOfficeBoxNumber": "456",
              "addressCountry": "UK"
          },
          {
              "@type": "WebSite",
              "@id": "https://www.example.com/#/schema/website/abc123",
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
              "@id": "https://www.example.com/single-location-page/",
              "url": "https://www.example.com/single-location-page/",
              "name": "Example single location page name",
              "description": "Example single location page description",
              "isPartOf": {
                  "@id": "https://www.example.com/#/schema/website/abc123"
              },
              "inLanguage": "en-US",
              "datePublished": "2019-07-10T08:08:40+00:00",
              "dateModified": "2019-07-10T08:43:03+00:00",
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
          },
          {
              "@type": [
                  "Organization",
                  "Place",
                  "Dentist"
              ],
              "@id": "https://www.example.com/#/schema/organization/def456",
              "mainEntityOfPage": {
                  "@id": "https://www.example.com/single-location-page/"
              },
              "branchOf": {
                  "@id": "https://www.example.com/#/schema/organization/1"
              },
              "url": "https://www.example.com/single-location-page/",
              "email": "example2@example.com",
              "priceRange": "$$$",
              "areaServed": [
                  "Manchester",
                  "London",
                  "Scotland"
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
                  "latitude": "1.2345678",
                  "longitude": "2.3456789"
              },
              "vatID": "abc123",
              "taxID": "def456",
              "image": [
                  {
                      "@id": "https://www.example.com/#/schema/image/abc123"
                  },
                  {
                      "@id": "https://www.example.com/#/schema/image/def456"
                  }
              ],
              "address": {
                  "@id": "https://www.example.com/#/schema/address/def456"
              }
          }
      ]
  }`}
</YoastSchemaExample>
