---
id: surfaces-api
title: Yoast SEO - Surfaces API
sidebar_label: Surfaces API
description: Retrieve metadata from a post or URL, seamlessly.
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/apis/surfaces-api.md
---

In Yoast SEO 14.0 we introduced a formal way of integrating Yoast SEO into your code. We've added what's called a *surface*, called `YoastSEO()`. This surface gives easy access to lots of the features Yoast SEO has to offer.

## Easily access SEO data for the current page
All of the SEO data for the current page can be easily accessed through our surface.

For example, this code provides the page's title as a variable:

```php
$title = YoastSEO()->meta->for_current_page()->title;
```

This code immediately outputs the page's meta description:

```php
echo YoastSEO()->meta->for_current_page()->description;
```

This code outputs the estimated reading time for the current page.

```php
echo (string) YoastSEO()->meta->for_current_page()->estimated_reading_time_minutes, " minutes";
```

The `current_page` surface exposes every bit of data we have on the current page, which all work in the same way; it's a long list:


| Variable | Type | Description |
| --- | --- | --- |
| canonical | string | The canonical URL for the current page. |
| description | string | The meta description for the current page, if set. |
| title | string | The SEO title for the current page. |
| id | string | The requested object ID. |
| site_name | string | The site name from the Yoast SEO settings. |
| wordpress_site_name | string | The site name from the WordPress settings. |
| site_url | string | The main URL for the site. |
| company_name | string | The company name from the Knowledge Graph settings. |
| company_logo_id | int | The attachment ID for the company logo. |
| site_user_id | int | If the site represents a 'person', this is the ID of the accompanying user profile. |
| site_represents | string | Whether the site represents a 'person' or a 'company'. |
| site_represents_reference | array|false | The schema reference ID for what this site represents. |
| breadcrumbs_enabled | bool | Whether breadcrumbs are enabled or not. |
| schema_page_type | string | The Schema page type. |
| main_schema_id | string | Schema ID that points to the main Schema thing on the page, usually the webpage or article Schema piece. |
| page_type | string | The Schema page type. |
| meta_description | string | The meta description for the current page, if set. |
| robots | array | An array of the robots values set for the current page. |
| googlebot | array | The meta robots values we specifically output for Googlebot on this page. |
| rel_next | string | The next page in the series, if any. |
| rel_prev | string | The previous page in the series, if any. |
| open_graph_enabled | bool | Whether OpenGraph is enabled on this site. |
| open_graph_publisher | string | The OpenGraph publisher reference. |
| open_graph_type | string | The og:type. |
| open_graph_title | string | The og:title. |
| open_graph_description | string | The og:description. |
| open_graph_images | array | The array of images we have for this page. |
| open_graph_url | string | The og:url. |
| open_graph_site_name | string | The og:site_name. |
| open_graph_article_publisher | string | The article:publisher value. |
| open_graph_article_author | string | The article:author value. |
| open_graph_article_published_time | string | The article:published_time value. |
| open_graph_article_modified_time | string | The article:modified_time value. |
| open_graph_locale | string | The og:locale for the current page. |
| schema | array | The entire Schema array for the current page. |
| twitter_card | string | The Twitter card type for the current page. |
| twitter_title | string | The Twitter card title for the current page. |
| twitter_description | string | The Twitter card description for the current page. |
| twitter_image | string | The Twitter card image for the current page. |
| twitter_creator | string | The Twitter card author for the current page. |
| twitter_site | string | The Twitter card site reference for the current page. |
| source | array | The source object for most of this page data. |
| breadcrumbs | array | The breadcrumbs array for the current page. |
| estimated_reading_time_minutes | int | The estimated reading time in minutes for the content. | 

Whether you need the *OpenGraph description* or the *robots array*, this has you covered. Get used to opening your favorite IDE, typing `YoastSEO()->meta->for_current_page()->` and see the type hints for the exact bit of data you need.

## Deprecated properties
| Variable | Type | Description | Deprecated |
| --- | --- | --- |
| open_graph_fb_app_id | string | The Facebook App ID. | Yoast SEO 15.5 (Dec 2020) |

## For other pages
Getting data for any page works in almost exactly the same way as getting data for the current page. You just need to provide an ID, or a URL.

E.g., get the canonical URL value for a post with an ID of *2*.

```php
YoastSEO()->meta->for_post( 2 )->canonical;
```

E.g., get the title of a page with a URL of `https://www.example.com/example-page/`:
```php
YoastSEO()->meta->for_url( 'https://www.example.com/example-page/' )->title;
```

NOTE: If a URL doesn't exist in our Indexables table, then this method will return `false`.

## Access to our helpers

Sometimes you need more than just the raw SEO data of a page. For instance, you need to know whether the current post type should be indexable at all. Well, our `post_type` helper can help with that:

```php
YoastSEO()->helpers->post_type->is_indexable( get_post_type() );
```

This will return a simple `boolean`.

If you want a list of indexable post types, you should use:

```php
$public_post_types = YoastSEO()->helpers->post_type->get_public_post_types();
```

The same works for taxonomies:

```php
YoastSEO()->helpers->taxonomy->is_indexable( 'category' );
```

There are quite a few of these helpers, and not all of them may be equally useful to you. But do have a look around in your IDE and see which ones we have to offer, this too is a rather large list!
