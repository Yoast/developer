---
id: recent-posts-seo-ability
title: "Yoast SEO Abilities API - Recent Posts's SEO Ability"
sidebar_label: Recent Posts's SEO Ability
description: This documentation explains what is the Recent Posts's SEO Ability.
---

The **Recent Posts's SEO Ability** returns the results of the SEO analysis of the most recently modified posts.

It receives the number of recent posts that the ability consumer wants to learn the SEO scores for and outputs the results of the SEO analysis along with other relevant infomation (title, focus keyphrase) for each of those posts.

## Description
If you send a _GET_ request to `/wp-json/wp-abilities/v1/abilities` with Yoast SEO enabled, along with the rest of the abilities that are registered in your website, you will find the description of the Recent Posts's SEO Ability:
```
    {
        "name": "yoast-seo/get-seo-scores",
        "label": "Get SEO Scores",
        "description": "Get the SEO scores for the most recently modified posts.",
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
                    },
                    "focus_keyphrase": {
                        "type": [
                            "string",
                            "null"
                        ],
                        "description": "The focus keyphrase for the post, or null if not set."
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
                    "href": "http://test.local/wp-json/wp-abilities/v1/abilities/yoast-seo/get-seo-scores",
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
                    "href": "http://test.local/wp-json/wp-abilities/v1/abilities/yoast-seo/get-seo-scores/run"
                }
            ]
        }
    }
```
The most interesting things that this description shows, along with other information that describe how this ability is meant to be used, are:
* the `description` which describes briefly what the ability does
* the `input_schema` that describes what argument the ability expects and that's the number of recent posts we want
* the `output_schema` that describes what the ability is expected to return as a result and that's an array of objects, where for each post the object will contain its title, SEO score and focus keyphrase

## Usage
To use the Recent Posts's SEO Ability, a _GET_ request to `/wp-json/wp-abilities/v1/abilities/yoast-seo/get-seo-scores/run?input[number_of_posts]=4` is sent, for the SEO scores of the latest 4 posts.

Doing so in a website might yield the following result:
```
[
    {
        "title": "10 High-Protein Breakfast Ideas for Busy Mornings",
        "score": "good",
        "label": "Good",
        "focus_keyphrase": "High-Protein Breakfast Ideas"
    },
    {
        "title": "How to Make Homemade Sourdough Bread from Scratch",
        "score": "bad",
        "label": "Needs improvement",
        "focus_keyphrase": "Homemade sourdough bread"
    },
    {
        "title": "5 Quick and Healthy Lunch Recipes Under 30 Minutes",
        "score": "bad",
        "label": "Needs improvement",
        "focus_keyphrase": "Quick and Healthy Lunch Recipes"
    },
    {
        "title": "The Best Budget-Friendly Pantry Staples Every Cook Needs",
        "score": "na",
        "label": "Not available",
        "focus_keyphrase": null
    }
]
```

## How to disable it programmatically?
There's a way to disable the Recent Posts's SEO Ability programmatically and that's by using the WP native `wp_abilities_api_init` action, likeso:
```
add_action( 'wp_abilities_api_init', function() { 
        if ( wp_has_ability( 'yoast-seo/get-seo-scores' ) ) {
            wp_unregister_ability( 'yoast-seo/get-seo-scores' );
        }
    }, 20
); // Run after Yoast SEO registers at default priority 10
```