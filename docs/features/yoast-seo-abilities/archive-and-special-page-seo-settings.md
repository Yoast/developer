---
id: archive-and-special-page-seo-settings
title: "Yoast SEO Abilities - Archive and special page SEO settings"
sidebar_label: Archive and special page SEO settings
description: This documentation explains the abilities that read and update the SEO settings for the homepage, archives, and special pages.
---

Yoast SEO registers two abilities to work with the SEO settings of the homepage (when it shows the latest posts), content type archives, and special pages: one to read them and one to update them.

| Ability | Type | Returns |
|---|---|---|
| `yoast-seo/get-archive-and-special-page-seo-settings` | Read-only | An array of settings objects, one per available target |
| `yoast-seo/update-archive-and-special-page-seo-settings` | Write | The updated settings object for the target |

Both are listed at `/wp-json/wp-abilities/v1/abilities?category=yoast-seo`.

## What is a target?

A target is a group of pages that share the same SEO settings template. Yoast SEO stores template-based settings for each of these groups:

| Target name | Pages covered | Template shared |
|---|---|---|
| `homepage` | The homepage, when it shows the latest posts (not a static page) | No |
| `author_archives` | All author archive pages | Yes — one template for all authors |
| `date_archives` | All date-based archive pages | Yes |
| `search_page` | Search results pages | Yes |
| `not_found_page` | 404 pages | Yes |
| `post_type_archive` | The archive of a content type | Yes, per post type |

A target is **enabled** when the corresponding pages are in use on the site. For example, author archives may be disabled in the Yoast SEO settings. Disabled targets still appear in the output with `"enabled": false`; their settings can still be read and changed, but the changes have no visible effect until the target is re-enabled.

A target with `"shared": true` uses one template for many pages (e.g., all author archives share one SEO title template). Use snippet variables in shared templates rather than page-specific text, because variables that do not apply to a given page are silently removed when the page is rendered.

### Special cases

**Static homepage**: when the homepage is a static page, it is not a target of these abilities. Its SEO data belongs to that page and is read or updated with `yoast-seo/get-post-seo-data` and `yoast-seo/update-post-seo-data` instead.

**WooCommerce product archive**: when WooCommerce is active, the product archive takes its SEO data from the Shop page. The `post_type_archive` target for `product` is unavailable in that case; use `yoast-seo/update-post-seo-data` for the Shop page instead.

**Category, tag, and taxonomy archives**: these are not covered by these abilities. Use `yoast-seo/get-term-seo-data` and `yoast-seo/update-term-seo-data` for their individual terms.

## Permissions

These abilities require the Yoast SEO management capability (`wpseo_manage_options`), the same capability that gates the Yoast SEO Settings page where these templates are configured.

## Annotations

Each ability declares a set of [behavior annotations](overview.md#annotations) as hints for AI agents and other MCP clients:

| Ability | Read-only | Destructive | Idempotent |
|---|---|---|---|
| `yoast-seo/get-archive-and-special-page-seo-settings` | Yes | No | Yes |
| `yoast-seo/update-archive-and-special-page-seo-settings` | No | Not declared (`null`) | Yes |

`update-archive-and-special-page-seo-settings` is not read-only, since it writes settings. Its destructive hint is left undeclared (`null`): setting `noindex` to `true` hides pages from search results, which may not be easily reversible, so the ability makes no non-destructive guarantee. It is idempotent because sending the same input again leaves the settings in the same state.

## Available fields

Not every target supports every field. The table below shows which targets have each writable field:

| Field | Type | `homepage` | `author_archives` | `date_archives` | `search_page` | `not_found_page` | `post_type_archive` |
|---|---|:---:|:---:|:---:|:---:|:---:|:---:|
| `seo_title` | string | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `meta_description` | string | ✓ | ✓ | ✓ | — | — | ✓ |
| `noindex` | boolean | — | ✓ | ✓ | — | — | ✓ |

Fields that are not available for a target are omitted from the output and return a warning if provided as input to the update ability.

Both `seo_title` and `meta_description` can contain snippet variables in the `%%variable%%` format. They are stored and returned as-is, not rendered with variables expanded.

## `get-archive-and-special-page-seo-settings`

Returns the SEO settings of every target available on the site.

### Input

This ability takes no input. Send an empty object (`{}`) or omit the input.

### Output

Returns an array of [target SEO settings objects](#the-target-seo-settings-object), one per available target. Unavailable targets — such as a static homepage or the WooCommerce product archive when a Shop page is configured — are excluded.

### Usage

Send a _GET_ request to the ability's `/run` endpoint:

```
/wp-json/wp-abilities/v1/abilities/yoast-seo/get-archive-and-special-page-seo-settings/run
```

An example response:

```json
[
    {
        "target": "homepage",
        "seo_title": "%%sitename%% %%page%% %%sep%% %%sitedesc%%",
        "meta_description": null,
        "enabled": true,
        "shared": false
    },
    {
        "target": "author_archives",
        "seo_title": "%%name%%, Author at %%sitename%% %%page%% %%sep%% %%sitename%%",
        "meta_description": null,
        "noindex": false,
        "enabled": true,
        "shared": true
    },
    {
        "target": "date_archives",
        "seo_title": "%%date%% %%page%% %%sep%% %%sitename%%",
        "meta_description": null,
        "noindex": false,
        "enabled": true,
        "shared": true
    },
    {
        "target": "search_page",
        "seo_title": "You searched for %%searchphrase%% %%page%% %%sep%% %%sitename%%",
        "enabled": true,
        "shared": true
    },
    {
        "target": "not_found_page",
        "seo_title": "Page not found %%sep%% %%sitename%%",
        "enabled": true,
        "shared": true
    },
    {
        "target": "post_type_archive",
        "post_type": "movie",
        "label": "Movies",
        "seo_title": "%%pt_plural%% %%page%% %%sep%% %%sitename%%",
        "meta_description": null,
        "noindex": false,
        "enabled": true,
        "shared": true
    }
]
```

## `update-archive-and-special-page-seo-settings`

Updates the SEO settings of one target and returns its new state.

Only the fields you provide are changed; every other field is left untouched. Providing an empty string for `seo_title` or `meta_description` clears the template and lets Yoast SEO fall back to its default.

### Input

* `target` — **required**. The name of the target to update. Must be one of the target names listed in [What is a target?](#what-is-a-target).
* `post_type` — required when `target` is `post_type_archive`. The post type slug of the content type whose archive to update.
* `seo_title` — the SEO title template. A string, or an empty string to clear it and fall back to the Yoast SEO default.
* `meta_description` — the meta description template. A string, or an empty string to clear it.
* `noindex` — whether search engines are told not to index these pages. `true` hides them from search results; `false` shows them.

At least one of `seo_title`, `meta_description`, or `noindex` is required alongside `target`.

### Output

Returns the single, updated [target SEO settings object](#the-target-seo-settings-object), reflecting the new state of the target.

When some of the provided settings could not be saved — for example, because a field is not available for the target — or when the target is disabled so the saved settings have no effect yet, the response also carries a `warning` field with an explanation meant to be relayed to the user.

### Usage

Send a _POST_ request to the ability's `/run` endpoint with an `input` object in the body. To set the SEO title for all author archives:

```
/wp-json/wp-abilities/v1/abilities/yoast-seo/update-archive-and-special-page-seo-settings/run
```

```json
{
    "input": {
        "target": "author_archives",
        "seo_title": "Posts by %%name%% %%sep%% %%sitename%%"
    }
}
```

To noindex date archives and clear their SEO title template at the same time:

```json
{
    "input": {
        "target": "date_archives",
        "noindex": true,
        "seo_title": ""
    }
}
```

To update the SEO title for the archive of a custom post type:

```json
{
    "input": {
        "target": "post_type_archive",
        "post_type": "movie",
        "seo_title": "All Movies %%sep%% %%sitename%%"
    }
}
```

## The target SEO settings object

Both abilities return objects of the same shape (`get-archive-and-special-page-seo-settings` returns an array of them; `update-archive-and-special-page-seo-settings` returns a single one):

| Field | Type | Description |
|---|---|---|
| `target` | string | The target name, e.g. `homepage` or `author_archives`. |
| `post_type` | string | Only present for `post_type_archive`: the post type slug of the content type. |
| `label` | string | Only present for `post_type_archive`: the human-readable name of the content type. |
| `seo_title` | string \| null | The SEO title template as stored, or `null` when none is set. |
| `meta_description` | string \| null | The meta description template as stored, or `null` when none is set. Only present when the target supports it. |
| `noindex` | boolean | Whether search engines are told not to index these pages. Only present when the target supports it. |
| `enabled` | boolean | Whether these pages are in use on the site. Read-only: it can only be changed in the Yoast SEO settings. |
| `shared` | boolean | Whether these settings apply to many pages at once. When `true`, use snippet variables in templates rather than page-specific text. |
| `warning` | string | Only present in `update-archive-and-special-page-seo-settings` responses when some settings were not saved or when the target is disabled. Meant to be relayed to the user. |

## How to disable them programmatically

You can unregister either of these abilities through the WordPress-native `wp_abilities_api_init` action:

```php
<?php
add_action( 'wp_abilities_api_init', function() {
        $abilities = [
            'yoast-seo/get-archive-and-special-page-seo-settings',
            'yoast-seo/update-archive-and-special-page-seo-settings',
        ];
        foreach ( $abilities as $ability ) {
            if ( wp_has_ability( $ability ) ) {
                wp_unregister_ability( $ability );
            }
        }
    }, 20
); // Run after Yoast SEO registers at default priority 10
```
