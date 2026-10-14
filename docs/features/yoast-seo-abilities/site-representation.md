---
id: site-representation
title: "Yoast SEO Abilities — Site Representation"
sidebar_label: Site representation
description: This documentation explains the ability that updates the Yoast SEO site representation settings.
---

Yoast SEO registers one ability to update the site representation settings: the information that tells search engines whether the site represents an organization or a person, and provides the name, logo, social profiles, and related details used in the site's organization schema.

It is listed at `/wp-json/wp-abilities/v1/abilities?category=yoast-seo`.

## Permissions

The `yoast-seo/update-site-representation` ability is gated behind the `wpseo_manage_options` capability, the same capability that gates the Yoast SEO settings page where the site representation is configured.

## Annotations

| Ability | Read-only | Destructive | Idempotent |
|---|---|---|---|
| `yoast-seo/update-site-representation` | No | Not declared (`null`) | Yes |

`destructive` is left undeclared (`null`): providing an empty value for a field (an empty string, `0`, or an empty array) clears that setting, which could remove previously saved data. Callers should treat this ability as potentially destructive. It is idempotent: calling it again with the same input leaves the settings in the same state.

:::caution
The site representation settings are public facts about who owns the site. Only use values the user provided or that come from the site itself, never guessed or sourced from elsewhere. Confirm them with the user before saving.
:::

## Input

Send a POST request to `/wp-json/wp-abilities/v1/abilities/yoast-seo/update-site-representation/run` with an `input` object containing any of the fields below. At least one field is required. Only the fields you include are changed; every other setting is left untouched.

A provided empty value (an empty string, `0`, or an empty array) clears that setting. A provided list (like `other_social_urls`) replaces the current list in full.

| Field | Type | Description |
|---|---|---|
| `company_or_person` | `"company"` or `"person"` | Whether the site represents an organization or a person. |
| `company_name` | string | The name of the organization the site represents. When empty, the site name is used. Only used when `company_or_person` is `"company"`. |
| `company_alternate_name` | string | An alternate name of the organization, like an acronym or a shorter version of its name. Only used when `company_or_person` is `"company"`. |
| `company_logo_id` | integer (≥ 0) | The attachment ID of the organization logo from the media library. `0` when no logo is set, in which case the site logo is used. Only used when `company_or_person` is `"company"`. |
| `company_or_person_user_id` | integer (≥ 0) | The ID of the user the site represents. The person's name is taken from the user's display name. `0` when no user is set. Only used when `company_or_person` is `"person"`. |
| `person_logo_id` | integer (≥ 0) | The attachment ID of the personal logo or avatar from the media library. `0` when no logo is set. Only used when `company_or_person` is `"person"`. |
| `facebook_site` | string | The URL of the organization's Facebook page. Only used when `company_or_person` is `"company"`. |
| `twitter_site` | string | The X username of the organization, without the `@`. Also used in X card meta tags. Only used in schema when `company_or_person` is `"company"`. |
| `other_social_urls` | array of strings | The URLs of the organization's other social profiles (Instagram, LinkedIn, YouTube, etc.). Replaces the current list. Only used when `company_or_person` is `"company"`. |

:::note
When Yoast Local SEO is active, it requires the site to represent an organization, so `company_or_person` is always `"company"` and cannot be changed to `"person"`.
:::

## Output

The response mirrors the input shape. Each field you provided appears in the output with its new value. A `warning` string is included when a requested setting could not be applied or saved (for example, when Yoast Local SEO requires the site to represent an organization, or when the user ID to represent does not exist).

```json
{
    "company_or_person": "company",
    "company_name": "Acme Corp",
    "twitter_site": "acmecorp"
}
```

If a setting could not be saved:

```json
{
    "company_or_person": "person",
    "warning": "Yoast Local SEO requires the site to represent an organization."
}
```

## Usage examples

Set the site to represent an organization named "Acme Corp":

```json
{
    "input": {
        "company_or_person": "company",
        "company_name": "Acme Corp"
    }
}
```

Update the organization's social profiles:

```json
{
    "input": {
        "facebook_site": "https://www.facebook.com/acmecorp",
        "twitter_site": "acmecorp",
        "other_social_urls": [
            "https://www.linkedin.com/company/acme-corp",
            "https://www.instagram.com/acmecorp"
        ]
    }
}
```

Set the site to represent a person (user ID 3):

```json
{
    "input": {
        "company_or_person": "person",
        "company_or_person_user_id": 3
    }
}
```

## How to disable it programmatically

You can unregister this ability through the WordPress-native `wp_abilities_api_init` action:

```php
<?php
add_action( 'wp_abilities_api_init', function() {
    if ( wp_has_ability( 'yoast-seo/update-site-representation' ) ) {
        wp_unregister_ability( 'yoast-seo/update-site-representation' );
    }
}, 20 ); // Run after Yoast SEO registers at default priority 10.
```
