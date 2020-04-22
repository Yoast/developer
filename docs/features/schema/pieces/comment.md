---
id: comment
title: Schema piece - Comment
sidebar_label: Comment
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/pieces/comment.md
description: Describes a review. Usually in the context of an 'Article' or a 'WebPage'.
---
import YoastSchemaExample from '../../../../../developer-site/src/components/YoastSchemaExample';

Describes a review. Usually in the context of an `Article` or a `WebPage`.

## Triggers
Should be added as top-level nodes in the graph, as/when required by other nodes. E.g., when an  `Article`  has  `comments`.

## Required properties
A valid  `Comment` must have the following properties.
* `@id`: The unmodified *canonical URL* of the parent `WebPage`, appended by `#/schema/comment/{{ID}}`, where `{{ID}}` is a unique identifier for the comment in question.
* `about`: A reference by ID to the parent `Article` (or `WebPage`, when no Article is `present`).
* `text`: The textual content of the comment, stripping HTML tags.
* `author`: A reference by ID to the `Person` who wrote the comment.

## Failure scenarios
If any of the required fields are missing or invalid, the node should not be output.

## Optional properties
The following should be added whenever available and valid:
* `url`: The unmodified *canonical URL* of the parent `WebPage`, appended by `comment-{{NUM}}`, where `{{NUM}}` is the database ID of the comment.

## Examples

### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "Comment",
              "@id": "https://www.example.com/blog/example-article/#/schema/comment/abc123",
              "about": {
                  "@id": "https://www.example.com/blog/example-article/"
              },
              "text": "Example comment content",
              "author": {
                  "@id": "https://www.example.com/#/schema/person/abc123"
              }
          }
      ]
  }`}
</YoastSchemaExample>
