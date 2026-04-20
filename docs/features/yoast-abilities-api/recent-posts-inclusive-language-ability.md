---
id: recent-posts-inclusive-language-ability
title: "Yoast SEO Abilities API - Recent Posts's Inclusive Language Ability"
sidebar_label: Recent Posts's Inclusive Language Ability
description: This documentation explains what is the Recent Posts's Inclusive Language Ability.
---

The **Recent Posts's Inclusive Language Ability** returns the results of the Inclusive Language analysis of the most recently modified posts.

It receives the number of recent posts that the ability consumer wants to learn the inclusive language scores for and outputs the results of the Inclusive Language analysis along with the title for each of those posts.

## Description
If you send a _GET_ request to `/wp-json/wp-abilities/v1/abilities` with Yoast SEO enabled, along with the rest of the abilities that are registered in your website, you will find the description of the Recent Posts's Inclusive Language Ability:
```
    {
        "name": "yoast-seo/get-inclusive-language-scores",
        "label": "Get Inclusive Language Scores",
        "description": "Get the inclusive language scores for the most recently modified posts.",
        "category": "yoast-seo",
        "input_schema": {
            "type": "object",
            "properties": {
                "number_of_posts": {
                    "type": "integer",
                    "description": "The number of recently modified posts to retrieve scores for. Defaults to 10.",
                    "minimum": 1,
                    "maximum": 100,
                    "default": 10
                }
            }
        },
        "output_schema": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "title": {
                        "type": "string",
                        "description": "The post title."
                    },
                    "score": {
                        "type": "string",
                        "enum": [
                            "na",
                            "bad",
                            "ok",
                            "good"
                        ],
                        "description": "The score slug."
                    },
                    "label": {
                        "type": "string",
                        "description": "A human-readable label for the score."
                    }
                }
            }
        },
        "meta": {
            "annotations": {
                "readonly": true,
                "destructive": false,
                "idempotent": true
            },
            "show_in_rest": true,
            "mcp": {
                "public": true
            }
        },
        "_links": {
            "self": [
                {
                    "href": "http://test.local/wp-json/wp-abilities/v1/abilities/yoast-seo/get-inclusive-language-scores",
                    "targetHints": {
                        "allow": [
                            "GET"
                        ]
                    }
                }
            ],
            "collection": [
                {
                    "href": "http://test.local/wp-json/wp-abilities/v1/abilities"
                }
            ],
            "wp:action-run": [
                {
                    "href": "http://test.local/wp-json/wp-abilities/v1/abilities/yoast-seo/get-inclusive-language-scores/run"
                }
            ]
        }
    }
```
The most interesting things that this description shows, along with other information that describe how this ability is meant to be used, are:
* the `description` which describes briefly what the ability does
* the `input_schema` that describes what argument the ability expects and that's the number of recent posts we want
* the `output_schema` that describes what the ability is expected to return as a result and that's an array of objects, where for each post the object will contain its title and inclusive language score

## Usage
To use the Recent Posts's Inclusive Language Ability, a _GET_ request to `/wp-json/wp-abilities/v1/abilities/yoast-seo/get-inclusive-language-scores/run?input[number_of_posts]=3` is sent, for the inclusive language scores of the latest 3 posts.

Doing so in a website might yield the following result:
```
[
    {
        "title": "How to Store Fresh Herbs So They Last Longer",
        "score": "bad",
        "label": "Needs improvement"
    },
    {
        "title": "5 Easy Recipes for Cauliflower",
        "score": "good",
        "label": "Good"
    },
    {
        "title": "10 Common Mistakes when Making Homemade Bread",
        "score": "na",
        "label": "Not available"
    }
]
```

## How to disable it programmatically?
There's a way to disable the Recent Posts's Inclusive Language Ability programmatically and that's by using the WP native `wp_abilities_api_init` action, likeso:
```
add_action( 'wp_abilities_api_init', function() { 
        if ( wp_has_ability( 'yoast-seo/get-inclusive-language-scores' ) ) {
            wp_unregister_ability( 'yoast-seo/get-inclusive-language-scores' );
        }
    }, 20
); // Run after Yoast SEO registers at default priority 10
```
