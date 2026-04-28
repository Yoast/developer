---
id: auth
title: "Yoast SEO WP CLI: MyYoast authentication command"
sidebar_label: MyYoast authentication
---

Yoast SEO 27.6 introduces `wp yoast auth`, a WP CLI command namespace for managing the site's MyYoast OAuth client. It covers Dynamic Client Registration, the user authorization code flow, the site-level client credentials grant, token revocation, and cryptographic key rotation.

:::caution Requires the MyYoast connection feature flag
The `wp yoast auth` command is only registered when the MyYoast connection module is enabled. To enable it, add the following to your `wp-config.php`:

```php
define( 'YOAST_SEO_MYYOAST_CONNECTION', true );
```

Without this constant, `wp yoast auth --help` will report that the command is not found.
:::

:::tip
If you don't know what WP CLI is, you're missing out! It's a command line interface for WordPress that makes loads of tasks easier. [Read all about it on wp-cli.org](https://wp-cli.org/).
:::

All subcommands that operate in a user context honor WP CLI's global `--user=<id|login|email>` flag. Subcommands that produce structured output accept `--format=table|json` (default: `table`).

## status

Shows the current MyYoast OAuth client status: issuer configuration, registration state, and token status. No network calls are made.

```shell script
wp yoast auth status
wp yoast auth status --user=admin
wp yoast auth status --format=json
```

## register

Registers the site as an OAuth client using [Dynamic Client Registration (RFC 7591)](https://www.rfc-editor.org/rfc/rfc7591). Pass `--force` to deregister an existing client first and register again.

```shell script
wp yoast auth register
wp yoast auth register --force
```

## verify

Re-reads the current client registration from the authorization server to confirm it is still valid, and prints the registration metadata. The `registration_access_token` is redacted from the output.

```shell script
wp yoast auth verify
wp yoast auth verify --format=json
```

## deregister

Deletes the client registration from the authorization server and clears all local registration data and cached tokens. Use `--local-only` to skip the server roundtrip and remove only the local data. Use `--yes` to skip the confirmation prompt.

```shell script
wp yoast auth deregister
wp yoast auth deregister --local-only
wp yoast auth deregister --yes
```

## authorize

Authorizes the site or a specific user with MyYoast.

With `--site`, performs a `client_credentials` grant for a site-level token (no browser involved):

```shell script
wp yoast auth authorize --site --scopes=service:analytics
```

Without `--site`, runs the user [authorization code flow with PKCE](https://www.rfc-editor.org/rfc/rfc7636) in two phases. First, generate the authorization URL:

```shell script
wp yoast auth authorize --user=admin --scopes=openid,profile
```

Visit the printed URL in a browser, complete authorization, and copy the `code` and `state` query parameters from the callback URL. Then exchange them for tokens:

```shell script
wp yoast auth authorize --user=admin --code=<CODE> --state=<STATE>
```

Pass `--url-only` during phase 1 to print just the URL without the surrounding instructions, which is useful for scripting.

## revoke

Revokes tokens for the current user, the site, or both. Combine with `--user=<user>` to target a specific user. Use `--yes` to skip the confirmation prompt.

```shell script
wp yoast auth revoke --user=admin
wp yoast auth revoke --site
wp yoast auth revoke --user=admin --site --yes
```

## rotate-keys

Rotates cryptographic key pairs. The registration key pair (used for `private_key_jwt` client authentication) requires a server roundtrip; the [DPoP](https://www.rfc-editor.org/rfc/rfc9449) proof key pair is rotated locally. Use `--all` to rotate both. Use `--yes` to skip the confirmation prompt.

```shell script
wp yoast auth rotate-keys --registration
wp yoast auth rotate-keys --dpop
wp yoast auth rotate-keys --all
```

:::caution
Rotating keys may invalidate existing tokens. Plan rotations alongside a re-authorization where appropriate.
:::
