## 13.3

Release date: 2025-02-04

#### Enhancements

* Allows for News Sitemap items to change the language via a new filter `Yoast\WP\News\publication_language`. Props to [dgwatkins](https://github.com/dgwatkins).

#### Bugfixes

* Stops PHP notices on WordPress 6.7 about `_load_textdomain_just_in_time` loading incorrectly.

#### Other

* Sets the minimum required Yoast SEO version to 24.4.
* Sets the minimum supported WordPress version to 6.5.
* Sets the _WordPress tested up to_ version to 6.7.

## 13.2

Release date: 2024-03-05

#### Enhancements

* Adds a `wpseo_news_sitemap_content` filter to append custom content to the XML sitemap. Props to @wccoder.
* This PR introduces a new way of retrieving translations for Yoast News SEO, by utilizing the TranslationPress service. Instead of having to ship all translations with every release, we can now load the translations on a per-install basis, tailored to the user's setup. This means smaller plugin releases and less bloat on the user's server.

#### Bugfixes

* Fixes a bug where a warning would be thrown on activation.
* Fixes a bug where using the `&` character in the publication name would break the XML sitemap.

#### Other

* Drops compatibility with PHP 5.6, 7.0 and 7.1.
* Improves discoverability of security policy.
* Sets the minimum required Yoast SEO version to 22.2.
* Sets the minimum supported WordPress version to 6.3.
* Sets the WordPress tested up to version to 6.4.
* The plugin has no known incompatibilities with PHP 8.3.
* Users requiring this package via [WP]Packagist can now use the `composer/installers` v2.

## 13.1

Release date: 2021-11-16

#### Enhancements

* Huge performance improvement: moves the XML News sitemap to be based on our Indexables architecture.
* Removes images from the XML News sitemap as they serve no purpose here and this further improves performance.

#### Other

* Excludes attachments and non-indexed post types from the possible post types to include in the News Sitemap.

## 13.0

Release date: 2021-10-19

#### Enhancements

* Adds Schema Article News subtypes: `ReviewNewsArticle`, `AnalysisNewsArticle`, `AskPublicNewsArticle`, `BackgroundNewsArticle`, `OpinionNewsArticle`, and `ReportageNewsArticle`.

## 12.9

Release date: 2021-08-10

#### Bugfixes

* Fixes a bug where a duplicate News section would be shown in the Yoast sidebar in the post editor when Yoast SEO Premium is active in combination with WP 5.8.

## 12.8

Release date: 2021-07-13

#### Enhancements

* Adds key/value pairs of all News SEO meta tags to our REST API.
* Improves the performance of the news sitemap. Props to [archon810](https://github.com/archon810).

#### Bugfixes

* Fixes a bug where a database query including duplicate column names would fail on certain database systems.

#### Other

* Adds a filter to override the decision to omit an item from the news sitemap. Props to [joneslloyd](https://github.com/joneslloyd).
* Sets the minimum WordPress version to 5.6.

## 12.7

Release date: 2021-04-06

#### Enhancements

* Adds News to the Yoast SEO sidebar in the Elementor editor and the block editor.
* Merges the `Exclude from News sitemap` and the `Googlebot-News index` settings from the News meta box into one setting: `Exclude this post from Google News`. Because both settings served the same purpose, to exclude your content from the News sitemap.
* Removes the `Default genre` setting from the News sitemap and settings because Google no longer supports `Genres` for articles in Google News.

#### Other

* Sets the WordPress tested up to version to 5.7 and minimum supported WordPress version to 5.6.

#### Bugfixes

* Fixes a bug where certain conditions (e.g. using a different admin language) would result in an endless loop.
* Fixes "mixed content" warnings on the News SEO options page.

## 12.6

Release date: 2020-08-18

#### Enhancements

* Adds 'Article' as `@type` to articles that are set to be included in the news sitemap. This results in a `@type` array with at least 'Article' and 'NewsArticle'.

#### Other

* Enables tracking when activating the plugin. It can be disabled in the Yoast SEO configuration wizard.
* Sets the minimum supported WordPress version to 5.4.

## 12.5

Release date: 2020-07-21

#### Other

* Sets the minimum WordPress version to 5.3.

## 12.4.1

Release date: 2020-01-14

#### Bugfixes

* Fixes a bug where a large number of WordPress terms or post types would cause significant slowdowns and possible crashes on admin pages.

#### Other

* Removes the code tags from the term and post type names on the News SEO settings page.

## 12.4

Release date: 2020-01-07

#### Bugfixes

* Fixes a bug where the sitemap could be invalidated twice on multisite with MultilingualPress.

#### Other

* Show dates in UTC+0 format everywhere.

## 12.3

Release date: 2019-11-27

#### Enhancements

* Replaces the HelpScout Beacon 1.0 on the News SEO admin page with the Beacon 2.0.

#### Bugfixes

* Fixes a bug where the News sitemap would contain the SEO title instead of the post title.

#### Other

* Sets the minimum required WordPress version to 5.2, the minimum PHP version to 5.6.20, and the minimum required Yoast SEO version to 12.6.1.

## 12.2

Release date: 2019-10-15

#### Enhancements

* Shows a floating `Save changes` button on the Yoast SEO News admin page when the normal button is not visible in the browser window.

#### Bugfixes

* Fixes a bug where the copyrightHolder schema piece would not stitch on Windows because of a missing slash.

#### Other

* Compatibility with Yoast SEO 12.2

## 12.1

Release date: 2019-09-17

#### Other

* Compatibility with Yoast SEO 12.1

## 12.0

Release date: 2019-09-03

#### Other

* Compatibility with Yoast SEO 12.0

## 11.9

Release date: 2019-08-20

#### Enhancements

* This add-on now has its own tab in the Yoast SEO metabox, even if you have multiple Yoast SEO add-ons installed.

#### Bugfixes

* Fixes a bug where the `@type` in the schema output would be `NewsArticle` instead of `Article` for articles which were excluded from the news sitemap.
* Fixes a bug where news article pages and custom post types included in the news sitemap would not receive an author in their schema output.

#### Other

* Sets the minimum required Yoast SEO version to 11.9.

## 11.8

Release date: 2019-08-06

#### Other

* Compatibility with Yoast SEO 11.8

## 11.7

Release date: 2019-07-23

#### Other

* Compatibility with Yoast SEO 11.7

## 11.6

Release date: 2019-07-09

#### Other

* Compatibility with Yoast SEO 11.6

## 11.5

Release date: 2019-06-25

#### Other

* Compatibility with Yoast SEO 11.5

## 11.4

Release date: 2019-06-12

#### Other

* Compatibility with Yoast SEO 11.4

## 11.3

Release date: 2019-05-28

#### Other

* Compatibility with Yoast SEO 11.3

## 11.2

Release date: 2019-05-15

#### Other

* Compatibility with Yoast SEO 11.2

## 11.1

Release date: 2019-04-30

#### Other

* Compatibility with Yoast SEO 11.1

## 11.0

Release date: 2019-04-16

#### Enhancements

* Schema: Adds Schema.org `NewsArticle` markup to all post types that you've selected as News.

#### Bugfixes

* Fixed Sitemap image URLs to use href instead of guid to prevent relative URLs in the Sitemap. Props to [ChristophKnopf](https://github.com/ChristophKnopf)

#### Other

* Sets the minimum required Yoast SEO version to 11.0.

## 10.1

Release date: 2019-04-02

#### Other

* Sets the minimum required Yoast SEO version to 10.1.
* Removes the deprecated methods ( &lt; 6.1 ).

## 10.0

Release date: 2019-03-12

#### Bugfixes

* Fixes a bug where the news sitemap would show a blank page due to an internal server error.

#### Other

* Compatibility with Yoast SEO 10.0

## 9.7

Release date: 2019-02-26

#### Enhancements

* Changes the titles in the news sitemap to default to the SEO title, with a fallback to the post title. (props: @timnolte)

#### Bugfixes

* Fixes a bug where it was possible the 48 hour selection range for posts in the news sitemap was slightly off. (props: @timnolte)

#### Other

* Compatibility with Yoast SEO 9.7

## 9.6.1

Release date: 2019-02-12

#### Other

* Compatibility with Yoast SEO 9.6.1

## 9.6

Release date: 2019-02-12

#### Other

* Compatibility with Yoast SEO 9.6

## 9.5

Release date: 2018-01-22

#### Other

* Compatibility with Yoast SEO 9.5

## 9.4

Release date: 2018-01-08

#### Bugfixes

* Fixes a bug where the last modified date for the sitemap index has been displayed with the wrong time zone.

#### Other

* Compatibility with Yoast SEO 9.4

## 9.3

Release date: 2018-12-18

#### Other

* Compatibility with Yoast SEO 9.3

## 9.2

Release date: 2018-11-20

#### Other

* Compatibility with Yoast SEO 9.2

## 9.1

Release date: 2018-11-06

#### Bugfixes

* Fixes a bug where a PHP warning would be displayed when `php_uname` has been disabled for security reasons.

#### Other

* Compatibility with Yoast SEO 9.1

## 9.0

Release date: 2018-10-23

#### Enhancements

* Allows term based exclusion in the news sitemap for all taxonomies connected to enabled post types.

#### Bugfixes

* Fixes a bug where terms with `show_ui` set to false would be shown in the list of terms to be excluded from the news sitemap.

#### Other

* Compatibility with Yoast SEO 9.0

## 8.4

Release date: 2018-10-09

#### Bugfixes

* Fixes a bug where the changelog would not show up when the plugin was updated.

#### Enhancements

* Makes it possible to exclude posts with post type 'post' from the the news sitemap.

#### Other

* Compatibility with Yoast SEO 8.4

## 8.3

Release date: 2018-09-25

#### Bugfixes

* Fixes a bug where the XML of the news sitemap would contain an incorrect publication time when the user would use a location-based timezone.
* Fixes a bug where posts with the post type of Post would always be included in the sitemap.

#### Other

* Compatibility with Yoast SEO 8.3

## 8.2

Release date: 2018-09-11

#### Other

* Compatibility with Yoast SEO 8.2

## 8.1

Release date: 2018-08-28

#### Other

* Compatibility with Yoast SEO 8.1

## 8.0

Release date: 2018-08-14

#### Other

* Compatibility with Yoast SEO 8.0

## 7.9.1

Release date: 2018-08-07

#### Other

* Compatibility with Yoast SEO 7.9.1

## 7.9

Release date: 2018-07-24

#### Bugfixes

* Fixes a bug where news posts set to no-index would still appear in the XML News Sitemap.

#### Other

* Compatibility with Yoast SEO 7.9

## 7.8

Release date: 2018-07-10

#### Other

* Removes functionality for original-source as Google has confirmed they're no longer using it.
* Compatibility with Yoast SEO 7.8

## 7.7

Release date: 2018-06-26

* Compatibility with Yoast SEO 7.7

## 7.6

Release date: 2018-06-05

#### Enhancements

* Removes support for standout tag.
* Removes support for editor's pick RSS.

#### Bugfixes

* Fixes a bug where the news image sitemap did not correctly handle protocol relative URLs.

## 7.5

Release date: 2018-05-15

* Compatibility with Yoast SEO 7.4

## 7.4

Release date: 2018-05-03

* Compatibility with Yoast SEO 7.4

## 7.3

Release date: 2018-04-17

* Compatibility with Yoast SEO 7.3

## 7.2

Release date: 2018-04-03

#### Enhancements

* Removes the use of meta news keywords everywhere as Google no longer supports them.
* Renews compatibility with the [Plugin Dependencies](http://wordpress.org/plugins/plugin-dependencies/) plugin.

#### Bugfixes

* Fixes a bug where the page link was missing on the plugin settings page.

#### Other

* Compatibility with Yoast SEO 7.2
* Adds warnings for deprecated functions.
* Security hardening.

## 7.1

Release date: 2018-03-20

* Compatibility with Yoast SEO 7.1

## 7.0

Release date: 2018-03-06

* Requires Yoast SEO 7.0 or higher to be installed.
* Moves each sitemap class to its own file instead of having multiple classes in one single file.

## 6.3

Release date: 2018-02-13

* Load the XSL stylesheet from a static file when home and site URL are the same.
* Compatibility with Yoast SEO 6.3

## 6.2.1

Release date: 2018-01-23

* Bump version to make sure it displays correctly in the plugin list.

## 6.2

Release date: 2018-01-23

* Compatibility with Yoast SEO 6.2

## 6.1

Release date: 2018-01-09

* Compatibility with Yoast SEO 6.1

## 6.0

Release date: 2017-12-20

#### Bugfixes

* Fixes a problem where the sitemap table could not be sorted.
* Compatibility with Yoast SEO 6.0

## 5.9

Release date: 2017-12-05

* Compatibility with Yoast SEO 5.9

## 5.8

Release date: 2017-11-15

* Compatibility with Yoast SEO 5.8

## 5.7

Release date: 2017-10-24

* Compatibility with Yoast SEO 5.7

## 5.6

Release date: 2017-10-10

#### Enhancements:

* Changes the capability on which the submenu is registered to `wpseo_manage_options`

#### Bugfixes:

* Fixes a bug where the license check endpoint was using an incorrect URL

## 5.5

Release date: 2017-09-26

* Updated the internationalization module to version 3.0.
* Compatibility with Yoast SEO 5.5

## 5.4

Release date: 2017-09-05

* Updated the internationalization module to version 2.0.
* Compatibility with Yoast SEO 5.4

## 5.3

Release date: 2017-08-22

* Compatibility with Yoast SEO 5.3

## 5.2

Release date: 2017-08-08

* Compatibility with Yoast SEO 5.2

## 5.1

Release date: 2017-07-25

* Fixes a bug where the wrong timezone was used in the sitemap.

## 5.0

Release date: 2017-07-06

* Adds post type name (attachment) after the label to clarify the post type.
* Fixes a fatal error when Piklist and Yoast News SEO are both active.
* Fixes a fatal error when Liveblog and Yoast News SEO are both active.
* Fixes a warning in the News sitemap when bbPress and Yoast News SEO are both active.

## 4.9

Release date: 2017-06-07

* Compatibility with Yoast SEO 4.9.

## 4.8

Release date: 2017-05-23

* Compatibility with Yoast SEO 4.8.

## 4.7

Release date: 2017-05-02

* Fixes a bug where there were a deprecated function was being called, resulting in a warning.

## 4.6

Release date: 2017-04-11

* Compatibility with Yoast SEO 4.6.

## 4.5

Release date: 2017-03-21

* Compatibility with Yoast SEO 4.5.

## 4.4

Release date: 2017-02-28

* Compatibility with Yoast SEO 4.4.

## 4.3

Release date: 2017-02-14

* Compatibility with Yoast SEO 4.3.

## 4.2.1

Release date: 2017-02-03

#### Bugfixes

* Fixes "Fatal error: Class 'yoast_i18n' not found".

## 4.2

Release date: 2017-01-31

#### Bugfixes

* Fixes a bug where a deprecated function was being called, resulting in a warning.

## 4.1

Release date: 2017-01-17

#### Bugfixes

* Fixes W3C validation error on &lt;link attribute 'original-source'.
* Fixed broken link in news sitemap.

## 4.0

Release date: 2016-12-13

* Compatibility with Yoast SEO 4.0

## 3.9

Release date: 2016-11-29

#### Bugfixes

* Fixes a bug where the editor's pick checkbox was reset after inline editing a post.

* Updates translations.

## 3.8

Release date: 2016-11-08

#### Bugfixes

* Fixes a bug where the editor's pick would be unset when quick editing.
* Fixes a bug where Google News would report an unexpected publication name in sitemaps.

* Updates translations.

## 3.7

Release date: 2016-10-11

* Updates translations

## 3.6

Release date: 2016-09-27

#### Enhancements

* General accessibility improvements.

## 3.5.1

Release date: 2016-09-16

#### Bugfixes

* Fixes a bug where a page or post type with the slug <em>news</em> would be inaccessible.

## 3.5

Release date: 2016-09-07

#### Bugfixes

* Fixes a bug where sitemaps would not be generated if a post with the same name existed.

## 3.4

Release date: 2016-07-19

#### Enhancements

* Introduced noindex meta tag for the Google News bot.

#### Bugfixes

* Sitemaps need a real timezone instead of a UTC timezone because daylight saving time is not included in UTC.
* Google News Genre global default could not be overridden by page setting.
* The news keyword counting, for a maximum of 10 keywords, no longer counts empty keywords.

## 3.3

Release date: 2016-06-14

#### Enhancements

* Adds the Yoast i18n module to the Yoast SEO News settings page, which informs users the plugin isn't available in their language and what they can do about it.

#### Bugfixes

* Fixes a bug where the support beacon for Yoast SEO News was added to all Yoast SEO settings pages.
* Fixes a bug where updates were not working reliably when multiple paid Yoast plugins were active.

## 3.2

Release date: 2016-04-20

#### Bugfixes

* Fixes a bug where the news sitemap would be shown in the index even if the sitemap itself was empty.
* Fixes a bug where clicking the 'Update now' button on the plugin page didn't update correctly.

## 3.1

Release date: 2016-03-02

#### Bugfixes

* Fixes a bug where our license manager could sometimes not reach our licensing system due to problems with ssl.

#### Enhancements

* Makes sure users don't have to reactivate their license after updating or disabling/enabling the plugin.
* Adds a support beacon on the News SEO settings page enabling users to ask for support from the WordPress backend.
* Contains a few performance optimizations.

## 3.0

Release date: 2015-11-18

* Synchronized plugin version with all other Yoast SEO plugins for WordPress.

#### Bugfixes

* Fixes a bug where the links in the sitemap would 'randomly' change from https to http or the other way around (in very rare circumstances).
* Fixes the news metabox that was broken in combination with Yoast SEO 3.0.
* Fixes deprecation warnings for filters that have been removed in Yoast SEO 3.0.

## 2.2.5

Release date: 2015-06-10

#### Bugfixes

* Fixes a bug where the news sitemap cache was not cleared when the News SEO settings were updated.
* Added 1 new translation: en_AU.

## 2.2.4

Release date: 2015-04-29

#### Bugfixes

* Fixes a bug where the news sitemap cache was not cleared when a news item was edited or added.
* Fixes a bug where the stylesheets for the news sitemap were not included when the sitemap was served from cache.
* Fixes a bug where specialchars were escaped in the news sitemap.

## 2.2.3

Release date: 2015-03-25

#### Bugfixes

* Fixes a bug where an invalid argument error could be raised when visiting the sitemap.
* Fixes a bug where the sitemap could contain wrongly formatted publication dates.
* Fixes a bug where the `wpseo_news_sitemap_url` filter wasn't working properly.
* Fixes a bug where the News sitemap genre wasn't saved on posts.
* Fixes a bug where the sitemap didn't always contain the correct image url, props [Marcus Jaschen](https://github.com/mjaschen).
* Fixes a bug with duplicate keywords in the news sitemap.
* Fixes an issue where the Editor's pick RSS took very long to load, by only fetching the selected post types from the database.
* Fixes a bug where the default keywords and the meta news keywords weren't added to the sitemap.

#### Enhancements

* Introduces a few string improvements.
* Added 9 new languages: en_GB, es_ES, es_MX, fr_FR, he_IL, it_IT, nl_NL, ro_RO and tr_TR.

## 2.2.2

Release date: 2014-12-17

* Bugfixes
* The stock tickers didn't work properly, these are fixed.
* Setting correct HTTP header to be sure output is executed as a RSS-feed.
* Enhancements
* Hide the standout meta-tag automatically after seven days (you can still see standout was used in admin but it won't be displayed)
* Show the total number of used standout meta-tags (for the last seven days) in the post-admin

## 2.2.1

Release date: 2014-11-11

#### Bugfixes:

* Fixed a bug where button to Editors' Pick RSS didn't work.
* Fixed a bug where the wrong image url ended up in the image:loc in the Editor's Pick RSS
* Fixed a bug where the wrong http header was set for the Editor's Pick RSS

#### Enhancements:

* Added translations for Polish

## 2.2

Release date: 2014-10-07

#### Bugfixes

* Fixed a bug where button to Editors' Pick RSS didn't work.
* Fixed bug where plugin would give a white screen of death in certain installations.
* Improve using the right image for the news sitemap.

#### Enhancements

* Added `pubDate` to editors pick RSS feed.

## 2.1

Release date: 2014-07-09

* Several performance optimizations for sitemap generation.
* Added button that links to news sitemap on admin page.
* Added an option to include only the featured image in the XML News sitemap.
* Introduced filter `wpseo_locale` for locale/language of the XML News sitemap.
* Introduced filter `wpseo_news_sitemap_url` to allow changing the XML News sitemap URL.

## 2.0.6

Release date: 2014-06-10

* Removed the wptexturize filter from the_title and the_content in the Editors' Pick feed because corrupts our output.
* Added guid elements to item elements in the Editors' Pick feed.
* Added an atom:link element as recommended by the RSS Advisory Board to identifying a feed's URL within the feed.
* Added the WPSEO News fields to the WPSEO meta fields class to fix a bug where the post meta genre field isn't saved.

## 2.0.5

Release date: 2014-06-05

* Fixed a publication_date timezone bug.

## 2.0.4

Release date: 2014-05-15

* Add CDATA tags to RSS feed text output.
* Now using the same title for the Editors' Pick title as the channel title.

## 2.0.3

Release date: 2014-04-23

* Sitemaps now use creation dates instead of modified dates.

## 2.0.2

Release date: 2014-04-22

* Fixed a bug with version_compare.
* Adds sanitize callback to register_settings.

## 2.0.1

Release date: 2014-04-22

* Changed EDD product name to 'News SEO'.

## 2.0

Release date: 2014-04-22

* Initial release
