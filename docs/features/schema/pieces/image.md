---
id: image
title: Schema piece - ImageObject
image: https://yoast.com/shared-assets/opengraph/image.php?title=Schema%20piece%20-%20ImageObject
sidebar_label: Image (ImageObject)
description: Describes an individual image (usually in the context of an embedded media object).
---
import YoastSchemaExample from '../../../../src/components/YoastSchemaExample';

Describes an individual image (usually in the context of an embedded media object).

**NOTE**: Whilst an `image` property (of a given node) can accept a simple URL representing an image file, we always enforce the use of an `ImageObject` to enable referencing-by-ID.

## Triggers
Should be added as top-level nodes in the graph, as/when required by other nodes. E.g., when a `WebPage` has a *featured image*.

## Required properties
A valid `ImageObject` must have the following properties.

* `@type`: `ImageObject`.
* `@id`: The fully-qualified, absolute URL of the image file (e.g., `https://www.example.com/images/cat.jpg?size=large`).
* `url`: The fully-qualified, absolute URL of the image file (e.g., `https://www.example.com/images/cat.jpg?size=large`).
* `contentUrl`: The fully-qualified, absolute URL of the image file (e.g., `https://www.example.com/images/cat.jpg?size=large`).

## Failure scenarios
If any of the required fields are missing or invalid, the node should not be output.

If the node is not output, any entities which would otherwise have declared a relationship with the `Image` (e.g., as the `logo` of an `Organization`) should remove those references.

## Optional properties
The following should be added whenever available and valid:

* `caption`: A text string describing the image.
  * Fall back to the image `alt` attribute if no specific `caption` field exists or is defined.

## Conditional properties
Optional properties which should only be output when the required criteria is met.

### When both height and width dimensions are known
* `height`: The height of the image in pixels
* `width`: The width of the image in pixels

### When the image has a caption (or any other text properties)
* `inLanguage`: The language code for the textual content; e.g., `en-GB`.

## Notes
### The `contentUrl` and `url` properties are intentionally duplicated.
The `contentUrl` property more accurately describes/references the actual image resource than the `url` property (which doesn't disambiguate between the URL where the image resource 'resides', vs the location of the asset itself). Given that, we'd prefer to ***not set/use*** the `url` property - or, to reserve it for use in scenarios where it refers to the location of an image (e.g., an anchor/fragment link to part of a webpage).

However, Google’s testing tools throw errors in some scenarios when the `url` property is missing (for `logo` and `primaryImageOfPage` in the SDTT, and `primaryImageOfPage` in the RRT). Therefore, we simply add a `contentUrl` property, with a value of the image URL.

## Examples

### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "ImageObject",
              "@id": "https://www.example.com/uploads/example-image.jpg",
              "url": "https://www.example.com/uploads/example-image.jpg",
              "contentUrl": "https://www.example.com/uploads/example-image.jpg"
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
              "@id": "https://www.example.com/uploads/example-image.jpg",
              "url": "https://www.example.com/uploads/example-image.jpg",
              "contentUrl": "https://www.example.com/uploads/example-image.jpg",
              "caption": "Example caption",
              "inLanguage": "en-US",
              "width": 120,
              "height": 120
          }
      ]
  }`}
</YoastSchemaExample>
