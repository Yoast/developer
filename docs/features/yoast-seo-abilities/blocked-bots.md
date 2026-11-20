---
id: blocked-bots
title: "Yoast SEO Abilities - Blocked bots"
sidebar_label: Blocked bots
description: This documentation explains the Yoast SEO Premium abilities that read and update which bots are blocked through the robots.txt file.
---

Yoast SEO Premium registers two abilities to work with the bots it blocks through the robots.txt file: one that reads which bots are blocked, and one that blocks or allows them. They cover the same settings as **Yoast SEO** → **Settings** → **Crawl optimization** → **Block unwanted bots**.

## Permissions

Both abilities are gated behind the `wpseo_manage_options` capability, the same capability that gates the Yoast SEO settings page where the bot blocking settings live.

## Annotations

Each ability declares a set of [behavior annotations](overview.md#annotations) as hints for AI agents and other MCP clients:

| Ability | Read-only | Destructive | Idempotent |
|---|---|---|---|
| `yoast-seo/get-blocked-bots` | Yes | No | Yes |
| `yoast-seo/update-blocked-bots` | No | Not declared (`null`) | Yes |

## Availability

Both abilities are only available when:

- Yoast SEO Premium is active.
- The site is not part of a WordPress multisite installation. Yoast SEO doesn't output the robots.txt rules for bot blocking on multisite, so the abilities are not offered there.

An unavailable ability does not appear in the `/wp-json/wp-abilities/v1/abilities` listing.

## Bots

The abilities cover the following bots. Each one is identified by its key in the input and output, and blocking it adds a `User-agent` group with `Disallow: /` for its user agent to the robots.txt file.

| Key | robots.txt user agent | Description |
|---|---|---|
| `google_extended` | `Google-Extended` | Google Gemini and Vertex AI bots. Blocking it doesn't prevent Google from indexing the site. |
| `gptbot` | `GPTBot` | OpenAI GPTBot. Other OpenAI bots, such as OAI-SearchBot and ChatGPT-User, aren't affected. |
| `ccbot` | `CCBot` | Common Crawl CCBot. |

:::caution
The rules take effect only when Yoast SEO generates the robots.txt file. When a physical `robots.txt` file exists in the site's root directory, WordPress serves that file instead and the rules are not output, even though the abilities still save and report the settings. The abilities don't detect a physical file; their descriptions tell agents to check the site's `/robots.txt` URL to confirm the rules are in effect.
:::

## `yoast-seo/get-blocked-bots`

Returns whether each bot is blocked. It takes no input; sending any input returns a validation error.

**Usage:**

```
GET /wp-json/wp-abilities/v1/abilities/yoast-seo/get-blocked-bots/run
```

**Response:**

```json
{
    "blocked": {
        "google_extended": false,
        "gptbot": true,
        "ccbot": false
    }
}
```

## `yoast-seo/update-blocked-bots`

Blocks or allows the bots you provide: `true` blocks a bot, `false` allows it again. Only the bots you provide are changed; the others keep their current status.

### Input

| Field | Type | Description |
|---|---|---|
| `blocked` | object (required) | The bots to change, keyed by the [bot key](#bots), each with a boolean value. Provide at least one bot. |

An input without `blocked`, with an empty `blocked` object, with a bot that isn't listed in [Bots](#bots), or with a non-boolean value returns a validation error and changes nothing.

**Usage:**

```
POST /wp-json/wp-abilities/v1/abilities/yoast-seo/update-blocked-bots/run
```

```json
{
    "input": {
        "blocked": {
            "gptbot": true,
            "ccbot": false
        }
    }
}
```

### Output

The response contains the new status of every bot, not only the ones you provided:

```json
{
    "blocked": {
        "google_extended": false,
        "gptbot": true,
        "ccbot": false
    }
}
```

### Errors

The bots are saved one at a time, in the order they are provided. When a bot can't be saved, the ability stops and returns a `yoast_seo_bot_blocking_not_saved` error (HTTP status `500`) that names that bot. The bots before it stay saved, and the ones after it are left unchanged.

Since the ability is idempotent, it's safe to retry. To find out which bots were saved before retrying, check the current status with [`yoast-seo/get-blocked-bots`](#yoast-seoget-blocked-bots).

## How to disable them programmatically

You can unregister either of these abilities through the WordPress-native `wp_abilities_api_init` action:

```php
<?php
add_action( 'wp_abilities_api_init', function() {
    $abilities = [
        'yoast-seo/get-blocked-bots',
        'yoast-seo/update-blocked-bots',
    ];
    foreach ( $abilities as $ability ) {
        if ( wp_has_ability( $ability ) ) {
            wp_unregister_ability( $ability );
        }
    }
}, 20 ); // Run after Yoast SEO Premium registers at default priority 10.
```
