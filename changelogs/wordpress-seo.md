= 21.9 =

Release date: 2024-01-23

We've just released Yoast SEO 21.9. This release comes with many behind-the-scenes improvements and general enhancements. Find out more about what's new in Yoast SEO 21.9 in [our release post](https://yoa.st/release-23-1-24)!

#### Enhancements

* Adds a filter to add images to the front page in sitemaps.
* Adds a filter to allow adding images to terms in sitemaps.
* Clears rewrite rules only for the strip category base option.
* Removes the clearing of rewrite rules on every option update.
* Replaces the sitemap rewrite rules mechanism, props to [felixarntz](https://github.com/felixarntz).

#### Bugfixes

* Fixes a bug where a post would be saved when trying to dismiss a notification while editing.
* Fixes a bug where editing a product would either crash or be slow when there is a high number of registered attributes.
* Fixes a bug where the Yoast plugin icon in the block editor would not have any horizontal spacing anymore when rendered in "compact" mode.

#### Other

* Be explicit about required PHP extensions.
* Improves PHP 8.2 compatibility.
* Sets the minimum supported WordPress version to 6.3.

= 21.8.1 =

Release date: 2024-01-19

#### Bugfixes

* Fixes a bug where our block editor integration would no longer work together with Gutenberg 17.4.1.
* Fixes a bug where our block editor integration would no longer work together with Gutenberg 17.5.

= 21.8 =

Release date: 2024-01-09

We've just released Yoast SEO 21.8. In this release, we've focused on general enhancements and fixes to improve how your WordPress SEO plugin functions. Find out more about what's new in Yoast SEO 21.8 in [our release post](https://yoa.st/release-9-1-24)!

#### Enhancements

* Aligns the styling of the replacement variables in the post editor with the styling in the settings.
* Improves the centering of the eye icon in the highlighting button across editors.

#### Bugfixes

* Fixes a bug where highlighting for the _keyphrase density_ assessment would not work when using the latest version of Gutenberg (17.3.0).

#### Other

* Adds a JavaScript action (`yoast.analysis.applyMarks`) that allow users to implement the highlighting functionality in other editors.
* Adds a notification in the sidebar to leave a quick review.
* Removes a set of Elementor widgets from the content analysis to make the analysis results more accurate.
* Re-orders menu items in block editor metabox and sidebar, classic editor metabox and Elementor editor sidebar to be consistent with Yoast SEO Premium.

= 21.7 =

Release date: 2023-12-12

Yoast SEO 21.7 is out now. In this release, we bring an improved first-time configuration, making it easier for people to get started. Also, we fixed several bugs and added some enhancements. Find out more about what's new in Yoast SEO 21.7 in [our release post](https://yoa.st/release-12-12-23)!

#### Enhancements

* Removes a superfluous warning in the first time configuration when the site environment is non-production.

#### Bugfixes

* Fixes a bug where an additional `Organization, Person` schema piece would be wrongly generated for author pages when a website representing an organization was set to represent a person different from the author.
* Fixes a bug where the initial state for the website name would be empty when saving the site representation step in the first time configuration.
* Fixes a bug where modifications to the analysis data would not be included in the Insights analysis.
* Fixes a bug where the "view" button for tracking SEO performance would have the wrong size when editing a post in Elementor and Classic editor.

#### Other

* Adds checks to ensure that the plugin has no known incompatibilities with PHP 8.3.
* Improves the discoverability of the security policy.
* Improves the instructions in the first-time configuration so that they're easier to follow.
* Improves the new installation screen layout and design.
* Provides a filter to add a list of shortcodes so they can be parsed and then included in our content analysis in Classic editor.

= 21.6 =

Release date: 2023-11-28

Discover what's new in Yoast SEO 21.6! Have you seen our AI-powered tool that helps you easily craft engaging titles and meta descriptions? Ready for even more AI capabilities? Upgrade to Premium and unlock full access to AI-driven SEO tools to take your website to new heights. Start optimizing smarter, not harder! Find out more about what's new in Yoast SEO 21.6 in [our release post](https://yoa.st/release-28-11-23)!

#### Enhancements

* Improves the _Track SEO performance_ functionality by adding a graph that plots keyphrase trends over time.

#### Bugfixes

* Fixes a bug where encoded characters would be stripped from canonical URLs in the taxonomy metabox. Props to [@stodorovic](https://github.com/stodorovic).
* Fixes a bug where the Wincher integration would cause PHP warnings with PHP 8+.

#### Other

* Adds a notification when WooCommerce's new beta product editor is enabled.
* Adds defensive coding to the suppress warnings on archive pages with the `/%category%/%postname%/` permalink structure. Props to [@Mte90](https://github.com/Mte90).

= 21.5 =

Release date: 2023-10-31

Yoast SEO 21.5 is out today! In this release, you'll find improvements to our inclusive language feature, updates to handling RSS feeds and much more. Find out more about what's new in Yoast SEO 21.5 in [our release post](https://yoa.st/release-31-10-23)!

#### Enhancements

* Adds support for the new `wp_attachment_pages_enabled` option introduced by WordPress 6.4, reducing the chances of inconsistencies with Yoast SEO's own "Enable media pages" setting.
* Improves the _inclusive language_ analysis by making the feedback more clear and consistent, refining the list of targeted phrases, and adding more alternatives for some of the non-inclusive phrases. Specifically, this includes the following changes:
	* Aligns the traffic light color and written feedback for all phrases.
	* Makes some feedback strings more accurate by replacing the word ‘overgeneralizing’ with ‘harmful’.
	* Adds ‘Rom’ and ‘Roma’ as additional alternatives to ‘gypsy’.
	* Adds additional alternatives to ‘homosexuals’.
	* Improves the feedback shown for the phrases ‘abnormal behaviour’, ‘behaviourally normal’, and ‘behaviourally abnormal’.
	* Improves the feedback shown for the word ‘minorities’.
	* Removes ‘narcissistic’ as a targeted phrase when followed by ‘personality disorder’.
	* Removes ‘Ebonics’ and ‘normal behaviour’ from the list of targeted phrases.
* Removes the automatic `rel=nofollow` attribute for links in the RSS feed.

#### Bugfixes

* Fixes a bug where console warnings about incorrect prop types would be shown on the integrations page.

#### Other

* Prevents the Pattern Category taxonomy (introduced in WordPress 6.4) to be indexed and hides it in the settings page.
* Improves the FAQ block description by removing any reference to the previous restriction of one block per post.
* Improves the inline documentation for the `WPSEO_Option` class. Props to [costdev](https://github.com/costdev).
* Leverages Script Strategy feature to add the async attribute to the `wordproof` script in case WordPress version is 6.3 or higher. Props to [adamsilverstein](https://github.com/adamsilverstein).
* Sets the WordPress tested up to version to 6.4.

= 21.4 =

Release date: 2023-10-17

We've just released Yoast SEO 21.4. In this release, we've focused on general enhancements and fixes to improve how your WordPress SEO plugin functions. Find out more about what's new in Yoast SEO 21.4 in [our release post](https://yoa.st/release-17-10-23)!

#### Enhancements

* Introduces more robust HTML processing and highlighting for the _keyphrase density_ and _single H1_ assessments.
* Improves the keyphrase matching in the _keyphrase density_ assessment.
* Improves keyphrase matching in Japanese by being able to match keyphrase occurrences that contain upper case characters.
* Updates the list of HTML elements that should be excluded from the content analysis.
* Improves performance in getting the primary term. Props to [nlemoine](https://github.com/nlemoine).
* Prevent database update requests on page loads when the site representation settings contain conflicting data. Props to [jboonstra](https://github.com/jboonstra).

#### Bugfixes

* Fixes a bug where highlighting was not applied to keyphrase occurrences that contained different types of apostrophes than `'`.
* Fixes a bug where PHP notice would happen when the sitemap index is generated on MySQL 8+.
* Fixes a bug where resource cleanup regarding emojis would cause a fatal error when enabling the `Remove emoji scripts` option in the _crawl optimization_ settings. Props to [MishaBelikov](https://github.com/MishaBelikov).
* Fixes a bug where sentences would not be highlighted when square brackets were present in the same sentence.
* Fixes a bug where the first-time configuration' site representation logo button would not be translated. Props to [fxbenard](https://github.com/fxbenard).
* Fixes a bug where the _single title_ assessment would be triggered when adding a H1 without text.

= 21.3 =

Release date: 2023-10-03

Yoast SEO 21.3 is out! In this release, we've focused on improving the plugin's performance, especially regarding handling huge posts on complex websites. Find out more about what's new in Yoast SEO 21.3 in [our release post](https://yoa.st/release-3-10-23)!

#### Enhancements

* Enhances post-saving performance in certain conditions for a smoother and more efficient user experience.

#### Bugfixes

* Fixes a bug where the notifications counter of the admin bar menu would not show with the correct style on the frontend.
* Fixes a bug where the slug in the search appearance editor would not be set when published posts were edited in the classic editor and the "core/editor" store was available.

= 21.2 =

Release date: 2023-09-19

Yoast SEO 21.2 is out today! In this release, we've improved the naming of several features and enhanced the sidebar in the block editor, making it easier to use. Find out more about what's new in Yoast SEO 21.2 in [our release post](https://yoa.st/release-19-9-23)!

#### Enhancements

* Renames Google preview to Search appearance in the metabox and sidebar.

#### Bugfixes

* Fixes a bug where, even if `Show author archives without posts in search results` is enabled, the archive page would have a `noindex` in the `robots` metatag.
* Fixes a bug where notices about incorrect calls to `wpdb::prepare` would be thrown on Yoast SEO Premium activation.
* Fixes a bug where pagination meta tags would be wrong when using Query Loop Block with custom query variables.
* Fixes a bug where the redirect notification would mention "posts" when a tag was deleted or trashed.
* Fixing a bug where adding special characters like " »" as a title separator would break the RSS feed.

#### Other

* Sets the minimum supported WordPress version to 6.2.

= 21.1 =

Release date: 2023-09-05

Here's Yoast SEO 21.1! After the AI release, we're back with an update filled with fixes and enhancements to improve your SEO work. Check it out! Find out more about what's new in Yoast SEO 21.1 in [our release post](https://yoa.st/release-5-9-23)!

#### Bugfixes

* Fixes a bug where an error could occur when an indexable was outdated. Props to @jaimearroyonavia.
* Fixes a bug where the cleanup routine would throw an error when on multisites.
* Fixes a bug where the notification for a new content type in the notification center would not be dismissed when installing Elementor and reviewing the new content types.

#### Other

* Adds an attribute to the link "See who contributed to" to open in a new browser tab, located in the General tab. Props to @nathanwritescode-uk.

= 21.0 =

Release date: 2023-08-22

We're thrilled to announce Yoast SEO 21.0! This update is geared at making your SEO journey smoother and more successful. We're introducing our first step into AI with automatic titles and meta description generation in Yoast SEO Premium. Find out more about what's new in Yoast SEO 21.0 in [our release post](https://yoa.st/release-22-8-23)!

#### Other

* Sets the WordPress tested up to version to 6.3.

= 20.13 =

Release date: 2023-08-08

Please welcome Yoast SEO 20.13! We've focused on enhancing compatibility and performance, making your SEO efforts smoother and more effective. We've also improved compatibility with WordPress 6.3. Find out more about what's new in Yoast SEO 20.13 in [our release post](https://yoa.st/release-8-8-23)!

#### Enhancements

* Ensures that the Google, Facebook and Twitter Preview modals are compatible with WordPress 6.3.

#### Other

* Sets the WordPress tested up to version to 6.3.

= 20.12 =

Release date: 2023-07-25

We've just released Yoast SEO 20.12! This release includes fixes and enhancements that strengthen the stability of our plugin and enhance your SEO efforts. Find out more about what's new in Yoast SEO 20.12 in [our release post](https://yoa.st/release-25-7-23)!

#### Enhancements

* Adds `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid` and `gtm_debug` to the default allowlist for the "Remove unregistered URL parameters" setting.

#### Bugfixes

* Fixes a bug where an error would appear in `debug.log` when saving a draft or updating a post in Elementor.
* Fixes a bug where the controls for the _FAQ_ and _how-to_ blocks would be not shown when running Gutenberg versions >= 15.2.
* Fixes a bug where the duration text of the _how-to_ block would be output in the user language instead of the site language.

#### Other

* Updates the verification link to the Google Search Console in the Site connections section in Settings.
* Improves the copy in the final step of the first time configuration.
* Updates copy of our free webinar notification.

= 20.11 =

Release date: 2023-07-11

Time for another release, time for Yoast SEO 20.11. This latest release includes fixes and enhancements, plus a new notification that pops up when you add a new content type. This reminds you to optimize these. Find out more about what's new in Yoast SEO 20.11 in [our release post](https://yoa.st/release-11-7-23)!

#### Enhancements

* Adds badges to new content types in the settings page.
* Adds a notification in the settings whenever there is a new content type.
* Adds a notification for new content in the notification center and removes it once it was reviewed.

#### Bugfixes

* Fixes a bug where placeholders would be displayed in the wrong color in the Yoast SEO settings and the First-time configuration.

= 20.10 =

Release date: 2023-06-27

Upgrade now to Yoast SEO 20.10! This latest release includes fixes, enhancements to the crawl optimization settings, and a brand-new support page that helps you get support quickly. Find out more about what's new in Yoast SEO 20.10 in [our release post](https://yoa.st/release-27-6-23)!

#### Enhancements

* Adds a support page to the Yoast admin. This page allows you to easily access Yoast FAQs and support resources from the WordPress admin.
* Excludes the Yoast SEO Breadcrumbs widget from the content analysis in Elementor Pro.
* Expands the list of HTML elements excluded from the content analysis.
* Introduces a new setting for crawl optimization, that disallows AdsBot crawling when enabled.
* Introduces more robust HTML processing for the _competing links_, _keyphrase in introduction_, _image keyphrase_, and _images_ assessments.
* Removes any meta tags for enhanced Slack sharing from static home pages.

#### Bugfixes

* Fixes a bug where adding a link in the block editor would result in displaying the URL instead of the post title.
* Fixes a bug where deletion notice would not appear when deleting a term when the `term_id` is different from `taxonomy_term_id`.
* Fixes a bug where terms with custom canonical URLs would get added in the sitemap.
* Fixes a bug where the WordPress native sitemap would not work properly after Yoast SEO was deactivated, until rewrite rules were flushed.
* Fixes a bug where the wrong taxonomy name would appear in the notice when deleting a term.

#### Other

* Adds the Wincher upgrade callout to the Wincher performance report on the dashboard and to the Wincher SEO performance on the edit post page.
* Deprecates the `Old_Premium_Integration`.

= 20.9 =

Release date: 2023-06-13

In Yoast SEO 20.9, you'll find improvements to our Wincher integration. We've added a dashboard widget to track your keyphrase rankings. We've also done the usual fixes and made enhancements. Find out more about what's new in Yoast SEO 20.9 in [our release post](https://yoa.st/release-13-6-23)!

#### Enhancements

* Adds a new widget on the dashboard that shows your top keywords added to Yoast SEO with Wincher. Provides a connection button if you haven't yet connected your site to Wincher.
* Tightens crawl optimization site search blocking rules.
* We now automatically schedule background performance optimization processes (via WP Cron).

#### Bugfixes

* Fixes a bug where a fatal error would occur after updating the plugin due to a failed query.
* Fixes a bug where indexables would be created when using the `wp yoast index` WP CLI command on a staging site.
* Fixes a bug where the link popover position in the block editor would be positioned incorrectly when adding or creating links.
* Fixes a bug where the Yoast SEO metabox would crash in conjunction with Yoast SEO Premium when additional keyphrases are stored in the DB in a malformed way.

= 20.8 =

Release date: 2023-05-23

Today, we're launching Yoast SEO 20.8. In this release, you'll find improvements to our content analyses and regular fixes and enhancements. Find out more about what's new in Yoast SEO 20.8 in [our release post](https://yoa.st/release-23-5-23)!

#### Enhancements

* Improves feedback strings for the _keyphrase density_ assessment by referring to the keyphrase in general instead of the focus keyphrase.
* Improves the accuracy of the content analysis by excluding texts within textarea tags from the analysis.

#### Bugfixes

* Fixes a bug where an entry in the indexable table would be created when an archive of a non-public but publicly queryable post type would be visited.
* Fixes a bug where a warning about a missing key in a component would be thrown in the console in the Yoast SEO Settings page.
* Fixes a bug where entries in the indexable table would be created for archives of excluded post types.
* Fixes a bug where the score icon for the SEO and Readability tabs would not show a sad emoji when the post is empty or there is no set keyphrase.

#### Other

* Renames "SEO Framework" to "The SEO Framework".

= 20.7 =

Release date: 2023-05-09

Yoast SEO 20.7 is out now! With this release, our team has rolled out essential fixes and improvements to help you improve your SEO work. Upgrade today to benefit from the latest and greatest! Find out more about what's new in Yoast SEO 20.7 in [our release post](https://yoa.st/release-9-5-23)!

#### Enhancements

* Adds a link to a taxonomy edit page in its settings section when the taxonomy has no public post types associated.
* Adds an academy page in the Yoast menu for easy access to all of Yoast’s e-learning modules.
* Ensures compatibility with upcoming Elementor accessibility improvements.

#### Bugfixes

* Fixes a bug where a fatal error would be thrown when visiting Yoast SEO admin pages while Yoast SEO for WooCommerce is active but never executed.

#### Other

* Removes the introductory modal for the settings page.
* Removes the Zapier integration card.
* Removes the Zapier post-publish slot and network admin integration toggle.
* Sets the minimum supported WooCommerce version to 7.1.
* Sets the minimum supported WordPress version to 6.1

= 20.6 =

Release date: 2023-04-26

Today's release of Yoast SEO 20.6 has enhancements and fixes to improve your SEO work. The update features a new readability analysis — a helpful addition alerting you whenever you use too much center-aligned text. Check out more details now! Find out more about what's new in Yoast SEO 20.6 in [our release post](https://yoa.st/release-26-4-23)!

#### Enhancements

* Improves performance when the SEO data optimization has not been completed. Props to @PypWalters.

= 20.5 =

Release date: 2023-04-11

Our latest release, Yoast SEO 20.5, includes enhancements and fixes to elevate your SEO journey. One of the most exciting updates is our improved Google SERP preview, now aligned with Google's current styling for both mobile and desktop. This allows you to see how well your snippets are optimized for the search result pages. Read all about it! Find out more about what's new in Yoast SEO 20.5 in [our release post](https://yoa.st/release-11-4-23)!

#### Enhancements

* Updates mobile and desktop Google snippet previews to be in line with Google's current styling.
* Improves the recognition of keyphrases starting with a period (e.g., ".net developer") by the _keyphrase in title_ assessment.
* Cleans up indexables that got orphaned because posts/terms/users got deleted while Yoast SEO was deactivated.

#### Bugfixes

* Fixes a bug where a fatal error would be thrown when upgrading Yoast SEO while having Local SEO active but never executed.
* Fixes a bug where, if a content pertaining to a deleted user is re-assigned to another user, the indexables related to the deleted user are not updated with the new `author_id`.
* Fixes a bug where posts in Elementor would persistently require an update when a related keyphrase was added.
* Fixes a bug where the Google preview would show a duplicate slug in the breadcrumbs when the slug included encoded characters.
* Fixes a bug where the highlighting for the _passive voice_, _sentence length_, _transition words_, and _inclusive language_ assessments would not be applied to the first sentence of a paragraph if the paragraph contained a new line character.
* Fixes a bug where the highlighting would not be applied in the image captions in Classic editor when the match was found in the first sentence.
* Fixes a bug where the highlighting would not be applied to the first sentence in Classic editor when an image without caption was added at the beginning of a paragraph.
* Fixes a bug where the _passive voice_ and _transition words_ assessments would show an incorrect percentage in the feedback when a new line character was used inside a paragraph.

#### Other

* Changes the last step of the `First-time configuration` to highlight the free webinar availability.
* Drops compatibility with PHP 5.6, 7.0 and 7.1.

= 20.4 =

Release date: 2023-03-28

With Yoast SEO 20.4, you can reduce your site's carbon footprint and improve your SEO with just a few clicks. The crawl optimization settings let you turn off crawling for certain URLs, scripts, and metadata that WordPress automatically adds. Previously only available in Premium, but now available for all! Find out more about what's new in Yoast SEO 20.4 in [our release post](https://yoa.st/release-28-3-23)!

#### Enhancements

* NEW in Free: Adds the crawl optimization features to Yoast SEO Free, enabling 13M+ users to reduce their website's carbon footprint!

#### Bugfixes

* Adds a hook to adapt the meta query used to filter the post overview based on the focus keyphrase.
* Fixes a bug where a fatal error related to HelpScout would be thrown when using a version of a Yoast add-on older than 2 years.
* Fixes a bug where a PHP warning would be thrown when exporting Yoast settings.
* Fixes a bug where the Google preview in the Block editor would show the post ID in the breadcrumbs when creating a new post, or it would show the slug twice or show `auto-draft` when creating a new page or custom post. This would only happen before (auto-)saving the post.
* Fixes a bug where the _previously used keyword_ assessment would potentially link to an empty page of results when the focus keyphrase had been used across different post types.

#### Other

* Sets the WordPress tested up to version to 6.2.

= 20.3 =

Release date: 2023-03-14

Yoast SEO 20.3 is out and comes with several enhancements, fixes, and improvements. With an improved highlighting feature and enhanced support for the Portuguese language, Yoast SEO 20.3 helps you find where you need to make SEO edits quickly and easily. Upgrade now and take your website's SEO to the next level! Find out more about what's new in Yoast SEO 20.3 in [our release post](https://yoa.st/release-14-3-23)!

#### Enhancements

* Allows the highlighting feature to highlight content in captions of _Audio_, _Embed_, _Gallery_, _Image_, _Table_, and _Video_ blocks in the Block editor.
* Allows the highlighting feature to highlight content in _FAQ_ and _How-to_ blocks in the Block editor.
* Improves the detection of participles in the _passive voice_ assessment for Portuguese.
* Improves the _transition words_ assessment for Portuguese by adding new transition words. Props to [mathiasribeiro](https://github.com/mathiasribeiro).

#### Bugfixes

* Fixes a bug where a fatal error would appear in oEmbed pages for media pages when those were disabled from Yoast settings.
* Fixes a bug where editing text in Classic editor while the highlighting feature is enabled would make the text unfocused and the cursor jump to the beginning of the text.
* Fixes a bug where self-closing break tags (`</br>`) would not be removed when analyzing content.
* Fixes a bug where shortcodes in the Block editor would be treated as words when analyzing content.
* Fixes a bug where the color and line height in the _Google preview_ modal would be shown incorrectly when editing in Elementor.
* Fixes a bug where the `fetchpriority` attribute of the rating stars image was mistyped. Props to [fellyph](https://github.com/fellyph).
* Fixes a bug where the `get_head` REST endpoint would return wrong values for some meta tags when called with the homepage URL as an argument.
* Fixes a bug where the query parameters would be added in the middle of canonical and previous and next links in paginated pages. Props to [andreas-pa](https://github.com/andreas-pa).

#### Other

* Avoids issuing a PHP warning because of a wrong variable type.
* Removes the beta badge for the _inclusive language_ assessment.

= 20.2.1 =

Release date: 2023-03-02

#### Bugfixes

* Fixes a security issue in the post editor.

= 20.2 =

Release date: 2023-02-28

In Yoast SEO 20.2, we've improved our innovative indexables technology. We've developed a faster and more reliable way of indexing your site's data. In turn, we make better use of this data to improve your site's SEO. Find out more about what's new in Yoast SEO 20.2 in [our release post](https://yoa.st/release-28-2-23)!

#### Enhancements

* Stops creating indexables for attachments when attachment pages are disabled, thus decreasing the size of the database.
* Improves the indexables creation mechanism by avoiding duplicate `unindexed` entries when multiple invalid posts and terms are being used.
* Changes replacement variable name from `Page number` to `Page` in the `Settings` page.
* Changes the copy for notices in social profiles for person.
* Improves accessibility for the extra other profiles in the Settings' Site representation when Organization is selected.
* Improves the performance of image schema creation for really large images.
* Improves the Settings' search modal accessibility.
* Removes person's social profiles form from first time configuration.

#### Bugfixes

* Fixes a bug where a fatal error would be thrown when building a hierarchy indexable when the parent indexable did not exists.
* Fixes a bug where a fatal error would be thrown when the post type `posts` was excluded and the post overview was visited.
* Fixes a bug where the settings page of a post type would not load when a special character like ט was added as permalink.

#### Other

* Adds a `wpseo_indexable_forced_included_post_types` filter to force creation of indexables for post types.
* Hides "Enable SEO controls and assessments" option from taxonomies that has no standard WP UI.

= 20.1 =

Release date: 2023-02-07

Create a more inclusive online world with Yoast SEO 20.1. Our improved inclusive language analysis provides real-time feedback and offers suggestions to help your content reach a broader audience. For our Premium users, there's a bonus - a new Mastodon integration to take your online presence to the next level. Get it now! Find out more about what's new in Yoast SEO 20.1 in [our release post](https://yoa.st/release-7-2-23)!

#### Enhancements

* Adds a link to the first time configuration in the plugin overview when this is not completed yet.
* Adds the site name to the Google preview for mobile.
* Improves the _inclusive language analysis_ by expanding the number of non-inclusive phrases recognized as well as by improving the feedback, for example by adding more inclusive alternatives or fixing inconsistencies. Specifically, this includes the following changes:
  * Adds word form support (singular vs. plural, different verb forms) for some non-inclusive phrases.
  * Improves the feedback strings and suggested alternatives for phrases containing the terms "crazy" and "OCD".
  * Improves the feedback strings pertaining to medical conditions.
  * Improves the feedback strings for "binge", "preferred pronouns", and "preferred name".
  * Changes the scoring and improves the feedback string for "ladies and gentleman".
  * Changes the feedback in the publish box from "OK" to "Potentially non-inclusive".
  * Excludes the phrases "binge drinking/drinks/drink" and "exotic shorthairs/longhairs" from being targeted as non-inclusive.

#### Bugfixes

* Fixes a bug where the _Format archives_ settings would not work correctly when the `post_format` taxonomy is disabled.
* Fixes a bug where the _Media pages_ settings would not work correctly when the `attachment` post type is filtered out via `wpseo_indexable_excluded_post_types`.
* Fixes a bug where the highlighting feature in the Classic editor would not work when inline HTML tags were present.
* Fixes a bug where the settings' introduction modal would not be visible on wider screens with less than ~700 pixels height.
* Fixes a bug where `wpseo_opengraph_image_size` is used to set custom size to `og:image` but doesn't work when uploading an image with the same size as the custom size.

#### Other

* Improves the translations comments in _Settings > Site connections_ and a translatable string used by screen readers.

= 20.0 =

Release date: 2023-01-24

We're proud to introduce a brand new settings interface in Yoast SEO 20.0. We've worked hard to make this interface both beautiful and helpful. It's now much easier and enjoyable to work on your SEO. Plus, it's the start of much more cool stuff to come! Find out more about what's new in Yoast SEO 20.0 in [our release post](https://yoa.st/release-24-1-23)!

#### Enhancements

* NEW: Introduces a brand-new design for Yoast SEO's settings pages:
 * Completely overhauled the old 'settings' admin pages with a sleek and modern interface.
 * Combines, moves and improves various admin pages.
 * Adds the ability to search through site settings to quickly discover and modify your desired setting.
 * Adds extra information and help for all controls.
 * Vastly improves accessibility (including better support for keyboard navigation).
 * Key features are now listed on the 'Site features' page under 'General'.
 * Webmaster Tools settings have moved to 'Site connections' page under 'General'.
 * Open Graph settings can now be found in 'Site features' under 'General'.
 * Adds an introduction modal with videos to quickly help you on your way.
* Improves the link focus styles in the first time configuration.

#### Other

* Displays a notification urging to upgrade Premium if the version is below 20.0, since some settings might be missing from the new user interface.

= 19.14 =

Release date: 2023-01-10

Yoast SEO 19.14 introduces the first round of improvements to the inclusive language analysis. We've made the analysis smarter in detecting terms in certain contexts and improved the feedback we give writers. Check it out! Find out more about what's new in Yoast SEO 19.14 in [our release post](https://yoa.st/release-10-1-23)!

#### Enhancements

* Improves the _inclusive language analysis_ by expanding the number of non-inclusive phrases recognized as well as by improving the feedback, for example by adding more inclusive alternatives or fixing inconsistencies. Specifically, this includes the following changes:
  * Adds "OCD", "normal" and "abnormal" to the terms that are targeted by the _inclusive language analysis_ in specific contexts.
  * Adds "stupid" to the terms that are always targeted by the _inclusive language analysis_.
  * Removes the term "African American Vernacular English" from the terms targeted by the  _inclusive language analysis_.  
  * Changes the terms "exotic" and "oriental" to be considered potentially non-inclusive in the _inclusive language analysis_, adds exceptions and updates their feedback.
  * Improves the categorization of the targeted terms in the _inclusive language analysis_ by splitting the `other` category into a more specific one.
  * Improves the feedback for some (potentially) non-inclusive target terms in the _inclusive language analysis_.
  * Adds more alternatives to some (potentially) non-inclusive target terms in the _inclusive language analysis_.
  * Adds terms that are only considered (potentially) non-inclusive when they are followed by certain words or a punctuation mark.
* Avoids a deprecation notice for the Yoast sidebar panel in the block editor.
* Improves the accuracy of calculating text length in Japanese by excluding all spaces and HTML tags from the character count, and by including domain names.

#### Bugfixes

* Fixes a bug where indexable hierarchy wasn't built when the Indexable is built for the first time.

#### Other

* Sets the minimum supported WordPress version to 6.0.

= 19.13 =

Release date: 2022-12-20

Yoast SEO 19.13 proactively fixes an issue we found in the upcoming release of the Gutenberg editor. This release of the block editor breaks the link functionality when used in conjunction with Yoast SEO. The Yoast SEO release works around that so users can keep adding and changing links. Find out more about what's new in Yoast SEO 19.13 in [our release post](https://yoa.st/release-20-12-22)!

#### Enhancements

* Prevents an incompatibility with the upcoming Gutenberg 14.8.0.

= 19.12 =

Release date: 2022-12-13

In Yoast SEO 19.12, we're introducing the inclusive language analysis — previously only available in Yoast SEO Premium. This will help you get feedback on words that might exclude part of your audience and get inclusive alternatives. This is only available in English for now. Plus, it is opt-in. Try it! Find out more about what's new in Yoast SEO 19.12 in [our release post](https://yoa.st/release-13-12-22)!

#### Enhancements

* NEW in Free: Adds the inclusive language analysis for English as a beta feature. Get suggestions on how to improve non-inclusive phrases, to make your content appeal to a larger audience.
* Improves the Integrations page to explain more clearly the different types of integrations.
* Adds integration cards for [The Events Calendar](https://wordpress.org/plugins/the-events-calendar/), the [Seriously Simple Podcasting](https://wordpress.org/plugins/seriously-simple-podcasting/) and the [WP Recipe Maker](https://it.wordpress.org/plugins/wp-recipe-maker/) plugins.
* Adds a new `Website name` text field in the `Site Representation` step of the `First-time configuration`.
* Improves the _subheading distribution_ assessment by adding highlighting and also targeting long content before the first subheading.
* Improves the `First-time configuration` styling.
* Improves the _transition words_ assessment for Arabic by removing some transition words.
* Improves the Yoast admin bar menu with more functionality and better links.
* Removes a notification that prompts users to help with translating the plugin in the language of the site.

#### Bugfixes

* Fixes a bug that would affect users managing the cron jobs with a plugin on PHP 8.1 after they have performed a core upgrade.
* Fixes a bug where a fatal error would be thrown when trying to create breadcrumbs from unindexable items.
* Fixes a bug where blocks with a NULL `blockName` would trigger deprecation errors with PHP 8.1 and cause performance issues. Props to [@dustyf](https://github.com/dustyf).
* Fixes a bug where breadcrumbs markup would not validate due to improper nesting and closing of span tags. Props to [@michaelbourne](https://github.com/michaelbourne).
* Fixes a bug where highlighting would not be removed from the text after the analysis is updated and the present highlighting has become irrelevant.
* Fixes a bug where the Baidu Webmaster Tools link would go to the wrong page. Props to [@SavPhill](https://github.com/SavPhill).
* Fixes a bug where the content analysis would not load when editing web stories in the Web Stories plug-in.
* Fixes a bug where the highlighting functionality would not be working when highlighting content in lists items in the Block editor in WordPress 6.1.
* Fixes a bug where the `<title>` tag would potentially be missing when publishing a story with the Web Stories plugin. Props to [@swissspidy](https://github.com/swissspidy).
* Improves line ending handling for `robots.txt` contents.

#### Other

* Introduces a notice on the WordPress dashboard and the Yoast SEO dashboard to let users know we are dropping support for PHP < 7.2 starting March 1st, 2023.
* Reduces noise from PHP 8.1 deprecations.
* Improves compatibility with PHP 8.2.
* Allows using the `yoast_seo_development_mode` to override the `wp_get_environment_type()` result to `production`.
* Deprecates the built-in integration with the `The Events Calendar` plugin, following the release of its version 6.0.4 which integrates with Yoast SEO.
* Disallows setting or unsetting any dynamic properties on `Abstract_Main`.
* Removes the note in the readability analysis results that tells users that the _Flesch reading ease_ score has moved to the _Insights_ section.
* Removes the Yoast i18n package.
* Resolves a typo in the feedback string for the phrase `exotic` in the inclusive language analysis.

= 19.11 =

Release date: 2022-11-29

Yoast SEO 19.11 is out now. We're optimizing the Yoast SEO plugin to use fewer resources. This helps make your site faster and more efficient. In this release, we're doing this by streamlining your database. Find out more about what's new in Yoast SEO 19.11 in [our release post](https://yoa.st/release-29-11-22)!
 
#### Enhancements

* Adds a WP-CLI command to clean up unused data from our custom database tables: `wp yoast cleanup`.
* Performs a cleanup of indexables when a public post type (or taxonomy) becomes non-public.
* Notifies users to run the SEO optimization when a non-public post type (or taxonomy) becomes public.

#### Bugfixes

* Fixes a bug where a fatal error would be thrown when the SEO optimization was run after a post type had been manually excluded via a filter.
* Fixes a bug where an entry would be added to our indexables table when saving, updating, or accessing a post (or term) for a non-public post type (or taxonomy).
* Fixes a bug where duplicate indexable records would be created for the same object.
* Fixes a bug where indexables for users would not get removed when a user did not have any publicly viewable posts anymore.
* Fixes a bug where indexables for users would not get removed when author archives were disabled.
* Fixes a bug where indexables would be created for users when author archives were disabled.
* Fixes a bug where indexables would be created for users who did not have any publicly viewable posts.

#### Other

* Introduces the `wpseo_indexable_excluded_taxonomies` filter, to allow manually excluding taxonomies from being indexed.

= 19.10 =

Release date: 2022-11-08

Yoast SEO 19.10 is out today. This release mostly consists of bug fixes and enhancements. In addition, we’re getting our WordPress plugins ready for the upcoming High Performance Order Storage feature in WooCommerce 7.1+. Update now! Read more about what’s new in Yoast SEO 19.10 in our [release post in English](https://yoa.st/release-8-11-22) or our [release post in Spanish](https://yoa.st/release-8-11-22-spanish)!

#### Enhancements

Improves the call-to-action feedback string of the Flesch Reading Ease insight when the text is recognized as fairly difficult.

#### Bugfixes

* Fixes a bug where a fatal error would be thrown in the classic editor in combination with certain plugins that misuse metabox hooks.
* Fixes a bug where users with site-wide basic access authentication would be prompted to insert their credentials when saving a post in Elementor if they didn’t have the manage_options capability.
* Fixes a bug where Yoast SEO-related post meta data would not be saved if a user without the manage_options capability would save a post in Elementor.

#### Other

* Deprecates the hooks used to add custom content to the Yoast SEO settings pages, in preparation for future releases. The following hooks have been deprecated: wpseo_tools_overview_list_items, wpseo_settings_tab_crawl_cleanup, wpseo_settings_tab_site_analysis, Yoast\WP\SEOdmin_author_archives_meta, Yoast\WP\SEOdmin_date_archives_meta, Yoast\WP\SEOdmin_post_types_beforearchive, Yoast\WP\SEOdmin_post_types_archive, Yoast\WP\SEOdmin_taxonomies_meta, wpseo_admin_other_section, wpseo_admin_opengraph_section, wpseo_admin_pinterest_section, wpseo_admin_twitter_section, wpseo_import_other_plugins.
* Ensures compatibility with the High Performance Order Storage feature in WooCommerce 7.1+.
* Sets the WordPress tested up to version to 6.1.

= 19.9 =

Release date: 2022-10-25

Yoast SEO 19.9 is out today. Yoast SEO already supports the Schema necessary for Google's Site Names update, but we've expanded support for it in this release. In addition, we give users more control over what names they can add, including an alternate title. Of course, there's a lot more, so check it out! Read more about what's new in Yoast SEO 19.9 in [our release post in English](https://yoa.st/release-25-10-22) or [our release post in Spanish](https://yoa.st/release-25-10-22-spanish)!

#### Enhancements

* Adds input fields to overwrite the site name, as well as an extra input field for a (potentially shorter) alternate name. Google introduced new support for [site names in Google Search](https://developers.google.com/search/blog/2022/10/introducing-site-names-on-search). Yoast SEO already outputs this value correctly, using the WordPress site name. With these changes, we have increased the control site owners have over this value.
* Improves the Schema output for Organization by no longer putting out an empty array if no social profiles have been added for it.
* Adds immediate keyphrase tracking after connecting to Wincher.

#### Bugfixes

* Fixes a bug where a fatal error would be thrown when using the `wpseo_breadcrumb_links` filter in the wrong way on PHP 8.0+.
* Fixes a bug where social or canonical URLs containing `@` would lead to encoding issues. Props to [@stodorovic](https://github.com/stodorovic).
* Fixes a bug where the buttons in the _FAQ_ and in the _how-to_ block would be hardly visible when using a dark theme.
* Fixes a bug where the number of words would be counted incorrectly when using Cyrillic script. Props to [kudinovfedor](https://github.com/kudinovfedor).
* Fixes a bug where the _previously used keyphrase_ assessment would also appear under the readability analysis tab when the cornerstone content toggle would be switched on.
* Fixes a bug where the SEO optimization routine would give an error when an image file of an image linked in a post could not be retrieved.
* Fixes a bug where the wrong canonical URL would be set on attachment pages.

#### Other

* Adds taxonomy information to breadcrumbs of type "term" to be able to filter them better with the `wpseo_breadcrumb_links` filter. Props to [@svenvonarx](https://github.com/svenvonarx).
* Adds a `wpseo_primary_category_admin_pages` filter to enable the use of the primary category in the post URL of additional admin pages besides the default ones. Props to [@ssvet](https://github.com/ssvet).
* Reinstates the `wpseo_twitter_card_type` filter that was wrongly deprecated in 19.8.

= 19.8 =

Release date: 2022-10-11

Yoast SEO 19.8 is out now! In this release, we’ve mainly focused on enhancements, fixes, and other improvements. For instance, you’ll find improvements to our structured data implementation. Check it out! Read more about what's new in Yoast SEO 19.8 in [our release post in English](https://yoast.com/yoast-seo-october-11-2022/) or [our release post in Spanish](https://yoa.st/release-11-10-22-spanish)!

#### Enhancements

* Enhances the Schema breadcrumbs generation to make sure that empty list items are not included, preventing Schema validation errors.
* Adds a `X-Robots-Tag: noindex, follow` header to all comment feeds to prevent them from being indexed, reducing duplicate content.
* Removes two notifications from the Yoast SEO dashboard: the one suggesting enabling auto-updates, and the one suggesting activating an add-on that is installed but currently inactive.
* Forces the `twitter:card` meta tag to the preferred `summary_large_image` value.

#### Bugfixes

* Fixes a bug where a fatal error would be thrown on WordPress.com using PHP 8.0 in relation with the Debug Bar.
* Fixes a bug where a fatal error would be thrown when the `php_uname()` function is disabled by the web hosting provider and usage tracking is enabled.
* Fixes a bug where changes in the replacement variables (e.g. the value of the `%%title%%` replacement variable when the post title changes) would not be reflected in the Meta description length, the SEO title width, and the Keyphrase in SEO title assessments.
* Fixes a bug where passing `__false` to the `wpseo_robots` filter would result in a `max-image-preview:large` robots meta directive instead of the desired `noindex, nofollow` directive.
* Fixes a bug where robots meta tags would be unintentionally synchronized between pages in different languages when using multilingual plugins like WPML or Polylang.
* Fixes a bug where the query parameters from an image URL would be omitted in the sitemap.xml.
* Fixes a bug where the sidebar issue counter would show a wrong number of issues, on the first page load after an issue was resolved.
* Fixes a bug where Yoast SEO would conflict with Elementor, when Yoast Premium or Yoast News or Yoast Video is active, throwing console errors.

#### Other

* Deprecates the `wpseo_twitter_card_type` filter.

= 19.7.2 =

Release date: 2022-10-05

#### Other

* Removes the cURL minimal version check from the Site Health page, as it was causing issues.

= 19.7.1 =

Release date: 2022-09-20

#### Bugfixes

* Fixes a bug where a fatal error would be thrown in combination with certain plugins that change the standard login page URL.

#### Other

* Changes the copy in the `robots.txt` comment.

= 19.7 =

Release date: 2022-09-20

Yoast SEO 19.7 is out today! We’ve rolled out some general enhancements, bug fixes, and security improvements in this release. Go check it out! Read more about what's new in Yoast SEO 19.7 in [our release post in English](https://yoa.st/release-20-9-22) or [our release post in Spanish](https://yoa.st/release-20-9-22-spanish)!

#### Enhancements

* Improves the handling of fatal errors in the front-end by preventing Yoast SEO to run in the login page, allowing users to access their dashboard.
* Excludes empty custom post type sitemaps from `sitemap_index.xml`.
* Introduces a new filter `wpseo_sitemap_post_type_first_links` that can be used to add links at the start of the first sitemap page for post types. Props to @jamalbou.

#### Bugfixes

* Fixes a bug in the default editor where image elements would lead to repeated requests for that image source while editing content.

#### Other

* Adds new disabled toggles to the Crawl settings tab in the General page.

= 19.6.1 =

Release date: 2022-08-31

#### Other

* Fixes compliance with the wordpress.org plugin guidelines.

= 19.6 =

Release date: 2022-08-23

Yoast SEO 19.6 is out today! In this release, we’ve rolled out some general enhancements. In addition, we’ve improved the performance of Yoast SEO on bigger, more complex sites. Read more about what's new in Yoast SEO 19.6 in [our release post in English](https://yoa.st/release-23-8-22) or [our release post in Spanish](https://yoa.st/release-23-8-22-spanish)!

#### Bugfixes

* Fixes a bug in the Classic Editor where clicking on the SEO link inside the publish box would not always scroll the SEO analysis into view.
* Fixes a bug where an emoji in our replacement variable editors would not be entirely removed when the backspace/delete button is hit.
* Fixes a bug where a redirect to our installation success page could happen on admin AJAX calls.

#### Other

* Adds a "Search engines discouraged" notification in the Yoast SEO dashboard when the "Discourage search engines from indexing this site" WordPress setting is turned on.
* Removes the Ryte integration and deprecates all the relevant classes. More information about this can be found at [yoa.st/ryte-deprecation](https://yoa.st/ryte-deprecation).

= 19.5.1 =

Release date: 2022-08-09

#### Bugfixes

* Fixes a bug where a fatal error would be thrown on the front-end when Yoast SEO 19.5 was used with an older version of Yoast SEO Premium.

= 19.5 =

Release date: 2022-08-09

Yoast SEO 19.5 is out today! This release includes more fixes and enhancements to enjoy. We've also made adjustments to our schema implementation, changing the order in which schema nodes are output. Read more about what's new in Yoast SEO 19.5 in [our release post in English](https://yoa.st/release-9-8-22) or [our release post in Spanish](https://yoa.st/release-9-8-22-spanish)!

#### Enhancements

* Adds the site logo and name as default values in the first time configuration and search appearance.
* Changes the order in which Schema nodes are output from `Organization / Person &gt; WebSite &gt; WebPage &gt; Article` to `Article &gt; WebPage &gt; WebSite &gt; Organization / Person`. This fixes validation issues for the Schema validator and puts the most important Schema content first.

#### Bugfixes

* Fixes a bug where a text starting with a double quotation mark followed by a space(s) broke the analysis.
* Fixes a bug where text which includes the non-breaking space character (`&amp;nbsp;`) is not highlighted correctly.
* Fixes a bug where the Algolia integration could not be controlled at network level.
* Fixes a bug where the score indicator in the classic editor would not update the hovering text when the score changed.
* Fixes a bug where the score indicators of the overview pages and admin bar where inconsistent. The taxonomy overview and admin bar score indicators now uses red to indicate `Focus keyphrase not set`. The admin bar score indicator now shows blue when set to `noindex`.

#### Other

* Hides the \"Save changes\" button in the \"Integrations\" tab in the \"Yoast SEO &gt; General\" page.
* Sets the minimum supported WordPress version to 5.9.

= 19.4 =

Release date: 2022-07-26

Yoast SEO 19.4 is out today! In this release, we’ve rolled out some improvements to our Schema structured data implementation. Additionally, we've fixed several bugs and added a couple of small enhancements to ensure you get the best user experience with Yoast SEO. But that's not all, we also have a new integration page coming in this release. Read more about what's new in Yoast SEO 19.4 in [our release post in English](https://yoa.st/release-26-7-22) or [our release post in Spanish](https://yoa.st/release-26-7-22-spanish)!

#### Enhancements

* Enhances the Integrations page and relocates it in the Yoast SEO sidebar menu.
* Improves Schema for archive pages by using the featured image of the first post as `primaryImageOfPage` and by removing `potentialAction`.
* Improves Schema for attachment pages by setting the proper `primaryImage` attribute.
* Allows marking inside of Classic editor blocks in the Block/Gutenberg editor.
* Improves the text analysis by adding curly (“”) and angular quotation marks («»).
* Improves the text analysis by filtering out all versions of the ampersand (&amp;).
* Removes the date from the meta description for WooCommerce products.

#### Bugfixes

* Fixes a bug where a notice was shown indicating that the Flesch reading ease score has moved from the readability analysis to the Insights for languages that do not have Flesch reading ease support.
* Fixes a bug where an `Undefined index: SERVER_NAME` warning would be triggered in cronjobs or WP CLI commands.

= 19.3 =

Release date: 2022-07-12

Yoast SEO 19.3 is out today! In this release, we’ve rolled out some improvements to our Schema structured data implementation. In addition, we also added an Insights tab with information about your content, improved our content analyses and a whole lot more. Read more about what's new in Yoast SEO 19.3 in [our release post in English](https://yoa.st/release-12-7-22) or [our release post in Spanish](https://yoa.st/release-12-7-22-spanish)!

#### Enhancements

* Adds an Insights tab to the editors which contains the Flesch reading ease score and feedback, (estimated) reading time, and word count. Since the Flesch reading ease score has been moved to the insights tab, it is removed from the readability analysis.
* Changes the `@id` of the main Schema `WebPage` node to be just the permalink for the current page, for interoperability with other plugins.
* Changes the logic of the Schema generation to prefer featured image and in-content images instead of OpenGraph and Twitter images.
* Uses the site logo set in the customizer as the logo in our Schema `Organization` output when a site has not set a logo in the Yoast SEO settings.
* Improves the author meta tag to be displayed only on posts.
* Adds a `wpseo_meta_author` hook to filter the content of the author meta tag.
* Improves sentence recognition for German by disregarding ordinal numbers as potential sentence boundaries.
* Adds canonical HTTP headers from RSS feeds to their parent URLs (for instance your homepage, or specific categories or tags), so the feeds themselves don't show up in search results.
* Makes sure the `link` tag in the RSS feeds' `channel` section links to the most specific URL possible (for instance the category or tag the RSS feed is for) instead of the homepage.
* Makes sure the title separator chosen in Yoast SEO is used for RSS feed titles too.

#### Bugfixes

* Fixes a bug where the focus keyphrase in the Wincher integration table on posts and terms would not be marked with an asterisk.
* Fixes a bug where a warning would be triggered when author data wasn't available for a post.
* Fixes a bug where disabled settings in the General page would be set to `Off` upon saving the settings form.
* Fixes a bug where the desktop preview would show a truncated title, while the title length progress bar and title width assessment would indicate that the title length was still within the limits.
* Fixes a bug where the keyphrase density assessment errors, or fails to mark the found keyphrases in the text, when using keyphrases that include some regular expression control characters, for example brackets.

= 19.2 =

Release date: 2022-06-28

Yoast SEO 19.2 is out today! In this release, we've rolled out some improvements to the content and SEO analyses and we've added an integration with WordProof to timestamp privacy pages on the blockchain. Read more about what's new in Yoast SEO 19.2 in [our release post in English](https://yoa.st/release-28-6-22) or [our release post in Spanish](https://yoa.st/release-28-6-22-spanish)!

#### Enhancements

* NEW: Adds an integration with WordProof, which allows for improving the trustworthiness of the privacy policy and terms and conditions pages by adding a timestamp.
* Adds support for `webp` images for OpenGraph output.
* Adds a notice that displays when Yoast SEO Premium is installed but not activated prompting the user to activate it.
* Adds a new filter `wpseo_change_home_url` that allows changing the URL checked by the Ryte integration, to support more versatile hosting setups.
* Adds a `meta author` tag to ensure that LinkedIn picks up the name of a post author properly.
* Adds the name of the article author to the `author` section of the `Article` schema piece, to ensure that Pinterest picks up the name of a post author properly.
* Enables sorting on the SEO and readability score columns on the post overview page.
* Ensures the Bing XML sitemap ping is only sent if IndexNow is disabled.
* Prevents XML sitemap pings for blogs that aren't public.
* Improves the content analysis by excluding blockquote HTML elements.
* Improves the sentence recognition by disregarding abbreviations and initials as potential sentence boundaries.
* Improves the text analysis by not splitting sentences on semicolon ;.
* Improves the text analysis by supporting sentence detection for declarative sentences in quotation marks.
* Improves the text analysis in Elementor by not always splitting on ellipsis … regardless of whether the next sentence has a valid beginning or not.

#### Bugfixes

* Fixes a bug that would cause the First-time configuration to crash when completing indexation with the Yoast admin bar menu hidden.
* Fixes a bug where filtering the OpenGraph and Twitter image to a URL containing ampersands would lead to encoding issues.
* Fixes a bug where HTML tags in the `og:description` meta tag would be displayed encoded instead of being removed completely.
* Fixes a bug where the sitemap `image:loc` URLs containing ampersands would lead to encoding issues.
* Fixes a bug where notices would show an abnormally large heading in Yoast SEO Premium page.

#### Other

* Renames the 'Keyphrase in title' SEO assessment to 'Keyphrase in SEO title'.

= 19.1.0 =

Release date: 2022-06-14

Yoast SEO 19.1 is out today! In this release, we've rolled out some improvements that make the content and SEO analyses more flexible. We've also expanded our range of crawl settings in Premium. Read more about what's new in Yoast SEO 19.1 in [our release post in English](https://yoa.st/release-14-6-22) or [our release post in Spanish](https://yoa.st/release-14-6-22-spanish)!

#### Enhancements

* Improves text analysis by splitting text on full-stop only when the next sentence is preceded by a whitespace.
* Prompts users to set up their site in order to take advantage of all SEO features.

#### Bugfixes

* Fixes a bug where the "Check links to this URL" option on admin bar menu would lead to an error page on setups with home URL different from the site URL. Props to @suascat.
* Fixes a bug where the network setting for the crawl cleanup feature would default to `Disable` when the super admin saved settings before upgrading/installing Premium.
* Fixes a bug which caused the Spanish transition word `para ilustrar` to not be recognized by the transition words assessment.

#### Other

* Adds an informative error message to the steps of the First-time configuration should an error occur.
* Adds dismissable weekly webinar promo banners to Yoast settings pages &amp; block/Elementor editor sidebars.
* Adds new disabled toggles to the Crawl settings tab in the General page.
* Improves handling of OAuth errors in the Wincher integration and clears refresh tokens that seem to be invalid.

= 19.0 =

Release date: 2022-05-31

Say hi to Yoast SEO 19.0! This release helps make your sitemaps available to Bing, we've updated Yoast SEO to add your XML sitemap link(s) to your robots.txt file — if you want. Plus: we've fixed a couple of bugs with Elementor and our readability analyses. Happy updating! Read more about what's new in Yoast SEO 19.0 in [our release post in English](https://yoa.st/release-31-5-22) or [our release post in Spanish](https://yoa.st/release-31-5-22-spanish)!

#### Enhancements

* Following a change of policy by Bing, we now reference the XML sitemap in the robots.txt file to make it discoverable for search engines.
* Changes `Disallow: /wp-admin/` to `Disallow:` in the default robots.txt file to follow our best-practice guide.

#### Bugfixes

* Fixes a bug where an error in saving the Site representation step of the First-time configuration would not block the advancement to the next step.
* Fixes a bug where editing an existing post created in the Block editor in Elementor would result in an analysis result discrepancy.
* Fixes a bug where items in lists were not excluded for the readability assessment that checks whether consecutive sentences do not begin with the same words.
* Fixes a bug where outdated information is shown in the First-time configuration Social profiles step
* Fixes a bug where saving an invalid organization name in the First-time configuration would fail without feedback.
* Fixes a bug where the schema would not be updated with the new logo when the user changed it via the First-time Configuration.
* Fixes a bug where the titles of the steps in the First-time configuration would not be translated.
* Fixes a bug where users would be able to leave a step containing errors by clicking another step's edit button.

#### Other

* Adds a Crawl settings tab in the General page with an upsell to Premium.
* Adds a Redirects page with an upsell to Premium.
* Deprecates the configuration workout classes.
* Sets the WordPress tested up to version to 6.0.

= 18.9 =

Release date: 2022-05-17

Yoast SEO 18.9 is out now! In this release, we have improved the first experience users have with the plugin. The first-time configuration takes users by the hand and guides them in properly setting everything up so that search engines understand their site. Make sure to run that first-time configuration to see if you’ve filled everything in correctly! Read more about what's new in Yoast SEO 18.9 in [our release post in English](https://yoa.st/release-17-5-22) or [our release post in Spanish](https://yoa.st/release-17-5-22-spanish)!

#### Enhancements

* Adds an `installation successful` page to welcome first-time users.
* Introduces the First-time configuration, replacing and improving the Configuration Workout.
* Renames the main admin menu item to `Yoast SEO` instead of `SEO`.

#### Bugfixes

* Fixes a bug that would lead to race conditions when using persistent object caching.
* Fixes a bug where a 403 error page would be thrown when a user tried to access the old configuration wizard.
* Fixes a bug where our How To and FAQ blocks would not handle focus correctly when using WordPress 6.0.
* Fixes a bug where the global var $post is sometimes modified unexpectedly. Props to [grantalltodavid](https://github.com/grantalltodavid).

#### Other

* Adds a `Premium` badge to the Workouts menu item.
* Updates the look of the Accounts tab in the Social page.

= 18.8 =

Release date: 2022-05-06

Did you catch the latest update from Google? Today they made some small changes to how they read XML sitemaps. But you don't have to worry about that - today's Yoast SEO 18.8 update already applies the latest standards. Read more about what's new in Yoast SEO 18.8 in [our release post in English](https://yoa.st/release-6-5-22) or [our release post in Spanish](https://yoa.st/release-6-5-22-spanish)!

#### Enhancements

* Removes XML sitemap image properties `title` and `caption` following deprecation by Google.

= 18.7 =

Release date: 2022-05-03

Meet Yoast SEO 18.7: a small Yoast SEO update, fixing several bugs and adding enhancements. We improved our Schema structured data implementation in this release and fine-tuned our SEO analyses. Read more about what's new in Yoast SEO 18.7 in [our release post in English](https://yoa.st/release-3-5-22) or [our release post in Spanish](https://yoa.st/release-3-5-22-spanish)!

#### Enhancements

* Improves the Schema by changing the `@id` for images for `Person` and `Organization` including the `logo` attribute for the latter, to have a more proper format.
* Adds a `wpseo_schema_graph` filter to allow filtering the entire Schema graph.
* Removes penalising for H1 that is not at the beginning of the text body.

#### Bugfixes

* Fixes a bug in the Schema where the `thumbnailUrl` attribute of the `Article` object would be wrong if the post had an Open Graph or Twitter image.
* Fixes typos of several types in brand names and the word metadata. Props to [NekoJonez](https://github.com/NekoJonez).

= 18.6 =

Release date: 2022-04-19

Meet Yoast SEO 18.6: a small Yoast SEO update, fixing a number of bugs, including several bugs related to the Wincher integration. With the Wincher integration, you can track the rankings of your articles in the search results. If you haven’t checked that feature out, please do so! Read more about what's new in Yoast SEO 18.6 in [our release post in English](https://yoa.st/release-19-4-22) or [our release post in Spanish](https://yoa.st/release-19-4-22-spanish)!

#### Bugfixes

* Fixes a bug where a version mismatch caused broken styling in WooCommerce select fields when linking products.
* Fixes a bug where keyphrases could show up multiple times in Wincher table.
* Fixes a bug where the Wincher connection flow would fail on certain installations.
* Fixes a bug where the Wincher integration could throw a fatal error on PHP 8.0+.

#### Other

* Adds a disabled Wincher integration toggle to the Network admin/Multisite `Integrations` tab.

= 18.5.1 =

Release date: 2022-04-05

#### Bugfixes

* Fixes a bug where a fatal error would occur on the site health page if WordFence was installed and active.
* Fixes a bug where a fatal error would occur on PHP 5.6.

= 18.5 =

Release date: 2022-04-05

Say hi to Yoast SEO 18.5! You'll find a number of fixes and enhancements. We've also included more improvements to the rebuild of the AIOSEO importer we introduced a few weeks ago. Happy updating! Read more about what's new in Yoast SEO 18.5 in [our release post in English](https://yoa.st/release-5-4-22) or [our release post in Spanish](https://yoa.st/release-5-4-22-spanish)!

#### Enhancements

* Adds a preliminary validation of All-in-One SEO data before importing it into Yoast SEO.

#### Bugfixes

* Fixes a bug where the URL preview inside the snippet editor would not consistently reflect the permalink in the Block editor.
* Fixes a bug where the Customize URL would be incorrectly escaped in our health checks. Props to [BronsonQuick](https://github.com/BronsonQuick).
* Fixes a bug where in certain edge cases a database error would show during clean-up of All-in-One SEO data.
* Fixes a bug where reusable block content would not be updated in our analysis when changed in the editor.
* Fixes a bug where an error about incorrect values in the indexables table would be displayed on certain database setups. Props to [junaidbhura](https://github.com/junaidbhura).
* Fixes a bug where a fatal error would be displayed in the Search Appearance options when using WordPress version 5.8.3 and below with themes without title-tag support.
* Fixes a bug where sitemap locations would change once the number of entries exceeded that of the first page.
* Fixes a bug where Yoast modals would close after opening after editing content in Elementor.

#### Other

* Sets the minimum required WordPress version to 5.8.

= 18.4.1 =

Release date: 2022-03-22

#### Other

* Reverts the 18.4 release due to errors in the WordProof integration.

= 18.4 =

Release date: 2022-03-22

In Yoast SEO 18.4, we're launching a new integration with an innovative new service called [WordProof](https://wordproof.com/). WordProof offers a way to add timestamps to your content and add those to the blockchain to prove ownership. Try it out now! Read more about what's new in Yoast SEO 18.4 in [our release post in English](https://yoa.st/release-22-3-22) or [our release post in Spanish](https://yoa.st/release-22-3-22-spanish)!

#### Enhancements

* Adds the possibility to timestamp your Privacy Policy page and your WooCommerce Terms and Conditions page by use of a WordProof certificate.

#### Bugfixes

* Fixes a bug where the Google preview would display wrong breadcrumbs for child pages.
* Fixes a potential error related to the `has_ancestors` column of our indexables table. Props to @junaidbhura.

#### Other

* Sets the minimum required WordPress version to 5.8.

= 18.3 =

Release date: 2022-03-08

Meet Yoast SEO 18.3! For this release, we did another round of fixes and improvements. Read more about what's new in Yoast SEO 18.3 in [our release post in English](https://yoast.com/yoast-seo-march-08-2022/) or our [release post in Spanish](https://yoast.com/es/yoast-seo-marzo-08-2022/)!

#### Enhancements

* Improves the importer so you can now import `post_meta`, `robot_txt` and search appearance options when moving from All-In-One SEO to Yoast SEO.
* Improves feedback strings for the Keyphrase Length assessment by making it explicit that we only count content words for languages with function word support.

#### Bugfixes

* Fixes a bug where the Force rewrite titles option would be shown when a user was using a block-based theme.
* Fixes a bug where the title of a page would not get included in our `get_head` REST route.
* Fixes a bug where URLs in the XML sitemaps in certain edge cases would potentially be mangled, most notably when schema-relative URLs were being used.
* Fixes an issue where HowTo images would not be optimized if they did not start with the site URL.
* Fixes a bug where HowTo images with custom width would lose their custom width in the Twenty Twenty-One theme.

#### Other

* Fixes an incompatibility with Elementor 3.6.0 where the React contents of the Yoast tab in Elementor were not rendered.

= 18.2 =

Release date: 2022-02-22

Yoast SEO 18.2 is out today! This release includes more fixes and enhancements to enjoy. We improved the workings of the FAQ and How-to blocks. Happy optimizing! Read more about what's new in Yoast SEO 18.2 in [our release post in English](https://yoa.st/release-22-2-22) or [our release post in Spanish](https://yoa.st/release-22-2-22-spanish)!

#### Enhancements

* Optimizes the images in FAQ and HowTo blocks to be more responsive and load faster.

#### Bugfixes

* Fixes a bug where the "Save changes" button would overlap with the admin sidebar on WordPress.com. Props to @DustyReagan.
* Fixes a bug where a (debug) deprecation message would show in the widget editor on WordPress 5.8 and above.
* Fixes a bug where a console warning would be thrown when adding a structured data block in the block editor, FSE editor or widget editor.

#### Other

* Adds a filter to enable/disable creating indexables: `Yoast\WP\SEO\should_index_indexables`
* Adds an `__isset` magic method to ease working with helper surfaces. Props to @nlemoine.

= 18.1 =

Release date: 2022-02-08

Yoast SEO 18.1 is out today! This new release brings another round of bug fixes, plus a new way for us to handle the translations in our plugin — leading to a smaller plugin size for you to install. Read more about what's new in Yoast SEO 18.1 in [our release post in English](https://yoa.st/release-8-2-22) or [our release post in Spanish](https://yoa.st/release-8-2-22-spanish)!

#### Enhancements

* Changes the overall SEO score color on the post type overview pages to red when no keyphrase is set.

#### Bugfixes

* Fixes a bug where images inserted into our FAQ or HowTo blocks would be rendered wider then their respective container when using a Block Theme.
* Fixes a bug where plugins that would initialize after our plugin would be unable to register certain plugin information or utilize certain hooks.
* Fixes a bug where capitalized keyphrases would show up twice in the Wincher SEO performance tracking modal.

#### Other

* Switches from packaged script translations to those from wordpress.org in order to reduce ZIP size and disk usage.

= 18.0 =

Release date: 2022-01-25

Yoast SEO 18.0 is out now! This release contains a number of bug fixes and a couple of enhancements. We've enhanced schema presentation for non-alphanumeric languages and made several improvements in both the SEO and readability analysis of the Japanese language. Read more about what's new in Yoast SEO 18.0 in [our release post in English](https://yoa.st/release-18-0) or [our release post in Spanish](https://yoa.st/release-18-0-spanish)!

#### Enhancements

* Limits a potentially slow query to certain routes, which makes it so it gets called fewer times.
* Enhances schema presentation for languages that are not alphanumeric. Props to [sous-studio](https://github.com/sous-studio).

#### Bugfixes

* Fixes a bug where removing an image from our Facebook Preview and Twitter Preview modals could lead to a confusing experience due to focus loss.
* Fixes a bug where clicking outside of a Yoast modal in the block editor would not close the modal.
* Fixes a bug where Japanese keyphrase enclosed in double quotes failed to be recognized in Keyword in meta description, Keyword density, Keyphrase distribution, Keyphrase in introduction, Keyphrase in image text and in Keyphrase in subheading assessments.
* Fixes a bug where synonyms enclosed in double quotes in the Link keyphrase assessment failed to be recognized even when there were exact matches in the anchor text.
* Fixes a bug where incorrect assessments were shown for keyphrases only consisting of function words in Japanese.
* Fixes a bug where a fatal error would be thrown if the link count of a corrupt indexable item would get updated.
* Fixes a bug where the title tag would not be correct in Full Site Editing themes.
* Fixes a bug where the text length assessment would count URLs from videos loaded in the article in the total amount of the copy characters in Japanese.
* Fixes a bug where Japanese full stops in a text would be counted as three characters instead of one.

#### Other

* Sets the WordPress tested up to version to 5.9.
* Sets WooCommerce tested up to version to 6.1.

= 17.9 =

Release date: 2022-01-11

Yoast SEO 17.9 is now available! Yoast SEO now comes with a keyphrase tracking tool powered by Wincher that lets you monitor your keyphrases, straight from the plugin! Make sure to try out this new keyphrase tracking feature and let us know what you think. Read more about what's new in Yoast SEO 17.9 in [our release post in English](https://yoa.st/release-17-9) or [our release post in Spanish](https://yoa.st/release-17-9-spanish)!

#### Enhancements

* Introduces a keyphrase position tracking tool that gives insight into how your content ranks in the search results. Powered by Wincher.
* Improves Japanese text analysis results by adding functionality to segment Japanese texts into sentences and words.
* Adapts relevant assessments to count text length in characters instead of words in Japanese.
* Completes the readability analysis for Japanese by adding the transition words and sentence beginnings assessments.
* Improves keyword detection for Japanese by adding a function words list.
* Adapts Keyphrase in title scoring criteria for Japanese: the exact match keyphrase is not required for Japanese unless the keyphrase is enclosed in double quotes.
* Disables the Keyphrase in slug assessment for Japanese due to currently being unable to match keyphrases written in Japanese characters in slugs written in Latin characters.
* Improves the accuracy of the Estimated Reading Time results for Japanese.
* Adapts the recommended meta description length and meta description preview limit for Japanese.
* Improves the Workouts overview for mobile screens.
* Makes sure we don't output the same `sameAs` URL twice on `Person` and `Organization`.
* Adds "Blog Post" / `BlogPosting` as a potential Schema `Article` type.

#### Bugfixes

* Fixes a bug where a fatal error would be thrown when using PHP 8.1.
* Fixes a bug where the `og:image:type` meta would not be output correctly. Props to [@dodomorandi](https://github.com/dodomorandi).
* Fixes a bug where the incoming link count of a post would not return to zero if all incoming links were removed.
* Fixes a bug where the meta description would get trimmed to an empty string if the text doesn't have any space. Props to [@waviaei](https://github.com/waviaei).
* Fixes a bug where Link keyphrase assessment would not find a match when the keyphrase is enclosed in double quotes.
* Fixes a bug where ` 
` tags with attributes in the text would not be converted to paragraph tags. As a result some long paragraphs in the text might not have been highlighted in the Paragraph length assessment.

#### Other

* Improves compatibility with PHP 8.1 by adding validations and handling deprecations.
* Reverts the removal of the deprecated `WPSEO_Frontend` class.
* Changes the font size of the alerts from 14px to 13px.

= 17.8 =

Release date: 2021-12-14

Yoast SEO 17.8 is out now and ready for you to download. In this release, we fix a number of bugs and added a few enhancements for you to enjoy! Read more about what's new in Yoast SEO 17.8 in [our release post in English](https://yoa.st/release-17-8) or [our release post in Spanish](https://yoa.st/release-17-8-spanish)!

#### Enhancements

* Improves the user direction in the configuration workout.
* Adds a sleep interval to the WP CLI index command to limit server load while this command is running. Props to [roborourke](https://github.com/roborourke).

#### Bugfixes

* Fixes a bug where on small screens the advanced setting's search engine follow checkbox would have a misplaced center.
* Fixes a bug where the styling of the introduction dialog in Elementor would be broken due to changes in Elementor.
* Fixes a bug where the reading time functionality for languages other than English would incorrectly output English reading speed values.
* Fixes a bug where certain text strings in the Google, Facebook and Twitter previews would not be translated.
* Fixes a bug where the state of indexation was not persisted when switching between workouts and the workouts page.
* Fixes a bug where the Workouts page wouldn't display translations.

#### Other

* Fixes some styling issues in the configuration workout.
* Prevents SEO managers from changing the site description in the configuration workout.
* Optimizes and compresses several .png images to reduce their size. Props to [lowwebtech](https://github.com/lowwebtech).

= 17.7.1 =

Release date: 2021-12-01

#### Bugfixes

* Fixes a bug where the notification to start configuring Yoast SEO would also been shown on existing installations.
* Fixes a bug where Yoast addons would not inherit the auto-update settings from Yoast SEO.
* Fixes a bug where changing the auto-update settings of another plugin could stop Yoast addons from being auto-updated.

= 17.7 =

Release date: 2021-11-30

Meet Yoast SEO 17.7! This release introduces a new configuration workout to help you set up the Yoast SEO plugin properly from the get-go. Get the basic settings right in Yoast SEO and create a solid foundation for your SEO! Read more about what's new in Yoast SEO 17.7 in [our release post in English](https://yoa.st/release-17-7) or [our release post in Spanish](https://yoa.st/release-17-7-spanish)!

#### Enhancements

* Replaces the configuration wizard with a configuration workout, which makes it easier to configure Yoast SEO for your website.
* Adds a link to the archive page for the content types in the Search Appearance settings. Props to [felipelousantos](https://github.com/felipelousantos).
* Adds a few more French transition words to be recognised by the transition words assessment. Props to [Cellophile](https://github.com/Cellophile).

#### Bugfixes

* Fixes a bug where non-passive Greek words ending in -ου or -είτε were previously recognized as passive. Props to [artemidaspatanews](https://github.com/artemidaspatanews).
* Fixes a bug where some post types would cause a PHP warning about custom fields.
* Fixes a bug where memory issues could occur when indexing a site with large amounts of terms assigned to many posts.

= 17.6 =

Release date: 2021-11-16

Yoast SEO 17.6 is out today! This new release brings several fixes and enhancements to improve how the plugin works. And we’re getting it ready for the upcoming WordPress 5.9 release. Go check it out! Read more about what's new in Yoast SEO 17.6 in [our release post in English](https://yoa.st/release-17-6) or [our release post in Spanish](https://yoa.st/release-17-6-spanish)!

#### Enhancements

* Enhances the upgrade flow for add-ons by considering the minimum required WP version before showing any available updates.
* Enables the Schema Article type for any post type supporting authors.
* Removes the placeholder texts for title and description inputs in the Google preview and Social preview since they have no semantic value.

#### Bugfixes

* Fixes a bug where the `page` post type wasn't allowed to display an `Article` piece in the Schema.
* Fixes a bug where the content inside of reusable blocks would not be analyzed correctly.

#### Other

* The plugin will no longer block installation on PHP 8.0+ when installed via Composer.
* Deprecates the `wpseo_schema_article_post_types` filter.

= 17.5 =

Release date: 2021-11-02

Say hello to Yoast SEO 17.5! Or maybe γεια would fit better, as this release introduces Greek readability support. Plus: you’ll also be able to find | and ~ title separators again. Happy updating! Read more about what's new in Yoast SEO 17.5 in [our release post in English](https://yoa.st/release-17-5) or [our release post in Spanish](https://yoa.st/release-17-5-spanish)!

#### Enhancements

* Completes the readability analysis for Greek by adding the transition words, sentence beginnings and passive voice assessments.
* Improves keyword detection for Greek by adding a function words list.
* Reduces the right padding of the collapsible sidebar buttons to match the block editor's new styling.
* Restores the `|` and `~` separators.
* Reduces the right padding of the collapsible sidebar buttons to match Gutenberg's new styling.

#### Bugfixes

* Fixes a bug where the analysis highlight button would be visible on tags, categories, and custom taxonomies even though we don't support highlighting for those types.
* Fixes a bug where links to items on the same page were incorrectly identified as links to other pages, leading to an incorrect result on the Link keyphrase assessment.

= 17.4 =

Release date: 2021-10-19

Yoast SEO 17.4 is out today! This release comes with several fixes and enhancements to help database performance on larger sites by cleaning up data and streamlining retrieval. Happy updating! Read more about what's new in Yoast SEO 17.4 in [our release post](https://yoa.st/release-17-4)!

#### Enhancements

* Improves two queries used to determine whether or not a site has been fully processed using our SEO data optimization. This should prevent potential slowdowns in extremely large sites.

#### Bugfixes

* Fixes a bug where the `url` property in the search page schema would be empty.
* Fixes a bug where a duplicate canonical tag was output for web stories created with the Web Stories plugin. Props to [swissspidey](https://github.com/swissspidy).
* Fixes a bug where a race condition could occur that caused the rewrite rules to be flushed on every page request when using a persistent cache like Redis. This may speed up your site’s load times if it’s using persistent caching.

= 17.3 =

Release date: 2021-10-05

Yoast SEO 17.3 is out today! This release includes general bug fixes to some SEO assessments and improvements to indexables data management. Now is as good a time as any to start optimizing your content with Yoast SEO! Read more about what's new in Yoast SEO 17.3 in [our release post](https://yoa.st/release-17-3)!

#### Enhancements

* Improves the accuracy of the Keyphrase in slug assessment by correctly detecting multi-word keyphrases with at least one hyphenated word in the slug.
* Changes the default color for overall scores to red.

#### Bugfixes

* Fixes a bug where the meta description bar indicator color would not always match the color of the assessment bullet.
* Fixes a bug where the placement variables Category, Name and Tag would not show up in the snippet preview.
* Fixes a bug where the `path` of open graph images of the JSON head would be incorrect.

#### Other

* Adds version management to our indexables framework; this makes the SEO Optimization process more robust, and prepares for future features.

= 17.2.1 =

Release date: 2021-09-28

#### Bugfixes

* Fixes a bug that could lead to a fatal error in the breadcrumbs block for auto-draft posts.

= 17.2 =

Release date: 2021-09-21

Yoast SEO 17.2 is out now! Yoast SEO comes with many powerful tools that will help you write SEO-proof and readable texts. And as of today, you can also work on your readability in the Farsi language. Readable content is awesome content! Read more about what’s new in Yoast SEO 17.2 in [our release post](https://yoa.st/release-17-2)!

#### Enhancements

* Completes the readability analysis for Farsi by adding the transition words, sentence beginnings and passive voice assessments, and by adjusting the sentence length assessment to make it more appropriate for the Farsi language.
* Improves keyword detection for Farsi by adding more categories to the list of function words. E.g., general adjectives and adverbs category, conjunctions, and articles.
* Cleans up indexables for posts with an `auto-draft` post-status, in order to speed-up your admin pages.

#### Bugfixes

* Fixes a bug where indexables would be created for post auto-drafts when the SEO optimization is run.

#### Other

* Loads our help beacon on the workouts page.

= 17.1 =

Release date: 2021-09-07

Yoast SEO 17.1 is out today! In this release, you’ll find a couple of small changes that’ll help you write great titles that stand up to Google’s scrutiny. It also includes some behind-the-scenes improvements, including several fixes for our indexables data management. For now, please enjoy Yoast SEO and write the best possible content in the language of your choice! Read more about what’s new in Yoast SEO 17.1 in [our release post](https://yoa.st/release-17-1)!

#### Enhancements

* Improves the performance of saving posts by excluding unchanged items, especially noticeable on posts with many links.
* Stops showing the SEO Optimization notification on non-production sites.
* Improves the filtering of function words in Dutch, English, Indonesian, Russian, and Spanish by including time-related words like 'minute'.
* Updates the styling of our Google preview, to reflect the updated styling of the Google search results.
* Stops warning users when they have short titles, because concise, specific titles are less likely to be altered by Google.
* Removes the `|` and `~` separator options from titles, because Google frequently replaces these in search results.

= 17.0 =

Release date: 2021-08-24

Say hello to Yoast SEO 17.0! This release includes some behind-the-scenes improvements, including several fixes for our indexables data management. For now, please enjoy Yoast SEO and write the best possible content in the language of your choice! Read more about what’s new in Yoast SEO 17.0 in [our release post](https://yoa.st/release-17-0)!

#### Enhancements

* Speeds up load times of admin pages by preventing unnecessary counts of unindexed objects.
* Cleans up items from the database that are not used anymore, thereby reducing the size of many sites' database.
* Improves the overall performance and responsiveness in Gutenberg.

#### Bugfixes

* Fixes a bug where the `Save all` button in the bulk editor did not work.
* Fixes a bug where the `Existing` column in the bulk editor did not update after save.

#### Other

* Updates the message that recommends you to install WooCommerce SEO when WooCommerce is installed.

= 16.9 =

Release date: 2021-08-10

Meet Yoast SEO 16.9: This release comes with two new image SEO assessments and improved performance. Happy updating! Read more about what’s new in Yoast SEO 16.9 in [our release post](https://yoa.st/release-16-9)!

#### Enhancements

* Splits the `Image alt attributes` assessment into two assessments. The `Images` assessment checks if the page contains at least one image. The `Image Keyphrase` assessment checks if the images have alt texts, and if those alt texts contain the keyphrase.
* Makes the `Transition Word` assessment not applicable when the text has less than 200 words, as transition words are less relevant for very short texts.
* Reduces the load time of admin pages, by reducing the number of database queries and optimizing the queries themselves.
* Improves the performance of large posts in the Block editor, Classic editor and Elementor.
* Adds error details to the error message if SEO optimization fails for some unforeseen reason.
* Cleans up indexables for WooCommerce check-out pages from the indexable table, in order to improve performance.
* Adds post link indexing and term link indexing to the `wp yoast index` WP-CLI command.

#### Bugfixes

* Fixes a bug where the `robots` meta tag could have incorrect values if users called the `wp_robots` filter to set certain values to `false`. Props to [Roy-Orbison](https://github.com/Roy-Orbison).

= 16.8 =

Release date: 2021-07-27

Yoast SEO 16.8 is out today! This release comes with an updated readability analysis with support for two new languages: Norwegian and Slovak. Did you know that Yoast SEO is nearing language support for twenty languages? Read more about what’s new in Yoast SEO 16.8 in [our release post](https://yoa.st/release-16-8)!

#### Enhancements

* Completes the readability analysis for Slovak by adding the transition words, sentence beginnings and passive voice assessments.
* Improves keyphrase recognition in Slovak by filtering out function words such as `som`, `a`, `jedna`, `že`.
* Completes the readability analysis for Norwegian by adding the transition words, sentence beginnings and passive voice assessments.
* Improves keyphrase recognition in Norwegian by expanding the list of function words that are filtered out.
* Adds the first two steps of the Premium cornerstone workout.
* Throws a notification in the plugins page to users who have an expired subscription.
* Improves the performance of background requests (admin-ajax calls).

#### Bugfixes

* Fixes a bug where paginated static frontpages would fail to output a valid breadcrumb.
* Fixes a bug where the image selectors in the search appearance and social settings did not have a screen reader text.

= 16.7 =

Release date: 2021-07-13

Meet Yoast SEO 16.7! This release comes with extended support for headless WordPress. Yoast SEO comes with a REST API that developers can use to access our metadata in a headless WordPress installation. In Yoast SEO 16.7, we’re making more data available and also in a different format: JSON. Read more about what’s new in Yoast SEO 16.7 in [our release post](https://yoa.st/release-16-7)!

#### Enhancements

* Upgrades our REST API to include individual keys/values for all of our meta tags, data and schema output. Read all about it in [this in-depth explanation about our REST API](https://yoa.st/rest-api).

#### Bugfixes

* Fixes a bug where a database entry would be added in the indexables table every time a WooCommerce order was created.
* Fixes a bug where the SEO optimization could run indefinitely when the database contained at least 25 faulty indexables without a permalink.
* Fixes a bug where the Advanced section and Schema tab wouldn't be visible in the metabox for Editors. Props to [jordif](https://github.com/jordif).

= 16.6.1 =

Release date: 2021-07-01

#### Bugfixes

* Fixes a bug where many Premium editor features would not work if Yoast SEO was updated to version 16.6 while Yoast SEO Premium was still on version 16.5 or lower.

= 16.6 =

Release date: 2021-06-29

Yoast SEO 16.6 comes with a new round of improvements and fixes. We’ve updated the analysis to exclude sentences inside tables and table captions from the consecutive sentences assessment. Enjoy! Read more about what’s new in Yoast SEO 16.6 in [our release post](https://yoa.st/release-16-6)!

#### Enhancements

* Updates `SearchAction` schema to comply with Google's updated specification.
* Excludes sentences inside tables and table captions from the consecutive sentences assessment.
* Adds adjacent relative links (`rel="prev"` and `rel="next"`) for WooCommerce shop pages. Props to [stodorovic](https://github.com/stodorovic).
* Adds increased compatibility for LiteSpeed web servers. Props to [J-Rey](https://github.com/J-Rey).
* Adds adjacent relative links for WooCommerce shop pages. Props to [stodorovic](https://github.com/stodorovic).

#### Bugfixes

* Fixes a bug where an error would be shown on the page overview and post overview when the website's MySQL database was run in ANSI-mode. Props to [stodorovic](https://github.com/stodorovic).
* Fixes a bug where shortcodes would be removed from the Open Graph description even when they were explicitly added. Props to [Lomerill](https://github.com/Lomerill).
* Fixes a bug where using the `wpseo_schema_{@type}` filter would result in a fatal error.
* Fixes a bug where the last breadcrumb item was stripped in breadcrumb Schema output on subsequent pages of a static posts page.

= 16.5 =

Release date: 2021-06-15

Yoast SEO 16.5 is out today! This release comes with a number of fixes and enhancements. For instance, easier social media settings, better understanding of the Turkish and Czech languages and improvements to the breadcrumbs schema output. Read all about it in [our release post](https://yoa.st/release-16-5)!

#### Enhancements

* Improves passive voice recognition for Turkish.
* Improves accuracy of the Czech passive voice assessment by separating clauses based on punctuation marks, and by expanding the list of stopwords.
* Changes the breadcrumbs schema output so Google can understand it better.
* Moves the social settings for the homepage from the Social &gt; Facebook tab, to Search Appearance &gt; General.
* Improves the organization of the Search Appearance &gt; General tab, with distinct collapsibles for the Title Separator, the Homepage settings and the Schema.org settings.
* Introduces a notice to be displayed in Search Appearance &gt; General in place of the Social settings for the Homepage when Open Graph is disabled.
* Introduces an image validation warning for the Homepage social image and the Default social image to warn about unsupported file extensions.
* Improves spacing, headings and toggle labels in the Search Appearance settings, and makes the forms more consistent.
* Less is more: removes a whole bunch of ads from the Yoast SEO admin screens.
* Optimizes subscription validations made by Premium add-ons.
* Improves the truncation of the `primary_focus_keyword` field in the database to handle multibyte characters. Props to [rickhurst](https://github.com/rickhurst).
* Introduces a partial integration of the Yoast SEO meta box in the Web Stories WordPress editor. Props to [swissspidy](https://github.com/swissspidy).

#### Bugfixes

* Fixes a bug where `max-image-preview:large` would be output in the robots meta tag in combination with `noimage`.

#### Other

* Moves the 'Force rewrite titles' toggle into a separate paper in the General Search Appearance settings.

= 16.4 =

Release date: 2021-06-01

Meet Yoast SEO 16.4: This brand-new version of Yoast SEO comes with a rewritten language analysis, plus a newly supported language: Czech. People who write in this language can now fully use our tools to improve their content. We hope you enjoy this update! Read more about what’s new in Yoast SEO 16.4 in [our release post](https://yoa.st/release-16-4)!

#### Enhancements

* Completes the readability analysis for Czech by adding the transition words, sentence beginnings and passive voice assessments.
* Improves keyphrase recognition in Czech by filtering out function words such as `dvou`, `tvému`, `nějaký`.
* Improves the accuracy of passive voice detection in Portuguese.
* Adds the missing Polish transition word `jak wiemy` (props to @jarekherisz).
* Makes all twitter meta tags self-closing, for the sake of consistency and to allow pages to pass validation in some tools.
* Improves the UX consistency between the notification counter in the admin bar and in the sidebar.
* Makes the notification counter in the admin bar a closer match to the counter the sidebar.

#### Bugfixes

* Fixes a bug where new feature notification couldn't be dismissed.
* Fixes a bug where the primary term for custom post types was not always properly set for posts edited in the Gutenberg editor.
* Fixes a bug where the schema output could be incorrect on terms with the same ID as the static posts page.

#### Other

* Adds a missing space to the feedback text in the keyphrase in introduction assessment.

= 16.3 =

Release date: 2021-05-18

Out now: Yoast SEO 16.3! This release helps you with one of the key aspects of modern SEO: Structured data. Yoast SEO 16.3 comes with a lot of enhancements for the Schema.org implementation. Enjoy! Read more about what’s new in Yoast SEO 16.3 in [our release post](https://yoa.st/release-16-3)!

#### Enhancements

* Adds the Table of Contents accessibility feature to the `Article` Schema with a fallback to the `WebPage` Schema, when using the Yoast Table of Contents block.
* Adds the `url` property to the `Author` Schema on a post when author archives are enabled.
* Adds the `wordCount` and `thumbnailUrl` attributes to `Article` schema pieces.
* Allows adding multiple FAQ blocks to a post or page.

#### Bugfixes

* Fixes a bug where a malformed `Organization` piece would be added to the Schema output if the company logo was an unsupported image.
* Fixes a bug where we would accidentally include unminified CSS files in the zip. This led to an unnecessary zip size increase.
* Fixes a bug where the complete options array could be re-saved in the database at each frontend request.
* Fixes a bug where both `noindex` and `index` values could be added to the `robots` meta tag on the WordPress login screen.
* Fixes a rare bug where the name property could be missing in the breadcrumb Schema due to plugin conflicts.

#### Other

* Adds the `yoast_display_gutenberg_compat_notification` filter to allow disabling the Gutenberg compatibility notification.
* Adds the `wpseo_schema_person_data` filter to enable the filtering of `Person` Schema by the user's ID.
* Adds the `Yoast\WP\SEOdmin_post_types_archive` action at the end of the archive section of the custom post types in Search Appearance.
* Deprecates the `wpseo_admin_page_meta_post_types` action in favor of the new `Yoast\WP\SEOdmin_post_types_beforearchive` action.
* Deprecates the `wpseo_admin_page_meta_taxonomies` action in favor of the new `Yoast\WP\SEOdmin_taxonomies_meta` action.
* Improves the layout of the Search Appearance collapsibles.
* Improves spacing between settings sections in the Search Appearance page.
* Replaces all occurrences of 'SEMrush' by 'Semrush' to reflect Semrush's rebranding.

= 16.2 =

Release date: 2021-04-28

Say hi to Yoast SEO 16.2! This release focuses on improving stability and fixing several bugs. It also includes several enhancements. Read more about what’s new in Yoast SEO 16.2 in [our release post](https://yoa.st/release-16-2)!

#### Enhancements

* Enables/disables auto-updates for the ACF Content Analysis for Yoast SEO plugin when auto-updates for Yoast SEO are enabled/disabled.
* Improves the accessibility of the social sharing links in the post publish panel.
* Changes the output of the `articleSection` and `keywords` attributes of the Article schema to an array instead of comma-separated values.
* Improves the performance by optimizing the way `Article` schema is built, saving a query on pageload.

#### Bugfixes

* Fixes a bug where saving posts containing URLs without protocol would fail or trigger warnings.
* Fixes a bug where the current webpage would not always be referenced correctly in the breadcrumb schema output.
* Fixes a bug where robots metadata were not returned when requesting metadata via our `get_head` REST route.
* Fixes a bug where the primary term isn't saved at the right moment resulting in having an unexpected term for the breadcrumbs.
* Fixes a bug where our add-ons would not automatically be updated if Yoast SEO was the first plugin for which the user ever enabled auto-updates.

#### Other

* Adds the `'wpseo_enable_editor_features_' . $post_type` filter to allow users to show the Yoast SEO metabox on non-public post types if these are accessible. Props to [jondcampbell](https://github.com/jondcampbell).

= 16.1.1 =

Release date: 2021-04-06

#### Bugfixes

* Fixes a bug where a fatal error would be thrown when creating a new Elementor template or editing an existing one.

= 16.1 =

Release date: 2021-04-06

Yoast SEO 16.1 is out today! It features several enhancements and fixes that make the plugin chug along nicely. Happy updating! Read more about what’s new in Yoast SEO 16.1 in [our release post](https://yoa.st/release-16-1)!

#### Enhancements

* Improves the performance of the SEO data indexing process by optimizing the queries used for fetching unindexed objects.
* Adds your OpenGraph or Twitter image as the main image in Schema when they're set.
* Adds `contentUrl` to the schema image output.
* Improves the performance of the post indexing. Props to [Ovidiu Liuta](https://github.com/ovidiul).
* Improves the URL in the Google preview when in the desktop mode.
* Improves the performance of loading the person &amp; organization logo in Schema.
* Improves the performance by optimizing several calls to WP path and basename functions by using already defined and calculated constants.
* Removes the keyphrase highlighting in the mobile meta description to reflect new Google behavior.

#### Bugfixes

* Fixes a bug where the analysis highlight button would be visible in our Elementor integration even though we don't support it.
* Fixes a bug where a warning was shown on the Features settings page when running the plugin on PHP 8.0.
* Fixes a bug where a warning was shown on the Integrations settings page when running the plugin on PHP 8.0.
* Fixes a bug where, on a multisite installation, enabling/disabling auto-updates for Yoast SEO would not automatically enable/disable auto-updates for Yoast SEO Premium and the other Yoast add-ons.
* Fixes a bug where the breadcrumbs aren't updated properly when editing a post via the quick edit.
* Fixes a bug where the rewrite rules would not always be flushed on plugin activation.

= 16.0.2 =

Release date: 2021-03-18

#### Enhancements

* Changes the deactivation prevention text on the Plugins page from ‘Deactivate Yoast SEO Premium first’ to ‘Required by Yoast SEO Premium’ to avoid confusion.

= 16.0.1 =

Release date: 2021-03-16

#### Bugfixes

* Fixes a bug where in rare cases incorrect usage of `WP_Query` could lead to incorrect SEO data.

= 16.0 =

Release date: 2021-03-16

Yoast SEO 16.0: The Sweet Sixteen release is out! It comes with several fixes and improvements. Happy updating and thank you for using Yoast SEO! Read more about what’s new in Yoast SEO 16.0 in [our release post](https://yoa.st/release-16-0)!

#### Bugfixes

* Fixes a bug where invalid breadcrumbs would show PHP warnings.
* Fixes a bug where a fatal error would be thrown when a post ancestor was not an indexable.
* Fixes a bug where a fatal error would be thrown when both Yoast SEO and Polylang for WooCommerce were installed, and the site contained WooCommerce variable products. Props to [manooweb](https://github.com/manooweb).

#### Other

* Sets the WordPress tested up to version to 5.7 and minimum supported WordPress version to 5.6.

= 15.9.2 =

Release date: 2021-03-11

#### Bugfixes

* Fixes a bug where the order of the robots values was suboptimal when running WordPress 5.7. Note that the order has no effect on how the values are interpreted.

= 15.9.1 =

Release date: 2021-03-04

Welcome to Yoast SEO 15.9.1! This release contains an improvement for the FAQ block schema output, and makes sure the plugin is compatible with WordPress Core's auto-update feature and `robots` changes. Read more about those changes in [our post about Yoast SEO 15.9.1 and WordPress 5.7](https://yoa.st/release-15-9-1)!

#### Enhancements

* Removes `mainEntityOfPage` from our FAQ Schema block output and moves it to `mainEntity` on the `WebPage` output, fixing a Google parse issue with those FAQ blocks.
* Performance enhancements in the post indexable builder by skipping link creation on drafts.

#### Bugfixes

* Fixes a bug where indexable creation caused compatibility problems with code that would hook in to new post creation.

#### Other

* Adds a notification to prompt users to enable auto-updates for Yoast SEO, in case they also have auto-updates for WordPress Core enabled.
* Ensures compatibility with WordPress Core's `robots` meta tag by hooking into the `wp_robots` filter and using our settings there.
* Enables/disables auto-updates for the Yoast Woocommerce, News, Video and Local SEO plugins when auto-updates for Yoast SEO are enabled/disabled.

= 15.9 =

Release date: 2021-02-23

Yoast SEO 15.9 is out! This release comes with performance improvements and general enhancements. Happy updating and thanks for using Yoast SEO! Read more about what’s new in Yoast SEO 15.9 in [our release post](https://yoa.st/release-15-9)!

#### Enhancements

* Adds a preview of the chosen image for the organization and person image, social images, Facebook front page image and Facebook default image.
* Improves interoperability and consistency in database queries.
* Improves the performance by preventing database queries for the homepage indexable.

#### Bugfixes

* Fixes a bug where the disabled style of the switch toggles didn't look right.

= 15.8 =

Release date: 2021-02-10

Say hi to Yoast SEO 15.8! This release comes with a brand-new breadcrumbs block for the block editor. Try it out and guide your users - and Google! Read more about what’s new in Yoast SEO 15.8 in [our release post](https://yoa.st/release-15-8)!

#### Enhancements

* Adds a breadcrumbs block, allowing users to add breadcrumbs to a page or post using the block editor, or to a widget area using the Gutenberg plugin.
* Changes the default setting to enable breadcrumbs for the theme to `true`. This means themes that declare theme support for this feature automatically output Yoast breadcrumbs on every page. Existing installs will not be impacted by this change.
* Breadcrumbs settings can now always be edited, regardless of if the breadcrumbs are enabled for the theme.
* Like the block, the breadcrumbs shortcode is now always rendered, regardless of if the breadcrumbs are enabled for the theme.
* Improves the loading time of the posts overview page in the WordPress backend. Props to [Rahe](https://github.com/Rahe).
* Makes sure the breadcrumbs schema is always present, except on 404 pages.

#### Bugfixes

* Fixes a bug where the target indexable for relative links was not properly detected.
* Fixes a bug where scheme-relative links were not parsed correctly.
* Fixes a bug where paginated WooCommerce shop pages did not have the right canonical.
* Fixes a bug where custom capabilities could malfunction due to a race condition. Props to [Jerome Charaoui](https://github.com/jcharaoui).

= 15.7 =

Release date: 2021-01-26

Meet Yoast SEO 15.7! For this release, we thought we’d remind you of the powerful content analysis in Yoast SEO - it helps you write awesome content that ranks! Read more about what’s new in Yoast SEO 15.7 in [our release post](https://yoa.st/release-15-7)!

#### Enhancements

* Expands the readability analysis for Turkish:

* Adds the transition words assessment.
* Adds the consecutive sentences beginnings assessment.
* Adds the sentence length assessment.
* Adds the passive voice assessment.

* Improves keyphrase recognition in Turkish by filtering out function words such as `birinci`, `i̇kinci`, `üçüncü`.
* Adds the advanced snippet variables to the Social previews of our Elementor integration.

#### Bugfixes

* Fixes a bug where empty author archive pages would be indexed when the author had published a custom post-type that was not shown on his/her author archive page. Props to [stodorovic](https://github.com/stodorovic).

#### Other

* Changes the wording on the `my.yoast.com` connect error shown in Health Check when a Yoast premium plugin is enabled, to lead with what the user's problem is.
* Removes the release notification as the added benefit of having it is minimal.

= 15.6.2 =

Release date: 2021-01-12

#### Bugfixes

* Fixes a bug where notifications in the notification center would not be dismissible on sites using FastCGI.

= 15.6.1 =

Release date: 2021-01-12

#### Bugfixes

* Fixes a bug where the estimated reading time would not be shown when posts that were created before Yoast SEO 15.6 were shared on Slack.

#### Other

* Adjusts the default words per minute for the estimated reading time from 250 words per minute to 200 words per minute.

= 15.6 =

Release date: 2021-01-12

Say hi to Yoast SEO 15.6! In the latest version of Yoast SEO, you’ll find a number of bug fixes and performance enhancements. Happy updating! Read more about what’s new in Yoast SEO 15.6 in [our release post](https://yoa.st/release-15-6)!

#### Enhancements

* Improves keyphrase recognition in Norwegian by filtering out function words such as 'tredje', 'deres' and 'noen'.
* Improves the performance of the taxonomy sitemap generation. Props to [mikeyarce](https://github.com/mikeyarce).
* Adds the Tag, Category and Primary Category snippet variables in the Google preview of our Elementor integration.
* Adds advanced snippet variables to the Google preview of our Elementor integration.
* Ensures that there's always a meta description for Web Stories. Props to [swissspidy](https://github.com/swissspidy).
* Extends the plugin conflict list.

#### Bugfixes

* Fixes a bug where the non-indexable custom post types `elementor_library` and `oembed_cache` would be saved to the indexable table.
* Fixes a bug where the SEMrush modal would trigger errors and wouldn't display a chart when all the Trend values were zero.
* Fixes a bug where very large WordPress installations would experience time-outs because the database would be overloaded with duplicate indexable IDs.
* Fixes a bug where the social preview placeholders and info text would not be translatable.

#### Other

* Deprecates the `WPSEO_Validator` class because it was not used anymore. Props to [rafaelbernard](https://github.com/rafaelbernard).
* Fixes the URL to the Travis badge on our open source GitHub repository. Props to [rodrigoprime](https://github.com/rodrigoprimo).
* Makes the integration with Web Stories for WordPress more robust. Props to [swissspidy](https://github.com/swissspidy).

= 15.5 =

Release date: 2020-12-15

Out now: Yoast SEO 15.5! You can easily check if you are doing a great job in terms of the readability of your text when writing in Hungarian! Yoast SEO helps you produce a powerful piece of content that’s easy to read. It also gives you feedback on what to improve! Read more about what’s new in Yoast SEO 15.5 in [our release post](https://yoa.st/release-15-5)!

#### Enhancements

* Improves and expands Hungarian language support:

* Improves keyphrase recognition and internal linking by filtering function words such as 'harmadik', 'tiétek', and 'valaki'.
* Improves the transition words assessment.
* Adds the passive voice assessment.
* Adds the consecutive sentences assessment to ensure variety in a text.

* Removes the Open Graph and Twitter author metadata on pages and other non-post post types.
* Adds breadcrumb Schema to the homepage.

#### Bugfixes

* Fixes a bug where network-wide settings about the Enhanced Slack Sharing feature would not be saved.
* Fixes a bug where translations on the Search Appearance pages would be missing.
* Fixes a bug where subsites in a multisite network could have an enabled feature toggle for the `Usage tracking` feature, even though subsites never send tracking data.
* Fixes a bug where the Yoast SEO dashboard widget would still fetch data even when the dashboard itself was hidden.
* Fixes a bug where the TinyMCE editor on term edit pages would not load correctly when using WordPress 5.6.

#### Other

* Removes support for the Facebook App ID, as Facebook has indicated this feature is deprecated on their side.
* Adds a notification that tells the user to install and activate the Yoast SEO Multilingual plugin when the WPML plugin is installed and activated.

= 15.4 =

Release date: 2020-12-02

It’s here: Yoast SEO 15.4! In this release, you’ll find a seamless, easy-to-use integration of Yoast SEO with Elementor. Building websites and optimizing content for the search engines now in one workflow! Read more about what’s new in Yoast SEO 15.4 in [our release post](https://yoa.st/release-15-4)!

#### Enhancements

* Introduces a seamless integration of Yoast SEO content analysis into the Elementor editor.
* Makes it possible to recognize forms of keyphrases in Arabic when they are preceded by certain multi-letter prefixes, e.g. والقبعة ,فسحرية, or وبالمفتاح.

#### Bugfixes

* Fixes a bug where `post-sitemap.xml` would cause a fatal error when the filter `post_link` required a `WP_Post` object. Props to [stodorovic](https://github.com/stodorovic).
* Fixes a bug where the core `default_hidden_columns` filter would be broken. Props to [thomasmb](https://github.com/thomasmb).
* Fixes a bug where memory could be exhausted on the page overview for users with a large number of pages.
* Fixes a bug where an `ArgumentCountError` would be thrown on the Search Appearance settings page when using PHP 8.0.
* Fixes a bug where disabling the tracking network-wide in a multisite environment did not automatically disable tracking on the sites in the network.
* Fixes a bug where tracking would send partial data.

#### Other

* Provides `YoastSEO-&gt;helpers-&gt;options-&gt;get_title_separator()` as an alternative for the previously removed `get_title_separator` method.
* Adds a `wpseo_previously_used_keyword_active` filter to deactivate the Previously Used Keyword analysis assessment.

= 15.3 =

Release date: 2020-11-17

Out now: Yoast SEO 15.3! In this release, you’ll find full language support for Hebrew in our analysis! This makes it a lot more natural to optimize your posts and it lets you focus on the writing part. Read more about what’s new in Yoast SEO 15.3 in [our release post](https://yoa.st/release-15-3)!

#### Bugfixes

* Fixes a bug where no notification to reindex your site would be shown when the indexing process failed.
* Fixes a bug where no notification to reindex your site would be shown when changing the permalink structure, category base or home URL multiple times in a row and hiding the notification in between.
* Fixes a bug where a fatal error would be thrown when there is no ctype extension loaded and `ctype_digit` had been polyfilled before.
* Fixes a bug where reindexing via the WP-CLI would not always repopulate the indexables tables.
* Fixes a bug where unfiltered HTML could be inserted in taxonomy descriptions by administrators and editors.
* Fixes a bug where the indexable permalinks could have an incorrect taxonomy base.
* Fixes a bug where the SEO optimization process sometimes had to be run twice before everything was correctly indexed.

#### Enhancements

* Adds the following assessments for Hebrew:

* Consecutive sentences assessment.
* Sentence length assessment.
* Transition words assessment.
* Passive voice assessment.

* Does not mark the words 'annoyed', 'depressed', 'disappointed', and 'upset' as passives in English anymore, since most of the time they are closer to adjectives rather than passive verbs in meaning.
* Improves the results for the keyphrase distribution assessment for Swedish, Indonesian, Arabic, Hebrew and Farsi by allowing a partial match (instead of a full match) for long keyphrases (4 or more content words).

#### Other

* Prevents the SEO optimization process from restarting automatically when the optimization tool is started via the link in the dashboard notification and the Yoast SEO Tools page is reloaded during indexing.

= 15.2.1 =

Release date: 2020-11-02

#### Bugfixes

* Fixes a bug where AMP and W3C validation would break because Twitter meta tags would contain 'value' attributes instead of 'content' attributes.

= 15.2 =

Release date: 2020-10-27

Today, we are releasing Yoast SEO 15.2 into the wild. In this release, we've added an interesting improvement for Slack users — better visibility for your content when your URL is shared on Slack. We also improved the performance of the plugin in the backend due to us loading less JavaScript. Read more about what’s new in 15.2 in [our release post](https://yoa.st/release-15-2)!

#### Enhancements

* Adds an Open Graph integration for The Events Calendar plugin. Props to [Luehrsen](https://github.com/Luehrsen)
* Sets the default schema type for Web Stories to Article. Props to [swissspidy](https://github.com/swissspidy)
* Adds enhanced Slack sharing tags on posts and pages.
* Adds a toggle for the above enhanced Slack sharing feature.
* Flushes the permalinks from the indexable tables when a custom taxonomy base changes, and shows a reindex notification in that case.
* Improves the loading times of admin pages where Yoast SEO is present.

#### Bugfixes

* Fixes a bug where we linked to Google's Structured Data Test, which is deprecated. We now link to Google's Rich Results Test. Props to [wormeyman](https://github.com/wormeyman)
* Fixes a bug where the styling of the General tab in the network admin dashboard was broken.
* Fixes a bug where the German passive voice assessment would show an error when the text contained a participle enclosed within curly quotation marks (e.g., `"getan"`).
* Fixes a bug where the WooCommerce product permalinks were not updated after a permalink structure change.
* Fixes a bug where the replacement variable dropdown menu was partially hidden for the description inputs in all preview modals.
* Fixes a bug where a fatal error would be thrown on sites that did have curl installed but did not have the PHP curl extension installed.

#### Other

* Removes the "Remind me in 7 days" link from the SEO data optimization notification on the Yoast SEO dashboard, which was shown for large sites with more than 2500 unindexed indexables. The notification can still be hidden by clicking the default dismiss button.
* Adds the `wpseo_image_data` filter to enable the filtering of image metadata. Props to [spacedmonkey](https://github.com/spacedmonkey).

= 15.1.1 =

Release date: 2020-10-15

#### Bugfixes

* Fixes a bug where the indexing button on the Tools page would keep showing up because certain objects would be detected as requiring indexing but would not actually be indexed during the indexing process.

= 15.1 =

Release date: 2020-10-14

Wouldn’t it be cool if you could get keyword data while working on your content in Yoast SEO? Well, we asked ourselves that same question and now we have an answer! Yes, you can now find related keyphrases inside the post editor. And it’s not any old data — no, it’s powered by our good friends at SEMrush, a world-class provider of SEO and internet marketing tools! Read more about what’s new in 15.1 in [our release post](https://yoa.st/release-15-1)!

#### Enhancements

* Adds an integration with SEMrush to search for and compare search volume of related keyphrases.
* Moves the Ryte feature toggle to the new Integrations tab where the new SEMrush feature toggle also can be found.
* Merges the indexable and link indexing tools on the tools page into one process.
* Improves the user experience of the indexing tool on the tools page by showing its progress on the tools page itself, instead of in a separate pop-up modal.
* Prevents several processes from happening on non-production environments:

* Indexing indexables.
* Pinging search engines about XML sitemaps.
* Sending tracking information.
* Checking the indexability of the site with Ryte.

* Uses the `website` from a user's WordPress profile in that user's `SameAs` array in the Schema output.
* Flushes all permalinks from the indexables tables when the value of the `permalink_structure` option changes, and introduces a notification to ask for a reindex in that case.
* Flushes all permalinks from the indexables tables when the value of the `home_url` option changes, and introduces a notification to ask for a reindex in that case.
* Registers a cron job that checks whether the `home_url` was changed manually and resets the permalinks accordingly.
* Makes it possible to recognize keyphrases in Farsi when they have a negation prefix or an indefinite article (for example: ماشین ('car') in ماشینی ('a car')).
* Improves keyphrase recognition in Farsi by filtering the function words such as `هفت`, چهارم`,`یا`.

#### Bugfixes

* Fixes a bug where the Yoast replacement variables plugin would not be available on edit terms page for usage by other plugins.
* Fixes a bug where the incoming link count for each post, as shown on the post overview page, was incorrect.

#### Other

* Adds a filter (`wpseo_dynamic_permalinks_enabled`) to enable the dynamic permalink fallback. When this fallback is enabled, the indexable-based output of the `permalink` property is overridden by a permalink that is calculated on the fly. Using this is detrimental for performance but may be needed for some site setups.

= 15.0 =

Release date: 2020-09-29

Today, we’re launching Yoast SEO 15.0. This release features some awesome new additions and enhancements. We’ve added full support for Arabic and made the Yoast SEO block editor sidebar fully-featured. Read more about those changes in [our release post](https://yoa.st/release-15-0)!

#### Enhancements

* Introduces an advanced settings tab in the sidebar.
* Introduces buttons in the sidebar to open the Facebook and Twitter Preview in a modal.
* Changes the Google Preview modal styling to match the other new modals.
* Always shows the Google Preview editor fields and as a result removes the 'Edit snippet' button.
* Changes the styling of the Yoast SEO sidebar to match the standard Gutenberg styling.
* Slightly rearranges the order of items in the Yoast SEO sidebar.
* Adds a hover state styling to the items in the Metabox.
* Improves the English transition word assessment by adding the following words to the transition word list: 'note that', 'not only', 'initially', 'as opposed to'.
* Improves the keyphrase and prominent word recognition when words in the text occur with specific Arabic or Urdu punctuation marks.

#### Bugfixes

* Fixes a bug where the value of the schema `@type` could contain `null`.
* Fixes a bug where the `archive`, `imageindex` and `snippet` robot values would be output when `noindex` was present as well.
* Fixes a bug where the indexable permalinks could have an incorrect value when the term slug was changed.
* Fixes a bug where parts of the content of a password protected post could be output in the schema.
* Fixes a bug where the 'Stop counting' button in the text link counter modal wouldn't stop the counting of links.
* Fixes a bug where indexable hierarchies were not being created during bulk indexing.

#### Other

* Adds the `wpseo_sitemap_index_links` filter to enable adding links to the sitemap index. Props to [Joseph Paul](https://github.com/jsphpl).

= 14.9 =

Release date: 2020-09-01

#### Bugfixes

* Fixes a bug where a JavaScript console warning was thrown on category edit pages.
* Fixes a bug where the page number was not shown in the breadcrumb for paginated series.
* Fixes a bug where the `robots.txt` and `.htaccess` file editor would not work due to `get_home_path()` not being a writable path. Props to [druesome](https://github.com/druesome).
* Fixes a bug where port numbers in the indexable permalinks were missing (when applicable).
* Fixes a bug where the indexables table would contain incorrect permalinks for posts if the term slug had been changed and the post permalink contains the term slug.
* Fixes a bug where the indexables table would contain incorrect permalinks for pages if the slug of the parent page had been changed.
* Fixes a bug where a warning would occur when a query was unsuccessful while indexing post type archives. Props to [Sekiphp](https://github.com/Sekiphp).
* Fixes a bug where closing parentheses would always be regarded as sentence endings in RTL languages.
* Fixes a bug where closing parentheses would always be regarded as sentence endings when followed by an upper-case letter.

#### Enhancements

* Adds an update notification for major and minor releases.
* Improves the SQL performance by not performing unnecessary update queries when updating a post’s public status.
* Optimizes performance by preventing regular database queries.
* Improves keyphrase recognition in Polish by filtering more function words.
* Improves the feedback string in the Keyphrase in Subheadings assessment by making it more explicit.
* Improves all keyphrase-based assessments for Hebrew by filtering function words and allowing keyphrases to be recognized in the text when preceded by a prefix (e.g., “כ” or “ל”).
* We already had a filter available to change the default Schema Article type (`wpseo_schema_article_post_types`), but it wasn't called anywhere. Now it is.

#### Other

* Adds the weekly cron schedule to the `cron_schedules` filter to prevent overwriting the one WordPress adds. Props to [peter-webbird](https://github.com/peter-webbird).
* Merges the googlebot and bingbot meta tag values into the robots meta tag value and deprecates the `Googlebot_Presenter` and `Bingbot_Presenter`.

= 14.8.1 =

Release date: 2020-08-25

#### Bugfixes

* Fixes a bug in WordPress itself where script concatenation was causing JavaScript errors, which in turn led to Yoast SEO malfunctioning. This bug was introduced in WordPress 5.5. We’re fixing it by disabling script concatenation entirely.

= 14.8 =

Release date: 2020-08-18

Get ready for a brand new version of Yoast SEO! In this version you'll find new Schema functionality, an improved readability analysis for Portuguese &amp; Indonesian, and improved keyword recognition for right-to-left languages. Read more about those changes in [our release post](https://yoa.st/release-14-8)!

#### Enhancements

* Adds a Schema section to the metabox and sidebar. This section allows the user to change their Schema settings on posts, pages and custom post types.
* Adds a new section to the Search Appearance settings. This section allows the user to change their Schema defaults for posts, pages and custom post types.
* Fixes an inconsistency in the feedback strings that are produced by the keyphrase in SEO title assessment.
* Improves the accuracy of the following assessments for right-to-left languages: sentence length, keyphrase in introduction, keyphrase distribution, keyphrase density, and keyphrase in meta description.
* Improves all keyphrase-based assessments for Arabic by filtering function words and by allowing keyphrases to be recognized in a text when preceded by a prefix (e.g., "ل" or "ب").
* Adds the following assessments for Indonesian: sentence beginnings, transition words and passive voice.
* Adds the following assessments for Portuguese: Flesch reading ease and passive voice.
* Cleans up Schema @type values:

* If it's an array with multiple values, only output unique values.
* If it's a single value, output it as a string instead of an array.



#### Bugfixes

* Fixes a bug where the Yoast Dashboard widget would trigger an error when other plugins or temporary conditions would make the Yoast API response fail.
* Fixes a bug where block editor dependencies would be loaded unnecessarily on classic editor, causing issues with NextGEN gallery. Posts with NextGEN galleries that have been broken due to this bug will need to be re-saved.

#### Other

* Sets the minimum WP version to 5.4.
* Optimizes the logic involved in default filters for our options. This should lead to a very small increase in performance as well as avoiding an edge case where the default filter would be removed.

= 14.7 =

Release date: 2020-08-05

Say hi to Yoast SEO 14.7, chock-full of enhancements to help you with your site's SEO. Have you heard about the addition of XML sitemaps in WordPress 5.5? The Yoast SEO plugin is completely prepared for this. We also have some great news for users of the Web Stories plugin. Read more about those changes in [our release post](https://yoa.st/release-14-7)!

#### Enhancements

* Adds support for adding metadata to Web Stories (the `web-story` post type) from the [Web Stories](https://github.com/google/web-stories-wp) plugin. Props to [swissspidy](https://github.com/swissspidy)
* Shows a more specific notification about why the reindexing of SEO data is needed when the permalinks are reset or when the category base setting is changed.
* Redirects requests to the WordPress sitemaps to the appropriate Yoast sitemap, if the Yoast sitemaps are enabled.
* Adds the option for users to opt-in to allow Yoast to track some data about their site.
* Optimizes script loading by removing `ver` parameters from scripts and styles when they're not needed.
* Adds the Yoast logo to the Yoast block categories.
* Compatibility with WordPress 5.5: makes sure Yoast structured data blocks are found on more keywords and have examples in the block inserter.

#### Bugfixes

* Fixes a bug where a fatal error would occur in sitemaps on sites where the home URL and site URL were different. Because the cause of this was a missing style sheet, the content of the sitemaps was still there, which means Google and other search engines could still reach the sitemaps and no SEO harm was done.
* Fixes a bug where reindexing would not be done for indexables without a permalink.
* Fixes a bug where an indexable's permalink remained unchanged when the categories prefix option was changed.
* Fixes a bug where an inline link that opens in a new window would render `undefined` in the aria-label.
* Fixes a bug where the indexables indexing process could not be started again without a page reload on the tools page if it failed.
* Fixes a bug where a console error would be thrown because `wpseoShortcodePluginL10n` was not defined.
* Fixes a bug where the SEO and Readability scores were no longer shown in the publish box in the classic editor.
* Fixes a bug where clicking the Readability score link in the classic editor would trigger an error.

#### Other

* Enables the cornerstone content toggle for taxonomies.
* Adds the option to filter our Schema by `@type`.
* Removes the setting to show the date in the Google Preview. The date will now always be shown in post-type previews.
* Moves the running of the SEO data indexing process to the Yoast Tools page.

= 14.6.1 =

Release date: 2020-07-21

#### Other

* Reverts the change for social media titles to pick the post/page/term title, as this could inadvertently lead to low quality titles for some archives and other page types.

#### Bugfixes

* Fixes a bug where the where all methods were removed from `xmlrpc.php` due to incorrect usage of `add_action` as opposed to `add_filter`.

= 14.6 =

Release date: 2020-07-21

We have a new release for you: Yoast SEO 14.6. This release has some pretty cool enhancements. For example, we’ve added another helpful indicator in the editor that shows you your scores for a particular post quickly. Read more about those changes in [our release post](https://yoa.st/release-14-6)!

#### Enhancements

* Improves the editing experience in the Social tab, and gives it a dab of fresh paint.
* In the sharing metadata used for Facebook, Twitter, Pinterest, LinkedIn and many other sites, we now output the post title instead of the SEO title. This prevents the brand name from being added in most cases, which is better on those platforms. You can still set a specific sharing title on the Social tab of the Yoast SEO post settings.
* Makes the plugin icon in the editor reflect the SEO and Readability score.
* Improves keyphrase counting in Indonesian by not counting '-' as a word boundary.
* Improves the feedback text for the keyphrase in title assessment to make clear that an exact keyphrase match is necessary.
* Improves the recognition of keywords in the slug if they contain a hyphen (for example: re-duplicated, on-the-go).
* Improves the transition words analysis for Russian.
* `Noindex`es the `xmlrpc.php` file and all possible ways to request it, removing them from Google’s search results.
* For privacy reasons, no longer shows whether an email address is already subscribed to the newsletter.

#### Bugfixes

* Fixes a bug where the comment count would be output for Articles that did not accept comments. Props to [gr8shivam](https://github.com/gr8shivam).
* Fixes a bug where the social previews did not reflect the `og:image` tag correctly in situations where the first image in the content was used as a fallback.
* Fixes a bug where slashes in titles and open graph titles were removed before they were used as a replacement variable. Props to [Jon Christopher](https://github.com/jchristopher).
* Fixes a bug where a `get_plugins()` undefined error would be thrown if there was already a `plugin.php` loaded via the `init` hook by another plugin. Props to [Krishna Kant](https://github.com/lushkant).
* Fixes a bug where there was no border on the bottom of metabox tabs without any collapsible sections.
* Fixes a bug where "array_merge(): Argument #1 is not an array" issues could appear under specific circumstances. Props to [chteuchteu](https://github.com/chteuchteu).

#### Other

* Removes functions, class variables and classes that were deprecated prior to version 11.5.
* Adds a quick cache, which caches the result for 1 minute, so we don't do the same call the my.yoast.com twice on a pageload.
* Introduces the `--skip-confirmation` argument to run our wp-cli reindex command without confirmation prompt.
* Yoast SEO had many scripts that relied on many localized objects. In an effort to improve maintainability we have combined all those objects into one: `wpseoScriptData`. `wpseoPostScraperL10n` and `wpseoTermScraperL10n` remain available for backward compatibility. Plugins that tap into our objects will need to update their code.

= 14.5 =

Release date: 2020-07-08

Yoast SEO 14.5 is out today! In this release, we made some changes regarding our use of XML sitemaps. We decided to disable the new WordPress core XML sitemaps in favour of our own. Also, we fixed a number of bugs. Read more about those changes in [our release post](https://yoa.st/release-14-5)!

#### Enhancements

* Disables the WP Core sitemaps as introduced in WordPress 5.5.
* Adds an abstract class to easily add dynamic blocks in Yoast SEO / add-ons.

#### Bugfixes

* Fixes a bug where the SEO title and meta description for posts that have a custom title and/or description would not be displayed in the posts overview.
* Fixes a bug where the WordPress dashboard was slower for very large sites, by caching the number of unindexed posts, terms and post type archives.
* Fixes a bug where inline link functionality in custom blocks could be missing.

= 14.4.1 =

Release date: 2020-06-23

#### Bugfixes

* Fixes a bug where existing links were no longer editable with Yoast SEO active.
* Fixes a bug where the editor wouldn't remember `rel` values set on a link after refresh.

= 14.4 =

Release date: 2020-06-23

Sometimes, you have releases that start out small and end up with a substantial improvement. Yoast SEO 14.4 is one such release. Initially planned as a bug fix release, this turned into something that markedly improves the publishing workflow in WordPress. Plus, you can now mark your external links as nofollow or sponsored. You see, Yoast SEO 14.4 is a chockfull release! Read more about those changes in [our release post](https://yoa.st/release-14-4)!

#### Bugfixes

* Fixes a bug where replacement variable values would break the Google Preview and output a PHP notice on the front end if they were a serialized array string.
* Fixes a bug where a property that was changed from private to public on `WPSEO_Schema_Article` would lead to a backward compatibility break.
* Fixes a bug where the site logo would not be output in the schema when a CDN was used for images. Props to [gr8shivam](https://github.com/gr8shivam)
* Fixes a bug where the Facebook Debugger link was outdated. Props to [eliorivero](https://github.com/eliorivero)
* Fixes a bug where a lot of delete queries would be performed after clearing all indexables from the database.
* Fixes a bug where the indexables indexing warning would be visible to users with non-admin roles.

#### Enhancements

* Adds SEO insights to every step of the publishing flow:

* Adds the readability and SEO score to the document sidebar with the possibility to quickly open the Yoast sidebar.
* Adds the readability and SEO score to the publish checks. Gives reassurance or a call to action to further optimize the content.
* Adds social sharing buttons to the post publish actions to enable easy sharing on Facebook and Twitter.

* Adds the possibility to add `rel` keywords `nofollow` and `sponsored` to individual links in the block editor for WordPress versions 5.4 and above.

#### Other

* Adds headers to the main plugin file for the minimum supported WordPress version and minimum supported PHP version. WordPress will not activate the plugin anymore if incompatibilities are found. Props to [spacedmonkey](https://github.com/spacedmonkey)

= 14.3 =

Release date: 2020-06-09

In every release of Yoast SEO, we fix bugs and find other ways to enhance our code. For instance, we’re always working on quality assurance, code style and other behind the scenes work. In Yoast SEO 14.3, you’ll find many of these improvements plus some bugfixes. Read more about those changes in [our release post](https://yoa.st/release-14-3)!

#### Bugfixes

* Fixes a bug where the FAQ schema list item's position would start at 0 instead of 1.
* Fixes a bug where the filters `wpseo_metadesc` and `wpseo_title` weren't called with the right argument, which could lead to errors.
* Fixes a bug where our global CSS variables could conflict with global CSS variables of themes.

= 14.2 =

Release date: 2020-05-26

In today's release, we’ve fixed several issues with breadcrumbs. One of these bugs turned the order of breadcrumbs on its head, which is not something we like. Things should work as expected now. We’ve also changed how we check if a focus keyphrase was used before. We currently run this against our indexable table, making the process more efficient. Read more about those changes in [our release post](https://yoa.st/release-14-2)!

#### Bugfixes

* Fixes a bug where breadcrumbs would be saved in reversed order.
* Fixes a bug where setting `Security: no advanced settings for authors` to `off` would remove the advanced settings tab for all users.
* Fixes a bug where replacement variables would not be replaced when using the deprecated `WPSEO_Frontend` output without echoing it.
* Fixes a bug where our `select2` styling would overwrite the `select2` styling of other plugins.
* Fixes a bug where JavaScript could be executed via the error message on the Social section in the Yoast Settings. As this potentially dangerous data is not saved, abusing this was not possible.

#### Enhancements

* Optimizes the query used to check if a focus keyphrase has been previously used, by running it against our indexable table.

= 14.1 =

Release date: 2020-05-13

Despite weeks and weeks of testing Yoast SEO 14.0, there were still some people running into issues. In Yoast SEO 14.1, we’re improving things to help stabilize the plugin. Read more about those changes in [our release post](https://yoa.st/release-14-1)!

#### Bugfixes

* Fixes a bug where the help text about Yoast Columns would be shown in the Help Tab on post overviews when there were no Yoast Columns. Additionally, the help text has been refined to only show information about columns that are actually shown. Props to [glebkema](https://github.com/glebkema).
* Fixes a bug where an empty breadcrumb would be output when a taxonomy was set to have a post type archive in its breadcrumb when that post type didn't have an archive.
* Fixes a bug where a part of the breadcrumb path was missing on search result pages.
* Fixes a bug where an error would be thrown and indexing could not be completed due to posts or terms having themselves as a parent or grandparent.
* Fixes a bug where the SEO data was unnecessarily being indexed when a non-public term or taxonomy was being saved.
* Fixes a bug where the SEO data of an object would be indexed twice during the indexing process when it was an ancestor of another object in the same REST request.
* Fixes a bug where huge log files would be generated if PHP was configured to also log the arguments in debug backtraces.
* Fixes a bug where indexing would continue even though it had already indexed all objects.
* Fixes a bug where term indexing would keep going on forever due to plugin conflicts.
* Fixes a bug where primary terms of a custom taxonomy where not being reflected in the breadcrumb.
* Fixes a bug where the URL in the schema breadcrumbs of search pages would be missing.
* Fixes a bug where the `wpseo_remove_reply_to_com` filter was not working.
* Fixes a bug where no metadata would be output on the frontend when the tables necessary for the indexables could not be created
* Fixes a bug where the indexing notification would be shown on the WordPress updates page when updating themes or plugins.
* Fixes a bug where the `yoast index --network` WP CLI command would throw an error when the database migrations for one or more subsites on a multisite environment had not been run yet.
* Fixes a bug where no or incorrect breadcrumbs where shown for 404 pages, author archives and date archives. Props to [amitsidhpura](https://github.com/amitsidhpura).

#### Enhancements

* Moves the text link counter notification from the SEO Dashboard to the WordPress' Site Health.
* Makes the "You're blocking access to robots" notification site-wide.
* Improves the copy for the "cannot fetch" response of the Ryte health check.
* Removes the notification containing the message that you should check your post type archive settings when these are possibly reset to their defaults in Yoast SEO 7.7 or 7.8.
* Reimplements the Advanced Settings tab in React.
* Improves the ordering of items in XML sitemaps to match SQL standards. Props to [rafaelbernard](https://github.com/rafaelbernard).
* Improves the transition word assessment for Hungarian. Props to [@Zsoru](https://github.com/Zsoru).
* Adds the `--reindex` flag to the indexables WP CLI command to remove all existing indexables and then reindex all content.
* Adds the `wpseo_robots_array` filter to enable the filtering of the robots array used for the robots meta tag output.
* Adds the `wpseo_shutdown_indexation_limit` filter to enable the filtering of the number of objects that can remain unindexed. These remaining objects will automatically be indexed without needing any user interaction as a shutdown function.
* Adds debug information to the error that is shown when Yoast SEO was unable to create the necessary database tables.
* Optimizes finding attachments by URL. This addresses a primary cause of higher server load issues occurring since 14.0.
* Adds a warning to the metabox that is shown when a user enters a focus keyphrase that contains more than 191 characters.
* Makes the copy of the indexing setting in the advanced tab consistent between all contexts (post, page, category, etc.).
* Adds the `term_id` for terms in the object that can be filtered with the `wpseo_breadcrumb_links` and `wpseo_breadcrumb_single_link_info` filters. Props to [amitsidhpura](https://github.com/amitsidhpura).
* Adds a time estimation to the indexing notification based on the amount of objects that need to be indexed.
* Adds a button to the indexing notification to hide it for a week when more than 2500 objects need to be indexed.
* Improves the notification that is shown when there were problems creating the necessary database tables.

#### Other

* Deletes the unnecessarily created indexables of private taxonomies.

= 14.0.4 =

Release date: 2020-04-30

#### Bugfixes

* Fixes a bug where robots meta values defaulted to 0 instead of null because of a [bug in WPDB](https://core.trac.wordpress.org/ticket/12819). This could result in incorrect values for `noindex`, `nofollow` , `noarchive`, `noimageindex` and/or `nosnippet`. In order to purge the wrong data, we need to truncate our tables again. This means you will have to go through the indexing process again. We’re very sorry. For sites with more than 10,000 posts, we advise using the [WP CLI command to do the indexing on the server](https://yoa.st/wp-cli-index).

= 14.0.3 =

Release date: 2020-04-30

#### Bugfixes

* Fixes a bug where running the migrations could cause fatal errors on sites where plugins are installed remotely. Some remote plugin installers don't remove files that are removed in an update. Since our migration runner goes through all migrations on the server, this could lead to fatal errors.
* Fixes a bug where the `pre_get_document_title` filter could be skipped when other plugins were using this filter as well.
* Fixes a bug where an error would be thrown when the name of an indexable table had been converted to a different case.
* Fixes a bug where a taxonomy parent would not be present in the breadcrumbs even though it was set in the breadcrumbs settings.

#### Enhancements

* Adds a missing index to the new indexables table. Props to [@pagelypete](https://github.com/pagelypete).

#### Other

* Adds the `wpseo_frontend_presentation` filter that can be used by third-party plugins to easily alter all our meta output with 1 single filter.

= 14.0.2 =

Release date: 2020-04-29

Because we’ve changed the underlying framework of our Indexables technology, we’ve chosen to rebuild the table. This means you will have to go through the indexing process again. We’re sorry. For sites with more than 10,000 posts, we advise using the [WP CLI command to do the indexing on the server](https://yoa.st/wp-cli-index).

#### Bugfixes

* Fixes a bug where a fatal error would be thrown when a title contained more than 191 characters.
* Fixes a bug where a fatal error would be thrown when a focus keyphrase contained more than 191 characters.
* Fixes a bug where a fatal error would be thrown when search engines were disallowed from indexing the site.
* Fixes a bug where a fatal error would be thrown on WooCommerce installations when the `wpseo_metadesc` filter was called with only 1 argument.
* Fixes a bug where a fatal error would be thrown when using the `WPSEO_Frontend` class to get the meta description.
* Fixes a bug where a fatal error would be thrown when `WPSEO_Frontend` or `WPSEO_Breadcrumbs` was called before the `init` action.
* Fixes a bug where a non-object property retrieval notice would be thrown when the site's content was being indexed.
* Fixes a bug where a trailing slash would be added to canonical URLs and some `rel="prev"` URLs, even when the permalink structure settings didn't contain that trailing slash.
* Fixes a bug where a double breadcrumb would be shown on home pages.
* Fixes a bug where the indexing would continue indefinitely under specific circumstances.

#### Other

* Removes all usages of `PDO` and `mysqli` directly and uses `wpdb` everywhere. This should prevent a lot of errors for database installations that have different encodings or configurations than what is generally seen.

= 14.0.1 =

Release date: 2020-04-28

#### Bugfixes

* Fixes a bug where a fatal error would be thrown when a breadcrumb title was too long.
* Fixes a bug where a fatal error would be thrown when `DB_CHARSET` was not defined.
* Fixes a bug where a fatal error would be thrown when breadcrumbs were rendered in the admin.
* Fixes a bug where a fatal error would be thrown when the Yoast migrations table did not have a primary key.
* Fixes a bug where a fatal exception would be thrown when building an indexable failed.
* Fixes a bug where the order of the breadcrumbs was incorrect when more than 3 nested taxonomies were used.
* Fixes a bug where HTML tags would no longer be allowed in the breadcrumbs.
* Fixes a bug where no title would be shown in the Yoast indexing status modal.
* Fixes a bug where changes made through the `wpseo_robots` filter would not be shown in the googlebot and bingbot meta tag output.

#### Other

* Yoast SEO needs to have the right to create a database index. If you have restricted the creation of database indexes on your setup, please make sure to temporarily allow Yoast SEO to create indexes before updating.

= 14.0 =

Release date: 2020-04-28

Today is a special day. Today, a project we’ve been working on for a year sees the light of day. Yoast SEO 14.0 rewrites the playbook on how a WordPress SEO plugin can work. Thanks to an approach we call indexables, we bring you a much faster experience and a new foundation that helps us get ready for an exciting future! Read more about this release in [our release post](https://yoa.st/release-14-0)!

#### Bugfixes

* Fixes a bug where the Open Graph image would be set as Twitter image when Open Graph was disabled.
* Fixes a bug where the `article:publisher` meta tag would not contain the Person's Facebook account if the Knowledge Graph was set to Person.
* Fixes a bug where no `title` meta tag would be output when no post or page-specific title was specified.
* Fixes a bug where the date archive description from the Search Appearance settings would not be used for the `og:description` meta tag.
* Fixes a bug where a notice would be thrown when a field in the FAQ or HowTo block was left empty.
* Fixes a bug where the Help Scout beacon was aligned to the right on settings pages on installations with a right-to-left language.
* Fixes a bug where UTF-8 encoded urls were not always readable in the snippet preview.
* Fixes a bug where the embedding of posts on LinkedIn was broken.

#### Enhancements

* Adds a notification that appears when your content hasn't been fully indexed yet.
* Adds a button to the SEO &gt; Tools page to index all your content.
* Adds a feature toggle to disable the headless REST routes.
* No longer outputs the `og:type` meta tag on 404 pages.
* No longer outputs a `twitter:title`, `twitter:image` and/or `twitter:description` meta tag when there is already an `og:title`, `og:image` and/or `og:description` meta tag specified in the frontend output and they’re not specifically set to something else.
* No longer outputs an `article:section` and `article:tag` meta tag as none of the Open Graph consumers seems to use it.
* No longer outputs an `og:updated_time` meta tag as it was the same as `article:modified_time` and all Open Graph consumers seem to prefer that.
* No longer outputs an `og:image:secure_url` meta tag as it was the same as `og:image` and all Open Graph consumers seem to prefer that.
* Strips all HTML tags from text fields in the schema output.
* Adds `Term hierarchy` as a taxonomy snippet variable.
* Uses the Gravatar image as a fallback for author archive's `og:image` and `twitter:image`.
* Improves the way gallery images are retrieved . Props to [stodorovic](https://github.com/stodorovic).
* Bing has added support for the same opt-in `meta robots` values as Google has, see their [announcement post](https://blogs.bing.com/webmaster/april-2020/Announcing-new-options-for-webmasters-to-control-their-snippets-at-Bing). We have decided to opt-in users of Yoast SEO by default to Bingbot crawling.
* No longer removes the default robots meta values.

#### Other

* Deprecates the `wpseo_twitter_taxonomy_image` and `wpseo_twitter_metatag_key` filters.
* Deprecates the `wp_seo_get_bc_ancestors` filter. Developers should use the `wpseo_breadcrumb_links` filter instead to add and/or replace breadcrumbs.
* Deprecates the `wpseo_opengraph` and `wpseo_twitter` actions.
* Adds the following filters:

* `wpseo_debug_markers`, which allows users to disable the debug markers.
* `wpseo_frontend_presenter_classes`, which enables the filtering of presenters.
* `wpseo_frontend_presenters`, which enables the filtering of presenter instances.
* `wpseo_googlebot`, which enables the filtering of the googlebot meta output.
* `wpseo_og_article_publisher`, which enables the filtering of the article publisher’s Facebook URL.
* `wpseo_og_locale`, which enables the filtering of the Open Graph locale.
* `wpseo_post_indexation_limit`, which enables the filtering of the amount of posts indexed during each indexing pass.
* `wpseo_post_type_archive_indexation_limit`, which enables the filtering of the amount of post type archives indexed during each indexing pass.
* `wpseo_term_indexation_limit`, which enables the filtering of the amount of terms indexed during each indexing pass.
* `wpseo_post_types_reset_permalinks`, which enables the filtering of the post types to reset permalinks for.
* `wpseo_public_post_statuses`, which enables the filtering of the list of public post statuses.

* No longer calls the third-party `thematic_doctitle` and `woo_title` filters.
* Adds the `/wp-json/yoast/v1/get_head` endpoint to get the our head for an URL. This endpoint takes a single parameter, `url` which should be the absolute URL of the page to get the head for.
* Removes the minimum and maximum size requirements when outputting `og:image` meta tags.

= 13.5 =

Release date: 2020-04-14

While we’re working on getting [Yoast SEO 14.0](https://yoa.st/3zs) ready for the world, you can enjoy today’s release of Yoast SEO 13.5. Read all about Yoast SEO 13.5 in [our release post](https://yoa.st/release-13-5)!

#### Bugfixes

* Fixes a bug where a fatal error would be thrown when saving a post while the type was no longer WP_Post due to filtering.
* Fixes a bug where .xsl site map files would not be cached correctly.

#### Other

* Sets minimum supported WordPress version to 5.3.

= 13.4.1 =

Release date: 2020-04-01

#### Bugfixes

* Replaces the use of the deprecated category_link filter by term_link. Props to [Chouby](https://github.com/Chouby)

= 13.4 =

Release date: 2020-03-31

In Yoast SEO 9.0, we launched an innovative new way to analyze your English language text using word forms. In Yoast SEO 10.1, we added word form support for the German language. Today, we’re glad to announce word form support for Dutch. You can read why this is such an awesome addition in [our 13.4 release post](https://yoa.st/release-13-4)!

#### Bugfixes

* Fixes a bug where the host part of URLs could contain reserved characters, like spaces and brackets. Props to [stodorovic](https://github.com/stodorovic).
* Fixes a bug where form fields were validated inconsistently.

= 13.3 =

Release date: 2020-03-17

Our current string of releases focusing on improving our code is continuing with Yoast SEO 13.3. In this release, we have a Schema structured data addition and several improvements to how Yoast SEO handles URLs. Read on in [our 13.3 release post](https://yoa.st/release-13-3)!

#### Enhancements

* Makes sure all URL fields show an unencoded URL after saving, even when the user input was encoded.
* Requires all URLs in URL input fields to begin with either ‘/’ or ‘http(s)’. Props to [stodorovic](https://github.com/stodorovic).
* Adds a `potentialAction` entity to the `WebPage` and `Article` Schema pieces.

#### Bugfixes

* Fixes a bug where social URLs containing international characters could not be saved. Props to [stodorovic](https://github.com/stodorovic).
* Fixes a bug where encoded characters would be stripped from canonical URLs. Props to [stodorovic](https://github.com/stodorovic).

#### Other

* Changes the cURL Health Check category from `recommended` to `critical`.

= 13.2 =

Release date: 2020-03-03

In Yoast SEO 13.2, you’ll find a number of checks moved to the WordPress Site Health tool. Site Health was introduced in WordPress 5.2 as a way to help site owners and managers get a sense of how their site is doing, technically speaking. Find out more about these changes in [our 13.2 release post](https://yoa.st/release-13-2)!

#### Enhancements

* Adds the capability to view Site Health to the SEO Manager role.
* Adds a cURL minimal version check to Site Health.
* Moves the "The postname is present in your permalink"-notification from the SEO Dashboard to Site Health.
* Moves the "You are using the default WordPress tagline"-notification from the SEO Dashboard to Site Health.
* Moves the "Your site is indexable"-notification and widget from the SEO dashboard to Site Health.
* Improves the usability of the "Your site is indexable" Site Health check.
* Adds error handling for the "Your site is indexable" status request.
* Adds an ID to the FAQ sections in the Schema output.

#### Bugfixes

* Removes the "Check headers"-tool from the Yoast Admin bar menu, as it is no longer available.

= 13.1 =

Release date: 2020-02-18

Yoast SEO 13.1 is out today! In this plugin, you’ll find several fixes and enhancements, mostly focused at improving our Schema.org structured data implementation. Learn more about the latest versions of Yoast SEO in [our 13.1 release post](https://yoa.st/release-13-1)!

#### Bugfixes

* Fixes a bug where the HowTo schema name was incorrectly set to the page title.
* Fixes a bug where the "force rewrite titles" option would remove the title tag in svg tags. Props to [stodorovic](https://github.com/stodorovic)

#### Enhancements

* Sets the Schema HowTo name and Article headline to the post title with a fallback to "No title".
* Adds the `inLanguage` property to the schema CreativeWork pieces.
* Removes a duplicate directory from the composer autoload classmap configuration. Props to [szepeviktor](https://github.com/szepeviktor)
* Improves the copy for the paginated comments Site Health check.

#### Other

* Removes the Search Console item from the admin menu and the toolbar menu.

= 13.0 =

Release date: 2020-02-04

Today, we’re releasing Yoast SEO 13.0. This release is one in a series of releases focusing on improving our code and fixing issues — most of them behind the scenes. Read more about those changes in [our 13.0 release post](https://yoa.st/release-13-0)!

#### Enhancements

* Hides the Facebook settings when Open Graph is disabled.
* Adds a success state to the paginated comments Health Check. This means the paginated comments check will also be shown when the paginated comments are set up correctly.

= 12.9.1 =

Release date: 2020-01-21

#### Bugfixes

* Fixes a bug where a notification would be shown that Gutenberg was outdated when the latest version of Gutenberg was already installed.

= 12.9 =

Release date: 2020-01-21

#### Other

* Renames the 'Snippet preview' to 'Google preview'.
* Replaces the Google preview mode switcher toggle with radio buttons.

= 12.8.1 =

Release date: 2020-01-15

#### Bugfixes

* Fixes a bug where the Yoast SEO metabox would not be shown on custom post types and taxonomies when the settings of our plugin were never saved before.
* Fixes a bug where the default titles for custom post types and taxonomies were not shown in the Search Appearance settings when the settings of our plugin were never saved before.

= 12.8 =

Release date: 2020-01-07

Welcome to another year of helping you achieve your goals with your site! Today, it’s time for the first in a long line of releases planned for 2020: Yoast SEO 12.8. In this release, you’ll find a number of bug fixes and performance enhancements. Find out more about this release in [our 12.8 release post](https://yoa.st/release-12-8" rel="nofollow)!

#### Bugfixes

* Fixes a bug where clicking the notification center buttons would result in an incorrect icon and a misplaced focus style for the dismiss and restore buttons.
* Fixes a bug where `create` and `update` actions would be done twice on multisite environments in combination with MultilingualPress.
* Fixes a bug where an empty page title would cause the breadcrumbs schema to set a wrong url.
* Fixes a bug where author archives for authors without post would show up in the search results, even though the "Show archives for authors without posts in search results?" option was enabled.
* Fixes a bug where the styling was missing from admin error notices in WordPress 5.3.
* Fixes a bug where the results of the images alt attribute SEO assessment in the Classic Editor were incorrect when the image did not have an alt attribute but did have a title attribute.

#### Enhancements

* Optimizes the options retrieval processes. Props to [Alex Bouma](https://alex.bouma.dev/) for his testing and suggestions.
* Adds the possibility to declare an identifier when integrating with the Schema output.

#### Other

* Fixes the documentation in the Schema HowTo file. Props to [timvaniersel](https://github.com/timvaniersel).
* Fixes the documentation in the Breadcrumbs file. Props to [alfiosalanitri](https://github.com/alfiosalanitri).
* Moves the paginated comments notice from the dashboard to WordPress' Site Health screen.

= 12.7.1 =

Release date: 2019-12-12

#### Bugfixes

* Fixes a bug where the metabox would be broken when a relative URL was configured as `WP_CONTENT_URL`. Props to [FPCSJames](https://github.com/FPCSJames).

= 12.7 =

Release date: 2019-12-10

Yoast SEO 12.7 is out today — signaling the last release of 2019. This release is all about cleaning up and fixing bugs. Since we have a two-week release schedule, we can quickly respond to any bug we might find. Find out more about this release in [our 12.7 release post](https://yoa.st/release-12-7)!

#### Bugfixes

* Fixes a bug where sub-sitemaps were rendered for non-public custom post types. Props to [@stodorovic](https://github.com/stodorovic).
* Fixes a bug where nested gallery images were not included in the image count in the sitemap. Props to [@stodorovic](https://github.com/stodorovic).
* Fixes a bug where the notification center 'dismiss' and 'restore' buttons had no focus style.

#### Other

* Improves security by adding output escaping.

= 12.6.2 =

Release date: 2019-11-28

#### Other

* Removes the Black Friday banner.

= 12.6.1 =

Release date: 2019-11-27

#### Bugfixes

* Fixes a bug where a fatal error would be thrown when Yoast SEO was used in combination with another plugin or theme containing a class named `Date_Helper`.
* Fixes a bug where a fatal error would be thrown when an empty string would be passed to the `WPSEO_Date_Helper-&gt;format` method. Props to [@mpolek](https://github.com/mpolek).

= 12.6 =

Release date: 2019-11-26

In Yoast SEO 12.6, we’re activating our new beacon for help documentation. This tool helps answer the questions you might have about using Yoast SEO. It’s easy to use and very friendly. Just hit that big purple question mark and search! Other improvements in Yoast SEO 12.6 includes a number of fixes and enhancements. Find out more in [our 12.6 release post](https://yoa.st/release-12-6)!

#### Enhancements

* Adds a description property to the schema's `WebSite` node.
* Removes the `Site-wide default: None` and the `None` options from the `Meta robots advanced` field in the metabox.
* Introduced a HelpScout beacon as a replacement for the Help Center.

#### Bugfixes

* Fixes a PHP Warning when using an empty string in the OpenGraph frontend output. Props to [@ChrisThompsonTLDR](https://github.com/ChrisThompsonTLDR).
* Fixes a bug where the time in the `article:published_time`, `article:modified_time`, and `og:updated_time` meta tag output and in the `datePublished` and `dateModified` schema output was incorrect in WordPress 5.2.

#### Other

* Sets the minimum required WordPress version to 5.2, and the minimum PHP version to 5.6.20.
* Adds a notification to encourage Internet Explorer 11 users to use another browser as we are no longer supporting that browser.

= 12.5.1 =

Release date: 2019-11-21

#### Bugfixes

* Fixes a bug where the time in the `article:published_time` and `article:modified_time` meta tag output and in the `datePublished` and `dateModified` schema output was incorrect.

= 12.5 =

Release date: 2019-11-13

These last couple of months here at Yoast SEO HQ have all been about building better things. Behind the scenes, we’re making good progress at getting our flagship plugins ready for the future. While we’re busy building the future, we also stick to our regular two-week release schedule, which means it’s time to introduce Yoast SEO 12.5. Find out more in [our 12.5 release post](https://yoa.st/release-12-5)!

#### Bugfixes

* Fixes a bug for terms where keywords and snippet preview data would be synced across all languages in a MultilingualPress multisite environment.
* Fixes a bug where the visually hidden text in the snippet preview was misplaced.

#### Other

* Deprecates the Google Search Console.

= 12.4 =

Release date: 2019-10-29

After releasing several updates to our snippet preview in previous releases, Yoast SEO 12.4 now shows an image for your post in the mobile snippet preview, just like Google would. We have several other improvements and fixes for you in store with Yoast SEO 12.4. Find out more in [our 12.4 release post](https://yoa.st/release-12-4)!

#### Enhancements

* Adds "schema" as keyword to the structured data blocks to make them show up for that search term in the block search as well.
* Adds an image to the mobile snippet preview for posts and terms.
* Changes the readability score for empty content from "Needs Improvement" with a red icon to "Not Available" with a gray icon. Props to [emilyatmobtown](https://github.com/emilyatmobtown).
* Updates the URLs used to ping Google and Bing about the location of a sitemap. Props to [@emilyatmobtown](https://github.com/emilyatmobtown).
* Makes the notice about running an old WordPress version more specific by showing the installed WordPress version and the latest WordPress version.
* Adds information about enabling Open Graph to the Twitter settings. Props to [@stevenfranks](https://github.com/stevenfranks).

#### Bugfixes

* Fixes a bug where no Twitter and Facebook image could be set for attachment pages.
* Fixes a bug where a nested paragraph would be present in the "noindex" metabox warning.
* Fixes a bug where Google+ data would still be exported in the settings export.

= 12.3 =

Release date: 2019-10-15

While some of our checks are independent of languages, Yoast SEO has special skills to adapt the various content analyses to different languages from around the world. In Yoast SEO 12.3, we’re taking the first steps to add another language to the list: Hungarian. In addition, this release features a number of enhancement and fixes. Read [our 12.3 release post](https://yoa.st/release-12-3) to find out more!

#### Enhancements

* Adds the transition word assessment for Hungarian. Props to [@9abor](https://github.com/9abor).
* Includes the admin bar CSS in AMP dev mode. Props to [@westonruter](https://github.com/westonruter).
* Shows a floating `Save changes` button on Yoast SEO admin pages when the normal button is not visible in the browser window.
* Improves user input validation feedback and suggestions for error correction.
* Introduces a new filter `wpseo_sitemap_http_headers` which allows filtering the HTTP headers we send for XML sitemaps.
* Adds a RankMath post meta value importer.

#### Other

* Removes the notification that would be thrown if add-ons with a lower version number than the plugin were installed. The `yoast_plugin_compatibility_notification` method has been deprecated.

= 12.2 =

Release date: 2019-10-01

Yoast SEO 12.2 is a release full of the regular bug fixes and enhancements, but also a new addition to meta robots. Last week, Google announced a new way to give publishers more control over what the search engine can show in the results. This change, however, seems not driven by customer demand, but rather by law. Find out what this is all about and why we chose to automatically opt sites in for this in [our 12.2 release post](https://yoa.st/release-12-2)!

#### Enhancements

* Adds default robots meta settings to opt in to all snippet display features, to prevent affected websites in Europe from having snippet display issues.
* Adds an alert to the configuration wizard and the knowledge graph settings that is shown when organization information is missing.

#### Bugfixes

* Fixes a bug where the banners in the sidebar were no longer responsive.

#### Other

* Changes all mentions of the Yoast SEO for WordPress training, which is now free.
* Combines the 'Newsletter' and 'You might like' steps in the configuration wizard to a step called 'Continue learning'.
* Removes the colon from the form labels at the settings pages.

= 12.1 =

Release date: 2019-09-17

Yoast SEO 12.1 is out today! It features a couple of changes in order to match the design of Google’s search results pages, this includes those shiny new favicons. In addition to this, we added a number of new filters for our Schema implementation. See what else is new in the latest release of your favorite SEO plugin in [our 12.1 release post](https://yoa.st/release-12-1)!

#### Enhancements

* Updates the desktop snippet preview to match Google's new font sizes.
* Introduces the usage of the site's favicon in the mobile snippet preview.
* Adds a collapsible around the hidden problems and notifications on the Yoast dashboard.
* Adds a filter `wpseo_schema_organization_social_profiles` that allows filtering an organization's social profiles in the schema output. Props to [juliquiron](https://github.com/juliquiron).
* Adds a filter `wpseo_schema_company_name` that allows filtering the company name in the schema output. Props to [@andrewgillingham](https://github.com/andrewgillingham).
* Adds a filter `wpseo_free_schema_company_logo_id` that allows filtering the company logo in the schema output. Props to [@andrewgillingham](https://github.com/andrewgillingham).
* Adds a filter `wpseo_sitemap_exclude_empty_terms_taxonomy` to control hiding empty terms per taxonomy.
* Adds a filter `wpseo_enable_structured_data_blocks` to allow disabling Yoast's structured data block editor blocks.
* Adds a `get_robots` method to retrieve the robot HTML without it being output. Props to [@bradymwilliams](https://github.com/bradymwilliams).
* Improves the input validation on the settings pages.
* Improves the consistency of the plugin icons.
* Improves the How-to and FAQ blocks styling for better compatibility with latest version of the WordPress blocks editor.

#### Bugfixes

* Fixes a bug where subscription checks would fail on some sites due to certificate verification being disabled.
* Fixes a bug where the primary term selector would not display HTML entities properly. Props to [@dlh01](https://github.com/dlh01).

#### Other

* Allows showing specific dashboard feeds based on the `wp_version` and `php_version` of a site.
* Removes the AMP Glue plugin suggestion from the SEO dashboard when AMP and Yoast SEO are installed. The AMP Glue plugin by Yoast will be discontinued soon.
* Removes the `Courses` menu-item.

= 12.0 =

Release date: 2019-09-03

Contrary to what the version number might suggest, Yoast SEO 12.0 isn’t a huge release. It’s simply the next release in our current release schedule, but after hitting 11.9 a couple of weeks ago we had no choice but to go for 12.0. That’s how it goes! But don’t worry, there’s enough interesting stuff in this release, including two new checks for the Portuguese language. Read more about Yoast SEO 12.0 in [our 12.0 release post](https://yoa.st/release-12-0)!

#### Enhancements

* Adds a filter `wpseo_exclude_from_sitemap_by_term_ids` that allows excluding a term from the XML sitemap.
* Adds a filter `wpseo_xml_sitemap_include_images` that allows excluding images from the XML sitemap.
* Adds a maximum width to the metabox, props to [@justemoilouise](https://github.com/justemoilouise).
* Adds support for the assessment that checks whether multiple sentences begin with the same word for Portuguese, props to [amesdigital](https://github.com/amesdigital).
* Improves the wording in the configuration wizard notification, props to [@emilyatmobtown](https://github.com/emilyatmobtown).
* Improves user input validation for URLs.
* Improves the sentence length assessment for Portuguese by increasing the recommended sentence length limit, props to [amesdigital](https://github.com/amesdigital).
* Updates the document title with a message to communicate form submission errors have occurred.

#### Bugfixes

* Fixes a bug where a 404 error would be shown for the second sitemap (and up) of the author sitemaps in case of multiple author sitemaps.

= 11.9 =

Release date: 2019-08-20

Are you ready for another exciting release to round up the Yoast SEO 11 cycle? Because we are! In Yoast SEO 11.9 we have improvements for security and accessibility. Read more about Yoast SEO 11.9 in [our 11.9 release post](https://yoa.st/release-11-9)!

#### Enhancements

* Improves security by adding output escaping.

#### Bugfixes

* Fixes a bug where the image from the configuration wizard notification was missing an empty alt attribute.
* Fixes a bug where some translations would be missing in the metabox, sidebar, configuration wizard and the help center.

= 11.8 =

Release date: 2019-08-06

Release history tells us that the releases in the months of July and August are usually very quiet and not 'that notable'. Due to vacations from team members, the focus is usually on fixing bugs and cleaning up. Not for Yoast SEO 11.8! This new release gives us an enhanced metabox, bug fixes and the help of contributors from outside the company! Find out all about Yoast SEO 11.8 in [our 11.8 release post](https://yoa.st/release-11-8)!

#### Enhancements

* Moves advanced SEO settings to a collapsible in the SEO tab.
* Social settings tab in the metabox now contains collapsibles instead of tabs.
* Adds style for padding to the metabox menu to avoid it being overwritten by custom editor styles. Props to [@emilyatmobtown](https://github.com/emilyatmobtown).
* Improves sanitization of the schema output.

#### Bugfixes

* Fixes a bug where the `WP_Queryget_posts()` method would be called multiple times when the query includes several taxonomy terms, resulting in different results. Props to [@Chouby](https://github.com/Chouby).
* Fixes a bug where the checkbox in the customizer about showing the blog page in the breadcrumbs would do exactly the opposite of what it promised. Props to [@garrett-eclipse](https://github.com/garrett-eclipse).
* Fixes a bug where the snippet title and meta description fields would still be left-to-right when the site was set to a right-to-left language.

= 11.7 =

Release date: 2019-07-23

By now you probably know the 11.x releases of Yoast SEO are all about Schema. In this release, we’ve enabled the possibility to use a subset of HTML tags in the FAQ and HowTo blocks! Find out all about Yoast SEO 11.7 in [our 11.7 release post](https://yoa.st/release-11-7)!

#### Enhancements

* Allows a subset of HTML tags in FAQ answer, HowTo description and HowToStep description schema output: `&lt;h1&gt;`, `&lt;h2&gt;`, `&lt;h3&gt;`, `&lt;h4&gt;`, `&lt;h5&gt;`, `&lt;h6&gt;`, `&lt;br&gt;`, `&lt;ol&gt;`, `&lt;ul&gt;`, `&lt;li&gt;`, `&lt;a&gt;`, `&lt;p&gt;`, `&lt;b&gt;`, `&lt;strong&gt;`, `&lt;i&gt;`, `&lt;em&gt;`, and their closing counterparts.
* Remove the `noindex` from feeds as this causes issues for podcasts and other feeds.
* Improves the accessibility of the horizontal tabs in the metabox by implementing an ARIA tabbed user interface.

#### Bugfixes

* Fixes a bug where the avatar in the knowledge graph settings would incorrectly overwrite the default user profile picture.

= 11.6 =

Release date: 2019-07-09

Yoast SEO 11.6 is out today. Of course, we did the regular round of bug fixing, but the focus of this release is two-fold: a new, much easier to use tabbed interface for the meta box and an updated HowTo structured data content block for WordPress. Find out all about Yoast SEO 11.6 in [our 11.6 release post](https://yoa.st/release-11-6)!

#### Enhancements

* Changes the tabs in the metabox to horizontal tabs.
* Splits the content optimization tab in the metabox into two separate tabs: an SEO and a Readability tab.
* Updates HowTo schema output to reflect Google's new guidelines.
* Makes sure the media modal that is triggered for image uploads only displays images.

#### Bugfixes

* Fixes a bug where the Schema `@id` for `Person` would be incorrect on posts when author archives where disabled.
* Fixes a bug where the Schema would contain `WebPage` instead of `CollectionPage` for a latest posts homepage and the static posts page type.
* Fixes a bug where the `Organization` and `Article` Schema nodes would incorrectly be output when a website had not set their organization's name and/or logo.
* Fixes a bug where the eye marker tooltips would break out of the metabox, which would hide the last part of the tooltip text.
* Fixes a bug where instances of unfiltered HTML would be allowed in term descriptions where they shouldn't be.

= 11.5 =

Release date: 2019-06-25

Yoast SEO 11.5 is out today. This release features a big change that gives you a better idea of how searchers see your snippets on mobile. Yep, we’ve overhauled the mobile snippet preview and brought it up-to-date with Google’s latest changes. And that, of course, includes that shiny favicon. Find out what Yoast SEO 11.5 is all about in [our 11.5 release post](https://yoa.st/release-11-5)!

#### Enhancements

* Updates the Mobile Snippet Preview.
* Moves the primary image for a page out of the `WebPage` piece into its own graph piece.

#### Bugfixes

* Fixes missing trailing slash for the homepage on post sitemap. Props to [stodorovic](https://github.com/stodorovic).

= 11.4 =

Release date: 2019-06-12

Yoast SEO 11.4 is out today. This release features loads of structured data improvements. We’ve improved the way Yoast SEO Schema works with AMP, plus we’ve enhanced our FAQ blocks and added them to the graph. Find out what Yoast SEO 11.4 is all about in [our 11.4 release post](https://yoa.st/release-11-4)!

#### Enhancements

* Yoast SEO now takes control of the Schema output on pages generated by the [AMP plugin](https://wordpress.org/plugins/amp/).
* Introduces a new action `wpseo_pre-schema_block-type_` which allows changing graph output based on the blocks on the page.
* Introduces a new filter `wpseo_schema_block_` which allows filtering graph output per block.
* Improves the `FAQPage` Schema markup to adhere to Google's new standards.
* Optimizes the handling of external images.
* Adds links to the SEO and readability scores in the classic editor publish box that make the page scroll to the corresponding analysis in the metabox.
* Moves the focus keyphrase input field to the top of the metabox and sidebar.

#### Bugfixes

* Fixes a bug where object cache for `WPSEO_Option_Titles` would be cleared too often.
* Fixes a bug where questions without answers would be outputted in the Schema FAQ markup.
* Fixes a bug where the overridden canonical would be used instead of the 'unoverridden' canonical.
* Fixes a bug where the traffic light icon would be empty when the readability and SEO analysis were disabled.
* Fixes a bug where following links to page fragments would make the Help Center video tab disappear.
* Fixes a bug where author Schema would be outputted on author archives when author archives were disabled.

#### Other

* Removes a redundant caching call for primary terms.

= 11.3 =

Release date: 2019-05-28

High-time for another release, namely Yoast SEO 11.3. This release features enhancements and bug fixes aimed at improving the way your favorite SEO plugin performs. Read more about the release in [our 11.3 release post](https://yoa.st/release-11-3).

#### Enhancements

* When the site is set to represent a person, a logo/avatar to be used in the knowledge graph can now be selected in the Search Appearance settings.
* Adds the `wpseo_should_index_links` filter that can be used to disable the link indexing
* Enables builtin Taxonomies for the 'Content type archive to show in breadcrumbs for taxonomies' section to allow the Blog archive page be added to the breadcrumbs.
* Props to [@ramiy](https://profiles.wordpress.org/ramiy/) for making translating the plugin easier by merging near identical strings.

#### Bugfixes

* Fixes a bug where sitemaps would be shown in the `sitemap_index.xml` but result in a 404 when requested.
* Fixes a bug where the schema output would include an invalid publisher when the site was set to represent a person.
* Fixes a bug where a `Person` schema object would be output, when the site was set to represent a person, but no specific person was selected.
* Fixes a bug where it would no longer be possible to change the user in the Search Appearance settings when the previously selected user had been deleted.

#### Other

* Removes the help center from the metabox.
* Removes redundant `name` attribute from `author` in `Article` schema markup piece.
* Increases the MyYoast API request timeout from 1 to 5 seconds, to give servers with a less optimal connection to our services more room to fetch the data.

= 11.2.1 =

Release date: 2019-05-16

#### Bugfixes

* Fixes a bug where the metabox would be empty on WordPress versions below 5.0.
* Fixes a bug where the metabox would be empty when both the classic editor plugin as well as the Gutenberg plugin were installed.

#### Other

* Introduces a notification that encourages updating to the latest WordPress version.

= 11.2 =

Release date: 2019-05-15

#### Enhancements

* Introduces a fallback to the first image in the content for the schema output when no featured image has been set.
* Adds a `wpseo_schema_person_social_profiles` filter to allow filtering in/out extra social profiles to show.
* Adds a `wpseo_schema_needs_` filter that allows filtering graph pieces in or out.
* Adds a `wpseo_sitemap_post_statuses` filter to add posts with custom post statuses to the sitemap. Props to [stodorovic](https://github.com/stodorovic) and [tolnem](https://github.com/tolnem).
* Adds a custom overlay color to the snippet preview modal.
* Adds the correct focus style to the Configuration Wizard navigation buttons.
* Props to [@ramiy](https://profiles.wordpress.org/ramiy/) for making translating the plugin easier by merging near identical strings.

#### Bugfixes

* Fixes a bug where the URL to Pinterest's claim page was incorrect. Props [@ramiy](https://profiles.wordpress.org/ramiy/).
* Fixes a bug where notifications about incompatibility would be thrown for inactive add-ons.
* Fixes a bug where URLs with a non-Yoast SEO related xsl query string parameter would result in a blank page. Props [@stodorovic](https://github.com/stodorovic) and [@yiska](https://github.com/yiska).

#### Other

* Removes the `add_opengraph_namespace` filter because the OGP.me HTML namespace is not used anymore.
* Decouples the sitemap debug information from the general `WP_DEBUG` development flag and introduces the `YOAST_SEO_DEBUG_SITEMAPS` flag to better control this functionality.

= 11.1.1 =

Release date: 2019-05-06

#### Bugfixes

* Fixes a bug where an empty width and height would be outputted in the image schema when there was no retrievable width and height.
* Fixes a bug where using the `$context` argument in the deprecated `wpseo_json_ld_output` filter would result in a fatal error when using PHP 7.1 or higher.

#### Other

* Adds a notification to explain why users’ Google Search Console reports are no longer showing any entries. [Read more about the reasons behind this](https://yoa.st/gsc-dep-changelog).
* Removes the Google Search Console step from the configuration wizard.

= 11.1 =

Release date: 2019-04-30

#### Enhancements

* Improves how we generate the image parts for the Schema output. [Read more about the ImageObject output](https://yoa.st/image-schema).
* Adds `filesize` to whitelisted properties on `$image`. Props to [cmmarslender](https://github.com/cmmarslender).
* Optimizes the code to avoid an unnecessary DB query to remove notifications storage when it's already empty. Props to [rmc47](https://github.com/rmc47).
* Improves the breadcrumbs accessibility by adding `aria-current` to the active item.

#### Bugfixes

* Fixes a bug where the position of the buttons in the FAQ and How-To structured data blocks was compromised when running the development build of Gutenberg.
* Fixed a bug where social profile settings would be empty because it was relying on the user choosing whether the site represents a company or a person.

= 11.0 =

Release date: 2019-04-16

We've made huge changes to the schema.org markup we output, adding multiple different types of Schema. Be sure to check [our posts on yoast.com about this release](https://yoa.st/schema-release-post)!

#### Enhancements

* Schema changes:

* Adds `Person` markup for author pages.
* Adds `WebPage` markup for all pages.
* Adds `Article` markup for posts, with `Person` markup for the author.
* Changes the ‘Organization or Person’ section of the Knowledge graph settings to allow selecting an author that is the ‘Person’ that the website represents.

* Adds MySpace, SoundCloud, Tumblr and YouTube URL input fields to people’s profiles.

#### Bugfixes

* Fixes an issue where the metabox would not display on term edit pages when running the development build of Gutenberg.

= 10.1.3 =

Release date: 2019-04-04

#### Bugfixes

* Reverted a fix relating replacement variables on the block editor, which was causing a slow and unworkable editting experience.
* Fixes a bug where the license information from MyYoast is being saved aggressively, causing updates in MyYoast to take 24 hours to show up in the site.
* Fixes a bug where the `rel="publisher"` Google+ tag was being output on the frontend if that profile was provided in the past.
* Fixes a bug where the server could experience a high load when using external object cache.
* Fixes the bug where Yoast SEO would contact Yoast.com for license checks on specific Yoast-pages even when no Yoast addons are installed.

= 10.1.2 =

Release date: 2019-04-03

#### Bugfixes

* Fixes the bug where Yoast SEO would contact Yoast.com for license checks even when no Yoast addons are installed.

= 10.1.1 =

Release date: 2019-04-02

#### Bugfixes

* Fixes a bug where a fatal error can occur on license requests which return an unexpected result.

= 10.1 =

Release date: 2019-04-02

#### Enhancements

* Removes Google+ from the various interfaces: social accounts, user profiles and more.
* Adds a Wikipedia URL field to the social accounts list, to be used in `sameAs` Schema.org output.
* Adds a LinkedIn profile URL field to user profiles, a first sign of things to come in 10.2.
* Removes the `og:image:alt` tag as it causes potential accessibility issues when content is shared via Facebook.
* Adds support for browsers auto-fill in the form fields that collect user information.
* Adds missing screen reader text to the SEO score icon in the front end admin bar.
* Increases the recommended sentence length limit for Spanish and Catalan to be more in line with best practices in these languages, props to [Sílvia Fustegueres](https://www.ampersand.net/en/).
* Improves the list of Catalan transition words, props to [Sílvia Fustegueres](https://www.ampersand.net/en/).
* Improves the list of Swedish transition words.

#### Bugfixes

* Fixes a bug where selecting a parent page for a page would lead to console errors and a not-working 'parent page' snippet variable.
* Fixes a bug where no focus indication was shown for the title separators in the configuration wizard and settings.
* Fixes a bug where taxonomy terms weren't shown correctly in the Snippet Preview, for example when using the `Categories`, `Tags` or any custom taxonomy replacement variable.
* Fixes a bug where breadcrumb structured data wasn't output when breadcrumbs are disabled and a theme with breadcrumb support has been installed.
* Fixes a bug where a PHP notice would be written to `debug.log` when adding a new site to a WordPress 5.1 multisite installation.

#### Other

* Removes all functionality that has been deprecated before Yoast SEO 6.1.

= 10.0.1 =

Release date: 2019-03-19

#### Bugfixes

* Fixes a bug where network-wide settings were not saved on multisite environments.

= 10.0 =

Release date: 2019-03-12

#### Enhancements

* The recalibrated analysis is out of its beta phase and is now the default for the SEO analysis. Thanks for testing and giving us your valuable feedback! You are awesome! ?
* Adds `$taxonomy` to the arguments passed to the `wpseo_terms` filter. Props to [polevaultweb](https://github.com/polevaultweb).
* Changes the screen reader text of the SEO score indicator in the menu bar and the traffic light in the snippet preview from `Bad SEO score.` to `Needs improvement.`
* Props to [Kingdutch](https://github.com/Kingdutch) for helping improve our open source content analysis library.

#### Bugfixes

* Fixes a bug where the `focus keyphrase` snippet variable was not correctly applied on term pages.
* Fixes a bug where the Facebook image that was set for the WooCommerce Shop page would not be outputted as `og:image`. Props [stodorovic](https://github.com/stodorovic).
* Fixes a bug where the featured image set on a WooCommerce Shop page would not be outputted as Facebook OpenGraph Image or Twitter Image. Props [stodorovic](https://github.com/stodorovic).
* Fixes a bug where backslashes and consecutive double quotes would be removed from the focus keyphrase when saving a post or term.
* Fixes a bug where backslashes would be removed from the breadcrumb title, focus keyphrase, title or meta description when saving a term.

= 9.7 =

Release date: 2019-02-26

#### Enhancements

* Replaces inch marks by smart quotes in search breadcrumbs.
* Improves the feedback for the assessment that checks the length of cornerstone articles.
* Improves accessibility and focus management for the How-To and FAQ structured data blocks.
* Improves the Internal Links table headers on the post overview for better translations and accessibility.
* Adds a description of the SEO and Readability score to the posts and taxonomies overview in mobile view.
* Adds a label element to the Google Search Console authorisation code input field in the configuration wizard.

#### Bugfixes

* Fixes a bug where a Flesch reading ease score of exactly 90 would trigger incorrect feedback.
* Fixes a bug where the taxonomy sitemap provider would not handle private taxonomies as expected, resulting in sitemaps not being accessible in specific situations.
* Fixes a bug where an empty twitter description instead of the term description would be shown.
* Fixes a bug where 'undefined index' warnings would be given when saving a Facebook image.
* Fixes a bug where the Recalibration Beta could not be loaded in combination with specific server configurations.

= 9.6 =

Release date: 2019-02-12

Content analysis recalibration (beta):

* As there are already a lot of users who are participating in testing, we currently have enough input to start preparing for the release of the improved analysis.

* Removes the ability to enable beta testing for new installations.
* When the feature is disabled, the ability to re-enable it will disappear.


#### Enhancements

* Removes schema (JSON+LD) output from 404 pages.
* Improves the Google Search Console table accessibility by removing a duplicate button.
* Improves the code to better comply to the coding standards.

#### Bugfixes

* Fixes a bug where an empty feed would be available for non-existing pages. Props [stodorovic](https://github.com/stodorovic).
* Prevents `vendor_prefix/j4mie/idiorm/demo.php` from being included in the release.

#### Other

* Props to [Kingdutch](https://github.com/Kingdutch) for helping improve our open source content analysis library.
* Improves the redirect upsell when creating redirects in the search console overview.

= 9.5 =

Release date: 2019-01-22

#### Enhancements

* Completes the readability analysis for Swedish by adding the transition words, sentence beginnings and passive voice assessments.
* Improves the transition word assessment for German.

#### Bugfixes

* Fixes a bug where the Ryte endpoint would be called when the Ryte feature has been disabled.
* Fixes a bug where the 'Show archives for authors without posts in search results?' toggle would be shown when the 'Show author archives in search results?' toggle was disabled in the search appearance settings.
* Fixes a bug where the front page would be shown in the page sitemap. Props to [stodorovic](https://github.com/stodorovic).
* Fixes a bug where errors would be thrown in the classic editor when Gutenberg assets were enqueued without Gutenberg being active.
* Fixes a bug where the editor would not be loaded when clicking the ‘edit’ button for a child page in the page overview. Props [mondrey](https://github.com/mondrey).

Deprecated:

* Deprecates the methods WPSEO_Utilsget_user_locale() and WPSEO_Utilsget_language().

#### Other

* Adds a Courses Page showing an overview of the available online courses offered by Yoast Academy.

= 9.4 =

Release date: 2019-01-08

Content analysis recalibration (beta):

* Adds a toggle feature for subscribing to the recalibration beta under SEO -&gt; General -&gt; Features.
* When the recalibration feature is enabled:

* The single title assessment is added. This assessment makes sure that you don't use superfluous H1s in your text.
* Assessments changes:
* Keyphrase density: changes scoring schema to account for the length of the keyphrase and changes feedback strings so that we give feedback about the number of occurrences rather than a percentage.
* Outbound links assessment: changes the scoring schema so that red bullet instead of an orange bullet is shown when you have no outbound links.
* Image alt attributes: if there are at least 5 images, checks whether the alt tags contain the keyphrase or synoynyms in 30-70% of all images. If there are less than 5 images, 1 image with the keyphrase or synonym in the alt tag is still scored as good.
* Keyphrase in title: function words preceding the exact match keyphrase are ignored when determining the position of the keyphrase in the title.
* Keyphrase length: makes the scoring scheme less strict for languages that don't have function word support, so that for these languages keyphrases with 1-6 words are scored as green, 7-9 as orange, and more than 9 as red.
* Keyphrase in subheading: only takes H2 and H3 level subheadings into account and changes the scoring schema so that 30%-75% of these subheadings need to include the keyphrase or its synonyms. In languages without function word support, a match is only counted if all the words from the keyphrase/synonym appear in the subheading.
* Text length: on taxonomy pages, the recommended minimum text length is increased from 150 to 250 words.
* Assessment removals:
* The assessment checking the length or your URL.
* The assessment checking whether your URL contains stopwords.


#### Enhancements

* Improve accessibility of the analysis results.
* Improve accessibility of the Title Separator setting.
* Adds a new filter for adjacent-rel links: `wpseo_adjacent_rel_url`.

#### Bugfixes

* Fixes a bug where special characters from certain word lists weren't correctly escaped when matched with a regex. This resulted in `eggs` being incorrectly matched as the transition word `e.g.`, for example.
* Fixes a bug where the search appearance setting for a custom content type named `profile` would have a broken layout.
* Fixes a bug where pagination elements were not shown in the Genesis theme.

#### Other

* Uses method `is_simple_page` instead of `is_singular` in method robots. Props to: [stodorovic](https://github.com/stodorovic)
* Adds method `is_woocommerce_active` and check is woocommerce activate before registering hooks. Props to [stodorovic](https://github.com/stodorovic)
* Adds static variables to "cache" results of functions [`is_shop`](https://docs.woocommerce.com/wc-apidocs/function-is_shop.html) and [`wc_get_page_id`](https://docs.woocommerce.com/wc-apidocs/function-wc_get_page_id.html). Props to [stodorovic](https://github.com/stodorovic)
* Verifies that variable `post` is an instance of `WP_Post` in `WPSEO_Admin_Bar_Menu get_singular_post()`. Props to [@yingles](https://github.com/yingles).
* Improves strings to be more easily translated. Props to [pedro-mendonca](https://github.com/pedro-mendonca)
* The browser console now shows more descriptive error messages when something went wrong during analyses in the web worker.
* Avoids irrelevant warning and error in the WPEngine PHP Compatibility plugin.

= 9.3 =

Release date: 2018-12-18

#### Enhancements

* Reapplies the markers in Gutenberg when the content changes to make sure they stay up-to-date.
* Changes the output of schema preventing unnecessary escaping of forward slashes, only available on sites running PHP 5.4 or higher.
* Changes the website schema `@id` attribute to include the home URL to be a unique identifier.
* Adds the page number to the breadcrumbs when an archived page is entered.
* Removes a redundant Edge-specific CSS fix for the tooltips in the post overview. Props [mkronenfeld](https://github.com/mkronenfeld).

#### Bugfixes

* Fixes a bug where the 'Select primary category' label in the primary taxonomy picker would overlap the 'Add new category' button.
* Fixes a bug where the cornerstone filter was still visible with the metabox disabled.
* Fixes a bug where non-functional markers are shown for taxonomy pages.
* Fixes a bug where the `og:description` tag would remain empty after setting the author description.
* Fixes a bug where texts in the configuration wizard would overlap each other and break out of the columns in Internet Explorer 11. Props [DrGrimshaw](https://github.com/DrGrimshaw).
* Fixes a bug where keyphrases weren't recognized in the URL when the words in the URL were separated by underscore characters instead of hyphens.
* Fixes a bug that caused numbers to be stripped when marking a keyphrase containing a number, e.g. 'Yoast SEO 9.3'.
* Fixes a bug where the first tab of the metabox would be empty when using WordPress 4.8.x.
* Fixes a bug where private post types would have a sitemap with their 'private' entries.

#### Other

* Implemented performance optimizations in FAQ and How To blocks.

= 9.2.1 =

Release date: 2018-11-21

#### Bugfixes

* Fixes a bug where the title and meta description field’s cursor would jump to the start when typing.

= 9.2 =

Release date: 2018-11-20

#### Enhancements

* Adds support for the 'eye' markers in Gutenberg using the experimental annotations API in Gutenberg. They will work for the paragraph, quote, heading and list blocks.
* Adds the latest og:locale options provided by Facebook. Props to [valtlfelipe](https://github.com/valtlfelipe)
* Adds support for oEmbed utilization of Yoast custom fields (post meta) values. Specifically the image and the title. Props to [ben-caplan](https://github.com/ben-caplan)
* Defines attachment as non-accessible when attachment urls are redirected to the attachment file itself. Props to [stodorovic](https://github.com/stodorovic)
* Improves the accessibility of the "Bulk editor" and "Search console" tables.
* Hides SEO title and metadescription fields on the author edit page when the author archives are disabled.
* Replaces Settings ZIP download (export) and upload (import) functionality with Settings fields.

#### Bugfixes

* Fixes a bug where assessments would fail if a "&lt;" character is present in the content.
* Fixes a bug where the excerpt replacement variable will output a piece of the post content when no excerpt is given.
* Fixes a bug where the wrong title is rendered for the WooCommerce product archive.
* Fixes a bug where the Yoast metabox is visible even when the attachment urls are redirected to the attachment file itself.
* Fixes a bug where the Dashboard Widget was not displayed in the correct language.
* Fixes a bug in combination with Gutenberg where paragraphs were sometimes not correctly detected because paragraph tags were not automatically added in WordPress-like fashion.
* Fixes a bug in combination with Gutenberg where multiple marker buttons could be active at the same time.
* Fixes a bug in combination with Gutenberg where escaped HTML is shown in the OpenGraph description.

#### Compatibility

* Adds the `__block_editor_compatible_meta_box` flag to our metabox registrations to indicate they are compatible with WordPress 5.0.
* Revise the enqueue order of the JavaScript assets to ensure compatibility with the classic editor plugin and WordPress 5.0.

#### Security

* Fixes a possible command execution by users with SEO Manager roles. Props to [Dimopoulos Elias](https://twitter.com/gweeperx)

#### Other

* Disables the non-functioning markers for the subheading distribution assessment.
* Refactor SEO assessment filenames and exports. Props to [Kingdutch](https://github.com/Kingdutch)
* Deprecates the `Yoast_Modal` class.

= 9.1 =

Release date: 2018-11-06

#### Enhancements

* Improves keyphrase recognition in the first paragraph on texts which start with images and captions.
* Adds a warning notification to the permalink settings page, linking to a knowledge base article. Props to [valtlfelipe](https://github.com/valtlfelipe)
* Adds the filter `wpseo_opengraph_is_valid_image_url` that allows custom image URL validation. Props to [petenelson](https://github.com/petenelson)
* Updates the font size of the snippet title measure element to correctly mimic Google desktop snippet title. Props to [ol0lll](https://github.com/ol0lll)

#### Bugfixes

* Fixes a bug where the featured image was not recognized in the SEO analysis when using Gutenberg.
* Fixes an accessibility issue where focus would be lost when removing an uploaded image in the configuration wizard.
* Fixes a bug where notices were being thrown when quick editing a post and no post type object could be found.
* Fixes a bug where a dependency wasn't loaded for the SEO -&gt; Tools page.
* Fixes a faulty reference to the old SEOAssessor class.
* Fixes the copy of the date archives help text which contains faulty information. Props to [mkronenfeld](https://github.com/mkronenfeld)
* Fixes the spelling of the words "plug-in" and "set-up". Props to [pedro-mendonca](https://github.com/pedro-mendonca)
* Fixes a bug where a type error is thrown when the posts or terms focus keyword isn't of the type WP_Post as this can collide with third-party plugins.

#### Other

* Changes the reference in the admin bar menu from "AdWords External" to "Google Ads".
* Removes non-functioning eye-markers for the link keyphrase assessment.

= 9.0.3 =

Release date: 2018-10-30

#### Bugfixes

* Fixes a bug where the metabox was broken when using the classic editor plugin.
* Fixes a bug where the Chrome browser tab would crash on Windows when a French or Italian text contains sentences in passive voice, props [CarloCannas](https://github.com/CarloCannas).
* Fixes a bug where the Yoast SEO analysis would error if used together with the DelightfulDownloads plugin.

= 9.0.2 =

Release date: 2018-10-24

#### Bugfixes

* Fixes a bug where it was impossible to change the profile in the Search Console integration step in the configuration wizard.
* Fixes a bug where the primary taxonomy picker was not shown in Gutenberg (v4.1).

= 9.0.1 =

Release date: 2018-10-23

#### Bugfixes

* Fixes error with using `$` in wp-seo-admin-media.js. Now we use `jQuery` instead.

= 9.0 =

Release date: 2018-10-23

#### Bugfixes

* Fixes a bug where the keyword would not be found in the slug when containing punctuation, for example the keyphrase `apples &amp; pears` in the slug `apples-pears`.
* Fixes a bug where the buttons to change the How-to steps and FAQ questions order would be only partially visible in mobile view.
* Fixes a bug where an 'undefined index' notice would be given when an OpenGraph image URL didn't have a correct path. Props to [@Julian-B90](https://github.com/Julian-B90)
* Fixes a bug where the home description can contain HTML, resulting in unexpected characters on the Facebook social settings page.
* Fixes a bug where author sitemap caches would be attempted to be invalidated despite not all conditions being met.
* Fixes a bug where a fatal error on Yoast settings pages was thrown because they did not have a dedicated option class.

#### Enhancements

* Introduces two new principles for keyword recognition:

* Makes keyphrase recognition flexible with regards to word order. This means that the keyphrase `SEO WordPress plugin` will be found in the sentence `This is the most popular SEO plugin for WordPress.` In order to use exact matches, the keyphrase can be enclosed in quotation marks.
* When matching keyphrases for the various assessments, the analysis only targets content words and ignores function words (e.g., `the` or `and`). This functionality is available in English, German, Dutch, French, Spanish, Italian, Portuguese, Russian and Polish.

* The analysis of the following assessments incorporates the new keyword recognition principles:

* Image alt attributes: checks whether there’s at least one image with an alt tag that contains words from the keyphrase. An exact match isn’t required anymore.
* Keyphrase in introduction: checks whether words from the keyphrase are matched within one sentence in the introduction or, if not, whether they are present in the first paragraph at all. An exact match isn’t required anymore.
* Keyphrase in title: still checks whether an exact match of the keyphrase is found in (the beginning of) the title, but now also recommends improvement if all words from the keyphrase are found in the title.
* Keyphrase length: has new boundaries to check whether the keyphrase is not too long. For languages that have support for function word stripping (see above), only content words are taken into account.
* Keyphrase in meta description: checks how often all words from the keyphrase are matched within the meta description.
* Keyphrase in subheading: now checks whether at least one subheading contains more than half of the words from the keyphrase. An exact match isn’t required anymore.
* Keyphrase in slug: checks whether a sufficient number of words from the keyphrase is used in the slug. The number of words required depends on the length of the keyphrase.
* Keyphrase density: checks whether there are enough keyphrase matches; a match is defined as a sentence that contains all words from the keyphrase.
* Link focus keyphrase: the assessment that checks whether you’re using your keyphrase to link to a different article doesn't require an exact match anymore.

* Improves the feedback texts for all SEO and readability assessments.
* Improves the consistency of the SEO and readability results by showing them in a fixed order.
* Adds target="_blank" to the "How to connect to GSC" link to open the link a new tab. Props to [@zkan](https://github.com/zkan)
* Changes all mentions of 'keyword' to 'keyphrase'. Read more about [the transition from 'keyword' to 'keyphrase'](https://yoa.st/keyword-to-keyphrase).
* Optimizes and caches WPSEO_Option_Titlesenrich_defaults(). Props to [@soulseekah](https://github.com/soulseekah)
* Introduces a Features tab in the network admin, which allows disabling all site-specific features for the entire network.
* Improves the tab order within the structured data blocks in Gutenberg and make it consistent between the FAQ and How-To block.
* Improves sitemap performance by disabling the caching by default.
* Adds `target="_blank"` to the "How to connect to GSC" link to open a new tab when clicked.
* Adds an assessment that checks whether your keyword consists only of function words.
* Changes OpenGraph image handling to always use an image from the media library. This makes the performance of the OpenGraph image handling much better.
* Improves performance by no longer using images from the content as a fallback for the OpenGraph and Twitter images.

#### Other

* Deprecates the WPSEO_Cornerstone class.
* Deprecates the assessment that checks if stopwords are used within the keyphrase.

= 8.4 =

Release date: 2018-10-09

#### Bugfixes

* Fixes a bug where the cornerstone content toggle was available for attachment pages.
* Fixes a bug where the Search Console page displayed 'first detected' and 'last crawled' dates that were in the future.

#### Enhancements

* Introduces the `wpseo_taxonomy_content_fields` filter to add additional fields to the taxonomy metabox.
* Adds a margin below select fields so there's space between taxonomy settings for breadcrumbs. Props to [@emilyatmobtown](https://github.com/emilyatmobtown)

= 8.3 =

Release date: 2018-09-25

#### Bugfixes

* Fixes a bug where an incorrect time would be outputted in the `article:published_time` and `article:modified_time` meta properties when a timezone with numerical UTC offset was used (e.g. UTC+10).
* Fixes a bug where the `article:published_time` and `article:modified_time` meta properties would be localized. Props to [AminulBD](https://github.com/AminulBD).
* Fixes a bug where the structured data rendered by the Gutenberg How-To and FAQ blocks was rendered on pages with multiple posts.
* Fixes a bug where snippet variables would not be replaced in the `og:description` of taxonomies when they were added in the Facebook Description input field.
* Fixes a bug where `babel-polyfill` would throw an error that there shouldn't be two instances of babel-polyfill.
* Fixes a bug where the `bold` button was available in the How-to block's step title and the FAQ block's Question field while they were already bold by default.
* Fixes a bug that caused keywords beginning with the Turkish characters `İ` / `i` and `I` / `ı` not to be recognized when changing that character from lowercase to uppercase and vice versa.

#### Enhancements

* Adds a colon to the list of possible title separators.
* Adds a setting and filter (`wpseo_duration_text`) to the how-to block that allows users to edit the text describing the time needed.
* Adds a help text to the readability analysis.

#### Other

* Adds a notice to the Yoast SEO dashboard that is shown when both Yoast SEO and All in One SEO Pack plugins are active.
* Makes the duplicate content link on the archive settings open in a new tab. Props to [nikhilbarar](https://github.com/nikhilbarar).
* Changes the notification message that is shown when a new SEO-related issue has been found.
* Uses the correct type as the second argument of the `wpseo_sitemap_exclude_empty_terms` filter call when determining which taxonomies should have a sitemap. Props to [liarco](https://github.com/liarco).
* Removes the executable bits on SVN assets. Props to [mathieu-aubin](https://github.com/mathieu-aubin).
* Introduces an API function to get all Yoast SEO-related capabilities. Props to [JoryHogeveen](https://github.com/JoryHogeveen).
* Changes the `@context` property from `http://schema.org` to `https://schema.org` in the FAQ and How-To block's structured data output.
* Rename the `associatedMedia` property in the FAQ and How-To block's structured data output to `image`, to reflect a change in Google's guidelines.
* Moves the `@type` and `name` properties to the root of the FAQ block's structured data output.
* Nests the `Question` objects in the newly introduced `mainEntity` property in the FAQ block's structured data output.
* Removes the superfluous `position` property from the How-To block's structured data output.

= 8.2.1 =

Release date: 2018-09-20

#### Bugfixes

* Fixes a bug where the Chrome or Opera browser tab would crash on Windows when a Polish text contains sentences in passive voice.

= 8.2 =

Release date: 2018-09-11

#### Enhancements

* Introduces a How-To block in Gutenberg to create a How-to guide in an SEO-friendly way. Read more about the Gutenblocks in [our release post](https://yoa.st/gutenblocks).
* Introduces a FAQ block in Gutenberg to list your Frequently Asked Questions in an SEO-friendly way. Read more about the Gutenblocks in [our release post](https://yoa.st/gutenblocks).
* Adds readability analysis for Polish.
* On Multisite environments, in addition to the site domain, path and ID, also site titles are now present in the site selection dropdowns.

#### Bugfixes

* Fixes a bug where changing the WordPress slug would not correctly update the snippet editor.
* Fixes a bug where the user input would trigger an analysis every time.
* Fixes a bug with incorrect zooming on older iPhones within the installation wizard.
* Fixes a bug where the OpenGraph image wouldn't show correctly for the frontpage in a few situations. Props to [@mt8](https://github.com/mt8) for the solution direction.
* Fixes a bug where the Yoast SEO network admin menu and admin bar menu would appear when the plugin was only active for the main site, and not for the entire network.
* Fixes a bug where snippet variables in the Twitter card title and description wouldn't be properly replaced.
* Fixes a bug where a non-existing dependency was requested on the Search Appearance settings page.
* Fixes a bug where the value of the primary category snippet variable in the classic editor wouldn't change when the primary category was changed.
* Fixes a bug where the Gutenberg editor in the Classic Editor plugin would crash when the primary category picker was loaded. If something goes wrong in the primary category picker, it now shows a notification, instead of making the entire editor crash.
* Fixes a bug where the readability analysis would not show the correct scores for cornerstone content.
* Fixes a bug where switching off the SEO analysis would stop the readability analysis from loading.
* Fixes a fatal error on the Term and Post edit pages when the server is running on PHP 5.2.

= 8.1.2 =

Release date: 2018-09-05

#### Bugfixes

* Fixes a bug where our JavaScript memory usage would increase indefinitely. This could result in a browser crash after a long enough period.

= 8.1.1 =

Release date: 2018-09-03

#### Bugfixes

* Fixes compatibility with Gutenberg 3.7, which removed a feature we were relying on.
* Fixes a bug where the Twitter meta-tags would not have the snippet variables replaced with their dynamic values.
* Fixes a bug where the `og:url` would not be set to the canonical URL if the canonical URL is explicitly set on Post types, Terms or Tags.
* Fixes a bug on the Term page when editting the `slug`, it would not be updated in the Snippet Preview directly.

= 8.1 =

Release date: 2018-08-28

#### Enhancements

* Adds the Snippet Preview Editor to the sidebar.
* Introduces the Primary Category picker to Gutenberg.
* Introduces a loading indicator in the analysis that is shown until we're ready to analyze the content.
* Optimizes the content analysis calculations. This fixes the issue where the UI could freeze when you have a long post.
* Changes the "Check Inlinks (OSE)" menu item in the Yoast Admin bar "Analyze this page" dropdown from the Moz OpenSite Explorer (OSE) to Google Search Console, as the former service is being disabled on August 30th 2018.

#### Bugfixes

* Fixes a bug where the analysis scores would change multiple times due to a delay in the loading of the actual scores. We now show loading indicators until the actual scores have been calculated.
* Fixes a bug where the parent title snippet variable wasn't properly being replaced with the actual parent title in Gutenberg.
* Fixes a plugin compatibility bug where the SEO score in the admin bar could not be retrieved.
* Fixes a bug where the editor would not be usable when deferred or async loading of JavaScript is being forced.
* Fixes a bug where the analysis for previously used keywords would only be triggered if the keyword was changed, resulting in an incorrect SEO score.

= 8.0 =

Release date: 2018-08-14

#### Enhancements

* Implements the Yoast sidebar for Gutenberg: added the Readability, Focus Keyword and Cornerstone content tabs to the sidebar.
* Revamps the Yoast metabox to use the same vertical design as the new sidebar.
* Implements the same tabbed layout in the plugin's network settings screen that is also used in the plugin's site settings screens.
* Implements a plugin-specific network settings API and use it in the network settings screen.
* Introduces a network admin-specific admin bar menu.
* Adds notifications to the Notification Center in regards to Gutenberg compatibility. If Gutenberg is older than the minimum supported version by Yoast SEO, a 'problem' notification is added. If Gutenberg is only slightly outdated, a 'normal' notification is added.
* Implements the automatic detection of the keyword for terms based on the term's title.

#### Bugfixes

* Fixes a bug where `/sitemap.xml` would not correctly redirect to `/sitemap_index.xml` in some environments.
* Fixes a bug where sitemap cache transients would not be correctly cleared.
* Fixes a bug where markers were wrongfully displayed in Gutenberg.
* Fixes a bug where SEO titles were incorrectly evaluated as being of a good length when they were actually slightly too long.

#### Other

* Moves the network's Restore Site functionality into its own tab.

= 7.9.1 =

Release date: 2018-08-07

#### Enhancements

* Improves the link to claim your website on Pinterest by directly sending you to the right location.
* Adds the passive voice assessment for Dutch.
* Adds a link to a relevant article about re-using keywords to the feedback of the assessment that checks if the keyword was used previously.

#### Bugfixes

* Adds a missing H1 heading to the Network Admin &gt; SEO &gt; Edit Files page.
* Fixes the textarea sizes in the Search Appearance &gt; RSS tab.
* Fixes a bug where adding a company image in step 4 of the Configuration Wizard, would make the wizard crash.
* Fixes a bug where PHP error notices were given when the search result doesn't have any WooCommerce products. Props to [jaska120](https://github.com/jaska120).
* Improves the order in which assessments are triggered. The keyword in the title is only checked once there's a title, the keyword in the introduction is only checked once there's a text, and the keyword in the meta description is only checked once there's a meta description.
* Fixes a bug that caused keywords to be incorrectly recognized within possessive forms (e.g. `Natalia` in `Natalia's fix`).
* Improves the recognition of keywords with special diacritics in the URL.
* Improves keyword recognition through adding Spanish inverted exclamation and question marks to the rules that determine word boundaries.

#### Other

* Corrects the WP_Filesystem() initialization call to support settings import for non-default FS_METHOD definitions. Props to [ptbello](https://github.com/ptbello).

= 7.9 =

Release date: 2018-07-24

#### Enhancements

* Introduces the collapsible sections to all the tabs in Search Appearance.
* Improves accessibility of the collapsible sections in Search Appearance.

#### Bugfixes

* Fixes a bug where archive settings for post types aren't shown on the search appearance page when the `has_archive` for that post type contains an archive slug. Props to [nesinervink](https://github.com/nesinervink), [schurig](https://github.com/schurig).
* Fixes a bug where a notice ("Notice: Trying to get property of non-object") is given when the `$term-&gt;taxonomy` isn't set before it is used. Props to [bainternet](https://github.com/bainternet).
* Fixes a bug where an uppercased encode URI isn't redirected to the category. Props to [dawnbirth](https://github.com/dawnbirth).
* Fixes a bug where HTML entities were not always decoded in the Snippet Variables.
* Fixes a bug where custom field labels would be separated by spaces in the classic editor, but in Gutenberg they would be separated by underscores instead.
* Fixes a bug where the conversion of `'`, which is PHP's HTML entity for the apostrophy, did not happen.
* Fixes a bug where the same notification is shown multiple times when trashing multiple posts.
* Fixes a bug where a possibly non-existent key would be retrieved when generating the `article:section` OpenGraph tag. Props to [mikeschinkel](https://github.com/mikeschinkel).
* Fixes a bug in the UI that happend when `do_shortcode` was run on category descriptions in the admin list. Additionally, fixes rendering of shortcodes in category descriptions on the frontend.
* Fixes a bug where saved templates in Search Appearance would be saved incorrectly into the database, resulting in them never being loaded when editing a post, page, etc. This meant that the default template would always be used.
* Fixes a bug where the "Tagline" / `%%sitedesc%%` snippet editor variable was not selectable in the Search Appearance settings.
* Fixes a bug where the newsletter signup in the configuration wizard would not work.

#### Other

* Moves some snippet variables to only appear within specific editors. Adds a filter `wpseo_editor_specific_replace_vars` to make this pluggable.
* Adds the white background to the template of media on the Search Appearance page.
* Changes feedback in the keyword density assessment to make it more explicit that synonyms are not taken into consideration when calculating the score.
* Shows a notification with the message that you should check your post type archive settings when these are possibly reset to their defaults in 7.7 or 7.8.

= 7.8 =

Release date: 2018-07-10

#### Enhancements

* Improves the way that the OpenGraph is determined for front pages, especially in the case of static front pages.
* Adds links to relevant articles to all SEO assessments.
* Adds Flesch Reading Ease assessment for French.
* Adds Flesch Reading Ease assessment for Spanish.
* Adds passive voice assessment for Italian.

#### Bugfixes

* Fixes a bug where images from password protected posts could potentially end up in OpenGraph image tags.
* Fixes a bug where very old notifications could not be be dismissed or restored.
* Fixes a bug where the `Insert snippet variable` button alignment was incorrect.
* Fixes a bug where the snippet variables had a different label in the Search Appearance settings compared to the snippet variables when writing a post, pages and taxonomies.
* Fixes a bug where instances of the same keyword with different kinds of apostrophes (e.g., brain’s and brain's) were not recognized as the same. This affects the following assessments: keyword in meta description, keyword in subheading, keyword in first paragraph, keyword in title and keyword in URL.
* Fixes a bug where the custom set breadcrumb title for the WooCommerce Shop page wasn't used.

#### Other

* Adds a reminder message to create a redirect if a user deletes a category or tag.
* Removes a banner spot in the admin.

= 7.7.3 =

Release date: 2018-07-02

#### Bugfixes

* Disables WordPress' automatic conversion of emoji to images on every page where the snippet editor is present. This conversion is not compatible with React or content editable fields and broke the snippet editor.
* Fixes text directionality for the title and description fields in the snippet editor for right-to-left languages.
* Fixes a bug where the snippet title and description values were saved to the database if they did match the post-type template.

= 7.7.2 =

Release date: 2018-06-29

#### Bugfixes

* Fixes a bug where the snippet variables selection is hidden behind the WordPress menu when using a right-to-left language.
* Fixes styling in the snippet preview when using a right-to-left language.
* Fixes a bug where the 'insert snippet variable' button placement was inconsistent.
* Migrates WooCommerce Product archive settings to the Shop page, if present and not already set on the Shop page.

= 7.7.1 =

Release date: 2018-06-27

#### Bugfixes

* Fixes a bug where disabling the `post_format` archive would result in it actually being enabled and vice versa.
* Fixes an issue where all replacement variables were being displayed instead of the recommended ones.

#### Other

* Restores `currentyear` as a snippet variable.

= 7.7 =

Release date: 2018-06-26

#### Enhancements

* Implements the snippet preview in React. This brings an improved user experience regarding the snippet variables, making it easier to use and discover them.
* Implements the improved snippet variables on the search appearance settings pages.
* Adds an inserter to the title and metadescription fields to make it easier to insert a snippet variable.
* Improves the mobile snippet preview to match the Google mobile search results more closely.
* Changes the behavior of the meta description preview when there is no handwritten meta description. We no longer mimic Google by showing a part of your content, but explain what Google does instead.
* Sends the user to the proper control in the customizer when clicking the link in the "You still have the default WordPress tagline [...]" warning message.
* Adds a `wpseo_attachment_redirect_url` filter to allow changing of the target redirection URL for attachments. This may be necessary to restore the redirect to the parent post. Props to [cawa-93](https://github.com/cawa-93).
* Adds a `wpseo_recommended_replace_vars` filter to allow adding or altering the recommended snippet variables.
* Adds support for JSON-LD breadcrumbs. Props to [teolaz](https://github.com/teolaz)
* Improves the lists of French transition words, stopwords, and function words, props to [Laurent-1971](https://github.com/Laurent-1971).
* Improves the assessment that checks the use of subheadings so that it always returns relevant feedback to the user.
* Adds a notification when a post is removed.
* Overhauls the Content Types section under SEO -&gt; Search Appearance by sectioning the post types and allowing users to collapse them. This is especially handy when you have a lot of custom post types.
* Updates the 'snippet variables tab' of the Help Center to have the new names.
* Adds recommended snippet variables for templates depending on the context. The `wpseo_recommended_replace_vars` filter is added, which gives the possibility to add or alter the recommended snippet variables.

#### Bugfixes

* Fixes a bug where a PHP notice would be triggered when the `opcache.restrict_api` directive was enabled.
* Fixes a bug where restricting SEO setting access to network admins only on a multisite, would still allow regular admins to have access to SEO settings.
* Fixes a bug where dismissing notifications on a single site in a multisite environment, would result in the notification being dismissed on all sites.
* Fixes a bug where the attachment URL would redirect to `wp-admin` if the attachment was located on a different Site URL domain.
* Fixes a bug where MySQL would throw a "Duplicate entry 'X'" error into the error log when attempting to upsert a record in the database.
* Fixes a performance problem where the selecting a fallback Open Graph image would collect the filename for all the images in the content. This has been changed to detecting if an image is usable per image and stopping when a usable image is found.
* Fixes a bug where the term title snippet variable would be replaced by 'undefined' instead of an empty string on posts and pages.
* Fixes a bug where PHP notices got triggered on archive pages when `%%pt_single%%` and/or `%%pt_plural%%` are used in a template.
* Fixes a bug where the configured separator wasn't used in the title template fallback that's being used when no title template has been set.

#### Deprecated

* Deprecates the following snippet variables: %%userid%%, %%currenttime%%, %%currentdate%%, %%currentday%%, %%currentmonth%%, %%currentyear%%.

#### Other

* Changes the timing on which the capability filter is run to better time when notifications should be initialized.
* Adds X-Redirect-By header to all redirects, making the origin of redirects much easier to debug.

= 7.6.1 =

Release date: 2018-06-07

#### Bugfixes

* Fixes a bug where a JavaScript error was thrown on the post-edit page when certain plugins are active.
* Fixes a bug where stylesheet definitions would impact form fields of metaboxes on the post-edit pages. The definitions have been contained in a Yoast-selector.

= 7.6 =

Release date: 2018-06-05

#### Enhancements

* Adds Flesch Reading Ease for Russian.
* Adds Catalan transition words.
* Adds a tab to the Help Center on posts, pages, terms and custom post types which explains which template variables can be used in the Snippet Preview.

#### Bugfixes

* Fixes a bug where sequences of symbols which do not contain a single letter or digit were considered as valid keywords.
* Fixes a bug where Flesch Reading Ease translation strings were not fully translated.
* Fixes a bug where numbers-only keywords caused the analysis to fail.
* Fixes a bug where the active keyword in the state wasn't updated whenever changes were made in the keyword field.
* Fixes a bug where replacevars based on custom fields would throw an error due to a missing ID.

#### Other

* Changes the maximum meta description length from 320 to 156 characters.
* Fixes typo in $field_defs parameter description for wpseo_metabox_entries filter.
* Restores the warning for using unsupported replacement variables on the search appearance settings page.

= 7.5.1 =

Release date: 2018-05-16

#### Bugfixes

* Fixes a bug where the auto-generating of the slug did not work as expected due to persisting of the post name too agressively.

= 7.5 =

Release date: 2018-05-15

#### Enhancements

* Adds readability analysis for Russian.
* Improves accessibility.

#### Bugfixes

* Fixes a bug where images with specific aspect ratios where removed from OpenGraph consideration. This was causing unexpected results with Facebook sharing. The aspect ratio check has been removed completely.
* Fixes a bug where sentences ending in multiple sentence marks, exclamation marks or ellipses were treated as multiple sentences.
* Fixes a bug where attempting to get Yoast SEO options in multi-site, would result in wrong values being returned.
* Fixes a bug where the sitemap styling could not be loaded when the Site domain differs from the Admin domain.
* Fixes a bug where the admin bar still used old copy: Dashboard has been renamed to General.

= 7.4.2 =

Release date: 2018-05-03

#### Bugfixes

* Fixes automatic image size detection for OpenGraph images. When an image was used that was too large, we wouldn't output the `og:image` tag. That is now fixed.
* Fixes a bug where portrait images where not allowed for the OpenGraph image.

= 7.4.1 =

Release date: 2018-05-02

#### Bugfixes

* Re-adds `wpseo_opengraph_image_size` filter. This will completely override any automatic size determination our code does. This filter now also applies to all ways an `og:image` can be determined: In the content, as a featured image or as set in our Facebook image setting.
* Fixes an unintended backwards incompatible change which caused "Warning: Illegal string offset ‘url’ in".
* Fixes an unintended change which caused SVGs to be included in consideration for the `og:image` tag. SVG images are not allowed by Facebook, so these should never be used in the `og:image` tag.

= 7.4 =

Release date: 2018-05-01

#### Enhancements

* Adds OpenGraph image dimension-meta tags for more images.
* Excludes images from being used in OpenGraph meta tags, if the image is larger than 2MB.
* Adds caching for images found in a post to reduce load.
* Adds image alt tag to the OpenGraph output, using the meta tag `og:image:alt`.
* Adds the `is_post_type_viewable` WordPress function to improve support for the `wpseo_accessible_post_types` filters.

#### Bugfixes

* Fixes a bug where a non-array value causes a fatal error when `cron_schedules` filter has been executed.
* Fixes a bug where not all database tables were removed when a subsite was deleted in a multisite environment.
* Fixes a bug where deleting multiple posts might cause performance issues. Props to [Moeini](https://github.com/abolfazl-moeini).

#### Other

* Introduces a message, warning about dropping of PHP 5.2 support in an upcoming version.
* Alters the configuration service text in the Configuration Wizard when a user is already running Yoast SEO Premium. Previously the text contained a reference to getting a bundled copy of Premium, even if the user was already running Premium.

= 7.3 =

Release date: 2018-04-17

#### Enhancements

* Removes the `intl` polyfill and shows a message on browsers that don't support this feature.
* Adds Baidu Webmaster Tools verification support.
* Adds import functionality for [Premium SEO Pack](https://wordpress.org/plugins/premium-seo-pack/).
* Adds import functionality for [Smartcrawl SEO](https://wordpress.org/plugins/smartcrawl-seo/).
* Adds import functionality for [Squirrly SEO](https://wordpress.org/plugins/squirrly-seo/).
* Adds import functionality for [Platinum SEO Pack](https://wordpress.org/plugins/platinum-seo-pack/).
* Adds import functionality for [SEO Framework](https://wordpress.org/plugins/autodescription/).
* Adds import functionality for [Greg's High Performance SEO](https://wordpress.org/plugins/gregs-high-performance-seo/).
* Adds import functionality for [WP Meta SEO](https://wordpress.org/plugins/wp-meta-seo/).
* Improves the social data import for the wpSEO.de plugin.
* Removes the debug data from the admin pages, which were only showing when WordPress is in DEBUG mode.
* Applies Select2 to all select boxes on breadcrumbs page.
* Attempts to reset `opcode` cache during the upgrade routine.
* Changes the wording for the Ryte indexability check on the features tab.

#### Bugfixes

* Prevents hard casting to array in the `WPSEO_Link_Columnsadd_post_columns` method signature.
* Fixes a bug where an error is thrown when MySQL has the `sql-mode` set to `ANSI_QUOTES`.
* Fixes a bug where the pagination overlaps the cornerstone information message, on post overview pages in combination with low resolutions.
* Fixed a bug where the keyword filter doesn't work on the post overview page.
* Removes HTML entities from the HTML comment that appears for admins when there's no meta description on a post or page.
* Changes JSON+LD organization output to always point to `#organization` on the homepage instead of the current page.
* Fixes a bug where non-public taxonomies were shown in the breadcrumbs.

#### Other

* Minor internationalization improvements.
* Security hardening.

= 7.2 =

Release date: 2018-04-03

#### Enhancements

* Updates all Help Center videos with new recordings.
* Adds functionality to import noindex, nofollow and OpenGraph tags from All in One SEO Pack.
* Improves consistency of capitalization in settings and tabs.
* Improves the traffic light icon accessibility.
* Changes the words 'post type' into 'content type' throughout the plugin.

#### Bugfixes

* Fixes a bug where the Facebook app-id could no longer be set in the Social settings.
* Fixes a bug where existing Yoast SEO data could be overwritten when importing data from All in One SEO Pack.
* Fixes a bug where the Ryte notification is not removed when disabling the Ryte feature.
* Fixes a bug where setting a page to `noindex` through the `wpseo_robots` filter did not properly remove the `canonical` element.
* Fixes a bug where attachments connected to password-protected parents are included in the sitemaps. Props [Scott Carter](https://gobarrelroll.com).
* Fixes alignment of the `Go Premium` notice.

= 7.1 =

Release date: 2018-03-20

#### Enhancements

* Adds a filter to mark Spanish sentences as non-passive when certain exception words occur between the auxiliary and the participle. The list of exception words includes all forms of the copula 'estar'.
* Adds transition words assessment for Portuguese, props [amesdigital](https://github.com/amesdigital).
* Increases the height of the meta description box so it matches the maximum amount of characters without needing a scrollbar.
* Detects when you need to import old SEO plugin data and allows you to import it on the import plugins page. After importing you can check whether the import was completed successfully and then delete the data.
* Changes the formatting of text in the dashboard widget to improve the reading experience.
* Adds an extra argument to `wpseo_replacements` filter. This makes it possible to access post, taxonomy or term instances when applying the filter.
* Adds support for a new template variable `%%archive_title%%`.
* Remove all Facebook Insights functionality as it's no longer supported.

#### Bugfixes

* Fixes a bug that broke a filter which marks Spanish and French sentences as non-passive when certain exception words occur between the auxiliary and the participle.
* Fixes a bug where the `page` and `paged` values could cause errors if they weren't properly handled as integers.
* Fixes a bug where division by zero errors in the passive voice assessment would cause `NaN%` to show up in the feedback.
* Fixes a bug where multiple `rel` arguments prevented correct `nofollow` detection.
* Fixes a bug where enabling the Show blog page in the breadcrumb settings had the inverse effect. Internally renamed `breadcrumbs-blog-remove` to `breadcrumbs-display-blog-page` to fix logic issues.
* Fixes a bug where the rewrite rules weren't removed after stripping the category base. This resulted in an unaccessible page.
* Fixes a bug where adding a `wpseo_sitemap_entries_per_page` was not being used when rendering the sitemaps.
* Fixes a bug where the Yoast logo in the Configuration Wizard was showing the old version.
* Removes the backfill hooks when calling `WPSEO_Optionsget()` to improve performance.

= 7.0.3 =

Release date: 2018-03-12

#### Bugfixes

* Fixes a bug where the option settings that needs to be migrated are backfilled prematurely, resulting in settings not being migrated as expected.
* Fixes a bug where adding a `wpseo_sitemap_entries_per_page` is not being applied as expected.

= 7.0.2 =

Release date: 2018-03-08

#### Bugfixes

* Fixes a bug where a fatal error occurs on a taxonomy edit page when social graphs has been disabled for either Facebook or Twitter.
* Fixes a bug where the breadcrumb path were missing parent entries.
* Fixes a bug where RSS `before` and `after` content settings were being cleaned too aggressively.
* Fixes the problem that other plugins are depending on the options we've removed. This patch adds those options as backfills to make them available again.

= 7.0.1 =

Release date: 2018-03-06

#### Bugfixes

* Fixes a bug where the some settings are not properly migrated after upgrading to 7.0.

= 7.0 =

Release date: 2018-03-06

#### Enhancements

* Interface:

* Introduces an overhaul of the Admin settings to simplify the plugin configuration.
* Introduces a new setting to redirect attachment URLs. Previously, we had an option to redirect attachment URLs to their post parent. This didn't work for attachments that weren't attached to anything. This new setting redirects _all_ attachment URLs to the URL of the original image / media item. This is all explained on the new `Media` tab under `Search Appearance`. This setting is enabled by default for new installations.
* Moves the `Text link counter calculation` to the `Tools` submenu.
* Moves the RSS tab from `Advanced` to `Search Appearance`.
* Removes the option to remove the `replytocom` variable. We now disable this automatically with a filter (`wpseo_remove_reply_to_com`).
* Removes the option to exclude an author from the XML sitemap in favor of a broader option. Instead, we now have an option to set whether this author's archive should be visible in the search results. If you choose not to allow this archive in the search results, it's also excluded from the author sitemap.
* Removes the XML sitemaps settings page in favor of a feature toggle on the Features tab and a question in Titles &amp; Meta's "Do you want to show X in search results?".
* Moves the setting to disable the Advanced Meta Box for authors to the Features Tab. The setting now also defaults to 'On'.
* Expands the content analysis headers by default.

* JSON+LD:

* Shows JSON+LD markup for website and search on the front page.
* Makes sure JSON+LD organization markup properly links to the frontpage.

* Copy:

* Clarifies the copy on the Edit Post page to ask "Allow search engines to show this Post in search results?" instead of having a heading "Meta Robots", which was quite difficult to understand for non-SEO's. Similar changes have been made to the `follow` / `nofollow` setting.
* Introduces the question: "Allow search engines to show this `` in search results?" and bases both the `noindex` and the inclusion in XML sitemaps on this decision.
* Changes the wording in the indexing dropdown menu in the Advanced Tab of the metabox from `Yes (Default for posts)` / `Yes` / `No` to `Default for Posts, currently: Yes` / `Yes` / `No`.
* Renames the Dashboard menu item to General.



#### Other

* Removes the feature that automatically removed stop words from the slug.
* Removes `media` post type from the Configuration Wizard, which brings the question about indexing in line with the rest of the plugin.
* Removes `jQuery UI autocomplete` from the enqueued scripts.
* Adds a filter `wpseo_exclude_from_sitemap_by_post_ids` for controlling which posts are excluded from the sitemap.
* Improves the switch toggle settings for use with assistive technologies.
* Removes code to add a trailing slash in weird permutations of permalink settings. Canonical should solve this properly.
* Removes the functionality to automatically remove blocking XML sitemap files.
* Removes the clean permalinks feature, as it was created before canonical was introduced and is no longer needed.
* Fixes a reference to the `ACF Content Analysis for Yoast SEO` plugin.
* Removes all functions, methods and files that were deprecated since before version 4.0 and were showing a deprecation warning.
* Removes the plugin conflict check for the `Head, Footer and Post Injections`-plugin as it no longer manages OpenGraph tags.
* Migrates the `hideeditbox-` and `hideeditbox-tax-` settings to a saner `display-metabox-pt-` and `display-metabox-tax-` settings.

#### Bugfixes

* Hides the "Save changes" button on option tabs where there is nothing to save.
* Fixes a bug where you would not stay on the same option tab after using the save button in Safari.
* When we set `noindex` on a page, we no longer add a canonical, to prevent confusing search engines.
* Fixes an issue where the categories / tags overview pages were incorrectly showing elements marked as noindex when in reality they weren't set to noindex (and vice versa). This meant that blue bullets were being shown incorrectly.
* Fixes an issue where setting posts and pages to noindex didn't change the overview.

#### Security

* Fixes a security issue where importing of the values of ini files were being parsed for dynamic content.

= 6.3.1 =

Release date: 2018-02-19

#### Bugfixes

* Fixes a bug where a non-existing JavaScript `chunk` file was loaded, causing a console error. This only affected users using a locale different than `en_US`.

= 6.3 =

Release date: 2018-02-13

#### Bugfixes

* Reverts the shortlink in the HTML comment back to the hard link it was before.
* Fixes a bug where the Local SEO for WooCommerce extension was not shown on the licenses page.
* Fixes a bug where the `current_user_can()` function was not called with the post ID as argument.
* Fixes a bug where the auto-generated meta descriptions were not using the new 320 characters limitation.
* Fixes a bug where specific external links were not filtered from the post_type sitemap.
* Fixes a bug where trashed posts were displayed in the bulk editor overview.
* Fixes a bug where old meta values were not deleted during import.
* Fixes a bug where only 10 posts when executing meta robots import from wpSEO.de.
* Clears the sitemap cache when the Site URL is changed.

#### Enhancements

* Adds an importer for the SEO Ultimate plugin SEO data.
* Adds an importer for the SEOpressor plugin SEO data.
* Adds links to explanatory articles on the features tab.
* Adds additional explanation for entries on the features tab.
* Improves Open Graph copy for Facebook and Twitter in the Social settings to better explain what it does.
* Improves Content Analysis and Publish box copy for better translations.
* Applies design changes to the Help Center support tab for Premium.

#### Other

* Removes "meta keywords" from the plugin as this has had no search result value for at least 7 years.
* Removes the "noindex subpages" feature as Google has gotten much better at paginated series, and it's now actually detrimental to use.
* Removes the "Other" tab from the Titles &amp; Metas settings screen, as all options have been moved or removed.
* Security hardening.

= 6.2 =

Release date: 2018-01-23

#### Enhancements

* Allows more strings to be translated.
* Adds the passive voice assessment for French.
* Adds the passive voice assessment for Spanish.
* Simplifies the feedback message for the assessment that checks whether subheadings contain the keyword.

#### Bugfixes

* Security hardening through stricter code checks.
* Reduces the number of times the content analysis is refreshed on page load.
* Fixes a bug where relative URLs were not counted as internal links in the internal link assessment.
* Fixes a bug where Premium users would be shown ads when following a certain path through the SEO menu.
* Fixes a bug where the method of setting the title and meta description templates for the WooCommerce shop page would not work anymore.

= 6.1.1 =

Release date: 2018-01-10

#### Bugfixes

* Fixes a bug where sitemaps could not be generated when there one or more galleries in the content.

= 6.1 =

Release date: 2018-01-09

#### Enhancements

* Allows more strings to be translated.
* Replaces any Yoast domain URLs with shortlink alternatives.

#### Bugfixes

* Fixes a bug where the internal links aren't recognized when the `site_url` is not the same as the `home_url`.
* Fixes a bug where the user locale is not used for the Help Center when it is different from the site locale.
* Removes unsupported PHP 5.2 arguments in an `array_unique` call in the Term image sitemap.
* Removes unsupported PHP 5.3 arguments in a `json_encode` call in the notification functionality.
* Added support for locales without territory (examples: et, fi) - Props [Peeter Marvet](https://github.com/petskratt).
* Added support support for 3-letter language codes (example: rhg) - Props [Peeter Marvet](https://github.com/petskratt).
* Fixes a JavaScript compatibility issue by prefixing the webpack jsonP function with `yoast` - Props [Raitis Sevelis from Visual Composer](https://visualcomposer.io/).

= 6.0 =

Release date: 2017-12-20

#### Enhancements

* Adds support for custom page titles and meta descriptions on the WooCommerce shop page. Props [Caleb Burks](https://github.com/WPprodigy).
* Adds support for custom page social titles and descriptions on the WooCommerce shop page.
* Adds a link to the Google Knowledge Graph article on Yoast.com. Props [Raaj Trambadia](https://github.com/raajtram).
* Adds a link to an article on Yoast.com on why it might be a bad idea to use the same keyword more than once.
* Changed the meta description maximum recommended length from 156 to 320 characters.

#### Bugfixes

* Disables the mark buttons of the content analysis when switched to text view.
* Hides the mark buttons when the WYSIWYG editor is not loaded or the filter `wpseo_enable_assessment_markers` returns false.
* Security hardening through stricter code checks.

= 5.9.3 =

Release date: 2017-12-11

#### Security

* Fixes an issue where a part of the excerpt would be leaked on password protected posts when used as a replacement variable. Such as `%%excerpt%%` and `%%excerpt_only%%`. Props to [Rolands Umbrovskis](https://profiles.wordpress.org/rolandinsh) for reporting this issue to us.

= 5.9.2 =

Release date: 2017-12-11

#### Bugfixes

* Fixes a bug where older browsers couldn't load the content analysis. This applies to Internet Explorer (10 and lower) and Safari (9.1 and lower).
* Fixes a bug where the Yoast Metabox wouldn't be shown for posts set to `noindex`, therefore making it impossible to change it back to `index`, view Readability scores and not being able to optimize a post, before allowing it to be indexed.
* Fixes a bug where translations wouldn't be applied in the Yoast SEO Metabox for SEO and Readability scores.

= 5.9.1 =

Release date: 2017-12-05

#### Bugfixes

* Fixes a bug where the configuration wizard could not be loaded, caused by a missing JavaScript dependency.

= 5.9 =

Release date: 2017-12-05

#### Bugfixes

* Fixes a bug where the title isn't added back to the HTML when the debug marker has been disabled.
* Fixes a bug where multiple help panels showed up when clicking on different help buttons.
* Fixes a bug where the Help Center wouldn't be closed when clicking the Go Premium link.
* Fixes a bug where the cornerstone setting for a post would be lost when quick editing the post.
* Fixes a bug where newly created posts were taken into account for the link count, resulting in MySQL errors. Props to [stodorovic](https://github.com/stodorovic).
* Fixes a bug where Premium plugins were being treated as WordPress.org plugins in the 'suggested plugin' notifications, resulting in download errors.
* Fixes a bug where an empty div was visible when both Content and Readability analysis are disabled.

#### Enhancements

* Shows a notice regarding opening the Onboarding Wizard when the plugin is installed for the first time.
* Makes it easier to unhook the debug code rendered as HTML comment.
* Implements the Reactified content analysis.
* Introduces the `wpseo_add_opengraph_additional_images` filter to allow additional OpenGraph Images to be added at a low priority.
* Changes the Dashboard widget's progress bar height to 24px.
* Makes the 'Next' and 'Back' buttons in the Onboarding Wizard focusable.
* Adds grouping of feedback within the content analysis, in the following categories: 'errors', 'problems', 'needs improvement', 'considerations', and 'good'. Each category can be expanded and collapsed.

= 5.8 =

Release date: 2017-11-15

#### Security

* Fixes an XSS vulnerability in the Google Search Console configuration page, when connected to any profile. Thanks [Dimopoulos Elias](https://twitter.com/dimopouloselias) for discovering and responsibly disclosing this issue.

#### Bugfixes

* Fixes a bug where inactive suggested plugins weren't displaying a notification.
* Fixes a bug where an error would be thrown if a Yoast SEO custom database table was missing.
* Fixes a bug where the layout of the metabox would break if too little content was present. Props to [shane-gray](https://github.com/shane-gray).
* Fixes a bug where the WordPress editor was being displayed for custom, private taxonomies. Props to [stodorovic](https://github.com/stodorovic).
* Fixes a bug where the analysis heading is shown when readability and keyword analysis has been turned off. Props to [daim2k5](https://github.com/daim2k5).
* Fixes a bug where outputting on `the_content` filter calls could result in faulty AJAX requests.

#### Enhancements

* Introduces `wpseo_breadcrumb_single_link_info` filter for modifying breadcrumb data. Props to [slushman](https://github.com/slushman) and [forsvunnet](https://github.com/forsvunnet).
* Introduces `wpseo_redirect_orphan_attachment` action to allow unattached attachment pages to be redirected in tune with the relevant setting. Props to [soulseekah](https://github.com/soulseekah).
* Enhances integration with most role/capability manager plugins using the `members_get_capabilities` filter. Props to [JoryHogeveen](https://github.com/JoryHogeveen).
* Adds a Yoast group to the Members and User Role Editor plugins to easily find the Yoast SEO capabilities. Props to [JoryHogeveen](https://github.com/JoryHogeveen).
* Made link for Premium buy button changeable. Props to [leesto](https://github.com/leesto).
* Removes the max-width on alerts to present a better UI. Props to [timnolte](https://github.com/timnolte).
* Sets default Twitter Card option to 'Summary with large image'. Props to [pattonwebz](https://github.com/pattonwebz).
* Makes the content accessible by adding scroll functionality in the help center tabs.
* Improves the suggested plugins messages and adds installation and activation links when appropriate.
* Makes sure that the `yoast_seo_links` table is accessible before attempting to run a query against it.
* Uses Gutenberg content if it is available.

Maintenance:

* Cleaned up codebase by removing old Knowledge Base Search code.
* Improved the codebase to make it comply with the latest WordPress Coding Standards.

= 5.7.1 =

Release date: 2017-10-25

#### Bugfixes

* Fixes a bug where the message "You are not receiving updates or support!" is shown incorrectly.
* Changes the reference to the correct ACF Content Analysis for Yoast SEO plugin.

#### Enhancements

* Adds a plugin suggestion for WooCommerce SEO when WooCommerce is installed.

= 5.7 =

Release date: 2017-10-24

#### Enhancements

* Adds notifications when we detect certain plugins are installed to suggest our AMP and ACF glue plugins.
* Adds the ability to start the configuration wizard from the admin bar menu.
* Adds better responsive styling for the video tabs in the Help Center.
* Replaces the link to Google AdWords with the https variant, props [Shane Gray](https://github.com/shane-gray).
* Changes to the desired spelling of `plugin` and `setup`, props [Pedro Mendonça](https://github.com/pedro-mendonca).

#### Bugfixes

* Fixes a bug where the text link counter doesn't count links for scheduled posts when they get published.
* Fixes a bug where the internal link count is not updated when a post is removed permanently.

= 5.6.1 =

Release date: 2017-10-13

#### Bugfixes

* Fixes a bug where the SEO Manager role was not being able to save SEO settings.

= 5.6 =

Release date: 2017-10-10

#### Enhancements

* Removes legacy license page and shows the new license page by default.
* Changes references from licenses to subscriptions and sites on the premium submenu page.
* Changes the appearance of the Help Center in line with our design approach.
* Introduces an explanation bar when the `Cornerstone content` filter is active.

#### Bugfixes

* Fixes a bug where Hebrew slugs aren't decoded on display in the bulk editor.
* Fixes a bug where the internal link count is not updated when there are no links to that page or post anymore.
* Fixes the `Cornerstone content` filter to behave consistently with existing WordPress filters.

= 5.5.1 =

Release date: 2017-09-28

#### Bugfixes

* Fixes Snippet preview error when Yoast metabox has been removed.
* Changes
* Change Yoast Blog feed to new endpoint.

= 5.5 =

Release date: 2017-09-26

#### Enhancements

* Updated the Dashboard Widget with a new design.
* Added additional explanations to the Configuration wizard.
* Added `contentinfo` landmark for assistive technologies to the Configuration wizard page.
* Introduces `wpseo_manager` and `wpseo_editor` roles.
* Introduces `wpseo_manage_options` capability to control which users have access to all SEO settings.
* Introduces `wpseo_edit_advanced_metadata` capability to control which users have access to the advanced SEO settings.

#### Bugfixes

* Fixed a bug where certain options (`site_type`, `environment_type` and `has_multiple_authors`) would be reset to their default value whenever one of the feature toggles were changed.
* Ensured that `has_multiple_authors` gets validated.

= 5.4.2 =

Release date: 2017-09-21

#### Bugfixes

* Replace unsupported query `prepare` placeholder `%1$d` with `%d` to fix broken queries. Fixes compatibility issue with WordPress 4.8.2.

= 5.4.1 =

Release date: 2017-09-20

#### Bugfixes

* Replace unsupported query `prepare` placeholder `%1$s` with `%d` to fix broken queries. Fixes compatibility issue with WordPress 4.8.2.

= 5.4 =

Release date: 2017-09-06

#### Enhancements

* Added a hook to disabled the twitter card. (Props: @petenelson)
* Performance
* Replaced the use of `get_posts` and `get_children` by `WP_Query`.

#### Bugfixes

* Archive pages are excluded from the sitemap based on the noindex setting. (Props: @stodorovic)
* Prevent the throwing of an error when `wpseoPostScraperL10n` is not defined.
* Escapes all input when generating links for the RSS feed.
* Apply the `wp_get_attachment_url` filter to Sitemap images.

= 5.3.3 =

Release date: 2017-08-28

#### Bugfixes

* Fixes a bug where table listings were not giving expected content, props [Kyle B. Johnson](https://github.com/kjohnson).

= 5.3.2 =

Release date: 2017-08-23

#### Bugfixes

* Fixes a bug where an invalid license notification could be shown in certain situations.

= 5.3.1 =

Release date: 2017-08-22

#### Bugfixes

* Fixes a bug where "mark as fixed" on the search console page didn't work.
* Fixes a bug where the configuration wizard JavaScript file was too large.

= 5.3 =

Release date: 2017-08-22

#### Enhancements

* Adds missing I18n function call to make a string translatable
* Adds XML schema for image sitemap, props: [stodorovic](https://github.com/stodorovic)
* Adds schema.org meta-data on every page, instead of only on the homepage
* Adds the possibility to filter posts by readability score.
* Exposes tinyMCEHelper as window.YoastSEO.wp._tinyMCEHelper in JavaScript
* Exposes the ReplaceVar class in YoastReplaceVarPlugin as window.YoastReplaceVarPlugin.ReplaceVar in JavaScript

#### Bugfixes

* Adds sanitization for the Twitter Image meta field
* Fixes use of `register_meta` for usage in WordPress 4.6 and higher
* Initialize the providers on hook `after_theme_setup` to make sure custom providers are added properly, props: [stodorovic](https://github.com/stodorovic)
* Changes the label of the "Bad" score to "Needs improvement" while filtering on SEO or readability scores.

= 5.2 =

Release date: 2017-08-08

#### Enhancements

* Added wpseo_pre_adjacent_rel_links filter to bypass built-in rel prev/next functionality.
* Introduces classes to allow collecting data in the Premium plugin.
* Renamed OnPage.org to Ryte.
* Allow WordPress WHIP messages to be dismissed for a period of 4 weeks.
* Adds a filter for word combinations that consist of a single one-character word.
* Adds aria-current to the onboarding wizard active step.

#### Bugfixes

* Removes JQMIGRATE JavaScript warnings.

= 5.1 =

Release date: 2017-07-25

#### Enhancements

* Adds the post-type and taxonomy identifiers on the titles and metas settings tab.
* Adds support for importing of Jetpack SEO data.
* Improves the readability feature for Dutch, English, French, German, Italian and Spanish.
* Adds a WordPress SEO Premium motivation box on Yoast SEO settings pages.
* Adds a WordPress SEO Premium motivation on the social tabs.
* Adds support for third party sitemaps providers to be registered and used.
* Changes the column titles in the taxonomy list table to icons.
* Adds a subheader on the notification dashboard to clarify problems and issues which are muted.
* Improves avatars on the credit page, props [Mike DeHart](https://github.com/mikedehart)

#### Bugfixes

* Fixes a bug where `remove_meta_if_default` and `dont_save_meta_if_default` don't return the given input value as default.
* Fixes a performance issue related to calculating text link counts when saving a post.
* Fixes a typo in the readme.txt, props [Raymond Rutjes](https://github.com/rayrutjes)

= 5.0.2 =

Release date: 2017-07-13

* Only load babel polyfill if it hasn't been loaded by another plugin yet.
* Adds a feature toggle to disable the link counter tool &amp; link columns.
* Fixes a compatibility issue with WordPress 4.6.
* Fixes an issue where the link columns would disappear after quick-editing a post.

= 5.0.1 =

Release date: 2017-07-06

* Fixes a fatal error that could occur when trying to save a post that has ``-tags with invalid URLs in it.

= 5.0 =

Release date: 2017-07-06

#### Bugfixes

* Fixes a bug where images via `https` were not working, props [Jannik Zschiesche](https://github.com/apfelbox).
* Fixes a bug where the whip notification can be shown multiple times.

#### Enhancements

* Introduces a module that counts links in the content.
* Adds Flesch Reading for Italian.
* Changes 'page title' to 'seo title' in the snippet preview.
* Changes recommended maximum sentence length for Italian from 20 to 25 words, based on more in-depth research.
* Implements the extracted version of the Algolia Search which is now present in `yoast-components`.
* Adds a banner for the structured data course.

### Under the hood

* Introduces a database table to keep track of the linking structure. If the table cannot be created, a notification will be shown.
* When there are posts or pages to reindex, a notice will be shown.

= 4.9 =

Release date: 2017-06-07

#### Bugfixes

* Fixes a bug where there were certain assessments missing when switching to cornerstone content.
* Fixes a bug where the configuration wizard button was visible for users who didn't have enough rights to access the configuration wizard.
* Fixes a bug where the column `ID` was ambiguous, causing an SQL error.
* Fixes a bug where the category URL in the sitemap was encoded twice.
* Fixes a bug where an old upgrade notice is not removed.

#### Enhancements

* Removes the noodp advanced robots meta value as it is no longer used.
* Loads the translations only when the configuration wizard endpoint is called, instead of every time `rest_api_init` is called.

= 4.8 =

Release date: 2017-05-23

#### Bugfixes

* Fixes a bug where the tabs in the social and advanced metabox section are gone when keyword analysis has been disabled.

#### Enhancements

* Optimizes the way the cornerstone flag is saved.
* Analyzes the content using cornerstone assessors when a post or page is cornerstone content.

= 4.7.1 =

Release date: 2017-05-09

#### Bugfixes

* Fixes a bug where the analysis wouldn't work on Internet Explorer.

= 4.7 =

Release date: 2017-05-02

#### Enhancements

* Adds transition words for Italian.
* Adds a new check in the analysis for the presence of at least one internal link.

#### Bugfixes

* Fixes a bug where the `_yst_is_cornerstone` meta value was not prefixed, causing some themes/plugins to output this meta value.
* Fixes a bug where style and script elements were parsed for the prominent words.
* Fixes a bug where the cursor pointer was in front of the metabox.

= 4.6 =

Release date: 2017-04-11

#### Enhancements

* Improves a language string, props [Sören Wrede](https://github.com/Soean).
* Improves the configuration wizard with clear information about the configuration.
* Adds the ability to mark posts as cornerstone content.

#### Bugfixes

* Fixes an issue in combination with WooCommerce 3.0 where the plugins would load incompatible select2 versions.

= 4.5 =

Release date: 2017-03-21

* Additions
* Adds a message about the PHP version for WordPress installations that run on PHP 5.2. The warning also has pointers on how to address this situation. [We have an article about why we are doing this on yoast.com](https://yoa.st/x6).

#### Bugfixes

* Adds a check for the breadcrumbs-home option to prevent a blank entry being added to the crumbs array, props [codemonkeynorth](https://github.com/codemonkeynorth)

#### Enhancements

* Throws a warning in the admin for the RS Head Cleaner plugin, because the plugin cloaks.
* Improves copy about Yoast SEO Premium benefits.
* Adds link to our knowledge base article about connecting your website to Google Search Console.

= 4.4 =

Release date: 2017-02-28

#### Bugfixes

* Fixes a bug where a `span` tag wasn't closed correctly, props [lubobill1990](https://github.com/lubobill1990).
* Fixes a bug where there were deprecation warnings shown when an existing author was being updated.
* Fixes a bug where the user received an 'insufficient rights' error when the advanced settings are disabled, but an advanced page is visited.

#### Enhancements
* Moves the options to disable keyword and content analysis from the general tab to the features tab.
* Improves styling of tables so they are viewable on mobile.
* Changes the links into shortlinks for the extensions page, helpcenter, facebook settings and premium popup.

= 4.3 =

Release date: 2017-02-14

#### Bugfixes

* Fixes the width of the readability column on post overview, props [rikayla](https://github.com/rikayla).

#### Enhancements


* Improves feedback text for subheading too long assessment.

= 4.2.1 =

Release date: 2017-02-02

#### Bugfixes

* Fixes a fatal error "Call to undefined method yoast_i18nset_api_url()". This error occurred with certain other plugins that also include the i18n-module.
* Fixes a bug where some strings wouldn't be translated.
* Makes the Yoast SEO menu top and first item visible in the responsive view.
* Fixes a bug where the yoast icon on the credits page wasn't displayed properly in some views.

#### Enhancements

* Improves the styling of the notification center.
* Improves the styling of the title separators.

= 4.2 =

Release date: 2017-01-31

#### Bugfixes

* Fixes a bug where the sitemaps were being invalidated too often.
* Fixes a bug where the 'meta keywords' meta box section stayed visible when switching to the readability tab.

#### Enhancements
* Moves translations from translate.yoast.com to translate.wordpress.org.
* Improves the styling of the featured image warning and sends an audible message for screen readers.
* Makes the left sidebar of the meta box responsive.
* Removes unused heading from the meta box.
* Improves responsiveness for settings pages.

= 4.1 =

Release date: 2017-01-17

#### Bugfixes

* Fixes a glitch in the notification center where a notification would be shown twice.
* Fixes a bug where the realtime analysis didn't work on term pages.
* Fixes a bug where the sitemap invalidation uses an expensive query to clean up old validators.

#### Enhancements
* Adds a mobile snippet preview.
* Adds a function that allows retrieving an option only when it's been autoloaded.
* Removes review banner from mobile, props [abhinavkumar940](https://github.com/abhinavkumar940).
* Adds labels to redirect checkboxes in the search console to improve accessibility.

= 4.0.2 =

Release date: 2016-12-20

#### Bugfixes

* Fixes a bug where shortcodes would be kept in the content that would be analyzed, which would result in incorrect results.
* Fixes a bug where the user language would be used to analyze the content instead of the site language.

= 4.0 =

Release date: 2016-12-13

#### Enhancements
* License manager: Add a get_extension_url method to Yoast_Product to retrieve the URL where people can extend/upgrade their license.
* License manager: Add a set_extension_url method to Yoast_Product to set the URL where people can extend/upgrade their license.
* Updates the credits page.
* Improves plugin naming in translations.
* Improves translations by making texts more consistent.
* Displays the translations in the language chosen by the user in stead of using only the site language.
* Improves the styling of the banners.
* Adds passive voice for German.
* Adds more transition words for French.
* Improves feedback strings for the meta description length assessment.
* Improves matching of the keyword in the first paragraph.
* Improves the snippet preview to match the styling of googles snippet.

#### Bugfixes

* Fixes a compatibility bug with the onboarding wizard and Polylang, and possibly more plugins that prevented the configuration wizard from working properly.
* Fixes a bug where post format archives showed up in sitemap when disabled.
* Fixes a bug where an old update notice would not be removed.
* Fixes a bug where keywords with periods where not highlighted in the snippet.
* Fixes a bug where the title of the metabox wasn't displayed correctly.

= 3.9 =

Release date: 2016-11-29

#### Enhancements
* Updates the banners on the admin pages.
* Improves accessibility by moving the Google Search Console reload button from the header.
* Allow for other plugins and themes to more easily add html namespaces through the new wpseo_html_namespaces filter.
* Prevent conflicts with other plugins/themes which also add html namespaces.

#### Bugfixes

* Adds a check to prevent a "Cannot read property 'body' of undefined" error with tinyMCE that occurred with Visual Composer and some themes.
* Fixes a bug that prevented bulk actions to work in the Google Search Console.
* Fixed incorrect timezone for zero offset case (Atlantic/Azores instead of UTC).

= 3.8 =

Release date: 2016-11-08

#### Enhancements
* Makes tooltips on tabs icons accessible.
* Adds check to prevent sitemap from having empty image entries.
* Improves screenreader text for the readability tab.
* Adds a toggle for author and date archives.
* Adds several improvements for readability and consistent styling.

#### Bugfixes

* Fixes a bug where the category picker would become slow with 1000+ categories, props Ron Willemse
* Fixes a bug with VoiceOver on the readability and keyword tabs.

= 3.7.1 =

Release date: 2016-10-20

#### Bugfixes

* Fixes a bug where the configuration wizard couldn't go to the next step if PUT requests were disabled on the server.

= 3.7 =

Release date: 2016-10-11

#### Enhancements
* Includes a few design improvements in the analysis section of the metabox. Design is now more consistent.
* Makes sure author archives are disabled when a user confirms his site is single-author.
* The configuration wizard is now called "configuration wizard" consistently throughout the plugin.
* Makes sure the help center is now included on all Yoast SEO pages.
* Added a notification asking users to rate Yoast SEO on WordPress.org.

#### Bugfixes

* Fixes a bug where the metabox was taking up too much space on small screens.
* Fixes a bug where the marking for consecutive sentences beginning with the same word was off by one.
* Fixes a bug where the Google Search Console integration wasn't working well on multisite.
* Fixes a bug where the newsletter signup always did a http request, causing mixed content errors on https sites.

= 3.6.1 =

Release date: 2016-10-03

#### Bugfixes

* Fixes a bug where the admin bar would still show advanced settings when the advanced settings were disabled.

= 3.6 =

Release date: 2016-09-27

#### Enhancements
* Introduces the installation wizard that enables an easy way of setting up Yoast SEO. The installation wizard enables you to:
* Newsletter signup.
* Specify the environment in which a site is running.
* Specify the type of a site.
* Specify a company or person for the metadata used in Google's Knowledge Graph.
* Specify social profiles.
* Specify post type visibility.
* Specify if you have multiple authors.
* Setup Google Search Console.
* Setup the title settings.
* The installation wizard replaces the tour.
* Adds a notification to the Yoast notification center to start the onboarding wizard.
* Adds a button on the general settings page to start the onboarding wizard.
* Adds a premium tab to the metabox.
* Introduces a feature toggles tab on the Yoast SEO dashboard where users can enable/disable certain features.
* New: Enable/disable the advanced settings pages.
* New: Enable/disable the Yoast SEO admin bar menu. Added after receiving feedback from multiple users who wanted this option.
* Moved: Enable/disable The OnPage.org integration.
* Removes the tour. With the help center available on every Yoast SEO page or section and the new installation wizard, there was no real usecase for the tour anymore.

#### Bugfixes

* Fixes sorting the table in sitemaps.
* Fixes a bug where keywords with a $ where not recognized.

= 3.5 =

Release date: 2016-09-07

#### Enhancements

* Adds Flesch Reading tests for Dutch and German.
* Added info about author links in theme to disable setting on archives settings page.
* Explicitly checks for public post type status when creating sitemap.
* Removes frequency and priority from sitemap, see release post for clarification.
* Improves sitemap "blocking files" notification.
* Improves sitemap generation for posts when dealing with a large number of posts.
* Improves reliability in some PHP configurations.
* Improves styling for notices below tabs.
* Adds @id fields to JSON LD output.
* Adds table headings and labels to the bulk editor.
* Improves the accessibility of the bulk editor.
* Prevented loading the network admin when not network active.
* Don't show keyword filter in post list when keyword analysis is disabled.
* Improves message for settings import.
* Adds translations for notification counts.
* Makes upload image buttons translatable.
* Improves alignment of form fields.
* Adds descriptions for breadcrumb and canonicals on category pages.
* Improves accessibility on plugin conflict notification links.

#### Bugfixes

* Fixes a bug where a new post with focus keyword would show up as a post without a keyword on the dashboard.
* Fixes a bug that would break rich term descriptions with large images.
* Fixes cache check in dashboard widget, which could cause unnecessary queries.
* No longer load toolbar styles when toolbar is disabled.
* Fixes a bug to prevent "cannot modify headers" notice on export.
* Fixes a bug to improve passive voice recognition.
* Fixes a bug to improve sentence detection.
* Fixes a bug that prevented the markings from working correctly.
* Fixes a bug where select2 would generate a 404 on a non-supported language.
* Fixes a bug where HTML attributes could be translated.
* Fixes a bug where the `og:image` tag would be omitted.
* Fixes a bug for canonicals for search pages with empty search queries.

= 3.4.2 =

Release date: 2016-08-08

#### Bugfixes

* Fixes a bug where apostrophes would be stripped from the focus keyword.

= 3.4.1 =

Release date: 2016-08-02

#### Bugfixes

* Fixes a stored XSS issue in the Yoast SEO metabox. Thanks [Hammad Shamsi](https://twitter.com/hammadshamsii) for reporting and responsibly disclosing this issue.

= 3.4 =

Release date: 2016-07-19

#### Enhancements
* Adds readability checks for consecutive sentences beginning with the same word for the following languages:
* English, German, French, Spanish.
* Adds transition words check for German, French and Spanish.
* Adds transliterations for the following languages:
* Breton, Chamorro, Corsican, Kashubian, Welsh, Ewe
* Estonian, Basque, Fulah, Fijian, Arpitan, Friulian
* Frisian, Irish, Scottish Gaelic, Galician, Guarani
* Swiss German, Haitian Creole, Hawaiian, Croatian
* Georgian, Greenlandic, Kinyarwanda, Luxembourgish
* Limburgish, Lingala, Lithuanian, Malagasy, Macedonian
* Maori, Mirandese, Occitan, Oromo, Portuguese, Romansh Vallader
* Aromanian, Romanian, Slovak, Slovenian, Albanian
* Klingon (in Latin characters, not KLI PlqaD script yet)
* Hungarian, Sardinian, Silesian, Tahitian, Venetian, Walloon
* Improves the Russian transliteration.
* Improves the feedback strings of content checks.
* Adds a setting and a user option to disable the SEO analysis.
* Adds the readability score to the post and term overview.
* Disables the analysis marker buttons when switching from visual to text view in the editor.
* Accessibility enhancements:
* Improves the headings in the dashboard widget.
* Improves the headings hierarchy on the following pages:
* titles and metas
* user profile
* advanced settings
* social settings
* XML sitemap
* general settings
* Improves the headings hierarchy for dashboard alerts.
* Improves the debug information headings.
* Adds a legend for the title seperator on the titles and metas page.
* Improves the intro text of the social tabs.
* Improves consistency of buttons using WordPress styles.
* Adds a background to the YoastSEO issue counter to improve readability.
* Improves the focus style for the dismiss and restore buttons.
* Improves the redirect attachment warnings style by using the native WordPress notices style.
* Improves the links on the credit screen.
* Improves the release video iframe by adding a title.
* Improves the knowledge base results by making them focusable and operable with a keyboard.
* Improves the admin bar menu items by making them focusable and operable with a keyboard.
* Adds labels to the buttons of the knowledge base search for use with a screen reader.
* Adds label to the search field in the knowledge base for screen readers.
* Makes the knowledge base search button translatable.
* Improves the semantics of the knowledge base results.
* Improves the alignment of the icons in the metabox tab sections.
* Improve code to be consistent with WordPress standards, props [danielbachhuber](https://github.com/danielbachhuber).

#### Bugfixes

* Fixes a bug where non-ANSI characters would break the sitemap feature.
* Fixes a bug where MS Edge would not display the traffic light image in the help center properly.
* Fixes a bug where the style of the 'open article' button was overwritten and made unreadable.
* Fixes the link of the FAQ that linked to a non-existing page.
* Fixes a typo to make the KB search "Open" link translatable.
* Reintroduces the text length check for taxonomies.
* Fixes a bug where a 404 could be thrown when there was no locale set.
* Fixes a bug where in certain cases a yoastmark would leave traces in the text, these are now removed.
* Fixes a bug where the score bullet wouldn't be shown on the frontend.
* Fixes the generation of permalinks for new posts by ignoring the permalink sample and generating the permalink from the posttitle, props [Robert Korulczyk](https://github.com/rob006).
* Fixes getting the incorrect primary category when getting the permalink, props [pawawat](https://github.com/pawawat).

= 3.3.4 =

Release date: 2016-06-30

* Fixed a bug in the 3.3.3 release that caused the release folder to not have a fix.

= 3.3.3 =

Release date: 2016-06-30

#### Bugfixes

* Fixes a bug where the focus keyword is not shown for posts created using WordPress SEO 2.x.
* Fixes a bug where changing the title in the bulk editor could be used to trigger JavaScript for the current user.

= 3.3.2 =

Release date: 2016-06-21

#### Enhancements
* Removes non-minified files. This makes the download a lot smaller which will result in less cases of an incomplete or failed download.
* Add setting and user option to disable the content analysis; The SEO analysis will still be present.
* Change the overall content analysis bullet to be more lenient in non-English languages. This means it will be easier to get a green bullet for non-English languages.

#### Bugfixes

* Fix issue where the settings export zip file could be read from the uploads folder after doing an export.

= 3.3.1 =

Release date: 2016-06-15

#### Enhancements
* Adds help center to google search console page when not connected to google search console.
* Adds video to the Yoast SEO dashboard to explain it.
* Ships the production version of React instead of the development version.

#### Bugfixes

* Fixes a bug where the primary category wouldn't be in the permalink if `get_permalink` was called outside the loop.
* Fixes a compatibility issue where we set `$` to `jQuery`.
* Fixes a bug with redirects on a subsite in a multisite installation, props [nicholas-eden](https://github.com/nicholas-eden).
* Fixes a bug where invalid HTML would throw a warning.
* Fixes a bug where reading server variables using `filter_input` returns an empty result.
* Fixes a bug where the passive voice and transition words would be shown on non-english language

= 3.3 =

Release date: 2016-06-14

#### Features
* Added a dashboard under the SEO menu item and moved all persistent notifications to this dashboard.
* Added an indicator to the menu and admin bar about pending notifications and SEO problems.
* Splits the analysis into content and keyword analysis.
* Adds a ton of content feedback about the following properties:
* The length of subheadings.
* The length of text following a subheading.
* The length of paragraphs.
* The length of sentences.
* The presence of transition words.
* The presence of the passive voice.
* Adds a marker button for specific properties to mark these in the editor:
* The length of paragraphs.
* The length of sentences.
* The presence of passive voice.
* The presence of transition words.
* The presence of links with the focus keyword as link text.
* Adds slug transliteration for the following languages, this means that we now match with both the non-transliterated keyword and the transliterated keyword:
* Spanish, Polish, German, Nynorsk, Bokmål, Swedish, Finnish,
* Danish, Turkish, Latvian, Icelandic, Faroese, Czech, Russian,
* Esperanto, Afrikaans, Catalan, Asturian, Aragonese, Aymara,
* English, French, Italian, Dutch, Bambara.
* Adds a search box in the help center to search in the [Yoast knowledge base](https://yoast.com/help/).

#### Enhancements
* Adds missing alt tags to banners.
* Adds a 50.000 URL hard limit to the sitemaps, this is what google recommends.
* Moves social tab above settings tab in the metabox.
* Adds live updating to the score indicator in the admin bar on the post edit page.
* Optimize multiple sitemap cache clears by waiting until the end of the pageload to actual clear the cache.
* Improved title separator radio buttons accessibility.
* Removed Alexa verification from the plugin as it no longer works.

#### Bugfixes

* Fixes a bug where a quote inside an attribute in the XML sitemaps would cause to create invalid XML.
* Fixes a bug where using a custom posts table would not result in correct output in the XML sitemaps.
* Fixes an issue where canonical URLs didn't always correctly have a trailing slash, thanks you for your input [MatthewMi11er](https://github.com/MatthewMi11er).
* Fixes a bug where we didn't match a focus keyword correctly if it contained a slash.
* Fixes a bug where the content analysis would be executed too many times when typing in the snippet preview.
* Fixes a bug where the `wpseo_title` filter couldn't change the opengraph and twitter titles, props [Xavi Ivars](https://github.com/xavivars).
* Fixes a bug where the focus keyword wouldn't be saved when saving the post instantly after changing the focus keyword.
* Fixes a bug where retrieving terms in the breadcrumbs wouldn't be cached, props [Jonny Harris](https://github.com/spacedmonkey)
* Fixes a bug where the help center wasn't properly styled in Safari.
* Fixes an XSS issue, props [Hristo Pandjarov](https://twitter.com/pandjarov).
* Removed:
* Removes the ability to sort on the post score column, because the scores aren't meant to be sorted.
* Removes recalculation because there were too many issues with integration missing that can only be added on the actual post edit admin page.
* Removes `json_encode` wrapper, it was only necessary for older WordPress versions.

= 3.2.5 =

Release date: 2016-05-06

#### Bugfixes

* Fixes a bug in the text analysis when there are more images, the alt tags are not analysed as expected.
* Fixes a fatal when the BCMath component has been disabled in the host environment.
* Fixes a fatal in wp-admin when certain plugins which hide the login are activated.
* Fixes a warning in the sitemap index when no post types are shown and a last modified date is being requested.
* Adds missing capability checks in AJAX request responses.

= 3.2.4 =

Release date: 2016-04-28

#### Bugfixes

* Fixes a regression where the post URL would be numerical when no post title was set.
* Fixes an issue that would cause notifications not to be dismissed even though they should be.

= 3.2.3 =

Release date: 2016-04-21

#### Bugfixes

* Fixes a bug where the update notification cannot be dismissed
* Fixes a bug where the notifications can be shown multiple times

= 3.2.2 =

Release date: 2016-04-21

* Bugfix:
* Fixes a bug where the text analysis was broken in certain languages in certain cases.

= 3.2.1 =

Release date: 2016-04-20

* Bugfix:
* Fixes bug where settings of the Advanced tabs "permalinks" and "rss" were no longer saved.

= 3.2 =

Release date: 2016-04-20

#### Features
* Adds an option to disable post format archives.
* Adds template function to retrieve the primary term. The functions are yoast_get_primary_term_id and yoast_get_primary_term.
* Enables primary term for every taxonomy by default.
* Adds a primary category replacement variable: `%%primary_category%%`.
* Adds a Yoast help center to every settings page with a screencast explaining that specific page.
* Introduces new help buttons in place of qtip, which makes these descriptions much more accessible.

#### Enhancements
* Adds pinterest icon to the pinterest settings tab.
* Clarifies the text on the pinterest settings tab.
* Improves searchability of select inputs by using select2.
* Adds filters to customize sitemaps' , props [Mark Walker](https://github.com/mnwalker).
* Uses `wp_register_script` and `wp_register_style` on init so other plugins can customize our assets.
* Changes minimum text length content analysis check for terms to require 150 words instead of 300.
* Removes analyses from the term analysis that weren't applicable to terms.
* Improves code architecture of sitemaps.
* Moves the OnPage.org settings to the webmaster tab.
* Improves performance when importing or migrating posts, thanks [sun](https://github.com/sun).
* Adds caching to empty sitemaps.
* Adds parsing of shortcodes before recalculating all posts.
* Improves detection of static xml sitemaps.
* Makes sure external links in the metabox open in a new window, props [Borja Abad](https://github.com/mines).
* Makes the descriptions on the archives tab of the titles and meta's more clear.
* Removes noydir setting since Yahoo! directory doesn't exist anymore.
* Removes other tab from the import screen, these plugins have all been deprecated.
* Removes all settings to hide specific tags inside the head.
* Improves accessibility of add keyword modal.
* Improves accessibility of metabox.
* Switches all yoa.st links to be HTTPS.
* Removes Google+ specific post and term meta fields since Facebook and Google+ metadata were conflicting.
* Moves the replace vars help docs to the help center module on the titles and meta's settings page.

#### Bugfixes

* Fixes a bug where the breadcrumbs title field was hidden even though the theme supported breadcrumbs.
* Fixes a bug where underscores in like queries weren't correctly escaped, thanks [Konstantin Kovshenin](https://github.com/kovshenin) and [Damian Hodgkiss](https://github.com/damianhodgkiss)
* Fixes a bug where text inside a [caption] shortcode wouldn't be removed correctly in auto generated meta descriptions, props [Kevin Lisota](https://github.com/kevinlisota)
* Fixes a bug where a message to add headings to the text would only be shown if a keyword was set.
* Fixes a bug where a message to add links to the text would only be shown if a keyword was set.
* Fixes compatibility issues with plugins that included mootools or prototypejs.
* Fixes a bug where the 404 page didn't correctly have a noindex and a nofollow set.
* Fixes a bug where internal taxonomies would be shown in the sitemap exlusion settings.
* Fixes a bug in the activation and deactivation where we would execute our code for every network, props [Felix Arntz](https://github.com/felixarntz).
* Fixes a bug where the primary category wasn't taken into account when calling `get_permalink` on the frontend.
* Fixes a compatibility issue with MultilingualPress, props [Thorsten Frommen](https://github.com/tfrommen).
* Fixes compatibility issues with Easing Slider and WooCommerce Variation Swatches and Photos.
* Fixes a bug where a JavaScript template wasn't included when the dependent JavaScript was, props [Darren Ethier](https://github.com/nerrad).
* Fixes a bug where the descriptions for removing the stopwords and the ?replytocom were merged.
* Fixes a bug where the recommended Facebook image dimensions weren't the same as the Facebook documentation.
* Fixes a bug where the dashboard widget wasn't cached correctly, props [Marko Heijnen](https://github.com/markoheijnen)
* Fixes a bug where the sitemaps weren't cached correctly on 32 bit systems.
* Fixes an issue where multi term archives didn't have a noindex set.
* Fixes a bug where we would do an AJAX request on every keystroke in the focus keyword field.
* Fixes a bug where we would check for shortcodes on every keystroke in the content field.
* Fixes a bug where rewrite rules wouldn't be flushed correctly on plugin activation.
* Fixes a bug where the GlotPress banner wouldn't load on HTTPS sites.

= 3.1.2 =

Release date: 2016-03-23

#### Enhancements
* Makes sure the permalink on the frontend also makes use of the primary category if one has been selected.

#### Bugfixes

* Fixes a compatibility issue with the upcoming WordPress 4.5, where the Yoast SEO metabox and columns were no longer shown on taxonomy and term edit pages.
* Fixes a bug where the default category that was shown in the breadcrumbs was no longer the most deeply nested one.
* Fixes a bug where the file editor could be accessed by non admin users. Thanks [Jörn Lund](https://github.com/mcguffin) for the patch!
* Fixes a JS error on the post edit page that was caused when the WP slugeditor wasn't present.
* Fixes an issue where our indexability check would fail on installs with WordFence that have the "block fake Google crawlers" setting enabled.

= 3.1.1 =

Release date: 2016-03-08

#### Bugfixes

* Fixes a bug where part of the Yoast SEO metabox was no longer translated.
* Fixes a bug where the post slug would be overwritten with the post ID in case a post was autosaved and did not have a title yet.

= 3.1 =

Release date: 2016-03-01

#### Features
* Added an interface to select a primary category for a post, which are used in the post's breadcrumbs and have a few other nice SEO advantages.
* Added SEO score column to the taxonomy overviews.

#### Enhancements
* Replaces all checkboxes and radio buttons on settings pages with styled toggles.
* Adds a new interface for the snippet preview which addresses most of the known UX issues:
* To clarify how the snippet preview can be edited, we've added an 'edit' button.
* Many users were looking for the "SEO title" and "Meta description" input fields. Those have been reintroduced and can be edited by clicking the edit button.
* We've gotten rid of the horribly inaccessible contenteditable elements and moved back to labeled input elements.
* The progress indicator for both SEO title and meta description has returned in the form of progress bars underneath the input elements.
* We've made a clear distinction between the snippet preview and the snippet editor and have tried to clearly signify which input fields affect which parts of the snippet preview.
* We've made sure both preview and snippet editor handle "%%" variables well. In the editor we show the variables and in the preview we render them.
* We've made sure templates that are set under "Titles &amp; Metas" are well reflected in the snippet preview and editor. When they are set, they are shown as placeholder text in the input fields.
* The progress bars also take into account templates and "%%" variables, giving clearer indication if anything should still be added to the SEO title or meta description.
* We've reintroduced behavior where a (generated) example meta description is made grey in the snippet preview to indicate that it's not been set.
* Adds og:image:width and og:image:height metatags to ensure an image is properly rendered for a user the first time a page is shared on Facebook.
* Includes a few minor performance improvements for the content analysis.
* Slightly optimizes the way options are handled. We now only fetch the options we need.
* Makes sure SEO scores for taxonomies are also taken into account when recalculating the SEO scores.
* Updated the list of locales supported by Facebook.
* Makes sure the notification to see the latest changes only pops up on major and minor version and is dismissible even if JavaScript is broken.
* Corrected priority of gallery images in Twitter cards.
* Added filters to allow filtering term and post content before it is sent to the recalculation tool for analysis.
* Improved the way sitemaps are invalidated.
* Duplicate content prevention / Crawl budget improvement: We now hide XML sitemaps for internal WP taxonomies like link category, nav menu and post format.
* Removed all functionality related to Yahoo! directory, since it no longer exists...
* Makes sure the post type archive link for the "Post" post type is not shown in the breadcrumbs.
* Temporarily disabled all non-vital notifications until we come up with a more user-friendly way of dealing with them.

#### Bugfixes

* Fixes a bug where the date was no longer shown in the snippet preview even when the option to show it was selected under "Titles &amp; Metas".
* Fixes a reported "property of non-object" notice that occured when no valid screen object was available. Thanks [Chris Jean](https://github.com/chrisbliss18) for the fix.
* Fixes a bug where Google Search Console would display last_crawled and last_received dates in the wrong format.
* Fixes a bug where the `wpseo_canonical` filter could still be overridden by an admin setting. This is no longer the case.
* Fixes shorthand date formats for Open Graph tags.
* Fixes a bug where calls to translate.yoast.com would fail because of issues with HTTPS.
* Fixes a bug where the content analysis would not work properly anymore when switching multiple times between "text" and "visual" in tinyMCE.
* Fixes a bug where the Yoast SEO metabox was no longer loaded on the Media edit page.
* Fixes an "invalid argument warning" in the options. Thanks [Melvin Tercan](https://github.com/melvinmt) for fixing.
* Fixes a bug where we were causing JS errors by hooking to erroneously on AjaxComplete. This solves multiple compatibility issues including the ones with "Advanced Custom Fields".
* Fixes a bug where saving a nav menu item would cause unnecessary pings to search engines, also resulting in timeouts and long load times for saving menu's. Thanks [Ben Constable](https://github.com/BenConstable) for providing a fix.
* Fixes memory issues caused by doing post counts with WP_Query. Thanks [Emre Erkan](https://github.com/karalamalar) for fixing.
* Fixes a bug where sitemap caches were not properly cleared for sites that use external object caching.
* Fixes a bug where stopwords were no longer stripped from the slug that was generated by WordPress.

= 3.0.7 =

Release date: 2015-12-23

#### Enhancements
* Removes email notifications for OnPage.org indexability check. It caused more issues than it solved.
* Adds several UX improvements to the snippet editor, making it more clear it is editable.

= 3.0.6 =

Release date: 2015-12-01

#### Bugfixes

* Fixes the recalculate tool that was broken with the Localized Flesch Reading ease change...

= 3.0.5 =

Release date: 2015-12-01

#### Enhancements
* Made it possible to opt out from the OnPage.org indexability check.
* Contains a few small performance enhancements in the Content Analysis.
* Only includes Flesch Reading ease test when site language is set to English, since it doesn't really add value in other languages yet.

#### Bugfixes

* Fixes a lot of issues with dismissible notices. Thanks [Craig Pearson](https://github.com/craigpearson) for writing the patch!
* Fixes several issues with keyword recognition for keywords which contain punctuation.
* Fixes an issue where keywords containing diacritics were not recognized in alt tags.

= 3.0.4 =

Release date: 2015-11-25

* Enhancement: Made the "Analyze entire site" button have better color contrast and resemble JetPack. Thanks [WPExplorer](https://github.com/wpexplorer) for the contribution.

#### Bugfixes

* Fixes JS errors in combination with Give plugin, CMB2 Framework, ACF layout builder and any other plugin that replaces the editor with something else. Thanks a lot [Daniel Seripap](https://github.com/seripap) for fixing.
* Fixes JavaScript error on post types without 'editor' capability. Thanks [Aaron Hipple](https://github.com/aaronhipple) for the fix and [Zvonko Biškup](https://github.com/codeforest) for testing.
* Fixes a lot of text analysis issues for languages with non-latin scripts, including the "0% keyword density" issues.
* Fixes an issue where html tags were not stripped properly from taxonomy descriptions for custom taxonomies.
* Fixes possible "URI too long" errors when parsing shortcodes in the content before it is analyzed.

= 3.0.3 =

Release date: 2015-11-19

#### Bugfixes

* Fixes a bug where the snippet preview was broken.

= 3.0.2 =

Release date: 2015-11-19

#### Bugfixes

* Fixes a bug where disabling the visual editor caused our content analysis to break.
* Fixes a bug where the content analysis would break on installs that replace tinyMCE with ckEditor. Currently only supports the html editor.
* Fixes a bug where slug changes were not properly synchronized in the snippet preview.
* Fixes a bug where long slugs could be broken by wrongful synchronization with the snippet preview.
* Fixes a bug where digits were not analyzed well in the content, causing focus keywords or keyphrases with digits to no longer be matched.
* Fixes a bug where the url in the snippet preview was not in line with permalink settings. Fixed for permalinks containing the post name.
* Fixes a bug where focus keyphrases of more than two words would not be recognized properly in the content.
* Fixes a bug where the translation files were corrupted causing the translations to no longer work.

#### Enhancements
* Fixes caching problems. We've versioned file names for assets that have changed to circumvent caching strategies that consider preventing regular cache busting a good idea...

= 3.0.1 =

Release date: 2015-11-18

#### Bugfixes

* Fixes a bug where users where getting error notifications about how their site was not indexable when in fact no check had been performed yet.
* Fixes a few broken links to help docs about the OnPage.org integration.
* Fixes an edgecase where the indexability check would go wrong for sites that filter the home url.
* Fixes a bug where the admin email that was sent to report the current indexability status was not rendered as HTML.

= 3.0 =

Release date: 2015-11-18

#### Features
* Adds realtime content analysis to the Yoast SEO metabox for all post types and taxonomies.
* Adds a tool to recalculate all SEO scores using the new client side analysis.
* Adds a content analysis plugin for parsing shortcodes before the content is analyzed. This means the snippet preview will now take the rendered content of shortcodes into account.
* Adds a content analysis plugin for parsing replace vars before the content is analyzed, allowing templates set in the Yoast SEO admin to work everywhere.
* Adds a weekly check if the homepage is indexable (in collaboration with [OnPage.org](https://en.onpage.org/lp/yoast/)).
* Adds possibility to import titles, metas and settings from the WPSEO.de plugin.
* Adds possibility to set Facebook (Opengraph), Twitter and Google+ metadata for taxonomies.

#### Enhancements
* We've completely revised the UX of the Yoast SEO metabox. We've introduced multiple sections which in turn can contain one or more tabs.
* Makes the Yoast SEO metabox on the taxonomy edit page the same as on the post edit page.
* Makes sure the capability for the General Settings menu is also `wpseo_manage_options_capability`.
* Adds a fix to the tour allowing for multiple plugins to use WP pointers at the same time.
* Makes sure all Yoast SEO settings pages are also accessible through the WP admin bar.

#### Bugfixes

* Fixes a bug where the `og:image` would not be set, even when a default image was available.
* Fixes a bug where the links in the sitemap would 'randomly' change from https to http or the other way around (in very rare circumstances).
* Fixes a bug where it was not possible to upload different images for different social media in the post metabox.
* Fixes a bug where users would see the after-update notice, but were not allowed to visit the about page.
* Fixes a bug where we were not properly splitting taxonomy metadata when a shared taxonomy term got split through a Cron job, props [Daniel Homer](https://github.com/danielhomer).
* Other notable changes:
* Adds a JavaScript API for registering data modifications that is quite similar to `add_filter`/`apply_filters` in WordPress. Allows for filtering data before it is analyzed. See [YoastSEO.js](https://github.com/Yoast/YoastSEO.js).

* Adds a JavaScript API for adding content analysis tests, see [YoastSEO.js](https://github.com/Yoast/YoastSEO.js).

* Because we moved the entire content analysis to JavaScript, we had to remove the following PHP filters:
* `wpseo_pre_analysis_post_content`. Alternative: [Modifications API](https://github.com/Yoast/YoastSEO.js).
* `wpseo_metadesc_length`. Functionality removed.
* `wpseo_metadesc_length_reason`. Functionality removed.
* `wpseo_body_length_score`. Alternative: [Content Checks API](https://github.com/Yoast/YoastSEO.js).
* `wpseo_linkdex_results`. Alternative: [Content Checks API](https://github.com/Yoast/YoastSEO.js).
* `wpseo_snippet`. Functionality removed.

= 2.3.5 =

Release date: 2015-09-16

#### Bugfixes

* Fixes the Twitter image metatag that was invalidated after a recent API change by Twitter. Thanks [Andy Piper](https://github.com/andypiper) for notifying us.
* Removes all tests directories from the release. Props [Edward Beckett](https://github.com/EdwardBeckett) for reporting.
* Updated the minimum required version of WordPress to 4.0.

= 2.3.4 =

Release date: 2015-08-06

#### Bugfixes

* Fixes a bug where the focus keyword test in the Yoast SEO metabox was broken as a regression of removing the autocomplete functionality.

= 2.3.3 =

Release date: 2015-08-06

* Removes the autocomplete functionality from the focus keyword field in the Yoast SEO metabox because Google is shutting down its autocomplete API [as of August 10th](http://googlewebmastercentral.blogspot.nl/2015/07/update-on-autocomplete-api.html).

#### Enhancements
* Introduces a dismissible notice encouraging users to connect with Google Search Console.
* Improves the dashboard widget to only show posts which are actually editable by the current user.
* Makes the plugin conflict notices persistent and dismissible. Once dismissed, it will no longer be shown for the specific set of conflicting plugins the notice has been dismissed for.
* Contains a few textual improvements.
* Makes sure the counts are updated correctly and intuitively when marking a Search Console issue as fixed.

#### Bugfixes

* Fixes a bug where current_user_can was called before init, props Claudio Sanches.
* Fixes a bug where the article:publisher metatag was also included on pages that were not of type 'article'.
* Fixes a bug where the link to the list of posts with the same focus keyword was broken for focus keywords containing a space.
* Fixes a bug where a h3 header was being closed with a h2 closing tag.
* Fixes a bug where the Google Search Console issues table was giving errors on installs running on PHP 5.2.
* Fixes a bug where the sitemap caches were no longer being cleared when running Yoast SEO in the upcoming 4.3 release of WordPress.

= 2.3.2 =

Release date: 2015-07-23

#### Bugfixes

* Fixes a bug where non-admin users were no longer able to update their profile with Yoast SEO active.
* Fixes a bug where all labels in the Yoast SEO admin were bold.

= 2.3.1 =

Release date: 2015-07-22

#### Bugfixes

* Makes sure authors and editors cannot submit advanced metadata on a post when the advanced tab in the metabox has been disabled for them. Thanks Peter Allor from IBM for finding and reporting this issue.
* Fixes a bug where upgrading to version 2.3 would occasionally cause WSOD's on both admin and frontend. We were unable to pinpoint the exact conflicting plugins and themes, but we are quite confident it was caused by us using, and others hooking into, WP_Query too early.

= 2.3 =

Release date: 2015-07-21

#### Features
* Adds full integration with Google Search Console (formerly: Google Webmaster Tools). It is now possible to see all errors from Google straight in your WordPress install. If you have [Yoast SEO Premium](https://yoa.st/1yh), you'll even be able to fix those errors by redirecting the broken urls.
* Adds a dashboard widget showing published posts' SEO scores. Thanks [Brandon Hubbard](https://github.com/bhubbard) for the idea!
* Adds a customizer panel for Yoast SEO Breadcrumbs if breadcrumbs are enabled or the active theme has declared theme support for it. Props again to [Brandon Hubbard](https://github.com/bhubbard) for his awesome contribution.

#### Enhancements
* Renames plugin from "WordPress SEO by Yoast" to "Yoast SEO".
* Adds a warning advising to change the tagline, if a site still has the default WordPress tagline "just another WordPress site".
* Changes the default columns visibility for the edit posts overview page. Only the SEO score column is now visible by default.
* Contains several en_US string improvements, including a fix for a typo in the word "typos"... Thanks [Gary Jones](https://github.com/GaryJones) for redacting!
* Adds a filter to allow filtering the content before analysis in the Twitter class, props [Pete Nelson](https://github.com/petenelson).
* Adds a link to our knowledge base on how to retrieve a Facebook admin user ID.

#### Bugfixes

* Fixes a bug where sitemaps for taxonomies with no eligible terms were still included and responded with 404 errors when visited.
* Fixes a bug where breadcrumbs were wrongly nested on archive paginations, props [Filippo Buratti](https://github.com/fburatti).
* Fixes a bug where the wrong separator was used after import/export.
* Fixes a bug where XML Sitemaps query invalidation caused other queries to fail as well.
* Fixes a bug where the wrong placeholder was being used for the search term string in the JSON+LD Search markup.
* Fixes a bug where the link to the newsletter signup in the tour was broken by uncommunicated changes in Mailchimp.
* Fixes a bug where the Edit Files settings page in the network admin was broken, props [Ajay D'Souza](https://github.com/ajaydsouza).
* Fixes a broken link in the advanced tab of the Yoast SEO metabox to the titles and meta's settings.
* Other notable changes:
* Removed the possibility to redirect a post in the advanced tab of the Yoast SEO metabox.
* Moved the option to include a post in sitemap from the advanced tab of the Yoast SEO metabox to the sitemap settings.
* Removed the option to configure sitemap priority in the advanced tab of the Yoast SEO metabox.
* Added multiple checks to prevent plugin compatibility issue between Yoast SEO and old versions of Google Analytics by Yoast.
* Updated the banners with new designs.

= 2.2.1 =

Release date: 2015-06-11

* Makes sure users can close the tour by circumventing possible JavaScript caching issues that might occur.

= 2.2 =

Release date: 2015-06-10

#### Enhancements
* Contains several accessibility improvements, including 'for' attributes for labels and several links to explanatory articles.
* Adds support for creating partial sitemaps with WP CLI, props [Lars Schenk](https://github.com/larsschenk).
* Add Google's mobile friendly test to the SEO toolbar, props [Brandon Hubbard](https://github.com/bhubbard).
* Makes sure slugs are not being stripped if the remaining slug is less than 3 characters, props [andyexeter](https://github.com/andyexeter).
* Shows an activation error when dependencies were not installed properly with composer.
* Added a filter to allow the RSS footer to be dynamically shown/hidden, props [Hugh Lashbrooke](https://github.com/hlashbrooke).
* Added many translator comments to help translators more easily get the context.
* Made sure Open Graph article tags are added separately, following up on the Open Graph specification.
* Adds recommended image sizes per Social network in the social tab of the SEO metabox.
* Removes the tracking functionality.
* Shows a dismissible notice with a link to the about page that is shown after every update. The user is no longer being redirected and only has to dismiss the notice once for all sites (in case of multisite).
* Adds a link to the about page to the general tab of the settings dashboard.
* Makes the tour dismissible on user level.
* Adds Twitter profile to JSON LD output.
* Twitter profile input field now also accepts full url and automatically strips it down to just the username.
* Only adds the JSON LD output to the frontpage, since it's not needed on other pages.
* Makes all Yoast SEO notices dismissible.

#### Bugfixes

* Fixes a bug where the widgets were removed from every XML file. This is now only the case for the sitemaps.
* Fixes a bug where validation errors were shown for the wrong variables in the titles and metas settings.
* Fixes a bug where the SEO toolbar was broken.
* Fixes a few typos, props [Gary Jones](https://github.com/GaryJones).
* Fixes a bug where links in tooltips were not impossible to click.
* Fixes a broken link to the permalinks section of the advanced settings, props [Michael Nordmeyer](https://github.com/michaelnordmeyer).
* Fixes settings import on multisite.
* Fixes a bug where the sitemap could contain datetimes in the wrong timezone.
* Fixes a bug where the wrong Facebook user ID was added to the fb:admins meta tag. Adding FB admin user id is now a manual process.
* Fixed Open Graph and Twitter cards on static posts pages
* Fixes a bug where sitemap cache was not always cleared after saving the Yoast SEO settings.
* Security:
* Fixes a possible XSS vulnerability in the snippet preview. Thanks [Charles Neill](https://twitter.com/ccneill) and [Mazen Gamal](https://twitter.com/mazengamal) for discovering and responsibly disclosing this issue.

= 2.1.1 =

Release date: 2015-04-21

#### Bugfixes

* Fixes a bug where the JSON+LD output was outputted twice when company or person info wasn't set.
* Fixes a compatibility issue with Video SEO and WooCommerce SEO add-ons causing WSOD on the frontend for video's and WooCommerce products.
* Fixes a compatibility issue with BBPress caused by hooking `current_user_can` too early.

= 2.1 =

Release date: 2015-04-20

#### Features
* Added support for [website name JSON+LD markup](https://developers.google.com/structured-data/site-name).

#### Enhancements
* Makes sure Twitter cards are by default enabled since they don't need to be validated anymore by Twitter.
* Removes the Twitter url meta tag, since Twitter no longer uses it.
* Shows a validation error when a user selects a featured image for a post that is smaller than 200x200 pixels.
* Shows a validation error when a user tries to use shortcodes in the titles and meta's settings page that are incompatible with the type of content those titles and meta's are associated with.
* Makes sure no taxonomy metadata is lost with the upcoming 4.2 version of WordPress.
* Upgraded to Facebook Graph API 3.0 for fetching Facebook user ID's straight from Facebook.
* Made the plugin conflict notices more user friendly, explaining better which piece of functionality might be impacted, offering a link to the corresponding settings and a button to deactivate the conflicting plugin.

#### Bugfixes

* Fixes a bug where the sitemaps were no longer being served from WP transient cache.
* Fixes a bug where breadcrumbs weren't nested properly.
* Fixes a possible "headers already sent" error in the sitemaps.
* Fixes a notice for the homepage URL in post type sitemaps.
* Fixes an "undefined index" notice on the sitemaps.
* Fixes an "undefined index" notice in the breadcrumbs.
* Fixes a bug where translations were not loaded when used as MU-plugin.
* Fixes a JS error that was raised when editing post-types without a TinyMCE editor.
* Security:
* Fixes a possible XSS vulnerability. Thanks [Johannes Schmitt](https://github.com/schmittjoh) from [Scrutinizer CI](https://scrutinizer-ci.com/) for discovering and responsibly disclosing this issue.

= 2.0.1 =

Release date: 2015-04-01

#### Bugfixes

* Fixes an issue where (in rare cases) people upgrading to 2.0 got stuck in a redirect loop on their admin.
* Fixes a broken link in the Dutch translation, causing the Pinterest tab on the Social settings page to overflow into the Google+ tab.
* Fixes a small typo on the about page.

= 2.0 =

Release date: 2015-03-26

#### Features
* Simplified and revised Admin menu's:
* Moved all advanced functionality to one "Advanced" submenu page.
* Moved the bulk editor, the export functionality and the file editor to one "Tools" submenu page.
* Improved consistency and usability of settings pages by having them use exactly the same, tab-based, styling.
* Made it easy to output structured data for social profiles, person and company profiles, for use in Google Knowledge Graph.

#### Enhancements
* Makes sure the user is redirected to the last active settings tab after saving.

#### Bugfixes

* Fixes a bug where custom field variables were no longer working in the snippet preview.
* Fixes a bug where the $post global was emptied by our Frontend class, causing conflicts with other plugins.
* Fixes a bug where variables weren't replaced in the og:description meta tag.
* Fixes a bug where the breadcrumbs caused an undefined variable notice.
### Under the hood:
* Contains an incredible amount of code style improvements, making the code cleaner and more readable.
* Makes sure every function in the plugin is documented using PHPDoc by having it checked automatically by the Codesniffer.
* Refactored a lot of legacy code in the admin, mainly with regard to the way output is rendered. Provides for a better separation of concerns, making the code more comprehensible and re-usable.
* Deprecated a large amount of form methods and moved them to the `Yoast_Form` class. Click [here](https://github.com/Yoast/wordpress-seo/blob/add975664d1f160eed262b02327a93bda5488f8b/admin/class-config.php#L172) for the list of deprecated methods.
* Deprecated a large amount of utility functions and moved them to the `WPSEO_Utils` class. Click [here](https://github.com/Yoast/wordpress-seo/blob/add975664d1f160eed262b02327a93bda5488f8b/inc/wpseo-functions.php#L496) for the list of deprecated functions.

= 1.7.4 =

Release date: 2015-03-11

* Security fix: fixed possible CSRF and blind SQL injection vulnerabilities in bulk editor. Added strict sanitation to order_by and order params. Added extra nonce checks on requests sending additional parameters. Minimal capability needed to access the bulk editor is now Editor. Thanks [Ryan Dewhurst](https://github.com/ethicalhack3r) from WPScan for discovering and responsibly disclosing this issue.

= 1.7.3.3 =

Release date: 2015-02-23

#### Bugfixes

* Repair missing dependencies...

= 1.7.3.2 =

Release date: 2015-02-23

#### Bugfixes

* Fixes a bug where the rel="next" and rel="prev" links were broken for all taxonomies.
* Removes an obsolete quote from the html for the seo metabox.

= 1.7.3.1 =

Release date: 2015-02-19

#### Bugfixes

* Fixes a bug where the keyword analysis was broken.
* Fixes a bug where our plugin raised a fatal error in the wpseo_admin bar when the $wpseo_front global was used.

= 1.7.3 =

Release date: 2015-02-17

#### Bugfixes

* Fixes a bug where the translations were corrupted due to an issue with out glotpress grunt task.

= 1.7.2 =

Release date: 2015-02-17

#### Enhancements
* Contains lots of performance optimizations, including removal of unnecessary inclusion and defined checks for every classfile, refactoring of frontend logic, cutting unnecessary inheritance chains et. al.
* Adds Twitter gallery cards.
* Adds Twitter cards for non singular pages (including Homepage).
* Allows archive titles &amp; meta to be set on non public post types that do have a public archive, props [xeeeveee](https://github.com/xeeeveee).
* Huge performance gain for `enrich_defaults()`, props [Koen Van den Wijngaert](https://github.com/vdwijngaert).
* Nextscripts removed from the OG conflict list.
* Added full Composer support, switched to Composer for dependency management and autoloading.

#### Bugfixes

* Fixes a bug where new posts weren't always added to the post sitemap properly in case of multiple sitemaps.
* Fixes a grammatical error in the tutorial.
* Fixes a bug where %%currentyear%% shortcode wasn't parsed well in the meta description.
* Fixes an undefined index notice in the opengraph functionality.
* Fixes a bug where variable placeholders were not always assigned the correct value, props [Andy Sozot](https://github.com/sozot) for reporting and [Juliette](https://github.com/jrfnl) for fixing.
* Fixes a bug with SEO score on servers using international number formats.
* Fixes broken backward compatibility / snippet preview, props [Juliette](https://github.com/jrfnl).
* Fixes a bug where the %%page%% shortcode wasn't properly rendered in the titles and meta's.
* Fixes a bug where custom replacement variables where not properly rendered when using them in multiple fields.
* Fixes at least a large part of the keyword density 0% issues.
* Corrected price on WooCommerce SEO banner.

= 1.7.1 =

Release date: 2014-11-26

* Security fix: fixed possible cross scripting issue with encoded entities in a post title. This could potentially allow an author on your site to execute JavaScript when you visit that posts edit page, allowing them to do rights expansion or otherwise. Thanks to [Joe Hoyle](https://profiles.wordpress.org/joehoyle/) for responsibly disclosing this issue.

= 1.7 =

Release date: 2014-11-18

#### Features
* Adds Twitter inputs to the Social tab.
* Tries to purge Facebook cache when OpenGraph settings are edited.
* Added a new box promoting our translation site for non en_US users.
* Added several new tools (Pinterest Rich Pins, HTML Validation, CSS Validation, Google PageSpeed), props [bhubbard](https://github.com/bhubbard)

#### Enhancements
* Functionality change: when there's a featured image, output only that for both Twitter and FB, ignore other images in post.
* UX change: rework logic for showing networks on Social tab, social network no longer shows on social tabs if not enabled in admin.
* Always output a specific Twitter title and description, as otherwise we can't overwrite them from metabox.

* Check for conflicts with other plugins doing XML sitemaps or OpenGraph.
* Qtip library replaced with Qtip2.
* Merged several similar translation strings, props [@ramiy](https://github.com/ramiy)
* Several RTL improvements, props [@ramiy](https://github.com/ramiy)
* Several Typo fixes, props [@ramiy](https://github.com/ramiy)
* Updated Open Site Explorer Link, props [bhubbard](https://github.com/bhubbard)
* Updated all links to use // instead of https:// and http://, props [bhubbard](https://github.com/bhubbard)
* When importing from AIOSEO, on finding GA settings, advertise Yoast GA plugin.
* Makes sure stopwords are only removed from slug on publication.
* Updated translations.

#### Bugfixes

* Fixes a bug where the wrong image was being displayed in twitter cards.
* Fixes a bug where facebook would display the wrong image.
* Fixes a bug where last modified in sitemap was broken.
* Fixes a bug wher SEO-score heading made the table row jump on hover because there wasn't enough place left for the down arrow.
* Removed a couple of languages that were not up to date.

= 1.6.3 =

Release date: 2014-10-08

#### Bugfixes

* Revert earlier logic change that broke taxonomy sitemaps.

= 1.6.2 =

Release date: 2014-10-08

#### Bugfixes

* Fixed security issue with XSS in bulk editor, props @ryanhellyer.
* Fix bug where URL would show wrongly in snippet preview for static homepage.
* Fix bug where filtering for posts without a focus keyword in the posts overview wouldn't work.
* Fix a bug where code wouldn't be escaped in the bulk editor.

#### Enhancements
* When meta description is present, `og:description` is filled with that on category pages.
* Texturize some pointers, props @nacin.
* Fix typo in tour, props @markjaquith.
* Code optimization in the replace vars functionality, props @dannyvankooten.

= 1.6.1 =

Release date: 2014-09-16

#### Bugfixes

* Remove tags from title and description for snippet preview.
* Fix several notices.
* Improve escaping of values in the bulk editor before saving.

#### Enhancements
* New admin icon using SVG, which uses proper color.
* Introduced a filter for the XML Sitemap base URL, `wpseo_sitemaps_base_url`
* Introduced a filter for the JSON+LD output: `wpseo_json_ld_search_output`
* For developers: the [GitHub version](https://github.com/Yoast/wordpress-seo) now contains a full Grunt implementation for many actions.

= 1.6 =

Release date: 2014-09-09

This update removes more code than it adds, because Google stopped support for rel=author. It adds the new json+ld code for search in sitelinks though, so could have some cool results!

#### Bugfixes

* Removed leftover code for the deleted HTML sitemap functionality.
* Fix [a bug](https://github.com/Yoast/wordpress-seo/pull/1520) where the wrong `$post` info would be used for the metabox, props [mgmartel](https://github.com/mgmartel).
* Fix the way we [replace whitespace](https://github.com/Yoast/wordpress-seo/pull/1542) to be more compatible with different encoding, props [Jrf](http://profiles.wordpress.org/jrf).

#### Enhancements

* Implement new [sitelinks search box json+ld code](https://developers.google.com/webmasters/richsnippets/sitelinkssearch). Enabled by default, to disable use the new `disable_wpseo_json_ld_search` filter. To change the URL being put out use the `wpseo_json_ld_search_url` filter.
* Improved the onboarding tour to be more in line with the current status of the plugin.
* Other:
* Removed all code to do with `rel=author` as Google has stopped that "experiment", see [this blog post](https://yoa.st/1yj) for more info.
* i18n
* Updated da_DK, fa_IR, fr_FR, hr, hu_HU, nl_NL, pt_BR and tr_RK

= 1.5.6 =

Release date: 2014-08-26

#### Bugfixes

* Fixed a dot without explanation on the page analysis tab.
* Fix save all feature bug in Bulk Editor as reported (and fixed) by [vdwijngaert](https://github.com/vdwijngaert) [here](https://github.com/Yoast/wordpress-seo/issues/1485).
* Fix bug where meta description based on a template wouldn't show up on author archive pages.
* Fix bug where shortlink HTTP header wouldn't be removed when checking the remove shortlink function as [reported here](https://github.com/Yoast/wordpress-seo/issues/1397).
* Fix a bug where force title setting would be reset on upgrade / update.
* Fix warning being thrown in breadcrumbs code.

#### Enhancements

* Removing sitemap transients when updating the plugin, to make sure XML sitemaps always use latest code.
* Styling of metaboxes is more in line with WordPress core.
* Add new `%%user_description%%` replacement tag.
* Add option to remove users with zero posts from the XML sitemap.
* Move SEO data on term edit pages to lower on the page, to not interfere with themes.
* Code: use WP time constants as introduced in WP 3.5.
* Other:
* Removing html-sitemap shortcode, it'll reappear in WordPress SEO Premium when it actually works.

= 1.5.5.3 =

Release date: 2014-08-14

#### Bugfixes

* Prevent dying on edit post page for new posts / pages without focus keyword.
* Fix replacement of `%%excerpt%%` in snippet preview.

= 1.5.5.2 =

Release date: 2014-08-14

#### Bugfixes

* Fix wrong SEO Analysis value icon, regression from 1.5.5.1

#### Enhancements

* Add role specific removal from XML Author sitemap
* Add option to exclude user from XML Author sitemap on user profile page

= 1.5.5.1 =

Release date: 2014-08-14

#### Bugfixes

* Fixed a potential error with `$canonical` not being a string after being filtered.
* Fixed more bugs with first paragraph keyword detection.
* Fixed bug in saving new opengraph title and images variables in the social settings.
* Fixed bug where SEO score incorrectly reported as 'Bad' when no focus keyword set, props [smerriman](https://github.com/smerriman) for finding, props [Jrf](http://profiles.wordpress.org/jrf) for the fix.
* Override `woo_title()` output harder than before to remove need for force rewrite with WooThemes themes.

#### Enhancements

* Replace `%%parent_title%%` variable client side through JS.
* i18n
* updated ar, cs_CZ, fr_FR, hr, pl_PL, pt_BR and ru_RU
* new .pot file based off of the 1.5.5 version

= 1.5.5 =

Release date: 2014-08-12

#### Bugfixes

* WP Shortlinks weren't always removed when user did choose to remove them as reported in [issue #1397](https://github.com/Yoast/wordpress-seo/issues/1397), props [Firebird75](https://github.com/Firebird75).
* Fixed the way we prevent Jetpack from outputting OpenGraph tags. Props [jeherve](https://github.com/jeherve).
* Symlinking the plugin should now work. Props [crewstyle](https://github.com/crewstyle) and [dannyvankooten](https://github.com/dannyvankooten).
* Fix warnings on new site creation multisite as reported in [issue #1368](https://github.com/Yoast/wordpress-seo/issues/1368), props [jrfnl](https://github.com/jrfnl) and [jennybeaumont](https://github.com/jennybeaumont).
* Fixed redirect loop which occurred on multi-word search or when search query contained special characters and the 'redirect ugly URL's' option was on, as reported by [inventurblogger](https://github.com/inventurblogger) in [issue #1340](https://github.com/Yoast/wordpress-seo/issues/1340).
* Fixed double separators in snippet preview as reported by [GermanKiwi](https://github.com/GermanKiwi) in [issue #1321](https://github.com/Yoast/wordpress-seo/issues/1321), props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed slashes in title in snippet preview as reported by [fittedwebdesign](https://github.com/fittedwebdesign) in [issue #1333](https://github.com/Yoast/wordpress-seo/issues/1333), props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed re-introduced js compatibility issue with Soliloquy slider as reported by [ajsonnick](https://github.com/ajsonnick) in [issue #1343](https://github.com/Yoast/wordpress-seo/issues/1343), props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed a bug where we could do a query in XML Sitemaps even when there were no posts to query for.
* If the sitemap is empty, add the homepage URL to make sure it doesn't throw errors in GWT.
* Change how we set 404's for non existing sitemap files, as reported in [#1383](https://github.com/Yoast/wordpress-seo/issues/1383) props Dinglebat.
* Fix issues with conflicting expectations being plugins/theme of the user meta twitter field - url vs twitter id, props [Jrf](http://profiles.wordpress.org/jrf).
* Fix how the first paragraph test for the keyword is done after a solid bug report by [Matt Lowe](https://github.com/squelchdesign).
* Fix how we're handling protocol relative image URLs in the XML sitemap.
* Fix page analysis slug test for keywords with special characters.
* Properly set "No score" result for posts that have no focus keyword.

#### Enhancements

* Drastically improved performance of snippet preview rendering.
* Added Facebook / OpenGraph title input and Google+ title input and image upload field to Social tab.
* Added Facebook / OpenGraph title input for the homepage on SEO -&gt; Social settings page.
* Changed Facebook / OpenGraph default image and homepage image input fields to use the media uploader.
* Added a new title separator feature on the Titles admin page.
* Merged the bulk editor pages for titles and descriptions into one menu item "bulk editor".
* Added `noimageindex` option to advanced meta robots options.
* Bulk editor rights are no longer added for contributors, only for editors and up.
* If an archives meta description template has `%%page` variables, show it on page 2 and onwards of archives too.
* Add a confirm dialog when resetting setting to default.
* Add sorting by publication date in bulk editor as [requested by krogsgard here](https://github.com/Yoast/wordpress-seo/issues/1269).
* Other:
* Remove references to deprecated Video Manual plugin.

= 1.5.4.2 =

Release date: 2014-07-16

#### Bugfixes

* Fixed several notices for undefined variables.
* Properly trim meta description to its desired size again, regression caused in 1.5.4.
* Fix empty last modified date for term sitemaps in sitemap index.
* Fix bug where `wpseo_sitemap_exclude_empty_terms` filter wouldn't work for index sitemap.

#### Enhancements

* Improve nonce checking in bulk title &amp; description editor.
* Prevent direct access to XSL file.
* Improve code styling to match WordPress code standard even more strictly, props [Jrf](http://profiles.wordpress.org/jrf).
* Add button to copy home meta description to home OpenGraph description.

= 1.5.4.1 =

Release date: 2014-07-15

#### Bugfixes

* Properly minified the metabox JS file, fixing snippet preview, props [Jrf](http://profiles.wordpress.org/jrf).
* Format unix timestamp to string in sitemap, fixes possible fatal error in XML sitemap.

= 1.5.4 =

Release date: 2014-07-15

#### Bugfixes

* Refactored the variable replacement function for better and faster results and more stability. This should fix most if not all problems users where having with variables not being replaced in the title, meta description, snippet preview etc - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed: `wpseo_replacements` filter was being run before all replacements were known.
* Fixed: `%%pt_single%%` and `%%pt_plural%%` didn't work in preview mode.
* Fixed: `%%page_total%%` would sometimes be one short.
* Fixed: `%%term404%%` would sometimes be empty while the pagename causing the 404 was known.
* Fixed: empty taxonomy sitemap could still be shown, while it shouldn't, as reported by [allasai](https://github.com/allasai) in [issue #1004](https://github.com/Yoast/wordpress-seo/issues/1004) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed: if first result of a search is a post, the blog page was incorrectly added to the breadcrumb, as reported in [issue #1248](https://github.com/Yoast/wordpress-seo/issues/1248) by [Nikoya](https://github.com/Nikoya) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed: ensure that all our options exist always, fixes rare case in which this wouldn't be so. As reported by [bonny](https://github.com/bonny) in [issue #1245](https://github.com/Yoast/wordpress-seo/issues/1245) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed: Media title and meta settings could not be set when 'attachment URLs redirect to parent post' was selected which let to issues for attachments without a parent, as reported by [Firebird75](https://github.com/Firebird75) in [issue #1243](https://github.com/Yoast/wordpress-seo/issues/1243) - props [Jrf](http://profiles.wordpress.org/jrf).
* Improved and more consistent check for whether to show the admin 'Edit files' screen, [issue #1197](https://github.com/Yoast/wordpress-seo/issues/1197) - props [hostliketoast](https://github.com/hostliketoast) and [Jrf](http://profiles.wordpress.org/jrf).
* Restore robots meta box per taxonomy to its former glory, it now shows even when blog is not set to public, as reported by [Lumieredelune](https://github.com/Lumieredelune) in [issue #1158](https://github.com/Yoast/wordpress-seo/issues/1158) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed: Multisite issues, as reported by [GaryJones](https://github.com/GaryJones) and [chrisfromthelc](https://github.com/chrisfromthelc) in [issue #935](https://github.com/Yoast/wordpress-seo/issues/935) - props [Jrf](http://profiles.wordpress.org/jrf).
* saving of settings on the multisite settings page was not working.
* restoring site to default settings from multisite settings page was not working.
* initializing new blogs with settings from a chosen default blog was not working (might still not be completely stable for WP multisite with WPSEO in must-use plugins directory, stable in all other cases).
* wrong option debug information shown on multisite settings page
* Fixed: an issue with sitemap transient caching for plugins not using paginated sitemaps (like news seo).
* Check if get_queried_object_id is not 0 before enqueueing wp_enqueue_media.
* Set rssafter to empty string on test_embed_rss() test.
* Fixed: Bing URL - props [GodThor](https://github.com/GodThor).
* Prevent from loading if WP is installing - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed: Incorrect timezone in the root sitemap.
* Fixed: Multiselect fields are now properly saved in wpseo meta boxes.
* Force canonical links to be absolute, relative is NOT an option.
* Fixed: Breadcrumb on search pages.
* Added CDATA in sitemap image captions and titles.
* Various sitemap fixes and improvements - props [Rarst] ([https://github.com/Rarst](https://github.com/Rarst)).

#### Enhancements

* Heavily reduce query load for XML sitemaps by caching XML sitemaps in transients.
* New `wpseo_register_extra_replacements` action hook which lets plugin/theme builders add new `%%...%%` replacement variables - including relevant help texts -. See [function documentation](https://github.com/Yoast/wordpress-seo/blob/master/inc/wpseo-functions.php) for an example of how to use this new functionality.
* If the final string - after replacement - would contain two separators with nothing between them, this extra separator will be removed.
* All remaining not replaced replacement vars are now stripped from the strings (without breaking the snippet preview).
* New filter `wpseo_replacements_filter_sep` which can be used to change the seperator character passed by the theme.
* When using the 'Reset default settings' button on a blog in a network while another blog has been chosen to be used as a basis for the settings for all new blogs, the reset will respect that setting and reset the blog to the settings from the chosen blog.
* For small networks ( &lt; 100 sites ), the network page user interface has been improved, by offering drop-down lists of the blogs for blog selection fields. For larger networks, the interface remains the same.
* Added an action to allow adding content to the Post Type tab on the meta admin page.
* Removing the extra blog name added to the title by woo_title().
* More optimization improvements to snippet preview.
* Add filter to allow other plugins to interact with our metaboxes outside of the standard pages - props [Jrf](http://profiles.wordpress.org/jrf).
* Replace variables through an AJAX call, which makes them work in the post editor too and allows for more variables to be replaced in the title.
* Added priority filters for XML sitemaps.
* Other enhancements
* Security improvement: As the .htaccess / robots.txt files are site-wide files, on a multi-site WP installation they will no longer be available for editing to individual site owners. For super-admins, the 'SEO -&gt; Edit Files' admin page will now be accessible through the Network Admin.
* We've added server specific info to our tracking class. Most notably, we're tracking whether a number of PHP extensions are enabled for our users now.

= 1.5.3.3 =

Release date: 2014-06-02

#### Enhancements

* We've added some options and some host specific info to our tracking class. Most notably, we're tracking the PHP version for our users now, so we can see whether we, at some point, might drop PHP 5.2 support before WordPress does.
* Auto-deactivate plugin in the rare case that the SPL (Standard PHP Library) extension is not available.
* Switch from inline `xmlns` to inline use of the `prefix` attribute for breadcrumbs as that makes validation work. Fixes [Issue 1186](([https://github.com/Yoast/wordpress-seo/issues/1186](https://github.com/Yoast/wordpress-seo/issues/1186)).

#### Bugfixes

* Check whether snippet preview is shown on page before hiding / showing errors, deducted from [#1178](https://github.com/Yoast/wordpress-seo/issues/1178)
* Fixed incorrect sitemap last modified date as reported in [issue 1136](https://github.com/Yoast/wordpress-seo/issues/1136) - props [rscs](https://github.com/rscs).
* Specify post ID when using `wp_enqueue_media()` to set up correctly for the post being edited. [Pull #1165](https://github.com/Yoast/wordpress-seo/pull/1165), props [benhuson](https://github.com/benhuson).
* Fixed unreachable filter `wpseo_sitemap_[post_type]_content` as reported in [pull #1163](https://github.com/Yoast/wordpress-seo/pull/1163), also fixes unreachable filter `wpseo_sitemap_author_content`. Props [jakub-klapka](https://github.com/jakub-klapka).
* Fixed PHP notice as reported by [maxiwheat](https://github.com/maxiwheat) in [issue #1160](https://github.com/Yoast/wordpress-seo/issues/1160).
* Backed out pagination overflow redirect as it's causing too many issues.
* i18n

* Make sure extensions menu is fully i18n compatible.

= 1.5.3.2 =

Release date: 2014-05-16

#### Bugfixes

* Backing out earlier change, as this breaks the snippet preview.
* Enhancement
* Reintroduced the 'Strip the category base (usually /category/) from the category URL.' option.

= 1.5.3.1 =

Release date: 2014-05-15

#### Bugfixes

* Fix regression issue - non-replacement of %%name%% variable as reported in [issue #1104](https://github.com/Yoast/wordpress-seo/issues/1104) by [firstinflight](https://github.com/firstinflight) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed an issue where %%category%% was not replaced on certain pages.
* Added support for %%tag%% even if the ID is empty.
* All remaining not replaced title vars are now stripped from the title.
* Added a fallback to post_date in the sitemap 'mod' property for when a post is lacking the post_date_gmt value.

= 1.5.3 =

Release date: 2014-05-12

#### Bugfixes

* Don't ping search engines if the blog is set to 'discourage search engines from indexing this site' - props [Jrf](http://profiles.wordpress.org/jrf).
* Fix error in sitemap_index.xml if post type does not contain any posts as reported by [sebastiaandegeus](https://github.com/sebastiaandegeus).
* Use the correct HTTP protocol for responses - props [Fab1en](https://github.com/Fab1en).
* Better OG locale handling - props [maiis](https://github.com/maiis).
* Fixed: 'breadcrumb_last' class was missing on homepage, as reported by [uprise10](https://github.com/uprise10) in [issue #1045](https://github.com/Yoast/wordpress-seo/issues/1045) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fix empty post id notice, [issue #1080](https://github.com/Yoast/wordpress-seo/issues/1080) as reported by [sosada](https://github.com/sosada).
* Localize dates where appropriate as suggested by [allankronmark](https://github.com/allankronmark) in [issue #1073](https://github.com/Yoast/wordpress-seo/issues/1073).
* Fix for escaping str literals in JS regexes - props [MarventusWP](https://github.com/MarventusWP).
* Enhancement
* Redirect paginated archive pages with a pagination number that doesn't exist to the first page of that archive.
* Update score circle icon to look great on HiDPI displays, as well as fitting better with WordPress 3.8+ design - props [paulwilde](https://github.com/paulwilde).
* Only show article publication time for posts, not for pages or other post types, introduce a new filter to _do_ allow them when needed.
* Load of improvements to banners and licenses page.
* Update snippet preview to use latest Google design changes - props [paulwilde](https://github.com/paulwilde).

= 1.5.2.8 =

Release date: 2014-04-25

#### Bugfixes

* Added some missing textdomains.
* Fixed a license manager request bug.
* Work-around for fatal error caused by other plugins doing front-end post updates without loading all the required WP files, such as the WP Google Forms plugin - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed incorrect link to Issues in CONTRIBUTING.md - props [GaryJones](https://github.com/GaryJones).
* Fixed a fatal error caused by not checking if Google Suggest request reponse is valid - props [jeremyfelt](https://github.com/jeremyfelt).
* Fixed a screen option bug in bulk edit options - props [designerken](https://github.com/designerken).
* Fixed warnings on edit files section - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed a warning when post_type is an array - props [unr](https://github.com/unr).
* i18n
* Updated el_GR, hu_HU, nl_NL and pl_PL

= 1.5.2.7 =

Release date: 2014-04-15

#### Bugfixes

* Fixed a WordPress Network license bug.
* i18n
* Updated el_GR, fa_IR, hu, it_IT, pt_PT, ru_RU, tr_TK and zh_CN
* Added Malay

= 1.5.2.6 =

Release date: 2014-04-04

#### Bugfixes

* Fixed Open Graph Facebook Debubber Tags/Categories Issue, tags/categories are now grouped into one metatag - props lgrandicelli.
* Fixed: %%cf_%% and %%parent_title%% not being resolved in the preview snippet as reported by [Glark](https://github.com/Glark) in [issue #916](https://github.com/Yoast/wordpress-seo/issues/916) - props [Jrf](http://profiles.wordpress.org/jrf).
* Options are no longer deleted on plugin uninstall.
* Fixed a bug that caused the 'Plugins activated' message to be removed by the robots error message - props [andyexeter](https://github.com/andyexeter).
* Fix white screen/blog down issues caused by some webhosts actively disabling the PHP ctype extension - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixes Metabox Social tab media uploader not working on custom post types which don't use media as reported by [Drethic](https://github.com/Drethic) in [issue #911](https://github.com/Yoast/wordpress-seo/issues/911) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed vars not being replaced in OG description tag.
* Enhancement
* Fix PHP warnings when post_type is an array.

= 1.5.2.5 =

Release date: 2014-03-21

#### Bugfixes

* Fixed: Premium support link was being added to all plugins, not just ours ;-)
* Only show the breadcrumbs-blog-remove option if user uses page_for_posts as it's not applicable otherwise and can cause confusion.
* Clean up url query vars after use in our settings page to avoid actions being executed twice - props [Jrf](http://profiles.wordpress.org/jrf).

= 1.5.2.4 =

Release date: 2014-03-21

#### Bugfixes

* Changed 'wpseo_frontend_head_init' hook to 'template_redirect' to prevent incorrect canonical redirect.
* Improved upgrade routine for breadcrumbs maintax/pt option as reported by [benfreke](https://github.com/benfreke) in [issue #849](https://github.com/Yoast/wordpress-seo/issues/849) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed a bug where the banners overlapped WordPress notices/errors.
* Fixed: Slashes in Taxonomy text inputs as reported by [chuckreynolds](https://github.com/chuckreynolds) in [issue #868](https://github.com/Yoast/wordpress-seo/issues/868) - props [Jrf](http://profiles.wordpress.org/jrf).
* Increased priority (decreased priority int) on the template_redirect for the sitemap redirect hook.
* Fixed: `current_user_can` was being called too early as reported by [satrya](https://github.com/satrya) in [issue #881](https://github.com/Yoast/wordpress-seo/issues/881) - props [Jrf](http://profiles.wordpress.org/jrf).
* Enhancement
* Enhanced validation of webmaster verification keys to prevent invalidating incorrect input which does contain a key as reported by [TheZoker](https://github.com/TheZoker) in [issue #864](https://github.com/Yoast/wordpress-seo/issues/864) - props [Jrf](http://profiles.wordpress.org/jrf).

= 1.5.2.3 =

Release date: 2014-03-20

**Note: if you already upgraded to v1.5+, you will need to retrieve your Facebook Apps again and please also check your Google+ URL. We had some bugs with both being escaped too aggressively. Sorry about that.**

#### Bugfixes

* Added missing settings menu pages to wp admin bar.
* Replaced old AdWords keyword tool link.
* Fix wp admin bar keyword density check link
* Taxonomy sitemap will now also show if empty.
* Prevent infinite loop triggered by `sitemap_close()`, fixes [#600](https://github.com/Yoast/wordpress-seo/issues/) as reported and fixed by [pbogdan](https://github.com/pbogdan).
* Fixed a link count Page Analysis bug.
* Fixed a keyword density problem in the Page Analysis
* Fixed OpenGraph/GooglePlus/Twitter tags not showing in a select few themes, [issue #750](https://github.com/Yoast/wordpress-seo/issues/750) as reported by [Jovian](https://github.com/Jovian) and [wwdboer](https://github.com/wwdboer) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed Facebook Apps not being saved/ "Failed to retrieve your apps from Facebook" as reported by [kevinlisota](https://github.com/kevinlisota) in [issue #812](https://github.com/Yoast/wordpress-seo/issues/812) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed duplicate feedback messages on WPSEO -&gt; Social pages as reported by [steverep](https://github.com/steverep) in [issue #743](https://github.com/Yoast/wordpress-seo/issues/743) - props [Jrf](http://profiles.wordpress.org/jrf).
* Flush our force title rewrite buffer earlier in `wp_footer` so it can be used by other plugins in `wp_footer`. Props [Gabriel Pérez Salazar](http://www.guero.net/).
* Start the force rewrite buffer late (at 999) in `template_redirect` instead of `get_header` because of several themes not using `get_header`, issue [#817](https://github.com/Yoast/wordpress-seo/issues/817) as reported by [Jrf](http://profiles.wordpress.org/jrf).
* Fixed 'Page %d of %d' / %%page%% variable not being replaced when on pages, as reported by [SGr33n](https://github.com/SGr33n) in [issue #801](https://github.com/Yoast/wordpress-seo/issues/801) - props [Jrf](http://profiles.wordpress.org/jrf).
* Restore robots meta box per post to its former glory, it now shows even when blog is not set to public.
* Fixed individual page robots settings not being respected when using a page as blog as reported by [wintersolutions](https://github.com/wintersolutions) in [issue #813](https://github.com/Yoast/wordpress-seo/issues/813) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed: Too aggressive html escaping of the breadcrumbs.
* Fixed: Last breadcrumb wasn't always determined correctly resulting in crumbs not being linked when they should have been.
* Fixed: Breadcrumbs were sometimes missing separators and default texts since v1.5.0.
* Fixed: 404 date based breadcrumb and title creation could cause corruption of the `$post` object.
* Fixed: Filtering posts based on SEO score via the dropdown at the top of a post/page overview page no longer worked. Fixed. As reported by [gmuehl](https://github.com/gmuehl) in [issue #838](https://github.com/Yoast/wordpress-seo/issues/838) - props [Jrf](http://profiles.wordpress.org/jrf).

#### Enhancements
* Added filters for the change frequencies of different URLs added to the sitemap. Props to [haroldkyle](https://github.com/haroldkyle) for the idea.
* Added filter `wpseo_sitemap_exclude_empty_terms` to allow including empty terms in the XML sitemap.
* Private posts now default to noindex (even though they technically probably couldn't be indexed anyway).
* Show a warning message underneath a post's robots meta settings when site is set to noindex sitewide in WP core.
* Updated licensing class to show a notice when requests to yoast.com are blocked because of `WP_HTTP_BLOCK_EXTERNALS`.
* Other
* Refactored the breadcrumb class - props [Jrf](http://profiles.wordpress.org/jrf).

= 1.5.2.2 =

Release date: 2014-03-14

#### Bugfixes

* Fix for issue with Soliloquy image slider was not applied to minified js file.
* Fixed some PHP 'undefined index' notices.
* Fix banner images overlapping text in help tabs.
* Fixed meta description tag not showing for taxonomy (category/tag/etc) pages as reported in [issue #737](https://github.com/Yoast/wordpress-seo/issues/737) and [#780](https://github.com/Yoast/wordpress-seo/issues/780) - props [Jrf](http://profiles.wordpress.org/jrf).
* Prevent a fatal error if `wp_remote_get()` fails while testing whether the title needs to be force rewritten as reported by [homeispv](http://wordpress.org/support/profile/homeispv) - props [Jrf](http://profiles.wordpress.org/jrf).

#### Enhancements

* Added composer support - props [codekipple](https://github.com/codekipple) and [Rarst](https://github.com/Rarst).

= 1.5.2.1 =

Release date: 2014-03-12

#### Bugfixes

* Fix white screen/blog down issues caused by some (bloody stupid) webhosts actively disabling the filter extension - props [Jrf](http://profiles.wordpress.org/jrf).
* Fix for some PHP notices, [issue #747](https://github.com/Yoast/wordpress-seo/issues/747) as reported by [benfreke](https://github.com/benfreke) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed: GooglePlus vanity urls were saved without the `+` as reported by [ronimarin](https://github.com/ronimarin) in [issue #730](https://github.com/Yoast/wordpress-seo/issues/730) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fix WP Admin menu items no longer clickable when on WPSEO pages as reported in [issue #733](https://github.com/Yoast/wordpress-seo/issues/733) and [#738](https://github.com/Yoast/wordpress-seo/issues/738) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fix strict warning for W3TC, [issue 721](https://github.com/Yoast/wordpress-seo/issues/721).
* Fix RSS text strings on options page being double escaped, [issue #731](https://github.com/Yoast/wordpress-seo/issues/731) as reported by [namaserajesh](https://github.com/namaserajesh) - props [Jrf](http://profiles.wordpress.org/jrf).
* Avoid potential confusion over Facebook OpenGraph front page usage, [issue #570](https://github.com/Yoast/wordpress-seo/issues/570) - props [Jrf](http://profiles.wordpress.org/jrf).
* Potentially fix [issue 565](https://github.com/Yoast/wordpress-seo/issues/565) bbpress warning message. Thanks [inetbiz](https://github.com/inetbiz) for reporting and [tobylewis](https://github.com/tobylewis) for finding the likely cause.
* Filter 'wpseo_pre_analysis_post_content' output is now only loaded in DOM object if not empty. - props [mgmartel](https://github.com/mgmartel).
* $post_content is now unset after loading in DOM object. - props [mgmartel](https://github.com/mgmartel).
* Fix Alexa ID string validation, as reported by [kyasajin](https://github.com/kyasajin) and [Bubichka](https://github.com/Bubichka) in [issue 736](https://github.com/Yoast/wordpress-seo/issues/736) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fix issue with Soliloquy image query, as reported by [osalcedo](https://github.com/osalcedo) and [mattisherwood](https://github.com/mattisherwood) in [issue #733](https://github.com/Yoast/wordpress-seo/issues/733) - props [Jrf](http://profiles.wordpress.org/jrf).

#### Enhancements

* Twitter metatag key is now filterable by 'wpseo_twitter_metatag_key'.
* Added a filter called "wpseo_replacements" in wpseo_replace_vars to allow customization of the replacements before they are applied - props [martinernst](https://github.com/martinernst).
* Added useful links for page analysis - props [bhubbard](https://github.com/bhubbard).
* i18n Updates
* Updated nl_NL, id_ID, it_IT, fr_FR and de_DE
* Added ko
* Updated .pot file.

= 1.5.2 =

Release date: 2014-03-11

#### Bugfixes

* If `mbstring` extension isn't loaded, fatal error was thrown.

= 1.5 =

Release date: 2014-03-11

This release contains tons and tons of bugfixes and security improvements. Credits for this release largely go to Juliette Reinders Folmer aka [Jrf](http://profiles.wordpress.org/jrf) / [jrfnl](https://github.com/jrfnl).

Also a heartfelt thanks go out to the beta testers who tested all the changes. Special mentions for testers [Woyto](https://github.com/Woyto), [Bnpositive](https://github.com/Bnpositive), [Surbma](https://github.com/Surbma), [DavidCH1](https://github.com/DavidCH1), [TheITJuggler](https://github.com/TheITJuggler), [kletskater](https://github.com/kletskater) who caught a number of bugs and provided us with actionable information to fix these.

This version also incorporates the [SEO Extended](http://wordpress.org/plugins/seo-extended/) plugin functionality into WP SEO with graceful thanks to [Faison](http://profiles.wordpress.org/faison/) and [Scott Offord](http://profiles.wordpress.org/scottofford/) for their great work on this plugin.

**This version contains a lot of changes under the hood which will break backward compatibility, i.e. once you've upgraded, downgrading will break things.**So make sure you make a backup of your settings/database before upgrading.

#### Bugfixes

* Major overhaul of the way the plugin deals with options. This should fix a truck-load of bugs and provides improved security.
* Major overhaul of the way the plugin deals with post meta values. This should fix a truck-load of bugs and provides improved security.
* Major overhaul of the way the plugin deals with taxonomy meta values. This should fix a truck-load of bugs and provides improved security.
* Fixed: Renamed a number of options as they ran the risk of being overwritten by post type/taxonomy options which could get the same name. This may fix some issues where options did not seem to get saved correctly.
* Fixed: if page specific keywords were set for a static homepage, they would never be shown.
* Fixed: if only one FB admin was selected, the tag would not be added.
* Fixed: bug where taxonomies which were on an individual level set to noindex and sitemap include 'auto-detect' would still be shown in the sitemap
* Fixed: bug in canonical urls where an essential part of the logic was skipped for singular posts/pages
* Fixed: category rewrite rules could have errors for categories without parent categories.
* Fixed: bug in delete_sitemaps() - wrong retrieval of needed options.
* Fixed: HTML sitemaps would sometimes display headers without a link list.
* Fixed: Breadcrumbs could potentially output an empty element as part of the chain, resulting in two separators in a row.
* Fixed: Breadcrumbs: even when removing the prefix texts from the admin page, they would sometimes still be included.
* Improved fixed for possible caching issue when `title_test` option remained set, issue [#627](https://github.com/Yoast/wordpress-seo/issues/627).
* Fixed bug in `title_test_helper` where it would pass the wrong information to `update_option()`, related to issue [#627](https://github.com/Yoast/wordpress-seo/issues/627).
* Fixed: shortcodes should be removed from ogdesc.
* Fixed: Admin -&gt; Dashboard -&gt; Failed removal of the meta description from a theme file would still change the relevant internal option as if it had succeeded.
* Fixed: Admin -&gt; Dashboard -&gt; bug where message about files blocking the sitemap from working would not be removed when it should.
* Fixed: Admin -&gt; Titles &amp; Meta's -&gt; Post types would show attachments even when attachment redirection to post was enabled.
* Fixed: Admin -&gt; Import -&gt; Fixed partially broken import functionality for WooThemes SEO framework
* Fixed: Admin -&gt; Import -&gt; Importing settings from file would not always work due to file/directory permission issues.
* Fixed: Admin -&gt; Export -&gt; Some values were exported in a way that they couldn't be imported properly again.
* Fixed: Admin -&gt; Import/Export -&gt; On export, the part of the admin page after export would not be loaded.
* Fixed: Admin -&gt; Various -&gt; Removed some superfluous hidden fields which could cause issues.
* Fixed: Admin -&gt; Social -&gt; The same fb user can no longer be added twice as Facebook admin.
* Admin -&gt; Multi-site -&gt; Added error message when user tries to restore to defaults a non-existent blog (only applies to multi-site installations).
* Bow out early from displaying the post/taxonomy metabox if the post/taxonomy is not public (no use adding meta data which will never be displayed).
* Prevent the SEO score filter from displaying on a post type overview page if the metabox has been hidden for the post type as suggested by [coreyworrell](https://github.com/coreyworrell) in issue [#601](https://github.com/Yoast/wordpress-seo/issues/601).
* Improved: post meta -&gt; the keyword density calculation for non-latin, non-ideograph languages - i.e. cyrillic, hebrew etc - has been improved. Related issues [#703](https://github.com/Yoast/wordpress-seo/issues/703), [#681](https://github.com/Yoast/wordpress-seo/issues/681), [#349](https://github.com/Yoast/wordpress-seo/issues/349) and [#264](https://github.com/Yoast/wordpress-seo/issues/264). The keyword density calculation for ideograph based languages such as Japanese and Chinese will not work yet, issue [#145](https://github.com/Yoast/wordpress-seo/issues/145) remains open.
* Fixed: post meta -&gt; SEO score indicator -&gt; wpseo_translate_score() would never return score, but always the css value.
* Fixed: post meta -&gt; SEO score indicator -&gt; wpseo_translate_score() calls were passing unintended wrong parameters
* Fixed: post meta -&gt; page analysis -&gt; text analysis did not respect the blog character encoding. This may or may not solve a number of related bugs.
* Fixed: post meta -&gt; often wrong meta value was shown for meta robots follow and meta robots index in post meta box so it appeared as if the chosen value was not saved correctly.
* Fixed: post meta -&gt; meta robots advanced entry could have strange (invalid) values.
* Fixed: post meta -&gt; since v1.4.22 importing from other plugins would import data even when the post already had WP SEO values, effectively overwritting (empty by choice) WPSEO fields.
* Fixed: post meta -&gt; A few of the meta values could contain line breaks where those aren't allowed.
* Fixed: taxonomy meta -&gt; breadcrumb title entry field would show for taxonomy even when breadcrumbs were not enabled
* Fixed: taxonomy meta -&gt; bug where W3TC cache for taxonomy meta data wouldn't always be refreshed when it should and sometimes would when it shouldn't
* Fixed: some things should work better now for must-use installations.
* Added sanitation/improved validation to $_GET and $_POST variables if/when they are used in a manner which could cause security issues.
* Fixed: wrong file was loaded for the get_plugin_data() function.
* Fixed: several bug-sensitive code constructs. This will probably get rid of a number of hard to figure out bugs.
* Fixed: several html validation issues.
* Prevent error when theme does not support featured images, issue [#639](https://github.com/Yoast/wordpress-seo/issues/639) as reported by [kuzudecoletaje](https://github.com/kuzudecoletaje).

#### Enhancements

* The [SEO Extended](http://wordpress.org/plugins/seo-extended/) plugin functionality has now been integrated into WP SEO.
* Added ability to add Pininterest and Yandex site verification tags. You can enter this info on the WPSEO Dashboard and it will auto-generate the relevant meta tags for your webpage headers.
* New `[wpseo_breadcrumb]` shortcode.
* Post meta -&gt; Don't show robots index/no-index choice in advanced meta box if there is a blog-wide override in place, i.e. the Settings -&gt; Reading -&gt; Block search engines checkbox is checked.
* Post meta -&gt; Added 'Site-wide default' option to meta robots advanced field in advanced meta box.
* Post meta -&gt; Added an option to decide whether to include/exclude `rel="author"` on a per post base as suggested by [GaryJones](https://github.com/GaryJones). (Added to the advanced meta box).
* Taxonomy meta -&gt; Don't show robots index/no-index choice in taxonomy meta box if there is a blog-wide override in place, i.e. the Settings -&gt; Reading -&gt; Block search engines checkbox is checked.
* Admin -&gt; If WP_DEBUG is on or if you have set the special constant WPSEO_DEBUG, a block with the currently saved options will be shown on the settings pages.
* Admin -&gt; Dashboard -&gt; Added error message for when meta description tag removal from theme file fails.
* Admin -&gt; Titles &amp; Meta -&gt; Added option to add meta keywords to post type archives.
* Admin -&gt; Social -&gt; Facebook -&gt; Added error messages for if communication with Facebook failed.
* Admin -&gt; Import -&gt; WPSEO settings -&gt; Better error messages for when importing the settings fails and better clean up after itself.
* Adminbar -&gt; Keyword research links now also search for the set the keyword when editing a post in the back-end.
* [Usability] Proper field labels for user profile form fields.
* The New Relic daemon (not the W3TC New Relic PHP module) realtime user monitoring will be turned off for xml/xsl files by default to prevent breaking the sitemaps as suggested by [szepeviktor](https://github.com/szepeviktor) in [issue #603](https://github.com/Yoast/wordpress-seo/issues/603)
* General jQuery efficiency improvements.
* Improved lazy loading of plugin files using autoload.
* Made the Google+ and Facebook post descriptions translatable by WPML.
* Better calculation precision for SEO score
* Improved 403 headers for illegal file requests as suggested by [cfoellmann](https://github.com/cfoellmann)
* Synchronized TextStatistics class with changes from the original, this should provide somewhat better results for non-latin languages.
* CSS and JS files are now minified
* Rewrote query logic for XML sitemaps
* Changed default settings for rel="author"
* Added option to switch to summary card with image for Twitter cards
* Made several changes to Open Graph logic
* Implemented new Yoast License framework
* Added possibility to create a robots.txt file directly on the server
* Other:
* Removed some backward compatibility with WP &lt; 3.5 as minimum requirement for WP SEO is now 3.5
* Removed some old (commented out) code
* Deprecated category rewrite functionality

= 1.4.25 =

Release date: 2014-02-26

#### Bugfixes

* Do not include external URLs in XML sitemap (Issue #528) - props [tivnet](https://github.com/tivnet).
* Get home_url out of the sitemap loop - props [tivnet](https://github.com/tivnet).
* Add support for html entities - props [julienmeyer](https://github.com/julienmeyer).
* Fixed wrong use of `__FILE__`.
* Enhancement
* WPSEO_FILE now has a 'defined' check.
* Removed unneeded `dirname` calls.
* i18n
* Updated cs_CZ, de_DE, fr_FR &amp; tr_TK

= 1.4.24 =

Release date: 2014-01-19

#### Bugfixes

* Removed screen_icon() calls.
* Fixed a bug in robots meta tag on singular items.
* Fix double robots header, WP native settings will be respected - props [Jrf](http://profiles.wordpress.org/jrf).
* When post published data is newer than last modified date, use that in XML sitemap, props [mindingdata](https://github.com/mindingdata).
* Check if tab hash is correct after being redirected from Facebook API, props [dannyvankooten](https://github.com/dannyvankooten).
* Fix 404 in category rewrites when `pagination_base` was changed, props [raugfer](https://github.com/raugfer).
* Make the metabox tabs jQuery only work for WPSEO tabs, props [imageinabox](https://github.com/imageinabox).
* Sitemap shortcode sql had hard-coded table name which could easily cause the shortcode display to fail. Fixed. - props [Jrf](http://profiles.wordpress.org/jrf).
* Fix issue with user capability authorisation check as reported by scienceandpoetry in issue [#492](https://github.com/Yoast/wordpress-seo/issues/492) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed canonical rel links was causing an error when given an invalid taxonomy, issue [#306](https://github.com/Yoast/wordpress-seo/issues/306) - props [Jrf](http://profiles.wordpress.org/jrf).
* Removed add_meta_box() function duplication - props [Jrf](http://profiles.wordpress.org/jrf).
* Fix issue "Flesch Reading Ease should only be a positive number". This also fixes the message being unclear. Thanks [eugenmihailescu](https://github.com/eugenmihailescu) for reporting - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed issue with page analysis not taking feature image into account - props [darrarski](https://github.com/darrarski).
* Enhancement
* Shortcode now also available to ajax requests - props [Jrf](http://profiles.wordpress.org/jrf).
* Added gitignores to prevent incorrect commits (Cross platform collab) - props [cfoellmann](https://github.com/cfoellmann).
* Adding filters to individual sitemap url entries - props [mboynes](https://github.com/mboynes).

= 1.4.23 =

Release date: 2014-01-12

#### Bugfixes

* Fix for serious sitemap issue which caused all pages of a split sitemap to be the same (show the first 1000 urls) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed a bug in the WPSEO tour in WP Network installs
* clean_permalink 301 redirect issue when using https - props [pirategaspard](https://github.com/pirategaspard)
* i18n
* Updated cs_CZ, fa_IR, fr_FR, hu, hu_HU, pl_PL, ru_RU &amp; zh_CN

= 1.4.22 =

Release date: 2013-12-20

#### Bugfixes

* Reverted change to XML sitemaps stylesheet URL as that was giving issues on multisite installs.
* Reverted change to XML sitemap loading as we were no longer exposing some variables that other plugins relied upon.
* Fix bug with author sitemap showing for everyone.
* Enhancement
* No longer save empty meta post variables, issue [#463](https://github.com/Yoast/wordpress-seo/issues/463). Clean up of DB is coming in future release, if you want to clean your DB now, see that issue for SQL queries.

= 1.4.21 =

Release date: 2013-12-16

#### Bugfixes

* Fix notice for `ICL_LANGUAGE_CODE` not being defined.
* Fix missing function in install by adding a require.

= 1.4.20 =

Release date: 2013-12-16

#### Bugfixes

* Fixed bug where posts set to _always_ index would not end up in XML sitemap.
* Fix _Invalid argument supplied for foreach()_ notice for WPML as reported by [pbearne](https://github.com/pbearne) - props [Jrf](http://profiles.wordpress.org/jrf).
* Yoast tracking cron job will now unschedule on disallowing of tracking, on deactivation and on uninstall, inspired by [Bluebird Blvd.](http://wordpress.org/support/topic/found-active-tracking-device-after-deleting-wp-seo-months-ago) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fix issue [#453](https://github.com/Yoast/wordpress-seo/issues/435): setting shop as homepage caused a notice and wrong title with WooCommerce.
* Fixed a bug [#449](https://github.com/Yoast/wordpress-seo/issues/449) where a canonical, when manually set for a category, tag or term, could get pagination added to it on paginated pages, when it shouldn't.
* Fixed a bug where manually set canonicals would end up in `rel="next"` and `rel="prev"` tags.
* Fixed a bug [#450](https://github.com/Yoast/wordpress-seo/issues/450) where noindexed pages would appear in the HTML sitemap.
* Fixed a bug where non-public taxonomies would appear in the HTML sitemap.
* Fixed quotes not working in meta title and description for terms, issue [#405](https://github.com/Yoast/wordpress-seo/issues/405).
* Make sure author sitemap works when they should.
* Fix some notices in author sitemap, issue [#402](https://github.com/Yoast/wordpress-seo/issues/402).
* Fix breadcrumbs being broken on empty post type archives, issue [#443](https://github.com/Yoast/wordpress-seo/issues/443).
* Fixed a possible caching issue when `title_test` option remained set, issue [#419](https://github.com/Yoast/wordpress-seo/issues/419).
* Make sure og:description is shown on homepage when it's left empty in settings, fixes [#441](https://github.com/Yoast/wordpress-seo/issues/441).
* Make sure there are no WPML leftovers in our title, issue [#383](https://github.com/Yoast/wordpress-seo/issues/383).
* Fix padding on fix it buttons with 3.8 design, issue [#400](https://github.com/Yoast/wordpress-seo/issues/400).
* Hide SEO columns in responsive admin ( in 3.8 admin design ), issue [#445](https://github.com/Yoast/wordpress-seo/issues/445).
* Misc
* Switch back to MailChimp for newsletter subscribe.
* Default to nofollowing links in RSS feed footers.
* i18n

* Updated es_ES, pt_BR &amp; ru_RU
* Added sk_SK

= 1.4.19 =

Release date: 2013-10-30

#### Enhancements

* Added the option to upload a separate image for Facebook in the Social tab.
* Added published time, last modified time, tags and categories to OpenGraph output, to work with Pinterests new article pin.
* Added a filter for post length requirements in the Analysis tab.
* If there is a term description, use it in the OpenGraph description for a term archive page.
* Applied a number of settings form best practices - props [Jrf](http://profiles.wordpress.org/jrf).
* File inclusion best practices applied - props [Jrf](http://profiles.wordpress.org/jrf).
* Breadcrumbs for Custom Post Types now take the CPT-&gt;label instead of CPT-&gt;labels-&gt;menu_name as text parameter, as suggested by [katart17](http://wordpress.org/support/profile/katart17) and [Robbert V](http://wordpress.org/support/profile/robbert-v) - props [Jrf](http://profiles.wordpress.org/jrf).

#### Bugfixes

* Move all rewrite flushing to shutdown, so it doesn't break other plugins who add their rewrites late.
* Fixed the wrong naming of the L10n JS object, props [Otto](http://profiles.wordpress.org/otto42).
* Improved form support for UTF-8 - props [Jrf](http://profiles.wordpress.org/jrf).
* Corrected faulty multisite option registration - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed appropriate use of plugins_url() to avoid breaking hooked in filters - props [Jrf](http://profiles.wordpress.org/jrf).
* (Temporary) fix for metabox styling for users using the MP6 plugin - props [Jrf](http://profiles.wordpress.org/jrf).
* Minor fix in localization loading - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed [Missing argument 3 for wpseo_upgrader_process_complete](https://github.com/Yoast/wordpress-seo/issues/327) notice for WP 3.7+, thanks [vickyindo](https://github.com/vickyindo), [Wendyhihi](https://github.com/Wendihihi) and [Theressa1](https://github.com/Theressa1) for reporting - props [Jrf](http://profiles.wordpress.org/jrf).
* i18n

* Updated ru_RU, tr_TK and Hr

= 1.4.18 =

Release date: 2013-10-30

* Unhooking 'shutdown' (part of the NGG fix in 1.4.16) caused caching plugins to break, fixed while preserving NGG fix.
* These changes were pushed in later but were deemed not important enough to force an update:
* Updated newsletter subscription form to reflect new newsletter system.
* Documentation
* Updated readme.txt to reflect support changes.
* Moved old sections of changelog to external file.
* i18n
* Updated pt_PT

= 1.4.17 =

Release date: 2013-09-20

* Missed a line in the commit of the option to stop stop words cleaning.

= 1.4.16 =

Release date: 2013-09-20

* Fix for compatibility with NextGen Gallery.

#### Enhancements

* Add option to enable slug stop word cleaning, find it under SEO -&gt; Permalinks. It's on by default.
* Remove tracking variables from the Yoast Tracking that weren't used.
* i18n
* Updated de_DE, fa_IR, fi, hu_HU, it_IT, pl_PL, sv_SE and tr_TK

= 1.4.15 =

Release date: 2013-08-22

#### Bugfixes

* Fix the white XML sitemap errors caused by non-working XSL.
* Fixed the errors in content analysis reporting an H2 was not found when it was really there.
* Fix slug stopwords removal, props [amm350](https://github.com/amm350).
* Fix PHP Notice logged when site has capabilities created without 3rd value in args array, props [mbijon](https://github.com/mbijon).
* Fix the fact that meta description template for archive pages didn't work, props [MarcQueralt](https://github.com/MarcQueralt).
* Prevent wrong shortcodes (that echo instead of return) from causing erroneous output.
* Fix edge cases issue for keyword in first paragraph test not working.
* Revert change in 1.4.14 that did a `do_shortcode` while in the `head` to retrieve images from posts, as too many plugins crash then, instead added `wpseo_pre_analysis_post_content` filter there as well.

= 1.4.14 =

Release date: 2013-08-22

This release contains tons and tons of bugfixes, thanks in _large_ part to [Jrf](http://profiles.wordpress.org/jrf), who now has commit rights to the code on Github directly. Please join me in thanking her for her efforts!

* Notes:
* Our GitHub repository moved to [https://github.com/Yoast/wordpress-seo](https://github.com/Yoast/wordpress-seo), old links should redirect but please check.

#### Bugfixes

* Switch to stock autocomplete file and fix clash with color picker, props [Heinrich Luehrsen](http://www.luehrsen-heinrich.de/).
* Prevent strip category base code from breaking Custom Post Type rewrites, props [Steve Hulet](http://about.me/stevehulet).
* Fixed [issue with canonical links](http://wordpress.org/support/topic/serious-canonical-issue-with-paginated-posts) on last page of paginated posts - props [maxbugfiy](http://wordpress.org/support/profile/maxbuxfiy)
* Fixed bug in shortcode removal from meta description as reported by [professor44](http://profiles.wordpress.org/professor44/) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed bug preventing saving of taxonomy meta data on first try - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed small (potential) issue in wpseo_title_test() - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed bug where RSS excerpt would be double wrapped in `&lt;p&gt;` tags as reported by [mikeprince](http://profiles.wordpress.org/mikeprince) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed HTML validation error: Duplicate id Twitter on Social tab - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed undefined index notice as reported by [szepeviktor](http://profiles.wordpress.org/szepeviktor).
* Fixed error in a database query as reported by [Watch Teller](http://wordpress.org/support/profile/watchteller) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed small issue with how styles where enqueued/registered - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed bug in alt text of score dots as [reported by Rocket Pixels](http://wordpress.org/support/topic/dots-on-hover-over-show-na-tooltip) - props [Jrf](http://profiles.wordpress.org/jrf).
* Applied best practices to all uses of preg_ functions fixing some bugs in the process - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed bug in processing of `%%ct_%%` as [reported by Joy](http://wordpress.org/support/topic/plugin-dies-when-processing-ct_desc_) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed: no more empty og: or twitter: tags. Also added additional escaping where needed - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed: Meta description tag discovery looked in parent theme header file even when a child theme is the current theme - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed: Using the 'Fix it' button would remove the meta description tag from the parent theme header file, even when a child theme is the current theme - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed: Using the 'Fix it' button would fail if it had already been used once (i.e. if a wpseo backup file already existed) - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed repeated unnecessary meta description tag checks on each visit to dashboard page - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed: Meta description 'Fix it' feedback message was not shown - props [Jrf](http://profiles.wordpress.org/jrf).
* Mini-fix for plugin_dir_url - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed Author Highlighting to only show authors as possible choice for Google+ Plus author as reported by Sanoma - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed `adjacent_rel_links()` for Genesis users - props [benjamin74](https://github.com/benjamin74) for reporting.
* Replace jQuery .live function with .on(), as .live() has been deprecated and deleted. Props [Viktor Kostadinov](http://www.2buy1click.com/) &amp; [Taco Verdonschot](https://yoast.com/about-us/taco-verdonschot/).
* Fix how breadcrumbs deal with taxonomy orders. Props [Gaya Kessler](http://www.gayadesign.com/).
* Fixed some PHP warnings

#### Enhancements

* Added `wpseo_pre_analysis_post_content` filter. This allows plugins to add content to the content that is analyzed by the page analysis functionality.
* Added `wpseo_genesis_force_adjacent_rel_home` filter to allow forcing of rel=next / rel=prev links on the homepage pagination for Genesis users, they're off by default.
* Make `$wpseo_metabox` a global, props [Peter Chester](http://tri.be/).
* No need to show Twitter image when OpenGraph is showing, props [Gary Jones](http://garyjones.co.uk/).
* Make sure WPML works again, props [dominykasgel](https://github.com/dominykasgel).
* Added checks for the meta description tag on theme switch, on theme update and on (re-)activation of the WP SEO plugin including a visual warning if the check would warrant it - props [Jrf](http://profiles.wordpress.org/jrf).
* Added the ability to request re-checking a theme for the meta description tag. Useful when you've manually removed it (to get rid of the warning), inspired by [tzeldin88](http://wordpress.org/support/topic/plugin-wordpress-seo-by-yoast-your-theme-contains-a-meta-description-which-blocks-wordpress-seo) - props [Jrf](http://profiles.wordpress.org/jrf).
* OpenGraph image tags will now also be added for images added to the post via shortcodes, as suggested by [msebald](http://wordpress.org/support/topic/ogimage-set-to-default-image-but-articlepage-has-own-images?replies=3#post-4436317) - props [Jrf](http://profiles.wordpress.org/jrf).
* Added 'wpseo_breadcrumb_single_link_with_sep' filter which allows users to filter a complete breadcrumb element including the separator - props [Jrf](http://profiles.wordpress.org/jrf).
* Added 'wpseo_stopwords' filter which allows users to filter the stopwords list - props [Jrf](http://profiles.wordpress.org/jrf).
* Added 'wpseo_terms' filter which allows users to filter the terms string - props [Jrf](http://profiles.wordpress.org/jrf).
* Hide advanced tab for users for which it has been disabled, as suggested by jrgmartin - props [Jrf](http://profiles.wordpress.org/jrf).
* Updated Facebook supported locales list for og:locale
* i18n
* Updated languages tr_TK, fi, ru_RU &amp; da_DK
* Added language hi_IN
* Updated wordpress-seo.pot file

= 1.4.13 =

Release date: 2013-07-03

#### Bugfixes

* Fixed ampersand (&amp;) in site title in Title Templates loading as &amp;
* Fixed error when focus keyword contains a / - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed issue with utf8 characters in meta description - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed undefined property error - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed undefined index error for the last page of the tour - props [Jrf](http://profiles.wordpress.org/jrf).
* Fixed undefined index error for images without alt - props [Jrf](http://profiles.wordpress.org/jrf).
* Fix output of author for Google+ when using a static front page - props [petervanderdoes](https://github.com/petervanderdoes).
* Keyword density calculation not working when special character in focus keyword - props [siriuzwhite](https://github.com/siriuzwhite).
* Reverse output buffer cleaning for XML sitemaps, as that collides with WP Super Cache, thanks to [Rarst](https://github.com/Rarst) for finding this.
* Fix canonical and rel=prev / rel=next links for paginated home pages using index.php links.
* Fixed og:title not following title settings.

#### Enhancements

* Improved breadcrumbs and titles for 404 pages - props [Jrf](http://profiles.wordpress.org/jrf).
* Moved XSL stylesheet from a static file in wp-content folder to a dynamic one, allowing it to work for sites that prevented the wp-content dir from being opened directly, f.i. through Sucuri's hardening.
* Added a link in the XSL pointing back to the sitemap index on individual sitemaps.
* When remove replytocom is checked in the permalink settings, these are now also redirected out.
* Added filters to OpenGraph output functions that didn't have them yet.

= 1.4.12 =

Release date: 2013-06-28

#### Bugfixes

* Submit button displays again on Titles &amp; Metas page.
* SEO Title now calculates length correctly.
* Force rewrite titles should no longer reset wrongly on update.

= 1.4.11 =

Release date: 2013-06-27

* i18n
* Updated de_DE, ru_RU, zh_CN.

#### Bugfixes

* Make rel="publisher" markup appear on every page.
* Prevent empty property='article:publisher' markup from being output .
* Fixed twitter:description tag should only appears if OpenGraph is inactive.
* og:description will default to get_the_excerpt when meta description is blank (similar to how twitter:description works).
* Fixes only 25 tags (and other taxonomy) are being indexed in taxonomy sitemaps.
* Fix lastmod dates for taxonomies in XML sitemap index file.

#### Enhancements

* Changed Social Admin section to have a tab-layout.
* Moved Google+ section from Homepage tab of Titles &amp; Metas to Social tab.
* Make twitter:domain use WordPress site name instead of domain name.
* Added more output filters in the Twitter class.

= 1.4.10 =

Release date: 2013-06-21

* Fixes
* Caching was disabled in certain cases, this update fixes that.

#### Enhancements

* Added option to disable author sitemap.
* If author pages are disabled, author sitemaps are now automatically disabled.

= 1.4.9 =

Release date: 2013-06-21

* i18n
* Updated .pot file
* Updated ar, da_DK, de_DE, el_GR, es_ES, fa_IR, fr_FR, he_IL, id_ID, nl_NL, ro_RO, sv_SE &amp; tr_TK
* Added hr &amp; sl_SI
* Many localization fixes

#### Bugfixes

* Fixed sitemap "loc" element to have encoded entities.
* Honor the language setting if other plugins set the language.
* sitemap.xml will now redirect to sitemap_index.xml if it doesn't exist statically.
* Added filters 'wpseo_sitemap_exclude_post_type' and 'wpseo_sitemap_exclude_taxonomy' to allow themes/plugins to exclude entries in the XML sitemap.
* Added RTL support, some CSS fixes.
* Focus word gets counted in meta description when defined by a template.
* Fixed some bugs with the focus keyword in the first paragraph test.
* Fixed display bug in SEO Title column when defined by a template ('Page # of #').
* Fixed a few strict notices that would pop up in WP 3.6.
* Prevent other plugins from overriding the WP SEO menu position.
* Enabled the advanced tab for site-admins on a multi-site install.
* Fixed post save error when page analysis is disabled.
* OpenGraph frontpage og:description and og:image tags now properly added to the frontpage.

#### Enhancements

* Added an HTML sitemap shortcode [wpseo_sitemap].
* Added an XML sitemap listing the author profile URLs.
* Added detection of Yoast's robots meta plugin and All In One SEO plugins, plugin now gives a notice to import settings and disable those plugins.
* Prevent empty image tags in Twitter Cards - props [Mike Bijon](https://github.com/mbijon).
* Add new `twitter:domain` tag- props [Mike Bijon](https://github.com/mbijon).
* Add support for Facebooks new OG tags for media publishers.
* Allow authorship to be removed per post type.

= 1.4.7 =

Release date: 2013-06-14

* Properly fix security bug that should've been fixed in 1.4.5.
* Move from using several $options arrays in the frontend to 1 class wide option.
* Instead of firing all plugin options as function within head function, attach them to `wpseo_head` action, allowing easier filtering and changing.
* Where possible, use larger images for Facebook Opengraph.
* Add several filters and actions around social settings.

= 1.4.6 =

Release date: 2013-04-05

* Fix a possible fatal error in tracking.

= 1.4.5 =

Release date: 2013-04-05

* Bug fixes:
* Fix security issue which allowed any user to reset settings.
* Allow saving of SEO metadata for attachments.
* Set the max-width of the snippet preview to 520px to look more like Google search results, while still allowing it to work on lower resolutions.

#### Enhancements
* Remove the shortlink http header when the hide shortlink checkbox is checked.
* Added a check on focus keyword in the page analysis functionality, checking whether a focus keyword has already been used before.
* Update how the tracking class calculates users to improve speed.

= 1.4.4 =

Release date: 2013-03-19

* Fix changelog for 1.4.3

#### Bugfixes

* Fix activation bug.
* i18n
* Updated es_ES, id_ID, he_IL.

= 1.4.3 =

Release date: 2013-03-13

#### Bugfixes

* Register core SEO menu at a lower than default prio so other plugins can tie in more easily.
* Remove alt= from page analysis score divs.
* Make site tracking use the site hash consistently between plugins.
* Improve popup pointer removal.

= 1.4.2 =

Release date: 2013-03-07

#### Bugfixes

* Made the sitemaps class load in backend too so it always generates rewrites correctly.
* Changed &gt; to /&gt; in class-twitter.php for validation as XHTML.
* Small fix in metabox CSS for small screens (thx [Ryan Hellyer](http://ryanhellyer.net)).
* Load classes on plugins_loaded instead of immediately on load to allow WPML to filter options.
* i18n
* Updated bs_BA, cs_CZ, da_DK, de_DE, fa_IR, fr_FR, he_IL, hu_HU, id_ID, it_IT, nl_NL, pl_PL, pt_BR, ru_RU and tr_TR

= 1.4.1 =

Release date: 2013-02-28

* i18n:
* Updated .pot file
* Updated bg_BG, bs_BA, cs_CZ, fa_IR, hu_HU, pl_PL &amp; ru_RU

#### Bugfixes

* Focus keyword check now works again in all cases.
* Fix typo in Video SEO banner.

#### Enhancements
* Don't show banners for plugins you already have.

= 1.4 =

Release date: 2013-02-27

* i18n &amp; documentation:
* Updated Hebrew (he_IL)
* Updated Italian (it_IT)
* Updated Dutch (nl_NL)
* Updated Swedish (sv_SE)
* Updated some strings to fix typos.
* Removed affiliate links from readme.txt.

#### Bugfixes

* Fixed a bug in saving post meta details for revisions.
* Prevent an error when there are no posts for post type.
* Fix the privacy warning to point to the right place.

#### Enhancements
* Slight performance improvement infunctionality by not resetting query when its not needed (kudos to @Rarst).
* Slight performance improvement in options call by adding some caching (kudos to @Rarst as well).
* Changed inner workings of search engine ping, adding YOAST_SEO_PING_IMMEDIATELY constant to allow immediate ping on publish.
* Changed design of meta box, moving much of the help text out in favor of clicking on a help icon.
* Removed Linkdex branding from page analysis functionality.

= 1.3.4.4 =

Release date: 2013-01-14

* Bug with revisions in XML sitemap for some weird combinations.
* Improved logic for rel=publisher on frontpage.
* Allow variables in meta description for post type archive.
* Improved counting of images for page analysis.
* updated Turkish (tr_TR)
* updated Russian (ru_RU)
* updated Indonesian (id_ID)
* updated French (fr_FR)
* updated Czech (cs_CZ)
* added Japanese (ja)

= 1.3.4.3 =

Release date: 2013-01-07

* Regex annoyances anyone? Sigh. Bug fixed.

= 1.3.4.2 =

Release date: 2013-01-07

* Added missing filter for meta box priority.
* Fixed bug in JS encoding.

= 1.3.4.1 =

Release date: 2013-12-17

* Bug in page analysis regex.

= 1.3.4 =

Release date: 2013-12-17

* Fix bug in custom field value retrieval for new drafts.
* Fix bug in meta box value for checkboxes (only used currently in News extension).
* Remove redirect added in 1.3.3 as it seems to cause loops on some servers, will investigate later.
* Add option to filter `wpseo_admin_pages` so more pages can use WP SEO admin stylesheets.
* Prevent notice for images without alt tags.
* Use mb_string when possible.

= 1.3.3 =

Release date: 2013-12-12

* Properly `$wpdb-&gt;prepare` all queries that need preparing.
* Fix wrong escaping in admin pointers.
* Make %%currentdate%% and %%currenttime%% variables respect WP date format settings.
* Add %%currentday%% format.
* Force remove Jetpack OpenGraph.
* Fix the weird addition of `noindex, nofollow` on URLs with ?replytocom that was added in 3.5.
* Force XML sitemap to be displayed on the proper domain URL, so XSLT works.

= 1.3.2 =

Release date: 2013-12-11

* Updated wordpress-seo.pot
* Updated Turkish (tr_TR) filename.
* Updated Spanish (es_ES) translation.
* Fixed bug where non-admin users couldn't save their profile updates.
* Fixed bug with the same OpenGraph image appearing multiple times.
* Fixed bug that would prevent import and export of plugin settings.
* Try to do a redirect back after saving settings.
* Properly allow for attachment pages in XML sitemaps, default them to off.
* Fixed annoying bug where checkboxes wouldn't display as "checked" even when the value was set to true.
* Show post type name and taxonomy name (as opposed to label) next to labels in XML sitemap settings to more easily identify post types and taxonomies.
* Switch tracking to a daily cronjob instead of an admin process to prevent tracking from slowing down admin interface.
* Focus keyword detection now properly works for diacritical focus keywords as well.
* Properly apply filters to meta desc and titles in admin grid.
* Properly detect new versions of Facebook plugin too.
* Allow changing of the number of posts per XML sitemap, to prevent memory issues on certain installs.

= 1.3.1.1 =

Release date: 2012-12-10

* Some of that escaping was too aggressive.

= 1.3.1 =

Release date: 2012-12-08

* Fix somewhat too aggressive escaping of content.
* Added notice text for non-existing .htaccess file / robots.txt file.

= 1.3 =

Release date: 2012-12-07

* Long list of small fixes and improvements to code best practices after Sucuri review. Fixes 3 small security issues.
* Updated .pot file
* Updated Danish (da_DK), Indonesian (id_ID), Chinese (zh_CN), Russian (ru_RU), Norwegian (nb_NO), Turkish (tr_TK), Hebrew (he_IL) and Persian (fa_IR).
* Added Arabic (ar), Catalan (ca) and Romanian (ro_RO).

= 1.2.8.7 =

Release date: 2012-10-12

* Fixed %%category%% and %%tag%% and some other variables that weren't working since 1.2.8.6.

= 1.2.8.6 =

Release date: 2012-10-08

* Revert gplus changes in 1.2.8.5 that were causing issues.
* Fix a tracking timeout.
* Fix a bunch of notices throughout variables functions.

= 1.2.8.5 =

Release date: 2012-09-27

* Fixed a bug for MultiSite due to a missing attribute in calling `get_admin_url`.
* Updated Hebrew (he_IL), Dutch (nl_NL) French (fr_FR), Czech (cs_CZ), Italian (it_IT), Brazilian Portuguese (pt_BR).
* Added Norwegian (nb_NO) and Portuguese (pt_PT).
* Added a `wpseo_robots` filter for the robots meta tag.
* Fixed integration with the [Facebook plugin](https://wordpress.org/plugins/facebook).

= 1.2.8.4 =

Release date: 2012-09-09

* Fix for double title issues with themes that filter `wp_title`, by having WP SEO filter a bit later in the process (but no too late because the genesis
