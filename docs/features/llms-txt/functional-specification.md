---
id: functional-specification
title: "Yoast SEO: llms.txt - functional specification"
sidebar_label: llms.txt
description: This documentation explains how Yoast SEO generates llms.txt files.
---
This documentation explains how [Yoast SEO](https://yoast.com/wordpress/plugins/seo/) generates llms.txt files.

## What does the Yoast SEO llms.txt feature do?
- Enabling the llms.txt feature will create an llms.txt file in the root directory of your website
- This file will be be updated weekly by a scheduled action
## How does Yoast SEO choose content to include in the llms.txt file?
**Posts/pages/custom post types**
- Yoast SEO includes the 5 latest updated posts/pages/custom post types in the llms.txt file (posts are only included if they have been published in the last 12 months)
  - This logic includes giving priority to cornerstone content first
  - For pages, you can override this logic, if you select `Manual page selection` in the llms.txt settings
- Custom post types are included if the “Show tags in search results” box in the Search Appearance settings is ticked for the specific custom post type

**Categories/tags/terms for custom taxonomies**
- Yoast SEO includes the 5 categories/tags with the most content pieces attached to them
- Terms for custom taxonomies are included if the “Show terms in search results” box in the Search Appearance settings is ticked for the specific taxonomy

## How can I delete an llms.txt file?
- You might see a warning from Yoast SEO that an llms.txt file can't be automatically generated because of an existing llms.txt file
- You need to remove the existing file from the server for Yoast SEO to be able to generate it automatically
## How can I create my own llms.txt file?
- Disable the feature
- Create an llms.txt file in the root directory of your site
- Follow https://llmstxt.org/ for best practices
## Known limitations
- When there’s another llms.txt file, we make sure to not overwrite it. But if a plugin serves a llms.txt file dynamically, our txt file is created and since it has higher prio, it will be displayed in the example.com/llms.txt URL.
- If you deactivate Yoast SEO while having the llms.txt feature enabled and then you activate it again at some point, for the next 5 minutes after activation the "View the llms.txt file" button in the settings will point to a 404.
- We do not yet support markdown code blocks with special markdown characters. Currently these characters will be escaped. For example:
  - The site tagline contains the following string: “This is \`the *tagline\`”
  - llms.txt will output that as “This is \\\`the \\*tagline\\\`“

## Filters

There's a couple of filters available for the llms.txt feature.

### Change the way the filepath root is retrieved, to place the llms.txt file

* The llms.txt file uses `get_home_path()` to place the llms.txt file to the root of the WordPress installation. 
* If that's not writable, it then uses `$_SERVER['DOCUMENT_ROOT']`, if that's available. 
* For cases where neither is working, the `wpseo_llmstxt_filesystem_path` filter can be used:

```php
add_filter( 'wpseo_llmstxt_filesystem_path', 'custom_llmstxt_file_path' );

/**
 * Uses the WP_CONTENT_DIR const to retrieve the server's webroot instead of the default way.
 *
 * @return string The edited webroot.
 */
function custom_llmstxt_file_path() {
    return dirname( WP_CONTENT_DIR );
}
```

### Edit the BOM prefix that is added in the llms.txt file

* For encoding purposes, we prefix the llms.txt file with the Byte Order Mark (BOM) for UTF-8 (`"\xEF\xBB\xBF"`).
* For changing the BOM to a different encoding or even to remove it, the `wpseo_llmstxt_encoding_prefix` filter can be used:

```php
add_filter( 'wpseo_llmstxt_encoding_prefix', 'custom_llmstxt_encoding_prefix' );

/**
 * Edits out the UTF-8 BOM prefix from the llms.txt file and adds a UTF-16 BOM one.
 *
 * @return string The edited prefix.
 */
function custom_llmstxt_encoding_prefix() {
    return "\xFF\xFE";
}
```
* For removing the encoding prefix altogether, the same filter can be used:
```php
add_filter( 'wpseo_llmstxt_encoding_prefix', 'custom_llmstxt_encoding_prefix' );

/**
 * Removes UTF-8 BOM prefix from the llms.txt file.
 *
 * @return string The removed prefix.
 */
function custom_llmstxt_encoding_prefix() {
    return "";
}
```

### Edit the description in the posts lists

* By default, for posts that have a custom excerpt, we use that to add a description for each post:
```
## Posts
- [Post with excerpt](http://example.com/post-with-excerpt/): This is a custom excerpt.
- [Post without excerpt](http://example.com/post-without-excerpt/)
```
* For changing the default behavior, you can use the `wpseo_llmstxt_link_description` filter:

```php
<?php

/**
 * Changes the link description in the llms.txt file.
 *
 * @param string $link_description The description of the link.
 * @param string $post_id          The ID of the post that is being added as a link.
 * @param string $post_type        The post type of the post that is being added as a link.
 *
 * @return string The changed link description in the llms.txt file.
 */
function set_custom_llmstxt_link_description( $link_description, $post_id, $post_type ) {
    // Remove excerpt for specific post types.
    if ( in_array( $post_type, [ 'page' ], true ) ) {
      return '';
    }

    // Keep excerpt for other post types but make it more descriptive.
    return 'Custom description for post ID ' . $post_id . ', ' . $link_description;
}

add_filter( 'wpseo_llmstxt_link_description', 'set_custom_llmstxt_link_description', 10, 3 );
```
* The above snippet will remove descriptions from pages (if there are any) and adjust accordingly the descriptions for posts:
```
## Pages
- [Page with excerpt](http://example.com/page-with-excerpt/)

## Posts
- [Post with excerpt](http://example.com/post-1): Custom description for post ID 1, this is the custom excerpt.
```




