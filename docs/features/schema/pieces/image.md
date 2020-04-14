---
id: image
title: Schema piece - ImageObject
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/pieces/image.md
---
import YoastSchemaExample from '../../../../../developer-site/src/components/YoastSchemaExample';

Describes an individual image (usually in the context of an embedded media object).

**NOTE**: Whilst an `image` node can accept a simple URL representing an image file, we always enforce the use of an `ImageObject` to enable referencing-by-ID. 

## Triggers
Should be added as top-level nodes in the graph, as/when required by other nodes. E.g., when a `WebPage` has a *featured image*.

## Required properties
A valid `ImageObject` must have the following properties.

* `@id`: The site's home URL appended by `#/schema/image/{{ID}}`, where `{{ID}}` is a globally unique, stable identifier (e.g., a database ID representing the image object).
* `url`: The fully-qualified, absolute URL of the image file (e.g., `https://www.example.com/images/cat.jpg` ).

## Failure scenarios

If any of the required fields are missing or invalid, the node should not be output.
If the node is not output, any entities which would otherwise have declared a relationship with the `Image` (e.g., as the `logo` of an `Organization` ) should remove those references.

## Optional properties
The following should be added whenever available and valid:

* `caption`: A text string describing the image.
	* Fall back to the image `alt` attribute if no specific `caption` field exists or is defined.

## Conditional properties
Optional properties which should only be output when the required criteria is met.

#### When both height and width dimensions are known

* `height`: The height of the image in pixels
* `width`: The width of the image in pixels

### When the image has a caption (or any other text properties)

* `inLanguage`: The language code for the textual content; e.g., `en-GB`.

## Examples
### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "ImageObject",
              "@id": "https://www.example.com/#/schema/image/abc123",
              "url": "https://www.example.com/uploads/example-image.jpg",
              "width": 250,
              "height": 250,
              "caption": "Example caption"
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
              "@type": "ImageObject",
              "@id": "https://www.example.com/#/schema/image/abc123",
              "url": "https://www.example.com/uploads/example-image.jpg",
              "caption": "Example caption",
              "inLanguage": "en-US",
              "width": 120,
              "height": 120
          }
      ]
  }`}
</YoastSchemaExample>
