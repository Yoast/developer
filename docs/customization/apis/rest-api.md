---
id: rest-api
title: Yoast SEO - REST API
sidebar_label: REST API
description: Get all of the metadata for a post or URL in a single request, and as part of WordPress' WP-JSON response.
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/apis/rest-api.md
---

In Yoast SEO 14.0 we introduced a REST API endpoint that'll give you all the metadata you need for a specific URL. This will make it very easy for headless WordPress sites to use Yoast SEO for all their SEO meta output.

There are two ways of using this: through its inclusion in the normal WP REST API responses and through our own endpoint.

## Inclusion in WP REST API responses
When you're retrieving a post like so:

`https://example.com/wp-json/wp/v2/posts/1` or `http://example.com/wp-json/wp/v2/posts?slug=hello-world`, you'll receive a normal [WP REST API](https://developer.wordpress.org/rest-api/reference/) response, with an additional field: `yoast_head`. This additional field will contain a blob with all the necessary meta tags for that page. This works for the `posts`, `pages`, `categories`, `tags` and all custom post types and custom taxonomies.

For post type archives, when you query the [types endpoint](https://developer.wordpress.org/rest-api/reference/post-types/) the meta is included there, also on the `yoast_head` field. If it is not there, the post type does not have a post type archive enabled.

## Yoast SEO REST API syntax
The syntax is very simple, you just `GET` to `/wp-json/yoast/v1/get_head?url=` with the proper URL, for example:

```
https://example.com/wp-json/yoast/v1/get_head?url=https://example.com/hello-world/
```

This will return the following:

```json
{
  "head": "the complete, escaped, <head> output for Yoast SEO",
  "status": 200,
}
```

The `head` contains the complete meta output for the page. This means the Yoast SEO REST API output contains everything:

* The title
* The meta description, if you have one
* Robots meta tags
* The canonical URL
* Our Schema output
* OpenGraph meta data
* Twitter meta data

For an example, see this output for [a post here on developer.yoast.com](https://developer.yoast.com/blog/wp-json/yoast/v1/get_head?url=https://developer.yoast.com/blog/upcoming-release-yoast-seo-14-0-indexables/).

### Can I use this API to update data as well?
The Yoast REST API doesn't currently supports `POST` or `PUT` calls to update the data. Patches adding this functionality are welcome though.

### The API returns 404 for an existing page?
If the `status` is not `200` but you're certain the page exists, you'll need to make sure your site is completely indexed. Just hitting save on the backend *should* save the post or page to our Indexables database. Note that Yoast SEO *will* return a head for other statuses too, so you *can* use the output on, for instance, `404` templates.

If you have a notice in your site's admin about indexing your site: please run that index process if you intend to rely on this API.

### I don't want this API on my site!
You can easily disable this API by going to SEO - General - Features and disabling the feature toggle.
