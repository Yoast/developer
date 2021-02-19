---
id: api
title: Schema - API documentation
sidebar_label: Schema API
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/api.md
description: Instructions on how to modify our schema output programmatically.
---
import Alert from '@site/src/components/Alert';

<Alert>

The release of [Yoast SEO 14.0](https://developer.yoast.com/upcoming-release-yoast-seo-14-0-indexables/) in April 2020 brings significant changes to how our Schema API and integration mechanics work. This document reflects our API *after* that release.
</Alert>

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
```

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

```php
add_filter( 'wpseo_schema_article', 'change_article_to_social_posting' );

/**
 * Changes @type of Article Schema data.
 *
 * @param array $data Schema.org Article data array.
 *
 * @return array Schema.org Article data array.
 */
function change_article_to_social_posting( $data ) {
    $data['@type'] = 'SocialMediaPosting';

    return $data;
}
```

In most cases, you're probably going to want to include some conditional logic to determine where and when you change or
set your own values. In those cases, you can use standard WordPress filtering and functions, like so:

```php
add_filter( 'wpseo_schema_webpage', 'example_change_webpage' );

/**
 * Changes @type of Webpage Schema data.
 *
 * @param array $data Schema.org Webpage data array.
 *
 * @return array Schema.org Webpage data array.
 */
function example_change_webpage( $data ) {
    if ( ! is_page( 'about' ) ) {
        return $data;
    }

    $data['@type'] = 'AboutPage';

    return $data;
}
```

## To add images to your Schema
If you want to add an image to an object programmatically, you can do it as follows. Note that we use the `YoastSEO`
surface to get both the `canonical` from the `meta` surface as the `helpers` surface to access the `schema->image`
functionality.

```php
add_filter( 'wpseo_schema_article', 'example_change_article' );

/**
 * Adds images to Article Schema data.
 *
 * @param array $data Schema.org Article data array.
 *
 * @return array Schema.org Article data array.
 */
function example_change_article( $data ) {
    // This is the attachment ID for our image.
    $attachment_id = 12345;

    // We're going to create a graph piece for our image. Every graph piece always needs a Schema ID, so it can
    // be referenced by other graph pieces, best practice is to base that on the canonical adding an ID that's
    // always going to be unique.
    $schema_id     = YoastSEO()->meta->for_current_page()->canonical . '#/schema/image/' . $attachment_id;                 
    $data['image'] = new WPSEO_Schema_Image( $schema_id );

    return $data;
}
```

Instead of `YoastSEO()->helpers->schema->image->generate_from_attachment_id()` you can also use
`YoastSEO()->helpers->schema->image->generate_from_url()` which takes, as you've guessed, a URL as input.

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

## More specific filters

### Enable / disabling graph pieces by filter
Sometimes you might want to enable or disable a graph piece based on other variables then the graph piece itself can determine. For instance, you might always want to show a Person on your site. You can do this by hooking into the `wpseo_schema_needs_<class-name>` filter. In this particular case, the code would look like this:

```php
add_filter( 'wpseo_schema_needs_person', '__return_true' );
add_filter( 'wpseo_schema_person_user_id', function() {
    return 1; // Make sure 1 is a valid User ID.
} );
```

It really is as simple as returning true on that to always show it, but you can of course also hook a function there with more precise logic. The second filter is needed to provide a user ID that should be used for the Person to show, as otherwise it won't work as the code doesn't know which user to show.

### Social profiles
If you want to change which profiles to show on an author page, you can hook into our `wpseo_schema_person_social_profiles` filter. We do this on yoast.com to add people's GitHub and WordPress profile as well as their personal sites to their sameAs output:

```php
add_filter( 'wpseo_schema_person_social_profiles', 'yoast_add_social_profiles' );

/**
 * Adds social profiles to our sameAs array.
 *
 * @param array $profiles Social profiles.
 *
 * @return array Social profiles.
 */
function yoast_add_social_profiles( $profiles ) {
    array_push( $profiles, 'github', 'personal', 'wordpress' );

    return $profiles;
}
```

### Other filters
We also have some more specific filters for convenience:
* `wpseo_schema_webpage_type` - changes the page type, so could be used to make the above example even simpler.
* `disable_wpseo_json_ld_search` - disables the search potentialAction that we add on every page if you simply return true on it.
* `wpseo_json_ld_search_url` - allows you to change the search URL for your site.
* `wpseo_schema_article_post_types` - allows changing for which post types we output the Article graph piece.
* `wpseo_schema_person_user_id` - allows changing the ID of the user we use to represent your site, should your site represent a person.
