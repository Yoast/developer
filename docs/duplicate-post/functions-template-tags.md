---
id: functions-template-tags
title: Yoast Duplicate Post - Functions and template tags
sidebar_label: Functions & template tags
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/duplicate-post/functions-template-tags.md
---

This page contains a list of functions that can be used in plugins and template files to interact with Duplicate Posts.

## `duplicate_post_clone_post_link`

Displays a link to clone the current post, if a user is logged in and allowed to copy the post. Can be used within [The Loop](https://codex.wordpress.org/The_Loop) or outside of it. If outside the loop, you’ll need to pass the post ID.
It is modeled after [`edit_post_link()`](https://codex.wordpress.org/Function_Reference/edit_post_link).

### Usage

```php
<?php duplicate_post_clone_post_link( $link, $before, $after, $id ); ?>
```

### Parameters

 * `$link` (string)(optional) - The link text. Defaults to `__('Clone','duplicate-post')`.
 * `$before` (string)(optional) - Text to put before the link text. Defaults to an empty string.
 * `$after` (string)(optional) - Text to put after the link text. Defaults to an empty string.
 * `$id` (int)(optional) - Post ID. Defaults to the current post ID.

## `duplicate_post_get_original`

Returns the original post, either as a post object, an associative array or a numeric array (depending on the `$output` parameter). If no original post can be found, it returns `null`.

It relies on the `_dp_original` custom field, which is set to the original ID every time the plugin creates a copy.
It is modeled after [`get_post()`](https://codex.wordpress.org/Function_Reference/get_post).

### Usage

```php
<?php $original_post = duplicate_post_get_original( $post, $output ); ?>
```

### Parameters

 * `$post` (int|WP_Post|null)(optional) - Post ID or post object. Defaults to the global `$post`. 
 * `$output` (string)(optional) - The required return type. One of `OBJECT`, `ARRAY_A` or `ARRAY_N`, which correspond to a `WP_Post` object, an associative array, or a numeric array, respectively. Defaults to `OBJECT`.

## `duplicate_post_create_duplicate`

Creates a duplicate of the post object passed as the first parameter, according to the current settings. This applies to everything except for status: The original status is copied by default unless a new status is explicitly specified.

### Usage

```php
<?php $new_post_id = duplicate_post_create_duplicate( $post, $status, $parent_id ); ?>

```

### Parameters

 * `$post` (WP_Post) - The post object to duplicate.
 * `$status` (string)(optional) - The status to apply to the duplicated post object. Defaults to the orignal post's status.
 * `$parent_id` (int)(optional) - The ID of the post to set as the parent for the duplicated post. Defaults to an empty string.
 
