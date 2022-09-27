---
id: article
title: Schema piece - Article
sidebar_label: Article
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/pieces/article.md
description: Describes an 'Article' on a 'WebPage'.
---
import YoastSchemaExample from '../../../../src/components/YoastSchemaExample';

Describes an `Article` on a `WebPage`.
May be transformed into a more specific type (such as `NewsArticle`) if the required conditions are met.

## Triggers
Should be output on all post types which support _authorship_ and have an author.

## Required properties
A valid `Article` must have the following properties.

* `@type`: `Article`.
* `@id`: The site's home URL appended by `#/schema/Article/{{ID}}`, where `{{ID}}` is a unique identifier for the article in question.
* `headline`: The headline of the article (falling back to the *title* of the `WebPage` ).
* `description`: A summary of the article (falling back to the page's meta description content).
* `isPartOf`: A reference-by-ID to the `WebPage` node.
* `mainEntityOfPage`: A reference-by-ID to the `WebPage` node.
* `datePublished`: The time at which the article was originally published, in ISO 8601 format; e.g., `2015-10-31T16:10:29+00:00`.
* `dateModified`: The time at which the article was last modified, in ISO 8601 format; e.g., `2015-10-31T16:10:29+00:00`.
* `author`: A reference-by-ID to the author of the article, in addition to their `name` property (to better support Pinterest).
* `publisher`: A reference-by-ID to the publisher of the article.

## Failure scenarios
If any of the required fields are missing or invalid, the node should not be output.

## Optional properties
The following should be added whenever available and valid:

* `image`: An image object (or array of all images in the article content), referenced by ID.
   * Must be at least `696` pixels wide.
   * Must be of the following formats+file extensions: `.jpg`, `.png`, `.gif` ,or `.webp`.
* `video`: An array of all videos in the article content, referenced by ID.
* `comment`: An array of references by ID to `comment` pieces.
* `articleSection`: An array of the names of categories which the article belongs to (e.g., `["cats","dogs","cake"]`).
* `inLanguage`: The language code for the article; e.g., `en-GB`.
* `speakable`: A `SpeakableSpecification` object which identifies any content elements suitable for spoken results.

## Conditional properties
Optional properties which should only be output when the required criteria are met.

### If copyright information is available
* `copyrightYear`: The year from which the article holds copyright status.
* `copyrightHolder`: A reference-by-ID to the `Organization` or `Person` who holds the copyright.

### If there are comments
* `commentCount`: An integer value of the number of comments associated with the article.
* `comment`: An array of references-by-ID to the `comment` pieces associated with the article.

### If commenting is allowed/enabled
* `potentialAction`: A `CommentAction` object with values:
 * `name`: "Comment".
 * `target`: The `url` property of the parent `WebPage`, appended with `#comment`.

## Examples

### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "Article",
              "@id": "https://www.example.com/#/schema/Article/abc123",
              "headline": "Example article headline",
              "description": "Example article description",
              "isPartOf": {
                  "@id": "https://www.example.com/blog/example-article/"
              },
              "mainEntityOfPage": {
                  "@id": "https://www.example.com/blog/example-article/"
              },
              "datePublished": "2019-07-10T08:08:40+00:00",
              "dateModified": "2019-07-10T08:43:03+00:00",
              "author": {
                  "@id": "https://www.example.com/#/schema/Person/abc123"
              },
              "publisher": {
                  "@id": "https://www.example.com/#/schema/Organization/1"
              },
              "image": {
                  "@id": "https://www.example.com/uploads/example-image.jpg"
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
              "@type": "Article",
              "@id": "https://www.example.com/#/schema/Article/abc123",
              "headline": "Example article headline",
              "description": "Example article description",
              "isPartOf": {
                  "@id": "https://www.example.com/blog/example-article/"
              },
              "mainEntityOfPage": {
                  "@id": "https://www.example.com/blog/example-article/"
              },
              "datePublished": "2019-07-10T08:08:40+00:00",
              "dateModified": "2019-07-10T08:43:03+00:00",
              "commentCount": 6,
              "articleSection": ["cats","dogs","cake"],
              "inLanguage": "en-US",
              "author": {
                  "@id": "https://www.example.com/#/schema/Person/abc123"
              },
              "publisher": {
                  "@id": "https://www.example.com/#/schema/Organization/1"
              },
              "image": [
                  {
                      "@id": "https://www.example.com/uploads/example-image.jpg"
                  },
                  {
                      "@id": "https://www.example.com/uploads/example-image-2.jpg"
                  }
              ],
              "video": [
                  {
                      "@id": "https://www.example.com/#/schema/VideoObject/abc123"
                  },
                  {
                      "@id": "https://www.example.com/#/schema/VideoObject/def456"
                  }
              ],
              "potentialAction": [
                  {
                      "@type": "CommentAction",
                      "name": "Comment"
                      "target": [ "https://www.example.com/blog/example-article/#comment" ]
                  }
              ]
          }
      ]
  }`}
</YoastSchemaExample>
