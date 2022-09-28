---
id: overview
title: Yoast SEO for Shopify - Overview
sidebar_label: Overview
custom_edit_url: https://github.com/Yoast/developer/edit/main/docs/shopify/overview.md
description: An overview of how Yoast SEO for Shopify works
---

The [Yoast SEO for Shopify](https://apps.shopify.com/yoast-seo) app makes changes and additions to a store's theme files. It does this in order to optimize various aspects of technical SEO, and to connect our content editing tools to the website's output.
This document provides an overview of the types of changes we make, as well as providing details on how those changes can be reverted.

## Theme changes

Yoast SEO attempts to replace all SEO-related metadata from the theme with our own output. This includes:

 - The content of the `<title>` element
 - Various SEO-related `<meta>` tags (e.g, `<meta name="description" ...>`)
 - Various social media-related `<meta>` tags (e.g.,`<meta property="og:url" ...>`)
 - Canonical URL tags (i.e., `<link rel="canonical" ...>`)
 - Structured data / schema.org output (i.e., `<script type="application/ld+json">...</script>`)

It does this by 'commenting out' the relevant lines in the theme's code, and rendering our own output. This happens at the point of installation.

### Example

This example shows how part of a store's `theme.liquid` file might look, before and after modification by Yoast SEO.

#### Before

```html
<!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="theme-color" content="">
    <link rel="canonical" href="{{ canonical_url }}">
```

#### After

```html
<!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
  <head>{% render 'yoast-seo' %}
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="theme-color" content="">
    {%- comment -%}Auto-disabled. Yoast plugin is taking care of Meta Tags output.{%- endcomment -%}
    {%- if disabled_by_yoast_seo -%}
      <link rel="canonical" href="{{ canonical_url }}">
      <!-- disabled_by_yoast_seo -->
    {%- endif -%}
```

### Methodology

In the example above, you can see that we add `{% render 'yoast-seo' %}`, and a `{%- if disabled_by_yoast_seo -%}` condition.

This approach allows us to apply more sophisticated logic, and to integrate our app's content settings. For example, instead of simply outputting a _canonical URL_ value in the template, we use the following _snippet_ to control the behaviour of the whole tag:

```html
{%- capture yoast_seo_page_type -%}{%- render 'yoast-seo-page-type' -%}{%- endcapture -%}
{%- if yoast_seo_page_type != "404" %}
	{%- capture yoast_canonical_url -%}{%- render "yoast-seo-variable", variable: "canonical_url" -%}{%- endcapture -%}
	<link rel="canonical" href="{{- yoast_canonical_url | replace: '"', '&#34;' -}}"/>
{%- endif -%}
```

We create and use many such snippets to control how SEO settings are optimized and rendered.

### Other changes

In addition to optimizing the output of the `<head>` section of all templates, we make numerous small modifications to _template_, _layout_ and _section_ files.

These changes aim to remove all inline _structured data_ (in `JSON-LD` and `microdata` formats). We remove this code in order to implement [our own schema.org solution](https://developer.yoast.com/features/schema/plugins/yoast-seo-shopify), whilst reducing the risk of conflict and duplication.

Note that our app provides controls which allow you to toggle this behaviour for individual _types_ of schema.org properties. This can be helpful in cases where you wish to maintain custom schema output (e.g., when a theme has bespoke customizations, or another app adds complementary schema.org content).

## Reverting or removing theme changes

The easiest way to revert our theme changes is to use the dedicated control within the app. This control can be found in the app's settings menu.
More information about it can be found on [our help page about uninstalling the app](https://yoa.st/shopify72).

This control removes all of the theme customizations; a process which restores your theme to its unmodified state, whilst maintaining any customizations made since the point of installation.

### Removing changes after removing the app

Unfortunately, Shopify doesn't provide a mechanism which allows for us to automatically remove our theme changes when the app is removed. This means that some users might find themselves unable to access our removal tool, and must manually remove our changes.

If you've removed the app and aren't able to reinstall it, we recommend visiting [our help page about uninstalling the app](https://yoa.st/shopify72). This provides an up-to-date set of instructions on how to remove our theme modifications.
