---
id: recipe
title: "Schema piece - Recipe"
image: https://yoast.com/shared-assets/opengraph/?title=Yoast%20SEO%20Schema%20piece:NEWLINERecipe
sidebar_label: Recipe
description: Describes a 'Recipe', which contains a series of instructions, ingredients, and optional fields.
---
import YoastSchemaExample from '../../../../src/components/YoastSchemaExample';

Describes a `Recipe`, which contains a series of instructions, ingredients, and optional fields.

## Triggers
Should be added as a top-level node in the graph, when the content of a page contains a *Recipe block*.

## Required properties
A valid `Recipe` must have the following properties.

* `@type`: `Recipe`.
* `@id`: The site's home URL appended by `#/schema/Recipe/{{ID}}`, where `{{ID}}` is a unique identifier.
* `mainEntityOfPage`: Referencing the `WebPage` by ID.
* `name`: A string describing the recipe.
* `image`: An image representing the completed recipe, referenced by ID.
* `recipeIngredient`: An array of strings representing each ingredient and quantity (e.g., "3 apples").
* `recipeInstructions`: An array of `HowToStep` objects, with the following properties:
  * `@type`: `HowToStep`.
  * `@id`: The unmodified  *canonical URL*  of the page, appended by `#/schema/HowToStep/{{ID}}`, where `{{ID}}` is a unique identifier.
  * `url`: A link to a fragment identifier (an 'ID anchor') of the individual step (e.g., `https://www.example.com/example-page/#recipe-step-5`).
  * `text`: The instruction string ("e.g., "Bake at 200*C for 40 minutes, or until golden-brown, stirring periodically throughout").
  * `name` (optional): A short summary of the step (e.g., "Bake").
  * `image` (optional): An image representing the step, referenced by ID.

## Failure scenarios
If any of the required fields of the `Recipe` are missing or invalid, the node should not be output.

If a node is not output, any entities which would otherwise have declared a relationship with it should remove those references.

## Optional properties
The following should be added whenever available and valid:

* `description`: A string describing the recipe.
* `cookTime`: The cooking time in ISO 8601 format.
* `prepTime`: The time required to prepare the recipe.
* `nutrition`: A `NutritionInformation` node, with a `calories` property which defines a calorie count as a string (e.g., "270 calories").
* `recipeYield`: The number of servings the recipe creates (_not_ the number of individual items, if these are different), as a string (e.g., `"6"`, rather than `6`).
* `tools`: An array of strings representing the tools required in the recipe.
* `keywords`: An array of keywords describing the recipe.
* `recipeCuisine`: A string describing the cuisine type (e.g., "American" or "Spanish").
* `recipeCategory`: The category of the recipe, from the following options: 'Appetizer', 'Breakfast', 'Brunch', 'Dessert', 'Dinner', 'Drink', 'Lunch', 'Main course', 'Sauce', 'Side dish', 'Snack', 'Starter'.
* `suitableForDiet`: a `RestrictedDiet` node, with a value (or array of values) from the following options: 'DiabeticDiet', 'GlutenFreeDiet', 'HalalDiet', 'HinduDiet', 'KosherDiet', 'LowCalorieDiet', 'LowFatDiet', 'LowLactoseDiet', 'LowSaltDiet', 'VeganDiet', 'VegetarianDiet'.
* `video`: A reference to a video representing the recipe instructions, by ID.
* `inLanguage`: The language code for the guide; e.g., `en-GB`.
* `datePublished`: The date when the recipe was added, in ISO 8601 format.

## Conditional properties

### When only one of `cookTime` or `prepTime` is specified
* Alter the property in question to `totalTime`.

### When both of `cookTime` and `prepTime` are specified.
* `totalTime`: The sum of `cookTime` and `prepTime` in ISO 8601 duration format.

### When the page contains a valid `Article`
* Alter the `mainEntityOfPage` property to reference the `Article` by ID, (instead of the `WebPage`).

#### And when the `Article` has an `Author`
* `author`: A reference to the `Article`'s author by ID.

## Examples
### Minimum criteria

<YoastSchemaExample>
{`{
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Recipe",
            "mainEntityOfPage": {
                "@id": "https://www.example.com/#/schema/Article/abc123"
            },
            "name": "Party Coffee Cake",
            "image": {
                "@id": "https://www.example.com/uploads/example-image.jpg"
            },
            "recipeIngredient": [
                "2 cups of flour",
                "3/4 cup white sugar",
                "2 teaspoons baking powder",
                "1/2 teaspoon salt",
                "1/2 cup butter",
                "2 eggs",
                "3/4 cup milk"
            ],
            "recipeInstructions": [
                {
                    "@type": "HowToStep",
                    "text": "Preheat the oven to 350 degrees F. Grease and flour a 9x9 inch pan.",
                    "url": "https://example.com/example-page/#recipe-step-1"
                },
                {
                    "@type": "HowToStep",
                    "text": "In a large bowl, combine flour, sugar, baking powder, and salt.",
                    "url": "https://example.com/example-page/#recipe-step-2"
                },
                {
                    "@type": "HowToStep",
                    "text": "Mix in the butter, eggs, and milk.",
                    "url": "https://example.com/example-page/#recipe-step-3"
                },
                {
                    "@type": "HowToStep",
                    "text": "Spread into the prepared pan.",
                    "url": "https://example.com/example-page/#recipe-step-4"
                },
                {
                    "@type": "HowToStep",
                    "name": "Bake",
                    "url": "https://example.com/example-page/#recipe-step-5"
                },
                {
                    "@type": "HowToStep",
                    "text": "Allow to cool and enjoy.",
                    "url": "https://example.com/example-page/#recipe-step-6"
                }
            ]
        }
    ]
}`}
</YoastSchemaExample>

### Extended criteria

<YoastSchemaExample>
{`{
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Recipe",
            "mainEntityOfPage": {
                "@id": "https://www.example.com/#/schema/Article/abc123"
            },
            "name": "Party Coffee Cake",
            "image": {
                "@id": "https://www.example.com/uploads/example-image.jpg"
            },
            "video": {
                "@id": "https://www.example.com/#/schema/VideoObject/abc123"
            },
            "author": {
                "@id": "https://www.example.com/#/schema/Person/abc123"
            },
            "inLanguage": "en-GB",
            "datePublished": "2018-03-10",
            "description": "This coffee cake is awesome and perfect for parties.",
            "prepTime": "PT20M",
            "cookTime": "PT30M",
            "totalTime": "PT50M",
            "keywords": "cake for a party, coffee",
            "recipeYield": "10",
            "recipeCategory": "Dessert",
            "recipeCuisine": "American",
            "suitableForDiet": [
                "VegetarianDiet",
                "LowSaltDiet"
            ],
            "tools": [
                "A 9x9 inch pan",
                "A large mixing bowl"
            ],
            "nutrition": {
                "@type": "NutritionInformation",
                "calories": "270 calories"
            },
            "recipeIngredient": [
                "2 cups of flour",
                "3/4 cup white sugar",
                "2 teaspoons baking powder",
                "1/2 teaspoon salt",
                "1/2 cup butter",
                "2 eggs",
                "3/4 cup milk"
            ],
            "recipeInstructions": [
                {
                    "@type": "HowToStep",
                    "name": "Preheat",
                    "text": "Preheat the oven to 350 degrees F. Grease and flour a 9x9 inch pan.",
                    "url": "https://example.com/example-page/test/#recipe-step-1",
                    "image": {
                        "@id": "https://www.example.com/uploads/example-image-2.jpg"
                    }
                },
                {
                    "@type": "HowToStep",
                    "name": "Mix dry ingredients",
                    "text": "In a large bowl, combine flour, sugar, baking powder, and salt.",
                    "url": "https://example.com/example-page/test/#recipe-step-2",
                    "image": {
                        "@id": "https://www.example.com/uploads/example-image-3.jpg"
                    }
                },
                {
                    "@type": "HowToStep",
                    "name": "Add wet ingredients",
                    "text": "Mix in the butter, eggs, and milk.",
                    "url": "https://example.com/example-page/test/#recipe-step-3",
                    "image": {
                        "@id": "https://www.example.com/uploads/example-image-4.jpg"
                    }
                },
                {
                    "@type": "HowToStep",
                    "name": "Spread into pan",
                    "text": "Spread into the prepared pan.",
                    "url": "https://example.com/example-page/test/#recipe-step-4",
                    "image": {
                        "@id": "https://www.example.com/uploads/example-image-5.jpg"
                    }
                },
                {
                    "@type": "HowToStep",
                    "name": "Bake",
                    "text": "Bake for 30 to 35 minutes, or until firm.",
                    "url": "https://example.com/example-page/test/#recipe-step-5",
                    "image": {
                        "@id": "https://www.example.com/uploads/example-image-6.jpg"
                    }
                },
                {
                    "@type": "HowToStep",
                    "name": "Enjoy",
                    "text": "Allow to cool and enjoy.",
                    "url": "https://example.com/example-page/test/#recipe-step-6",
                    "image": {
                        "@id": "https://www.example.com/uploads/example-image-7.jpg"
                    }
                }
            ]
        }
    ]
}`}
</YoastSchemaExample>
