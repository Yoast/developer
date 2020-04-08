---
id: yoast-seo-product-sheet
title: Yoast SEO Product sheet
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/yoast-seo-product-sheet.md
---
import YoastSchemaExample from '../../developer-site/src/components/YoastSchemaExample';

This document is a living document, describing the functionality of Yoast SEO for any platform. 
It starts with a general specification, describing the functionality a Yoast SEO module should always guarantee, regardless of the platform for which it has been built. Further down you will find more platform specific requirements.

## Yoast SEO: general specification

### Technical SEO (out of the box)
Some things need to work out of the box when the module is enabled.

* The site needs to have pretty permalinks. System permalinks should refer to their human-readable equivalents through canonicals.
* Every page needs to have a rel=“canonical” that defaults to its generated pretty URL. See [rel=canonical: the ultimate guide](https://yoast.com/rel-canonical/) on Yoast.com.
* The site needs to handle paginated content well. Paginated content should have `rel="next"` and/or `rel="prev"` tags. See [Google’s documentation on paginated content](https://support.google.com/webmasters/answer/1663744?hl=en).
* Search results and archive pages that should be public should have meta robots tags `noindex, follow`.
* Category pages which are paginated should index all pages in the series (previous advice suggested that only the first page should be indexed).

### On-page SEO and content analysis
For on-page SEO two sides should be covered:

1. On the technical side, SEO metadata needs to be included in the head of every page. This also includes social metadata like [OpenGraph](https://developers.facebook.com/docs/sharing/opengraph) and [Twitter](https://dev.twitter.com/cards/overview) metadata.
2. On the content side, the user should be able to optimize content for SEO. For this purpose, we have built a, fully client-side functioning, content analysis tool.

#### Page specific metadata
For each page, a user needs to be able to set the following metadata:

* `<title>`
* `content`: SEO title field in Yoast Snippet editor.
* *if empty*, `content`: Title of the page.
* `<meta name="description">`
* `content`: The meta description field in the Yoast Google Snippet editor
* *exclude if empty*.
* `<meta property="og:locale" />`
* `content`: Locale of the content.
* *exclude if empty*
* `<meta property="og:type" />`
* *if homepage*, `content`: website
* *if singular content (post, page or equivalent)*, `content`: article
* *if archive or portal*, `content`: object
* `<meta property="og:title" />`
* `content`: Facebook title field.
* *if empty*, `content`: SEO title field in Yoast Snippet editor
* *if empty*, `content`: Title of the page.
* `<meta property="og:description" />`
* `content`: Facebook description field.
* *if empty*, `content`: Meta description field in Yoast Snippet editor
* *if empty*, `content`: Excerpt of the content
* *exclude if empty*
* `<meta property="og:url" />`
* `content`: The canonical url of the page
* `<meta property="og:image" />`
* `content`: The Facebook image field.
* *if empty*, Main or featured image for the content.
* *if empty*, Images present in the content.
* `<meta name="twitter:description" />`
* `content`: Twitter description field.
* *if empty*, `content`: Facebook description field.
* *if empty*, `content`: Meta description field in Yoast Snippet editor
* *if empty*, `content`: Excerpt of the content
* *exclude if empty*
* `<meta name="twitter:title" />`
* `content`: Twitter title input field.
* *if empty*, `content`: Facebook title input field.
* *if empty*, `content`: SEO title field in Yoast Snippet editor
* *if empty*, `content`: Title of the page.
* `<meta name="twitter:image" />`
* `content`: The Twitter image field.
* *if empty*, `content`: The Facebook image field.
* *if empty*, `content`: Main or featured image for the content.
* *if empty*, `content`: Images present in the content.

#### Globally set metadata
As a site owner, I want to be able to set the following metadata globally:

* `<meta property="og:site_name" />`
* `content`: The site name
* `<meta property="fb:admins" />`
* `content`: List of the website’s Facebook page admin ids (comma separated).
* `<meta property="fb:pages" />`
* `content`: Facebook page id.
* `<meta name="twitter:card" />`
* `content`: The selected twitter card type.
* Supported types:
* `summary` (Summary)
* `summary_large_image` (Summary with large image)
* See [Twitter docs on card types](https://dev.twitter.com/cards/types)
* `<meta name="twitter:site" />`
* `content`: The Twitter handle of the Twitter profile associated with the site (also used for `People` and `Organization` structured metadata).

#### Advanced SEO metadata
Optionally, we might also want to include a few options for setting the robots meta.

* As an advanced user, I want to be able to set the following `<meta name="robots">` tags for every page:
* `index` / `noindex`
* `follow` / `nofollow`
* `noodp`
* `noimageindex`
* `noarchive`
* `nosnippet`
* As an advanced user, I need to be able to set the `canonical` url for every page.

#### Content & Readability analysis
For content & readability analysis, we’ve built a tool called [YoastSEO.js](https://github.com/Yoast/javascript/tree/master/packages/yoastseo). It’s able to analyze content for a whole range of SEO, accessibility and readability checks.
YoastSEO.js also contains a Google snippet editor which contains a preview of how the page will (probably) be displayed in Google desktop or mobile search and an editor in which users can edit the title, slug and meta description intuitively.
These UI elements should be integrated into the content editing experience and should update in a real-time or semi-realtime manner. For inspiration, implementors are recommended to take a look at how these elements are integrated into [Yoast SEO for WordPress](https://wordpress.org/plugins/wordpress-seo/).

### Structured metadata
For an expansive guide on how we use Schema in our plugins, you can check out our [schema documentation](features/schema/overview.md).

#### `Website` Structured metadata (`ld+json`)
* An `ld+json` script should be output in the head of the home page (possibly also about page?) containing structured [Website](https://schema.org/WebSite) metadata.
* As a site owner, I should be able to set a `name` (Sitename) and an `alternateName` (Alternate name) for my site.
* If my site has public search functionality, a `SearchAction` should be automatically added giving Google the possibility to put a search box in its search results, allowing people to search on my site straight from Google. See [Google’s Sitelinks Searchbox documentation](https://developers.google.com/search/docs/data-types/sitelinks-searchbox).

##### `Website` example
<YoastSchemaExample>
{`{
  	"@context":"http://schema.org",
  	"@type":"WebSite",
  	"url":"https://yoast.com\/",
  	"name":"Yoast",
  	"alternateName":"Yoast.com",
  	"potentialAction":{
  		"@type":"SearchAction",
  		"target":"https://yoast.com\/?s={search_term_string}",
  		"query-input":"required name=search_term_string"
  	}
}`}
</YoastSchemaExample>

#### `Person` or `Company` Structured metadata (`ld+json`)
* An `ld+json` script should be output in the head of the home page (possibly also about page?) containing structured [Person](https://schema.org/Person) or [Organization](https://schema.org/Organization) metadata.
* As a site owner, I should be able to tell Yoast SEO if my site represents a `Person` (Person) or an `Organization` (Company).
* For a `Person`, I need to be able to set a name.
* For an `Organization`, I need to be able to set a name and upload a logo.
* For both a `Person` or `Organization`, I need to be able to set the social profiles associated with it, which will be output in the `sameAs` property of the structured metadata. The following social profiles should be included (none are required):
* Facebook
* Instagram
* Twitter
* Linkedin
* Youtube
* Pinterest
* Myspace
* Google+

##### `Person` example
<YoastSchemaExample>
{`{
  	"@context":"http://schema.org",
  	"@type":"Person",
  	"url":"http://person.example.org\/",
  	"sameAs":[
  		"https://www.facebook.com\/examplePerson",
  		"https://instagram.com\/examplePerson\/",
  		"https://www.linkedin.com\/company\/person.example.com",
  		"https://plus.google.com\/+ examplePerson\/posts",
  		"https://myspace.com\/examplePerson",
  		"https://www.youtube.com\/examplePerson",
  		"https://www.pinterest.com\/examplePerson",
  		"https://twitter.com\/examplePerson"
  	],
  	"name":"John Doe",
}`}
</YoastSchemaExample>

##### `Organization` example
<YoastSchemaExample>
{`{
  	"@context":"http://schema.org",
  	"@type":"Organization",
  	"url":"https://yoast.com\/",
  	"sameAs":[
  		"https://www.facebook.com\/yoast",
  		"https://instagram.com\/yoast\/",
  		"https://www.linkedin.com\/company\/yoast.com",
  		"https://plus.google.com\/+Yoastcom\/posts",
  		"https://myspace.com\/yoast",
  		"https://www.youtube.com\/yoast",
  		"https://www.pinterest.com\/yoast",
  		"https://twitter.com\/yoast"
  	],
  	"name":"Yoast",
  	"logo":"https://yoast-mercury.s3.amazonaws.com\/uploads\/2013\/02\/Yoast_Icon_Large_RGB.png"
  }`}
</YoastSchemaExample>

## Magento SEO

* Magento’s standard CMS functionality can be somewhat compared to WordPress in terms of content management because content is edited in one field only. Therefore the Yoast content analysis will be easy to integrate in the standard CMS functionality.
* Nice to have: there are a lot of modules that extend Magento’s basic CMS functionality. Some add custom fields to the content editing experience. It would be nice to integrate with the most used amongst these modules.
* Products are not part of Magento’s CMS functionality. These are in fact built up out of a pretty much endless set of fields. To integrate the content analysis for product detail pages, the approach that was chosen is to create a template for analysis in which we load a standard set of fields in logical positions. The template is then fed to the content analysis and analyzed for SEO and readability.
* Product category pages can be content only, product only (often with content widgets) or contain both content and a list of products. We should probably only integrate our content analysis for product category pages that contain content.
* Every variant to a product can have its own page or only be visible through a product page of a configurable product (a product with many variants i.e. different sizes and colors) or a bundle. One could think of a red XL shirt which is a separate product but is only shown on the product page for “shirt” as a variant.
* In case a product that is a variant to a configurable product does have its own page, should it canonicalize to the configurable product’s page?
* It would probably be a good idea to add structured metadata for [Product](https://schema.org/Product). The idea is to only add properties that Google actually looks at. `offers` and `review` seem like good candidates. What else?
* Magento is licensed under OSL. We should check if there are any compatibility issues with GPLv3 that might bite us.
