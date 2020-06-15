---
id: metadata-api
title: Yoast SEO - Metadata API
sidebar_label: Metadata API
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/apis/metadata-api.md
---

For simple websites, or when SEO is not a serious consideration, it's common for plugins and themes to simply output or echo meta tags into the `<head>` of a document.

However, more advanced SEO often requires meta tags to have *context*, and an awareness of the *other* meta tags on a page. For example, the value of a [canonical URL tag](/features/seo-tags/canonical-urls/overview) might be influenced by the presence or value of a [meta robots tag](/features/seo-tags/meta-robots/overview). For sites running complex or multiple plugins and themes, it's also important to consider standardization and security. Managing these kinds of challenges becomes increasingly cumbersome without a framework.

That's why we introduced a formal way of managing the construction and output of meta tags in the `<head>` of each page. We added *presenters* for each tag, which you can easily modify or extend.

Each meta tag which we output on a page is managed via a `presenter`. The `presenter` class is an extension of the `Abstract_Indexable_Presenter` class.

## Creating or adding meta tags
Adding your own meta tag(s) is as simple as creating your own class which extends `Abstract_Indexable_Presenter`. To get started, you'll need to understand the following:

- Each implementation of `Abstract_Indexable_Presenter` must implement the two functions: `get` and `present`.
  - The `get` function should return the raw value of your meta (usually whatever is in the `content` property of the meta tag).
  - The `present` function should return the full meta tag.

- Every `Abstract_Indexable_Presenter` class has 3 public properties, `helpers`, `replace_vars` and the `presentation`. You can use these to gather all data you need:
  - The `presentation` contains all data that Yoast SEO puts out. Your IDE should make it easy for you to find the values you need.
  - The `helpers` property currently includes all our helper classes which you can use to, for example, determine whether or not something is an article post type in regards to schema, using `$this->helpers->schema->article->is_article_post_type( $post_type )`.
  - The `replace_vars` property ensures you can use the `$this->replace_vars( $string )` function to make use of our replacement variables in your own string if so desired.

Combined, this should lead to code that looks something like this:

```php
use Yoast\WP\SEO\Presenters\Abstract_Indexable_Presenter;

/**
 * Adds a custom my_meta_tag tag.
 */
class My_Custom_Presenter extends Abstract_Indexable_Presenter {
	/**
	 * This output the full meta tag you want to add.
	 */
	public function present() {
		return '<meta name="my_meta_tag" content="' . esc_attr( $this->get() ) . '" />';
	}

	/**
	 * Returns the value of our new tag.
	 *
	 * @return string The value of our meta tag.
	 */
	public function get() {
		return ( $this->presentation->open_graph_locale === 'nl_NL' ) ? 'Dutch' : 'Not dutch';
	}
}
```

For simple tags, you can use `Abstract_Indexable_Tag_Presenter`, which simply defines the string format and variable placeholder for the tag. A simple example would look like this:

```php
use Yoast\WP\SEO\Presenters\Abstract_Indexable_Tag_Presenter;

/**
 * Adds a custom my_meta_tag tag.
 */
class My_Custom_Presenter extends Abstract_Indexable_Tag_Presenter {

	/**
	 * The tag format including placeholders.
	 *
	 * @var string
	 */
	protected $tag_format = '<meta name="my_meta_tag" content="%s" />';

	/**
	 * Returns the value of our new tag.
	 *
	 * @return string The value of our meta tag.
	 */
	public function get() {
		return ( $this->presentation->open_graph_locale === 'nl_NL' ) ? 'Dutch' : 'Not dutch';
	}
}
```

This simpler format requires you to specify your tag format and replace where your value should be with `%s`, as it will be *sprintf'ed* to that position. This assumes that your `get` function returns a value that needs attribute escaping. If it's in fact a URL, you could change the escaping logic by setting the `$escaping` class attribute of your presenter to 'url'.

Because `Abstract_Indexable_Tag_Presenter` is itself inherited from `Abstract_Indexable_Presenter` all the tools you have there are available here too.

Regardless of which method you choose, you could then add your presenter through a filter:

```php
/**
 * Adds our custom presenter to the array of presenters.
 *
 * @param array $presenters The current array of presenters.
 *
 * @return array Presenters with our custom presenter added.
 */
function add_my_custom_presenter( $presenters ) {
	$presenters[] = new My_Custom_Presenter();

	return $presenters;
}

add_filter( 'wpseo_frontend_presenters', 'add_my_custom_presenter' );
```

## Editing existing meta tags
Coming soon.

## Removing meta tags
Coming soon.
