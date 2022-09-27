---
id: adding-custom-data-analysis
title: Adding custom data to the page analysis
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/yoast-seo/adding-custom-data-analysis.md
---

Yoast SEO comes featured with a powerful set of tools to not only help you improve your SEO, but to also help you write better texts by analyzing the content of the post or page that you're working on.

In some cases, plugin developers might want to add some extra data to the analysis, which they consider to be of added importance for their overall Readability and SEO score. Yoast SEO allows for this kind of extending of the analysis.

This is also useful for plugins which add page content in ways which our plugin(s) may not natively detect (such as via custom data structures, functions and shortcodes), which they wish us to include in our analysis.

**Note:** We'll be using ES6 syntax in this example, so please make sure you adapt the code to fit your own syntax if you're not working with ES6 yet or don't use a compiler such as [Babel](https://babeljs.io/) or [Webpack](https://webpack.js.org/).

## The basics

Before you can add your own data to the analysis, it is necessary to ensure Yoast SEO knows of the existence of said data. The way to achieve this, is to write a custom JavaScript plugin. The following steps will guide you through the basics behind creating such a plugin.

### Creating the plugin

The first thing to do, is create a file in your own plugin's `js/` directory (i.e. `js/MyCustomDataPlugin.js`).

In this file, you'll have to ensure that, at a minimum, the following is present:

```js
/* global YoastSEO */

class MyCustomDataPlugin {
    constructor() {
       // Ensure YoastSEO.js is present and can access the necessary features.
       if ( typeof YoastSEO === "undefined" || typeof YoastSEO.analysis === "undefined" || typeof YoastSEO.analysis.worker === "undefined" ) {
            return;
        }

        YoastSEO.app.registerPlugin( "MyCustomDataPlugin", { status: "ready" } );
        
        this.registerModifications();
    }

    /**
	 * Registers the addContent modification.
	 *
	 * @returns {void}
	 */
	registerModifications() {
		const callback = this.addContent.bind( this );

        // Ensure that the additional data is being seen as a modification to the content.
		YoastSEO.app.registerModification( "content", callback, "MyCustomDataPlugin", 10 );
	}

	/**
	 * Adds to the content to be analyzed by the analyzer.
	 *
	 * @param {string} data The current data string.
	 *
	 * @returns {string} The data string parameter with the added content.
	 */
	addContent( data ) {
        data += "Hello, I'm some additional data!";

		return data ;
	}
}

/**
 * Adds eventlistener to load the plugin.
 */
if ( typeof YoastSEO !== "undefined" && typeof YoastSEO.app !== "undefined" ) {
  new MyCustomDataPlugin();
} else {
  jQuery( window ).on(
    "YoastSEO:ready",
    function() {
      new MyCustomDataPlugin();
    }
  );
}
```

The above code adds an additional text of "Hello, I'm some additional data!" to the text analysis, but you're not limited to just sending hard-coded strings to your custom plugin. For example, you could add a custom input field and read its contents.

**Note:** The last part in the above JavaScript is used to properly load the JavaScript class _after_ YoastSEO.js is done initializing. Please make sure you don't forget to add this.

### Registering the plugin with WordPress

The next step to make things work, is to make sure your JavaScript code is properly loaded. To achieve this, we'll have to ensure our plugin is properly registered and loaded by WordPress.
The main importance is that the above JavaScript file is loaded at the right time. Therefor, it's necessary to implement a chain of hooks that'll run once WordPress loads your plugin.

Assuming you have a plugin file present (i.e. `MyCustomPlugin.php`), your file might look a little something like this:

```php
<?php
// ...
class MyCustomPlugin {

    /**
     * MyCustomPlugin constructor.
     */
    public function __construct() {
        // ...
        add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
    }
    
    /** 
     * Enqueues the plugin file.
     */
    public function enqueue_scripts() {
        wp_enqueue_script( 'my-custom-plugin', plugins_url( 'js/MyCustomDataPlugin.js', __FILE__ ), [], '1.', true );
    }

}

/** 
 * Loads the plugin.
 */
function loadMyCustomPlugin() {
    new MyCustomPlugin();
}

if ( ! wp_installing() ) {
	add_action( 'plugins_loaded', 'loadMyCustomPlugin', 20 );
}
```

### Test the code

The last step is to test the code. Make sure your plugin is properly loaded and create a new post.
As a test, you could set your keyword to be the word 'additional' and see that the SEO analysis properly detects it under the 'Keyprashe in introduction' result. 
