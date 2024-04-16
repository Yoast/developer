---
id: integration-guidelines
title: "Schema - Integration guidelines"
sidebar_label: Integration guidelines
description: Integrating with Yoast's structured data framework is easy, and, we encourage all plugin/theme/software authors to consider adopting and extending our approach.
---

## Introduction
Integrating with Yoast's structured data framework is easy, and benefitial to users. We encourage all plugin/theme/software authors to consider adopting and extending our approach.

You should start by reading [our specification](functional-specification.md), and making sure that you understand the core principles. Loosely, these are that:

* We output a block of structured data on every page on a website, which describes the `Organization`, the `WebSite`, the `WebPage` and its *primary entity* using [schema.org](http://schema.org) vocabulary.
* Where we can, we enrich those 'pieces' with information which we know from the user or site settings (such as, the `logo` of the `Organization`, or the `author` of an `Article`.
* This is output in a way which constructs a single, cohesive `@graph` object in `JSON-LD`. This can be read by search engines (and other software), and provides marketing/integration/discoverability benefits to the end user / site owner.
* [Our Schema API](api.md) allows developers to alter or extend the output of the graph.

## An example use-case
Yoast SEO software already creates a large, structured graph, but there are content types which we don't (currently) support. You might want to add support for a specific content type. 

For example, you might provide a plugin which lets sites write _book reviews_. In that case, you might want to describe a `Book` on your `book_review` custom post type. To do that, you should conditionally output a custom `Book` piece, and connect it into the main graph.

Example code to achieve this might look something like the following. 

Note: this will only work if a user is running the [Yoast SEO plugin](https://yoast.com/wordpress/plugins/seo/) of version 14.0 or higher. Plugin/theme/third-party developers should determine whether the Yoast SEO plugin is running, and manage their output accordingly.

### Create the piece.
First we create the `Book` object.

```php
/**
 * Class Book
 */
class Book  {

	/**
	 * A value object with context variables.
	 *
	 * @var WPSEO_Schema_Context
	 */
	public $context;

	/**
	 * Book constructor.
	 *
	 * @param WPSEO_Schema_Context $context Value object with context variables.
	 */
	public function __construct( WPSEO_Schema_Context $context ) {
		$this->context = $context;
	}

	/**
	 * Determines whether or not a piece should be added to the graph.
	 *
	 * @return bool Whether or not a piece should be added.
	 */
	public function is_needed() {

		// We only ever want to output this on 'book review' post types.
		if ( is_singular( 'book_review' ) ) {
			return true;
		}

		return false;
	}

	/**
	 * Adds our Book piece of the graph.
	 *
	 * @return array Book Schema markup.
	 */
	public function generate() {

		$canonical = YoastSEO()->meta->for_current_page()->canonical;
		$post_id = YoastSEO()->meta->for_current_page()->post_id;

		// Set the type.
		$data['@type'] = 'Book';

		// Give it a unique ID, based on the URL and the Post ID.
		$data['@id'] = $canonical . '#/book/' . $post_id;

		// Give it a name.
		$data['name'] = the_title_attribute( array( 'echo' => false ) );

		// Make it the main entity of the webpage we're on.
		$data['mainEntityOfPage'] = [ '@id' => $canonical ];

		// Add the book's author, if we know it.
		$author = get_post_meta( $post_id, 'author', true );
		if ( ! empty( $author ) ) {
			// In reality, we'd probably want to add more information than just the name here.
			$data['author'] = $author;
		}	

		return $data;
	}
}
```

### Add the piece to the graph.
Then, we add the `Book` piece to the graph:

```php
add_filter( 'wpseo_schema_graph_pieces', 'add_book_piece', 11, 2 );

/**
 * Adds Schema pieces to our output.
 *
 * @param array                 $pieces  Graph pieces to output.
 * @param \WPSEO_Schema_Context $context Object with context variables.
 *
 * @return array Graph pieces to output.
 */
function add_book_piece( $pieces, $context ) {
	$pieces[] = new Book( $context );
	return $pieces;
}
```

### Update any other relevant parts of the graph
We know that on our `book_review` posts, the page is _about_ the `Book` discussed on that page. We can reflect that in the graph, by referencing the `Book`'s ID.

```php
add_filter( 'wpseo_schema_webpage', 'make_webpage_about_book' );

/**
 * Alter the webpage node, and make it 'about' our Book
 *
 * @param array $data The graph.
 *
 * @return array The modified graph
 */
public static function make_webpage_about_book( array $data ) : array {

	$canonical = YoastSEO()->meta->for_current_page()->canonical;
	$post_id = YoastSEO()->meta->for_current_page()->post_id;

	$data['about'] = array( '@id' => $canonical . '#/book/' . $post_id );
	return $data;
}
```

## FAQs
### My plugin/theme already outputs schema markup; what do I need to do to integrate?

If your plugin already outputs Schema.org metadata, you should be able to connect it to Yoast SEO's graph with relatively little effort.

If you're not already adding individual nodes to a `@graph` (and giving those `@id`s), you may need to make some changes in order to integrate effectively. If you already use an ID-based approach, you should be able to 'stitch' your pieces into our graph by using [our Schema API](api.md) and by following [our specification](functional-specification.md).

If you use a different approach (e.g., you output a structured `JSON-LD` tree, or use microdata), there's a risk that the various pieces might have conflicting information, and that the page isn't accurately represented.

In this case, we encourage you to adapt your code to follow our approach in the examples above, and disable your plugin/theme output (as our own logic will manage the construction and output of the completed graph).

NB: If you detect that your user *isn't* running [Yoast SEO](https://yoast.com/wordpress/plugins/seo/) and you want to maximize interoperability with *other* plugins, you can construct your own graph following [our specification](functional-specification.md).

### 1. How do I de-dupe the Schema?
If you output Schema that Yoast SEO outputs too, you may need to de-dupe it. Let's say you output `Organization` data. If yours is less extensive than Yoast's output, you could simply replace your `Organization` data with [a reference](https://developer.yoast.com/features/schema/api/#referencing-other-graph-pieces) to Yoast's `Organization` data. If yours is more extensive, we'd suggest [filtering the Yoast SEO output for that particular piece](https://developer.yoast.com/features/schema/api/#change-a-graph-pieces-data) to include your data. 

Alternatively, if there are no contradicting values in the two pieces, you can simply use the same `@id` attribute. Consumers will merge both pieces, and combine the information. 

### 2. How do I connect my Schema to Yoast's?

To connect your Schema output to Yoast SEO's Schema output, you need to determine where in the graph it needs to connect. You have to do this whether you [add a Graph piece](https://developer.yoast.com/features/schema/api/#adding-graph-pieces) through Yoast's API, or you just output your Schema via your own methods. 

In most cases, you will want to content to the `WebPage`. The `WebPage` is unique in our Schema graph, as its `@id` is always the URL of that page. So, if you have for instance a `Recipe`, you can simply add this to your `Recipe` output:

```json
  "isPartOf": { "@id": "<page url>" }
```

By adding the above, (and of course replacing `<page url>` with the actual URL of that page), Schema consumers will know to "stitch" your Schema output into the `@graph` that Yoast SEO creates.

Getting the corect URL to reference can be done easily using the `YoastSEO()` surface:

```php
YoastSEO()->meta->for_current_page()->canonical
```

### 3. How do I know where to connect my pieces?

In the example above, we used `isPartOf`. This is fine if your Schema "piece" is not the most important thing of the page. But if your page is a recipe page, it's not just "part of". It's the main thing. In that case, you shouldn't use `isPartOf` but `mainEntityOfPage`, so:

```json
  "mainEntityOfPage": { "@id": "<page url>" }
```
