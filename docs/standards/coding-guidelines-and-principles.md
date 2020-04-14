---
id: coding-guidelines-and-principles
title: Coding guidelines and principles
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/standards/coding-guidelines-and-principles.md
---

## WordPress PHP Coding Standards

At Yoast, we follow the [WordPress Coding Standards](http://codex.wordpress.org/WordPress_Coding_Standards). There are however two cases in which we disagree with WPS:

1) We don't enforce Yoda style assignments.

```PHP
// Yoast style

if ( $foo == 'bar' ) {
  echo 'It is Yoast style!';
}

// Yoda style

if ( 'bar' == $foo ) {
  echo 'Yoda style is how this looks';
}
```

2) We put `else` on a new line.

```PHP

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

## WordPress CSS Coding Standards

* Use underscores to separate variable names.

## Descriptive coding

As a developer working in a team, we want to be able to immediately understand what someone else's code is all about. For this we need descriptive class-, function- and variable names. A few guidelines:

* Prevent using abbreviations, unless they are commonly used such as `www`, `http`, `SEO` etc.
* No metaphorical or cryptical names. The only acceptable metaphors are probably `needle` and `haystack`.
* In naming objects and methods, keep in mind objects are entities and methods can be viewed as the messages we send them.
* Prefixing functions with `get` and `set` should be used sparsely. This is because it introduces 'lazy naming' conventions. Try and find a more descriptive name for a function if you notice that you're using said prefixes too much.

## Class, function and variable notation

### WordPress development
When using more than one word to name a class, function or variable, separate the words with an underscore. 

In case of a class, the first character of each word is capitalized. Methods and variables are entirely lowercase.

Filenames are separated with dashes instead of underscores.

```PHP
// Filename: class-sociable-admin.php

class Sociable_Admin {
  private $plugin_enabled;

  public function create_sociable_menu() {
  }
}
```

### JavaScript (non-WordPress)
When creating classes and functions in JavaScript (outside of the WordPress context), we tend to use a different coding standard which consists of applying CamelCase for class-, function, method- and variable names.

## Coding principles

### Don't Repeat Yourself (DRY)

Try to prevent writing identical functionality in different places. If there is a bug in your code, you don't want to be fixing the same bug in more than one place. When unDRY code happens, that probably means there is still an abstraction you are missing. Try and look for these scenarios and attempt to fix them.

### Testing

Whenever writing code, it is important to ensure that it functions in an expected manner. To do this, you should write tests. At Yoast, we use [PHPUnit](https://github.com/sebastianbergmann/phpunit) as our testing framework.

A few guidelines with regards to testing:

* Even though it's common practice to only test the public interface, sometimes a lot of behavior is hidden away in a private interface. In this case, try to test the private interface via something like a test double.
* When fixing bugs, try reproducing the bug in a regression test first. A regression test is a test you write to prevent bugs from occuring again. All you have to do then is make the test pass.
* Don't merge internal contributions without the appropriate tests being present.

#### Test Driven Development (TDD)

TDD is a principle when you write tests before writing the actual implementation code. By working this way, you are forced to think about the problem you're trying to solve beforehand. Because tests should be isolated and small, you're also already thinking about the code you'll be writing to implement the feature. Although we don't strictly enforce this way of working, it is a good way to get into the habit of testing.

### Boyscout principle

Refactoring should happen primarily through the boyscout principle. That means you leave the code better than you found it. When fixing bugs or adding new features, feel free to take some time to improve the functionality that is concerned. Of course, only do this when it is really needed. :wink:

### SOLID

The [SOLID principle](https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design) is actually a collection of other principles that dictate how code should be written. You should attempt to follow these rules (where applicable).

## Other

### Try/Catch "random" functionality

Some functionality has a random success factor. For example: when doing API call you can never be certain if the API is available. We don't want our software to break on this. Wrap this kind of functionality in try/catch blocks.

### Minify .js and .css files
Please make sure you JS and CSS is minified/uglified and the minified versions are loaded in the browser. Most of our repositories have Grunt configured to do it for you. Just run `grunt build` and you'll be fine!

### PHPDocs and commenting
Make sure all your code is documented by using PHPDoc. Also use inline comments when necessary, for example when describing a difficult piece of code.
