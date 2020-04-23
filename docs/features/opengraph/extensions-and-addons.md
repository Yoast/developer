---
id: extensions-and-addons
title: OpenGraph - Extensions and addons
sidebar_label: Extensions & addons
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/meta-tags/extensions-and-addons.md
description: This documentation provides technical information about which additional meta tags our extensions and addons generate and output.
---
This documentation provides technical information about which additional meta tags our extensions and addons generate and output.

## Yoast WooCommerce SEO plugin
The following tags are added to (or altered on) _product pages_ when this plugin is enabled.

| Tag | Description |
|---|----|
| og:type | `product` |
| og:availability | The stock availability status. |
| product:retailer_item_id | The product's retailer ID. |
| product:condition | The product's condition. |
| product:availability | The stock availability status. |

### On simple products only
| Tag | Description |
|---|----|
| product:price:amount | The price (omitting a currency symbol, and using `.` as a delimiter). |
| product:price:currency | The currency code. |

## Yoast Video SEO plugin
The following tags are added to _pages containing an embedded video_ when this plugin is enabled.

| Tag | Description |
|---|----|
| og:video | The URL of the video asset. |
| og:video:width | The width of the embedded video. |
| og:video:height | The height of the embedded video. |
| og:video:duration | The duration of the video in seconds. |
| ya:ovs:adult | Whether the video contains adult content. |
| ya:ovs:upload_date | The date that the video was uploaded. |
| ya:ovs:allow_embed | Whether other sites/users may embed the video. |
