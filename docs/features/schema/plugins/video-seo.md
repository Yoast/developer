---
id: video-seo
title: "Yoast Video SEO for WordPress: Schema output"
image: https://yoast.com/shared-assets/opengraph/?title=Yoast%20Video%20SEO%20for%20WordPress:%20Schema%20output
sidebar_label: Video SEO for WordPress
description: Describes the schema output of Yoast's "Video SEO" plugin for WordPress.
---
The schema output for our [Video SEO plugin](https://yoast.com/wordpress/plugins/video-seo/) builds upon the [Yoast SEO schema output](yoast-seo.md), to add additional detail about embedded videos.

For all the post types you've enabled Video SEO for, it will automatically add a  `videoObject`  piece when it encounters a video embed on the page that it recognizes.

## Core logic
* Add a `videoObject` piece for each discovered video.
* Add a `video` property to the `Article`, containing an array of references-by-ID to each `videoObject` piece.
* Add an `itemList` containing references to each of the `videoObject` pieces, with a `mainEntityOfPage` property which references the `Article`.

## Additional scenarios

### On pages which don't have an `Article`
* Add the `video` property to the `WebPage`, instead of to the `Article`.
* Adapt the `mainEntityOfPage` property of the `itemList` to reference the `WebPage`.

## More information
* [Video Schema pieces](../pieces/video.md)
* [Article Schema pieces](../pieces/article.md)
* [WebPage Schema pieces](../pieces/webpage.md)
