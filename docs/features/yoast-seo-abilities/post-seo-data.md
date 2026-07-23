---
id: post-seo-data
title: "Yoast SEO Abilities - Post SEO data"
sidebar_label: Post SEO data
description: This documentation explains the abilities that read and update the full SEO metadata of a post.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Yoast SEO registers two abilities for working with the full SEO metadata of a post: one for reading and one for updating.

| Ability | Direction | Identifies the post by |
|---|---|---|
| `yoast-seo/get-post-seo-data` | Read | `post_id`, `permalink`, or `title` keywords |
| `yoast-seo/update-post-seo-data` | Write | `post_id` or `permalink` |

Both are listed at `/wp-json/wp-abilities/v1/abilities?category=yoast-seo`.

## Get Post SEO data

### Input

The ability accepts one of three identifiers. At least one is required.

* `post_id` – the numeric ID of the post. Integer, minimum 1.
* `permalink` – the exact stored permalink (URL) of the post. String.
* `title` – keywords to search for in post titles. String. Provide a comma-separated list to search for several phrases at once; each value is matched as a whole phrase against the post title, and a post matching any value is returned. At most 10 phrases are used per request; any beyond the first 10 are ignored.

When using a `title` search an additional `page` parameter is available:

* `page` – the 1-based result page to return. Matches are ordered most recently modified first, so request a later page to reach older matches. An empty result means there are no further pages. Integer, minimum 1, defaults to 1.

### Output

The ability returns an **array** of objects, one per matching post. Each object contains:

| Field | Type | Description |
|---|---|---|
| `post_id` | integer | The numeric post ID. |
| `post_title` | string\|null | The post title. |
| `permalink` | string\|null | The post permalink. |
| `post_type` | string | The post type slug (e.g. `post`, `page`). |
| `post_status` | string\|null | The post status (e.g. `publish`, `draft`). |
| `seo_title` | string\|null | The custom SEO title template, or `null` when none is set. |
| `seo_title_rendered` | string\|null | The SEO title as output on the front end — global default template applied when no custom value is set, with replacement variables expanded. `null` when nothing is output. |
| `meta_description` | string\|null | The custom meta description, or `null` when none is set. |
| `meta_description_rendered` | string\|null | The meta description as output on the front end. `null` when nothing is output. |
| `focus_keyphrase` | string\|null | The focus keyphrase, or `null` when none is set. |
| `canonical` | string\|null | The custom canonical URL, or `null` when none is set. |
| `canonical_rendered` | string\|null | The canonical URL as output on the front end. `null` when nothing is output. |
| `is_cornerstone` | boolean | Whether the post is marked as cornerstone content. |
| `noindex` | boolean\|null | `true` = noindex set; `false` = forced to index; `null` = no setting stored, post-type default applies. |
| `nofollow` | boolean | Whether the meta robots `nofollow` directive is set. |
| `noimageindex` | boolean | Whether the meta robots `noimageindex` directive is set. |
| `noarchive` | boolean | Whether the meta robots `noarchive` directive is set. |
| `nosnippet` | boolean | Whether the meta robots `nosnippet` directive is set. |
| `open_graph_title` | string\|null | The custom Open Graph title, or `null` when none is set. |
| `open_graph_title_rendered` | string\|null | The Open Graph title as output on the front end. `null` when nothing is output. |
| `open_graph_description` | string\|null | The custom Open Graph description, or `null` when none is set. |
| `open_graph_description_rendered` | string\|null | The Open Graph description as output on the front end. `null` when nothing is output. |
| `twitter_title` | string\|null | The custom X/Twitter title, or `null` when none is set. |
| `twitter_title_rendered` | string\|null | The X/Twitter title as output on the front end. `null` when nothing is output. |
| `twitter_description` | string\|null | The custom X/Twitter description, or `null` when none is set. |
| `twitter_description_rendered` | string\|null | The X/Twitter description as output on the front end. `null` when nothing is output. |
| `schema_page_type` | string\|null | The Schema.org page type for the post, or `null` when using the default. |
| `schema_article_type` | string\|null | The Schema.org article type for the post, or `null` when using the default. |
| `seo_score` | string | SEO analysis score: one of `na`, `bad`, `ok`, `good`. |
| `readability_score` | string | Readability analysis score: one of `na`, `bad`, `ok`, `good`. |
| `inclusive_language_score` | string | Inclusive language analysis score: one of `na`, `bad`, `ok`, `good`. |

The `*_rendered` fields carry the value as it is actually output on the front end: the global default template is applied where no custom value is set, and replacement variables such as `%%title%%` or `%%sitename%%` are expanded.

### Usage

Send a `GET` request to the ability's `/run` endpoint. To retrieve the SEO data for a specific post by ID:

```
GET /wp-json/wp-abilities/v1/abilities/yoast-seo/get-post-seo-data/run?input[post_id]=42
```

By permalink:

```
GET /wp-json/wp-abilities/v1/abilities/yoast-seo/get-post-seo-data/run?input[permalink]=https%3A%2F%2Fexample.com%2Fhiking-boots%2F
```

By title keywords (returns all posts whose title contains "hiking boots" or "trail gear", page 1):

```
GET /wp-json/wp-abilities/v1/abilities/yoast-seo/get-post-seo-data/run?input[title]=hiking+boots%2C+trail+gear
```

A successful response for a single post might look like:

```json
[
    {
        "post_id": 42,
        "post_title": "Best Waterproof Hiking Boots for 2025",
        "permalink": "https://example.com/hiking-boots/",
        "post_type": "post",
        "post_status": "publish",
        "seo_title": "Best Waterproof Hiking Boots — %%sitename%%",
        "seo_title_rendered": "Best Waterproof Hiking Boots — My Outdoor Blog",
        "meta_description": null,
        "meta_description_rendered": null,
        "focus_keyphrase": "waterproof hiking boots",
        "canonical": null,
        "canonical_rendered": "https://example.com/hiking-boots/",
        "is_cornerstone": false,
        "noindex": null,
        "nofollow": false,
        "noimageindex": false,
        "noarchive": false,
        "nosnippet": false,
        "open_graph_title": null,
        "open_graph_title_rendered": "Best Waterproof Hiking Boots — My Outdoor Blog",
        "open_graph_description": null,
        "open_graph_description_rendered": null,
        "twitter_title": null,
        "twitter_title_rendered": null,
        "twitter_description": null,
        "twitter_description_rendered": null,
        "schema_page_type": null,
        "schema_article_type": null,
        "seo_score": "good",
        "readability_score": "ok",
        "inclusive_language_score": "na"
    }
]
```

## Update Post SEO data

### Input

Identify the post to update using either `post_id` or `permalink`. At least one identifier is required; title keywords are **not** accepted because a title search may match multiple posts.

All other fields are optional and use **patch semantics**: only the fields you include are changed. A field set to `null` or `""` clears the stored value and resets it to the post-type default. Fields you omit are left unchanged.

| Field | Type | Description |
|---|---|---|
| `post_id` | integer | The numeric post ID. Minimum 1. |
| `permalink` | string | The exact stored permalink of the post to update. |
| `seo_title` | string\|null | The custom SEO title template. `null` clears it. |
| `meta_description` | string\|null | The custom meta description. `null` clears it. |
| `focus_keyphrase` | string\|null | The focus keyphrase. Maximum 191 characters. `null` clears it. |
| `canonical` | string\|null | The custom canonical URL. `null` clears it. |
| `is_cornerstone` | boolean | Whether the post should be marked as cornerstone content. |
| `noindex` | boolean\|null | `true` = set noindex; `false` = force index; `null` = clear and use the post-type default. |
| `nofollow` | boolean | Whether to set the meta robots `nofollow` directive. |
| `noimageindex` | boolean | Whether to set the meta robots `noimageindex` directive. |
| `noarchive` | boolean | Whether to set the meta robots `noarchive` directive. |
| `nosnippet` | boolean | Whether to set the meta robots `nosnippet` directive. |
| `open_graph_title` | string\|null | The custom Open Graph title. `null` clears it. |
| `open_graph_description` | string\|null | The custom Open Graph description. `null` clears it. |
| `twitter_title` | string\|null | The custom X/Twitter title. `null` clears it. |
| `twitter_description` | string\|null | The custom X/Twitter description. `null` clears it. |
| `schema_page_type` | string\|null | The Schema.org page type. Must be one of the supported page types. `null` clears it. |
| `schema_article_type` | string\|null | The Schema.org article type. Must be one of the supported article types. `null` clears it. |

### Output

On success, the ability returns a **single object** in the same shape as one item from the `get-post-seo-data` output — the full post SEO data after the update has been applied.

### Usage

Send a `POST` request to the ability's `/run` endpoint with the input as a JSON body. To update the focus keyphrase for a post by permalink:

```
POST /wp-json/wp-abilities/v1/abilities/yoast-seo/update-post-seo-data/run
Content-Type: application/json

{
    "input": {
        "permalink": "https://example.com/hiking-boots/",
        "focus_keyphrase": "waterproof hiking boots"
    }
}
```

To clear the custom SEO title for a post by ID and mark it as cornerstone content:

```
POST /wp-json/wp-abilities/v1/abilities/yoast-seo/update-post-seo-data/run
Content-Type: application/json

{
    "input": {
        "post_id": 42,
        "seo_title": null,
        "is_cornerstone": true
    }
}
```

The response is the full SEO data object for the post after the update, in the same format as a single `get-post-seo-data` result.

## Full definition

<Tabs>
<TabItem value="get" label="get-post-seo-data">

```json
{
    "name": "yoast-seo/get-post-seo-data",
    "label": "Get Post SEO Data",
    "description": "Get the SEO data for a post. Identify the post by post_id, by permalink (URL), or by title keywords; the title may be a comma-separated list and returns the SEO data for every post matching any of the values, paginated most recently modified first (use the page parameter to reach older matches). At least one identifier is required.",
    "category": "yoast-seo",
    "input_schema": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
            "post_id": {
                "type": "integer",
                "description": "The ID of the post to retrieve.",
                "minimum": 1
            },
            "permalink": {
                "type": "string",
                "description": "The permalink (URL) of the post to retrieve."
            },
            "title": {
                "type": "string",
                "description": "Keywords to search for in post titles. Provide a comma-separated list to search for several titles at once; each value is matched as a whole phrase against the post title, and a post matching any value is returned. At most 10 phrases are used per request; any beyond the first 10 are ignored. Results are paginated to 10 entities per page; see the page parameter."
            },
            "page": {
                "type": "integer",
                "description": "The page of title-search results to return, 1-based and defaulting to 1. Matches are ordered most recently modified first, so request a later page to reach older matches. An empty result means there are no further pages. Only applies to a title search.",
                "minimum": 1,
                "default": 1
            }
        }
    },
    "output_schema": {
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "post_id":                         { "type": "integer" },
                "post_title":                      { "type": ["string", "null"] },
                "permalink":                       { "type": ["string", "null"] },
                "post_type":                       { "type": "string" },
                "post_status":                     { "type": ["string", "null"] },
                "seo_title":                       { "type": ["string", "null"] },
                "seo_title_rendered":              { "type": ["string", "null"] },
                "meta_description":                { "type": ["string", "null"] },
                "meta_description_rendered":       { "type": ["string", "null"] },
                "focus_keyphrase":                 { "type": ["string", "null"] },
                "canonical":                       { "type": ["string", "null"] },
                "canonical_rendered":              { "type": ["string", "null"] },
                "is_cornerstone":                  { "type": "boolean" },
                "noindex":                         { "type": ["boolean", "null"] },
                "nofollow":                        { "type": "boolean" },
                "noimageindex":                    { "type": "boolean" },
                "noarchive":                       { "type": "boolean" },
                "nosnippet":                       { "type": "boolean" },
                "open_graph_title":                { "type": ["string", "null"] },
                "open_graph_title_rendered":       { "type": ["string", "null"] },
                "open_graph_description":          { "type": ["string", "null"] },
                "open_graph_description_rendered": { "type": ["string", "null"] },
                "twitter_title":                   { "type": ["string", "null"] },
                "twitter_title_rendered":          { "type": ["string", "null"] },
                "twitter_description":             { "type": ["string", "null"] },
                "twitter_description_rendered":    { "type": ["string", "null"] },
                "schema_page_type":                { "type": ["string", "null"] },
                "schema_article_type":             { "type": ["string", "null"] },
                "seo_score":                       { "type": "string", "enum": ["na", "bad", "ok", "good"] },
                "readability_score":               { "type": "string", "enum": ["na", "bad", "ok", "good"] },
                "inclusive_language_score":        { "type": "string", "enum": ["na", "bad", "ok", "good"] }
            }
        }
    },
    "meta": {
        "annotations": {
            "readonly": true,
            "destructive": false,
            "idempotent": true
        },
        "show_in_rest": true,
        "mcp": {
            "public": true
        }
    }
}
```

</TabItem>
<TabItem value="update" label="update-post-seo-data">

```json
{
    "name": "yoast-seo/update-post-seo-data",
    "label": "Update Post SEO Data",
    "description": "Update the SEO data for a single post. Identify the post by post_id or by permalink (URL). Only the fields you provide are changed; a provided empty value clears that field.",
    "category": "yoast-seo",
    "input_schema": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
            "post_id":                { "type": "integer", "minimum": 1 },
            "permalink":              { "type": "string" },
            "seo_title":              { "type": ["string", "null"] },
            "meta_description":       { "type": ["string", "null"] },
            "focus_keyphrase":        { "type": ["string", "null"], "maxLength": 191 },
            "canonical":              { "type": ["string", "null"] },
            "is_cornerstone":         { "type": "boolean" },
            "noindex":                { "type": ["boolean", "null"] },
            "nofollow":               { "type": "boolean" },
            "noimageindex":           { "type": "boolean" },
            "noarchive":              { "type": "boolean" },
            "nosnippet":              { "type": "boolean" },
            "open_graph_title":       { "type": ["string", "null"] },
            "open_graph_description": { "type": ["string", "null"] },
            "twitter_title":          { "type": ["string", "null"] },
            "twitter_description":    { "type": ["string", "null"] },
            "schema_page_type":       { "type": ["string", "null"] },
            "schema_article_type":    { "type": ["string", "null"] }
        }
    },
    "output_schema": {
        "type": "object",
        "properties": {
            "post_id":                         { "type": "integer" },
            "post_title":                      { "type": ["string", "null"] },
            "permalink":                       { "type": ["string", "null"] },
            "post_type":                       { "type": "string" },
            "post_status":                     { "type": ["string", "null"] },
            "seo_title":                       { "type": ["string", "null"] },
            "seo_title_rendered":              { "type": ["string", "null"] },
            "meta_description":                { "type": ["string", "null"] },
            "meta_description_rendered":       { "type": ["string", "null"] },
            "focus_keyphrase":                 { "type": ["string", "null"] },
            "canonical":                       { "type": ["string", "null"] },
            "canonical_rendered":              { "type": ["string", "null"] },
            "is_cornerstone":                  { "type": "boolean" },
            "noindex":                         { "type": ["boolean", "null"] },
            "nofollow":                        { "type": "boolean" },
            "noimageindex":                    { "type": "boolean" },
            "noarchive":                       { "type": "boolean" },
            "nosnippet":                       { "type": "boolean" },
            "open_graph_title":                { "type": ["string", "null"] },
            "open_graph_title_rendered":       { "type": ["string", "null"] },
            "open_graph_description":          { "type": ["string", "null"] },
            "open_graph_description_rendered": { "type": ["string", "null"] },
            "twitter_title":                   { "type": ["string", "null"] },
            "twitter_title_rendered":          { "type": ["string", "null"] },
            "twitter_description":             { "type": ["string", "null"] },
            "twitter_description_rendered":    { "type": ["string", "null"] },
            "schema_page_type":                { "type": ["string", "null"] },
            "schema_article_type":             { "type": ["string", "null"] },
            "seo_score":                       { "type": "string", "enum": ["na", "bad", "ok", "good"] },
            "readability_score":               { "type": "string", "enum": ["na", "bad", "ok", "good"] },
            "inclusive_language_score":        { "type": "string", "enum": ["na", "bad", "ok", "good"] }
        }
    },
    "meta": {
        "annotations": {
            "readonly": false,
            "destructive": false,
            "idempotent": true
        },
        "show_in_rest": true,
        "mcp": {
            "public": true
        }
    }
}
```

</TabItem>
</Tabs>

## How to disable them programmatically

You can unregister either or both of these abilities through the WordPress-native `wp_abilities_api_init` action:

```php
<?php
add_action( 'wp_abilities_api_init', function() {
        $abilities = [
            'yoast-seo/get-post-seo-data',
            'yoast-seo/update-post-seo-data',
        ];
        foreach ( $abilities as $ability ) {
            if ( wp_has_ability( $ability ) ) {
                wp_unregister_ability( $ability );
            }
        }
    }, 20
); // Run after Yoast SEO registers at default priority 10
```
