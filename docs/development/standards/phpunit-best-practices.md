---
id: phpunit-best-practices
title: Standards - PhpUnit Best Practices
sidebar_label: PhpUnit Best Practices
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/development/standards/phpunit-best-practices.md
---

In addition to writing good code according to certain coding guidelines and principles, it is also important to adhere to certain guidelines while writing tests.

## Understand fundamental coding principles

Before starting off, it's important to have a good understanding of some fundamental coding principles, such as OOP, SOLID and DRY.
 
Please read our [Coding Guidelines and principles](https://developer.yoast.com/development/standards/coding-guidelines-and-principles/) section for more information.

## How we organize PhpUnit tests

Most of the PHP codebases at Yoast are written in an OOP way. These codebases contain a large amount of classes and for each class, a test class is also created. 
These test classes cover the class we want to test, by using test methods. 

### One situation per test method

When writing test methods, a good approach is to only have one assertion per test method. Additionally, adding an `@covers` followed by the classname and the method, tells PhpUnit what method is being tested, which can later be used to calculate the test coverage.

Example:

```php
/**
 * @covers ClassName::MethodName
 */
public function test_method_name() {
    $myClass = new MyClass();
    $this->assertTrue( $myClass->MethodName() ) ; 
}
```

## Use dataproviders to minimize repetitive tests

Sometimes you have multiple test methods for the same class method. This isn't necessarily a problem, but you can combine these in on single test method by using a dataprovider. 

A dataprovider is a method, in your test object, where you can specify different values for multiple situations. 
The provider always returns an array with a subarray containing the test values. These test values are passed as arguments to the test method.

```php
/**
 * @dataProvider myDataProvider
 * @covers ClassName::MethodName
 */
public function test_method_name( $expected, $valueToTest, $message ) {
    $actual = $myClass->MethodName( valueToTest )

    $this->assertEquals( $expected, $actual, $message ) ; 
}

/**
 * Data provider for test method: test_method_name

 * [0]: Expected value
 * [1]: Value given to the method
 * [2]: Message given to the assertion. 
 */
public function myDataProvider( ) {
   return [
       [ true, ‘MyMethod’, ‘Test 1: The string is MyMethod’ ],
       [ false, ‘NotMyMethod’, ‘Test 2: The string is not MyMethod’ ],
   ];
}
```
The `[0]` expected value is something you can add to the data providers. By doing this, you can clarify the structure of the data in the provider. 

The message is optional, but using these can help make assertions in PHPUnit a bit more clear. By providing messages in your dataprovider it will be easier to identify failing tests.  
