---
id: video-seo
title: "Yoast Video SEO for WordPress: Schema output"
sidebar_label: Video SEO for WordPress
description: Describes the schema output of Yoast's "Video SEO" plugin for WordPress.
---
The schema output for our [Video SEO plugin](https://yoast.com/wordpress/plugins/video-seo/) builds upon the [Yoast SEO schema output](yoast-seo.md), to add additional detail about embedded videos.

For all the post types you've enabled Video SEO for, it will automatically add a  `videoObject`  piece when it encounters a video embed on the page that it recognizes.

## Core logic
* Add a `videoObject` piece to the graph for each discovered video.
* Add a `video` property to the `WebPage`, containing an array of references-by-ID to each `videoObject` piece.

## Additional scenarios

### On pages which contain an `Article`
* Add a `video` property to the `Article`, containing an array of references-by-ID to each `videoObject` piece.

## More information
* [Video Schema pieces](../pieces/video.md)
* [Article Schema pieces](../pieces/article.md)
* [WebPage Schema pieces](../pieces/webpage.md)
