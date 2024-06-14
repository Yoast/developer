---
id: breadcrumbs
title: "Blocks - Breadcrumbs"
sidebar_label: Breadcrumbs
description: This documentation provides information about breadcrumbs block.
---

This documentation provides information about the breadcrumb block
that [Yoast SEO](https://yoast.com/wordpress/plugins/seo/) provides.

## Filters

### Changing the output {#breadcrumb_output}

The `wpseo_breadcrumb_output` filter takes the output of the breadcrumb. Make sure not to empty the output, just replace
or add data. An example:

```php
add_filter( 'wpseo_breadcrumb_output', [ $this, 'override_home_icon' ] );

/**
 * Replace the home text with an icon.
 *
 * @param  string $original_breadcrumbs The whole breadcrumbs html.
 * @return string
 */
public function override_home_icon( string $original_breadcrumbs ): string {
    $new_home = \str_replace( '>Home<', ' aria-label="Home"><i class="fa fa-homeicon" aria-hidden="true"></i><', $original_breadcrumbs );
    return $new_home;
}
```

### Changing a single link {#breadcrumb_single_link}

The `wpseo_breadcrumb_single_link` allows changing of each link being put out by the Yoast SEO breadcrumbs class. It
takes in the generated link and the source breadcrumb information. An example:

```php
add_filter( 'wpseo_breadcrumb_single_link', [ $this, 'override_home_text' ] );

/**
 * Remove current page from breadcrumbs.
 *  @param string $link The output string.
 *  @param array  $breadcrumb        The breadcrumb link array.
 */
function remove_current_page( $link) {
	if(strpos( $link_output, 'breadcrumb_last' ) !== false ) {
		$link_output = '';
	}
  return $link_output;
}
```

### Changing the HTML ID {#breadcrumb_output_id}

The `wpseo_breadcrumb_output_id` allows changing the HTML ID on the Yoast SEO breadcrumbs wrapper element. It only called when there it no an ID already present. An example:

```php
add_filter( 'wpseo_breadcrumb_output_id', [ $this, 'add_breadcrumb_id' ] );

/**
 * Allow changing the HTML ID on the Yoast SEO breadcrumbs wrapper element.
 *
 * @param string $id ID to add to the wrapper element.
 */
function add_breadcrumb_id( $id ) {
  return 'my-id';
}
```

### Changing the HTML class {#breadcrumb_output_class}

The `wpseo_breadcrumb_output_class` allows changing the HTML class on the Yoast SEO breadcrumbs wrapper element. It only called when there it no a class already present. An example:

```php
add_filter( 'wpseo_breadcrumb_output_class', [ $this, 'add_breadcrumb_class' ] );

/**
 * Allow changing the HTML class on the Yoast SEO breadcrumbs wrapper element.
 *
 * @param string $class class to add to the wrapper element.
 */
function add_breadcrumb_class( $class ) {
  return 'my-class my-other-class';
}
```

### Changing the output wrapper element {#breadcrumb_output_wrapper}

The `wpseo_breadcrumb_output_wrapper` allows changing the Yoast SEO breadcrumbs wrapper element. It is called with a default `span` value. The output should be an valid html element. An example:

```php
add_filter( 'wpseo_breadcrumb_output_wrapper', [ $this, 'replace_breadcrumb_wrapper' ] );

/**
 * Replace the wrapper around the breadcrumbs
 *
 * @param  string $output What it normally outputs.
 * @return string
 */
public function replace_breadcrumb_wrapper( string $output ): string {
    $output = 'ol';

    return $output;
}
```
### Changing the link wrapper {#breadcrumb_link_wrapper}

The `wpseo_breadcrumb_single_link_wrapper` allows changing the Yoast SEO link wrapper element. It is called with a default `span` value. The output should be an valid html element. An example:

```php
add_filter( 'wpseo_breadcrumb_single_link_wrapper', [ $this, 'replace_link_wrapper' ] );

/**
 * Replace the wrappers around the links.
 *
 * @param  string $output What it normally outputs.
 * @return string
 */
public function replace_link_wrapper( string $output ): string {
    $output = 'li';
    
    return $output;
}
```

### Changing the separator {#breadcrumb_separator}

The `wpseo_breadcrumb_separator` allows changing the Yoast SEO seperator. It only called with a default value taken from the Yoast SEO settings. The output should be valid html. An example to completely remove the separator:

```php
add_filter( 'wpseo_breadcrumb_separator', [ $this, 'replace_breadcrumb_separator' ] );

/**
 * Replace the breadcrumbs separators.
 *
 * @param  string $output What it normally outputs.
 * @return string
 */
public function replace_breadcrumb_separator( string $output ): string {
    $output = '';

    return $output;
}
```

## Schema output

The Yoast SEO breadcrumb block output a breadcrumb schema piece which is documented
in [Schema piece - Breadcrumb](/features/schema/pieces/breadcrumb/)
