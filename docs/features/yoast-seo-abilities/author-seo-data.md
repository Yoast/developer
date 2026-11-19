---
id: author-seo-data
title: "Yoast SEO Abilities - Author SEO data"
sidebar_label: Author SEO data
description: This documentation explains the abilities that read and update the SEO data of individual author archives.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Yoast SEO registers two abilities to work with the SEO data of individual author archives: one to read it and one to update it.

| Ability | Type | Returns |
|---|---|---|
| `yoast-seo/get-author-seo-data` | Read-only | The SEO data object for the author archive |
| `yoast-seo/update-author-seo-data` | Write | The updated SEO data object for the author archive |

Both are listed at `/wp-json/wp-abilities/v1/abilities?category=yoast-seo`.

## Permissions
Both abilities are gated behind the `edit_users` capability (the standard WordPress capability that lets a user edit other users' profiles). This matches the author SEO fields in the WordPress user profile screen, which are only shown to users with that capability. The Yoast SEO management capability (`wpseo_manage_options`) does not grant access to these abilities.

Per-user edit access is always enforced: only users the current user is allowed to edit can be read or updated.

## Annotations
Each ability declares a set of [behavior annotations](overview.md#annotations) as hints for AI agents and other MCP clients:

| Ability | Read-only | Destructive | Idempotent |
|---|---|---|---|
| `yoast-seo/get-author-seo-data` | Yes | No | Yes |
| `yoast-seo/update-author-seo-data` | No | Not declared (`null`) | Yes |

`update-author-seo-data` is not read-only since it writes author data. Its destructive hint is left undeclared (`null`) rather than `false`: although the ability only edits Yoast's SEO metadata fields for the author archive, writing a field overwrites its previous value and a provided empty value clears it, so some data loss is possible. It is idempotent because sending the same request again leaves the author archive in the same state.

## Identifying the author
Both abilities accept `user_id` (an integer of 1 or higher) or `permalink` (the full URL of the author archive) to locate the user.

Provide the full permalink exactly as the site outputs it, including the protocol (`http` or `https`) and any trailing slash. Relative URLs are not supported.

### Identifier precedence
When both are provided, `user_id` takes precedence. `permalink` is then ignored, with no cross-check against the located user. Send a single identifier per request to avoid ambiguity.

## `get-author-seo-data`
Reads the SEO data for a single author archive.

### Input
Provide exactly one of the following:

* `user_id` – the WordPress user ID. An integer of 1 or higher.
* `permalink` – the full URL of the author archive (e.g. `https://example.com/author/jane/`).

### Output
Returns a single [author SEO data object](#the-author-seo-data-object).

### Usage
Send a _GET_ request to the ability's `/run` endpoint. To retrieve the SEO data for user 7:

```
/wp-json/wp-abilities/v1/abilities/yoast-seo/get-author-seo-data/run?input[user_id]=7
```

To retrieve by the author archive URL instead:

```
/wp-json/wp-abilities/v1/abilities/yoast-seo/get-author-seo-data/run?input[permalink]=https%3A%2F%2Fexample.com%2Fauthor%2Fjane%2F
```

Doing so might yield the following result:

```json
{
    "user_id": 7,
    "user_name": "Jane Smith",
    "permalink": "https://example.com/author/jane/",
    "seo_title": null,
    "seo_title_rendered": "Articles by Jane Smith - My Site",
    "meta_description": null,
    "meta_description_rendered": null,
    "noindex": false,
    "noindex_rendered": false
}
```

## `update-author-seo-data`
Updates the SEO data for a single author archive.

Only the fields you provide are changed; every other field is left untouched. A provided empty value (`""` or `null`, depending on the field) clears that field and lets Yoast SEO fall back to its default.

### Input
Identify the user with `user_id` **or** `permalink`, then provide any of the writable fields you want to change:

* `seo_title` – the custom SEO title for the author archive. A string, or `null` to clear it and fall back to the default template.
* `meta_description` – the custom meta description for the author archive. A string, or `null` to clear it.
* `noindex` – whether search engines should be told not to index this author archive. `true` sets noindex (the archive is excluded from search results); `false` removes the per-user override and lets the author archive appear in results. Note: when the site settings set all author archives to noindex, that site-wide setting applies regardless of this per-user value.

### Output
Returns the single, updated [author SEO data object](#the-author-seo-data-object), reflecting the state of the author archive after the update.

### Usage
Send a _POST_ request to the ability's `/run` endpoint with an `input` object in the body. To set a custom meta description for user 7:

```
/wp-json/wp-abilities/v1/abilities/yoast-seo/update-author-seo-data/run
```

```json
{
    "input": {
        "user_id": 7,
        "meta_description": "Articles by Jane Smith on photography, travel, and design."
    }
}
```

To noindex an author archive by its URL:

```json
{
    "input": {
        "permalink": "https://example.com/author/jane/",
        "noindex": true
    }
}
```

To clear a custom SEO title so it falls back to the default template:

```json
{
    "input": {
        "user_id": 7,
        "seo_title": null
    }
}
```

## The author SEO data object
Both abilities return the same object. Its fields are:

| Field | Type | Description |
|---|---|---|
| `user_id` | integer | The WordPress user ID. |
| `user_name` | string \| null | The display name of the user. |
| `permalink` | string \| null | The URL of the author archive. |
| `seo_title` | string \| null | The custom SEO title, or `null` when none is set. |
| `seo_title_rendered` | string \| null | The SEO title as output on the front end, with the default template applied and replacement variables expanded. |
| `meta_description` | string \| null | The custom meta description, or `null` when none is set. |
| `meta_description_rendered` | string \| null | The meta description as output on the front end. |
| `noindex` | boolean | Whether search engines are told not to index this author archive. `true` means noindex. When the site settings set all author archives to noindex, that setting applies regardless of this per-user value. |
| `noindex_rendered` | boolean \| null | Whether search engines are actually told not to index this author archive, as output on the front end. |

The `*_rendered` companion of a field carries the value as actually output on the front end, with defaults and templates applied. It is `null` when nothing is output. This lets you distinguish what is stored per-user from what a visitor and search engine actually see.

## Full definition
A _GET_ request to `/wp-json/wp-abilities/v1/abilities` returns the complete definition of each ability:

<Tabs>
<TabItem value="get" label="Get">

```json
{
    "name": "yoast-seo/get-author-seo-data",
    "label": "Get Author SEO Data",
    "description": "Get the SEO data for the author archive of a single user. Identify the user by user_id or by the permalink (URL) of their author archive. Only users who can edit other users can use this, and only on users they are allowed to edit.",
    "category": "yoast-seo",
    "input_schema": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
            "user_id": {
                "type": "integer",
                "description": "The ID of the user whose author archive to retrieve.",
                "minimum": 1
            },
            "permalink": {
                "type": "string",
                "description": "The permalink (URL) of the author archive to retrieve."
            }
        }
    },
    "output_schema": {
        "type": "object",
        "properties": {
            "user_id": { "type": "integer" },
            "user_name": { "type": ["string", "null"] },
            "permalink": { "type": ["string", "null"] },
            "seo_title": { "type": ["string", "null"] },
            "seo_title_rendered": { "type": ["string", "null"] },
            "meta_description": { "type": ["string", "null"] },
            "meta_description_rendered": { "type": ["string", "null"] },
            "noindex": { "type": "boolean" },
            "noindex_rendered": { "type": ["boolean", "null"] }
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
    "name": "yoast-seo/update-author-seo-data",
    "label": "Update Author SEO Data",
    "description": "Update the SEO data for the author archive of a single user. Identify the user by user_id or by the permalink (URL) of their author archive. Only the fields you provide are changed; a provided empty value clears that field. Only users who can edit other users can use this, and only on users they are allowed to edit.",
    "category": "yoast-seo",
    "input_schema": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
            "user_id": {
                "type": "integer",
                "description": "The ID of the user whose author archive to update.",
                "minimum": 1
            },
            "permalink": {
                "type": "string",
                "description": "The permalink (URL) of the author archive to update."
            },
            "seo_title": {
                "type": ["string", "null"],
                "description": "The SEO title for the author archive."
            },
            "meta_description": {
                "type": ["string", "null"],
                "description": "The meta description for the author archive."
            },
            "noindex": {
                "type": "boolean",
                "description": "Whether search engines should be told not to index this author archive. true sets noindex (the archive is excluded from search results); false removes it. When the site settings set all author archives to noindex, that setting applies regardless of this one."
            }
        }
    },
    "output_schema": {
        "type": "object",
        "properties": {
            "user_id": { "type": "integer" },
            "user_name": { "type": ["string", "null"] },
            "permalink": { "type": ["string", "null"] },
            "seo_title": { "type": ["string", "null"] },
            "seo_title_rendered": { "type": ["string", "null"] },
            "meta_description": { "type": ["string", "null"] },
            "meta_description_rendered": { "type": ["string", "null"] },
            "noindex": { "type": "boolean" },
            "noindex_rendered": { "type": ["boolean", "null"] }
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

## How to disable them programmatically
You can unregister either of these abilities through the WordPress-native `wp_abilities_api_init` action:

```php
<?php
add_action( 'wp_abilities_api_init', function() {
    $abilities = [
        'yoast-seo/get-author-seo-data',
        'yoast-seo/update-author-seo-data',
    ];
    foreach ( $abilities as $ability ) {
        if ( wp_has_ability( $ability ) ) {
            wp_unregister_ability( $ability );
        }
    }
}, 20 ); // Run after Yoast SEO registers at default priority 10
```
