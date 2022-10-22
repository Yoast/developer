---
id: api
title: "Schema - API documentation"
sidebar_label: Schema API
description: Instructions on how to modify our schema output programmatically.
---

## Making Schema easier to debug
If you're working on Schema, it can be rather hard to read. To change that, you should toggle the `yoast_seo_development_mode` filter to `true`. At that point all the Schema that Yoast SEO outputs will be pretty printed.

```php
add_filter( 'yoast_seo_development_mode', '__return_true' );
```

Note: it is _not_ recommended to leave this on in production.

If you're looking for a more convenient way of debugging Schema, try our [our Yoast Test Helper plugin](https://wordpress.org/plugins/yoast-test-helper/) which allows you to debug more easily.

## To disable Schema entirely
If you return false or an empty array on the `wpseo_json_ld_output` filter, you disable all Yoast SEO's schema output.

```php
add_filter( 'wpseo_json_ld_output', '__return_false' );
```

## To add or remove graph pieces
As [the documentation](plugins/yoast-seo.md) clearly shows we output a lot of graph pieces on some pages. You might want
to remove some, or better yet, add your own. To do this you should use the `wpseo_schema_graph_pieces` filter.

### Removing graph pieces

In some cases you might want to prevent graph pieces from being outputted. The following example demonstrates how you could exclude the Breadcrumb piece from showing up.

```php
// functions.php
add_filter( 'wpseo_schema_graph_pieces', 'remove_breadcrumbs_from_schema', 11, 2 );
add_filter( 'wpseo_schema_webpage', 'remove_breadcrumbs_property_from_webpage', 11, 1 );

/**
 * Removes the breadcrumb graph pieces from the schema collector.
 *
 * @param array  $pieces  The current graph pieces.
 * @param string $context The current context.
 *
 * @return array The remaining graph pieces.
 */
function remove_breadcrumbs_from_schema( $pieces, $context ) {
    return \array_filter( $pieces, function( $piece ) {
        return ! $piece instanceof \Yoast\WP\SEO\Generators\Schema\Breadcrumb;
    } );
}

/**
 * Removes the breadcrumb property from the WebPage piece.
 *
 * @param array $data The WebPage's properties.
 *
 * @return array The modified WebPage properties.
 */
function remove_breadcrumbs_property_from_webpage( $data ) {
    if (array_key_exists('breadcrumb', $data)) {
        unset($data['breadcrumb']);
    }
    return $data;
}
```

#### Enable / disabling graph pieces by filter
Sometimes you might want to enable or disable a graph piece based on other variables then the graph piece itself can determine. For instance, you might always want to show a Person on your site. You can do this by hooking into the `wpseo_schema_needs_<class-name>` filter. In this particular case, the code would look like this:

```php
add_filter( 'wpseo_schema_needs_person', '__return_true' );
add_filter( 'wpseo_schema_person_user_id', function() {
    return 1; // Make sure 1 is a valid User ID.
} );
```

It really is as simple as returning true on that to always show it, but you can of course also hook a function there with more precise logic. The second filter is needed to provide a user ID that should be used for the Person to show, as otherwise it won't work as the code doesn't know which user to show.

### Adding graph pieces
Each of our graph pieces extend a `Abstract_Schema_Piece` class. We pass a `Meta_Tags_Context` object to each of these pieces, which contains a lot of context variables. A good example of that can be found in our [example use case](integration-guidelines.md#an-example-use-case), and deeper examples can be found [here on Github](https://github.com/Yoast/wordpress-seo/blob/trunk/src/generators/schema/author.php).

Taking the above requirements into consideration, adding a new graph piece is rather straightforward:

```php
// functions.php
add_filter( 'wpseo_schema_graph_pieces', 'add_custom_schema_piece', 11, 2 );

/**
 * Adds a custom graph piece to the schema collector.
 *
 * @param array  $pieces  The current graph pieces.
 * @param string $context The current context.
 *
 * @return array The graph pieces.
 */
function add_custom_schema_piece( $pieces, $context ) {
   $this->context = $context;

   $pieces[] = new MyCustomSchemaPiece( $context );

   return $pieces;
}
```

## Referencing other graph pieces
You can always reference the Yoast SEO core graph pieces using their fixed IDs. You can find those by using the
`Schema_IDs` class. So you can find for instance `Schema_IDs::WEBPAGE_HASH`, `Schema_IDs::PERSON_LOGO_HASH` and many
others. For instance if a piece you are adding needs to reference the `Organization` piece, all you have to do is this:

```php
$data['organization'] = [ '@id' => Schema_IDs::ORGANIZATION_HASH ];
```

## Change a graph pieces' data
If you want to change the output of a certain piece, hook into our `wpseo_schema_<class>` filter. For instance:

* [Article](pieces/article.md#api)
* [Breadcrumb](pieces/breadcrumb.md#api)
* [Organization](pieces/organization.md#api)
* [Person](pieces/person.md#api)
* [SearchAction](pieces/searchaction.md#api)
* [Webpage](pieces/webpage.md#api)
* [Website](pieces/website.md#api)

## Perform complex changes to the whole Schema
If you need to perform complex operations to the Schema, such as changing values in different parts of the output, you can hook into our `wpseo_schema_graph` filter. For instance:

```php
add_filter( 'wpseo_schema_graph', 'change_image_urls_to_cdn', 10, 2 );

/**
 * Replaces hostname in all images with the CDN one.  
 *
 * @param array             $data    Schema.org graph.
 * @param Meta_Tags_Context $context Context object.
 *
 * @return array The altered Schema.org graph.
 */
function change_image_urls_to_cdn( $data, $context ) {
    foreach ( $data as $key => $value ) {
        if ( $value['@type'] === 'ImageObject' ) {
            $data[$key]['contentUrl'] = str_replace( 'http://basic.wordpress.test/', 'https://cdn.domain.tld/', $value['contentUrl'] );
        }
    }
    return $data;
}
```

## Schema for Gutenberg blocks
If you're writing blocks for the block editor (sometimes known as "Gutenberg") you'll want to add Schema output too.
There are two useful hooks for you that make this possible.

### Know which blocks are on the page
First, you have to know which blocks are on the page. You can know this based on the `wpseo_pre-schema_block-type_<block-type>` action. If this action fires for your block type, you know that your block type will be output on the page.

We use this filter for instance to change the `@typeof WebPage` in our FAQ blocks with this simple function:

```php
add_action( 'wpseo_pre_schema_block_type_yoast/faq-block', [ $this, 'prepare_faq_schema' ], 10, 1 );

/**
 * If this fires, we know there's an FAQ block on the page, so filter the page type.
 *
 * @param array $blocks The blocks of this type on the current page.
 */
public function prepare_schema( $blocks ) {
    $this->blocks    = $blocks;
    $this->is_needed = true;

    add_filter( 'wpseo_schema_webpage_type', [ $this, 'change_schema_page_type' ] );
}
```

As you can see this code is taken from inside a class. The `wpseo_pre-schema_block_type_<block-type>` action gets an
array of all the blocks of that type as an argument. We save those in the class that later on uses this data to
determine its output.

### Output for a specific block
If you have a specific block you need to add output for, you can do this using the `wpseo_schema_block_<block-type>` filter. This filter has 3 parameters:

* `$graph`: which you have to return, which allows you to filter the graph based on your block.
* `$block`: the content of the block that this filter fired for.
* `$context`: which is a `Meta_Tags_Context` object with environment variables you can use in your output, like the site URL, the canonical, etc.

For example, we could hook a `joost-block` like this:

```php
add_filter( 'wpseo_schema_block_yoast/faq-block', [ $this, 'render_joost_block_schema' ], 10, 3 );
```

And then, when the plugin encounters an FAQ block, this function gets called, which in itself calls a new class:

```php
/**
 * Renders the Joost block schema based on the data in the block.
 *
 * @param array                 $graph   Schema data for the current page.
 * @param WP_Block_Parser_Block $block   The block data array.
 * @param Meta_Tags_Context     $context A value object with context variables.
 *
 * @return array Our Schema graph.
 */
public function render_joost_block_schema( $graph, $block, $context ) {
	$graph['data'] = $block['data'];
	$graph['id']   = YoastSEO()->meta->for_current_page()->canonical . '#/schema/joost/' . $block['id'];

	return $graph;
}
```
