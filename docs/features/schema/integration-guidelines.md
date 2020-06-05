---
id: integration-guidelines
title: Schema - Integration guidelines
sidebar_label: Integration guidelines
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/integration-guidelines.md
description: Integrating with Yoast's structured data framework is easy, and, we encourage all plugin/theme/software authors to consider adopting and extending our approach.
---

## Introduction
Integrating with Yoast's structured data framework is easy, and, we encourage all plugin/theme/software authors to consider adopting and extending our approach.

You should start by reading [our specification](functional-specification.md), and making sure that you understand the core principles. Loosely, these are that:

* We output a block of structured data on every page on a website, which describes the `Organization`, the `WebSite`, the `WebPage` and its *primary entity* using [schema.org](http://schema.org) vocabulary.
* Where we can, we enrich those 'pieces' with information which we know from the user or site settings (such as, the `logo` of the `Organization`, or the `author` of a `WebPage`.
* This is output in a way which constructs a single, cohesive `@graph` object in `JSON-LD`. This can be read by search engines (and other software), and provides marketing/integration/discoverability benefits to the end user / site owner.
* [Our Schema API](api.md) allows developers to alter or extend the output of the graph.
* By adapting and extending our graph, we produce richer representations of web pages, which help consumers like Google, Facebook and others understand (and better expose) the content of those pages.

## An example use-case
Yoast SEO software already creates a large, structured graph, but there are content types which we don't (currently) support. You might want to add support for a specific content type. For example, you might want to add `Person` output to team profile pages, like we have here at Yoast. To do that, you should output a custom `Person` piece and stitch it into the main graph.

Specifically, on a `WebPage` representing a single person, that person could be added as new *piece*, and defined as the `mainEntityOfPage` of the `WebPage` piece. Example code to achieve this might look something like the following.

First, we add the piece to the graph:

```php
add_filter( 'wpseo_schema_graph_pieces', 'yoast_add_graph_pieces', 11, 2 );

/**
 * Adds Schema pieces to our output.
 *
 * @param array                 $pieces  Graph pieces to output.
 * @param \WPSEO_Schema_Context $context Object with context variables.
 *
 * @return array Graph pieces to output.
 */
function yoast_add_graph_pieces( $pieces, $context ) {
	$pieces[] = new Team_Member( $context );

	return $pieces;
}
```

And then `Team_Member` is a "graph piece", so let's create it. We're going to create it by extending the existing `Person` class, as that saves us a lot of code.

```php
/**
 * Class Team_Member
 */
class Team_Member extends \WPSEO_Schema_Person implements \WPSEO_Graph_Piece {
	/**
	 * A value object with context variables.
	 *
	 * @var WPSEO_Schema_Context
	 */
	public $context;

	/**
	 * Team_Member constructor.
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
		if ( is_singular( 'yoast_team_member' ) ) {
			return true;
		}

		return false;
	}

	/**
	 * Adds our Team Member's Person piece of the graph.
	 *
	 * @return array Person Schema markup.
	 */
	public function generate() {
		$data = parent::generate();

		$data['worksFor']         = [ '@id' => $this->context->site_url . \WPSEO_Schema_IDs::ORGANIZATION_HASH ];
		$data['mainEntityOfPage'] = [ '@id' => $this->context->canonical . \WPSEO_Schema_IDs::WEBPAGE_HASH ];

		$job_title = get_post_meta( $this->context->id, 'employees_function_title', true );
		if ( ! empty( $job_title ) ) {
			$data['jobTitle'] = $job_title;
		}

		$suffix = get_post_meta( $this->context->id, 'employees_honoric_suffix', true );
		if ( ! empty( $suffix ) ) {
			$data['honorificSuffix'] = $suffix;
		}

		return $data;
	}
}
```

And that is all, now this code will be output on your team member post type!

Note: this will only work if a user is running the [Yoast SEO plugin](https://yoast.com/wordpress/plugins/seo/) of version 14.0 or higher. Plugin/theme/third-party developers should determine whether the Yoast SEO plugin is running, and manage their output accordingly.

## "My plugin/theme already outputs schema markup"
Unless you're already adding individual pieces to a `@graph` (and connecting those pieces via `@id`  referencing), you may need to make some changes in order to integrate effectively. If you already use an ID-based approach, you should be able to 'stitch' your pieces into our graph by using [our Schema API](api.md) and by following [our specification](functional-specification.md).

If you use a different approach (e.g., you output a structured `JSON-LD` tree, or use microdata), there's a risk that the various pieces might have conflicting information, and that the page isn't accurately represented.

In this case, we encourage you to adapt your code to follow our specification. The first step is to identify each individual 'piece' of schema markup which you produce, and to output them as top-level members in a `@graph` (and connect them via unique `@id`  parameters, based on our [our specification](functional-specification.md) ).

Then, if the user is running [Yoast SEO](https://yoast.com/wordpress/plugins/seo/), you can filter and/or extend our output and connect your pieces to our graph via [our Schema API](api.md). When correctly integrated, you should be able to disable your plugin/theme output (as our own logic will manage the construction and output of the completed graph).

If you detect that your user *isn't* running [Yoast SEO](https://yoast.com/wordpress/plugins/seo/) and you want to maximize interoperability with *other* plugins, you can construct your own graph following [our specification](functional-specification.md).
