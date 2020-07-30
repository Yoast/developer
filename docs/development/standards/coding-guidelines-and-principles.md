---
id: coding-guidelines-and-principles
title: Standards - Coding guidelines and principles
sidebar_label: Coding guidelines and principles
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/standards/coding-guidelines-and-principles.md
---

## Using Yoast SEO APIs and classes

Yoast SEO ships with a variety of APIs and classes that you can utilize in your own code. 
However, there are a few things you need to keep in mind when you plan on using these APIs and classes.

### Class `<class name>` doesn't exist

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

### Extending YoastSEO.js' dataset
One of the other APIs we ship, is that of YoastSEO.js. If you're attempting to extend the data that gets passed through this library, make sure you check out the [dedicated page](../customization/yoast-seo/adding-custom-data-analysis.md) we've written for it.

## PHP Coding Standards

The [Yoast PHP coding standards](https://github.com/Yoast/yoastcs) is a PHPCS ruleset which enforces a codestyle for PHP throughout all Yoast PHP code. YoastCS primarily based on the [WordPress Coding Standards](http://codex.wordpress.org/WordPress_Coding_Standards). In some cases we diverge from WPCS. Two examples:

1. We don't enforce Yoda style assignments.

```php
// Yoast style
if ( $foo == 'bar' ) {
  echo 'It is Yoast style!';
}

// Yoda style
if ( 'bar' == $foo ) {
  echo 'Yoda style is how this looks';
}
```

2. We put `else` on a new line.

```php
// Yoast style:
if ( $foo == 'bar' ) {
  echo 'foo bar';
}
else {
  echo 'foo is not bar';
}

// WP Coding Standards:
if ( $foo == 'bar' ) {
  echo 'foo bar';
} else {
  echo 'foo is not bar';
}
```

## JavaScript coding standards

Our [JavaScript coding standards](https://github.com/Yoast/javascript/tree/master/packages/eslint) are recorded in an ESLint ruleset. There are some differences between our JavaScript and PHP rules. For example, we use CamelCase for class-, function, method- and variable names. Nowadays we only write ES6 code which we compile with tools like Webpack and Babel for backwards compatibility.

## Naming guidelines

As a developer working in a team, we want to be able to easily understand what code is all about. For this we need descriptive class-, function- and variable names. A few guidelines:

* Prevent using abbreviations, unless they are commonly used such as `www`, `http`, `SEO` etc.
* No metaphorical or cryptical names. The only acceptable metaphors are probably `needle` and `haystack`.
* In naming objects and methods, keep in mind objects are entities (nouns) and methods are the messages we send them (imperative verbs).

## Coding principles

### Keep it simple stupid (KISS)
When looking at code, it should be easy to understand what is going on. If you get stuck in dogma's about abstraction, design patterns or other coding standards, you find yourself changing code for the sake of the standard. That's a bit stupid, which explains the last S in KISS. Always use your mind and ask yourself, does this change make it easier to understand what is going on here? If you're unsure, you can always ask someone for advice!

### Don't Repeat Yourself (DRY)

Try to prevent writing identical functionality in different places. If there is a bug in your code, you don't want to be fixing the same bug in more than one place. When unDRY code happens, there's a good chance you can extract some of that to reusable functions or objects. Only DRY your code when the duplication actually happens and make sure the functionality is really identical instead of similar. Otherwise will find yourself untangling that code later on and lose precious time you were trying to save in the first place!

### SOLID

The [SOLID principles](https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design) are a collection of principles that dictate how code should be written. These principles exist to help you structure your code in a way that is modular, makes the code easier to reason about and therefore lowers the cost of change. The S in SOLID stands for Single responsibility principle and is probably the most simple to understand. A class should have one and only one reason to change, meaning that a class should have only one job. Many of these principles do not only apply to objects, but can easily be adapted to functions and modules as well. Read more in the linked article.

### Testing

Whenever writing code, it is important to ensure that it functions in an expected manner. To do this, you should write tests. At Yoast, we use [PHPUnit](https://github.com/sebastianbergmann/phpunit) for PHP and [Jest]() for JavaScript.

A few guidelines with regards to testing:

* Even though it's common practice to only test the public interface, sometimes a lot of behavior is hidden away in a private interface. In this case, try to test the private interface via something like a test double.
* When fixing bugs, try reproducing the bug in a regression test first. A regression test is a test you write to prevent bugs from occuring again. All you have to do then is make the test pass.
* For every PR, check if the changes are covered by unit tests.

#### Test Driven Development (TDD)

TDD is a principle when you write tests before writing the actual implementation code. By working this way, you are forced to think about the problem you're trying to solve beforehand. Because tests should be isolated and small, you're also already thinking about the code you'll be writing to implement the feature. Although we don't strictly enforce this way of working, it is a good way to get into the habit of testing.

### Codescout principle

Refactoring should happen primarily through the codescout principle. That means you leave the code better than you found it. When fixing bugs or adding new features, feel free to take some time to improve the functionality that is concerned. Of course, only do this when it is really needed and remember to keep it simple.
