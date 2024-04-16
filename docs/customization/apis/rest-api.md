---
id: rest-api
title: "Yoast SEO: REST API"
sidebar_label: REST API
description: Get all of the metadata for a post or URL in a single request, and as part of WordPress' WP-JSON response.
---

:::caution

The 'raw' <code>json</code> data format described below is only available in Yoast SEO versions 16.7 and upwards.

:::

Yoast SEO includes a REST API which returns all of the SEO metadata (meta tags, schema.org data, and more) for any URL on a site. This makes it very easy for headless WordPress sites to use Yoast SEO to manage all of their SEO considerations.

## Yoast SEO REST API syntax
You can retrieve the SEO metadata for a page or URL in two different ways; by querying the object using [WordPress' native WP REST API](https://developer.wordpress.org/rest-api/reference/), or, by querying a specific URL.

### 1. Get SEO metadata as part of WordPress' native WP REST API responses
Many headless WordPress implementations take advantage of WordPress' native WP REST API to retrieve data about specific posts or objects.

Typically, this involves making a request to a URL like `https://yoast.com/wp-json/wp/v2/posts/607` (a specific post by `ID`), `https://yoast.com/wp-json/wp/v2/posts?slug=wordpress-seo` (a specific post by `slug`) or `https://yoast.com/wp-json/wp/v2/types/yoast_events` (a specific custom post type archive)*.

*Note that requests for *custom post archives* should use the post type *name*, which may be different to the archive's *slug* (e.g., `yoast_events` vs `/events/`).*

When Yoast SEO is active, we append *two* additional fields to these responses: `yoast_head` and `yoast_head_json`.

### 2. Query a specific URL
In some cases, it may be easier or more preferable to query a specific URL (rather than an object identifier). You can do that by making a `GET` request to `/wp-json/yoast/v1/get_head?url=`, for any URL. For example:

```
https://yoast.com/wp-json/yoast/v1/get_head?url=https://yoast.com/wordpress-seo/
```

This queries the URL `https://yoast.com/wordpress-seo/`, and will return the following JSON properties: `html`, `json` and `status`.

## Understanding and using our data
In both of the above approaches, we return our SEO data in two formats.

1. The `yoast_head`/`html` properties contain an escaped, *prefabricated* blob which contains all the necessary meta tags (and schema.org output) for that page. This is the same content that we'd typically output in the `<head>` of a post or page.

2. The `yoast_head_json`/`json` properties provide the *raw data*, as a series of key/value pairs (and more complex objects) for each tag.

The `status` property returns a HTTP status code (typically `200` or `404`).

Many of the properties returned in the *raw* data are broken down into specific fields and values. You may use these to query specific properties, and/or to construct your own responses.
E.g., the `og_image` property contains provides `width`, `height`, `size`, `path`, `alt`, `pixels` and various other properties, rather than just the URL of the image.

We recommend using the prefabricated approach whenever possible, as it takes advantage of our internal logic to guarantee an optimal combination of tags and values.
When using the *raw* data, we recommend using the *prefabricated* data as a reference to ensure that your implementation is correct.

## Altering the output
All of our metadata is customizable via our [Metadata API](https://developer.yoast.com/customization/apis/metadata-api).
Both the *prefabricated* and *raw* responses may be altered by filtering the respective *Presenter* for each tag.

## FAQs

### Can I use this API to *update* data?
The Yoast REST API is currently read-only, and doesn't currently support `POST` or `PUT` calls to update the data.

### The API returns a 404 status for an existing page
In some cases, you may find that the API returns a `404` status for an existing post, resource or URL.

This typically occurs when data for the resource isn't available in our *indexables* system. This can usually be fixed by either:

- Saving/updating the object in the WordPress admin interface, or;
- Using the "Optimize SEO Data" functionality in the Yoast SEO *Tools* menu.

Note that Yoast SEO will also return full responses for non-200 scenarios (including legitimate `404` errors), so that you can 'optimize' these scenarios effectively.

### Can I disable the API?
You can easily disable this API by going to the *features* section of your Yoast SEO admin, and disabling the feature toggle.

## Example output
The following code is the result of a query to https://yoast.com/wp-json/yoast/v1/get_head?url=https://yoast.com/site-structure-the-ultimate-guide/. It contains the raw `html`, the structured `json`, and a `status` (of `200`).

```json
{
   "html":"<!-- This site is optimized with the Yoast SEO Premium plugin v16.7-RC2 (Yoast SEO v16.7-RC4) - https:\/\/yoast.com\/wordpress\/plugins\/seo\/ -->\n<meta name=\"description\" content=\"Your site structure is vital for users and SEO. Our complete guide will lead you through all steps necessary to create a sound site structure.\" \/>\n<meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" \/>\n<link rel=\"canonical\" href=\"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/\" \/>\n<meta property=\"og:locale\" content=\"en_US\" \/>\n<meta property=\"og:type\" content=\"article\" \/>\n<meta property=\"og:title\" content=\"Site structure: the ultimate guide\" \/>\n<meta property=\"og:description\" content=\"Your site structure is vital for users and SEO. Our complete guide will lead you through all steps necessary to create a sound site structure.\" \/>\n<meta property=\"og:url\" content=\"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/\" \/>\n<meta property=\"og:site_name\" content=\"Yoast\" \/>\n<meta property=\"article:publisher\" content=\"https:\/\/www.facebook.com\/yoast\" \/>\n<meta property=\"article:author\" content=\"https:\/\/www.facebook.com\/mariekerakt\" \/>\n<meta property=\"article:published_time\" content=\"2020-08-19T12:00:37+00:00\" \/>\n<meta property=\"article:modified_time\" content=\"2021-06-29T12:04:21+00:00\" \/>\n<meta property=\"og:image\" content=\"https:\/\/yoast.com\/app\/uploads\/2020\/08\/posts_artwork_social_share-2021-04-16T115915.180.png\" \/>\n\t<meta property=\"og:image:width\" content=\"1200\" \/>\n\t<meta property=\"og:image:height\" content=\"675\" \/>\n<meta name=\"twitter:card\" content=\"summary_large_image\" \/>\n<meta name=\"twitter:creator\" content=\"@mariekerakt\" \/>\n<meta name=\"twitter:site\" content=\"@yoast\" \/>\n<meta name=\"twitter:label1\" content=\"Est. reading time\" \/>\n\t<meta name=\"twitter:data1\" content=\"18 minutes\" \/>\n<script type=\"application\/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https:\/\/schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https:\/\/yoast.com\/#organization\",\"name\":\"Yoast\",\"url\":\"https:\/\/yoast.com\/\",\"sameAs\":[\"https:\/\/www.facebook.com\/yoast\",\"https:\/\/www.instagram.com\/yoast\/\",\"https:\/\/www.linkedin.com\/company\/1414157\/\",\"https:\/\/www.youtube.com\/yoast\",\"https:\/\/www.pinterest.com\/yoast\/\",\"https:\/\/en.wikipedia.org\/wiki\/Yoast\",\"https:\/\/twitter.com\/yoast\"],\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"https:\/\/yoast.com\/#logo\",\"inLanguage\":\"en-US\",\"url\":\"https:\/\/yoast.com\/app\/uploads\/2020\/09\/Yoast_Icon_SocialMedia_500x500.png\",\"contentUrl\":\"https:\/\/yoast.com\/app\/uploads\/2020\/09\/Yoast_Icon_SocialMedia_500x500.png\",\"width\":500,\"height\":500,\"caption\":\"Yoast\"},\"image\":{\"@id\":\"https:\/\/yoast.com\/#logo\"},\"founder\":{\"@type\":\"Person\",\"name\":\"Joost de Valk\",\"url\":\"https:\/\/yoast.com\/about-us\/team\/joost-de-valk\/\",\"sameAs\":\"https:\/\/yoast.com\/about-us\/team\/joost-de-valk\/\"},\"foundingDate\":\"2010-05-01\",\"numberOfEmployees\":133,\"slogan\":\"SEO for Everyone\",\"description\":\"Yoast helps you with your website optimization, whether it be through our widely used SEO software or our online SEO courses: we&#039;re here to help.\",\"legalName\":\"Yoast BV\"},{\"@type\":\"WebSite\",\"@id\":\"https:\/\/yoast.com\/#website\",\"url\":\"https:\/\/yoast.com\/\",\"name\":\"Yoast\",\"description\":\"SEO for everyone\",\"publisher\":{\"@id\":\"https:\/\/yoast.com\/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\/\/yoast.com\/?s={search_term_string}\"},\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\",\"copyrightHolder\":{\"@id\":\"https:\/\/yoast.com\/#organization\"}},{\"@type\":\"ImageObject\",\"@id\":\"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/#primaryimage\",\"inLanguage\":\"en-US\",\"url\":\"https:\/\/yoast.com\/app\/uploads\/2020\/08\/posts_artwork_social_share-2021-04-16T115915.180.png\",\"contentUrl\":\"https:\/\/yoast.com\/app\/uploads\/2020\/08\/posts_artwork_social_share-2021-04-16T115915.180.png\",\"width\":1200,\"height\":675},{\"@type\":\"WebPage\",\"@id\":\"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/#webpage\",\"url\":\"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/\",\"name\":\"Site structure: the ultimate guide &bull; Yoast\",\"isPartOf\":{\"@id\":\"https:\/\/yoast.com\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/#primaryimage\"},\"datePublished\":\"2020-08-19T12:00:37+00:00\",\"dateModified\":\"2021-06-29T12:04:21+00:00\",\"description\":\"Your site structure is vital for users and SEO. Our complete guide will lead you through all steps necessary to create a sound site structure.\",\"breadcrumb\":{\"@id\":\"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\/\/yoast.com\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Site Structure\",\"item\":\"https:\/\/yoast.com\/tag\/site-structure\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Site structure: the ultimate guide\"}]},{\"@type\":\"Article\",\"@id\":\"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/#article\",\"isPartOf\":{\"@id\":\"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/#webpage\"},\"author\":{\"@id\":\"https:\/\/yoast.com\/#\/schema\/person\/1159f46828cf5ce5fa8e3b89a1af9327\"},\"headline\":\"Site structure: the ultimate guide\",\"datePublished\":\"2020-08-19T12:00:37+00:00\",\"dateModified\":\"2021-06-29T12:04:21+00:00\",\"mainEntityOfPage\":{\"@id\":\"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/#webpage\"},\"wordCount\":3958,\"commentCount\":6,\"publisher\":{\"@id\":\"https:\/\/yoast.com\/#organization\"},\"image\":{\"@id\":\"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/#primaryimage\"},\"thumbnailUrl\":\"https:\/\/yoast.com\/app\/uploads\/2016\/11\/Site_structure_ultimate_guide_FI.png\",\"keywords\":[\"Internal linking\",\"Site Structure\"],\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"CommentAction\",\"name\":\"Comment\",\"target\":[\"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/#respond\"]}]},{\"@type\":\"Person\",\"@id\":\"https:\/\/yoast.com\/#\/schema\/person\/1159f46828cf5ce5fa8e3b89a1af9327\",\"name\":\"Marieke van de Rakt\",\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https:\/\/yoast.com\/#personlogo\",\"inLanguage\":\"en-US\",\"url\":\"https:\/\/secure.gravatar.com\/avatar\/1d83533e299c379140f9fcc2cb0015cb?s=96&d=mm&r=g\",\"contentUrl\":\"https:\/\/secure.gravatar.com\/avatar\/1d83533e299c379140f9fcc2cb0015cb?s=96&d=mm&r=g\",\"caption\":\"Marieke van de Rakt\"},\"description\":\"Marieke van de Rakt is the CEO of Yoast. Her main focus is on growing the company. She is really passionate about maintaining open and friendly company culture. Marieke is also heavily involved in the marketing of Yoast and with Yoast SEO Academy: the online courses platform.\",\"sameAs\":[\"https:\/\/yoast.com\/\",\"https:\/\/www.facebook.com\/mariekerakt\",\"https:\/\/www.instagram.com\/mgarakt\/\",\"https:\/\/www.linkedin.com\/in\/mariekerakt\",\"https:\/\/twitter.com\/mariekerakt\",\"https:\/\/marieke.blog\/\",\"https:\/\/profiles.wordpress.org\/mariekerakt\/\"],\"url\":\"https:\/\/yoast.com\/about-us\/team\/marieke-van-de-rakt\/\"}]}<\/script>\n<!-- \/ Yoast SEO Premium plugin. -->",
   "json":{
      "description":"Your site structure is vital for users and SEO. Our complete guide will lead you through all steps necessary to create a sound site structure.",
      "robots":{
         "index":"index",
         "follow":"follow",
         "max-snippet":"max-snippet:-1",
         "max-image-preview":"max-image-preview:large",
         "max-video-preview":"max-video-preview:-1"
      },
      "canonical":"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/",
      "og_locale":"en_US",
      "og_type":"article",
      "og_title":"Site structure: the ultimate guide",
      "og_description":"Your site structure is vital for users and SEO. Our complete guide will lead you through all steps necessary to create a sound site structure.",
      "og_url":"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/",
      "og_site_name":"Yoast",
      "article_publisher":"https:\/\/www.facebook.com\/yoast",
      "article_author":"https:\/\/www.facebook.com\/mariekerakt",
      "article_published_time":"2020-08-19T12:00:37+00:00",
      "article_modified_time":"2021-06-29T12:04:21+00:00",
      "og_image":[
         {
            "width":1200,
            "height":675,
            "url":"https:\/\/yoast.com\/app\/uploads\/2020\/08\/posts_artwork_social_share-2021-04-16T115915.180.png",
            "path":"\/home\/yoast\/shared\/yoast.com\/www\/web\/app\/uploads\/2020\/08\/posts_artwork_social_share-2021-04-16T115915.180.png",
            "size":"full",
            "id":"2908751",
            "alt":"",
            "pixels":810000,
            "type":"image\/png"
         }
      ],
      "twitter_card":"summary_large_image",
      "twitter_creator":"@mariekerakt",
      "twitter_site":"@yoast",
      "twitter_misc":{
         "Est. reading time":"18 minutes"
      },
      "schema":{
         "@context":"https:\/\/schema.org",
         "@graph":[
            {
               "@type":"Organization",
               "@id":"https:\/\/yoast.com\/#organization",
               "name":"Yoast",
               "url":"https:\/\/yoast.com\/",
               "sameAs":[
                  "https:\/\/www.facebook.com\/yoast",
                  "https:\/\/www.instagram.com\/yoast\/",
                  "https:\/\/www.linkedin.com\/company\/1414157\/",
                  "https:\/\/www.youtube.com\/yoast",
                  "https:\/\/www.pinterest.com\/yoast\/",
                  "https:\/\/en.wikipedia.org\/wiki\/Yoast",
                  "https:\/\/x.com\/yoast"
               ],
               "logo":{
                  "@type":"ImageObject",
                  "@id":"https:\/\/yoast.com\/#logo",
                  "inLanguage":"en-US",
                  "url":"https:\/\/yoast.com\/app\/uploads\/2020\/09\/Yoast_Icon_SocialMedia_500x500.png",
                  "contentUrl":"https:\/\/yoast.com\/app\/uploads\/2020\/09\/Yoast_Icon_SocialMedia_500x500.png",
                  "width":500,
                  "height":500,
                  "caption":"Yoast"
               },
               "image":{
                  "@id":"https:\/\/yoast.com\/#logo"
               },
               "founder":{
                  "@type":"Person",
                  "name":"Joost de Valk",
                  "url":"https:\/\/yoast.com\/about-us\/team\/joost-de-valk\/",
                  "sameAs":"https:\/\/yoast.com\/about-us\/team\/joost-de-valk\/"
               },
               "foundingDate":"2010-05-01",
               "numberOfEmployees":133,
               "slogan":"SEO for Everyone",
               "description":"Yoast helps you with your website optimization, whether it be through our widely used SEO software or our online SEO courses: we&#039;re here to help.",
               "legalName":"Yoast BV"
            },
            {
               "@type":"WebSite",
               "@id":"https:\/\/yoast.com\/#website",
               "url":"https:\/\/yoast.com\/",
               "name":"Yoast",
               "description":"SEO for everyone",
               "publisher":{
                  "@id":"https:\/\/yoast.com\/#organization"
               },
               "potentialAction":[
                  {
                     "@type":"SearchAction",
                     "target":{
                        "@type":"EntryPoint",
                        "urlTemplate":"https:\/\/yoast.com\/?s={search_term_string}"
                     },
                     "query-input":"required name=search_term_string"
                  }
               ],
               "inLanguage":"en-US",
               "copyrightHolder":{
                  "@id":"https:\/\/yoast.com\/#organization"
               }
            },
            {
               "@type":"ImageObject",
               "@id":"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/#primaryimage",
               "inLanguage":"en-US",
               "url":"https:\/\/yoast.com\/app\/uploads\/2020\/08\/posts_artwork_social_share-2021-04-16T115915.180.png",
               "contentUrl":"https:\/\/yoast.com\/app\/uploads\/2020\/08\/posts_artwork_social_share-2021-04-16T115915.180.png",
               "width":1200,
               "height":675
            },
            {
               "@type":"WebPage",
               "@id":"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/#webpage",
               "url":"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/",
               "name":"Site structure: the ultimate guide &bull; Yoast",
               "isPartOf":{
                  "@id":"https:\/\/yoast.com\/#website"
               },
               "primaryImageOfPage":{
                  "@id":"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/#primaryimage"
               },
               "datePublished":"2020-08-19T12:00:37+00:00",
               "dateModified":"2021-06-29T12:04:21+00:00",
               "description":"Your site structure is vital for users and SEO. Our complete guide will lead you through all steps necessary to create a sound site structure.",
               "breadcrumb":{
                  "@id":"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/#breadcrumb"
               },
               "inLanguage":"en-US",
               "potentialAction":[
                  {
                     "@type":"ReadAction",
                     "target":[
                        "https:\/\/yoast.com\/site-structure-the-ultimate-guide\/"
                     ]
                  }
               ]
            },
            {
               "@type":"BreadcrumbList",
               "@id":"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/#breadcrumb",
               "itemListElement":[
                  {
                     "@type":"ListItem",
                     "position":1,
                     "name":"Home",
                     "item":"https:\/\/yoast.com\/"
                  },
                  {
                     "@type":"ListItem",
                     "position":2,
                     "name":"Site Structure",
                     "item":"https:\/\/yoast.com\/tag\/site-structure\/"
                  },
                  {
                     "@type":"ListItem",
                     "position":3,
                     "name":"Site structure: the ultimate guide"
                  }
               ]
            },
            {
               "@type":"Article",
               "@id":"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/#article",
               "isPartOf":{
                  "@id":"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/#webpage"
               },
               "author":{
                  "@id":"https:\/\/yoast.com\/#\/schema\/person\/1159f46828cf5ce5fa8e3b89a1af9327"
               },
               "headline":"Site structure: the ultimate guide",
               "datePublished":"2020-08-19T12:00:37+00:00",
               "dateModified":"2021-06-29T12:04:21+00:00",
               "mainEntityOfPage":{
                  "@id":"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/#webpage"
               },
               "wordCount":3958,
               "commentCount":6,
               "publisher":{
                  "@id":"https:\/\/yoast.com\/#organization"
               },
               "image":{
                  "@id":"https:\/\/yoast.com\/site-structure-the-ultimate-guide\/#primaryimage"
               },
               "thumbnailUrl":"https:\/\/yoast.com\/app\/uploads\/2016\/11\/Site_structure_ultimate_guide_FI.png",
               "keywords":[
                  "Internal linking",
                  "Site Structure"
               ],
               "inLanguage":"en-US",
               "potentialAction":[
                  {
                     "@type":"CommentAction",
                     "name":"Comment",
                     "target":[
                        "https:\/\/yoast.com\/site-structure-the-ultimate-guide\/#respond"
                     ]
                  }
               ]
            },
            {
               "@type":"Person",
               "@id":"https:\/\/yoast.com\/#\/schema\/person\/1159f46828cf5ce5fa8e3b89a1af9327",
               "name":"Marieke van de Rakt",
               "image":{
                  "@type":"ImageObject",
                  "@id":"https:\/\/yoast.com\/#personlogo",
                  "inLanguage":"en-US",
                  "url":"https:\/\/secure.gravatar.com\/avatar\/1d83533e299c379140f9fcc2cb0015cb?s=96&d=mm&r=g",
                  "contentUrl":"https:\/\/secure.gravatar.com\/avatar\/1d83533e299c379140f9fcc2cb0015cb?s=96&d=mm&r=g",
                  "caption":"Marieke van de Rakt"
               },
               "description":"Marieke van de Rakt is the CEO of Yoast. Her main focus is on growing the company. She is really passionate about maintaining open and friendly company culture. Marieke is also heavily involved in the marketing of Yoast and with Yoast SEO Academy: the online courses platform.",
               "sameAs":[
                  "https:\/\/yoast.com\/",
                  "https:\/\/www.facebook.com\/mariekerakt",
                  "https:\/\/www.instagram.com\/mgarakt\/",
                  "https:\/\/www.linkedin.com\/in\/mariekerakt",
                  "https:\/\/x.com\/mariekerakt",
                  "https:\/\/marieke.blog\/",
                  "https:\/\/profiles.wordpress.org\/mariekerakt\/"
               ],
               "url":"https:\/\/yoast.com\/about-us\/team\/marieke-van-de-rakt\/"
            }
         ]
      }
   },
   "status":200
}
```
