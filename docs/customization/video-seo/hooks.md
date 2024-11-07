---
id: hooks
title: "Yoast Video SEO: Hooks"
sidebar_label: Hooks
---

The Yoast Video SEO plugin has a couple of hooks you can use to modify its usage, they're listed below:

## Output
### `wpseo_video_{$type}_details`
Argument: `$vid` (array), `$post` (WP_Post)

This filter allows changing the output of the video embed recognition functionality.
The `$vid` array contains, at a minimum, either a `player_loc` or `content_loc`, a `thumbnail_loc`, and a `type`.
You'll need to know the type to filter the output, but you could use this filter to, for instance, add a duration.

### `wpseo_video_family_friendly`
Arguments: `$family-friendly` (bool), `$post_id` (int)

This filter allows changing the family-friendly status of a video.

### `wpseo_video_rating`
Arguments: `$rating` (float), `$post_id` (int)

This filter allows changing the rating for a video. The rating is a value between 0 and 5.

### `wpseo_video_item`
Arguments: `$str` (string), `$post_id` (int)

This filter allows adding extra content to the Video XML sitemap.
The output that's added in `$str` defaults to an empty string.

### `wpseo_video_yandex_support`
Arguments: `$yandex_on` (bool)

This filters allows disabling the Yandex-specific meta tags in the Video XML sitemap.

## Input
### `wpseo_video_index_content`
Arguments: `$content` (string), `$vid` (array), `$post` (WP_Post)

Allows changing the content of a post before it is indexed.
This filter is mainly useful if the input content needs to be modified, have stuff added, etc.
