---
id: webpage
title: Schema piece - WebPage
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/pieces/webpage.md
---
import YoastSchemaExample from '../../../../../developer-site/src/components/YoastSchemaExample';

Describes a single page on a website. Acts as a container for sub-page elements (such as `Article` ). Acts as a connector from a page's content to the parent 
`WebSite` (and in turn, to the `Organization` ).

May be transformed into a more specific type (such as `FAQPage` ) if the required conditions are met.

## Triggers
Should be output on all public pages, except for `4xx` and `5xx` range error pages/scenarios.

## Required properties
A valid `WebPage` must have the following properties.

* `@id`: The unmodified *canonical URL* of the page.
* `URL:` The unmodified *canonical URL* of the page.
* `name`: The *title* of the page.
* `isPartOf`: A reference-by-ID to the `WebSite` node.

### Failure scenarios
If any of the required fields are missing or invalid, the node should not be output.

If the node is not output, any entities which would otherwise have declared themselves to be part of the `WebPage` should remove those references 
(e.g., an `Article` which has a `mainEntityOfPage` property referencing the ID of the `WebPage` should unset that property).

## Optional properties
The following should be added whenever available and valid:

* `description`: The page's meta description content.
* `inLanguage`: The language code for the page; e.g., `en-GB`.
* `datePublished`: The time at which the page was originally published, in ISO 8601 format; e.g., `2015-10-31T16:10:29+00:00`.
* `dateModified`: The time at which the page was last modified, in ISO 8601 format; e.g., `2015-10-31T16:10:29+00:00`.
* `primaryImageOfPage`: A reference-by-ID to a node representing the page's featured image.
* `breadcrumb`: A reference-by-ID to a node representing the page's breadrumb structure [ [link](breadcrumb.md) ].
* `image`: An array of all images in the page content, referenced by ID (including the image referenced by the `primaryImageOfPage` ).
* `video`: An array of all videos in the page content, referenced by ID.
* `keywords`: An array of the names of tags attached to the page (e.g., `["cats","dogs","cake"]` ).
* `speakable`: A `SpeakableSpecification` object which identifies any content elements suitable for spoken results.
* `potentialAction`: A `ReadAction` object with values:
	* `target`: The unmodified *canonical URL* of the page.

## Conditional properties
Optional properties which should only be output when the required criteria is met.

### When the page is *authored*
* `author`: A reference-by-ID to the author of the page. Should *only* be output when the page is explicitly authored (e.g., on a page containing a native *Post* in WordPress).

### When the page has comments, and the page does *not* contain a valid Article
* `comment`: An array of references-by-ID to comments associated with the page.
* `commentCount`: An integer value of the total number of comments associated with the page.

### When it's a homepage
* Add an additional `about` property which references the main entity of the site (typically an `Organization` or `Person`, depending on user configuration).
* If there's no explicitly defined featured image for the page, set the `primaryImageOfPage` to the ( `imageObject` representing the) site's logo.

## Transformations
The `WebPage` type may be transformed in the following scenarios.

### Taxonomy indexes
When the query returns a loop of posts (e.g., a category archive, a blog homepage, or other taxonomy index) then, then the *type* property should be altered to an array of `[WebPage, CollectionPage]`.

### Profile pages
When the page is about a particular user (e.g., an member bio / author archive):

* The `type` property should be altered to an array of `[WebPage, ProfilePage]`.
* Add a `mainEntityOfPage` property to the `Person` which the page is about, which references the `WebPage` by ID.

### Search results
On search results pages, the *type* property should be altered to an array of `[WebPage, CollectionPage, SearchResultsPage]`.

## Examples
### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "WebPage",
              "@id": "https://www.example.com/example-page/",
              "url": "https://www.example.com/example-page/",
              "name": "Example page name",
              "isPartOf": {
                  "@id": "https://www.example.com/#/schema/website/abc123"
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
              "@type": "WebPage",
              "@id": "https://www.example.com/example-page/",
              "url": "https://www.example.com/example-page/",
              "name": "Example page name",
              "description": "Example page description",
              "keywords": "cats,dogs,cake",
              "isPartOf": {
                  "@id": "https://www.example.com/#/schema/website/abc123"
              },
              "inLanguage": "en-US",
              "datePublished": "2019-07-10T08:08:40+00:00",
              "dateModified": "2019-07-10T08:43:03+00:00",
              "breadcrumb": {
                  "@id": "https://www.example.com/example-page/#/schema/breadcrumb/abc123"
              },
              "primaryImageOfPage": {
                  "@id": "https://www.example.com/#/schema/image/abc123"
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
          }
      ]
  }`}
</YoastSchemaExample>
