---
id: review
title: Schema piece - Review
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/pieces/review.md
---
import YoastSchemaExample from '../../../../../developer-site/src/components/YoastSchemaExample';

Describes a review. Usually in the context of a `Product` or an `Organization` / `LocalBusiness`.

## Triggers
Should be added as top-level nodes in the graph, as/when required by other nodes. E.g., when an `Product` has a `review`.

## Required properties
A valid `Review` must have the following properties.

* `@id`: The site’s home URL appended by `#/schema/review/{{ID}}`, where  `{{ID}}`  is a unique identifier.
* `name`: The name of the entity being reviewed.
* `author`: A reference-by-ID to the `Person` who wrote the review.
* `reviewRating`: A `Rating` object, with a `ratingValue` property. If the scale is not from 1 to 5, also add `bestRating` and `worstRating` properties.

### Failure scenarios
If any of the required fields are missing or invalid, the node should not be output.

If the node is not output, any entities which would otherwise have declared a relationship with the `Review` (e.g., as `reviews` referenced by a `Product` ) should remove those references.

## Optional properties
The following should be added whenever available and valid:

* `reviewBody`: The text content of the review.
* `name`: A title for the review.

## Examples
### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "Review",
              "@id": "https://www.example.com/#/schema/review/abc123",
              "name": "Example Product",
              "author": {
                  "@id": "https://www.example.com/#/schema/person/abc123"
              },
              "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": 4
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
              "@type": "Review",
              "@id": "https://www.example.com/#/schema/review/abc123",
              "name": "Example review name",
              "author": {
                  "@id": "https://www.example.com/#/schema/person/abc123"
              },
              "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": 8,
                  "bestRating": 10,
                  "worstRating": 1
              },
              "reviewBody": "Example review body"
          }
      ]
  }`}
</YoastSchemaExample>
