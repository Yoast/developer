---
id: filtering-yoast-blocks
title: Yoast SEO - Filtering Yoast Blocks
sidebar_label: Filtering Yoast Blocks
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/yoast-seo/filtering-yoast-blocks
---
As of [Yoast SEO 8.2](https://yoast.com/yoast-seo-8-2/), we've added our first two structured data blocks: The FAQ block and the How-To block.

## Available blocks

Currently, the following blocks are available within Yoast SEO

| Block | Namespace |
| ----- | --------- |
| FAQ block| `yoast/faq-block` |
| How-To block| `yoast/how-to-block` |

## Example
Although WordPress allows you to filter out Blocks by utilizing the [`allowed_block_types`](https://developer.wordpress.org/reference/hooks/allowed_block_types/) filter, this filter contains some limitations.
A better approach to filter out Blocks, is to use a JavaScript implementation. Please note that this also means you have to register a JavaScript file via the `wp_enqueue_script` method in your own plugin or theme (i.e. `functions.php`), as follows:

```php
// MyCustomPlugin.php
<?php
// Your plugin code here.

wp_enqueue_script( 
	'my-custom-blocks-filter', 
	plugins_url( 'js/MyCustomBlocksFilter.js', __FILE__ ), 
	[], 
	'1.0', 
	true 
);
```

Let's say that you want to only load the FAQ block out of the list of Yoast structured data blocks, and thus want to filter out the How-To block:

```js
// js/MyCustomBlocksFilter.js
const hiddenBlocks = [ 'yoast/how-to-block' ];

wp.blocks.getBlockTypes().forEach( function( block ) {
	if ( block.name && hiddenBlocks.includes( block.name ) ) {
		wp.blocks.unregisterBlockType( block.name );
	}
} );
```

Inverting the logic of the if-statement (i.e. negating `hiddenBlocks.includes( block.name )`), will allow you to limit what blocks you _do_ want to be loaded.
