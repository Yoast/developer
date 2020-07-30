---
id: reindex-indexables
title: Standards - Reindex indexables
sidebar_label: Reindex indexables
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/standards/reindex-indexables.md
---

When you change data for pages on your site, whether that is meta data, content, or URLs, you need to make sure those changes are reflected in the Yoast SEO Indexables tables. To reindex Yoast SEO you can do two things:

## Reindex through WP CLI

With our [WP CLI command](../customization/yoast-seo/indexables-cli.md) you can simply run:

```shell script
wp yoast index --reindex
```

This will remove the content from the tables and reindex all of them, so your data is up to date.

## Reset through Yoast Test Helper

Install the [Yoast Test Helper plugin](https://wordpress.org/plugins/yoast-test-helper/) and hit the button labelled "Reset Indexables tables & migrations". This will reset the plugin, causing it to ask you to index the site.