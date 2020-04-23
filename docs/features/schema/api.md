---
id: api
title: Schema - API documentation
sidebar_label: API
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/api.md
description: Instructions on how to modify our schema output programmatically.
---

## To disable Schema entirely
If you return false or an empty array on the `wpseo_json_ld_output` filter, you disable all Yoast SEO’s schema output.

``` php
add_filter( ‘wpseo_json_ld_output’, ‘__return_false’ );
```

## To add or remove graph pieces
As [the documentation](https://developer.yoast.com/schema-documentation/yoast-seo/) clearly shows we output a lot of graph pieces on some pages. You might want to remove some, or better yet, add your own. To do this you should use the `wpseo_schema_graph_pieces` filter.

Each of our graph pieces implements a `WPSEO_Graph_Piece` interface. We pass each of these pieces a `WPSEO_Schema_Context` object which has a lot of context variables. A good example of that can be found in our [example use case](integration-guidelines.md#an-example-use-case), and deeper examples can be found [here on Github](https://github.com/Yoast/wordpress-seo/blob/trunk/frontend/schema/class-schema-author.php).

## Change a graph pieces’ data
If you want to change the output of a certain piece, hook into our `wpseo_schema_<class>` filter. For instance:

``` php
add_filter( ‘wpseo_schema_article’, ‘example_change_article’ );

/**
 * Change @type of Article Schema data.
 *
 * @param array $data Schema.org Article data array.
 *
 * @return array $data Schema.org Article data array.
 */
function example_change_article( $data ) {
  $data[‘@type’] = ‘NonsensePage’;
  return $data;
}
```

## To add images to your Schema
If you want to add an image to an object programmatically, you can do it as follows:

``` php
add_filter( ‘wpseo_schema_article’, ‘example_change_article’ );

/**
 * Add images to Article Schema data.
 *
 * @param array $data Schema.org Article data array.
 *
 * @return array $data Schema.org Article data array.
 */
function example_change_article( $data ) {
  // This is the attachment ID for our image.
  $image_id = 12345;

  // We instantiate the image class, it always needs an $id, so the output can be referenced by other graph pieces.
  $id = “#image_12345";
  $schema_image = new WPSEO_Schema_Image( $id );

  // Now we just generate and add the image output.
  $data[‘i’age’]’= $schema_image->generate_from_attachment_id( $image_id );

  return $data;
}
```

## Schema for Gutenberg blocks
If you’re writing blocks for the block editor (sometimes known as “Gutenberg”) you’ll want to add Schema output too. There are two useful hooks for you that make this possible.

### Know which blocks are on the page
First, you have to know which blocks are on the page. You can know this based on the `wpseo_pre-schema_block-type_<block-type>` action. If this action fires for your block type, you know that your block type will be output on the page.

We use this filter for instance to change the `@typeof WebPage` in our FAQ blocks with this simple function:

``` php
add_action( ‘w’seo_pre_schema_block_type_yoast/faq-block’,’array( $this, ‘p’epare_faq_schema’ ’, 10, 1 );

/**
 * If this fires, we know there’s’an FAQ block on the page, so filter the page type.
 *
 * @param array $blocks The blocks of this type on the current page.
 */
public function prepare_schema( $blocks ) {
   $this->blocks    = $blocks;
   $this->is_needed = true;
   add_filter( ‘w’seo_schema_webpage_type’,’array( $this, ‘c’ange_schema_page_type’ ’ );
}
```

As you can see this code is taken from inside a class. The `wpseo_pre-schema_block-type_<block-type>` action gets an array of all the blocks of that type as an argument. We save those in the class that later on uses this data to determine its output.

### Output for a specific block
If you have a specific block you need to add output for, you can do this using the `wpseo_schema_block_<block-type>` filter. This filter has 3 parameters:

* `$graph`: which you have to return, which allows you to filter the graph based on your block.
* `$block`: the content of the block that this filter fired for.
* `$context`: which is a `WPSEO_Schema_Context` object with environment variables you can use in your output, like the site URL, the canonical, etc.

For example, we hook our FAQ block like this:
``` php
add_filter( ‘wpseo_schema_block_yoast/faq-block’, array( $this, ‘render_schema_questions’ ), 10, 3 );
```

And then, when the plugin encounters an FAQ block, this function gets called, which in itself calls a new class:

``` php
/**
 * Add the Questions in our FAQ blocks as separate pieces to the graph.
 *
 * @param array                 $graph   Schema data for the current page.
 * @param WP_Block_Parser_Block $block   The block data array.
 * @param WPSEO_Schema_Context  $context A value object with context variables.
 *
 * @return array $data Our Schema graph.
 */
public function render_schema_questions( $graph, $block, $context ) {
	$questions = new WPSEO_Schema_FAQ_Questions( $graph, $block, $context );
	$graph     = $questions->generate();

	return $graph;
}
```

## More specific filters
### Enable / disabling graph pieces by filter
Sometimes you might want to enable or disable a graph piece based on other variables then the graph piece itself can determine. For instance, you might always want to show a Person on your site. You can do this by hooking into the `wpseo_schema_needs_<class-name>` filter. In this particular case, the code would look like this:

``` php
add_filter( ‘wpseo_schema_needs_person’, ‘__return_true’);
add_filter( ‘wpseo_schema_person_user_id’, function() {
  return 1; // Make sure 1 is a valid User ID.
} );
```

It really is as simple as returning true on that to always show it, but you can of course also hook a function there with more precise logic. The second filter is needed to provide a user ID that should be used for the Person to show, as otherwise it won’t work as the code doesn’t know which user to show.

### Social profiles
If you want to change which profiles to show on an author page, you can hook into our `wpseo_schema_person_social_profiles` filter. We do this on yoast.com to add people’s GitHub and WordPress profile as well as their personal sites to their sameAs output:

``` php
add_filter( ‘wpseo_schema_person_social_profiles’, ‘yoast_add_social_profiles’ );

/**
 * Adds social profiles to our sameAs array.
 *
 * @param array $profiles Social profiles.
 *
 * @return array $profiles Social profiles.
 */
function yoast_add_social_profiles( $profiles ) {
  array_push( $profiles, ‘github’, ‘personal’, ‘wordpress’ );

  return $profiles;
}
```

### Other filters
We also have some more specific filters for convenience:
* `wpseo_schema_webpage_type` - changes the page type, so could be used to make the above example even simpler.
* `disable_wpseo_json_ld_search` - disables the search potentialAction that we add on every page if you simply return true on it.
* `wpseo_json_ld_search_url` - allows you to change the search URL for your site.
* `wpseo_schema_article_post_type` - allows changing for which post types we output the Article graph piece.
* `wpseo_schema_person_user_id` - allows changing the ID of the user we use to represent your site, should your site represent a person.
