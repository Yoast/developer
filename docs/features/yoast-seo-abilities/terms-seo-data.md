---
id: terms-seo-data
title: "Yoast SEO Abilities - Term SEO data"
sidebar_label: Term SEO data
description: This documentation explains the abilities that read and update the SEO data of individual taxonomy terms.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Yoast SEO registers two abilities to work with the SEO data of individual taxonomy terms (categories, tags, and any custom taxonomies): one to read it and one to update it.

| Ability | Type | Returns |
|---|---|---|
| `yoast-seo/get-term-seo-data` | Read-only | The SEO data object for the matched term |
| `yoast-seo/update-term-seo-data` | Write | The updated SEO data object for the term |

Both are listed at `/wp-json/wp-abilities/v1/abilities?category=yoast-seo`.

## Permissions

Like the [Post SEO data](posts-seo-data.md) abilities, these two abilities are gated behind the advanced metadata capability (`wpseo_edit_advanced_metadata`), the same capability that gates the advanced and schema fields in the editor. On top of that, per-term edit access is always enforced: only terms the current user is allowed to edit are ever returned or updated.

## Annotations

Each ability declares a set of [behavior annotations](overview.md#annotations) as hints for AI agents and other MCP clients:

| Ability | Read-only | Destructive | Idempotent |
|---|---|---|---|
| `yoast-seo/get-term-seo-data` | Yes | No | Yes |
| `yoast-seo/update-term-seo-data` | No | Not declared (`null`) | Yes |

`update-term-seo-data` is not read-only, since it writes term data. Its destructive hint is left undeclared (`null`): although the ability only edits Yoast's SEO metadata fields, a provided empty value clears the field, so some data loss is possible and the ability makes no non-destructive guarantee. It is idempotent because it only sets the specific fields you provide, and sending the same request again leaves the term in the same state.

## Identifying the term

Both abilities accept a `term_id` (an integer of 1 or higher) or a `permalink` (the term archive's URL) to locate the term. At least one identifier is required.

Term IDs are unique across taxonomies in WordPress, so the ID alone is always sufficient to identify a term. When a permalink is used, it is matched exactly against the value stored in the indexable table; the exact stored permalink must be provided.

## `get-term-seo-data`

Reads the SEO data for a single taxonomy term.

### Input

Provide one of the following:

* `term_id` – the ID of the term to retrieve. An integer of 1 or higher.
* `permalink` – the permalink (URL) of the term archive to retrieve.

### Output

Returns a single [term SEO data object](#the-term-seo-data-object).

### Usage

Send a _GET_ request to the ability's `/run` endpoint. To retrieve the SEO data of the term with ID 7:

```
/wp-json/wp-abilities/v1/abilities/yoast-seo/get-term-seo-data/run?input[term_id]=7
```

To retrieve the same term by its archive permalink:

```
/wp-json/wp-abilities/v1/abilities/yoast-seo/get-term-seo-data/run?input[permalink]=https%3A%2F%2Fexample.com%2Fcategory%2Frecipes%2F
```

A successful response might look like this:

```json
{
    "term_id": 7,
    "term_name": "Recipes",
    "permalink": "https://example.com/category/recipes/",
    "taxonomy": "category",
    "seo_title": null,
    "seo_title_rendered": "Recipes - My Site",
    "meta_description": "Browse all our recipe posts.",
    "meta_description_rendered": "Browse all our recipe posts.",
    "focus_keyphrase": null,
    "canonical": null,
    "canonical_rendered": "https://example.com/category/recipes/",
    "is_cornerstone": false,
    "noindex": null,
    "open_graph_title": null,
    "open_graph_title_rendered": "Recipes",
    "open_graph_description": null,
    "open_graph_description_rendered": "Browse all our recipe posts.",
    "twitter_title": null,
    "twitter_title_rendered": "Recipes",
    "twitter_description": null,
    "twitter_description_rendered": "Browse all our recipe posts.",
    "seo_score": "na",
    "readability_score": "na",
    "inclusive_language_score": "na"
}
```

## `update-term-seo-data`

Updates the SEO data for a single taxonomy term.

Only the fields you provide are changed; every other field is left untouched. A provided empty value (`""` or `null`, depending on the field) clears that field and lets Yoast SEO fall back to its default.

### Input

Identify the term with `term_id` **or** `permalink`, then provide any of the writable fields you want to change:

* `seo_title` – the custom SEO title. A string, or `null` to clear it and fall back to the default template.
* `meta_description` – the custom meta description. A string, or `null` to clear it.
* `canonical` – the custom canonical URL. A string, or `null` or an empty string to remove it and fall back to the default canonical.
* `is_cornerstone` – whether the term is marked as cornerstone content. A boolean.
* `noindex` – whether search engines should be told not to index this term archive. `true` sets noindex (the archive is excluded from search results); `false` forces the archive to be indexed; `null` clears the setting and falls back to the taxonomy default.
* `open_graph_title` – the custom Open Graph title. A string, or `null` to clear it.
* `open_graph_description` – the custom Open Graph description. A string, or `null` to clear it.
* `twitter_title` – the custom X title. A string, or `null` to clear it.
* `twitter_description` – the custom X description. A string, or `null` to clear it.

:::note
Terms support fewer SEO metadata fields than posts. The advanced robots flags (`nofollow`, `noimageindex`, `noarchive`, `nosnippet`) and the Schema.org page and article type overrides are not available for terms.
:::

### Output

Returns the single, updated [term SEO data object](#the-term-seo-data-object), reflecting the state of the term after the update. On sites without Yoast SEO Premium, the response may also carry an extra `ai_generate_hint` field when a title or description field is updated.

### Usage

Send a _POST_ request to the ability's `/run` endpoint with an `input` object in the body. To mark the category with ID 7 as noindex:

```
/wp-json/wp-abilities/v1/abilities/yoast-seo/update-term-seo-data/run
```

```json
{
    "input": {
        "term_id": 7,
        "noindex": true
    }
}
```

You can identify the term by its archive permalink instead, and change several fields at once:

```json
{
    "input": {
        "permalink": "https://example.com/category/recipes/",
        "seo_title": "All Recipes - My Site",
        "meta_description": "Browse all our tested and approved recipes.",
        "is_cornerstone": true
    }
}
```

To clear the custom SEO title so it falls back to the default template:

```json
{
    "input": {
        "term_id": 7,
        "seo_title": null
    }
}
```

## The term SEO data object

Both abilities return the same object shape. Its fields are:

| Field | Type | Description |
|---|---|---|
| `term_id` | integer | The term ID. |
| `term_name` | string \| null | The term name. |
| `permalink` | string \| null | The term archive's permalink (URL). |
| `taxonomy` | string | The taxonomy slug, such as `category` or `post_tag`. |
| `seo_title` | string \| null | The custom SEO title, or `null` when none is set. |
| `seo_title_rendered` | string \| null | The SEO title as output on the front end, with the default template applied and replacement variables expanded. |
| `meta_description` | string \| null | The custom meta description, or `null` when none is set. |
| `meta_description_rendered` | string \| null | The meta description as output on the front end. |
| `focus_keyphrase` | string \| null | The focus keyphrase, or `null` when none is set. |
| `canonical` | string \| null | The custom canonical URL, or `null` when none is set. |
| `canonical_rendered` | string \| null | The canonical URL as output on the front end: the custom value when set, otherwise the term archive permalink. |
| `is_cornerstone` | boolean | Whether the term is marked as cornerstone content. |
| `noindex` | boolean \| null | Whether search engines are told not to index this term archive. `true` means noindex, `false` forces indexing, `null` means the taxonomy default applies. |
| `open_graph_title` | string \| null | The custom Open Graph title. |
| `open_graph_title_rendered` | string \| null | The Open Graph title as output on the front end. |
| `open_graph_description` | string \| null | The custom Open Graph description. |
| `open_graph_description_rendered` | string \| null | The Open Graph description as output on the front end. |
| `twitter_title` | string \| null | The custom X title. |
| `twitter_title_rendered` | string \| null | The X title as output on the front end. |
| `twitter_description` | string \| null | The custom X description. |
| `twitter_description_rendered` | string \| null | The X description as output on the front end. |
| `seo_score` | string | The result of the SEO analysis when the term was last saved: one of `na`, `bad`, `ok`, or `good`. |
| `readability_score` | string | The result of the readability analysis when the term was last saved. |
| `inclusive_language_score` | string | The result of the inclusive language analysis when the term was last saved. |

The `*_rendered` companion of a field carries the value as actually output on the front end: the global default template applied where no custom value is set, with replacement variables expanded. It is `null` when nothing is output.

## Full definition

A _GET_ request to `/wp-json/wp-abilities/v1/abilities` returns the complete definition of each ability:

<Tabs>
<TabItem value="get" label="Get">

```json
{
    "name": "yoast-seo/get-term-seo-data",
    "label": "Get Term SEO Data",
    "description": "Get the SEO data for a single taxonomy term, such as a category or a tag. Identify the term by term_id or by permalink (URL). Only terms the current user is allowed to edit are returned.",
    "category": "yoast-seo",
    "input_schema": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
            "term_id": {
                "type": "integer",
                "description": "The ID of the term to retrieve.",
                "minimum": 1
            },
            "permalink": {
                "type": "string",
                "description": "The permalink (URL) of the term archive to retrieve."
            }
        }
    },
    "output_schema": {
        "type": "object",
        "properties": {
            "term_id": { "type": "integer" },
            "term_name": { "type": ["string", "null"] },
            "permalink": { "type": ["string", "null"] },
            "taxonomy": { "type": "string" },
            "seo_title": { "type": ["string", "null"] },
            "seo_title_rendered": { "type": ["string", "null"] },
            "meta_description": { "type": ["string", "null"] },
            "meta_description_rendered": { "type": ["string", "null"] },
            "focus_keyphrase": { "type": ["string", "null"] },
            "is_cornerstone": { "type": "boolean" },
            "open_graph_title": { "type": ["string", "null"] },
            "open_graph_title_rendered": { "type": ["string", "null"] },
            "open_graph_description": { "type": ["string", "null"] },
            "open_graph_description_rendered": { "type": ["string", "null"] },
            "twitter_title": { "type": ["string", "null"] },
            "twitter_title_rendered": { "type": ["string", "null"] },
            "twitter_description": { "type": ["string", "null"] },
            "twitter_description_rendered": { "type": ["string", "null"] },
            "seo_score": { "type": "string", "enum": ["na", "bad", "ok", "good"] },
            "readability_score": { "type": "string", "enum": ["na", "bad", "ok", "good"] },
            "inclusive_language_score": { "type": "string", "enum": ["na", "bad", "ok", "good"] },
            "canonical": {
                "type": ["string", "null"],
                "description": "The custom canonical URL as stored for the term. Null when no custom value is set; the rendered companion field carries what is actually output."
            },
            "canonical_rendered": {
                "type": ["string", "null"],
                "description": "The canonical URL as output on the front end: the custom value when set, otherwise the permalink of the term. Null when nothing is output."
            },
            "noindex": {
                "type": ["boolean", "null"],
                "description": "Whether search engines are told not to index this term archive. true means noindex (the archive is excluded from search results); false means the archive is forced to be indexed; null means no setting is stored and the taxonomy default applies."
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
    "name": "yoast-seo/update-term-seo-data",
    "label": "Update Term SEO Data",
    "description": "Update the SEO data for a single taxonomy term, such as a category or a tag. Identify the term by term_id or by permalink (URL). Only the fields you provide are changed; a provided empty value clears that field. Only terms the current user is allowed to edit can be updated.",
    "category": "yoast-seo",
    "input_schema": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
            "term_id": {
                "type": "integer",
                "description": "The ID of the term to update.",
                "minimum": 1
            },
            "permalink": {
                "type": "string",
                "description": "The permalink (URL) of the term archive to update."
            },
            "seo_title": { "type": ["string", "null"] },
            "meta_description": { "type": ["string", "null"] },
            "canonical": {
                "type": ["string", "null"],
                "description": "The custom canonical URL for the term archive. Use null or an empty string to remove it and fall back to the default canonical."
            },
            "is_cornerstone": { "type": "boolean" },
            "noindex": {
                "type": ["boolean", "null"],
                "description": "Whether search engines should be told not to index this term archive. true sets noindex (the archive is excluded from search results); false forces the archive to be indexed; null clears the setting and falls back to the taxonomy default."
            },
            "open_graph_title": { "type": ["string", "null"] },
            "open_graph_description": { "type": ["string", "null"] },
            "twitter_title": { "type": ["string", "null"] },
            "twitter_description": { "type": ["string", "null"] }
        }
    },
    "output_schema": {
        "type": "object",
        "properties": {
            "term_id": { "type": "integer" },
            "term_name": { "type": ["string", "null"] },
            "permalink": { "type": ["string", "null"] },
            "taxonomy": { "type": "string" },
            "seo_title": { "type": ["string", "null"] },
            "seo_title_rendered": { "type": ["string", "null"] },
            "meta_description": { "type": ["string", "null"] },
            "meta_description_rendered": { "type": ["string", "null"] },
            "focus_keyphrase": { "type": ["string", "null"] },
            "is_cornerstone": { "type": "boolean" },
            "open_graph_title": { "type": ["string", "null"] },
            "open_graph_title_rendered": { "type": ["string", "null"] },
            "open_graph_description": { "type": ["string", "null"] },
            "open_graph_description_rendered": { "type": ["string", "null"] },
            "twitter_title": { "type": ["string", "null"] },
            "twitter_title_rendered": { "type": ["string", "null"] },
            "twitter_description": { "type": ["string", "null"] },
            "twitter_description_rendered": { "type": ["string", "null"] },
            "seo_score": { "type": "string", "enum": ["na", "bad", "ok", "good"] },
            "readability_score": { "type": "string", "enum": ["na", "bad", "ok", "good"] },
            "inclusive_language_score": { "type": "string", "enum": ["na", "bad", "ok", "good"] },
            "canonical": { "type": ["string", "null"] },
            "canonical_rendered": { "type": ["string", "null"] },
            "noindex": { "type": ["boolean", "null"] },
            "ai_generate_hint": {
                "type": "string",
                "description": "A hint about Yoast AI Generate to relay to the user. Only present when a title or description field was updated on a site without Yoast SEO Premium. Meant to be assisting users that seek SEO-optimised titles and descriptions."
            }
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

The update definition above is the one returned on a site without Yoast SEO Premium. With Premium active, the `ai_generate_hint` property is absent from the output schema.

## How to disable them programmatically

You can unregister either of these abilities through the WordPress-native `wp_abilities_api_init` action. Remove a name from the array to keep that ability enabled:

```php
<?php
add_action( 'wp_abilities_api_init', function() {
    $abilities = [
        'yoast-seo/get-term-seo-data',
        'yoast-seo/update-term-seo-data',
    ];
    foreach ( $abilities as $ability ) {
        if ( wp_has_ability( $ability ) ) {
            wp_unregister_ability( $ability );
        }
    }
}, 20 ); // Run after Yoast SEO registers at default priority 10
```
