## 16.4

Release date: 2024-10-22

#### Other

* Sets the minimum supported WordPress version to 6.5.

## 16.3

Release date: 2024-09-24

#### Enhancements

* Adds the ability to set a page as the designated return policy page, which gets added in the structured data graph.

#### Bugfixes

* Fixes a bug where the feedback for the _SKU assessment_ would not be translated when the SKU was missing.
* Fixes a bug where `wp_get_attachment_image_src` gets called with a non-existing image id, thus returning `false` instead of an array.

#### Other

* Sets the minimum required Yoast SEO version to 23.5.
* Sets the minimum supported WordPress version to 6.4.
* Sets the _WordPress tested up to_ version to 6.6.

## 16.2

Release date: 2024-04-03

Yoast WooCommerce SEO 16.2 delivers the schema update we've been promising! Webshop customers will now have better control over how their product variants show online, ensuring a better overall experience for shoppers. Check out [the release post](https://yoa.st/release-3-4-24) for more details about the impact of Yoast WooCommerce SEO 16.2!

#### Enhancements

* Adds ProductGroup schema to be compatible with Product variant schema.

#### Other

* Sets the minimum required Yoast SEO version to 22.0.
* Sets the WordPress tested up to version to 6.5.

## 16.1.1

Release date: 2024-02-23

#### Other

* Prevents future update problems for Woo marketplace subscribers who have purchased Yoast WooCommerce SEO from Yoast.com.

## 16.1

Release date: 2024-02-06

#### Bugfixes

* Fixes a bug where, if a product page had a previously selected page type, that page type would be added in the schema together with `WebPage` and `ItemPage`.
* Fixes a bug where Twitter fallback image would be used, even when not applicable.

#### Other

* Includes various code improvements.
* Sets the minimum required Yoast SEO version to 22.0.
* Sets the minimum supported WordPress version to 6.3.

## 16.0

Release date: 2023-12-12

The last release of WooCommerce SEO received generative AI support for product titles and meta descriptions. In WooCommerce SEO 16.0, we added another great feature: easy import and export of global identifier values like GTIN8 and UPC. Check out this great timesaver! Find out more about what's new in Yoast WooCommerce SEO 16.0 in [our release post](https://yoa.st/release-12-12-23)!

#### Enhancements

* Adds support for global identifier values (GTIN8, GTIN12 / UPC, GTIN13 / EAN, GTIN14 / ITF-14, ISBN, MPN) into the Import/Export feature of the WooCommerce Product.

#### Other

* Bumps the minimum required version of Yoast SEO to 21.7.
* Adds checks to ensure that the plugin has no known incompatibilities with PHP 8.3.
* Improves the discoverability of the security policy.

## 15.9

Release date: 2023-11-28

Give your store the edge with our AI-enhanced WooCommerce SEO tools! Rapidly generate standout product titles and descriptions that capture attention and convert. This AI update -- for which you need Yoast SEO Premium -- integrates seamlessly with WooCommerce, making your products irresistible to search engines and shoppers. Revamp your product SEO and watch your sales grow! Find out more about what's new in Yoast WooCommerce SEO 15.9 in [our release post](https://yoa.st/release-28-11-23)!

#### Enhancements

* Introducing a new feature: AI SEO title and meta description generation for WooCommerce products! To unlock this SEO magic, make sure you have both Yoast SEO Premium and Yoast WooCommerce SEO installed.
* This PR introduces a new way of retrieving translations for Yoast SEO for WooCommerce, by utilizing the TranslationPress service. Instead of having to ship all translations with every release, we can now load the translations on a per-install basis, tailored to the user's setup. This means smaller plugin releases and less bloat on the user's server.

#### Other

* Bumps the minimum required version of Yoast SEO to 21.6.
* Sets the minimum supported WordPress version to 6.2.
* Sets the WordPress tested up to version to 6.4.
* Users requiring this package via [WP]Packagist can now use the `composer/installers` v2.

## 15.8

Release date: 2023-07-25

#### Enhancements

* Adds an edit button to the SKU and Product identifier assessments on product pages if the Yoast SEO Premium plugin is installed (version 20.12 or higher).
* Ensures compatibility of the breadcrumbs replacement feature with WooCommerce 7.9.0 when using blockified template for single products.

#### Bugfixes

* Fixes a bug where the Yoast SEO metabox would not load when the short description metabox had been deactivated.

#### Other

* Bumps the minimum required Yoast SEO version to 20.12.
* Sets the minimum supported WooCommerce version to 7.1.
* Sets the minimum supported WordPress version to 6.1.

## 15.7

Release date: 2023-04-26

#### Enhancements

* Makes the _SKU_ and _product identifiers_ assessments available for grouped products.

#### Bugfixes

* Fixes a bug where new translations would not be translated.

#### Other

* Bumps the minimum required version of Yoast SEO to 20.6.
* Drops compatibility with PHP 5.6, 7.0 and 7.1.
* Sets the WordPress tested up to version to 6.2.

## 15.6

Release date: 2023-02-28

#### Other

* Improves the Breadcrumb settings' link to point to a more specific section in the new Yoast settings.
* Makes product schema creation compatible with the latest Yoast Free changes
* Makes Woo SEO compatible with the indexable changes of the 20.2 release of Yoast SEO
* Sets the minimum required Yoast SEO version to 20.2.
* Sets the minimum supported WordPress version to 6.0.

## 15.5

Release date: 2023-01-17

#### Enhancements

* Improves the Schema output for `Product`, including a fix for a bug affecting setups where prices are inserted without taxes but displayed with taxes or viceversa.

#### Other

*  Sets the minimum required version of Yoast SEO to 19.14.

## 15.4

Release date: 2022-12-13

#### Enhancements

* Removes a box in the WooCommerce SEO page that prompts users to help with translating the plugin in their site language.

#### Other

* Removes the beta badge from the _word complexity_ assessment.
* Sets the minimum required Yoast SEO version to 19.12.

## 15.3

Release date: 2022-11-08

#### Enhancements

* Adds a `material` property to product pages’ schema.

#### Bugfixes

* Fixes a bug where the Product description assessment would also appear under the Readability analysis tab when the Cornerstone content toggle would be switched on.

#### Other

* Bumps the Yoast SEO minimum required version to 19.10.
* Ensures compatibility with the High Performance Order Storage feature in WooCommerce 7.1+.
* Sets the WordPress “tested up to” version to 6.1.

## 15.2

Release date: 2022-09-20

#### Enhancements

* Adds assessments for SKU and product identifiers. Product identifiers help search engines understand your products. To remind you to fill them out, we've added assessments that check whether products (or product variants) have an identifier. We use the details to fill in the necessary product schema that search engines love.
* Improves the Schema output for `offers` and `priceSpecification` to match Google's recent changes to their guidelines.
* Adds a feature to select a custom taxonomy for products to describe their `pattern` in the Schema output.

#### Bugfixes

* Fixes a bug where the Product Schema output would trigger a \"Duplicate field\" warning for the `color` property for non-variable products.
* Fixes a bug where two prices would be shown in the Slack integration metadata when a product is on sale.

#### Other

* Sets the minimum required Yoast SEO version to 19.7.

## 15.1

Release date: 2022-08-09

#### Other

* Makes Yoast WooCommerce SEO compatible with the new analysis edit buttons in Yoast SEO Premium.
* Sets the minimum supported WordPress version to 5.9.
* Sets the minimum supported Yoast SEO version to 19.5.

## 15.0

Release date: 2022-07-12

#### Enhancements

* Improves the readability analysis for English by adding a word complexity assessment for Product pages.
* Updates the Schema manipulation to follow the new best-practice for the `@id` of the `WebPage` piece introduced by Yoast SEO 19.3.

#### Bugfixes

* Fixes a bug where the keyphrase distribution assessments would error, or fail to mark the found keyphrases in the text, when using keyphrases that include some regular expression control characters, for example brackets.

#### Other

* Edits typo in id name for product variants identifiers.
* Sets the minimum required Yoast SEO version to 19.3.

## 14.9

Release date: 2022-06-14

#### Enhancements

* Adds a feature allowing users to add global identifiers (e.g., GTIN12, ISBN, etc.) to Product variations.
* Adds a feature to include global identifiers of Product variations to a Product's Schema.
* Adds variations' SKU and URL to a Product's Schema. Props to @jaredforth.
* Removes the `datePublished` and `dateModified` attributes on the `ItemPage` Schema markup for a Product.

#### Other

* Sets tested up WordPress version to 6.0.
* Sets the minimum required Yoast SEO version to 19.1.

## 14.8

Release date: 2022-05-06

#### Enhancements

* Removes XML sitemap image properties `title` and `caption` following deprecation by Google.

#### Other

* Sets the minimum required Yoast SEO version to 18.8.

## 14.7

Release date: 2022-04-19

#### Enhancements

* Improves the Schema on checkout pages by removing the default `ReadAction` we used to add there.
* Improves the Schema on product pages by replacing the default `ReadAction` with a `BuyAction`.

#### Other

* Sets the minimal required version for Yoast SEO to 18.6.
* Sets the minimum required WordPress version to 5.8.
* Adds a new `wpseo_schema_offer` filter that can be used to change the output of the offers attribute of the product schema. Props to [Dekadinious](https://github.com/Dekadinious).

## 14.6

Release date: 2022-01-25

#### Enhancements

* Adapts the Product description assessment for Japanese to use a character-based count, with a recommended length of 40-100 characters.

#### Bugfixes

* Fixes a bug where an empty product identifier value could be output.

#### Other

* Sets the minimum required Yoast SEO version to 18.0.
* Sets the WordPress tested up to version to 5.9.
* Sets the WooCommerce tested up to version to 6.1.

## 14.5

Release date: 2021-12-14

#### Other

* Ensure compatibility with Yoast SEO Free 17.8.
* Sets the minimum required Yoast SEO version to 17.8.

## 14.4

Release date: 2021-09-07

#### Enhancements

Adds the following improvements to the SEO analysis on product pages:

* Adds the Image alt tags assessment, which checks if all images have alt tags.
* Removes the Outbound links assessment and Internal links assessment, as they are less relevant on product pages.
* Sets the recommended minimum of the Keyphrase length assessment to 4 words.
* Sets the recommended minimum of the Text length assessment to 200 words.
* The SEO title width assessment no longer penalizes short titles.
* Adds a criterion for orange bullet in the Images assessments on product pages.
* Sets the recommended number of images to 4 in the Images assessments on product pages.

Adds the following improvements to the readability analysis on product pages:

* Adds the List presence assessment which recommends using lists on product pages.
* Makes the Subheading distribution assessment appear only when the text contains more than 300 words.
* Sets the recommended maximum length of the Paragraph length assessment to 70 words.
* Sets the recommended maximum percentage of long sentences in the Sentence length assessment to 20%. Language-specific percentages can override this default value.

#### Other

* Sets the minimum required Yoast SEO version to 17.1.

## 14.3

Release date: 2021-07-27

#### Bugfixes

* Fixes a bug where the product identifier replacement variables `%%wc_gtin8%%`, `%%wc_gtin12%%`, `%%wc_gtin13%%`, `%%wc_gtin14%%`, `%%wc_isbn%%` and `%%wc_mpn%%` would not work in meta descriptions when retrieving posts using REST requests.

## 14.2.1

Release date: 2021-07-21

#### Bugfixes

* Fixes a bug where a fatal error was thrown on the frontend of product pages when using the `%%wc_shortdesc%%` snippet variable while running PHP 8.0.
* Fixes a bug where the `%%wc_price%%`, `%%wc_sku%%`, `%%wc_shortdesc%%` and `%%wc_brand%%` snippet variable values were not displayed on the frontend.

## 14.2

Release date: 2021-07-13

#### Enhancements

* Adds key/value pairs of all WooCommerce SEO meta tags to our REST API.

#### Other

* Sets the minimum WordPress version to 5.6.
* Sets the minimum required Yoast SEO to 16.7.
* Replaces an occurrence of the deprecated jQuery `.ready` syntax with more modern syntax. Props to [kkmuffme](https://github.com/kkmuffme).

## 14.1

Release date: 2021-06-01

#### Other

* Makes WooCommerce SEO compatible with the latest version of Yoast SEO.
* Sets the minimum supported Yoast SEO version to 16.4.

## 14.0

Release date: 2021-05-18

#### Enhancements

* Add the rating, number of reviews, price and availability to the Google Preview for products to match Google's search results.
* Improves the `priceSpecification` Schema output to prevent warnings from Google Search Console.

#### Bugfixes

* Fixes a bug where the Social Previews would not use Product Gallery images as a fallback for social sharing.

#### Other

* Sets the WordPress tested up to version to 5.7 and minimum supported WordPress version to 5.6.
* Sets the minimum supported Yoast SEO version to 16.3.

## 13.9

Release date: 2021-01-26

#### Bugfixes

* Fixes a bug where a deprecation notice would be shown in the PHP debug log when visiting a product page.

## 13.8

Release date: 2020-12-02

#### Enhancements

* Makes the Schema Product type filterable.

## 13.7

Release date: 2020-10-27

#### Enhancements

* Shows the price and availability of a product in its snippet when sharing the product on Slack.

## 13.6

Release date: 2020-09-29

#### Bugfixes

* Fixes a bug where no plugin icon and compatibility data would be displayed on the plugins update screen.

#### Other

* We've tested with WooCommerce 4.5. Everything works as expected!

## 13.5

Release date: 2020-08-18

#### Enhancements

* Adds ‘WebPage’ as schema `@type` to Product pages and Checkout pages. This results in a `@type` array with at least 'WebPage' and 'ItemPage', or 'WebPage' and 'CheckoutPage'.

#### Other

* Enables tracking when activating the plugin. This can be disabled in the Yoast SEO configuration wizard.
* Sets the minimum supported WordPress version to 5.4.

## 13.4

Release date: 2020-07-28

#### Enhancements

* Hides the Yoast SEO columns in the Products overview table by default.

## 13.3

Release date: 2020-06-23

#### Bugfixes

* Fixes a bug where no SKU would be output when the SKU field was left empty. It will now fall back to the product’s ID.

#### Enhancements

* Outputs `PreOrder` as availability property value in the Product schema when the product is “on backorder”.

## 13.2

Release date: 2020-05-26

#### Bugfixes

* Fixes a bug where the organization schema for a primary term would error.
* Fixes a bug where a potential undefined variable notice was shown when toggling the 'prices have tax included' WooCommerce option.
* Fixes a bug where changing the product permalinks would not reset the permalinks in their respective indexables.

#### Enhancements

* Omits the `product:price:amount` and `product:price:currency` og meta for variable and grouped products.
* Hides all Yoast columns in the Product overview page except the SEO Score column.

## 13.1

Release date: 2020-05-13

#### Bugfixes

* Fixes a bug where the `twitter:image` meta tag would not fall back on the first product gallery image when no main product image was set.
* Fixes a bug where all product gallery images would be output as `og:image` even though a user had set a specific image for a product.

## 13.0

Release date: 2020-04-28

#### Bugfixes

* Fixes a bug where thumbnail product gallery images were added to the XML product sitemap instead of full size images.

#### Enhancements

* Adds a `Term hierarchy` snippet variable.
* Unifies the OpenGraph description fallbacks as per https://developer.yoast.com/features/opengraph/functional-specification.

#### Other

* Compatibility with Yoast SEO 14.0.
* Sets the minimum supported Yoast SEO version to 14.0.
* Sets the minimum supported WordPress version to 5.3.

## 12.7

Release date: 2020-03-31

#### Bugfixes

* Fixes a bug where PHP notices and a PHP warning were thrown for `Product` schema without a price.
* Fixes a bug where the `priceValidUntil` schema property wasn't output for products on sale with an explicitly set sale end date.

#### Enhancements

* Improves the Open Graph product availability for better compatibility with Facebook and Pinterest.
* Adds the product identifiers (GTIN, ISBN etc.) to the SEO title and Meta description replacement variables.
* Adds a `color` attribute to the `Product` Schema output.

## 12.6.2

Release date: 2020-03-11

#### Other

* We've tested with WooCommerce 4.0. Everything works as expected!

## 12.6.1

Release date: 2020-02-27

#### Bugfixes

* Fixes a bug where the product price and tax inclusion were not accurately reflected in the Schema and Open Graph metatags.

#### Enhancements

* Removes the `valueAddedTaxIncluded` Schema property when tax rate calculations are disabled in WooCommerce.
* Removes the 'Prices in Open Graph and Schema include tax' setting in the plugin. Whether tax is included in Open Graph and Schema now solely relies on your product page settings in WooCommerce.

## 12.6

Release date: 2020-02-18

#### Bugfixes

* Fixes a bug where the internal linking and additional keyphrase functionality are missing from the product edit page.
* Fixes a bug where the short description for the meta description and Twitter and Facebook description could still contain HTML tags and redundant spaces.

#### Enhancements

* Adds explanatory copy above the input fields for GTIN, ISBN etc.
* Adds an option to display the price in Schema and OpenGraph _with_ tax included.

## 12.5.1

Release date: 2020-02-05

#### Bugfixes

* Fixes a bug where not all product attributes were available in the Brands and Manufacturer dropdowns.

## 12.5

Release date: 2020-02-04

#### Enhancements

* Adds a Yoast SEO section to the WooCommerce product data metabox that allows entering a GTIN, ISBN and MPN number.
* Analyzes the content of the short description as part of the page content.
* Throws a warning when WooCommerce is not active.
* Adjusts the wording for when Yoast SEO is not active.

#### Schema

* Adds an `@id` attribute to every individual review.
* Adds a `name` attribute to every individual review.
* Adds an `@id` attribute to every offer.
* Adds a `productID` attribute to the `Product` output.
* Adds a `gtin8` attribute to the `Product` output.
* Adds a `gtin12` attribute to the `Product` output.
* Adds a `gtin13` attribute to the `Product` output.
* Adds a `gtin14` attribute to the `Product` output.
* Adds a `mpn` attribute to the `Product` output.
* Adds an `isbn` attribute to the `Product` output. If an ISBN is set, it double-types the schema output to `[ Product, Book ]`. By double typing it, the Product can have the attributes of both schema.org/Book and schema.org/Product, and thus it can have an ISBN attribute and a price etc.
* Removes the `priceValidUntil` attribute, as it's not sensible.

#### OpenGraph

* Adds a `product:condition` meta tag to the OpenGraph output. It defaults to `new` but can be filtered using the new `Yoast\WP\Woocommerce\product_condition` filter.
* Adds a `product:retailer_item_id` meta tag to the OpenGraph output for Facebook Catalog usage.

#### Bugfixes

* Don't try to use the WooCommerce shop page in the sitemap when it is not set in WooCommerce.
* Fixes a bug where the `product:brand` meta tag would not always be the selected primary term.
* Fixes a bug where the `product:availability` meta tag would be set to `instock` instead of the correct `in stock`.
* Fixes a bug where a PHP notice would be thrown on products with variations where a variation lacked an image.
* Fixes a bug where Organization would be used in the schema output, while no organization was set.
* Fixes a bug where non-public taxonomies could be chosen as manufacturer and brand.
* Fixes a bug where the shop page would be shown in the XML sitemap when it was set to `noindex`. Props [stodorovic](https://github.com/stodorovic).
* Fixes a bug where an empty `product:retailer_item_id` was output when there was no SKU.

#### Other

* Deprecates the `wpseo_woocommerce_og_price` filter hook in favor of the `Yoast\WP\Woocommerce\og_price` hook.

## 12.4.1

Release date: 2019-12-17

#### Bugfixes

* Fixes a bug where reviews weren't output in the Product schema when WooCommerce 3.8.1 was installed.

## 12.4

Release date: 2019-11-26

#### Other

* Sets the minimum WordPress version to 5.2 and the minimum Yoast SEO version to 12.6.
* Replaces the HelpScout beacon on the WooCommerce SEO admin page.

## 12.3

Release date: 2019-11-13

#### Bugfixes

* Fixes a bug where hidden products would show in the XML sitemap.

#### Other

* Sets the minimum required WordPress version to 5.2, and the minimum PHP version to 5.6.20.

## 12.2

Release date: 2019-10-15

#### Enhancements

* Shows a floating `Save changes` button on the Yoast SEO for WooCommerce admin page when the normal button is not visible in the browser window.

#### Other

* Removes the colon from the form labels in the settings.
* Compatibility with Yoast SEO 12.2

## 12.1

Release date: 2019-09-17

#### Other

* Compatibility with Yoast SEO 12.1

## 12.0

Release date: 2019-09-03

#### Bugfixes

* Fixes a bug where the primary category would not be reflected correctly in the product schema output when it was being used to set the manufacturer or brand.

#### Other

* Compatibility with Yoast SEO 12.0

## 11.9

Release date: 2019-08-20

#### Bugfixes

* Fixes a bug where invalid schema would be output when a product used the placeholder image.

#### Other

* Compatibility with Yoast SEO 11.9

## 11.8

Release date: 2019-08-06

#### Bugfixes

* Fixes a bug where the Yoast SEO WooCommerce schema was output when the `wpseo_json_ld_output` filter was set to false.

#### Other

* Compatibility with Yoast SEO 11.8

## 11.7

Release date: 2019-07-23

#### Other

* Compatibility with Yoast SEO 11.7

## 11.6

Release date: 2019-07-09

#### Other

* Fixes a deprecation notice when calling `get_woocommerce_term_meta`.
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

#### Bugfixes

* Fixes a bug where a PHP warning would occur on a product page when a review is added.
* Fixes bug where a fatal crash would occur on the checkout page when WooCommerce is not active.

#### Other

* Disables plugin when WooCommerce is not active.
* Compatibility with Yoast SEO 11.1

## 11.0

Release date: 2019-04-16

#### Enhancements

* Improves the integration of Woo &amp; Yoast's Schema output, bringing it to a whole new level.
* Schema: Changes page type on Checkout to `CheckoutPage`.
* Schema: Changes page type on Product to `ItemPage`.

#### Other

* Removes Woo breadcrumbs Schema output.
* Sets the minimum required Yoast SEO version to 11.0.

## 10.1

Release date: 2019-04-02

#### Enhancements

#### Changes `og:brand` to `product:brand` to match the OpenGraph specifications better.

#### Other

* Sets the minimum required Yoast SEO version to 10.1.
* Removes an empty method that has been deprecated since version 5.6.

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

#### Enhancements

* The short product description assessment in the SEO analysis is now updated whenever the description gets changed inside the Text-based editor (previously only in the Visual editor).

#### Bugfixes

* Fixes a bug where the WooCommerce breadcrumbs were not replaced by the Yoast SEO breadcrumbs.
* Fixes a bug where switching to the visual editor with the text editor active could cause the Product editor to crash.

#### Other

* Compatibility with Yoast SEO 9.3

## 9.2

Release date: 2018-11-20

* Compatibility with Yoast SEO 9.2

## 9.1

Release date: 2018-11-06

#### Bugfixes

* Fixes a bug where the `Yoast SEO Breadcrumbs` settings page link did not go to the correct page.
* Fixes a bug where a PHP warning would be displayed when `php_uname` has been disabled for security reasons.

#### Other

* Compatibility with Yoast SEO 9.1

## 9.0

Release date: 2018-10-09

* Compatibility with Yoast SEO 9.0

## 8.4

Release date: 2018-10-09

* Compatibility with Yoast SEO 8.4

## 8.3

Release date: 2018-09-25

* Compatibility with Yoast SEO 8.3

## 8.2

Release date: 2018-09-11

* Compatibility with Yoast SEO 8.2

## 8.1

Release date: 2018-08-28

* Compatibility with Yoast SEO 8.1

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

* Excludes the WooCommerce core pages from the sitemap, as they are set to `noindex` by WooCommerce.
* Hides excluded catalog products from the products sitemap.
* Compatibility with Yoast SEO 7.8

## 7.7

Release date: 2018-06-26

* Adds recommended templates with replacements variables for WooCommerce pages.
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

* Compatibility with Yoast SEO 7.2

## 7.1

Release date: 2018-03-20

* Compatibility with Yoast SEO 7.1

## 7.0

Release date: 2018-03-06

* Removes backfill for `wp_installing()` as this was introduced in WordPress 4.4.
* Requires WordPress 4.8 or higher to be installed.
* Requires Yoast SEO 7.0 or higher to be installed.
* Security hardening.

## 6.3

Release date: 2018-02-13

* Compatibility with Yoast SEO 6.3

## 6.2

Release date: 2018-01-23

#### Enhancements

* Adds `%%wc_price%%`, `%%wc_sku%%`, `%%wc_shortdesc%%` and `%%wc_brand%%` replacement variables for titles and meta description.

## 6.1

Release date: 2018-01-09

#### Enhancements

* Excludes product names from being translated.

## 6.0

Release date: 2017-12-20

* Compatibility with Yoast SEO 6.0

## 5.9

Release date: 2017-12-05

#### Bugfixes

* Fixes a bug where product gallery images were being placed above the featured image in the OpenGraph output. This caused an unexpected image to be used when sharing the page.
* Fixes a bug where the Yoast SEO link count columns where not removed from the product page when the setting `Remove Yoast SEO columns` is used.

#### Other

* Compatibility with Yoast SEO 5.9

## 5.8

Release date: 2017-11-15

* Compatibility with Yoast SEO 5.8

## 5.7

Release date: 2017-10-24

* Compatibility with Yoast SEO 5.7.

## 5.6

Release date: 2017-10-10

#### Enhancements

#### Changes the capability on which the submenu is registered to `wpseo_manage_options`
#### Changes the way the submenu is registered to use the `wpseo_submenu_pages` filter

#### Bugfixes

* Fixes a bug where the short product description was cut after 156 characters in the meta description
* Fixes a bug where the license check endpoint was using an incorrect URL

## 5.5

Release date: 2017-09-26

* Updated the internationalization module to version 3.0.
* Compatibility with Yoast SEO 5.5

## 5.4

Release date: 2017-09-06

* Compatibility with Yoast SEO 5.4

## 5.3

Release date: 2017-08-22

* Compatibility with Yoast SEO 5.3

## 5.2

Release date: 2017-08-08

* Compatibility with Yoast SEO 5.2

## 5.1

Release date: 2017-07-25

* Compatibility with Yoast SEO 5.1

## 5.0

Release date: 2017-07-06

* Compatibility with Yoast SEO 5.0.

## 4.9

Release date: 2017-06-07

* Adds a filter to set the primary category in the permalink.
* Adds fallbacks for several deprecated warnings.
* Fixes a bug where not all Yoast SEO columns were hidden when the columns output by Yoast were removed.

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

* Compatibility with Yoast SEO 4.5.

## 4.4

Release date: 2017-02-28

* Compatibility with Yoast SEO 4.4

## 4.3

Release date: 2017-02-14

#### Bugfixes

* Fixes a bug where duplicate opengraph image tags were added to product categories.

## 4.2.1

Release date: 2017-02-03

#### Bugfixes

* Fixes "Fatal error: Class 'yoast_i18n' not found".

## 4.2

Release date: 2017-01-31

* Compatibility with Yoast SEO 4.2

## 4.1

Release date: 2017-01-17

* Compatibility with Yoast SEO 4.1

## 4.0

Release date: 2016-12-13

* Compatibility with Yoast SEO 4.0

## 3.9

Release date: 2016-11-29

* Compatibility with Yoast SEO 3.9

## 3.8

Release date: 2016-11-08

* Compatibility with Yoast SEO 3.8

## 3.7

Release date: 2016-10-11

* Compatibility with Yoast SEO 3.7

## 3.6

Release date: 2016-09-27

#### Changes

* Updated translations.

## 3.5

Release date: 2016-09-07

* Compatibility with Yoast SEO 3.5

## 3.4

Release date: 2016-07-19

#### Changes

* Updated translations.

## 3.3

Release date: 2016-06-14

#### Enhancements

* Adds the Yoast i18n module to the Yoast SEO WooCommerce settings page, which informs users the plugin isn't available in their language and what they can do about it.

#### Bugfixes

* Fixes a bug where the support beacon for Yoast SEO WooCommerce was added to all Yoast SEO settings pages.
* Fixes a bug where updates were not working reliably when multiple paid Yoast plugins were active.

## 3.2.1

Release date: 2016-04-28

#### Bug fixes
* Fixes a bug where the rel=next and rel=prev links were not displayed on shop archive pages 2 and up.

## 3.2

Release date: 2016-04-20

#### Bug fixes
* Fixes a bug where clicking the 'Update now' button on the plugin page didn't update correctly.
* Fixes a bug where product specific checks that were added to the content analysis would no longer work in combination with Yoast SEO 3.2 and higher.

## 3.1.1

Release date: 2016-03-02

#### Bug fixes

* Fixes a bug where the Yoast content analysis would break on product edit pages when Yoast WooCommerce SEO and Yoast SEO (Premium) 3.1+ are both active.

## 3.1

Release date: 2016-03-02

#### Bug fixes

* Fixes a bug where our license manager could sometimes not reach our licensing system due to problems with ssl.

#### Enhancements

* Makes sure users don't have to reactivate their license after updating or disabling/enabling the plugin.
* Adds a support beacon on the WooCommerce SEO settings page enabling users to ask for support from the WordPress backend.
* Makes license calls a bit faster.
* Removed all Twitter card functionality since the Product twitter card no longer exists.

## 3.0

Release date: 2015-11-18

* Synchronized plugin version with all other Yoast SEO plugins for WordPress.

#### Bugfixes

* Fixes deprecation warnings for filters and functions that have been removed in Yoast SEO
* Fixes a fatal on the frontend when WooCommerce SEO is active but WooCommerce isn't.

#### Enhancements

* Makes sure WooCommerce specific content analysis checks work well with the Real Time content analysis tool in Yoast SEO 3.0.
* Makes sure the product image galleries are still analyzed as part of the content by the Real Time content analysis tool in Yoast SEO 3.0.
* Improves the order in which Opengraph images are output. First the Facebook image, then the featured image, then the product gallery images.

## 1.1.6

Release date: 2014-03-25

#### Bugfixes

* Fixes a bug where a Fatal error was being raised on the frontend when WooCommerce is not activated.
* Fixes a bug where Open Graph image tags for featured images and facebook images were not included first when a product image gallery existed.

#### Enhancements

* Defaults to the short description for the meta description when no meta description is set.
* Added 8 new languages: da_DK, en_GB, es_ES, es_MX, it_IT, nb_NO, nl_NL and tr_TR.

## 1.1.5

Release date: 2014-09-09

* Bugfix: prevent adding WooCommerce product archive link to XML sitemap.

## 1.1.4

Release date: 2014-07-15

* Add `wpseo_woocommerce_og_price` filter. Returning false on it prevents price from being put out in OpenGraph tags.
* Add attribute to breadcrumbs when attribute is selected.
* Removed unused breadcrumb option.
* Only initiate plugin when WP is not installing.

## 1.1.3

Release date: 2014-06-24

* Improved how WooCommerce breadcrumbs are replaced.
* Fixed double class instantiation within same method.
* Add call to `load_plugin_textdomain()`.
* Make sure we recognize WooCommerce product gallery images in page analysis.
* Add images from product gallery to XML sitemap.
* Use product category thumbnail for `og:image`.
* Make sure short description length test also soft errors when short description is too long.
* Use WooCommerce price formatting functions for price in Twitter card.

## 1.1.2

Release date: 2014-03-21

* Fixed a bug where the breadcrumb caused a fatal error.

## 1.1.1

Release date: 2014-03-21

* Added Yoast license manager to plugin.

## 1.1

Release date: 2014-03-11

* Compatibility update for WP SEO v1.5 including application of a number of best practices.
#### Bugfixes
* Fixed shortcodes should be removed from ogdesc.
* Fixed duplicate twitter domain meta tag
* Fixed error loading stylesheet (WPSEO_URL no longer defined).
* Additional enhancements
* Change the minimum content length requirements to 200, instead of the WP SEO default of 300.
* Add a length test for the products short description.
* Make sure the content analysis tests use the product images as well.
* If a product category has a description, use it for the OpenGraph description.
* Switch to general WP SEO Licensing class

## 1.0.1

Release date: 2014-02-17

* Add check whether WordPress and WordPress SEO by Yoast are installed and up-to-date

## 1.0

Release date: 2013-04-08

* Initial version.

## 1.1

Release date: 2014-03-11

* Please upgrade the WordPress SEO plugin to version 1.5 as well for compatibility.
