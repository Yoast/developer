---
id: author-schema
title: "Yoast SEO Abilities - Author schema"
sidebar_label: Author schema
description: This documentation explains the ability that updates a user's author schema settings, including pronouns and social profiles.
---

Yoast SEO registers one ability to update a user's author schema settings: the pronouns and social profiles that are used to populate the Person schema for the user. The Person schema describes the user as the author of their posts, on their author archive, and as the site itself when the site is configured to represent this person.

It is listed at `/wp-json/wp-abilities/v1/abilities?category=yoast-seo`.

## Permissions

The `yoast-seo/update-author-schema` ability is gated behind the `edit_user` capability for the specific user being updated. This mirrors the capability that gates the user profile page:

* A user can always update their own author schema settings.
* An administrator can update any user's settings.

## Annotations

| Ability | Read-only | Destructive | Idempotent |
|---|---|---|---|
| `yoast-seo/update-author-schema` | No | Not declared (`null`) | Yes |

`destructive` is left undeclared (`null`): providing an empty string for a field clears that setting, which could remove previously saved data. Callers should treat this ability as potentially destructive. It is idempotent: calling it again with the same input leaves the user's settings in the same state.

## Input

Send a POST request to `/wp-json/wp-abilities/v1/abilities/yoast-seo/update-author-schema/run` with an `input` object containing `user_id` and any of the fields you want to change. Only the fields you include are changed; every other setting is left untouched.

`user_id` is required. Provide only `user_id` without any other fields to read the current settings without changing anything.

:::caution
Author schema settings are published as personal details about the user. Only use values the user has provided themselves — never values guessed, inferred (for example pronouns inferred from a name), or sourced elsewhere. Always confirm them before saving.
:::

| Field | Type | Description |
|---|---|---|
| `user_id` | integer (≥ 1) | **Required.** The ID of the user whose settings to update or read. |
| `wpseo_pronouns` | string | The pronouns of the user, such as `she/her`, `he/him`, or `they/them`. Can only be set when author archives are enabled and the current user can edit other users; a warning is returned otherwise. |
| `facebook` | string | The URL of the user's Facebook profile. Also used as the article author in the Open Graph meta tags of the user's posts. |
| `instagram` | string | The URL of the user's Instagram profile. |
| `linkedin` | string | The URL of the user's LinkedIn profile. |
| `myspace` | string | The URL of the user's MySpace profile. |
| `pinterest` | string | The URL of the user's Pinterest profile. |
| `soundcloud` | string | The URL of the user's SoundCloud profile. |
| `tumblr` | string | The URL of the user's Tumblr profile. |
| `twitter` | string | The X username of the user. A leading `@` is stripped automatically; a full X profile URL is also accepted and saved as the username. Also used in the X card meta tags: as the creator of the user's posts, and as the site's X account when the site represents this user. |
| `youtube` | string | The URL of the user's YouTube channel. |
| `wikipedia` | string | The URL of the Wikipedia page about the user. |

Social profile values are validated: an invalid URL is not saved and a warning is returned for that field. A provided empty string clears the setting. The other fields are still saved when one field fails validation.

## Output

Returns the full set of author schema settings for the user after the update, keyed by field name, plus the `user_id`. When a field could not be saved as provided — for example because a social profile URL is invalid, or because pronouns cannot be set on this site — an extra `warning` field is included in the response explaining which fields were not saved. The other fields are still saved when one fails.

### Usage

To read the current author schema settings of the user with ID 3 without changing anything:

```
/wp-json/wp-abilities/v1/abilities/yoast-seo/update-author-schema/run
```

```json
{
    "input": {
        "user_id": 3
    }
}
```

To update the user's LinkedIn profile and X username:

```json
{
    "input": {
        "user_id": 3,
        "linkedin": "https://www.linkedin.com/in/jane-doe/",
        "twitter": "janedoe"
    }
}
```

A successful response might look like this:

```json
{
    "user_id": 3,
    "wpseo_pronouns": "she/her",
    "facebook": "https://www.facebook.com/janedoe",
    "instagram": "",
    "linkedin": "https://www.linkedin.com/in/jane-doe/",
    "myspace": "",
    "pinterest": "",
    "soundcloud": "",
    "tumblr": "",
    "twitter": "janedoe",
    "youtube": "",
    "wikipedia": ""
}
```

When a field cannot be saved, the response includes a `warning`:

```json
{
    "user_id": 3,
    "wpseo_pronouns": "she/her",
    "facebook": "https://www.facebook.com/janedoe",
    "instagram": "",
    "linkedin": "https://www.linkedin.com/in/jane-doe/",
    "myspace": "",
    "pinterest": "",
    "soundcloud": "",
    "tumblr": "",
    "twitter": "janedoe",
    "youtube": "",
    "wikipedia": "",
    "warning": "The facebook setting could not be saved as provided, so its current value is returned. The other settings were saved."
}
```

## Full definition

A _GET_ request to `/wp-json/wp-abilities/v1/abilities` returns the complete definition of the ability:

```json
{
    "name": "yoast-seo/update-author-schema",
    "label": "Update Author Schema",
    "description": "Update Yoast SEO's author schema settings of a user, which provide their pronouns, social profiles and, depending on the active add-ons, other details for the user's Person schema. That schema describes the user as the author of their posts, on their author archive, and as the site itself when the site represents this user. Only the settings you provide are changed; a provided empty string clears that setting. Provide only the user ID to read the current settings without changing anything. These settings are published as personal details about the user: only use values you were given, never guessed, inferred (for example pronouns from a name) or found elsewhere, and confirm them before saving.",
    "category": "yoast-seo",
    "input_schema": {
        "type": "object",
        "additionalProperties": false,
        "required": ["user_id"],
        "properties": {
            "user_id": {
                "type": "integer",
                "minimum": 1,
                "description": "The ID of the user whose settings to update or read."
            },
            "wpseo_pronouns": {
                "type": "string",
                "description": "The pronouns of the user, like \"she/her\", \"he/him\" or \"they/them\". Only users who can edit other users can change them."
            },
            "facebook": {
                "type": "string",
                "description": "The URL of the user's Facebook profile. It is also used as the article author in the Open Graph meta tags of the user's posts."
            },
            "instagram": { "type": "string" },
            "linkedin": { "type": "string" },
            "myspace": { "type": "string" },
            "pinterest": { "type": "string" },
            "soundcloud": { "type": "string" },
            "tumblr": { "type": "string" },
            "twitter": {
                "type": "string",
                "description": "The X username of the user. A leading @ is removed, and an X profile URL is also accepted and saved as the username."
            },
            "youtube": { "type": "string" },
            "wikipedia": { "type": "string" }
        }
    },
    "output_schema": {
        "type": "object",
        "properties": {
            "user_id": { "type": "integer" },
            "wpseo_pronouns": { "type": "string" },
            "facebook": { "type": "string" },
            "instagram": { "type": "string" },
            "linkedin": { "type": "string" },
            "myspace": { "type": "string" },
            "pinterest": { "type": "string" },
            "soundcloud": { "type": "string" },
            "tumblr": { "type": "string" },
            "twitter": { "type": "string" },
            "youtube": { "type": "string" },
            "wikipedia": { "type": "string" },
            "warning": {
                "type": "string",
                "description": "Only present when a requested setting could not be applied or saved, for example when a social profile is not a valid URL. Meant to be relayed to the user."
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

## How to disable it programmatically

You can unregister this ability through the WordPress-native `wp_abilities_api_init` action:

```php
<?php
add_action( 'wp_abilities_api_init', function() {
    if ( wp_has_ability( 'yoast-seo/update-author-schema' ) ) {
        wp_unregister_ability( 'yoast-seo/update-author-schema' );
    }
}, 20 ); // Run after Yoast SEO registers at default priority 10
```
