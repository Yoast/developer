---
id: extensions-and-addons
title: Extensions and addons
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/meta-tags/extensions-and-addons.md
---
This documentation provides technical information about which additional meta tags our extensions and addons generate and output.

## Yoast WooCommerce SEO plugin

The following tags describe the page for search engines and general consumers:

| Tag | Description |
|---|----|
| product:price:amount | The price (omitting a currency symbol, and using `.` as a delimiter). |
| product:price:currency | The currency code. |
| og:availability | The stock availability status. |
| product:retailer_item_id | The product's retailer ID. |
| product:condition | The product's condition. |
| og:type | `product` on product pages. |
