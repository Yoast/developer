---
id: question
title: Schema piece - Question
sidebar_label: Question
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/schema/pieces/question.md
description: Describes a 'Question'. Most commonly used in 'FAQPage' or 'QAPage' content.
---
import YoastSchemaExample from '../../../../../developer-site/src/components/YoastSchemaExample';

Describes a `Question`. Most commonly used in `FAQPage` or `QAPage` content.

## Triggers
Should be added as top-level nodes in the graph, when the content of a page contains an *FAQ block*.

## Required properties
A valid `Question` must have the following properties.
* `@id`: The unmodified  *canonical URL*  of the page, appended by `#/schema/question/{{ID}}`, where `{{ID}}` is a unique identifier.
* `name`: The text content of the question.
* `acceptedAnswer`: An `answer` object, with a `text` property which contains the answer to the question.

## Failure scenarios
If any of the required fields of the `Question` are missing or invalid, the node should not be output.
If a node is not output, any entities which would otherwise have declared a relationship with it should remove those references.

## Optional properties
The following should be added whenever available and valid:
* `inLanguage`: The language code for the question; e.g., `en-GB`.

## Examples

### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "Question",
              "@id": "https://www.example.com/example-page/#/schema/question/abc123",
              "name": "What is the return policy?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most unopened items in new condition and returned within 90 days will receive a refund or exchange. Some items have a modified return policy noted on the receipt or packing slip. Items that are opened or damaged or do not have a receipt may be denied a refund or exchange. Items purchased online or in-store may be returned to any store. Online purchases may be returned via a major parcel carrier."
              }
          }
      ]
  }`}
</YoastSchemaExample>
