---
id: myyoast-oauth-filters
title: "Yoast SEO: MyYoast OAuth client configuration filters"
sidebar_label: MyYoast OAuth client filters
---

The MyYoast OAuth client uses three filters to determine which authorization server to talk to and which credentials to present during [Dynamic Client Registration](https://www.rfc-editor.org/rfc/rfc7591). The defaults shipped with the plugin point at production MyYoast and are correct for live sites — these filters exist so that development and staging sites can override them.

:::caution Requires the MyYoast connection feature flag
The MyYoast OAuth client is only loaded when `YOAST_SEO_MYYOAST_CONNECTION` is defined as `true` in `wp-config.php`. With the flag off, these filters have no effect because the OAuth client never runs.

The software statement and initial access token are normally signed by a MyYoast administrator. Override these filters only when pointing the client at a non-production issuer.
:::

## `wpseo_myyoast_issuer_url`

The base URL of the MyYoast issuer. The Yoast SEO plugin ships with the production URL as the default; override it to point at a development or staging issuer. Trailing slashes in the returned value are stripped automatically.

```php
<?php

add_filter(
    'wpseo_myyoast_issuer_url',
    static function () {
        return 'https://my.yoast.test';
    }
);
```

## `wpseo_myyoast_software_statement`

A signed [JWT software statement](https://www.rfc-editor.org/rfc/rfc7591#section-2.3) that identifies the Yoast SEO plugin during Dynamic Client Registration. The plugin ships a software statement that is valid for the production issuer; for non-production issuers, use this filter to substitute a software statement signed by that issuer's administrators.

```php
<?php

add_filter(
    'wpseo_myyoast_software_statement',
    static function () {
        return 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...';
    }
);
```

## `wpseo_myyoast_initial_access_token`

The [initial access token](https://www.rfc-editor.org/rfc/rfc7591#section-3) presented as a bearer credential during Dynamic Client Registration. Like the software statement, the plugin ships one that is valid for the production issuer; override it when registering against another issuer.

```php
<?php

add_filter(
    'wpseo_myyoast_initial_access_token',
    static function () {
        return 'iat-...';
    }
);
```

## Configuring all three filters together

When pointing the OAuth client at a non-production issuer, all three filters are typically set together — for example in a must-use plugin or a theme's `functions.php`:

```php
<?php

add_filter(
    'wpseo_myyoast_issuer_url',
    static function () {
        return 'https://my.yoast.test';
    }
);

add_filter(
    'wpseo_myyoast_software_statement',
    static function () {
        return 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...';
    }
);

add_filter(
    'wpseo_myyoast_initial_access_token',
    static function () {
        return 'iat-...';
    }
);
```

After changing the issuer URL on a registered site, run [`wp yoast auth deregister`](/features/wp-cli/auth.md#deregister) followed by [`wp yoast auth register`](/features/wp-cli/auth.md#register) so that the site obtains a fresh registration against the new issuer.
