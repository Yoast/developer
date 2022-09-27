---
id: functional-specification
title: OpenGraph Tags - Functional specification
sidebar_label: Specification
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/features/opengraph/functional-specification.md
description: This documentation provides technical information about which OpenGraph tags Yoast SEO generates and outputs.
---
This documentation provides technical information about which OpenGraph and related tags that [Yoast SEO](https://yoast.com/wordpress/plugins/seo/) generates and outputs.

We output a variety of OpenGraph and similar tags in the `<head>` of each page, in order to better inform data consumers about the content of the page in question. OpenGraph data is consumed by Facebook, but also by Pinterest, LinkedIn, WhatsApp and even Google.

## OpenGraph metadata
Assuming that the respective admin settings are not disabled, these tags are output on all pages (except for _error_ templates, which are described separately).

| Tag | Description |
|---|----|
| `og:locale` | The page's language. |
| `og:type` | The type of page/resource. <br /> <br /> _website on the homepage._ <br /> _profile on user profile pages._ <br />_article on all pages/posts and other templates._  |
| `og:title` | The title of the page. <br /> <br /> Outputs a value based on the following hierarchy: <ul><li>A user-defined "Facebook title" value for the page.</li><li>An auto-generated "Social title" from the template in Search Appearance.</li><li>A user-defined "Seo title" for the page.</li><li>An auto-generated "SEO title" from the template in Search Appearance.</li><li>The social title default option (same as the SEO title): `%%title%% %%page%% %%sep%% %%sitename%%`. For Author & Date archives the default is just the page title.</li></ul> |
| `og:url` | The canonical URL of the page (or the series root, in the case of paginated content). |
| `og:site_name` | The name of the site. |

### Conditional tags
The following tags are only output when their conditions are met:

| Tag | Description | Notes |
|---|----|---|
| `og:description` | The description of the page. | Outputs a value based on the following hierarchy: <ul><li>A user-defined "Facebook description" value for the page.</li><li>An auto-generated "Social description" from the template in Search Appearance.</li><li>A user-defined "Meta description" for the page.</li><li>An auto-generated "Meta description" from the template in Search Appearance.</li><li>A user-defined excerpt for the page (only for posts).</li><li>An auto-generated excerpt from the page's content (for terms: the term description).</li></ul> |
| `article:publisher` | The Facebook page URL of the publishing organization. | Only populated when a value has been provided by the user. <br /> Only populated on `post` and `page` types. |
| `article:author` | The URL of the profile page of the author. | Only populated when the user has a valid profile URL. <br /> Only populated on `post` types. |
| `article:modified_time` | A timestamp of when the page was last modified. | Only populated on `post` and `page` types. |
| `article:published_time` | A timestamp of when the page was published. | Only populated on the `post` type. Use the `wpseo_opengraph_show_publish_date` filter to add additional posttypes. |
| `og:image` | The URL of the primary image of the page. | Only populated when the page contains a valid image, based on the following hierarchy: <ul><li>A user-defined image "Facebook image" in the Social tab of the Yoast metabox.</li><li>A user-defined "Featured image" for the page (only for posts).</li><li>A prominent image from the page's content.</li><li>Yoast SEO WooCommerce only: Woo SEO adds one more image fallback: the first image in the Woo Product gallery.</li><li>The "Social default image" from the template in Search Appearance.</li><li>The site's fallback/default social image (set at SEO > Social > Facebook > Default image).</li></ul> In case of an author archive, the image is based on the following hierarchy: <ul><li>The "Social default image" from the template in Search Appearance.</li><li>The user's Gravatar image.</li><li>The site's fallback/default social image (set at SEO > Social > Facebook > Default image).</li></ul> |
| `og:image:width` | The width in pixels of the `og:image`. | Only populated when an `og:image` is set, and its width and height are known. |
| `og:image:height` | The height in pixels of the `og:image`. | Only populated when an `og:image` is set, and its width and height are known. |

### Error templates
Only output the following tags are output:

| Tag | Value |
|---|----|
| `og:locale` | The page's language. |
| `og:title` | The site's error title template. |
| `og:site_name` | The name of the site. |

### Deprecated tags
The following tags used to be output by Yoast SEO, but have been removed in recent updates.

| Tag | Description | Deprecated |
|----|-----|---|
| `fb:admins` | Legacy Facebook control. No longer appears to be supported | Unknown |
| `article:section` | Legacy Facebook / Open Graph tag. No longer appears to be supported. | Yoast SEO v14.0 (Apr 2020) |
| `og:updated_time` | Legacy Facebook / Open Graph tag. No longer appears to be supported. | Yoast SEO v14.0 (Apr 2020) |
| `og:image:secure_url` | Defines a (separate) URL for the featured image, available over HTTPS. Unnecessarily duplicates the `og:image` tag when a site is on HTTPS, and, unnecessary/omitted when the site is not. | Yoast SEO v14.0 (Apr 2020) |
| `og:video:secure_url` | Legacy Facebook / Open Graph tag. As per `og:image:secure_url`, but for the featured video (in our [Video SEO for WordPress plugin](https://yoast.com/wordpress/plugins/video-seo/)). | Yoast SEO v14.0 (Apr 2020) |
| `og:image:type` | Defines the image format. Poor value/performance trade-off; especially as we ping Facebook on post publish, at which point they determine and cache this information themselves. | Yoast SEO v14.0 (Apr 2020) |
| `fb:app_id` | The Facebook App ID. | Yoast SEO v15.5 (Dec 2020) |

## Misc related tags
| Tag | Description | Notes |
|---|----|---|
| `<meta name="author" content="%NAME%" />` | The name of the post author | Only populated on `post` types. |
