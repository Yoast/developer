---
id: functional-specification
title: XML Sitemaps - Functional specification
sidebar_label: Specification
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/xml-sitemaps/functional-specification.md
description: This page describes our functional and technical approach to constructing XML Sitemaps.
---
Any page which the user wishes to be discovered and indexed by search engines should be listed in an XML sitemap.

An individual XML sitemap should be constructed for each *content type*. Large sitemaps may be split into individual, paginated files.
Each XML sitemap should be listed within an *XML sitemap index*.

## Content types
XML sitemaps should be created for each of the following content types, providing that the content type is *public* and it contains valid members.

* Posts
* Pages
* Authors
* Custom post types
* Taxonomies
* Paginated states of multi-part posts/pages

In addition to the individual XML sitemaps, an *XML sitemap index* should be created, which references each of these sitemaps.

## Exclusions & empty sitemaps
The following conditions should lead to a page being excluded from (the appropriate) XML sitemap:

* Posts/pages which are not eligible for indexing by search engines (i.e., any scenario which results in a URL outputting a meta robots noindex directive)
* Posts/pages which have a manual canonical URL set, which is *not* the same as their default canonical value
* Private pages
* Error pages/states/templates
* Search results pages
* Paginated views of any type of archive (e.g., /blog/page/2/)
* Non-public archives and taxonomies
* All URLs, if/when the whole site is set to 'private' (e.g., in WordPress, when the *Search Engine Visibility* option is set to "*Discourage search engines from indexing this site*")

Some of these scenarios may lead to an XML sitemap (or the XML sitemap index) being empty. This is expected and permissible behavior.
Requests to non-existent sitemap URLs should return normal 404 behavior.

## Content

### XML sitemap indexes
The index file contains a `<sitemap>` entry for each individual XML sitemap, each of which has a loc and lastmod property. E.g:

```xml
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<sitemap>
  <loc>https://www.example.com/author-sitemap.xml</loc>
  <lastmod>2019-10-21T12:37:01+00:00</lastmod>
</sitemap>
{...}
</sitemapindex>
```

* The loc property should reference the absolute URL of the XML sitemap in question
* **(Optional)** The lastmod property should reflect the most recent lastmod value from within the XML sitemap in question

Optional properties may be omitted if unavailable.

#### URLs & redirects
The file should be accessible at `/sitemap_index.xml`. Requests to `/sitemap.xml` should redirect here.

### XML sitemaps
Each sitemap contains a `<url>` entry for each page, comprised of a `loc`, `lastmod`, and `image:image` properties. E.g:
```xml
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
  <loc>https://www.example.com/blog/example-post/</loc>
  <lastmod>2018-04-21T10:00:12+00:00</lastmod>
  <image:image>		 
    <image:loc>https://www.example.com/example-image.jpg</image:loc>
    <image:title><![CDATA[Example image title]]></image:title>
  </image:image>
  <image:image>		 
    <image:loc>https://www.example.com/another-example-image.jpg</image:loc>
  </image:image>
</url>
{...}
</urlset>
```

* The `loc` property should reference the canonical URL (the permalink) of the post/page/object
* **(Optional)** The `lastmod` property should reference the time at which the object was last updated. In the case of archives/similar, this should reflect the time at which the archive members last updated (e.g., for a given category, the last time a post was published in that category)
* **(Optional)** An `image:image` property should be output for each image in / associated with a page, with:
  * A loc property (referencing the absolute URL of the image)
  * **(Optional)** A `title` property, referencing the image caption

Optional properties may be omitted if unavailable.

#### Limits & pagination
By default, each sitemap can contain a limit of 1,000 items. If there are more than 1,000 items for a given content type, then (up to 50,000) additional sitemaps are generated to contain the overflow.

#### URLs & redirects
The URL of each sitemap should be constructed in the following format: `{{type}}-sitemap{{n}}.xml`, where:

* `{{type}}` is the content type (e.g., page)
* `{{n}}` is the pagination state (ignoring the first page in the series).

E.g., `post-sitemap.xml`, `post-sitemap2.xml`, `custom_taxonomy_name-sitemap.xml`.

Requests to sitemaps where `{{n}}` is `1` or `0` should trigger a 301 redirect to remove `{{n}}` (e.g., requests to `post-sitemap1.xml` and `post-sitemap0.xml` should redirect to `post-sitemap.xml`).

### XSL stylesheets
Sitemap indexes and individual sitemaps reference an XSL file, which provides the layout and styling configurations for the page.

## Indexing controls
XML sitemaps do not need to be indexed by search engines in order to be read or parsed. Therefore, a `x-robots-tag` HTTP header with a value of `noindex, follow` should returned with all XML sitemap responses.

## Additional scenarios

### Video sitemaps
Our [Video SEO for WordPress plugin](https://yoast.com/wordpress/plugins/video-seo/) adds an additional *video sitemap* (at `video-sitemap.xml`, and included in the sitemap index) which contains information on each video hosted/referenced within site content.

For each page which contains video, the sitemap contains a `<url>` wrapper, with a `<loc>` value (the canonical URL / permalink of the page), and a `<video:video>` container for each video on the page. E.g:
```xml
<url>
  <loc>https://www.example.com/example-page/</loc>
  <video:video>
    <video:title><![CDATA[Example Video]]></video:title>
    <video:publication_date>2015-12-15T15:36:03+00:00</video:publication_date>
    <video:description><![CDATA[Example video description]]></video:description>
    <video:player_loc allow_embed="yes">https://www.youtube-nocookie.com/v/abc123</video:player_loc>			 
    <video:thumbnail_loc>https://www.example.com/video-thumbnail.jpg</video:thumbnail_loc>
    <video:duration>98</video:duration>
    <video:view_count>367</video:view_count>
    <video:width>640</video:width>
    <video:height>390</video:height>
    <video:category>Example category</video:category>
    <video:tag>Example tag</video:tag>
    <video:tag>Another example tag</video:tag>
    <video:family_friendly>yes</video:family_friendly>
    <video:uploader info="https://www.example.com/example-profile-page">Example Person</video:uploader>
  </video:video>
</url>
{…}
</urlset>
```

* `title` is the name of the video
* `description` is the caption of the video, falling back to any available description of the video, falling back the URL of the video (e.g., the public YouTube URL of a video)
* `player_loc` is a URL pointing to the video player
* `thumbnail_loc` is the URL of a video thumbnail image
* **(Optional)** `publication date` is the timestamp at which the video was 'published' (alternatively, *uploaded*)
* **(Optional)** `duration` is the duration in seconds
* **(Optional)** `view_count` is the number of views
* **(Optional)** `width` and `height` are the dimensions of the embedded video in pixels
* **(Optional)** `category` is the primary category of the page/post in which the video is embedded
* **(Optional)** `tag` is a series of the tags associated with the page/post in which the video is embedded
* **(Optional)** `family_friendly` is a boolean value, configured in the video embed UI
* **(Optional)** `uploader` is the name of the person who uploaded the video, with optional info property referencing a profile/homepage

The video XML sitemap uses a dedicated XSL file.

### News sitemaps
Our [News SEO for WordPress plugin](https://yoast.com/wordpress/plugins/news-seo/) adds an additional *news sitemap* (at `news-sitemap.xml`, and included in the sitemap index) which contains information news articles published on the site.

News sitemaps should only reference articles which were published or modified within the last 48 hours.

The sitemap contains a `<url>` wrapper, with a `<loc>` value (the canonical URL / permalink of the page), and a `<news:news>` container for each news article. E.g:
```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
<url>
  <loc>http://www.example.com/example-page/</loc>
  <news:news>
    <news:publication>
      <news:name>Example site name</news:name>
      <news:language>en</news:language>
    </news:publication>
    <news:publication_date>2019-11-15T09:59:38+00:00</news:publication_date>
    <news:title><![CDATA[Example post name]]></news:title>
  </news:news>
  <image:image>
    <image:loc>https://www.example.com/example-image.jpg</image:loc>
    <image:title><![CDATA[Example image title]]></image:title>
  </image:image>
</url>
{…}
</urlset>
```

* `publication.name` is the *Site Title* (e.g., "Yoast")
* **(Optional)** `publication.language` is the language code of the article (in [ISO 639](http://www.loc.gov/standards/iso639-2/php/code_list.php) format)
* `publication_date` is the date in [W3C format](https://www.w3.org/TR/NOTE-datetime)
* `title` is the post name of the article
* **(Optional)** An `image:image` property should be output for each image in / associated with a page, with:
  * A `loc` property (referencing the absolute URL of the image)
  * **(Optional)** A `title` property, referencing the image caption

The news XML sitemap uses a dedicated XSL file.
