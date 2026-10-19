---
id: site-representation
title: "Yoast SEO Abilities — Site Representation"
sidebar_label: Site representation
description: This documentation explains the ability that updates the Yoast SEO site representation settings.
---

Yoast SEO registers one ability to update the site representation settings: the information that tells search engines whether the site represents an organization or a person, and provides the name, logo, social profiles, and related details used in the site's organization schema. With Yoast SEO Premium active, it can also update the organization's additional details and identifiers.

It is listed at `/wp-json/wp-abilities/v1/abilities?category=yoast-seo`.

## Permissions

The `yoast-seo/update-site-representation` ability is gated behind the `wpseo_manage_options` capability, the same capability that gates the Yoast SEO settings page where the site representation is configured.

## Annotations

| Ability | Read-only | Destructive | Idempotent |
|---|---|---|---|
| `yoast-seo/update-site-representation` | No | Not declared (`null`) | Yes |

`destructive` is left undeclared (`null`): providing an empty value for a field (an empty string, `0`, or an empty array) clears that setting, which could remove previously saved data. Callers should treat this ability as potentially destructive. It is idempotent: calling it again with the same input leaves the settings in the same state.

## Input

Send a POST request to `/wp-json/wp-abilities/v1/abilities/yoast-seo/update-site-representation/run` with an `input` object containing any of the fields below. At least one field is required. Only the fields you include are changed; every other setting is left untouched.

A provided empty value (an empty string, `0`, or an empty array) clears that setting, except for `company_or_person`, which must always be `"company"` or `"person"`. A provided list (like `other_social_urls`) replaces the current list in full.

| Field | Type | Description |
|---|---|---|
| `company_or_person` | `"company"` or `"person"` | Whether the site represents an organization or a person. |
| `company_name` | string | The name of the organization the site represents. When empty, the site name is used. Only used when `company_or_person` is `"company"`. |
| `company_alternate_name` | string | An alternate name of the organization, like an acronym or a shorter version of its name. Only used when `company_or_person` is `"company"`. |
| `company_logo_id` | integer (≥ 0) | The attachment ID of the organization logo, an image from the media library. `0` when no logo is set, in which case the site logo is used. An ID that is not an image in the media library is not saved and returns a warning. Only used when `company_or_person` is `"company"`. |
| `company_or_person_user_id` | integer (≥ 0) | The ID of the user the site represents. The person's name is taken from the user's display name. `0` when no user is set. Like in the settings page, users who cannot list users can only pick users with published posts, and on multisite only users who are members of the site can be picked. Any other ID is not saved and returns a warning. Only used when `company_or_person` is `"person"`. |
| `person_logo_id` | integer (≥ 0) | The attachment ID of the personal logo or avatar, an image from the media library. `0` when no logo is set, in which case the site logo is used. An ID that is not an image in the media library is not saved and returns a warning. Only used when `company_or_person` is `"person"`. |
| `facebook_site` | string | The URL of the organization's Facebook page. An invalid URL is not saved and returns a warning. Only used when `company_or_person` is `"company"`. For a person, the Facebook URL from the user's profile is used instead. |
| `twitter_site` | string | The X username of the organization, without the `@`. An invalid username is not saved and returns a warning. Only added to the schema when `company_or_person` is `"company"`. It is also used in the X card meta tags: as the site's X account (unless the site represents a person whose profile has an X username), and as the X account of posts whose author has no X username. |
| `other_social_urls` | array of strings | The URLs of the organization's other social profiles (Instagram, LinkedIn, YouTube, etc.). Replaces the current list; empty strings are dropped. If any URL in the list is invalid, the whole list is not saved and a warning is returned. Only used when `company_or_person` is `"company"`. For a person, the social profiles from the user's profile are used instead. |

:::note
When Yoast Local SEO is active, it requires the site to represent an organization, so `company_or_person` is always `"company"`. Setting it to `"person"` is not saved and returns a warning, and the field's description in the input schema mentions this upfront.
:::

### Yoast SEO Premium fields

When Yoast SEO Premium is active, the ability also accepts the fields below. They are listed in the ability's input and output schema only while Premium is active; without Premium, sending them is rejected as an unknown field. Like the organization fields above, they are only used in the schema when `company_or_person` is `"company"`.

| Field | Type | Description |
|---|---|---|
| `org-description` | string (max. 2000 characters) | A description of the organization. |
| `org-email` | string | The email address of the organization. An invalid email address is not saved and returns a warning. |
| `org-phone` | string | The phone number of the organization. |
| `org-legal-name` | string | The registered legal name of the organization. |
| `org-founding-date` | string (`YYYY-MM-DD`) | The date the organization was founded. A date that does not exist (like `2024-02-31`) is not saved and returns a warning. |
| `org-number-employees` | string | The number of employees, either as a number (like `"25"`) or as a range (like `"11-50"`). A range whose lower bound is above its upper bound is not saved and returns a warning. |
| `org-vat-id` | string | The VAT ID of the organization. |
| `org-tax-id` | string | The tax ID of the organization. |
| `org-iso` | string | The ISO 6523 code of the organization. |
| `org-duns` | string | The DUNS number of the organization. |
| `org-leicode` | string | The LEI code of the organization. |
| `org-naics` | string | The NAICS code of the organization. |
| `mastodon_url` | string | The URL of the organization's Mastodon profile. For a person, the Mastodon URL from the user's profile is used instead. An invalid URL is not saved and returns a warning. |

A malformed founding date or number of employees, a description longer than 2000 characters, or a value that is not a string fails the input schema, so the whole request is rejected and nothing is saved.

:::note
When Yoast Local SEO is active, it provides the organization's email address, phone number, VAT ID, and tax ID. Setting `org-email`, `org-phone`, `org-vat-id`, or `org-tax-id` then has no effect, so they are not saved and a warning is returned instead. Their descriptions in the input schema mention this upfront. Clearing them with an empty string is still allowed, so values saved before Yoast Local SEO was activated can be removed.
:::

## Output

The response contains the new value of every site representation setting, not only the ones you provided, including the Yoast SEO Premium fields when Premium is active.

```json
{
    "company_or_person": "company",
    "company_name": "Acme Corp",
    "company_alternate_name": "",
    "company_logo_id": 0,
    "company_or_person_user_id": 0,
    "person_logo_id": 0,
    "facebook_site": "",
    "twitter_site": "acmecorp",
    "other_social_urls": []
}
```

When a requested setting could not be applied or saved, the response also contains a `warning` string, meant to be relayed to the user. It explains each setting that was not changed, and ends by saying whether the other provided settings were saved. A value that the setting's own sanitization or validation changes or rejects is reported as "could not be saved as provided", and the response returns the setting's current value. For example, when you try to switch to a person while Yoast Local SEO is active:

```json
{
    "company_or_person": "company",
    "company_name": "Acme Corp",
    "...": "...",
    "warning": "The site was not set to represent a person, because Yoast Local SEO is active and requires the site to represent an organization. No other settings were saved."
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

Set the organization's details and identifiers (requires Yoast SEO Premium):

```json
{
    "input": {
        "org-legal-name": "Acme B.V.",
        "org-founding-date": "2001-04-15",
        "org-number-employees": "11-50",
        "org-vat-id": "NL123456789B01",
        "mastodon_url": "https://mastodon.social/@acme"
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
