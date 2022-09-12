---
id: video
title: Schema piece - VideoObject
sidebar_label: Video (VideoObject)
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/pieces/video.md
description: Describes an individual video (usually in the context of an embedded media object).
---
import YoastSchemaExample from '../../../../../developer-site/src/components/YoastSchemaExample';

Describes an individual video (usually in the context of an embedded media object).

## Triggers
Should be added as top-level nodes in the graph, as/when required by other nodes. E.g., when a `WebPage` contains an embedded video.

## Required properties
A valid `VideoObject` must have the following properties.

* `@type`: `VideoObject`.
* `@id`: The site's home URL appended by `#/schema/VideoObject/{{ID}}`, where `{{ID}}` is a unique identifier.
* `name`: The title of the video.
* `description`: A description of the video (falling back to the `caption`, then to 'No description').
* `thumbnail`: A reference-by-ID to an `ImageObject` representing the video content.
* `uploadDate`: The date the video was published, in ISO 8601 format (e.g., `2020-01-20`).

## Failure scenarios
If any of the required fields are missing or invalid, the node should not be output.

If the node is not output, any entities which would otherwise have declared a relationship with the `VideoObject` (e.g., as a part of an `Article`) should remove those references.

## Optional properties
The following should be added whenever available and valid:

* `caption`: A caption summarising the video.
* `contentUrl`: A URL pointing directly to the video file.
* `embedUrl`: A URL pointing to a player for the video.
* `duration`: The duration of the video in ISO 8601 format.
* `width`: The width of the video in pixels.
* `height`: The height of the video in pixels.
* `isFamilyFriendly`: Whether the video should be considered 'family friendly', default to `true`, may be set to `false`.
* `inLanguage`: The language code for the content of the video; e.g., `en-GB`.

## Conditional properties
Optional properties which should only be output when the required criteria is met.

#### On AMP templates
* `publisher`: A reference-by-ID to the publisher of the video.

## Examples

### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "VideoObject",
              "@id": "https://www.example.com/#/schema/VideoObject/abc123",
              "name": "Example video",
              "description": "Example video description",
              "thumbnailUrl": {
                  "@id": "https://www.example.com/uploads/example-image.jpg"
              },
              "uploadDate": "2016-03-31T08:00:00+08:00"
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
              "@id": "https://www.example.com/#/schema/VideoObject/abc123",
              "@type": "VideoObject",
              "contentUrl": "https://www.example.com/videos/video123.mp4",
              "description": "Example video description",
              "duration": "PT1M54S",
              "embedUrl": "https://www.example.com/videos/embed/video123/",
              "height": 640,
              "inLanguage": "en-US",
              "isFamilyFriendly": true,
              "name": "Example video",
              "thumbnail": {
                  "@id": "https://www.example.com/uploads/example-image.jpg"
              },
              "uploadDate": "2016-03-31",
              "width": 480
          }
      ]
  }`}
</YoastSchemaExample>
