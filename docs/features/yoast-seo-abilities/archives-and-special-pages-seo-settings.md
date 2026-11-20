---
id: archives-and-special-pages-seo-settings
title: "Yoast SEO Abilities - Archives' and special pages' SEO settings"
sidebar_label: Archives' and special pages' SEO settings
description: This documentation explains the abilities that read and update the SEO settings of the homepage, the archives, and the special pages.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Yoast SEO registers two abilities to work with the SEO settings of the homepage (when it shows the latest posts), the author, date, and content type archives, and the special pages (the search results and 404 pages): one to read them and one to update them.

| Ability | Type | Returns |
|---|---|---|
| `yoast-seo/get-archive-and-special-page-seo-settings` | Read-only | An array of SEO settings objects, one per target |
| `yoast-seo/update-archive-and-special-page-seo-settings` | Write | The updated SEO settings object for the target |

## Permissions
These two abilities are gated behind the Yoast SEO management capability (`wpseo_manage_options`), the same capability that gates the Yoast SEO settings page where these settings are configured.

## Annotations
Each ability declares a set of [behavior annotations](overview.md#annotations) as hints for AI agents and other MCP clients:

| Ability | Read-only | Destructive | Idempotent |
|---|---|---|---|
| `yoast-seo/get-archive-and-special-page-seo-settings` | Yes | No | Yes |
| `yoast-seo/update-archive-and-special-page-seo-settings` | No | Not declared (`null`) | Yes |

On top of the [usual reasons](overview.md#annotations) for the undeclared destructive hint, setting `noindex` to `true` can remove whole groups of pages from search results.

## Identifying the target
Each set of settings belongs to a `target`: the pages it applies to. These are the settings configured in `Yoast SEO` → `Settings`:

| Target | Pages |
|---|---|
| `homepage` | The homepage, when it shows the latest posts. |
| `author_archives` | All author archives. |
| `date_archives` | All date archives. |
| `search_page` | The search results pages. |
| `not_found_page` | The 404 page. |
| `post_type_archive` | The archive of a single content type, identified by its `post_type`. |

Some pages are not covered by these abilities, as their SEO data is set elsewhere:

* **Category, tag, and other taxonomy archives** are set per term with the [Term's SEO data](terms-seo-data.md) abilities.
* **A static homepage**, when `Settings` → `Reading` → `Your homepage displays` is set to a static page, is a regular page whose SEO data is set with the [Post's SEO data](posts-seo-data.md) abilities. Its URL resolves to that page.
* **The WooCommerce product archive**, with WooCommerce active, takes its SEO data from the Shop page, which is set with the [Post's SEO data](posts-seo-data.md) abilities.
* **Content types without an archive**, or excluded from Yoast SEO's indexables, have no `post_type_archive` target.

## `get-archive-and-special-page-seo-settings`
Reads the SEO settings of all targets.

### Input
This ability takes no input.

### Output
Returns an array of [SEO settings objects](#the-seo-settings-object), one per target, with one `post_type_archive` entry per content type archive. Targets that are not available, like the homepage when it is a static page, are left out.

### Usage
Send a _GET_ request to the ability's `/run` endpoint:

```
/wp-json/wp-abilities/v1/abilities/yoast-seo/get-archive-and-special-page-seo-settings/run
```

On a site with a `book` content type, doing so might yield the following result:

```json
[
    {
        "target": "homepage",
        "seo_title": "%%sitename%% %%page%% %%sep%% %%sitedesc%%",
        "meta_description": "",
        "enabled": true,
        "shared": false
    },
    {
        "target": "author_archives",
        "seo_title": "%%name%%, Author at %%sitename%% %%page%%",
        "meta_description": "",
        "noindex": false,
        "enabled": true,
        "shared": true
    },
    {
        "target": "date_archives",
        "seo_title": "%%date%% %%page%% %%sep%% %%sitename%%",
        "meta_description": "",
        "noindex": true,
        "enabled": false,
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
        "post_type": "book",
        "label": "Books",
        "seo_title": "%%pt_plural%% Archive %%page%% %%sep%% %%sitename%%",
        "meta_description": "",
        "noindex": false,
        "enabled": true,
        "shared": false
    }
]
```

## `update-archive-and-special-page-seo-settings`
Updates the SEO settings of a single target.

Only the fields you provide are changed; every other field is left untouched. A provided empty string clears that field and lets Yoast SEO fall back to its default.

### Input
Identify the pages with `target` (and `post_type`, for the `post_type_archive` target), then provide at least one of the writable fields you want to change:

* `target` (required) – the pages to update. One of the [targets](#identifying-the-target).
* `post_type` – the post type of the content type whose archive to update. Required for the `post_type_archive` target, ignored for the others.
* `seo_title` – the SEO title template. A string, or an empty string to clear it and fall back to the default title.
* `meta_description` – the meta description template. A string, or an empty string to clear it, in which case no meta description is output.
* `noindex` – whether search engines should be told not to index these pages. `true` sets noindex (the pages are excluded from search results); `false` lets them be shown in search results.
* `social_title` – the social title template. A string, or an empty string to clear it and fall back to the SEO title. Only available with [Yoast SEO Premium](#yoast-seo-premium-fields).
* `social_description` – the social description template. A string, or an empty string to clear it and fall back to the meta description. Only available with [Yoast SEO Premium](#yoast-seo-premium-fields).

Not every target has every field:

| Target | `seo_title` | `meta_description` | `noindex` | `social_title`, `social_description` |
|---|---|---|---|---|
| `homepage` | Yes | Yes | No | Yes |
| `author_archives` | Yes | Yes | Yes | Yes |
| `date_archives` | Yes | Yes | Yes | Yes |
| `search_page` | Yes | No | No | No |
| `not_found_page` | Yes | No | No | No |
| `post_type_archive` | Yes | Yes | Yes | Yes |

:::note
The title and description fields are templates that can contain snippet variables in the `%%variable%%` format, which are replaced with the values of the page they are shown on. Only use snippet variables that apply to the pages you update: the ones that do not (like `%%term_title%%` on author archives) are silently removed when the pages are rendered.
:::

### Output
Returns the single, updated [SEO settings object](#the-seo-settings-object), reflecting the state of the target after the update. This is the same shape as one entry of the `get-archive-and-special-page-seo-settings` array, so you can immediately confirm what was written.

The response may also carry an extra `warning` field, meant to be relayed to the user, when some of the provided fields were not saved:

* A field the target doesn't have, like `noindex` for `homepage`, is not saved.
* A value that could not be saved as provided, like an SEO title with HTML tags in it, is not saved, and the current value is returned instead.

The warning also says whether the other provided fields were saved. A `warning` is also returned when the fields of disabled author or date archives were saved, as they have no effect until the pages are enabled in the Yoast SEO settings.

When the target itself can't be updated, the ability returns an error instead, and nothing is saved:

| Error code | When |
|---|---|
| `yoast_seo_static_homepage` | The `target` is `homepage`, but the homepage is a static page. The message includes the page's ID, to update with `yoast-seo/update-post-seo-data` instead. |
| `yoast_seo_missing_post_type` | The `target` is `post_type_archive`, but no `post_type` is provided. |
| `yoast_seo_invalid_post_type` | No content type archive with SEO settings exists for the given `post_type`. |
| `yoast_seo_woocommerce_shop_page` | The `post_type` is `product` while WooCommerce is active. The message includes the Shop page's ID, to update with `yoast-seo/update-post-seo-data` instead. |
| `yoast_seo_no_settings` | No field to change is provided. |

### Usage
Send a _POST_ request to the ability's `/run` endpoint with an `input` object in the body. To hide all author archives from search results:

```
/wp-json/wp-abilities/v1/abilities/yoast-seo/update-archive-and-special-page-seo-settings/run
```

```json
{
    "input": {
        "target": "author_archives",
        "noindex": true
    }
}
```

You can update the archive of a content type instead, and change several fields at once:

```json
{
    "input": {
        "target": "post_type_archive",
        "post_type": "book",
        "seo_title": "All our %%pt_plural%% %%sep%% %%sitename%%",
        "meta_description": "Browse all our books."
    }
}
```

To clear the meta description of the date archives:

```json
{
    "input": {
        "target": "date_archives",
        "meta_description": ""
    }
}
```

## Yoast SEO Premium fields
When Yoast SEO Premium is active, both abilities also handle the `social_title` and `social_description` fields: the social title and description templates set in the "Social appearance" sections of `Yoast SEO` → `Settings`, used when the pages are shared on social media. They are listed in the abilities' input and output schemas only while Premium is active; without Premium, sending them is rejected as an unknown field.

## The SEO settings object
Both abilities return the same object (`get-archive-and-special-page-seo-settings` inside an array, `update-archive-and-special-page-seo-settings` on its own). It only contains the fields its target has. Its fields are:

| Field | Type | Description |
|---|---|---|
| `target` | string | The pages these settings belong to. One of the [targets](#identifying-the-target). |
| `post_type` | string | Only present for the `post_type_archive` target: the post type of the content type. |
| `label` | string | Only present for the `post_type_archive` target: the name of the content type, such as `Books`. |
| `seo_title` | string | The SEO title template. |
| `meta_description` | string | The meta description template. |
| `noindex` | boolean | Whether search engines are told not to index these pages. |
| `social_title` | string | The social title template. Only present with Yoast SEO Premium. |
| `social_description` | string | The social description template. Only present with Yoast SEO Premium. |
| `enabled` | boolean | Whether these pages are in use on the site. `false` when author or date archives are disabled in the Yoast SEO settings. It can only be changed in the Yoast SEO settings. |
| `shared` | boolean | Whether these settings are shared by many pages, like all author archives. A shared template applies to every one of those pages, so it should use snippet variables for what differs between them, rather than text about one specific page. |

The templates are returned as stored, with their snippet variables (like `%%sitename%%`) unexpanded, not as shown on the site.

## Full definition
A _GET_ request to `/wp-json/wp-abilities/v1/abilities` returns the complete definition of each ability:

<Tabs>
<TabItem value="get" label="Get">

```json
{
    "name": "yoast-seo/get-archive-and-special-page-seo-settings",
    "label": "Get SEO Settings for Archives and Special Pages",
    "description": "Get the SEO settings of the homepage when it shows the latest posts, the archives and the special pages. Category, tag and other taxonomy archives are not included; use the yoast-seo/get-term-seo-data ability for their individual terms. A static homepage is not included either, as it is a page whose SEO data is read with the yoast-seo/get-post-seo-data ability. The title and description templates can contain snippet variables, and are returned as stored rather than as shown on the site.",
    "category": "yoast-seo",
    "input_schema": {
        "type": "object",
        "additionalProperties": false,
        "default": {}
    },
    "output_schema": {
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "target": {
                    "type": "string",
                    "enum": ["homepage", "author_archives", "date_archives", "search_page", "not_found_page", "post_type_archive"],
                    "description": "The pages these settings belong to."
                },
                "post_type": {
                    "type": "string",
                    "description": "Only present for the post_type_archive target: the post type of the content type."
                },
                "label": {
                    "type": "string",
                    "description": "Only present for the post_type_archive target: the name of the content type."
                },
                "seo_title": {
                    "type": "string",
                    "description": "The SEO title template. It can contain snippet variables in the %%variable%% format, which are replaced with the values of the page it is shown on. When empty, the default title is used."
                },
                "meta_description": {
                    "type": "string",
                    "description": "The meta description template, shown below the title in search results. It can contain snippet variables in the %%variable%% format, which are replaced with the values of the page it is shown on. When empty, no meta description is output."
                },
                "noindex": {
                    "type": "boolean",
                    "description": "Whether search engines are told not to index these pages. true hides them from search results; false lets them be shown in search results."
                },
                "enabled": {
                    "type": "boolean",
                    "description": "Whether these pages are in use on the site. Read-only: it can only be changed in the Yoast SEO settings. The settings of disabled pages can still be changed, but have no effect until they are enabled."
                },
                "shared": {
                    "type": "boolean",
                    "description": "Whether these settings are shared by many pages, like all author archives. Shared settings apply to every one of those pages, so their templates must not contain text about one specific page; use snippet variables for what differs between them."
                }
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
    "name": "yoast-seo/update-archive-and-special-page-seo-settings",
    "label": "Update SEO Settings for Archives and Special Pages",
    "description": "Update the SEO settings of the homepage when it shows the latest posts, an archive or a special page. Category, tag and other taxonomy archives are not included; use the yoast-seo/update-term-seo-data ability for their individual terms. Only the settings you provide are changed. Only use snippet variables that apply to the pages you update, as the ones that do not are silently removed when the page is rendered.",
    "category": "yoast-seo",
    "input_schema": {
        "type": "object",
        "additionalProperties": false,
        "required": ["target"],
        "minProperties": 2,
        "properties": {
            "target": {
                "type": "string",
                "enum": ["homepage", "author_archives", "date_archives", "search_page", "not_found_page", "post_type_archive"],
                "description": "The pages to update."
            },
            "post_type": {
                "type": "string",
                "description": "The post type of the content type whose archive to update. Required for the post_type_archive target, ignored for the others."
            },
            "seo_title": {
                "type": "string",
                "description": "The SEO title template. It can contain snippet variables in the %%variable%% format, which are replaced with the values of the page it is shown on. When empty, the default title is used."
            },
            "meta_description": {
                "type": "string",
                "description": "The meta description template, shown below the title in search results. It can contain snippet variables in the %%variable%% format, which are replaced with the values of the page it is shown on. When empty, no meta description is output."
            },
            "noindex": {
                "type": "boolean",
                "description": "Whether search engines are told not to index these pages. true hides them from search results; false lets them be shown in search results."
            }
        }
    },
    "output_schema": {
        "type": "object",
        "properties": {
            "target": {
                "type": "string",
                "enum": ["homepage", "author_archives", "date_archives", "search_page", "not_found_page", "post_type_archive"],
                "description": "The pages these settings belong to."
            },
            "post_type": {
                "type": "string",
                "description": "Only present for the post_type_archive target: the post type of the content type."
            },
            "label": {
                "type": "string",
                "description": "Only present for the post_type_archive target: the name of the content type."
            },
            "seo_title": {
                "type": "string",
                "description": "The SEO title template. It can contain snippet variables in the %%variable%% format, which are replaced with the values of the page it is shown on. When empty, the default title is used."
            },
            "meta_description": {
                "type": "string",
                "description": "The meta description template, shown below the title in search results. It can contain snippet variables in the %%variable%% format, which are replaced with the values of the page it is shown on. When empty, no meta description is output."
            },
            "noindex": {
                "type": "boolean",
                "description": "Whether search engines are told not to index these pages. true hides them from search results; false lets them be shown in search results."
            },
            "enabled": {
                "type": "boolean",
                "description": "Whether these pages are in use on the site. Read-only: it can only be changed in the Yoast SEO settings. The settings of disabled pages can still be changed, but have no effect until they are enabled."
            },
            "shared": {
                "type": "boolean",
                "description": "Whether these settings are shared by many pages, like all author archives. Shared settings apply to every one of those pages, so their templates must not contain text about one specific page; use snippet variables for what differs between them."
            },
            "warning": {
                "type": "string",
                "description": "Only present when some of the provided settings were not saved, or when the pages are disabled so the saved settings have no effect yet. Meant to be relayed to the user."
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

The definitions above are the ones returned on a site without Yoast SEO Premium. With Premium active, `social_title` and `social_description` are added after `noindex` to the output schemas of both abilities and to the input schema of the update ability:

```json
"social_title": {
    "type": "string",
    "description": "The social title template, shown when the page is shared on social media. It can contain snippet variables in the %%variable%% format, which are replaced with the values of the page it is shown on. When empty, the SEO title is used."
},
"social_description": {
    "type": "string",
    "description": "The social description template, shown when the page is shared on social media. It can contain snippet variables in the %%variable%% format, which are replaced with the values of the page it is shown on. When empty, the meta description is used."
}
```

## How to disable them programmatically
You can unregister either of these abilities through the WordPress-native `wp_abilities_api_init` action. Remove a name from the array to keep that ability enabled:

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
}, 20 ); // Run after Yoast SEO registers at default priority 10
```
