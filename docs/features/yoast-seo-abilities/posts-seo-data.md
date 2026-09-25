---
id: posts-seo-data
title: "Yoast SEO Abilities - Post's SEO data"
sidebar_label: Post's SEO data
description: This documentation explains the abilities that read and update the SEO data of individual posts.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Yoast SEO registers two abilities to work with the SEO data of individual posts: one to read it and one to update it.

| Ability | Type | Returns |
|---|---|---|
| `yoast-seo/get-post-seo-data` | Read-only | An array of SEO data objects, one per matched post |
| `yoast-seo/update-post-seo-data` | Write | The updated SEO data object for the post |

Both are listed at `/wp-json/wp-abilities/v1/abilities?category=yoast-seo`.

## Permissions
Unlike the [Analysis scores](analysis-scores.md) abilities, which are gated behind the Yoast SEO management capability (`wpseo_manage_options`), these two abilities are gated behind the advanced metadata capability (`wpseo_edit_advanced_metadata`), the same capability that gates the advanced and schema fields in the editor. On top of that, per-post edit access is always enforced: only posts the current user is allowed to edit are ever returned or updated.

## Annotations
Each ability declares a set of [behavior annotations](overview.md#annotations) as hints for AI agents and other MCP clients:

| Ability | Read-only | Destructive | Idempotent |
|---|---|---|---|
| `yoast-seo/get-post-seo-data` | Yes | No | Yes |
| `yoast-seo/update-post-seo-data` | No | Not declared (`null`) | Yes |

`update-post-seo-data` is not read-only, since it writes post data. Its destructive hint is left undeclared (`null`) rather than `false`: although the ability only edits Yoast's SEO metadata fields and never touches the post's content, writing a field overwrites its previous value and a provided empty value clears it, so some data loss is possible and the ability makes no non-destructive guarantee. It is idempotent because it only sets the specific fields you provide and sending the same request again leaves the post in the same state, rather than compounding the change.

## Identifying the post
Both abilities accept a `post_id` (an integer of 1 or higher) or a `permalink` (the post's URL) to locate the post. At least one identifier is required.

`get-post-seo-data` additionally accepts a `title` search, which `update-post-seo-data` deliberately does not, since an update must target a single, unambiguous post. That way, users can describe in human language what post they want data for and the ability will can find it quickly and efficiently.

## `get-post-seo-data`
Reads the SEO data for one or more posts.

### Input
Provide at least one of the following:

* `post_id` – the ID of the post to retrieve. An integer of 1 or higher.
* `permalink` – the permalink (URL) of the post to retrieve.
* `title` – keywords to search for in post titles. 
  * Pass a single phrase, or a comma-separated list to search for several titles at once. 
  * Each value is matched as a whole phrase against the post title, and a post matching any value is returned. 
  * At most 10 phrases are used per request; any beyond the first 10 are ignored. 
  * Results are paginated to 10 entities per page.
* `page` – the page of title-search results to return, 1-based and defaulting to 1. 
  * Matches are ordered most recently modified first, so request a later page to reach older matches. 
  * An empty result means there are no further pages. Only applies to a `title` search.

### Output
Returns an array of [post SEO data objects](#the-post-seo-data-object), one per matched post. A lookup by `post_id` or `permalink` returns at most one object.

### Usage
Send a _GET_ request to the ability's `/run` endpoint. To retrieve the SEO data of the post with ID 5:

```
/wp-json/wp-abilities/v1/abilities/yoast-seo/get-post-seo-data/run?input[post_id]=5
```

To retrieve the same post by its permalink instead, pass the post's full URL (URL-encoded) as `permalink`:

```
/wp-json/wp-abilities/v1/abilities/yoast-seo/get-post-seo-data/run?input[permalink]=https%3A%2F%2Fexample.com%2Fhomemade-sourdough-bread%2F
```

To search titles for either "homemade sourdough" or "breakfast", reaching the second page of matches:

```
/wp-json/wp-abilities/v1/abilities/yoast-seo/get-post-seo-data/run?input[title]=homemade%20sourdough,breakfast&input[page]=2
```

Doing so might yield the following result:

```json
[
    {
        "post_id": 5,
        "post_title": "How to Make Homemade Sourdough Bread from Scratch",
        "permalink": "https://example.com/homemade-sourdough-bread/",
        "post_type": "post",
        "post_status": "publish",
        "seo_title": null,
        "seo_title_rendered": "How to Make Homemade Sourdough Bread from Scratch - My Site",
        "meta_description": "A step-by-step guide to baking sourdough at home.",
        "meta_description_rendered": "A step-by-step guide to baking sourdough at home.",
        "focus_keyphrase": "Homemade sourdough bread",
        "canonical": null,
        "canonical_rendered": "https://example.com/homemade-sourdough-bread/",
        "is_cornerstone": true,
        "noindex": null,
        "nofollow": false,
        "noimageindex": false,
        "noarchive": false,
        "nosnippet": false,
        "open_graph_title": null,
        "open_graph_title_rendered": "How to Make Homemade Sourdough Bread from Scratch",
        "open_graph_description": null,
        "open_graph_description_rendered": "A step-by-step guide to baking sourdough at home.",
        "twitter_title": null,
        "twitter_title_rendered": "How to Make Homemade Sourdough Bread from Scratch",
        "twitter_description": null,
        "twitter_description_rendered": "A step-by-step guide to baking sourdough at home.",
        "schema_page_type": null,
        "schema_article_type": null,
        "seo_score": "good",
        "readability_score": "ok",
        "inclusive_language_score": "good"
    }
]
```

## `update-post-seo-data`
Updates the SEO data for a single post.

Only the fields you provide are changed; every other field is left untouched. A provided empty value (`""` or `null`, depending on the field) clears that field and lets Yoast SEO fall back to its default.

### Input
Identify the post with `post_id` **or** `permalink` (a `title` search is not accepted here), then provide any of the writable fields you want to change:

* `canonical` – the canonical URL. A string, or `null` to clear it.
* `is_cornerstone` – whether the post is marked as cornerstone content. A boolean.
* `noindex` – whether search engines should be told not to index this post. `true` sets noindex (the post is excluded from search results); `false` forces the post to be indexed; `null` clears the setting and falls back to the post-type default.
* `nofollow` – whether links on the post should not be followed. A boolean.
* `noimageindex` – whether images on the post should not be indexed. A boolean.
* `noarchive` – whether search engines should not show a cached copy of the post. A boolean.
* `nosnippet` – whether search engines should not show a snippet of the post in search results. A boolean.
* `schema_page_type` – the Schema.org page type for the post. Must be one of the supported page types, or an empty string / `null` to clear it and fall back to the default.
* `schema_article_type` – the Schema.org article type for the post. Must be one of the supported article types, or an empty string / `null` to clear it and fall back to the default.

The Schema page and article types accepted are exactly the ones the editor accepts, including any registered through the `wpseo_schema_article_types` filter. Supplying a value outside that set returns an error and changes nothing.

### Output
Returns the single, updated [post SEO data object](#the-post-seo-data-object), reflecting the state of the post after the update. This is the same shape as one entry of the `get-post-seo-data` array, so you can immediately confirm what was written.

### Usage
Send a _POST_ request to the ability's `/run` endpoint with an `input` object in the body. To mark the post with ID 5 as cornerstone content:

```
/wp-json/wp-abilities/v1/abilities/yoast-seo/update-post-seo-data/run
```

```json
{
    "input": {
        "post_id": 5,
        "is_cornerstone": true
    }
}
```

You can identify the post by its permalink instead, and change several fields at once:

```json
{
    "input": {
        "permalink": "https://example.com/homemade-sourdough-bread/",
        "noindex": true,
        "canonical": "https://example.com/sourdough/",
        "schema_page_type": null
    }
}
```

## The post SEO data object
Both abilities return the same object (`get-post-seo-data` inside an array, `update-post-seo-data` on its own). Its fields are:

| Field | Type | Description |
|---|---|---|
| `post_id` | integer | The post ID. |
| `post_title` | string \| null | The post title. |
| `permalink` | string \| null | The post's permalink (URL). |
| `post_type` | string | The post type slug. |
| `post_status` | string \| null | The post status, such as `publish` or `draft`. |
| `seo_title` | string \| null | The custom SEO title, or `null` when none is set. |
| `seo_title_rendered` | string \| null | The SEO title as output on the front end, with the default template applied and replacement variables expanded. |
| `meta_description` | string \| null | The custom meta description, or `null` when none is set. |
| `meta_description_rendered` | string \| null | The meta description as output on the front end. |
| `focus_keyphrase` | string \| null | The focus keyphrase, or `null` when none is set. |
| `canonical` | string \| null | The custom canonical URL, or `null` when none is set. |
| `canonical_rendered` | string \| null | The canonical URL as output on the front end. |
| `is_cornerstone` | boolean | Whether the post is marked as cornerstone content. |
| `noindex` | boolean \| null | Whether search engines are told not to index this post. `true` means noindex, `false` forces indexing, `null` means the post-type default applies. |
| `nofollow` | boolean | Whether links on the post are not to be followed. |
| `noimageindex` | boolean | Whether images in the post are not to be indexed. |
| `noarchive` | boolean | Whether search engines are told not to show a cached copy. |
| `nosnippet` | boolean | Whether search engines are told not to show a snippet. |
| `open_graph_title` | string \| null | The custom Open Graph title. |
| `open_graph_title_rendered` | string \| null | The Open Graph title as output on the front end. |
| `open_graph_description` | string \| null | The custom Open Graph description. |
| `open_graph_description_rendered` | string \| null | The Open Graph description as output on the front end. |
| `twitter_title` | string \| null | The custom Twitter title. |
| `twitter_title_rendered` | string \| null | The Twitter title as output on the front end. |
| `twitter_description` | string \| null | The custom Twitter description. |
| `twitter_description_rendered` | string \| null | The Twitter description as output on the front end. |
| `schema_page_type` | string \| null | The Schema.org page type for the post. |
| `schema_article_type` | string \| null | The Schema.org article type for the post. |
| `seo_score` | string | The result of the SEO analysis when the post was last saved: one of `na`, `bad`, `ok`, or `good`. |
| `readability_score` | string | The result of the readability analysis when the post was last saved. |
| `inclusive_language_score` | string | The result of the inclusive language analysis when the post was last saved. |

The `*_rendered` companion of a field carries the value as actually output on the front end: the global default template applied where no custom value is set, with replacement variables expanded. It is `null` when nothing is output. This lets you distinguish a field the user left empty (a `null` stored value with a non-`null` rendered value) from what a visitor and search engine actually see.

## Full definition
A _GET_ request to `/wp-json/wp-abilities/v1/abilities` returns the complete definition of each ability:

<Tabs>
<TabItem value="get" label="Get">

```json
{
    "name": "yoast-seo/get-post-seo-data",
    "label": "Get Post SEO Data",
    "description": "Get the SEO data for a post. Identify the post by post_id, by permalink (URL), or by title keywords; the title may be a comma-separated list and returns the SEO data for every post matching any of the values, paginated most recently modified first (use the page parameter to reach older matches). At least one identifier is required. Only posts the current user is allowed to edit are returned.",
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
                "post_id": { "type": "integer" },
                "post_title": { "type": ["string", "null"] },
                "permalink": { "type": ["string", "null"] },
                "post_type": { "type": "string" },
                "post_status": { "type": ["string", "null"] },
                "seo_title": { "type": ["string", "null"] },
                "seo_title_rendered": { "type": ["string", "null"] },
                "meta_description": { "type": ["string", "null"] },
                "meta_description_rendered": { "type": ["string", "null"] },
                "focus_keyphrase": { "type": ["string", "null"] },
                "canonical": { "type": ["string", "null"] },
                "canonical_rendered": { "type": ["string", "null"] },
                "is_cornerstone": { "type": "boolean" },
                "noindex": { "type": ["boolean", "null"] },
                "nofollow": { "type": "boolean" },
                "noimageindex": { "type": "boolean" },
                "noarchive": { "type": "boolean" },
                "nosnippet": { "type": "boolean" },
                "open_graph_title": { "type": ["string", "null"] },
                "open_graph_title_rendered": { "type": ["string", "null"] },
                "open_graph_description": { "type": ["string", "null"] },
                "open_graph_description_rendered": { "type": ["string", "null"] },
                "twitter_title": { "type": ["string", "null"] },
                "twitter_title_rendered": { "type": ["string", "null"] },
                "twitter_description": { "type": ["string", "null"] },
                "twitter_description_rendered": { "type": ["string", "null"] },
                "schema_page_type": { "type": ["string", "null"] },
                "schema_article_type": { "type": ["string", "null"] },
                "seo_score": { "type": "string", "enum": ["na", "bad", "ok", "good"] },
                "readability_score": { "type": "string", "enum": ["na", "bad", "ok", "good"] },
                "inclusive_language_score": { "type": "string", "enum": ["na", "bad", "ok", "good"] }
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
<TabItem value="update" label="Update">

```json
{
    "name": "yoast-seo/update-post-seo-data",
    "label": "Update Post SEO Data",
    "description": "Update the SEO data for a single post. Identify the post by post_id or by permalink (URL). Only the fields you provide are changed; a provided empty value clears that field. Only posts the current user is allowed to edit can be updated.",
    "category": "yoast-seo",
    "input_schema": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
            "post_id": {
                "type": "integer",
                "description": "The ID of the post to update.",
                "minimum": 1
            },
            "permalink": {
                "type": "string",
                "description": "The permalink (URL) of the post to update."
            },
            "canonical": { "type": ["string", "null"] },
            "is_cornerstone": { "type": "boolean" },
            "noindex": {
                "type": ["boolean", "null"],
                "description": "Whether search engines should be told not to index this post. true sets noindex (the post is excluded from search results); false forces the post to be indexed; null clears the setting and falls back to the post-type default."
            },
            "nofollow": { "type": "boolean" },
            "noimageindex": { "type": "boolean" },
            "noarchive": { "type": "boolean" },
            "nosnippet": { "type": "boolean" },
            "schema_page_type": {
                "type": ["string", "null"],
                "description": "The Schema.org page type for the post. Must be one of the supported page types. Use null or an empty string to clear it and fall back to the default.",
                "enum": ["...supported page types...", "", null]
            },
            "schema_article_type": {
                "type": ["string", "null"],
                "description": "The Schema.org article type for the post. Must be one of the supported article types. Use null or an empty string to clear it and fall back to the default.",
                "enum": ["...supported article types...", "", null]
            }
        }
    },
    "output_schema": {
        "type": "object",
        "properties": {
            "post_id": { "type": "integer" },
            "post_title": { "type": ["string", "null"] },
            "permalink": { "type": ["string", "null"] },
            "post_type": { "type": "string" },
            "post_status": { "type": ["string", "null"] },
            "seo_title": { "type": ["string", "null"] },
            "seo_title_rendered": { "type": ["string", "null"] },
            "meta_description": { "type": ["string", "null"] },
            "meta_description_rendered": { "type": ["string", "null"] },
            "focus_keyphrase": { "type": ["string", "null"] },
            "canonical": { "type": ["string", "null"] },
            "canonical_rendered": { "type": ["string", "null"] },
            "is_cornerstone": { "type": "boolean" },
            "noindex": { "type": ["boolean", "null"] },
            "nofollow": { "type": "boolean" },
            "noimageindex": { "type": "boolean" },
            "noarchive": { "type": "boolean" },
            "nosnippet": { "type": "boolean" },
            "open_graph_title": { "type": ["string", "null"] },
            "open_graph_title_rendered": { "type": ["string", "null"] },
            "open_graph_description": { "type": ["string", "null"] },
            "open_graph_description_rendered": { "type": ["string", "null"] },
            "twitter_title": { "type": ["string", "null"] },
            "twitter_title_rendered": { "type": ["string", "null"] },
            "twitter_description": { "type": ["string", "null"] },
            "twitter_description_rendered": { "type": ["string", "null"] },
            "schema_page_type": { "type": ["string", "null"] },
            "schema_article_type": { "type": ["string", "null"] },
            "seo_score": { "type": "string", "enum": ["na", "bad", "ok", "good"] },
            "readability_score": { "type": "string", "enum": ["na", "bad", "ok", "good"] },
            "inclusive_language_score": { "type": "string", "enum": ["na", "bad", "ok", "good"] }
        }
    },
    "meta": {
        "annotations": {
            "readonly": false,
            "destructive": null,
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

The `schema_page_type` and `schema_article_type` enums above are abbreviated: at runtime they list every supported Schema.org page and article type, plus an empty string and `null` so the field can be cleared.

## How to disable them programmatically
You can unregister either of these abilities through the WordPress-native `wp_abilities_api_init` action. Remove a name from the array to keep that ability enabled:

```php
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
