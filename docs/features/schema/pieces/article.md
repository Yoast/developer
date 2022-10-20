---
id: article
title: "Schema piece - Article"
image: https://yoast.com/shared-assets/opengraph/?title=Yoast%20SEO%20Schema%20piece:NEWLINEArticle
sidebar_label: Article
description: Describes an 'Article' on a 'WebPage'.
---
import YoastSchemaExample from '../../../../src/components/YoastSchemaExample';

Describes an `Article` on a [`WebPage`](webpage.md).
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
* `copyrightHolder`: A reference-by-ID to the [`Organization`](organization.md) or [`Person`](person.md) who holds the copyright.

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

## WordPress API: Change Article Schema output {#api}

To change the `Article` schema Yoast SEO outputs, you can use our `wpseo_schema_article` filter, for instance as follows:

```php
add_filter( 'wpseo_schema_article', 'change_article_to_social_posting' );

/**
 * Changes @type of Article Schema data.
 *
 * @param array $data Schema.org Article data array.
 *
 * @return array Schema.org Article data array.
 */
function change_article_to_social_posting( $data ) {
    $data['@type'] = 'SocialMediaPosting';

    return $data;
}
```

### Output Article schema on custom post types
By default, Yoast SEO doesn't output Article schema on custom post types. The code below changes that:

```php
/**
 * Add 'book' to the list of articles post types, so books get Article schema.
 *
 * @param  mixed $post_types The current list of post types.
 *
 * @return array Array of post types for which Yoast SEO renders Article schema.
 */
function article_schema_for_books( $post_types ) {
	$post_types[] = 'book';
	return $post_types;
}

add_filter( 'wpseo_schema_article_post_types', 'article_schema_for_books' );
```

Note that for a post type to be able to output `Article` schema, the post type needs to support having an Author. 
You can add that simply by adding this, for a given post type `book`:

```php
add_post_type_support( 'book', 'author' );
```

This currently does not work for the `page` post type. We are fixing this.

### Add images to your Article Schema
If you want to add an image to an object programmatically, you can do it as follows. Note that we use the `YoastSEO`
surface to get both the `canonical` from the `meta` surface as the `helpers` surface to access the `schema->image`
functionality.

```php
add_filter( 'wpseo_schema_article', 'example_change_article' );

/**
 * Adds images to Article Schema data.
 *
 * @param array $data Schema.org Article data array.
 *
 * @return array Schema.org Article data array.
 */
function example_change_article( $data ) {
    // This is the attachment ID for our image.
    $attachment_id = 12345;

    // We're going to create a graph piece for our image. Every graph piece always needs a Schema ID, so it can
    // be referenced by other graph pieces, best practice is to base that on the canonical adding an ID that's
    // always going to be unique.
    $schema_id     = YoastSEO()->meta->for_current_page()->canonical . '#/schema/image/' . $attachment_id;                 
    $data['image'] = new WPSEO_Schema_Image( $schema_id );

    return $data;
}
```

Instead of `YoastSEO()->helpers->schema->image->generate_from_attachment_id()` you can also use
`YoastSEO()->helpers->schema->image->generate_from_url()` which takes, as you've guessed, a URL as input.

To make more changes to our Schema output, see the [Yoast SEO Schema API](../api.md).
