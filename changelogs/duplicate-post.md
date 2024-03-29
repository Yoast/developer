= 4.5 =

Release date: 2022-06-28

#### Enhancements

* Improves the impact of the plugin on the performance of the site by avoiding useless calls on the `gettext` filter.

#### Bugfixes

* Fixes a bug where a section in the Classic Editor's submitbox would be displayed with incorrect margins.

#### Other

* Sets the WordPress tested up to version to 6.0.

= 4.4 =

Release date: 2022-01-25

#### Enhancements

* Converts the upgrade notice into a welcome notice for first-time users.

#### Bugfixes

* Fixes a bug where HTML tags in a Custom HTML block would be removed when republishing a scheduled Rewrite & Republish copy.
* Fixes a bug where the button style would be broken in the Classic Editor.
* Fixes a bug where a fatal error would be triggered in the Widgets page in combination with some themes or plugins.

#### Other

* Sets the WordPress tested up to version to 5.9.

= 4.3 =

Release date: 2021-12-14

#### Bugfixes

* Fixes a bug where Rewrite & Republish copies could be displayed and queried in the front end.

= 4.2 =

Release date: 2021-11-18

#### Bugfixes

* Fixes a bug where some strings where not translated.
* Fixes a bug where metadata went missing for duplicate posts created by the Rewrite & Republish feature. Props to [ocean90](https://github.com/ocean90).
* Fixes a bug where the plugin would not initialize if installed via composer.

#### Other

* Replaces Mailchimp with MailBlue newsletter integration.
* Improved compatibility for PHP 8.0.
* Improved sort order of the taxonomies list on the options page.
* Most plugin files have been renamed. If you extend this plugin of include any of the files from the plugin from within your own plugin, you may need to adjust the file name used in the `include`/`require` statement.

= 4.1.2 =

Release date: 2021-03-23

#### Enhancements

* Allows plugins such as ACF to add fields to the "Compare changes" screen for Rewrite & Republish.

#### Bugfixes

* Fixes a bug where the "Compare changes" screen for the Rewrite & Republish feature displayed a broken layout in WordPress 5.7.
* Fixes a bug where a post type enabled by filter couldn't be copied.
* Fixes a bug where the "Show links in" settings were reset to the default value on version upgrade.

= 4.1.1 =

Release date: 2021-01-27

#### Bugfixes

* Fixes a bug where editing posts with Elementor could trigger a fatal error.

= 4.1 =

Release date: 2021-01-27

#### Enhancements

* Improves compatibility between Elementor and the Rewrite and Republish feature.

#### Bugfixes

* Fixes a bug where Rewrite & Republish notices would be shown for regular copies.
* Fixes a bug where the original post of a Rewrite & Republish copy was listed in the Yoast SEO Premium link suggestions.

#### Other

* Disables the plugin for WooCommerce products and introduces filter for enabled post types.

= 4.0.2 =

Release date: 2021-01-14

#### Bugfixes

* Fixes a bug where errors or notices could be triggered when using the plugin with some other plugins or custom code.

= 4.0.1 =

Release date: 2021-01-12

#### Bugfixes

* Fixes a bug that caused a fatal error when used with some plugins.

= 4.0 =

Release date: 2021-01-12

#### Enhancements

* Introduces the Rewrite & Republish feature, offering you the possibility to update a post/page without taking it offline or having to take extra steps. This feature is currently not available when Elementor is active on your site.
* Introduces an integration with the Block Editor.
* Introduces new settings to individually enable/disable the `New Draft`, `Clone` and `Rewrite & Republish` links.

= 3.2.6 =

Release date: 2020-09-17

* Compatibility with WordPress 5.5
* Fixed bug about copying comments in WordPress 5.5
* Check user permission when adding option to the bulk actions dropdown list
* Improved update notice to be displayed only on selected screens when updating from &lt; 3.2.5
* Updated template tag documentation link
* Added missing gettext to "Subscribe" button

= 3.2.5 =

Release date: 2020-07-07

* First release from Yoast
* Accessibility improvements to the settings page
* Accessibility improvements to the "Show original item" metabox
* Accessibility improvements to the "Show original item" check box in Quick Edit
* duplicate_post_blacklist_filter deprecated in favor of duplicate_post_excludelist_filter

= 3.2.4 =

Release date: 2019-12-10

* Options to show original item in post list (in a column or alongside post states) or in a metabox in the edit screen
* Accessibility improvements
* Small other fixes

= 3.2.3 =

Release date: 2019-07-10

* Fixes incompatibility with previous versions of CF7
* Now roles without edit_posts capability but having equivalent capability for custom post types can be allowed to copy
* Small other fixes to bugs that could lead to incompatibilities with WPML and others

= 3.2.2 =

Release date: 2018-04-13

* The "Admin bar" option shows the link in the post edit screen too, so you can use the plugin with Gutenberg enabled
* Option for "Slug" not set by default on new installations
* Better display of icon in the Admin bar on small screens

= 3.2.1 =

Release date: 2017-11-25

* Fixing some issues of the 3.* trunk before major redesign
* Fixes issue when upgrading on multisite
* Improved compatibility with WPML + page builders, thanks to WPML team
* Prevents creating a revision immediately after the cloning

= 3.2 =

Release date: 2017-04-04

* new website with extensive documentation
* WPML compatibility, thanks to WPML team
* improved Jetpack compatibility (Subscriptions, Markdown)
* small changes to hooks
* improved security with nonces
* various small fixes

= 3.1.2 =

Release date: 2016-12-13

* Fix for custom fields not copied

= 3.1.1 =

Release date: 2016-12-13

* Fix for nasty update nag (plus a failsafe checkbox)

= 3.1 =

Release date: 2016-12-13

* Bulk clone action added (WP 4.7+)
* Wildcards enabled for custom fields to skip
* Options to copy post author, post format (moved from taxonomies), menu order, post template
* Check publish_posts/publish_pages capability to prevent Contributors from publishing by cloning
* Using wp_slash (WP 3.6+) or a better workaround (WP 4.4+) on the post and its meta, should also fix some compatibility issues
* Check if admin bar is showing before enqueueing CSS
* Probable fix for repeated clone bug
* Other minor bugs fixed

= 3.0.3 =

Release date: 2016-10-29

* Notices in admin after copying
* Fixes warning in custom post type archives
* Uses site options for version and notice
* Minor fixes

= 3.0.2 =

Release date: 2016-10-18

* Can now be enabled for every custom post type with visible UI (not just public ones)
* Admin bar CSS only enqueued when needed
* New "Donate" button
* Fixes for minor bugs and typos

= 3.0.1 =

Release date: 2016-10-09

* Fixes the issues for people upgrading from an older version

= 3.0 =

Release date: 2016-10-09

* Settings page redesigned
* More options to enable/disable copy of every part of a post
* Enable/disable cloning for every custom post type
* Jetpack Publicize compatibility
* Fixed a possible XSS
* Fixed other little bugs
* Translations removed to use WP.org's official translation project
* Checked PHP 7 compatibility

= 2.6 =

Release date: 2014-04-27

* PHP 5.4 (Strict Standards) compatible
* Fixed possible XSS and SQL injections
* other bugs
* Updated and added translations
* Tested up to WP 3.8.1

= 2.4.1 =

Release date: 2014-02-22

* Fixed regression about draft permalinks
* Fixed bug with guid
* Don't clone to_ping and pinged (maybe there will be an option about those later)

= 2.4 =

Release date: 2012-04-29

* New option to clone the children of the original page
* Licence changed to GPLv2 or later
* Fixed publishing dates for drafts
* Fixed bug with prefix/suffix
* Translation project moved to GlotPress

= 2.3 =

Release date: 2012-04-06

* Added options to choose where to show the "Clone" links
* Clone attachments (i.e. references in the DB, not physical files)
* Fix for untranslated user roles
* Some other fixes (missing checks, PHP warnings and errors, etc.)

= 2.2 =

Release date: 2012-02-01

* Fix for problems when copying serialized meta fields
* Fix for multiple _dp_original field
* Removed deprecated parameter when adding options

= 2.1.1 =

Release date: 2012-01-04

* Can't rely on activation hook for upgrade, this caused problems with new options

= 2.1 =

Release date: 2012-01-03

* Even more code cleaning (no more custom queries, using WP API)
* Term order preserved when copying
* Stopped using deprecated User levels, now it uses Roles and Capabilities
* 'Copy to a new draft' link in admin bar
* duplicate_post_get_original template tag
* Settings link in plugin list, 'Donate' and 'Translate' link in option page

= 2.0.2 =

Release date: 2011-12-12

* Fixed bug for permalinks
* Two links on posts list: clone immediately or copy to a new draft to edit.
* Tested on multisite mode.

= 2.0.1 =

Release date: 2011-12-08

* Fixed bug for action filters
* New option: you can choose if cloning from the posts list must copy the post status (draft, published, pending) too.

= 2.0 =

Release date: 2011-12-08

* WP 3.3 compatibility (still not tested against multiblog feature, so beware)
* Minimum WP version: 3.0
* Code cleanup
* Immediate cloning from post list
* Added options for taxonomies and post excerpt
* Added suffix option
* Added template tag

= 1.1.2 =

Release date: 2011-04-08

* WP 3.1.1 compatibility (still not tested against multiblog feature, so beware)
* Added complete Polish language files

= 1.1.1 =

Release date: 2010-06-30

* Plugin split in two files for faster opening in Plugins list page
* Fix conflicts with a few other plugins
* Added Dutch language files

= 1.1 =

Release date: 2010-06-24

* WP 3.0 compatibility (not tested against multiblog feature, so beware)
* Option page: minimum user level, title prefix, fields not to be copied, copy post/page date also
* Added German, Swedish, Romanian, Hebrew, Catalan (incomplete) and Polish (incomplete) language files

= 1.0 =

Release date: 2010-06-15

* Better integration with WP 2.7+ interface
* Added actions for plugins which store post metadata in self-managed tables
* Added French and Spanish language files
* Dropped WP 2.6.5 compatibility

= 0.6.1 =

Release date: 2009-12-03

* Tested WP 2.9 compatibility

= 0.6 =

Release date: 2009-07-21

* Fix for WP 2.8.1
* WPMU compatibility
* Internationalization (Italian and Japanese language files shipped)

= 0.5 =

Release date: 2009-01-09

* Fix for post-meta
* WP2.7 compatibility

= 0.4 =

Release date: 2008-11-23

* Support for new WP post revision feature

= 0.3 =

Release date: 2008-03-01

* Initial version on WP repository
