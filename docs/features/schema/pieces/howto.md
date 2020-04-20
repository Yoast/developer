---
id: howto
title: Schema piece - HowTo
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/pieces/howto.md
description: Describes a HowTo guide, which contains a series of steps. 
---
import YoastSchemaExample from '../../../../../developer-site/src/components/YoastSchemaExample';

Describes a `HowTo` guide, which contains a series of `steps`.

## Triggers
Should be added as a top-level node in the graph, when the content of a page contains a *HowTo block*.

## Required properties
A valid `HowTo` must have the following properties.

* `@id`: The unmodified *canonical URL* of the page, appended by `#/schema/howto/{{ID}}`, where `{{ID}}` is a unique identifier.
* `mainEntityOfPage`: Referencing the `WebPage` by ID.
* `name`: A string describing the guide.
* `step`: An array of `howToStep` objects, with the following properties:
	* `@id`: The unmodified  *canonical URL*  of the page, appended by `#/schema/howtostep/{{ID}}`, where `{{ID}}` is a unique identifier.
	* `url`: A link to a fragment identifier (an 'ID anchor') of the individual `howToStep` (e.g., `https://www.example.com/example-page/#howtostep-5` ).
	* Either a `name` or `text` property (see *Conditional scenarios* ).

## Failure scenarios
If any of the required fields of the `HowTo` or of a `step` are missing or invalid, the node should not be output.

If a node is not output, any entities which would otherwise have declared a relationship with it should remove those references.

## Optional properties
The following should be added whenever available and valid:

* `totalTime`: The total time required to complete the instructions, in ISO 8601 duration format.
* `description`: Introduction or description content relating to the HowTo guide.
* `inLanguage`: The language code for the guide; e.g., `en-GB`.

## Conditional properties
### When the page contains a valid `Article`

* Alter the `mainEntityOfPage` property to reference the `Article` by ID, (instead of the `WebPage` ).

### When the HowToStep has one or more images
* `image`: An `imageObject` (or an array of `imageObject` s), referenced by ID.

### When the `howToStep` has a name and description
* `name`: A summary of / title for the step.
* `itemListElement`: An array of `HowToDirection` objects with a `text` property, for each paragraph in the description.

### When the `howToStep` has a *name,* but no text in its *description*
* `text`: A summary of / title for the step.

### When the `howToStep` has a *description*, but no *name*
* `itemListElement`: An array of `HowToDirection` objects with a `text` property, for each paragraph in the description.

## Examples
### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "HowTo",
              "@id": "https://www.example.com/example-page/#/schema/howto/abc123",
              "mainEntityOfPage": {
                  "@id": "https://www.example.com/example-page/"
              },
              "name": "HowTo example",
              "step": [
                  {
                      "@type": "HowToStep",
                      "@id": "https://www.example.com/example-page/#/schema/howtostep/abc123",
                      "name": "Example step 1",
                      "url": "https://www.example.com/example-page/#how-to-step-1",
                      "itemListElement": [
                          {
                              "@type": "HowToDirection",
                              "text": "The step description."
                          }
                      ]
                  },
                  {
                      "@type": "HowToStep",
                      "text": "Example step 2 (no description)",
                      "url": "https://www.example.com/example-page/#how-to-step-2"
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
              "@type": "HowTo",
              "@id": "https://www.example.com/example-page/#/schema/howto/abc123",
              "mainEntityOfPage": {
                  "@id": "https://www.example.com/example-page/#/schema/article/abc123"
              },
              "name": "HowTo example",
              "description": "HowTo description",
              "inLanguage": "en-US",
              "totalTime": "P2DT0H0M",
              "step": [
                  {
                      "@type": "HowToStep",
                      "@id": "https://www.example.com/example-page/#/schema/howtostep/abc123",
                      "name": "Example step 1",
                      "url": "https://www.example.com/example-page/#how-to-step-1",
                      "image": {
                          "@id": "https://www.example.com/#/schema/image/abc123"
                      },
                      "itemListElement": [
                          {
                              "@type": "HowToDirection",
                              "text": "The step description."
                          }
                      ]
                  },
                  {
                      "@type": "HowToStep",
                      "@id": "https://www.example.com/example-page/#/schema/howtostep/def456",
                      "text": "Example step 2 (no description)",
                      "url": "https://www.example.com/example-page/#how-to-step-2",
                      "image": {
                          "@id": "https://www.example.com/#/schema/image/def456"
                      }
                  },
                  {
                      "@type": "HowToStep",
                      "@id": "https://www.example.com/example-page/#/schema/howtostep/ghi789",
                      "name": "Example step 3",
                      "url": "https://www.example.com/example-page/#how-to-step-3",
                      "itemListElement": [
                          {
                              "@type": "HowToDirection",
                              "text": "The first paragrah in the step description."
                          },
                          {
                              "@type": "HowToDirection",
                              "text": "The second paragrah in the step description."
                          }
                      ]
                  }
              ]
          }
      ]
  }`}
</YoastSchemaExample>
