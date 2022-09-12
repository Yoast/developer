---
id: person
title: Schema piece - Person
sidebar_label: Person
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/pieces/person.md
description: Describes an individual person. Most commonly used to identify the 'author' of a piece of content.
---
import YoastSchemaExample from '../../../../../developer-site/src/components/YoastSchemaExample';

Describes an individual person. Most commonly used to identify the `author` of a piece of content (such as an `Article` or `Comment`).

May also identify the `publisher` of a `WebSite` (or other content) in some cases.

## Triggers
Should be added as top-level nodes in the graph, as/when required by other nodes. E.g., when an `Article` has an `author`.

## Required properties
A valid `Person` must have the following properties.

* `@type`: `Person`.
* `@id`: The site's home URL appended by `#/schema/Person/{{ID}}`, where `{{ID}}` is a unique identifier.
  * Note that the `{{ID}}` component should not reveal personally identifiable or sensitive information (e.g., avoid using a username or email address, or hash+salt these values).
* `name`: The full name of the `Person`.

### Failure scenarios
If any of the required fields are missing or invalid, the node should not be output.

If the node is not output, any entities which would otherwise have declared a relationship with the `Person` (e.g., as the `publisher` of a `WebSite`, or the `author` of an `Article`) should remove those references.

#### 'Admin' usernames
If the `name` of the person is '*admin*' or similar (or localised equivalents), then the `Person` should be invalidated; we should never present content as being authored by 'admin'.

## Optional properties
The following should be added whenever available and valid:

* `description`: The user bio, truncated to 250 characters.
* `sameAs`: An array of URLs representing declared social/authoritative profiles of the person (e.g., a Wikipedia page, or Facebook profile).
* `image`: An array of references-by-ID to `ImageObject` nodes which represent the person.
* `url`: The URL of the users' profile page (if they're affiliated with the site in question), or to their personal homepage/website.

## Conditional properties
Optional properties which should only be output when the required criteria is met.

## Examples

### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "Person",
              "@id": "https://www.example.com/#/schema/Person/abc123",
              "name": "Example person name"
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
              "@type": "Person",
              "@id": "https://www.example.com/#/schema/Person/abc123",
              "name": "Example person name",
              "image": {
                  "@id": "https://www.example.com/uploads/example-image.jpg"
              },
              "sameAs": [
                  "https://www.wikipedia.com/example-person",
                  "https://www.facebook.com/example-person"
              ]
          }
      ]
  }`}
</YoastSchemaExample>
