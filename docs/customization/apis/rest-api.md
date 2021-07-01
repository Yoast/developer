---
id: rest-api
title: Yoast SEO - REST API
sidebar_label: REST API
description: Get all of the metadata for a post or URL in a single request, and as part of WordPress' WP-JSON response.
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/apis/rest-api.md
---
import Alert from '@site/src/components/Alert';

<Alert>
The 'raw' `json` data format described below is only available in Yoast SEO versions 16.7 and upwards.
</Alert>

Yoast SEO includes a REST API which returns all of the SEO metadata (meta tags, schema.org data, and more) for any URL on a site. This makes it very easy for headless WordPress sites to use Yoast SEO to manage all of their SEO considerations.

## Yoast SEO REST API syntax
You can retrieve the SEO metadata for a page or URL in two different ways; by querying the object using [WordPress' native WP REST API](https://developer.wordpress.org/rest-api/reference/), or, by querying a specific URL.

### 1. Get SEO metadata as part of WordPress' native WP REST API responses
Many headless WordPress implementations take advantage of WordPress' native WP REST API to retrieve data about specific posts or objects.

Typically, this involves making a request to a URL like `https://example.com/wp-json/wp/v2/posts/1` (a specific post by ID), `http://example.com/wp-json/wp/v2/posts?slug=hello-world` (a specific post by slug) or `http://example.com/wp-json/wp/v2/types/books` (a custom post type with a public archive).

When Yoast SEO is active, we append *two* additional fields to these responses: `yoast_head` and `yoast_head_json`.

### 2. Query a specific URL
In some cases, it may be easier or more preferable to query a specific URL (rather than an object identifier). You can do that by making a `GET` request to `/wp-json/yoast/v1/get_head?url=`, for any URL. For example:

```
https://example.com/wp-json/yoast/v1/get_head?url=https://example.com/hello-world/
```

This queries the URL `https://example.com/hello-world/` (on `https://example.com`), and will return the following JSON properties: `html`, `json` and `status`.

## Understanding and using our data
In both of the above approaches, we return our SEO data in two formats.

1. The `yoast_head`/`html` properties contain an escaped, *prefabricated* blob which contains all the necessary meta tags (and schema.org output) for that page. This is the same content that we'd typically output in the `<head>` of a post or page.

2. The `yoast_head_json`/`json` properties provide the *raw data*, as a series of key/value pairs (and more complex objects) for each tag.

The `status` property returns a HTTP status code (typically `200` or `404`).

We recommend using the prefabricated approach whenever possible, as it takes advantage of our internal logic to guarantee an optimal combination of tags and values.

When using the *raw* data, we recommend using the *prefabricated* data as a reference to ensure that your implementation is correct.

### Example outputs
[PENDING]

## Altering the output
All of our metadata is customizable via our [Metadata API](https://developer.yoast.com/customization/apis/metadata-api).
Both the *prefabricated* and *raw* responses may be altered by filtering the respective *Presenter* for each tag.

## FAQs

### Can I use this API to *update* data?
The Yoast REST API is currently read-only, and doesn't currently support `POST` or `PUT` calls to update the data.

### The API returns a 404 status for an existing page
In some cases, you may find that the API returns a `404` status for an existing post, resource or URL.

This typically occurs when data for the resource isn't available in our *indexables* system. This can usually be fixed by either:

- Saving/updating the object in the WordPress admin interface, or;
- Using the "Optimize SEO Data" functionality in the Yoast SEO *Tools* menu.

Note that Yoast SEO will also return full responses for non-200 scenarios (including legitimate `404` errors), so that you can 'optimize' these scenarios effectively.

### Can I disable the API?
You can easily disable this API by going to the *features* section of your Yoast SEO admin, and disabling the feature toggle.
