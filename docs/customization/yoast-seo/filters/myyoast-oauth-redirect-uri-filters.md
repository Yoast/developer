---
id: myyoast-oauth-redirect-uri-filters
title: "Yoast SEO: Customize MyYoast OAuth redirect URIs"
sidebar_label: MyYoast OAuth redirect URI filters
---

Yoast SEO uses an OAuth 2.0 flow to connect your site to MyYoast. In standard WordPress setups the plugin automatically determines the correct OAuth callback URL. For non-standard setups — reverse proxies, alternate admin URLs, staging environments with custom domains — two filters let you override these URLs.

## `wpseo_myyoast_redirect_uris`

**Source**: `src/myyoast-client/infrastructure/wordpress/redirect-uri-provider.php`

Filters the redirect URIs registered with MyYoast for this site. The plugin registers a list of allowed callback URLs with the MyYoast OAuth server. By default the list contains only the site's canonical admin callback URL. Use this filter to add extra URIs (e.g. because your site is reachable via multiple hostnames), to replace the canonical URL, or to remove URIs that should not be allowed.

The returned value must be an array of non-empty strings. If the filter empties the array, Yoast SEO falls back to the canonical admin callback URL so that at least one URI is always registered.

### Parameters

| Parameter | Type | Description |
|---|---|---|
| `$redirect_uris` | `string[]` | The redirect URIs to register. Defaults to an array containing only the canonical admin callback URL. |

### Usage

#### Adding an extra redirect URI for a reverse-proxy domain

```php
<?php

/**
 * Registers an additional OAuth callback URL for a reverse-proxy domain.
 *
 * @param string[] $redirect_uris The redirect URIs to register with MyYoast.
 *
 * @return string[] The redirect URIs, including the extra domain.
 */
function my_add_proxy_redirect_uri( $redirect_uris ) {
    $redirect_uris[] = 'https://public.example.com/wp-admin/admin-post.php?action=yoast_myyoast_oauth_callback';
    return $redirect_uris;
}

add_filter( 'wpseo_myyoast_redirect_uris', 'my_add_proxy_redirect_uri' );
```

#### Replacing the default callback URL

```php
<?php

/**
 * Replaces the default OAuth callback URL with one suited for a headless/proxy setup.
 *
 * @param string[] $redirect_uris The default redirect URIs.
 *
 * @return string[] The replacement redirect URIs.
 */
function my_replace_redirect_uris( $redirect_uris ) {
    return [ 'https://headless.example.com/oauth/yoast/callback' ];
}

add_filter( 'wpseo_myyoast_redirect_uris', 'my_replace_redirect_uris' );
```

:::caution
Every URI you register here must also be allowed by your server's CORS and redirect policies. Adding a URI that is not reachable will not break the connection flow, but removing all valid URIs can prevent OAuth from completing.
:::

---

## `wpseo_myyoast_authorization_redirect_uri`

**Source**: `src/myyoast-client/infrastructure/wordpress/redirect-uri-provider.php`

Filters the single redirect URI embedded in each MyYoast authorization request. When your site starts an OAuth flow, it sends one specific callback URL in the authorization request. The OAuth server verifies this URL against the site's registered list; a mismatch causes the authorization to fail.

The default value is the canonical admin callback URL when it appears in the registered list, or the first registered URI otherwise. The filter lets you override the per-flow choice, for example to direct the OAuth callback through a load-balanced or alternate endpoint.

:::caution
The returned value **must** be one of the URIs already registered via `wpseo_myyoast_redirect_uris`. If it is not registered, the plugin ignores the filtered value and uses the computed default to prevent an OAuth redirect-URI mismatch error.
:::

### Parameters

| Parameter | Type | Description |
|---|---|---|
| `$redirect_uri` | `string` | The redirect URI to embed in the authorization request. Must be one of the site's registered redirect URIs. |
| `$client` | `Yoast\WP\SEO\MyYoast_Client\Domain\Registered_Client` | The registered client for this OAuth flow. |
| `$user_id` | `int` | The WordPress user ID starting the flow. |
| `$scopes` | `string[]` | The OAuth scopes being requested. |
| `$resource_indicator` | `Yoast\WP\SEO\MyYoast_Client\Domain\Resource_Indicator` | The RFC 8707 resource indicator the token will be bound to. |
| `$return_url` | `string\|null` | The URL the user returns to after authorization, or `null`. |

### Usage

#### Forcing a specific callback URL for a multi-host environment

```php
<?php

/**
 * Uses a dedicated load-balancer endpoint for all MyYoast OAuth callbacks.
 *
 * @param string $redirect_uri The default redirect URI.
 *
 * @return string The preferred redirect URI.
 */
function my_force_lb_redirect_uri( $redirect_uri ) {
    return 'https://lb.example.com/wp-admin/admin-post.php?action=yoast_myyoast_oauth_callback';
}

add_filter( 'wpseo_myyoast_authorization_redirect_uri', 'my_force_lb_redirect_uri' );
```

:::note
Register the URI you return here via `wpseo_myyoast_redirect_uris` first. A URI that is not registered is silently ignored and the plugin falls back to the default.
:::
