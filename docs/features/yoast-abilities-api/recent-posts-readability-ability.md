---
id: recent-posts-readability-ability
title: "Yoast SEO Abilities API - Recent Posts's Readability Ability"
sidebar_label: Recent Posts's Readability Ability
description: This documentation explains what is the Recent Posts's Readability Ability.
---

The **Recent Posts's Readability Ability** returns the results of the readability analysis of the most recently modified posts.

It receives the number of recent posts that the ability consumer wants to learn the readability scores for and outputs the results of the Readability analysis along with the title for each of those posts.

## Description
If you send a _GET_ request to `/wp-json/wp-abilities/v1/abilities` with Yoast SEO enabled, along with the rest of the abilities that are registered in your website, you will find the description of the Recent Posts's Readability Ability:
```
    {
        "name": "yoast-seo/get-readability-scores",
        "label": "Get Readability Scores",
        "description": "Get the readability scores for the most recently modified posts.",
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
                    "href": "http://test.local/wp-json/wp-abilities/v1/abilities/yoast-seo/get-readability-scores",
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
                    "href": "http://test.local/wp-json/wp-abilities/v1/abilities/yoast-seo/get-readability-scores/run"
                }
            ]
        }
    }
```
The most interesting things that this description shows, along with other information that describe how this ability is meant to be used, are:
* the `description` which describes briefly what the ability does
* the `input_schema` that describes what argument the ability expects and that's the number of recent posts we want
* the `output_schema` that describes what the ability is expected to return as a result and that's an array of objects, where for each post the object will contain its title and readability score

## Usage
To use the Recent Posts's Readability Ability, a _GET_ request to `/wp-json/wp-abilities/v1/abilities/yoast-seo/get-readability-scores/run?input[number_of_posts]=3` is sent, for the readability scores of the latest 3 posts.

Doing so in a website might yield the following result:
```
[
    {
        "title": "How to Meal Prep for the Entire Week in 2 Hours",
        "score": "good",
        "label": "Good"
    },
    {
        "title": "The Beginner’s Guide to Cooking with Cast Iron",
        "score": "good",
        "label": "Good"
    },
    {
        "title": "Things to Avoid when on a Protein-Based Diet",
        "score": "ok",
        "label": "OK"
    }
]
```

## How to disable it programmatically?
There's a way to disable the Recent Posts's Readability Ability programmatically and that's by using the WP native `wp_abilities_api_init` action, likeso:
```
add_action( 'wp_abilities_api_init', function() { 
        if ( wp_has_ability( 'yoast-seo/get-readability-scores' ) ) {
            wp_unregister_ability( 'yoast-seo/get-readability-scores' );
        }
    }, 20
); // Run after Yoast SEO registers at default priority 10
```