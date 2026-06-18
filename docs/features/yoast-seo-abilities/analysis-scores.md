---
id: analysis-scores
title: "Yoast SEO Abilities - Analysis scores"
sidebar_label: Analysis scores
description: This documentation explains the abilities that return the SEO, readability, and inclusive language scores for the most recently modified posts.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Yoast SEO registers three read-only abilities that return the scores of its content analyses for the most recently modified posts: the SEO analysis, the readability analysis, and the inclusive language analysis.

All three take the same input and return the same shape, with one exception: the SEO ability also returns the focus keyphrase.

| Ability | Returns | Extra output field |
|---|---|---|
| `yoast-seo/get-seo-scores` | SEO analysis score | `focus_keyphrase` |
| `yoast-seo/get-readability-scores` | Readability analysis score | – |
| `yoast-seo/get-inclusive-language-scores` | Inclusive language analysis score | – |

All three are listed at `/wp-json/wp-abilities/v1/abilities?category=yoast-seo`.

## Input
Each ability takes a single optional argument:

* `number_of_posts` – the number of recently modified posts to retrieve scores for. An integer between 1 and 100, defaulting to 10.

## Output
Each ability returns an array of objects, one per post:

* `title` – the post title.
* `score` – the score slug: one of `na`, `bad`, `ok`, or `good`.
* `label` – a human-readable label for the score, such as "Good" or "Needs improvement".
* `focus_keyphrase` – the focus keyphrase for the post, or `null` if not set. Returned by the SEO ability only.

## Usage
Send a _GET_ request to an ability's `/run` endpoint. For the SEO scores of the latest 4 posts:

```
/wp-json/wp-abilities/v1/abilities/yoast-seo/get-seo-scores/run?input[number_of_posts]=4
```

For the readability or inclusive language scores, swap `get-seo-scores` for `get-readability-scores` or `get-inclusive-language-scores`.

Doing so might yield the following result:

```json
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

The readability and inclusive language abilities return the same objects without the `focus_keyphrase` field.

## Full definition
A _GET_ request to `/wp-json/wp-abilities/v1/abilities` returns the complete definition of each ability:

<Tabs>
<TabItem value="seo" label="SEO">

```json
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
                    "enum": ["na", "bad", "ok", "good"],
                    "description": "The score slug."
                },
                "label": {
                    "type": "string",
                    "description": "A human-readable label for the score."
                },
                "focus_keyphrase": {
                    "type": ["string", "null"],
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
    }
}
```

</TabItem>
<TabItem value="readability" label="Readability">

```json
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
                    "enum": ["na", "bad", "ok", "good"],
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
    }
}
```

</TabItem>
<TabItem value="inclusive-language" label="Inclusive language">

```json
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
                    "enum": ["na", "bad", "ok", "good"],
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
    }
}
```

</TabItem>
</Tabs>

## How to disable them programmatically
You can unregister any of these abilities through the WordPress-native `wp_abilities_api_init` action. Remove a name from the array to keep that ability enabled:

```php
add_action( 'wp_abilities_api_init', function() {
        $abilities = [
            'yoast-seo/get-seo-scores',
            'yoast-seo/get-readability-scores',
            'yoast-seo/get-inclusive-language-scores',
        ];
        foreach ( $abilities as $ability ) {
            if ( wp_has_ability( $ability ) ) {
                wp_unregister_ability( $ability );
            }
        }
    }, 20
); // Run after Yoast SEO registers at default priority 10
```
