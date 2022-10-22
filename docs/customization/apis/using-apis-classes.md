---
id: using-apis-classes
title: "Yoast SEO: Using APIs and classes"
image: https://yoast.com/shared-assets/opengraph/?title=Yoast%20SEO:%20Using%20APIs%20and%20classes
sidebar_label: Using APIs and classes
---

Yoast SEO ships with a variety of APIs and classes that you can utilize in your own code. 
However, there are a few things you need to keep in mind when you plan on using these APIs and classes.

## Class `<class name>` doesn't exist

This usually happens whenever you try to use one of the Yoast SEO classes before it has been made available to PHP / WordPress. This is, in part, due to the loading order within WordPress.
To overcome this, you should load your plugin by hooking into the proper hook. An example of this, is as follows:

```php
class MyCustomPlugin {
 // Your custom plugin code.
}

function loadMyCustomPlugin() {
	new MyCustomPlugin();
}

if ( ! wp_installing() ) {
	add_action( 'plugins_loaded', 'loadMyCustomPlugin' );
}
```

Because the above example hooks into the `plugins_loaded` hook, WordPress has completedly loaded all activated plugins and our classes are then freely available to use in your own code.

## Extending YoastSEO.js' dataset
One of the other APIs we ship, is that of YoastSEO.js. If you're attempting to extend the data that gets passed through this library, make sure you check out the [dedicated page](/customization/yoast-seo/adding-custom-data-analysis.md) we've written for it.
