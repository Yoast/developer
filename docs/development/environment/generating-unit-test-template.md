---
id: generating-unit-test-template
title: Development - Generating a unit test template for WordPress SEO
sidebar_label: Generating a unit test template
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/development/environment/generating-unit-test-template.md
---
Every class in the `src` folder should have an accompanying unit test in the `tests/unit` folder. Since setting up a new unit test file requires some boilerplate code, we created a handy tool that creates a unit test template for you.

## Using the unit test template generator
You can create a unit test template by calling the following Composer script in the root folder of the plugin repository:
```shell
composer generate-unit-test 'Fully\Qualified\Class\Name'
```
This command takes one required argument: the fully qualified class name of the class you want to generate the unit test template for. Please note that this fully qualified class name should be between quotation marks, to make sure that the command line correctly handles the backslashes.

## Results of calling the generator
Calling the generator will result in a new unit test file in the `tests/unit` directory. The file contains a basic unit test. Its setup method creates an instance of the class that is tested and its mocked dependencies. It also sets both on the unit test class, to make them easily available for the to-be-implemented test cases.

## Common exceptions and solutions

### [ErrorException] file_put_contents(...php): failed to open stream: No such file or directory
The generator unfortunately does not handle making directories in the unit test folder yet. If you added a class in a new directory in the `src` folder, make sure that a directory with the same name is created in the unit test folder as well.

### [RuntimeException] A unit test already exists at path "tests/unit/..."
This means that a unit test already exists for the class at the specified path. You can add your new test cases to the file at path given in the error message.

### [ReflectionException] Class YoastWPSEO... does not exist
Note the absence of backslashes in the class name in the error message.

This most likely means that the fully qualified class name was not between quotation marks. Put the class name between quotation marks to make sure that the command line can correctly handle the backslashes in the 

### [ReflectionException] Class Yoast\WP\SEO\... does not exist
This means that the given class for which a unit test should be generated cannot be found. Make sure that you provided a fully qualified class name, so the class name prepended with its namespace. Also make sure that you have created your class in the `src` folder.

