## 15.5

Release date: 2024-11-05

#### Enhancements

* Avoids a deprecation message on pages with maps regarding asynchronous loading of Google Map API.
* Improves load times on pages with maps, by deferring the load of map-related libraries to not block page rendering.

#### Other

* Bumps the minimum required version of Yoast SEO to 23.8.
* Sets the _WordPress tested up to_ version to 6.7.

## 15.4

Release date: 2024-10-08

#### Enhancements

* Converts the Yoast Address block to use the Blocks V3 API.
* Converts the Yoast Map block to use the Blocks V3 API.
* Converts the Yoast Opening hours block to use the Blocks V3 API.
* Converts the Yoast Store locator block to use the Blocks V3 API.
* Improves the performance of sites with multiple locations, decreasing page load times significantly.

#### Bugfixes

* Fixes a bug where a fatal would occur in the settings when a legacy Google Maps API was used.

#### Other

* Bumps the minimum required version of Yoast SEO to 23.6.
* Deprecates the WooCommerce Local Pickup functionality.
* Sets the minimum supported WordPress version to 6.5.
* Sets the _WordPress tested up to_ version to 6.6.

## 15.3

Release date: 2024-02-06

#### Enhancements

* Adds contact phone number and email to the organization schema settings.

#### Bugfixes

* Fixes a bug where primary location data would be used in the schema when the location status was not publish.

#### Other

* Sets the minimum required Yoast SEO version to 22.0.

## 15.2

Release date: 2024-01-23

#### Enhancements

* Ensure compatibility with Yoast SEO 21.9 by flushing the the rewrite rules when the Location type is registered.

#### Bugfixes

* Fixes a bug where a PHP notice about the use of an outdated WooCommerce version would appear.
* Fixes a bug where calling a deprecated function would lead to a fatal error.

#### Other

* Improves discoverability of the security policy.
* Makes the plugin compatible with PHP 8.3.
* Sets the minimum supported WordPress version to 6.3.

## 15.1

Release date: 2023-10-31

#### Enhancements

* Introduces a new way of retrieving translations by utilizing the TranslationPress service. Instead of shipping all translations with every release, translations will now be loaded on a per-install basis, tailored to the user's setup. This leads to smaller plugin releases and less bloat on the user's server.

#### Bugfixes

* Fixes a bug where address shortcode would not be recognized by Local schema assessment when the shortcode was added in Classic editor.
* Fixes a bug where the organization logo would be used as the default location logo when all locations are part of the same business.

#### Other

* Bumps the minimum required Free version to 21.5.
* Introduces the option to use the `composer/installers` v2 when this package would be required via [WP]Packagist.
* Sets the minimum supported WordPress version to 6.2.
* Sets the WordPress tested up to version to 6.4.

## 15.0

Release date: 2023-05-23

#### Other

* Security: Adds sanitization to `wpseo_local_show_map` method.
* Sets the minimum required Yoast SEO version to 20.8.
* Sets the minimum supported WordPress version to 6.1.

## 14.9

Release date: 2023-04-11

#### Bugfixes

* Fixes a bug where location name and URL would not be correctly escaped when displaying a map block in the frontend.
* Fixes a bug where the settings would be displayed with the wrong style when using Yoast SEO 20.3+.

#### Other

* Drops compatibility with PHP 5.6, 7.0 and 7.1.
* Removes the _Transport_ page from the deprecated WooCommerce integration.
* Sets the minimum required Yoast SEO version to 20.5
* Sets the WordPress "tested up to" version to 6.2.
* Fixes security issues.

## 14.8

Release date: 2023-02-21

#### Bugfixes

* Fixes a bug where a deprecation warning would be thrown when clustering locations in Google Maps.
* Fixes a bug where a console error would be thrown because of the Google Maps API requiring a callback.

#### Other

* Adds a deprecation notice for "Local store pickup" in all pages and a warning before enabling it, because WooCommerce will offer a Local Pickup option natively since version 7.4.
* Fixes some links and their copy following the release of the new settings UI in Yoast SEO.
* Sets the minimum required version of Yoast SEO to 20.1.
* Sets the minimum supported WordPress version to 6.0.

## 14.7

Release date: 2022-11-08

#### Bugfixes

Fixes a bug where location-specific assessments would also appear under the Readability analysis tab when the Cornerstone content toggle would be switched on.

#### Other

* Bumps the Yoast SEO minimum required version to 19.10.
* Ensures compatibility with the High Performance Order Storage feature in WooCommerce 7.1+.
* Sets the WordPress “tested up to” version to 6.1.

## 14.6

Release date: 2022-08-09

#### Enhancements

* Adds support for all the `CivicStructure` Schema types. You can now set a location to be, for example, a museum, city hall, church, or any other place of worship and benefit from all Yoast Local SEO has to offer!
* Ensures compatibility with the front-end SEO inspector introduced in Yoast SEO Premium 19.1.

#### Other

* Sets the minimum required Yoast SEO version to 19.5.
* Sets the minimum supported WordPress version to 5.9.

## 14.5

Release date: 2022-07-12

#### Enhancements

* Updates the Schema manipulation to follow the new best-practice for the `@id` of the `WebPage` piece introduced by Yoast SEO 19.3.

#### Other

* Sets tested up WordPress version to 6.0.
* Sets the minimum required Yoast SEO version to 19.3

## 14.4

Release date: 2022-04-19

#### Bugfixes

* Fixes a bug where a database error would be thrown when using the "enhanced search" functionality of the plugin.
* Fixes a bug where 24 hour notation would not work on the frontend for single locations.
* Fixes a bug where "Open 24 hours" would not display on the frontend for single locations.

#### Other

* Sets the minimum required Yoast SEO version to 18.6
* Sets the minimum required WordPress version to 5.8.

## 14.3

Release date: 2022-01-25

#### Other

* Disables URL assessments for locations for Japanese because slugs are frequently written in Latin characters, rather than in Japanese characters.
* Sets the minimum required Yoast SEO version to 18.0.
* Sets the WordPress tested up to version to 5.9.

## 14.2

Release date: 2021-11-16

#### Other

* The plugin will no longer block installation on PHP 8.0+ when installed via Composer.

## 14.1

Release date: 2021-08-26

#### Bugfixes

* Fixes a bug where the <em>Article type</em> and <em>Page type</em> dropdowns in the Schema tab of the Yoast SEO sidebar in the Elementor editor would show the post type as <em>None</em> when editing a <em>Location</em>, instead of the plural label as set in the Local SEO settings.

## 14.0

Release date: 2021-07-13

#### Enhancements

* Adds key/value pairs of all Local SEO meta tags to our REST API.
* Introduces a fallback when a primary location was set and is removed: it now falls back to a single location when only one location is left.

#### Bugfixes

* Fixes a bug where the current location could be selected in the "Copy data from another location" dropdown.
* Fixes a bug where Local SEO would show non-functioning buttons in the text editor in Elementor.

#### Other

* Replaces all references to the Yoast Knowledge Base by references to the Yoast help center.
* Sets the minimum required WordPress SEO version to 16.7.

## 13.9

Release date: 2021-03-23

#### Enhancements

* Introduces shared properties for businesses with multiple locations. With shared properties, you can fill out business information and opening hours that apply to multiple locations.
* Introduces an option to select a primary location. This will be reflected in the Schema output.
* Renames the 'Checkout text' field title to 'Thank you text' because the text will be shown on the Thank you page.
* Improves the image upload functionality in the metabox on the Locations Post type.
* Adds an alert to the Opening hours tab in the metabox when the opening hours are hidden because of the corresponding global setting.
* Adds an admin notice when the company name or logo isn't set.
* Adds an alert to the business settings or metabox when the zipcode or country is not set.

#### Bugfixes

* Fixes a bug where the forms inside the Map, Address, Opening hours and Store locator shortcode modals were not shown in their entirety without scrolling, even though there was enough space in the modal.
* Fixes a bug where list styling was applied to Local pickup options in the cart.
* Fixes a bug where the radio button for Local pickup in the checkout would be styled incorrectly.
* Fixes a bug where the widget form would allow the default search radius for the Storelocator Form Widget to be set to `0`, which would then automatically reset to the default radius of `10`.

#### Other

* Improves security by improving input validation and output escaping in the Show Address widget.

## 13.8

Release date: 2020-12-02

#### Other

* Disables Local SEO in the Elementor editor as compatibility for Local SEO has not been implemented yet.

## 13.7

Release date: 2020-10-27

#### Other

* Improves security by improving input validation and output escaping in the opening hours widget.

## 13.6

Release date: 2020-09-29

#### Enhancements

* Added the address to the output of the local pickup option in WooCommerce.
* Move Local Blocks to their own category.
* Remove redundant version parameters from the asset URLs.
* Improved the preview with real address data when available.

#### Bugfixes

* Show correct permalink structure when there is a prefix to the %post_name%.
* Fixes a bug where "google is not defined" error was thrown in the console when not using a map in the Store Locator.
* Fixes a bug where no plugin icon and compatibility data would be displayed on the plugins update screen.

## 13.5

Release date: 2020-08-18

#### Enhancements

* Added block previews for WordPress 5.5.

#### Bugfixes

* Changed ambiguous toggle values.
* Fixed wrongfully aligned input fields for the map block.
* Fixes a bug where a PHP notice would be thrown on the post edit screen when the single location setting was enabled
* Fixes a bug where a nested array would be output as the organization schema’s type when the `wpseo_schema_organization` filter was used to return an array of types.

#### Other

* Several changes and updates to the code base to make it more secure.
* Enables tracking when activating Yoast SEO: Local. Previously tracking was always on. It can now be disabled in the configuration wizard.
* Removed an old reference to Yoast SEO: Local for WooCommerce

## 13.4

Release date: 2020-07-21

#### Bugfixes

* Fixed an issue that caused the "Hide opening hours option" toggle in "Opening hours" settings tab to sometimes show incorrect forms.
* Fixed an issue where the default organization logo would not be used in local business schema when a specific location logo is not defined.
* The checkout text set in WooCommerce settings now shows when expected.
* The Store Locator now accurately limits the maximum number of results based on the parameters set.
* Fixed a bug where SEO analysis would incorrectly display a warning for the URL when a location's business information contains a city of which the name contains special characters.
* Fixed a bug that could cause browser freezes when clicking opening hour time format toggles.

## 13.3.1

Release date: 2020-07-13

#### Bugfixes

* Fixes a bug that caused WooCommerce templates to be loaded even if local pickup was disabled triggering a JavaScript console error.

## 13.3

Release date: 2020-06-23

#### Bugfixes

* Fixes a bug where a WooCommerce checkout script would unnecessarily load on pages other than cart and checkout.
* Fixes a typo in Business Info settings.
* When searching with the store locator the category filter now works as expected.
* Remove `code` elements from tooltips to make them like the default WooCommerce tooltips.

## 13.2

Release date: 2020-06-09

#### Enhancements

* The location post type is now filterable using `wpseo_local_post_type`.

* Schema:

* Removed the name property from organization list.

#### Other

* Several code quality improvements.

## 13.1

Release date: 2020-05-13

#### Bugfixes

* Fixed a bug that caused selected shipping methods to disappear when selecting 'ship to other address'.

## 13.0

Release date: 2020-04-28

#### Bugfixes

* Fixed a bug that caused the .csv importer to get stuck in an infinite loop.

#### Other

* Updated the minimum required version of Yoast SEO to 14.0.
* Use the new Indexables architecture for geo presenters and schema output.

## 12.9

Release date: 2020-03-31

#### Bugfixes

* Fixed a bug that caused a single location not to show up in the local store pickup at a WooCommerce shopping basket or checkout page.
* Fixed a bug that caused a map not to show up when centering on all locations.
* Fixed a bug that caused a stand alone store locator widget not to return any results.
* Fixed a bug that caused the 'open now' functionality to not work when using multiple opening hours.

## 12.8.1

Release date: 2020-03-18

#### Bugfixes

* Fixes a bug where all JavaScript and CSS files were missing.

## 12.8

Release date: 2020-03-17

#### Bugfixes

* Fixed a bug that caused the enhanced search to always be on, disregarding the actual setting.
* Removed the table sorter script that threw a console error on the sitemap.xml pages.
* Fixed a bug that caused possible undefined index on widget titles.

## 12.7

Release date: 2020-02-04

#### Enhancements

* The UI and UX for entering an API key and calculating location's lat/lng is improved.
* Disabled the person/company select box in Yoast SEO when Yoast SEO: Local is active.

#### Bugfixes

* Fixed a bug that caused possible locations not to be found in the store locator even when the default country was set.
* Fixed a bug that caused the store locator to not always give a reliable result.

#### Other

* Updated the address assessment notification.

## 12.6.1

Release date: 2020-01-07

#### Bugfixes

* Fixes a bug where a fatal error would be thrown on activation.

## 12.6

Release date: 2020-01-07

#### Bugfixes

* Fixes a bug where incorrect locations metadata would be saved on multisite environments in combination with MultilingualPress.
* Fixed a bug that caused store locator scripts to be included on every single page.

#### Other

* Removed duplicate tab and content title for the API key and WooCommerce settings tabs.
* Replaced deprecated namespaced objects for block editor components.
* Dropped IE11 support and therefore removed WP polyfills.

## 12.5

Release date: 2019-12-10

#### Bugfixes

* Fixed a bug that caused business types for a single location to not be saved correctly.
* Fixed a bug that caused shortcodes with no ID set to show the most recent location.

#### Other

* Changed descriptive text on the "Opening hours"-tab to make its meaning more clear.

## 12.4

Release date: 2019-11-26

#### Enhancements

* Use the `WPSEO_Options` class to save and sanitize options.

* Bugs:

* Removed checking of default value for options on every page load.
* Removed checking of Yoast SEO company settings on each page load.

* UI:

* Set select boxes in widgets to 100% (max)width.

#### Other

* Replaced the HelpScout beacon on the Local SEO admin page.
* Bumped minimum Yoast SEO version to 12.6.

## 12.3

Release date: 2019-11-13

* Schema:

* Removed subOrganisation from schema output since it's no longer valid.

#### Bugfixes

* Fixed a bug where an empty geo.position could be output when lat/long isn't set in the settings.
* Fixed a bug that caused scheduled posts to not show location meta data in the admin area.
* Fixed a bug that caused location selects in widget to display no locations.
* Fixed a bug that caused select2 to no longer work if the Yoast Meta Box was hidden on a single location page.
* Fixed a bug that caused the Yoast SEO image to be shown in the meta box when no image was chosen.

* UI:

* Fixed issues that caused misalignment of some elements in the Yoast SEO: Local plugin when updating to WordPress 5.3.

## 12.2.1

Release date: 2019-10-23

#### Bugfixes

* Fixed a fatal error that occurred on wp-activate.php.

## 12.2

Release date: 2019-10-15

#### Enhancements

* Copy data from another location is now a Select2 box, which makes it easier to search for other locations.
* Shows a floating `Save changes` button on the Local SEO admin pages when the normal button is not visible in the browser window.

* UI changes:

* The description concerning 2 sets of opening hours now only shows when this option is enabled.
* The question mark, indicating there is a help description for a field, is now in accordance with the Yoast SEO plugin styling.
* Better alignment of the 'This is no physical address' label on a locations page.

#### Bugfixes

* Fixed a possible undefined index error when a location has a weekday set to 'open 24 hours'.
* Fixed a bug that caused the route planner never to show up under a map, even when enabled.
* Fixed issue where fields might break out of the meta box on smaller screens.
* Prevent admin-rtl.css console error. Enqueueing of this file has been removed, because it does not exist.
* Fixed a bug that caused the VAT ID toggle not to work in the address block.
* Removed quoting of simple DB placeholders.
* Prevent upload button triggering on hitting return when focused on an input field in the meta box.

#### Other

* Changed label from 'open 24h' to 'open 24 hours'.
* Added additional sanitation for setting and meta box inputs.
* The calculation of the timezone is now only triggered if the lat/lng actually changes.

## 12.1.2

Release date: 2019-09-30

#### Enhancements

* Make all custom marker functionality look and work the same throughout the plugin.

#### Bugfixes

* Fixed a bug that made it impossible to set a custom marker on the settings page.

## 12.1.1

Release date: 2019-09-24

#### Bugfixes

* Fixed a bug that caused short code buttons in the classic editor to no longer show up when using a single location setup.
* Fixed a bug that caused users of a version of WordPress before 5.0 to get errors when using the new geocoding functionality.
* Fixed a bug where the options page and location pages don't load correctly when timezone format was saved incorrectly in the database.
* Fixed a bug that caused the geocoding to trigger on the term edit page, which caused console errors.

## 12.1

Release date: 2019-09-17

#### Enhancements

* Improve the UX and UI for our meta box on the locations page.

* The design now matches the Yoast SEO style.
* Labels are updated in accordance to the ones on the settings pages.
* Settings are now rearranged under separate tabs for a better overview.

* If no API key is supplied, the map settings now show a notification.
* Removed server side geocoding and timezone determination in favor of client side. A server side key is no longer necessary.

#### Bugfixes

* The notification for the new Google Maps API is now only shown when applicable.

* Translations:

* The plugin is now available with Hungarian translation.

#### Other

* Deprecated `wpseo_geocode_address()`.

## 12.0

Release date: 2019-09-03

#### Enhancements

* Improved latitude / longitude description.
* Improved location detection description.
* Updated warning messages to match the Yoast SEO style.
* Changed labels for metric and unit system to kilometer and miles.
* Changed label from 'Allow scrolling of map' to 'Allow zoom by scroll'.
* Location URL now gets the URL of the site by default.

#### Bugfixes

* Prevent a custom marker from breaking out of the settings panel if it exceeds the width of the panel.
* Fixed typo's. Changed e-mail address to email address.

#### Other

* Removed all instances of the 'notes' fields from the plugin.

## 11.9.1

Release date: 2019-08-21

#### Bugfixes

* Fixed a bug where the incorrect version would be shown in the plugins overview.

## 11.9

Release date: 2019-08-20

#### Enhancements

* If an API key is set from a constant in the `wp-config.php` don't show the input field for that, but display a notification, telling the user that the API key is set through a constant.

#### Bugfixes

* Fixed a bug that caused the map settings tab to show an empty panel when no API key is set. It now shows a notification.

#### Other

* Rename the API Settings tab to Api Key.
* The API key tab now shows a new field to use. Google changed the way keys are used. New users will only see this field. Users that have existing keys can still use them the old way, but are encouraged to use the new field.

## 11.8.1

Release date: 2019-08-06

#### Bugfixes

* Added a missing CSS class in the admin area that caused the white panes on the settings page to be missing.

## 11.8

Release date: 2019-08-06

#### Enhancements

* The settings page has gotten an overhaul.
* Settings are now categorized under tabs to make it easier to find them.
* The UI has been updated to correspond to the Yoast SEO look and feel.
* Settings only appear when they are available. For instance: Settings under 'advanced settings' only show up when multiple locations are used.

#### Bugfixes

* Some fields in the Yoast SEO: Local settings were not sanitized properly which could lead to an XSS vulnerability. This was only the case when logged in as Administrator or SEO Manager.
* Fixed a bug that caused the content analysis not to recognize an address block or short code.
* Add default values for settings that caused possible notices.

#### Other

* Cleaned up translatable strings by removing unnecessary capitalization.
* Added some missing words in strings on the settings pages.


## 11.7

Release date: 2019-07-23

#### UX / UI

* Relabeled payment accepted to payment methods accepted.
* Add description to define the purpose of AreaServed.
* Changed price range to price indication.

#### Bugs

* Fixed a bug that caused the switch between 12h and 24h notation not to work correctly.
* Business type help icon wasn't working. It is now.

#### Other

* Removed x-robots-tag from locations.kml to prevent a notification in Google Search Console stating that locations.kml can not be indexed.

## 11.6

Release date: 2019-07-09

#### Enhancements

* Added explanation to open and closed labels.
* Changed label from default country to primary country to better explain it's purpose.
* Added help texts to business type.

#### Other

* Removed company name and logo from Yoast SEO: Local general settings. These can now be found under the Yoast SEO settings.

## 11.5

Release date: 2019-06-25

#### Enhancements

* Add inputs for paymentAccepted and currenciesAccepted and output them for Local Businesses in the json+ld schema.

#### Bugfixes

* Fixed a bug that caused the route planner not so show up when using the wpseo_map shortcode.

#### Other

* Clarified the explanation for the multiple locations setting on the settings page.

## 11.4

Release date: 2019-06-12

#### Enhancements

* Use the first opening and last closing time in the JSON+LD schema output.
* Changed the opening hours time format in the JSON+LD output to 24 hours notation.
* Consistent opening hours are now consolidated in the JSON+LD output.

## 11.3

Release date: 2019-05-28

#### Enhancements

* Added Select2 to business type fields.
* Added a better description for the general settings to better explain what the settings mean.
* Add a more logic and generic way to select the price range. There are now 5 options varying between $ and $$$$$ to indicate the price range of a business.

#### Other

* Updated the WooCommerce template files to correspond with the most recent WooCommerce native files.
* Updated Select2 version to 4.0.7

## 11.2

Release date: 2019-05-15

#### Enhancements

* Updates the list of business types for structured data output. Users can now select all organisation types in stead of just Local businesses

#### Bugfixes

* Catches a fatal error that occurs in the Opening Hours block and widget when the Time Zone for a location is invalid.

## 11.1

Release date: 2019-04-30

#### Bugfixes

* Fixes a fatal error that would be thrown when using the 'open now' functionality in the opening hours block or widget.
* The location select on the WooCommerce checkout page was breaking out of it's container. We fixed that.

#### Other

* All Facebook Open Graph meta tags are removed, since they are no longer used.

## 11.0

Release date: 2019-04-16

#### Enhancements

* Implemented severe schema changes, hooking into the new Yoast SEO JSON+LD output. Changes include:

* New markup for locations.
* Valid opening hours.
* Option to set locations as not part of one organisation.

* Added show open label for current day to Opening Hours block.

#### Bugfixes

* Fixed an issue that caused the open/closed message to not always work correctly in the opening hours widget for a location in a multi-location setup.
* Fixed an issue that caused 'Local Pickup Allowed' to show a duplicate setting in the admin columns.
* Fixed a fatal error that occurred when saving an API key on a fresh install.
* Changed a `posts_where` filter that in some instances was causing the Woocommerce customer order page to not show their orders.
* Fixed a bug that was causing the Map block to fail loading in the admin area when upgrading from Local SEO 9.7+ to the current version.

#### Other

* Always force Company or Person to Company.

## 10.1

Release date: 2019-04-02

#### Enhancements

* Users can now choose per location whether the time format in which opening hours will be displayed should be 12 or 24 hours notation. If the option is not set, there is a fallback to the default, stored under options.

## 10.0.1

Release date: 2019-03-13

#### Bugfixes

* Fixes fatal error in the opening hours widget.

## 10.0

Release date: 2019-03-12

#### Enhancements

* Show a label in the opening hours after the current day stating if the location is opened. This can be turned on in the widget or by using a this filter: `wpseo_local_show_open_now_label`.

#### Bugfixes

* Prevent days from selecting themselves in the opening hours widget.

## 9.7

Release date: 2019-02-26

#### Enhancements

* When a different shipping address is selected, the local store pickup option will disappear
* API key settings for lat/long calculation are now more clarified and state that an API key first needs to be set before automatic calculation of lat/long can be done.

#### Bugfixes

* To prevent cached shipping results to be shown, WooCommerce's shipping method transients are now cleared when the local store pickup options are saved.

## 9.6.1

Release date: 2019-02-12

#### Other

* Compatibility with Yoast SEO 9.6.1

## 9.6

Release date: 2019-02-12

#### Enhancements

* Opening hours block now shows 'Loading opening hours' label in the editor when loading data.
* When a location needs to be selected, the label 'Please select a location in the sidebar on the right' is shown in the editor. This makes it more clear where the location selector can be found.
* Adds margin to the Location Select dropdown for UI improvement.

#### Bugfixes

* Names of week days were misspelled. They now contain the mandatory capital.

## 9.5

Release date: 2019-01-22

#### Bugfixes

* Locations category sitemap was not generated. It is now. From now on it's only excluded when no categories are available.
* Fixes JS error when no shipping zones were set.
* Fixes undefined index `enhanced_search`

## 9.4

Release date: 2019-01-08

#### Enhancements

* This version introduces two new Gutenberg blocks to work with:

* The opening hours block
* The store locator block

* Blocks are now categorized under 'Yoast Structured Data Blocks'

#### Bugfixes

* Fix a missing line break in the 2nd address line.
* Fix a bug that caused dimension for the store locator map not to work.
* Fix a typo in the custom permalinks description on the settings page.

## 9.3

Release date: 2018-12-18

#### Bugfixes

* Fixed a bug that caused password protected locations to show up.
* Changed the unique identifier in the JSON-LD output to prevent conflicts with the breadcrumbs
* Fixed a undefined variable in localization data.

## 9.2

Release date: 2018-11-20

#### Bugfixes

* The `wp-seo-local-frontend.js` file was included in the footer of every admin page. It is now only included when it's needed.
* Prevent unnecessary geocoding calls.

#### Enhancements

* Yoast SEO: Local SEO for WooCommerce has been integrated into Local SEO.

* You can use your Yoast SEO Local locations as pickup store in your WooCommerce shop.
* Adds a screen in the WooCommerce section which shows you an actual overview of the orders which should be delivered at your pickup store(s).
* Configure a pick up location as tax address.
* If you had a Local SEO for WooCommerce license, this has been converted into a Local SEO license.

* Read more about it in this KB article: [https://yoa.st/local-woo-local](https://yoa.st/local-woo-local).

## 9.1

Release date: 2018-11-06

#### Bugfixes

* Fixed a bug that caused the 2nd address line no to be outputted in the .kml file.
* Fixed a bug that caused the business logo's not to show up when showing all location addresses.
* Show the location category taxonomy in the Gutenberg sidebar.
* Fixed a bug where a PHP warning would be displayed when `php_uname` has been disabled for security reasons.

#### Other

* Added description to clarify the used of the business image in the Yoast SEO: Local settings.

## 9.0

Release date: 2018-10-23

#### Bugfixes

* Fixed a bug that caused custom classes not to be added to the address- and map-block output.
* Fixed a bug that prevented a business logo from being shown in the address shortcode and block.
* `[wpseo_map id="all"]` and `[wpseo_address id="all"]` now actually show all locations instead of a maximum of 10.

## 8.4

Release date: 2018-10-09

#### Bugfixes

* Fixed a bug that caused the Yoast SEO: Local enhanced search not to work.
* Fixed a bug that made the message that a location is open 24/7 not show up.

#### Enhancements

* The enhanced search can now be enabled / disabled from the settings page.

#### Other

* Change the json-ld output to better reflect the desired output for schema.org for opening hours for 24h and 24/7 opening times.

## 8.3

Release date: 2018-09-25

#### Bugfixes

* Fixed a bug where opening hours were not correctly shown in the header for Facebook Open Graph.

#### Other

* Added Slovenian translation for the plugin.
* Diverse code quality improvements.

## 8.2

Release date: 2018-09-11

#### Bugfixes

* Opening hours options were still showing, even though the 24/7 option was selected.
* Fixed a bug with the Open/Closed widget. It now shows the correct messages at the correct times.

#### Enhancements

* Introducing Gutenberg Blocks.

* Added address block.
* Added Google Maps block.

## 8.1

Release date: 2018-08-28

* Bug fixes

* Fixed a typo that caused the shortcode generator for the store locator to no longer work.

## 8.0

Release date: 2018-08-14

#### Other

* Improved code quality

## 7.9.1

Release date: 2018-08-07

#### Bugfixes

* Prevent double output of JSON-LD structured data when using opening hours in address shortcode.

#### Enhancements

* Add option for 24/7 and 24 hour opening hours
* Add phone/phone2/fax options to single map
* Add height/width/zoom options to store locator map
* Disabled route planner option in shortcode settings for single map when multiple locations are selected

#### Other

* Bumped YoastSEO.js to 1.35.5

## 7.9

Release date: 2018-07-24

#### Bugfixes

* Fix invalid XML sitemap output by escaping URLs.

#### Enhancements

* Changed UI for permalinks and labels on the general settings page to be more user friendly.
* Better aligned labels for input fields on the general settings page to make it clearer what field they belong to.

#### Other

* Improved code quality.
* Improved code security.

## 7.8

Release date: 2018-07-10

#### Bugfixes

* Fixed a bug where if `wpseo_json_ld_output` was set to false, Local SEO still ouputted JSON-LD data.
* Fixed a bug where `wpseo_show_opening_hours_after` was used as an action instead of as a filter.
* Fixed a bug where Show URL was not an option in the Show Address widget.
* Fixed a typo in the word 'consider'.
* Fixed a typo in assignment vs comparison operator.

#### Other

* Updated YoastSEO.js to 1.35.1.
* Improved code quality.
* Improved code security.
* Various i18n fixes.

## 7.7

Release date: 2018-06-26

#### Enhancements

* Move business types to own repository.
* Make business types filterable with `yoast-local-seo-business-types` filter.
* Make business types translatable.

#### Other

* Updated Yoast SEO JS to 1.34.0.
* Removed deprecated business types.
* Improved code quality.

## 7.6

Release date: 2018-06-05

#### Bugfixes

* Changed faulty text for showing address on one line in shortcode.
* Remove leading comma in address when business name is hidden.
* Remove leading comma in address when business address is hidden.

#### Enhancements

* Make output in .kml human readable and not encoded.

#### Other

* Added link to Yoast KB about HTTPS when HTTPS is disabled.
* Improved code quality.
* Added Security Advisories package.

## 7.5

Release date: 2018-05-15

#### Bugfixes

* Fixed a bug that caused the 'draggable' option for the Store Locator not to work.

#### Enhancements

* Add filter `yoast-local-seo-search-label` to edit Search Label for store locator.

#### Other

* Extend `WPSEO_Admin_Asset_Manager` class to manage assets.
* Update YoastSEO.js to 1.31.

## 7.4

Release date: 2018-05-01

#### Bugfixes

* Fixed a bug where closed days were not hidden when the option was selected in the widget or shortcode.

#### Enhancements

* Added option to set a custom 'closed' label.

## 7.3

Release date: 2018-04-17

#### Bugfixes

* Fixed a bug where Select2 wasn't working on location pages.
* Fixed link to Locations CPT in shortcode dialog if no locations are present.

#### Other

* Converted knowledge base link to shortlink.

## 7.2

Release date: 2018-04-03

#### Bugfixes

* Fixed JSON-LD output for opening hours.

#### Enhancements

* Extended JSON-LD with @id parameter.
* Automatically sets the Yoast SEO setting for `company or person` to `company`, in order to make full use of the JSON-LD output.

## 7.1

Release date: 2018-03-20

#### Bugfixes

* Fixed output of JSON+LD under widgets and shortcodes.
* Fixed undefined variable for options in Locations Repository class
* Cast location ID as an array to make it countable.
* Images on the shortcode buttons weren't showing due to a wrong path.
* Fixed a bug where the Local SEO Shortcode buttons no longer appeared when adding a new post/page/cpt.

#### Enhancements

* Added two filters to disable enhanced search and enhanced search results: `yoast_local_seo_enhanced_search_enabled` and `yoast_local_seo_enhanced_search_result_enabled`

#### Other

* Moved enhanced search functions to own class.
* Split the enhanced search `posts_clauses` function filter into `posts_where`, `posts_join` and `posts_orderby`.
* Updated YoastSEO.js to 1.30

## 7.0

Release date: 2018-02-13

#### Bugfixes

* Fixed a bug where all scripts for the shortcode buttons were loaded on all the admin pages.

#### Enhancements

* Optimised queries for getting locations in shortcode dialogs.

#### Other

* Added deprecation notice to `wpseo_local_get_address_format()`.
* Moved from NPM to Yarn for dependency management.
* Changed the output of JSON+LD. In a single location setup the output is only done in the `` on the front-page and also under every shortcode and widget. In a multi location setup, the output is done on every single location page and under every shortcode and widget.

## 6.3

Release date: 2018-02-13

#### Bugfixes

* Fixed a bug where you couldn't upload an SVG as business image.

#### Enhancements

* Added filter `yoast_seo_local_cpt_with_front` to enable or disable prependeding the locations permalink with the front base.
* Replace schema.org markup with JSON-LD output.

## 6.2

Release date: 2018-01-23

#### Bugfixes

* Fixed an error whereby widgets were not show on "current location" pages (only appeared when using multiple locations).

#### Enhancements

* Add a filter `yoast_seo_local_change_map_location_url` to alter the URL for a location in the maps info window.

## 6.1.1

Release date: 2018-01-16

#### Bugfixes

* Fixed an error whereby widgets were not show on "current location" pages (only appeared when using multiple locations).

## 6.1

Release date: 2018-01-09

#### Bugfixes

* Added a check if the wpseo_locations locations exists to prevent a notice from being thrown.
* Check if a lat/long has a numeric value to prevent an error from being thrown.
* Added 2nd line of business address to .kml file.
* Changed `business:contact_data:country` to `business:contact_data:country_name` to resolve Open Graph error.

## 6.0

Release date: 2017-12-20

#### Enhancements

* Allow a maximum number of results to be set for the `Store Locator`, `Map` and `Address` shortcodes.

#### Bugfixes

* Fixed a bug where, if multiple ID's were passed to the Locations Repository, only 1 ID was returned.
* Only show a link to a location in the map or store locator when the location CPT is set to public
* Fixed a bug where location detection wasn't working in Firefox.

## 5.9

Release date: 2017-12-05

#### Enhancements

* The page will now automatically jump to the Store Locator form when a search is done.
* Added schema markup OpeningHoursSpecification from [http://schema.org/OpeningHoursSpecification](http://schema.org/OpeningHoursSpecification) to opening hours output.

#### Bugfixes

* The 24h option is now also usable for multiple locations as well as single locations.

#### Other

* Changed Server Key description.

## 5.8

Release date: 2017-11-15

#### Enhancements

* The page will now automatically jump to the Store Locator form when a search is done.
* Show opengraphs tags on every page when using the single location setup.
* Added support for Beaver Builder front-end editing.
* Updated this readme for 3.3.1 version to make it clear that we removed the Tools section from the admin panel.

#### Bugfixes

* Fixed a bug where only an array of ID's could be passed to the Locations Repository. It can now also be a single ID.

## 5.7

Release date: 2017-10-24

#### Bugfixes

* Fixed undefined index issue for 'hide_closed' option in WPSEO Opening Hours widget
* Fixed issue that caused 'show price range' option to be unselectable in WPSEO Address widget
* Added Price Range asfield to Opening Hours stand-alone output
* Fixed a fatal error that occurred when Local SEO was deactivated and Yoast SEO (Free or premium) was not active.

#### Enhancements

* Added geotags for Single Location installs and singluar locations in Multi-location installs
* Added a dashicon for Yoast Local SEO.

## 5.6

Release date: 2017-10-10

#### Enhancements

* Make use of the new `wpseo_manage_options` capability. See https://github.com/Yoast/wordpress-seo/issues/7831 for more information.

## 5.5

Release date: 2017-09-26

#### Bugfixes

* Fixed a notice when saving widgets.
* Fixed location detection.

## 5.4

Release date: 2017-09-06

#### Bugfixes

* Fixed a bug where the ability to show or hide opening hours when using multiple locations wasn't available
* Notifications in the Yoast Notification Center created by Yoast Local SEO are now removed upon deactivating the plugin

#### Enhancements

* Textual changes to benefit UX.

## 5.3

Release date: 2017-08-22

#### Bugfixes

* Show country on correct position in map info popup
* Check on business city in URL didn't work correctly.

#### Enhancements

* Flush KML transient cache after saving Local SEO options.

## 5.2

Release date: 2017-08-04

#### Bugfixes

* Show country in info-popup of map, when it's set in the shortcode options.

#### Enhancements

* Updated Travis config in order to match Yoast SEO's version.

## 5.1

Release date: 2017-07-25

#### Bugfixes

* Company logo for a single location is now displaying correctly
* The open/closed widget in some cases threw a wp_error which caused a fatal error and the page to stop rendering.
#### Enhancements
* Added automatic location detection which was already present in the Store Locator to route planner in the map.

## 5.0

Release date: 2017-07-06

#### Bugfixes

* Fixed a bug that caused the content analysis to show a red bullet for a address shortcode with valid schema.org, even though it was there.
* The company logo wasn't outputted, even though a logo was set in Yoast SEO.
* The URL in the Google Maps Info Window popup now is the correct one.
* VAT, Tax and COC id were not shown, they are now.

## 4.9

Release date: 2017-06-07

#### Bugfixes

* Fixed a big that caused other locations in the 'copy from location' select box to not show up.
* Removed duplicate second phone number from Google Maps info window
* Removed duplicate second e-mail address from Google Maps info window

## 4.8

Release date: 2017-05-23

#### Bugfixes

* Fixed a bug that prevented a correct calculation of the route to a location

#### Enhancements

* Added phone number to .kml file for locations
* Add a &lt;meta&gt; with the location business name to output when business name is hidden.

## 4.7.1

Release date: 2017-05-03

#### Bugfixes

* Fixed an issues where some data, such as phone number, in the shortcodes wasn't outputted because of wrong variable checks.

## 4.7

Release date: 2017-05-02

*  Enhancements:

* A rewrite of the way locations are fetched. A new Locatons Repository class is added. This class returns an array of all the location data and can be called by using `new WPSEO_Local_Locations_Repository();`. With the methods `get()` you can fetch the locations. Get accepts a number of arguements. Check the code in `/classes/class-locations-repository.php` for more detailed information.
* A business image is now scaled to medium size when displaying on the Local SEO settings page.

## 4.6

Release date: 2017-04-11

#### Bugfixes

* Build in a check for touch devices, to avoid issues with map properties as draggable and gestureHandling.
* Changed to in the opening hours HTML output to achieve a correct HTML spec. The datetime attribute was invalid.

#### Enhancements

* Make the route label in the store locator filterable by using `wpseo_local_location_route_label`.
* Added the shortcode buttons for address, map, storelocator and opening hours to other editor windows such as terms and categories.

## 4.5

Release date: 2017-03-21

#### Enhancements

* Added better content check when using the store locator. More info at: http://www.localseoguide.com/store-locator-sucks-dont-surprised-got-hammered-possum/
* Added a content check for using city in h1/h2 elements on location pages.
* Added a check to see whether Schema.org is used on location page.
* Added a check for the use of focus keyword in h1/h2 elements on location pages.
* Obfuscates email address to make harvesting by bots a bit harder.

## 4.4

Release date: 2017-02-28

#### Bugfixes

* Fixed fatal error when (de)activating Yoast SEO: Local when Yoast SEO is not *yet) activated.
* Fixed an issue with publish date of imported locations.

#### Enhancements

* Added second address to import/exort of locations.

## 4.3

Release date: 2017-02-14

#### Bugfixes

* Moved textdomain call to make sure that if a user chooses a different backend language, everything is translated correctly.

#### Enhancements

* Added schema.org to infoWindow poup when showing a map
* Removed redundant title attributes from buttons in admin
* Added filters to admin labels so they can be altered to the users desire.
* Add a notification to shortcodes when multiple locations are used and no locations are added yet.
* Added gesture handling to Google Maps

## 4.2.1

Release date: 2017-02-02

#### Bugfixes

* Fixes fatal error due to yoast_i18n class
* Fixes notice in geo-sitemap

## 4.2

Release date: 2017-01-31

#### Enhancements

* Added new WPSEO<em>Local</em>Timezone_Api class.
* Added a new function: `yoast_seo_local_is_location_open`. This function returns true of false whethere a location is currently open.
* Introduced a new widget that allows you to show a message when a location is open or closed.
* Added instructions about the usage of 2nd set of opening hours.
* When only using a single location, you can now see a preview map with draggable marker on the Yoast Local SEO settings page.
* Added a new option to upload a business image.

#### Bugfixes

* Replaced deprecated function `WPSEO_Utils::register_cache_clear_option` with `WPSEO_Sitemaps_Cache::register_clear_on_option_update`
* Replaced deprecated function `wpseo_xml_sitemaps_base_url` with `WPSEO_Sitemaps_Router::get_base_url`
* Added location<em>address</em>2 to the Yoast SEO Local default values to prevent undefined index notices.
* Fixed a bug where 2nd sets of opening hours were not shown immediately when the options was selected for single locations.
* Fixed styling bug for 2nd set of opening hours in the admin area.
* Remove opening hours from settings page when multiple locations are used.
* Switching between 12 and 24 hour time notations now works again.
* Business image was not shown correctly in schema.org markup in opening hours and address widgets and shortcodes

## 4.1

Release date: 2017-01-17

#### Enhancements

* Added marker clustering as an option. If enabled markers within close proximity will be clustered. Marker clustering can be enabled or disabled by a specific setting in shortcodes (for map and store locator) and the map widget.
* Added a new filter for using custom cluster images `wpseo_local_marker_cluster_image_path`.
* To prevent a repeating world map (in most cases), the minimal zoom level for maps is now set at 1.
* Added price range fields for schema.org markup.

#### Bugfixes

* Resolved issue where only published locations were shown in the map for logged in users.
* Fixed a bug that prevented the Store Locator map to show up for non logged in users.
* Added missing datetime property for opening hours.
* Fixed wrong output from `wpseo_local_show_address()` when a logo was shown.

## 4.0.1

Release date: 2016-12-14

* Fixes a bug where a PHP notice was shown when a map was embedded for a site with only one location.

## 4.0

Release date: 2016-11-29

#### Enhancements

* Refactoring of the settings page.
* Added filtering for location categories to the map and store locator.

#### Bugfixes

* Selecting 'all locations' caused the map not to show up in the widget. It does now.
* Fixed undefined index notice for a location country on a fresh install.

## 3.9

Release date: 2016-11-15

#### Enhancements

* Added sanitation for WPSEO Local options
* Added a second business address line that can be used for example for room numbers or floors.
* Times in the Local SEO settings are now updated in realtime when switching between 12 and 24h notation
* We did a massive overhaul for the import function and also added an export for Yoast Local SEO locations. For developers: functionality is moved from the WPSEO<em>Local</em>Admin class to new classes.

## 3.8

Release date: 2016-11-08

#### Enhancements

* Changed warning text about the required Yoast SEO installation
* Removed location detection checkbox if not on HTTPS

## 3.7

Release date: 2016-10-11

#### Enhancements

* In order to preserve consistency, London is changed as city in favor of New York in the address format examples.
* Added option to hide the business address in address shortcode and widget.
* Added a new widget to show locations by category

#### Bugfixes

* Fixed a bug that caused a map not to show up when all locations were selected.

## 3.6

Release date: 2016-09-27

#### Enhancements

* Added option to automatically detect a users location for use in the route calculation or store locator. Note: HTTPS is required for this option!
* Added translator comments throughout the plugin, explaining the contextual meanings of %s and %d.
* Removed Chosen in favor of Select2 JS library
* Added an option in the map shortcode and widget to show the info window by default if you select a single location.
* From now on, on the init action, Yoast Local SEO default options are checked. If they are not set, they will be.

#### Bugfixes

* When showing the address on one line and there is nog logo, the business name now gets a trailing comma and space

## 3.5

Release date: 2016-09-07

#### Enhancements

* Sitemap transient is now cleared upon (de-)activation of the plugin.
* Default opening hours are now set (if not set already) upon activation or updating the plugin from version 3.4 or below.
* You can now add a note in the address shortcode.
* Fixed a few undefined index warnings.
* Add ability to set Google Maps API keys by using the following constants: WPSEO_LOCAL_API_KEY_SERVER and WPSEO_LOCAL_API_KEY_BROWSER.
* If you are allowed to edit locations, you can now select draft posts in the Local SEO widgets, shortcodes and location data copier.
* Updated verbiage. The storelocator now reads "Enter your postal code, city and / or state".

#### Bugfixes

* Removed wrongfully placed comma's in some address formats.
* Centering of map option is disabled by default when inserting Google Maps via shortcode on a location page, since a single location is centered by default.
* Hide the storelocator settings if not using multiple locations.
* Show alt text for logo's. Alt texts can be managed in the media library.
* City and state are now correctly shown in locations.kml.
* Removed the deprecated business type Attorney and replaced it with the new Legal Service. When updating from 3.4 or below the business types Attorney will all automaticly be replaced by Legal Service.

## 3.4.1

Release date: 2016-08-02

#### Enhancements

* UX: We no longer tell users they can drag the location marker unless they have set coordinates.

#### Bugfixes

* Fixes a bug where the address widget didn't correctly show the address if the address was displayed on one line and the company logo is shown.

## 3.4

Release date: 2016-07-20

#### Enhancements

* Added Local SEO to admin menu onder SEO Settings
* Location category slug is now filterable using `wpseo_locations_category_label` filter

#### Bugfixes

* Remove redundant comma when address is displayed in 1 line and business logo is shown.
* Default country was set too late, which caused notifications.

## 3.3.1

Release date: 2016-07-06

#### Enhancements

* Introduced Browser API key in settings because Google now requires this to embed maps on your site.
* Introduced Help Center on settings tabs.
* Introduced notification for empty API key settings.
* Refactored the address format code, and introduced a class for it.
* Deprecated the wpseo_local_get_address_format() function. Use the new `WPSEO_Local_Address_Format` class now.
* Location taxonomy names are now based on post type singular name.

#### Bugfixes

* Zoomlevels 0 and 1 now work as intended in the WPSEO Show Map widget
* Flush rewrite rules after changing the location category slug to prevent a 404 on category pages

## 3.3

Release date: 2016-06-14

#### Enhancements

* Better explanation for search radius for store locator in widget
* Removed translations of "Local SEO" since it's a brand name
* Hide links to locations and locations category admin pages, when options aren't saved yet (caused 404 errors)
* Make translation possible for upload button
* Added translation promo box

#### Bugfixes

* Location Category Custom Map Marker wasn't displayed.
* Company Logo didn't appear in Address Widget.
* Show address in one line showed comma when not needed.
* Error with localTitle and localURL assessments in page analysis fixed.
* Fixed the links to the location post type and taxonomy in admin, before saving themin the options.

## 3.2.1

Release date: 2016-04-20

* Fixes a fatal error.

## 3.2

Release date: 2016-04-20

#### Enhancements

* Added a support beacon, so you can reach support directly from the Local SEO settings page.
* Make it possible to empty the "default country" field for the store locator, so it will not pollute the search results when you have locations in mutiple countries.

#### Bugfixes

* Fixed a bug where Custom Marker Upload field was shown on all taxonomy and category edit pages.
* Fixed issue where routeplanner showed destination marker and location marker
* Fixed WooCommerce product search. Local search was interfering this product search with location details. Since location details are not needed in product search, this has been removed.
* In some cases the map was unable to find a route when only a zip code was entered. The default country from the options is added to the route calculation now.
* "Show Locations Per Category" is now also working at regular pages.
* itemprop="openingHours" added to standalone Opening hours widget/shortcode.
* The comma displayed after city when 'Show State' is not selected has now been removed.
* Don't show store locator when not having multiple locations.
* Disabled the store locator functionality when not having multiple locations (you could a regular map with route calculation instead).
* Location specific checks that were added to the content analysis would no longer work in combination with Yoast SEO 3.2 and higher.
* In Map widget: Show map widget: Location dropdown no longer hides/shows after saving.
* Opening hours widget for "current location" is working again.

## 3.1

Release date: 2016-03-02

#### Bugfixes

* Fixes deprecation warnings for filters that have been removed in Yoast SEO 3.0
* Fixed content error for Local admin page (iframe of lseo.com)
* Fixed mixed content issue for XSL
* Fixed grammar issues
* Fixed issue where not all data was copied from another location
* Fixed issue where 'show_email' was not working in 'wpseo_map' shortcode
* Removed undefined indexes throughout the plugin
* Fixed a bug that caused the store locator to only display one location if multiple locations with the same postal code were found.
* Fixed a bug in the enhanced search function that caused wrong pages to be returned in search
* Added XSS prevention measures.

#### Enhancements

* Makes sure location specific content analysis checks work well with the Real Time content analysis tool in Yoast SEO 3.0.
* Added Email, Fax, Chamber of Commerce, VAT ID, Tax ID and 3 note fields to the import
* Added $atts as extra variable to the 'wpseo_opening_hours_time' filter
* If either the opening or closing time is set to closed, opening hours wil now display this as closed.
* Added 4 new filters to filter shortcode attributes: shortcode_atts_wpseo_local_wpseo_local_show_map, shortcode_atts_wpseo_local_opening_hours, shortcode_atts_wpseo_local_show_address and shortcode_atts_wpseo_local_show_all_locations
* Use the WordPress option for 'first day of the week' as first day in the opening hours widget
* Added feature where opening hours can now be shown per day (or multiple days)
* Updated widget constructors to be compatible with PHP 7
* Added a filter 'wpseo_local_search_custom_fields' to alter the custom fields that should be searched

## 3.0

Release date: 2015-11-18

* Synchronized plugin version with all other Yoast SEO plugins for WordPress.

#### Bugfixes

* Fixes deprecation warnings for filters that have been removed in Yoast SEO 3.0
* Fixes content error for Local admin page (iframe of lseo.com).
* Fixed mixed content issue for XSL.

#### Enhancements

* Makes sure location specific content analysis checks work well with the Real Time content analysis tool in Yoast SEO 3.0.

## 1.3.8

Release date: 2015-10-20

* Bugfix:

* Fixed bug where widgets no longer showed up when using a single location

## 1.3.7

Release date: 2015-10-14

#### Bugfixes

* Don't show widget contents/title when no location has been entered
* Updated Widget constructor
* Fixed a bug where radius was display wrong in storelocator shortcode
* Fixed a bug where e-mail was no longer shown in address shortcode
* Hidden location category dropdown when there are no categories to select
* Fixed issue where page analysis did not recognize city in URL
* Map in storelocator is once again shown before a search
* Added (hidden) radius to store locator widget, so search will work properly again

#### Enhancements

* Changed naming from WordPress SEO to Yoast SEO
* Phone numbers are no longer formatted in
* Added option to center the map on a specific location
* Separated dragging and scrolling options for maps
* Added 3 note fields to locations and the import function
* Added option to upload a logo per location. The company logo can now be added to your address widget, the address shortcode or by the use of a newly added shortcode [wpseo_local_show_logo]. This shortcode accepts id as attribute.
* Added VAT, Tax and Chamber of Commerce ID fields
* Enhanced search by extending it with address, zip code and city parameters
* Locations found in search now display address details

## 1.3.6

Release date: 2015-07-09

#### Bugfixes

* Removed condition shorthand due to POT file problems
* Fixed issue where allowing to scroll and zoom the map did not work as intended
* Removed some PHP notices
* Fixed issue where a custom 'Show route' label was not correctly shown
* Route calculation is now based on lat/long
* Slide toggle for opening hours in admin reversed
* Missing space between input field and button
* Removed dash after one-line address if no other options are selected
* Extra span for telephone number, so Google picks it up

#### Enhancements

* Added option to show email address in Google Maps info window
* Email address is no longer copied when copying data from other location
* Added a warning when a custom marker of larger than 100 x 100 pixels is used
* Added option to change the URL when using a single location.
* Added a 'wpseo_local_contact_details' filter to change the labels and order of contact details
* Locations can now be shown per category
* If geocoding limit is reached, a notice will be shown.
* Added placeholder for "Show route" field

## 1.3.5

Release date: 2015-03-25

#### Bugfixes

* Replaced all shorthand PHP tags that were being used.&lt;!--?php. Yep, really...
* Resolved some PHP 5.2 and 5.3 compatibilty issues
* Fixed the url for locations in locations.kml
* Added the + in url's for phone numbers
* Added map styles to the storelocator

#### Enhancements

* Added support for Jetpack's Omnisearch
* Added support for Publicize and Markdown
* Added label fields. You can now determine your own labels for locations.

## 1.3.4.1

Release date: 2015-01-02

#### Bugfixes

* Fixes a JS bug that was caused by a merge conflict

## 1.3.4

Release date: 2014-12-22

#### Bugfixes

* Wrong opening hours were added to meta-data when location is closed.
* Category sitemap was created when there were no location categories.
* Accept both "value" and "nice name" for Business Type in import.

#### Enhancements

* Added option for hiding (not using) opening hours.
* Added option for entering a Google Maps API key (useful when you have hundreds or more locations).
* We added a tab in the Options section, where we've listed some great Local SEO tools.

## 1.3.3

Release date: 2014-10-08

#### Enhancements

* Updated translations for 10 languages.

## 1.3.2

Release date: 2014-10-08

#### Bugfixes

* When selecting quarters in opening hours, it isn't displayed as "closed" anymore
* Copying data from an existing location now works properly

#### Enhancements

* Custom markers for Google Maps, like this:<br /><img class="nopadding alignnone wp-image-243529 size-full" src="https://yoast.com/app/uploads/2013/03/custom-marker-google-maps-local-seo.png" alt="Custom Marker in Google Maps, Local SEO" width="434" height="322" />
* Custom markers per category (when using multiple locations)
* In the locations post edit screen, you can now drag the Google Maps pin to a different location
* Added an option to the store locator to show the nearest location if no locations are found in the search radius
* Removed the current location from the 'copy data from another location' drop down
* Expanded the importer with opening hours
* Added Business Type and URL to CSV import
* Added a nonce check to import
* Caching for sitemaps

## 1.3.1

Release date: 2014-07-02

#### Bugfixes

* Fixed unability to save 2 sets of opening hours
* Fixed issue where multiple locations or change of slug gave a 404.
* Fixed issue where business URL input field did not contain the correct URL
* Don't display number of results in store locator when no search is performed yet
* Fixed attachment upload when adding URLs for images in CSV import
* Fixed: Checkbox to use 24h format in metabox doesn't work when using multiple locations
* Fixed: business url was not being saved
* show_email wasn't being set to false, when not selecting it in the shortcode popup
* Business types were not saved correctly in metabox (musing ultiple locations)

#### Enhancements

* Hide import options when not using multiple locations
* Change link in Address (and store locator results) into "Business URL" option, with fallback to permalink
* Add option to make maps scrollable (or not)
* Added several new Schema.org markups (Residences, Government Buildings, Churches etc.)
* Added radius to "Show store locator" popup

## 1.3.0.3

Release date: 2014-03-31

#### Bugfixes

* 24-h format for opening hours works again
* Fixes sitemap URLs for servers which needs index.php in permalink structure
* Option added for hiding business name
* Hide "Show route" when not selected from popup.

#### Enhancements

* Properly minify admin CSS scripts.

* i18n

* Updated es_ES, nl_NL and ru_RU
* Added de_DE, fr_FR and tr_TK

## 1.3.0.2

Release date: 2014-03-17

#### Bugfixes

* Fix error that prevented properly recognizing current version.

## 1.3.0.1

Release date: 2014-03-13

#### Bugfixes

* Fixed fatal error when saving single location
* Fixed "Non-static method" notice

## 1.3.0

Release date: 2014-03-11

#### Bugfixes

* Mismatched `itemprop="email"` for URLs now changed to `itemprop="url"`
* Manually changing lat/long coordinates is working again

#### Enhancements

* Add `{zipcode} {city}, {state}` address format
* Added html elements to address lines
* Added possibility to change author of location
* Added "all locations" option to Address button in edit-pages to show all locations

* Code changes

* Classes and instances of classes renamed to be more consistent with WP SEO
* Separated some functionality in different classes

## 1.2.2.2

Release date: 2014-02-14

#### Bugfixes

* Video sitemap was breaking after update 1.2.2.1. Fixed.

## 1.2.2.1

Release date: 2014-02-05

#### Bugfixes

* Due to changes in sitemaps to be more in line with other WordPress SEO sitemaps, `geo_sitemap.xml` was not working anymore. Added now a redirect to redirect `geo_sitemap.xml` to `geo-sitemap.xml`

## 1.2.2

Release date: 2014-01-31

#### Bugfixes

* Fixes fatal error in metabox when having no internet connection.
* Updates lat.long coordinates after changing address of location.
* Force slug for locations CPT, even when blank in admin bug.
* Notice fix in widget when location has no lat/long coordinates.

#### Enhancements

* Possibility to add default country to improve searches from store locator (it adds the country to the search query).
* Show message when route cannot be calculated.
* Pre-select location when adding short codes via popup.
* Add filter to time-frame in Opening Hours.
* Added parameter to shortcode that prevents mouse scrolling.

## 1.2.1

Release date: 2013-12-10

#### Bugfixes

* Fixed: Store locator gave unexpected results with a lot of locations.
* Store locator popup checkboxes didn't work correctly. Now they do. The scrollbar is gone too.
* Fixed: When some locations don't have geo locations, map with all locations fails.
* Fixed: Map failed when some locations don't have lat/long coordinates.

#### Enhancements

* Added documentation for CSV import

* i18n

* Updated .pot file
* Updated ru_RU translation

## 1.2

Release date: 2013-12-04

#### Bugfixes

* Checkbox 'Hide closed days' in widget-admin now works.
* Added filter 'wpseo_local_location_route_title_name' for title 'route' of widget and shortcode
* Added esc_html to filter 'wpseo_local_location_title_tag_name'
* Replaced WPSEO_LOCAL_URL constants by using plugins_url() so that it can be filtered (where needed)

#### Enhancements

* Added a store locator. Gives you the possibility to let people search for the neirest store/office
* Added a custom taxonomy for categorizing your locations
* You can enter custom URLs for your locations now
* Better icons for adding shortcodes
* Better UI for selecting the map style when adding a map shortcode
* Added possibility to add comma separated ID's to wpseo_map shortcode for selectively showing locations on a map
* Added a second field for a phone number (office, mobile etc.)
* Allow HTML in the "Extra comment" field in the Address and Opening Hours widgets

#### i18n

* Updated .pot file

## 1.1.7

Release date: 2013-09-20

#### Bugfixes

* When outputting opening hours on its own, don't add schema.org
* When using the "insert address" button it inserts the entire address with phone, country, fax, ect whether or not it's checked.
* When "hide closing days" isn't checked it still hides them.
* Added page layout options for Genesis themes
* Added quarters for the opening hours
* Added shortcode ( [wpseo_all_locations] ) to display all your locations at once.

#### Enhancements

* Added icons to shortcode buttons
* Added opening hours shortcode button

* Allow license key to be set by constant WPSEO_LOCAL_LICENSE. Key will be hidden if valid.

* Created option to show URL in address detail and in info-box in Google Map
* Deleted unnecessary files

#### i18n

* Updated hu_HU &amp; ru_RU
* Updated .pot file

## 1.1.6

Release date: 2013-05-29

#### Bugfixes

* Apostrophe in company name created issues. Not anymore
* Setting Unit system works again
* When specifying a business type and saving, the chosen business type is now selected.
* Opening hours now display correctly if the opening hours are set to two sets, and only one set is used

#### Enhancements

* Shortcodes can now be inserted visually (button opens popup with settings)
* Google Maps is now responsive (fluid width)
* Hide link in popup box (Google Map) when there's just one location
* Added comment box in the address and opening hours widgets, for extra (optional) comments.

## 1.1.5

Release date: 2013-04-24

#### Bugfixes

* Make sure maps work on https.
* Improve JS output.
* Fix several widget bugs.

#### Enhancements

* Remove jQuery dependency.
* Move JS to external file.

#### i18n

* Updated ru_RU translation.
* Added Swedish and Polish.

## 1.1.4

Release date: 2013-04-23

#### Bugfixes

* Allow more values in shortcodes to set stuff to false.
* Fix bounds for Maps.

#### Enhancements

* Make maps output search engine indexable links too.

#### i18n

* Added ru_RU translation.

## 1.1.3

Release date: 2013-04-22

#### Bugfixes

* Fix activation hook to work on add_option instead of just update_option, so activation works immediately.
* Multiple maps embedded on one page now work properly.
* Dropdowns with chosen script now line out properly.
* Google Maps geocoder script + maps embed scripts now properly enqueued and outputted in footer instead of within content.
* Maps shortcode output bug fixed.

#### Documentation

* Added link to FAQ entry about schema.org business types.

#### Enhancements

* Added back LocalBusiness business type to top of business type select.
* You can now use "Current location" for widgets, so you can use them on the locations pages. They'll output nothing outside of locations.

## 1.1.2

Release date: 2013-04-21

* i18n

* Added da_DK, hu_HU, it_IT and nl_NL translations.

#### Bugfixes

* Fix `class_exists` check to actually check for the right class (props [Ryan McCue](http://ryanmccue.info/)).
* Make both front and backend classes global so methods can be used outside the plugin (props [Ryan McCue](http://ryanmccue.info/)).
* Fix overwriting of `$args` variable which broke widgets.

## 1.1.1

Release date: 2013-04-20

* Fix the update functionality.

## 1.1

Release date: 2013-04-19

#### Enhancements

* Added hide_closed option to opening hours shortcode and widgets.
* Added option to show fax number and email address in both shortcode and widget.
* Improved UI for opening hours.
* Switched to a better endpoint for Google Maps Geocode API.
* Added state to KML file output.

#### Bugfixes

* "undefined" URL in maps shortcode and widgets.
* Fixed several notices.
* Values "off" and "no" now properly work for shortcodes.

## 1.0

Release date: 2013-04-20

* Initial release.
