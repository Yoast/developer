---
id: indexables-cli
title: Yoast SEO - Indexables CLI command
sidebar_label: Indexables CLI command
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/yoast-seo/indexables-cli.md
---
import Alert from '../../../../developer-site/src/components/Alert';

With the introduction of Yoast SEO 14.0, we've introduced new database tables in which we combine all the metadata for indexable objects on a site. 
However, these database tables also need to be filled with data before they can be properly used. To do this efficiently on large sites, we've introduced a WP CLI command.
This page describes the command and all its options.

<Alert>

If you don't know what WP CLI is, you're missing out! It's a command line interface for WordPress that makes loads of tasks easier. [Read all about it on wp-cli.org](https://wp-cli.org/). 
</Alert>

If you plan on using our [REST API](../apis/rest-api.md) or [our surfaces](../apis/surfaces-api.md), running the CLI command on your website beforehand is very important.

## Syntax

The basic command to run the indexation process, is as follows:

```shell script
wp yoast index
```

```shell script
Indexing posts  100% [==============================] 0:00 / 0:00
Indexing terms  100% [==============================] 0:00 / 0:00
Indexing post type archives  100% [=================] 0:00 / 0:00
Indexing general objects  100% [====================] 0:00 / 0:00
```

### Some notes

* If one of these doesn't show that is because all of the items in there were already indexed. 
* Authors are indexed as part of the posts indexation process. 
* If you want to test this index command multiple times, please use the [Yoast Test Helper](https://wordpress.org/plugins/yoast-test-helper/). If you hit the "Reset Indexables tables & migrations" button in that plugin, 
it'll delete the Indexables tables. After that you can run the process again.

## Options

There are also some additional options available when running the index command, which are all optional:

* `--network`: Performs the indexation on all sites within the network.
* `--reindex`: Removes all existing indexables and then reindexes them.

## Troubleshooting

### Index is not a registered subcommand of 'yoast'

This means you're not on the correct version of Yoast SEO. Please note that you need to be on Yoast SEO 14.0 or higher for the Yoast SEO WP CLI command index to work.
