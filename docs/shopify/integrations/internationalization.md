---
id: internationalization
title: "Yoast SEO for Shopify: Internationalization"
sidebar_label: Internationalization
description: How to internationalize the output from Yoast SEO for Shopify
---
import YoastSchemaExample from '../../../src/components/YoastSchemaExample';

Shopify allows merchants to support multiple languages on their online store. The content you add through the 
Yoast SEO for Shopify app, can be translated via these systems as well. This documentation provides information about 
how multilingual apps can integrate with Yoast SEO for Shopify to translate that content.

## Translating texts specific to your content

Yoast SEO for Shopify allows you to enrich the meta information about your content. You can add meta information for search
engines and social platforms. All information for a piece of content (e.g. a product, or a blog article) is stored in a single 
metafield: `yoast_seo.indexable`. This metafield contains at least the following JSON data in the structure:

```
{
  "title": "", // The content for the <title> tag.
  "description": "", // The content for the <meta name="description" /> tag.
  "open_graph_title": "", // The content for the <meta name="og:title" /> tag.
  "open_graph_description": "", // The content for the <meta name="og:description" /> tag.
  "twitter_title": "", // The content for the <meta name="twitter:title" /> tag.
  "twitter_description": "", // The content for the <meta name="twitter:description" /> tag.
}
```

### Snippet variables

We allow variables to be used in this content, that we replace with up-to-date data when rendering the output. These 
variables follow the format `%%variable_name%%` and should not be translated. Check the entire [list of available snippet
variables in Shopify](https://yoast.com/help/list-available-snippet-variables-yoast-seo/#h-available-snippet-variables-in-shopify).

## Translating fallback texts

When no specific texts have been given for content, Yoast SEO for Shopify uses configurable fallbacks. These can be
configured for different types of content and can potentially contain translatable text too. To store these fallbacks, a
single metafield is created on the Shop object directly: `yoast_seo.settings`. This metafield also contains JSON data,
which at least has the following structure:

```
{
  "contentTypes": {
    "<content_type>": {
      "templates": {
        "seo": {
          "single": {
            "title": "", // The fallback for <title> tags for this type of content.
            "description": "" // The fallback for <meta name="description"> tags for this type of content.
          }
        }
      }
    }
  }
}
```

The fallbacks also have support for the same snippet variables.

## Translating special pages

The homepage is a special page that is also stored as a content type `homepage` in the `yoast_seo.settings` metafield.

The overview pages with all products and all collections can also be optimized. When the `<content_type>` is `products` 
or `collections`, the `"single"` property has an adjacent `"archive"` property with the same structure. For `products` 
this represents the page at `/collections/all`: a page listing all products. For `collections` this represents the page 
`/collections`: a page listing all collections.

There are 2 other content types, not directly related to content from Shopify: `productTags` and `blogPostTags`. These
content types are applied when filtering a collection or a blog with one or more tags. Filtered collections can be found
at `/collections/<collection_slug>/<tag_name>`. Filtered blogs can be found at `/blogs/<blog_slug>/tagged/<tag_name>`.

Yoast SEO for Shopify also allows merchants to optimize the `<title>` tag for 404 and search pages. These are also 
stored in the `yoast_seo.settings` metafield on the shop. Their data is not in the `contentTypes` property. Instead, 
this text is available in:

```
{
  "advancedSettings": {
    "notFoundPages": {
      "title": "", // The content for the <title> tag for 404 pages.
      }
    },
    "searchPages": {
      "title": "", // The content for the <title> tag for search pages.
      }
    },
  }
}
```

All special pages have support for the same snippet variables.
