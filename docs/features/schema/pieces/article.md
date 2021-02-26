---
id: article
title: Schema piece - Article
sidebar_label: Article
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/pieces/article.md
description: Describes an 'Article' on a 'WebPage'.
---
import YoastSchemaExample from '../../../../../developer-site/src/components/YoastSchemaExample';

Describes an `Article` on a `WebPage`.
May be transformed into a more specific type (such as `NewsArticle`) if the required conditions are met.

## Triggers
Should only be output on explicitly 'authored' pages. In the case of a standard WordPress setup, this is limited to native *Posts*.

## Required properties
A valid `Article` must have the following properties.

* `@id`: The unmodified *canonical URL* of the parent `WebPage`, appended by `#/schema/article/{{ID}}`, where `{{ID}}` is a unique identifier for the article in question.
* `headline`: The headline of the article (falling back to the *title* of the `WebPage` ).
* `description`: A summary of the article (falling back to the page's meta description content).
* `isPartOf`: A reference-by-ID to the `WebPage` node.
* `mainEntityOfPage`: A reference-by-ID to the `WebPage` node.
* `datePublished`: The time at which the article was originally published, in ISO 8601 format; e.g., `2015-10-31T16:10:29+00:00`.
* `dateModified`: The time at which the article was last modified, in ISO 8601 format; e.g., `2015-10-31T16:10:29+00:00`.
* `author`: A reference-by-ID to the author of the article.
* `publisher`: A reference-by-ID to the publisher of the article.
* `image`: An image object (or array of all images in the article content), referenced by ID.
   * Must be at least `696` pixels wide.
   * Must be of the following formats+file extensions: `.jpg`, `.png`, or `.gif`.

## Failure scenarios
If any of the required fields are missing or invalid, the node should not be output.

If the node is not output, the parent `WebPage` node should be altered to reference the following properties by ID (when valid and present):

* `author`
* `commentCount`

#### Missing images
If the failure reason is due to the article missing an image, you may fall back to referencing one of the following by ID, providing they're valid candidates (in the following order of precedence):

* The image used in the `primaryImageOfPage` property of the parent `WebPage`.
* The first image in the `image` array attached to the parent `WebPage`.

If no suitable image is found, the node should fail (and adhere to the *Failure scenarios*).

## Optional properties
The following should be added whenever available and valid:

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

## Transformations
The `Article` type may be transformed in the following scenarios:

* When explicitly nominated as a "news article", the *type* property should be altered to an array of `[Article, NewsArticle]`.

## Examples

### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "Article",
              "@id": "https://www.example.com/blog/example-article/#/schema/article/abc123",
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
                  "@id": "https://www.example.com/#/schema/person/abc123"
              },
              "publisher": {
                  "@id": "https://www.example.com/#/schema/organization/1"
              },
              "image": {
                  "@id": "https://www.example.com/#/schema/image/abc123"
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
              "@id": "https://www.example.com/blog/example-article/#/schema/article/abc123",
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
