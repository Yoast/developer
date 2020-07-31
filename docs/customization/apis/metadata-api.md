---
id: metadata-api
title: Yoast SEO - Metadata API
sidebar_label: Metadata API
description: Add, alter or remove metadata for a post or URL.
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/apis/metadata-api.md
---

For simple websites, or when SEO is not a serious consideration, it's common for plugins and themes to simply output or echo meta tags into the `<head>` of a document.

However, more advanced SEO often requires meta tags to have *context*, an awareness of the *other* meta tags on a page, or complicated internal logic. For example, the value of a [canonical URL tag](/features/seo-tags/canonical-urls/overview) might be influenced by the presence or value of a [meta robots tag](/features/seo-tags/meta-robots/overview). For sites running complex or multiple plugins and themes, it's also important to consider standardization and security. Managing these kinds of challenges becomes increasingly cumbersome without a framework.

That's why we provide a formal way of managing the construction and output of meta tags in the `<head>` of each page. We use a `presenter` (an extension of the `Abstract_Indexable_Presenter` class) for each tag, which you can easily modify or extend.

## Available presenters
By default, Yoast SEO ships with the following presenters that output meta tags.

### Generic presenters
| Presenter | Tag format | Filter |
|---|-----|----|
| `Title_Presenter` | `<title>%s</title>` | `wpseo_title` |
| `Meta_Description_Presenter` | `<meta name="description" content="%s" />` | `wpseo_metadesc` |
| `Canonical_Presenter` | `<link rel="canonical" href="%s" />` | `wpseo_canonical` |
| `Robots_Presenter` | `<meta name="robots" content="%s" />` | `wpseo_robots` |

### Webmaster presenters
| Presenter | Tag format | Filter |
|---|-----|----|
| `Baidu_Presenter` | `<meta name="baidu-site-verification" content="%s" />` | n/a |
| `Bing_Presenter` | `<meta name="msvalidate.01" content="%s" />` | n/a |
| `Google_Presenter` | `<meta name="google-site-verification" content="%s" />` | n/a |
| `Pinterest_Presenter` | `<meta name="p:domain_verify" content="%s" />` | n/a |
| `Yandex_Presenter` | `<meta name="yandex-verification" content="%s" />` | n/a |

### Twitter presenters
| Presenter | Tag format | Filter |
|---|-----|----|
| `Card_Presenter` | `<meta name="twitter:card" content="%s" />` | `wpseo_twitter_card_type` |
| `Creator_Presenter` | `<meta name="twitter:creator" content="%s" />` | n/a |
| `Description_Presenter` | `<meta name="twitter:description" content="%s" />` | `wpseo_twitter_description` |
| `Image_Presenter` | `<meta name="twitter:image" content="%s" />` | `wpseo_twitter_image` |
| `Site_Presenter` | `<meta name="twitter:site" content="%s" />` | `wpseo_twitter_site` |
| `Title_Presenter` | `<meta name="twitter:title" content="%s" />` | `wpseo_twitter_title` |

### OpenGraph presenters
| Presenter | Tag format | Filter |
|---|-----|----|
| `Article_Author_Presenter` | `<meta property="article:author" content="%s" />` | `wpseo_opengraph_author_facebook` |
| `Article_Modified_Time_Presenter` | `<meta property="article:modified_time" content="%s" />` | n/a |
| `Article_Published_Time_Presenter` | `<meta property="article:published_time" content="%s" />` | n/a |
| `Article_Publisher_Presenter` | `<meta property="article:publisher" content="%s" />` | `wpseo_og_article_publisher` |
| `Description_Presenter` | `<meta property="og:description" content="%s" />` | `wpseo_opengraph_desc` |
| `FB_App_ID_Presenter` | `<meta property="fb:app_id" content="%s" />` | n/a |
| `Locale_Presenter` | `<meta property="og:locale" content="%s" />` | `wpseo_og_locale` |
| `Site_Name_Presenter` | `<meta property="og:site_name" content="%s" />` | `wpseo_opengraph_site_name` |
| `Title_Presenter` | `<meta property="og:title" content="%s" />` | `wpseo_opengraph_title` |
| `Type_Presenter` | `<meta property="og:type" content="%s" />` | `wpseo_opengraph_type` |
| `Url_Presenter` | `<meta property="og:url" content="%s" />` | `wpseo_opengraph_url` |
| `Image_Presenter` | `<meta property="og:image" content="%s" />` | `wpseo_opengraph_image` |
| `Image_Presenter` (cntd) | `<meta property="og:image:width" content="%s" />` | n/a |
| `Image_Presenter` (cntd) | `<meta property="og:image:height" content="%s" />` | n/a |

### Deprecated Presenters
| Presenter | Tag format | Filter | Deprecated from |
|---|-----|---|--|
| `Googlebot_Presenter` | `<meta name="googlebot" content="%s" />` | `wpseo_googlebot` | Planned |
| `Bingbot_Presenter` | `<meta name="bingbot" content="%s" />` | `wpseo_bingbot` | Planned |

## Editing existing meta tags
Sometimes you might run into a situation where you want to edit the output of one of the meta tags which are output by Yoast SEO.
To achieve this, Metadata Presenters you should use the relevant filter for the presenter in question.

### Notes on using presenters and filters
- All these filters expect a _string_ to be returned.
- Some presenters don't have an associated filter; typically where it makes more sense to programmatically alter the values of the post/page in question (such as with `Article_Published_Time_Presenter`). 

### Examples

Below you will find a variety of examples that demonstrate some filters we provide.

#### Manipulate the meta robots tag output

```php
/**
 * Changes the max-video-preview to 100.
 *
 * @param string $output       The string representation of the original output string.
 * @param object $presentation The presentation object containing the necessary data.
 *
 * @return string The Googlebot meta tag.
 */
function change_robots_video_preview_settings( $output, $presentation ) {
    $robots = $presentation->robots;

    $values = \array_map( function( $item ) {
        if ( strpos( $item, 'max-video-preview' ) !== false ) {
            $item = 'max-video-preview:100';
        }

        return $item;
    }, $robots );

    return \implode( ', ', $values );
}

add_filter( 'wpseo_robots', 'change_robots_video_preview_settings', 10, 2 );
```

#### Appending a string to a category's title

```php
/**
 * Changes title for a specific category.
 *
 * @param string $title        The current title.
 * @param object $presentation The presentation object containing the necessary data.
 *
 * @return string The altered title tag.
 */
function change_category_title( $title, $presentation ) {
	$categories = \get_the_category( $presentation->model->object_id );

	foreach ( $categories as $category ) {
		if ( $category->slug === 'books' ) {
			return sprintf( '%s - %s', $title, $category->name );
		}

		return $title;
	}
}

add_filter( 'wpseo_title', 'change_category_title', 10, 2 );
```


## Adding meta tags
Adding your own meta tag(s) is as simple as creating your own class which extends `Abstract_Indexable_Presenter`. To get started, you'll need to understand the following:

* Each implementation of `Abstract_Indexable_Presenter` must implement the two functions: `get` and `present`.
  * The `get` function should return the raw value of your meta (usually whatever is in the `content` property of the meta tag).
  * The `present` function should return the full meta tag.

* Every `Abstract_Indexable_Presenter` class has 3 public properties, `helpers`, `replace_vars` and the `presentation`. You can use these to gather all data you need:
  * The `helpers` property currently includes all our helper classes which you can use to, for example, determine whether or not something is an article post type in regards to schema, using `$this->helpers->schema->article->is_article_post_type( $post_type )`.
  * The `replace_vars` property ensures you can use the `$this->replace_vars( $string )` function to make use of our replacement variables in your own string if so desired.
  * The `presentation` contains all data that Yoast SEO puts out. Your IDE should make it easy for you to find the values you need.

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

## Registering your presenter
Regardless of which of the above methods you choose, you can then register your presenter through a filter:

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

## Removing meta tags
Removing meta tags can be done by using the `wpseo_frontend_presenters` filter. In the following example, we'll remove the canonical URL presenter from the list.

```php
/**
 * Removes the canonical URL from the presenters.
 *
 * @param array $presenters The registered presenters.
 *
 * @return array The remaining presenters.
 */
function remove_canonical_presenter( $presenters ) {
    return array_map( function( $presenter ) {
        if ( ! $presenter instanceof Canonical_Presenter ) {
            return $presenter;
        }
    }, $presenters );
}

add_action( 'wpseo_frontend_presenters', 'remove_canonical_presenter' );
```
