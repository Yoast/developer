## 15.0

Release date: 2024-12-03

#### Bugfixes

* Fixes a bug where the _Open Search appearance_ button would not work.

#### Other

* Renames _Google Preview editor_ to _Search appearance_, reflecting how we call it in Yoast SEO.
* Sets the minimum required Yoast SEO version to 24.0.
* Sets the minimum supported WordPress version to 6.5.
* Sets the _WordPress tested up to_ version to 6.7.
* Stops PHP notices on WordPress 6.7 about `_load_textdomain_just_in_time` loading incorrectly.

## 14.9

Release date: 2024-05-28

#### Enhancements

* Enhances the `uploadDate` property of a `VideoObject` schema object, by turning it into a DateTime format instead of just Date, satisfying the newest recommendations for rich results.
* Introduces a new way of retrieving translations for Yoast Video SEO, by utilizing the TranslationPress service. Instead of having to ship all translations with every release, we can now load the translations on a per-install basis, tailored to the user's setup. This means smaller plugin releases and less bloat on the user's server.

#### Other

* Fixes support for embedded TED videos.
* Improves discoverability of the security policy.
* Makes required PHP extensions explicit.
* Renames all Twitter references to X.
* Sets the minimum required Yoast SEO version to 22.8.
* Sets the minimum supported WordPress version to 6.4.
* Sets the WordPress tested up to version to 6.5.
* Users requiring this package via [WP]Packagist can now use the `composer/installers` v2.

## 14.8

Release date: 2023-08-08

#### Enhancements

* Adds CLI command to index videos: `wp yoast video index`.

#### Bugfixes

* Fixes a bug where a warning would be thrown on pages embedding a video which had been visited more than 30 days ago.
* Fixes a bug where Wistia videos would not be displayed correctly in a responsive way via the FitVids setting and a console error about jQuery would be thrown.

#### Other

* Drops compatibility with PHP 5.6, 7.0 and 7.1.
* Sets the minimum required Yoast SEO version to 20.13.
* Sets the minimum supported WordPress version to 6.1.
* Sets the tested up to WordPress version to 6.3.

## 14.7

Release date: 2023-03-14

#### Enhancements

* Improves the inline documentation for various filters.
* Improves the usability of the `wpseo_video_{$type}_details` filter by adding a `$post_id` parameter.
* Improves the usability of the `wpseo_video_family_friendly` filter by allowing to return `false` if the video is not family friendly.

#### Bugfixes

* Fixes a bug where a PHP8 deprecation notice would be thrown for `FILTER_SANITIZE_STRING`.
* Fixes a bug where a Schema validation warning would be thrown about the `isFamilyFriendly` property in the `VideoObject` piece being set to a string instead of a boolean value.
* Fixes a bug where the link to the _XML sitemaps_ settings would be incorrect when _XML sitemaps_ were disabled.
* Fixes a bug where the _video title_ assessment and the _video body_ assessment would also appear under the Readability analysis tab when the Cornerstone content toggle would be switched on.

#### Other

* Improves the compatibility with PHP 8.1.
* Reduces noise from PHP 8.1 deprecations.
* Sets the minimum required Yoast SEO version to 20.3.
* Sets the minimum supported WordPress version to 6.0.
* Support for the [Flowplayer5](https://wordpress.org/plugins/flowplayer5/) plugin has been dropped as the plugin is no longer supported by the author.
* Support for the [JW Player for WordPress](https://wordpress.org/plugins/jw-player-plugin-for-wordpress/) plugin has been dropped as the plugin is no longer supported by the author.
* Support for the [Smart YouTube](https://wordpress.org/plugins/smart-youtube/) plugin has been dropped as the plugin is no longer supported by the author.
* Support for the [TubePress](https://wordpress.org/plugins/tubepress/) plugin has been dropped as the plugin is no longer supported by the author.

## 14.6
 
Release date: 2022-07-12

#### Enhancements

* Updates the Schema manipulation to follow the new best-practice for the `@id` of the `WebPage` piece introduced by Yoast SEO 19.3.

#### Other

* Sets tested up to WordPress version to 6.0.
* Sets the minimum required Yoast SEO version to 19.3.

## 14.5
 
Release date: 2022-05-06

#### Enhancements

* Removes the `video:category` property and the `allow_embed` attribute on the `player_loc` property following deprecation by Google.
* Removes the input fields for the video category.
* Removes the trailing commas in the `Tag` column of the sitemap.

#### Other

* Sets the minimum required Yoast SEO version to 18.8.

## 14.4
 
Release date: 2022-04-19

#### Bugfixes

* Fixes a bug where a `Only variables should be assigned by reference` PHP notice would be shown when accessing the RSS2 feed.
* Fixes a bug where PHP notices were thrown on pages with videos and no available `WP_Post` object.

#### Other

* Sets the minimum required Yoast SEO version to 18.6.
* Sets minimum required WordPress version to 5.8.

## 14.3
 
Release date: 2022-01-25

#### Enhancements

* Adapts the Video body assessment for Japanese so that it counts text length in characters instead of words and applies different length boundaries.

#### Other

* Bumps the minimum required Free version to 18.0.
* Sets the WordPress tested up to version to 5.9.

## 14.2
 
Release date: 2021-12-14

#### Other

* Ensure compatibility with Yoast SEO Free 17.8.
* Sets the minimum required Yoast SEO version to 17.8.

## 14.1
 
Release date: 2021-08-10

#### Bugfixes

* Fixes a bug where a duplicate Video section would be shown in the Yoast sidebar in the post editor when Yoast SEO Premium is active in combination with WP 5.8.

## 14.0
 
Release date: 2021-07-13

#### Enhancements

* Adds key/value pairs of all Video SEO meta tags to our REST API.
* Sets the minimum required Yoast SEO version to 16.7.

#### Other

* Sets the minimum required WordPress version to 5.6.
* Sets the minimum required Yoast SEO version to 16.7.

## 13.9
 
Release date: 2021-06-03

#### Bugfixes

* Fixes a bug where no play icon would be shown on embedded YouTube videos when the `YouTube embeds: make pages load faster by only loading the YouTube player when the user clicks play` feature was enabled.

## 13.8
 
Release date: 2021-04-06

#### Enhancements

* Adds `isPartOf` to the `VideoObject` Schema output, referencing either the `Article` or the `WebPage` schema.
* Changes the `uploadDate` format of the `VideoObject` Schema output to `yyyy-mm-dd`, removing the time component.

#### Other

* Sets the WordPress tested up to version to 5.7 and minimum supported WordPress version to 5.6.

## 13.7
 
Release date: 2021-02-23

#### Enhancements

* Adds Yoast Video SEO to the Yoast sidebar in Elementor.

## 13.6
 
Release date: 2021-02-10

#### Enhancements

* Changes the appearance of the Video metabox by implementing components that are used across all Yoast metaboxes.
* Adds the Video settings to the Yoast sidebar in the block editor.
* Makes the Video input for tags more intuitive.
* Introduces the 'YouTube embeds' option to make pages with YouTube videos load faster by only loading the video player when users click the play icon.

#### Other

* Adds a notification to inform users about changes in the settings.

## 13.5
 
Release date: 2020-01-12

#### Enhancements

* Adds a hook (`wpseo_video_supported_plugins`) to allow developers to add support for plugins not officially supported by Yoast. Props to [Ian Jenkins](https://github.com/jenkoian).
* Outputs "no description" when the video has no set description to prevent invalid videoObject schema.

## 13.4
 
Release date: 2020-10-27

#### Enhancements

* Wraps text fields in the XML sitemap in CDATA blocks, which prevents weird XML- and HTML entities from breaking the sitemap.
* Improves the copy for the disable Video checkbox in the Video SEO meta box.
* When a post already has a Facebook image, don't output the video image / still.

## 13.3
 
Release date: 2020-08-18

#### Other

* Enables tracking when activating the plugin. It can be disabled in the Yoast SEO configuration wizard.
* Sets the minimum supported WordPress version to 5.4.

## 13.2
 
Release date: 2020-07-21

#### Bugfixes

* Fixes a bug where a PHP warning would appear when the video is removed from a page without removing the manually assigned video thumbnail from the meta box.

## 13.1
 
Release date: 2020-05-13

#### Bugfixes

* Fixes a bug where a `last_fetched` tag would be output for videos in the video sitemap.

## 13.0
 
Release date: 2020-04-28

#### Enhancements

* No longer outputs an `og:video:secure_url` meta tag, because it would always be output next to a similar `og:video`.
* Changes the value of the `og:type` meta tag from `video.other` to the default `article` type on posts and pages containing a video.

#### Other

* Metadata for YouTube video embeds now gets refreshed every 30 days, to fix a compliance issue with the YouTube terms of service wherein public data may only be cached for a maximum of 30 days.
* Makes the `VideoObject` schema functionality compatible with the Yoast SEO 14.0.
* Sets the minimum supported Yoast SEO version to 14.0.
* Sets the minimum WordPress version to 5.3.

## 12.5
 
Release date: 2020-03-31

#### Enhancements

* Added inLanguage property to the VideoObject schema piece.

## 12.4.1
 
Release date: 2020-03-04

#### Bugfixes

* Fixes a bug where YouTube videos would not be recognized, which meant that they wouldn’t be included in the XML Video Sitemap and the video settings in the metabox wouldn’t be available. You can re-index your YouTube videos with the Re-Index Videos button in the Video SEO options.

## 12.4
 
Release date: 2020-01-07

#### Bugfixes

* Fixes a bug where the `ya:ovs:upload_date` meta tag would output an incorrect time.
* Fixes a bug where incorrect video metadata would be saved on multisite environments in combination with MultilingualPress.

## 12.3.1
 
Release date: 2019-11-27

#### Bugfixes

* Fixes a bug where a fatal error would be thrown when Yoast SEO was used in combination with another plugin or theme containing a class named `Date_Helper`.

#### Other

* Sets the minimum Yoast SEO version to 12.6.1.

## 12.3
 
Release date: 2019-11-26

#### Other

* Sets the minimum required WordPress version to 5.2, the minimum YoastSEO version to 12.6, and the minimum PHP version to 5.6.20.
* Replaces the HelpScout Beacon 1.0 on the Video SEO admin page with the Beacon 2.0.
* Fixes potential "Undefined index" notices when the RSS feed is being viewed.

## 12.2
 
Release date: 2019-10-15

#### Enhancements

* Shows a floating `Save Settings` button on the Yoast SEO Video admin page when the normal button is not visible in the browser window.

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

#### Other

* Sets the minimum required Yoast SEO version to 11.9.

## 11.8
 
Release date: 2019-08-06

#### Bugfixes

* Fixes a bug where the video title assessment and video body assessment were not loaded.

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

#### Enhancements

* Video SEO now uses Yoast SEO's new schema. [Read more about the schema output in our documentation](https://yoa.st/video-schema).

#### Bugfixes

* Fixes a fatal error in the editor when the FV Flowplayer Video Player plugin is active.

## 11.0
 
Release date: 2019-04-16

#### Other

* Compatibility with Yoast SEO 11.0

## 10.1
 
Release date: 2019-04-02

#### Other

* Sets the minimum required Yoast SEO version to 10.1.
* Removes the deprecated methods ( &lt; 6.1 ).

## 10.0
 
Release date: 2019-03-12

#### Other

* Compatibility with Yoast SEO 10.0

## 9.7
 
Release date: 2019-02-26

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
 
Release date: 2019-01-22

#### Other

* Compatibility with Yoast SEO 9.5

## 9.4
 
Release date: 2019-01-08

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

#### Other

* Compatibility with Yoast SEO 9.1

## 9.0
 
Release date: 2018-10-23

#### Other

* Compatibility with Yoast SEO 9.0

## 8.4
 
Release date: 2018-10-09

#### Bugfixes

* Fixes a bug where the changelog would not show up when the plugin was updated.

#### Other

* Compatibility with Yoast SEO 8.4

## 8.3
 
Release date: 2018-09-25

* Compatibility with Yoast SEO 8.3

## 8.2
 
Release date: 2018-09-11

* Fixes a bug where the video thumbnail would be used as the OpenGraph image instead of the image set in the Social Preview section, resulting in Facebook displaying the wrong image.
* Compatibility with Yoast SEO 8.2

## 8.1
 
Release date: 2018-08-28

* Compatibility with Yoast SEO 8.1

## 8.0.1
 
Release date: 2018-08-21

* Fixes a bug where a file was being referenced by an incorrect name, resulting in it never being loaded properly.

## 8.0
 
Release date: 2018-08-14

* Compatibility with Yoast SEO 8.0

## 7.9.1
 
Release date: 2018-08-07

* Compatibility with Yoast SEO 7.9.1

## 7.9
 
Release date: 2018-07-24

* Compatibility with Yoast SEO 7.9

## 7.8
 
Release date: 2018-07-10

* Compatibility with Yoast SEO 7.8

## 7.7
 
Release date: 2018-06-26

* Compatibility with Yoast SEO 7.7

## 7.6
 
Release date: 2018-06-05

* Compatibility with Yoast SEO 7.6

## 7.5
 
Release date: 2018-05-15

* Compatibility with Yoast SEO 7.5

## 7.4
 
Release date: 2018-05-03

* Compatibility with Yoast SEO 7.4

## 7.3
 
Release date: 2018-04-17

* Compatibility with Yoast SEO 7.3

## 7.2
 
Release date: 2018-04-03

* Security hardening.
* Compatibility with Yoast SEO 7.2

## 7.1
 
Release date: 2018-03-20

* Adds messages to all soft-deprecated methods, actions, hooks or filters. Added deprecation messages to four functions that didn't have a message yet.
* Compatibility with Yoast SEO 7.1

## 7.0
 
Release date: 2018-03-06

Copy:

* Changes activation warning to no longer suggest that activation failed, but rather that features won't be properly available as long as Yoast SEO is not active.

#### Other

* Requires Yoast SEO 7.0 or higher to be installed.
* Removes support for the [Vzaar video platform](https://vzaar.com/).
* Removes support for videos added through the following plugins and themes which are no longer available, no longer (actively) maintained or have been deprecated by the plugin author:
    * [Advanced YouTube Embed Plugin by Embed Plus](https://wordpress.org/plugins/embedplus-for-wordpress/)
    * [IFrame Embed for YouTube](https://wordpress.org/plugins/iframe-embed-for-youtube/)
    * [Instabuilder](https://instabuilder.com/v2.0/launch/)
    * [KISS Youtube plugin](https://wordpress.org/plugins/kiss-youtube/)
    * PluginBuddy VidEmbed
    * [Simple Video Embedder](https://wordpress.org/plugins/simple-video-embedder/)
    * [Sublime Video](https://wordpress.org/plugins/sublimevideo-official/)
    * [VideoJS - HTML5 Video Player for WordPress](https://wordpress.org/plugins/videojs-html5-video-player-for-wordpress/)
    * [VideoPress](https://wordpress.org/plugins/video/)
    * [Viper Video Quicktags](https://wordpress.org/plugins/vipers-video-quicktags/)
    * [Vippy](https://wordpress.org/plugins/vippy/)
    * [Vzaar Media Management](https://wordpress.org/plugins/vzaar-media-management/)
    * [Vzaar Official Media Manager](https://wordpress.org/plugins/vzaar-official-plugin/)
    * Weaver theme
    * [WordPress Video Plugin](https://wordpress.org/plugins/wordpress-video-plugin/)
    * WP OS FLV
    * [WP YouTube Player](https://wordpress.org/plugins/wp-youtube-player/)
    * [YouTube Insert Me](https://wordpress.org/plugins/youtube-insert-me/)
    * [YouTube Shortcode](https://wordpress.org/plugins/youtube-shortcode/)
    * [YouTube White Label Shortcode](https://wordpress.org/plugins/youtube-white-label-shortcode/)
    * [YouTube with Style](https://wordpress.org/plugins/youtube-with-style/)
    * [YouTuber](https://wordpress.org/plugins/youtuber/)
    * Premise
    * [WordPress Automatic Youtube Video Post](https://wordpress.org/plugins/automatic-youtube-video-posts/)

## 6.3
 
Release date: 2018-02-13

* Load the XSL stylesheet from a static file when home and site URL are the same.
* Compatibility with Yoast SEO 6.3

## 6.2
 
Release date: 2018-01-23

* Compatibility with Yoast SEO 6.2

## 6.1
 
Release date: 2018-01-09

* Compatibility with Yoast SEO 6.1

## 6.0
 
Release date: 2017-12-20

* Compatibility with Yoast SEO 6.0

## 5.9
 
Release date: 2017-12-05

#### Changes

* Removes deactivation of this plugin when Yoast SEO Premium is inactive.
* Compatibility with Yoast SEO 5.9

## 5.8
 
Release date: 2017-11-15

* Compatibility with Yoast SEO 5.8

## 5.7
 
Release date: 2017-10-24

* Compatibility with Yoast SEO 5.7.

## 5.6
 
Release date: 2017-10-10

#### Changes

* Changes the capability on which the submenu is registered to `wpseo_manage_options`
* Changes the way the submenu is registered to use the `wpseo_submenu_pages` filter

#### Bugfixes

* Fixes a bug where the license check endpoint was using an incorrect URL

## 5.5
 
Release date: 2017-09-26

* Updated the internationalization module to version 3.0.
* Compatibility with Yoast SEO 5.5.

## 5.4
 
Release date: 2017-09-06

* Compatibility with Yoast SEO 5.4.

## 5.3
 
Release date: 2017-08-22

* Fixes a call to a deprecated method when generating the video sitemap.
* Removed `wp_installing` polyfill.

## 5.2
 
Release date: 2017-08-08

* Compatibility with Yoast SEO 5.2.

## 5.1
 
Release date: 2017-07-25

* Fixes a bug where the `isFamilyFriendly` meta property is not set properly.

## 5.0
 
Release date: 2017-07-06

* Compatibility with Yoast SEO 5.0.

## 4.9
 
Release date: 2017-06-07

* Compatibility with Yoast SEO 4.9.

## 4.8
 
Release date: 2017-05-23

* Compatibility with Yoast SEO 4.8.

## 4.7
 
Release date: 2017-05-02

* Compatibility with Yoast SEO 4.7.

## 4.6
 
Release date: 2017-04-11

* Compatibility with Yoast SEO 4.6.

## 4.5
 
Release date: 2017-03-21

* Only invalidate sitemaps on configured post types.
* Fixes a bug where there was a fatal error thrown when the plugin was active without Yoast SEO or Yoast SEO Premium.

## 4.4
 
Release date: 2017-02-28

* Adds a minimum and maximum value to the video rating field.
* Adds the `og:video:secure_url` meta tag.

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

* Fixes translator comments that were missing or didn't follow the guidelines.

## 4.1
 
Release date: 2017-01-17

#### Bugfixes

* Fixes link to google article about video sitemaps.
* Fixes a bug where the video-seo menu would overwrite the go premium menu item.
* Fixes: If a post uses a custom title/description template with variables, the variables were not being replaced correctly for the Video sitemap.
* Minor spelling &amp; grammar fixes.
* If a video was previously detected, but the post type has since been excluded from VideoSEO, the video opengraph and schema tags would still be added to the front-end page. This has been fixed now.
* Fix case-sensitivity issues with video object meta tags.
* Minor XHTML syntax fix.

#### Enhancements

* Improves styling for notices.
* Minor improvements for compatibility with Yoast SEO.
* Minor UI improvements for buttons and translations.
* Add the video:duration tag to video page headers.
* Clarify what effect the option to allow videos to be embedded by other sites has.
* Clarify the description of the "Family Friendly" option used in the metabox.
* Improve support for the Yandex search engine by adding some Yandex specific tags. This can be turned off using the new wpseovideoyandex_support filter (return false to turn it off).
* Allow for adding additional schema meta tags - such as transcript to a video object using the new wpseovideoobjectmetacontent filter.
* Clarify the description for the family friendly checkbox.

## 4.0
 
Release date: 2016-12-13

* Fixes the YouTube video player URL to always use a protocol. This solves issues where the Google invalidates the sitemap and where Facebook does not recognize the player. (needs force re-index for existing posts)

## 3.9
 
Release date: 2016-11-29

#### Enhancements

* Added support for the additional Wistia video urls and embed codes. If you use the Wistia video service, re-indexing your videos is highly recommended.
* Added fallback for the detail retrieval of private Vimeo videos. This will allow these to be recognized. (needs force re-index for existing posts).
* Added recognition of //player.vimeo.com/... type URLs. (needs force re-index for existing posts).
* Change the 'og:type' meta value to the more accurate 'video.other'.
* Change the 'og:video:type' meta value HTML5 which is now more accurate than Flash in most cases.
* Minor improvements in behaviour when installed on WP multi-site.

#### Bugfixes

* Fixed the YouTube video player URL. This should solve black screens and/or "Unable to resolve DNS" errors when embedding videos on Facebook and other sites. (needs force re-index for existing posts)
* Updated the Vimeo video player URL to the new HTML5 player format (with Flash fallback). This should solve black screens and/or "Unable to resolve DNS" errors when embedding these videos on Facebook and other sites. (needs force re-index for existing posts).

## 3.8
 
Release date: 2016-11-08

#### Enhancements

* The wpseo_sitemaps_base_url filter will now be respected by the VideoSEO plugin.
* Makes the oEmbed recognition compatible with the upcoming WP 4.7.

#### Bugfixes

* Fixes a fatal error when adding a YouTube video.
* Fixes a bug where adding a video in a custom post type would show an undefined index.
* Fixes support for Advanced Responsive Video Embedder plugin.
* Fixes a bug where the sitemap had the wrong style when a custom post type 'video' exists.
* Makes sure that the video sitemap will be available as soon as this plugin is activated and unavailable after deactivation.
* Fixes "Disable video for this post" per-post setting not being respected for the og: meta tags which led to Facebook still displaying the video even if the video for the post was disabled.
* If an invalid date is encountered for the publication date of a video post, the publication date will be re-evaluated.
* If a video post title or content/excerpt is - or has been - updated, this will now be reflected in the sitemap and the video meta data. (needs force re-index for existing posts)
* If a video post SEO title or SEO description is - or has been - added/adjusted, this will now be reflected in the sitemap. (needs force re-index for existing posts)
* If a SEO description template had been set for the post type which includes the video, this will now be respected. (needs force re-index for existing posts)
* If a video post was first saved as draft and only published later, the publication date would be stuck on the draft date in the sitemap, this has been fixed. (needs force re-index for existing posts)
* The "Force re-index" functionality was broken with the implementation of the progress bar. This has now been fixed. Checking the "Force re-index" checkbox will now work again as expected, including the regeneration of thumbnails.
* The "Re-index" functionality did not properly respect the post types to be indexed for the Video sitemap as set on the VideoSEO settings page, which unintentionally led to fewer items being re-indexed than they should. This has now been fixed.
* The re-index functionality has been made more efficient and should now - for the same number of posts - be faster.
* The sitemap cache was not automatically cleared after a re-index. This has now been fixed.

## 3.7
 
Release date: 2016-10-11

#### Enhancements

* Added iframe-based support for uStudio videos.
* Added missing index.php files.

## 3.6
 
Release date: 2016-09-27

#### Enhancements

* General accessibility improvements.

## 3.5
 
Release date: 2016-09-07

#### Changes

* Adds support for Featured Video Plugin, props [ahoereth](https://github.com/ahoereth)

## 3.4
 
Release date: 2016-07-19

#### Changes

* Updated translations.

## 3.3
 
Release date: 2016-06-14

#### Enhancements

* Adds the Yoast i18n module to the Yoast SEO Video settings page, which informs users the plugin isn't available in their language and what they can do about it.
* Bugfixes
* Fixes a bug where the support beacon for Yoast SEO Video was added to all Yoast SEO settings pages.
* Fixes a bug where updates were not working reliably when multiple paid Yoast plugins were active.

## 3.2
 
Release date: 2016-04-20

* Fixes a bug where the video sitemap cache wasn't cleared on activation.
* Fixes a bug where video specific checks that were added to the content analysis would no longer work in combination with Yoast SEO 3.2 and higher.
* Fixes a bug where clicking the 'Update now' button on the plugin page didn't update correctly.

## 3.1
 
Release date: 2015-03-01

#### Bugfixes

* Fixes a JS error on the post edit page causing the content analysis to break in combination with Yoast SEO versions higher than 3.0.7.
* Fixes a bug where our license manager could sometimes not reach our licensing system due to problems with ssl.

#### Enhancements

* Makes sure users don't have to reactivate their license after updating or disabling/enabling the plugin.
* Adds a support beacon on the Video SEO settings page enabling users to ask for support from the WordPress backend.

## 3.0
 
Release date: 2015-11-18

* Synchronized plugin version with all other Yoast SEO plugins for WordPress.

#### Bugfixes

* Fixes a fatal error that could occur while reïndexing the video sitemap.
* Fixes the video metabox that was broken in combination with Yoast SEO 3.0.
* Fixes deprecation warnings for filters that have been removed in Yoast SEO 3.0.

#### Enhancements

* Makes sure video specific content analysis checks work well with the Real Time content analysis tool in Yoast SEO 3.0.

## 2.0.4
 
Release date: 2015-06-23

#### Bugfixes

* Fixes a bug where https YouTube URLs weren't recognized.
* Fixes a bug where the sitemap cache wouldn't be cleared when saving options.
* Changed to the YouTube v3 API, making the YouTube integration work again.
* Fixes a bug where the scrollbar wouldn't get the right color.

## 2.0.3
 
Release date: 2015-03-25

#### Bugfixes

* Fixes a bug where the video sitemap could contain wrongly formatted date times.
* Fixes an undefined index notice for the $post global that was fired when creating a new product in WooCommerce.
* Fixes a bug where title variables weren't parsed well in the Video Sitemap.
* Fixes a bug where the video thumbnails were saved without an extension.

#### Enhancement

* Added 5 new languages: en_GB, es_MX, fr_FR, nl_NL and tr_TR.

## 2.0.2
 
Release date: 2014-12-17

#### Bugfixes:

* Fix for notice on the snippet preview

#### Enhancements

* Showing progress bar on re-indexing the video sitemap

## 2.0.1
 
Release date: 2014-11-11

#### Bugfixes

* Fixed: Vixxy shortcode/url combi not recognized
* Fixed: Missing stylesheet error
* Fixed: Limiting issue on sitemap

#### Enhancements

* Added translations for Persian and Brazilian Portuguese
* Removed translations for French, Dutch and Swedish. If you would like to help translate these languages, please sign up at translate.yoast.com!
* Improved translations for Danish, German, Hungarian and Italian

## 2.0
 
Release date: 2014-10-07

#### Bugfixes

* Fixed: shortcode list would often not be reset properly.
* Fixed: escaped shortcodes would still be searched for video.
* Fixed: no name shortcode attributes wouldn't always be recognized.
* Fixed: Flickr video detail retrieval was failing, SSL now required.
* Fixed: Compatibility issue between support for the [JW Player](https://wordpress.org/extend/plugins/jw-player-plugin-for-wordpress/) plugin and fitvids.js.
* Fixed: only the first shortcode found would be checked to see if it was a video shortcode, then it would fall back to other methods, now all shortcodes are checked until a video shortcode is found. If none is found, it will still fall back to other methods of finding video.
* Fixed: small regression where wordpress.tv video details would not always be retrieved.
* Fixed: `[videopress]` shortcode - while supported by plugins - was still not recognized.
* Fixed: regression where numeric video ids would sometimes prevent video detail retrieval.
* Fixed: most of vidyard detail retrieval failed.
* Fixed: bug where content of the last recognized meta field would overrule earlier found information.
* Fixed: bug where a meta field containing a mixture of html/text and a url at the end could be accepted as content_loc.
* Fixed: the VideoSEO plugin would auto-de-activate on an upgrade of WPSEO. This should no longer happen.

#### Enhancements

* Added support for recognizing video attachments without additional plugins.
* Added support for recognizing `.ogv` files as video files.
* Added support for custom Wistia domains.
* A lot more video URLs will be recognized as such.
* Better support for protocol-less urls all round.
* Add Video SEO menu item to the admin bar
* WP 4.0 removes oembed support for Viddler videos as [Viddler no longer supports free personal accounts](https://gigaom.com/2014/02/07/viddler-gets-ready-to-delete-personal-videos/). For those users who still use Viddler, Video SEO will continue to support both the OEmbedding as well as - of course - the SEO aspect.

#### Supported services

* Added support for 23Video videos (retrieval of video details).
* Added support for Archive.org videos (retrieval of video details).
* Added support for CollegeHumor.com videos (retrieval of video details).
* Added support for Funnyordie.com videos (retrieval of video details - unfortunately this does not (yet) work for short urls).
* Added support for Hulu.com videos (retrieval of video details).
* Added support for Revision3 videos (retrieval of video details).
* Added support for TED videos (retrieval of video details).
* Added support for VideoJug videos (retrieval of video details).
* Added support for Snotr videos via Embedly (limited video details).
* Added support for Spike.com/IFilm videos via Embedly (retrieval of video details).
* Added support for Vine videos via Embedly (retrieval of video details).
* If no video detail retrieval is available, Embedly will be used to try and retrieve details anyway.
* Much improved support for uploaded/locally hosted videos (retrieval of video details).
* Improved support for YouTube (country) sub-domains and alternative protocols (httpvhd, httpvhp, youtube::). Removed support for audio-only embeds as, well, audio is not video.
* Improved support for Animoto videos (recognition of urls).
* Improved support for Blip.tv videos (improved recognition leading to better retrieval of video details).
* Improved support for Dailymotion.com videos (recognition of short urls).
* Improved support for Flickr videos (recognition of short urls and better retrieval of video details).
* Improved support for Viddler videos (retrieval of video details).
* Improved support for VideoPress and WordPress.tv (retrieval of video details).
* Improved support for Vimeo videos (url recognition and retrieval of video details).
* Improved support for Vzaar videos (url recognition and retrieval of video details).
* Improved support for Wistia videos (recognition of urls and retrieval of video details).
* Slightly improved support for YouTube videos (retrieval of video details).

#### Supported plugins

* Added support for the [Flowplayer HTML5](https://wordpress.org/plugins/flowplayer5/) plugin.
* Added support for the [JetPack](https://wordpress.org/plugins/jetpack/) plugin shortcodes module.
* Added support for the [VideoPress](https://wordpress.org/plugins/video/) plugin.
* Added support for the [YouTube Embed Plus](https://wordpress.org/plugins/youtube-embed-plus/) plugin.
* Improved support for the [Advanced Responsive Video Embedder](https://wordpress.org/plugins/advanced-responsive-video-embedder/) plugin - a large number of shortcodes were not recognized.
* Improved support for the [IFrame Embed for YouTube](https://wordpress.org/extend/plugins/iframe-embed-for-youtube/) plugin - shortcode was not recognized.
* Improved support for the [Simple Video Embedder](https://wordpress.org/plugins/simple-video-embedder/) plugin - shortcode was recognized, better handling of custom fields.
* Improved support for the [Sublime Video](https://wordpress.org/extend/plugins/sublimevideo-official/) plugin - not all possible video sources were recognized.
* Improved support for the [TubePress](https://wordpress.org/extend/plugins/tubepress/) plugin - added Vimeo support.
* Improved support for the [Viper Video Quicktags](https://wordpress.org/extend/plugins/vipers-video-quicktags/) plugin - a large number of shortcodes were not recognized.
* Improved support for the [WP Video Lightbox](https://wordpress.org/extend/plugins/wp-video-lightbox/) plugin - thumbnail image was not supported.
* Improved support for the [WP YouTube Player](https://wordpress.org/extend/plugins/wp-youtube-player/) plugin - added support for id instead of url and for width, height attributes.
* Improved support for the [YouTuber](https://wordpress.org/extend/plugins/youtuber/) plugin - shortcode was not supported.
* Improved support for the [YouTube Embed](https://wordpress.org/extend/plugins/youtube-embed/) plugin - alternative protocols recognition.
* Improved support for the [YouTube with Style](https://wordpress.org/extend/plugins/youtube-with-style/) plugin - playlist syntax would break support.
* Removed support for the [Better Youtube Embeds](https://wordpress.org/extend/plugins/dirtysuds-embed-youtube-iframe/) plugin as the plugin functionality is now included in WP core and the plugin is no longer active.
* Removed support for the [Instabuilder](https://instabuilder.com/) plugin.
* Removed explicit support for the Premise plugin.
* Removed explicit support for the [Youtube Brackets](https://wordpress.org/extend/plugins/youtube-brackets/) plugin as the plugin hasn't been updated in eight years.

#### Other

* Minimum requirement for WP now 3.6.
* Added license information
* Applied some best practices

## 1.7.2
 
Release date: 2014-07-17

* Fix added whitespace after content cause in 1.7 update.

## 1.7.1
 
Release date: 2014-07-15

* Fix error in update caused by missing the version number update in 1.7.

## 1.7
 
Release date: 2014-07-14

#### Bugfixes

* Fixed: bug where `$content` would be empty for an `mrss_item`.
* Fixed: minor bug in upgrade routine.
* Fixed: bugs in Animoto and Screenr oembed provider addition.
* Fixed: issue with sitemap errors when conflicting http protocols were given.
* Fixed: video sitemap could show in sitemap index even when no posts with videos were found.
* Fixed: video description generated from content could break off in the middle of a word or html entity.
* Fixed: error on plugin activation.
* Fixed: sitemap conflict when a custom post type named 'video' would exist.
* Fixed: issue where durations would not be shown correctly in the metabox/

#### Enhancements

* Add oembed support for wistia.net domain and wistia protocol-relative urls.
* Moved language file loading to the init hook to allow for translation overloading.
* Improved clean-up of uploaded files.
* Update snippet preview to use latest Google design changes in line with the earlier update to WP SEO. This fixes the javascript error some people were experiencing.
* Auto-deactivate plugin in circumstances that it can't work.
* Increased size of YouTube thumbnail image being retrieved.

## 1.6.3
 
Release date: 2014-03-31

#### Bugfixes

* Fixed a warning for a missing variable in sanitize_rating.

## 1.6.2
 
Release date: 2014-03-17

#### Bugfixes

* Fixed a warning for a missing variable.
* Updated Fitvids.js to fix some issues with it.

#### Enhancements

* Fitvids will now be included unminified when `SCRIPT_DEBUG` is on.

## 1.6.1
 
Release date: 2014-03-11

#### Bugfixes

* Fix wrong boolean check.

## 1.6
 
Release date: 2014-03-11

Compatibility with WPSEO 1.5 and implementation of the same options & meta philosophy.

#### Bugfixes

* Fixed: Non-static methods should not be called statically
* Fixed: noindex setting wasn't being respected properly
* Fixed: some inconsistent admin form texts
* Fixed: Warning when loading new post.
* Fixed: Always re-validate license key on change.

#### i18n

* Updated .pot file
* Updated it_IT

## 1.5.5.1

Release date: 2013-11-23

#### Bugfixes

* Make sure thumbnail image is available.
* Move initialisation of plugin to earlier hook to make sure it's there when XML sitemap is generated.

## 1.5.5
 
Release date: 2013-11-22

#### Bugfixes

* Remove dependency on `WPSEO_URL` constant.
* Fix use of wrong image in OpenGraph and Schema.org output when a thumbnail is manually selected.
* Restore `$shortcode_tags` to original after `index_content()`.

#### Enhancements

* Use media uploader to change video thumbnail.
* Add setting to allow video playback directly on Facebook (defaults to on).

## 1.5.4.6
 
Release date: 2013-09-20

#### Bugfixes

* Prevent warning on line 4169, for unset video taxonomies.
* Prevent issues with custom fields that have spaces in their keys.
* Added support for more Dailymotion URLs.

#### Enhancements

* Remove CDATA in favor of proper encoding of entities.
* Force 200 status codes and proper caching on both video sitemap XML and XSL.
* Add support for WP YouTube Lyte shortcode.

#### i18n

* Renamed wpseo-video.pot to yoast-video-seo.pot
* Updated fr_FR
* Added hu_HU

## 1.5.4.5

Release date: 2013-09-06

* To make best use of the new features in this update, please reindex your videos.
#### Bugfixes

* Several i18n namespace fixes.
* Make video's in taxonomy descriptions pick up properly again.
* Fix for Wistia popover embeds and Wistia https URLs.
* Prevent output of hd attribute for video's in XML Video sitemap.
* Make sure opengraph image is always set to "full" size.
* Add width and height for Youtube vids.
* Prevent notice in sitemap when video from taxonomy term is displayed.
* Prevent wrong or empty dates in XML video sitemap.

#### Enhancements

* Add option to manually add tags per video.
* Add option to override video category (normally defaults to first post category).
* Order videos in XML video sitemap by date modified, ascending.
* Add "proper" Facebook video integration.
* Added support for [Advanced Responsive Video Embedder](https://wordpress.org/plugins/advanced-responsive-video-embedder/).
* Added support for muzu.tv.
* Allow for custom fields that hold arrays to be detected too.
* Add support for custom Vimeo URLs. (eg [https://vimeo.com/yoast/video-seo](https://vimeo.com/yoast/video-seo))
* Make sure the video thumbnail is always put out as an og:image too.
* Added support for Instabuilder video shortcodes
* Added support for Vidyard
* Set license key with a constant
* Added support for Cincopa
* Added support for Brightcove
* Added support for videos in the 'Archive Intro Text' (Genesis) in the video sitemap
* Added support for WP OS FLV plugin
* Added support for [Wordpress Automatic Youtube Video Post](https://wordpress.org/plugins/automatic-youtube-video-posts/)

## 1.5.4.4

Release date: 2013-09-05

#### Bugfixes

* Spaces in custom fields settings are now properly trimmed.
* Fix for Vzaar URLs.
* Wistia embed with extra classes now properly detected.

#### Enhancements

* Video sitemap now adheres to same pagination as post sitemap.
* Add initial Screenr support.
* Video XML Sitemap date now properly retrieved from last modified post with movie.

## 1.5.4.3

Release date: 2013-09-04

#### Enhancements

* Add support for `fvplayer` shortcode.
* Add option to manually change or enter duration.

## 1.5.4.2

Release date: 2013-09-03

#### Bugfixes

* Properly allow normale meta description length when video has been disabled for post.

#### Enhancements

* Added option to disable RSS enhancements, to prevent clashes with podcasting plugins.

## 1.5.4.1

Release date: 2013-09-02

* Move loading of the plugin to prio 20, in line with upgrades of the core WordPress SEO plugin.

## 1.5.4

Release date: 2013-09-01

#### Enhancements

* Added support for [fitvids.js](https://fitvidsjs.com/), enable it in the Video SEO settings to make your Youtube / Vimeo / Blip.tv / Viddler / Wistia videos responsive, meaning they'll become fluid. This might not work with all embed codes, let us know when it doesn't work for a particular one.
* Removed the ping functionality as that's fixed within the core plugin.
* Added code that forces you to update WordPress to 3.4 or higher and the WordPress SEO plugin to 1.4 or higher to use the plugin.

#### Bugfixes

* Fixed a bug that would prevent the time last modified of the video sitemap to update.

## 1.5.3

Release date: 2013-08-01

#### Enhancements

* Improved defaults: now enables all public post-types by default on install.
* Option to change the basename of the video sitemap, from video-sitemap.xml to whatever-sitemap.xml by setting the `YOAST_VIDEO_SITEMAP_BASENAME` constant.
* If post meta values are encoded, the plugin now decodes them.

#### Bugfixes

* No longer override opengraph image when one has already been set.
* Add extra newlines before video schema to allow oEmbed to work.
* No longer depends on response from Vzaar servers to create sitemap, properly uses the referer to authenticate requests and adds option in settings to add your Vzaar CNAME.
* When there's a post-type with the slug `video`, the plugin now automatically changes the basename to `yoast-video`.
* No longer print empty `&lt;p&gt;` for empty description in meta box.
* Improve logic whereby "this image" link is shown correctly and only when the video thumb is not overridden.

## 1.5.2

Release date: 2013-06-01

#### Enhancements

* Added support for Vzaar video's, embedded with either iframe, object embed or shortcode through 1 of 2 plugins.
* Added TubePress support.

#### Bugfixes

* Wistia.net support added (not just .com).
* Fixed bug in parsing youtube_sc shortcodes.

## 1.5.1

Release date: 2013-05-01

#### Bugfixes

* Improved activation.

#### Enhancements

* Add support for titan lightbox.
* Prevented some notices.

## 1.5

Release date: 2013-04-01

#### Bugfixes

* Make `mrss_gallery_lookup` public to prevent notices.
* Fix some forms of object detection for youtube and others.
* Fix detection of `[video]` shortcodes.

#### Enhancements

* Allow deactivation of license key so it can be used on another domain.
* Add link to detected thumbnail on video tab.
* Changed text-domain from `wordpress-seo` to `yoast-video-seo`.
* Made sure all the strings are translateable.
* Touch up admin sections styling.

#### i18n

* You can now translate the plugin to your native language should you need a translation, check [translate.yoast.com](https://translate.yoast.com/projects/yoast-video-seo) for details.
* Changed text-domain from `wordpress-seo` to `yoast-video-seo`.
* Added .pot file to repository.
* Added Dutch translation.

## 1.4.4

Release date: 2013-01-02

#### Bugfixes

* Prevent issues with content_width global.
* Prevent trying to activate an already activated license.
* Prevent a notice for custom fields.
* A fix for wistia popover embeds.

#### New features

* Add PluginBuddy VidEmbed support.

## 1.4.3

Release date: 2012-12-02

#### Bugfixes

* Now matches multiple iframes / objects on a page.
* Fix several bugs where embeds without quotes around the URL wouldn't be recognized.

#### New features

* Added an option to set the content width for your theme if your theme doesn't set it.
* Added support for Sublime video and its official WordPress plugin.
* Added SEO &amp; oEmbed support for Animoto.
* Added ping for Bing with the video sitemap.
* Added a bunch of supported plugins &amp; shortcodes for YouTube embeds.

## 1.4.2

Release date: 2012-11-02

#### Bugfixes / enhancements

* Try to prevent timeout on license validation.
* Clean up of a lot of regexes in the plugin.
* Prevent relative image URL paths and images set as just 'h'.
* Prevent double output of posts.
* Fixed small bug that would prevent youtube URLs with the video ID in a weird place in the URL from working.
* Improve Wistia embed support.
* Lengthen timeout for video info requests.

#### New features

* Added support for html5 video elements (d'0h!).
* Add support for [vimeo id= and [youtube id= embed codes
* Added support for self-hosted videos with just a file URL in custom field. In these cases the featured image is used as thumbnail.
* Added generic fallback to post thumbnail image if there is no video thumbnail.

## 1.4

Release date: 2012-11-01

#### Bugfixes / enhancements

* Fix Vimeo embed detection.
* Switch Vimeo to oEmbed API.
* When available, use html5_file for jwplayer embeds.

#### New features

* Added video content optimization tips in the page analysis tab of WordPress SEO.
* Added support for WP Video Lightbox plugin.
* Added initial support for Flowplayer plugin.
* Added support for Wistia video hosting platform.
* Added support for Vippy video hosting platform (thanks to Ronald Huereca).
* Added support for shortcodes from Weaver theme.

## 1.3.4

Release date: 2012-10-05

#### Bugfixes

* Fixed Viddler check.
* Fix strip tags for videoObject output.
* Don't filter content when in a feed.
* Improve parsing of VideoPress embed ID's.

#### Enhancements

* Added support for checking custom fields for video's.
* Added support for Press75's Simple Video Embedder (and thus for all their themes).

## 1.3.3

Release date: 2012-10-04

#### Bugfixes

* Properly catch thumbnail images when the path is relative instead of absolute.
* Strip shortcodes for plugins that don't register them properly as well.
* Prevent empty titles.
* Wrap XML sitemap and MediaRSS textual content in CDATA tags, this solves about 900.000 issues with encoding.
* Fixed [Veoh](https://www.veoh.com/) support.

#### Enhancements

* When a post is in more than one category, the excess categories are now used as tags.
* Don't print sitemap lines for video's that have no thumbnail and either a content location or a player location.
* If the description and excerpt are empty, use the title for the description, as an empty description is invalid.
* Changed the name of the family friendly variable, so it can't go "wrong" with old data.
* Added support for the `video:uploader` tag. This automatically links to the post authors posts page.
* Make terms use their own name as category in XML sitemap.
* Added support for jwplayer shortcode embeds with file and image attributes instead of mediaid.
* Added support for the [WordPress Video Plugin](https://wordpress.org/extend/plugins/wordpress-video-plugin/).
* Added support for the [MediaElements.js](https://wordpress.org/extend/plugins/media-element-html5-video-and-audio-player/) plugin.
* Added support for the [WP YouTube Player](https://wordpress.org/extend/plugins/wp-youtube-player/) plugin.
* Added support for the [Advanced YouTube Embed Plugin by Embed Plus](https://wordpress.org/extend/plugins/embedplus-for-wordpress/) plugin.
* Added support for the [VideoJS - HTML5 Video Player for WordPress](https://wordpress.org/extend/plugins/videojs-html5-video-player-for-wordpress/) plugin.
* Added support for the [YouTube Shortcode](https://wordpress.org/extend/plugins/youtube-shortcode/) plugin.

## 1.3.2

Release date: 2012-10-03

#### Bugfixes

* Fix XSLT URL issue, for real this time. Sometimes you have to ignore WordPress internals because they are just<br />plain wrong. This is such a time. The path to the XSL file should now always be correct. Note the word "should"<br />though.
* Improve matching of Youtube ID's, apparently those can contain underscores too.
* Improve the reindexing process by running through consecutive loops of 100 posts, to avoid memory issues.
* Fixed very annoying bug where video's would be mark as non-family-frienldy by default.
* Force view count to be an integer.

#### Enhancements

* Switched around the logic for family friendliness. It now assumes all video's are family friendly by default and<br />you have to check the box to make it NON family friendly.

## 1.3.1

Release date: 2012-10-02

#### Bugfixes

* Prevent relative paths to images
* Prevent post_id from showing up in XML Video Sitemap
* Fix wrong URL to XSLT

#### Enhancements

* Added support for [JW Player Plugin](https://wordpress.org/extend/plugins/jw-player-plugin-for-wordpress/) embeds (only embeds with `mediaid=&lt;number&gt;` will work for now).

## 1.3

Release date: 2012-10-01

#### Bugfixes

* Even more YouTube embed fixes, also fixes empty Youtube ID issue.
* Properly grab thumbnail from YouTube instead of "assuming" a URL.
* Improve code that grabs duration from YouTube API.

#### Enhancements

* Add support for searching through category / tag / term descriptions for video content.
* Get viewcount from YouTube API.
* Add option to hide sitemap from everyone except admins and Googlebot.
* Add option to disable the video integration on a single post and page by adding a checkbox on the Video tab.
* Changed the way reindex gets called, so the admin keeps working immediately after a reindex without a refresh.
* Added option to force reindexing of old posts that have already been indexed as having video (normally<br />they're just refreshed but no external calls are being done).

## 1.2.2

Release date: 2012-09-03

#### Bugfixes

* Properly work with [youtube]video-id[/youtube] type embed shortcodes.

#### Enhancements

* Option to only show the XML video sitemap to admins and to googlebot, not to any other visitors. This prevents<br />other visitors from downloading your video files.

## 1.2.1

Release date: 2012-09-02

#### Bugfixes

* Properly works with index.php URLs.
* Sends right URL for video sitemap on Google ping at all times.
* Correctly clean up video descriptions &amp; tags for display in the XML sitemap.

#### Enhancements

* Added support for Smart Youtube Pro.
* Added support for Viddler iframe embeds.
* Added support for youtu.be oEmbeds.
* Preliminary Brightcove support.

## 1.2

Release date: 2012-09-01

* The Video tab in the meta box now works, so you can change the preview image.
* The plugin now adds full support for the videoObject schema.
* Several fixes to video recognition, especially for youtube iframe embeds, be sure to click re-index on the Video SEO page if you have those.

## 1.1

Release date: 2012-09-01

* This version should work better on activation.
* The plugin settings are now moved into its own SEO -&gt; Video SEO admin page and out of the XML Sitemaps page.
* The plugin now recognizes youtube and vimeo embeds with an object tag or an iframe, to use this just click reindex video's.
* Improved the snippet preview date display.
* Fixed a few notices.

## 1.0

Release date: 2012-04-16

* Initial version
