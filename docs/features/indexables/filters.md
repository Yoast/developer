---
id: indexables-filters
title: "Indexables: Filters"
sidebar_label: Filters
description: The filters we have for indexables creation and how to use them.
---

## Introduction

Before dealing with these filters please make sure you have an understanding of what Indexables are and are used for by 
reading the [functional specification](/features/indexables/functional-specification/) and maybe even the 
[technical specification](/features/indexables/technical-specification/).

## Disabling Indexables completely

By default, as per the [technical specifcation](/features/indexables/technical-specification/), Yoast SEO will continuously
create indexables for all the content that can be optimized on a site. This includes posts, pages, custom post types, and
archives for taxonomies (categories, tags, and custom types), users, and so on.

In some cases, users may wish to disable the creation of indexables. When the `Yoast\WP\SEO\should_index_indexables`
filter is set to false, the plugin will stop storing newly created indexables.

:::note
We already disable indexables by default on sites where the core function [`wp_get_environment_type()`](https://developer.wordpress.org/reference/functions/wp_get_environment_type/)
does _not_ return `production`.
:::

:::caution Discrepancies when indexables are disabled
When the creation of indexables is disabled, the following features are not working 100% properly:

* <a href="/features/blocks/breadcrumbs/">Breadcrumb blocks</a>
* <a href="/features/schema/pieces/breadcrumb">Breadcrumb schema pieces</a>
* <a href="/features/opengraph/functional-specification">og:image</a> meta tags will show resized images instead of their full-sized counterparts, when the prominent image of the content is resized.
* <a href="/features/twitter/functional-specification">twitter:image</a> meta tags will show resized images instead of their full-sized counterparts, when the prominent image of the content is resized.
:::

### Code example

```php
add_filter( 'Yoast\WP\SEO\should_index_indexables', '__return_false' );
```

## Excluding content

In the [technical specification](/features/indexables/technical-specification/) for Indexables we outline when we create Indexables for both
post types and taxonomies. If, for some reason, you're registering either a post type or a taxonomy as `public`, and, in the 
case of post types, they get a `publish` post status, yet you do _not_ use those URLs on the frontend of your site, you *should*
exclude them from Indexables creation.

:::danger Warning
**If you need these filters, you are probably "doing it wrong".**

If you're registering a post type or taxonomy as `public`, they are always going to show up in places where they do _not_ belong.
Registering these as `public` should really only happen when you are going to use those URLs on the frontend of your site. 
Use of these filters is of course at your own risk and does _not_ mean that the content in these objects cannot be seen by search engines.
:::

:::caution noindexed post types
**We need Indexables if the page is showing up on the front end.**

So, even if you've set the post type to `noindex`, if the URL is going to be shown on the frontend, we need an Indexable for it.
:::

### Excluding post types {#post_types}

The `wpseo_indexable_excluded_post_types` filter takes an array of excluded post types. Make sure not to destroy that array, 
just add to it. An example:

```php
add_filter( 'wpseo_indexable_excluded_post_types', 'do_not_create_indexables_for_orders' );

/**
 * Exclude orders from Yoast SEO Indexable creation.
 *
 * @link https://developer.yoast.com/features/indexables/indexables-filters/#post_types
 * 
 * @param string[] $excluded_post_types Array of excluded post types by name.
 * 
 * @return string[]
 */
function do_not_create_indexables_for_orders( $excluded_post_types ) {
    $excluded_post_types[] = 'orders';
    return $excluded_post_types;
}
```

### Excluding taxonomies {#taxonomies}

The `wpseo_indexable_excluded_taxonomies` filter takes an array of excluded post types. Make sure not to destroy that array,
just add to it. An example:

```php
add_filter( 'wpseo_indexable_excluded_taxonomies', 'do_not_create_indexables_for_order_types' );

/**
 * Exclude order types from Yoast SEO Indexable creation.
 *
 * @link https://developer.yoast.com/features/indexables/indexables-filters/#taxonomies
 * 
 * @param string[] $excluded_taxonomies Array of excluded taxonomies by name.
 * 
 * @return string[]
 */
function do_not_create_indexables_for_order_types( $excluded_taxonomies ) {
    $excluded_taxonomies[] = 'order_type';
    return $excluded_taxonomies;
}
```

## Force including content


### Force including post types {#included_post_types}

The `wpseo_indexable_forced_included_post_types` filter takes an array of post types which indexables are to be created for. Make sure not to destroy that array, 
just add to it. An example:

```php
add_filter( 'wpseo_indexable_forced_included_post_types', 'force_create_indexables_for_non_public_post_type' );

/**
 * Force create indexables for a post type that would otherwise not be eligible for Yoast SEO Indexable creation.
 *
 * @link https://developer.yoast.com/features/indexables/indexables-filters/#included_post_types
 * 
 * @param string[] $included_post_types Array of included post types by name.
 * 
 * @return string[]
 */
function force_create_indexables_for_non_public_post_type( $included_post_types ) {
    $included_post_types[] = 'not_public_post_type';
    return $included_post_types;
}

```
### Force creating and using attachment indexables {#force_creating_and_using_attachment_indexables}

To use indexables instead of content scanning to find all content images. Enable this filter as displayed below. Refer to [customizing the way Yoast SEO handles attachments](/customization/yoast-seo/customizing-attachment-parsing/) to figure out the scenario's where this might beneficial.

```php
add_filter( 'wpseo_force_creating_and_using_attachment_indexables', '__return_true' );
```
