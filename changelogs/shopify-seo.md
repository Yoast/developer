## 04/04/2024 08:10 (UTC)

Release date: 2024-04-04

#### Enhancements

* Improve clarification on how Yoast SEO for Shopify overrides some Shopify settings.

#### Bugfixes

* Fixes a bug where new content would not be available for bulk editing.

## 25/03/2024 07:57 (UTC)

Release date: 2024-03-25

#### Enhancements

* Adds review request modal after Site defaults settings save.

## 21/03/2024 08:37 (UTC)

Release date: 2024-03-21

#### Bugfixes

* Fixes an issue where existing schema would not be disabled when the context is set as http://www.schema.org.

## 18/03/2024 08:44 (UTC)

Release date: 2024-03-18

#### Enhancements

* Changes the background color to the Yoast global standard.
* Changes "Twitter" into "X" as a profile for site representation.
* Changes "Twitter" into "X" for the social appearance preview.
* Improves keyphrase detection by treating hyphens and en-dashes as word boundaries. For example, if the keyphrase is 'dog-training tips', a keyphrase occurrence will be recognized as long as the words 'dog', 'training', and 'tips' are found in the same sentence.
* Improves recognition of single-word function words for Arabic and Hebrew.
* Improves the highlighting of keyphrases that contain hyphens or dashes. For example, if the keyphrase is 'Cold War era', it will be correctly highlighted in the phrase 'post-Cold War era'. Previously, the word 'post' would also be highlighted.
* Improves the _inclusive language analysis_ by refining feedback strings and excluding false positives for phrases related to mental health.

#### Bugfixes

* Fixes a bug where the _keyphrase in slug_ assessment would crash when the site language was Indonesian, the keyphrase contained a reduplicated word (e.g. 'buku-buku'), and a form of that word also occurred in the slug.

## 11/03/2024 08:57 (UTC)

Release date: 2024-03-11

#### Bugfixes

* Fixes a bug where the file upload element inside bulk edit and import/export would have strange text alignment in several languages.

## 05/03/2024 08:10 (UTC)

Release date: 2024-03-05

#### Enhancements

* Makes the section headings stand out visually in the _SEO_, _readability_ and _inclusive language_ analysis tabs.

## 28/02/2024 09:33 (UTC)

Release date: 2024-02-28

#### Bugfixes

* Fixes issue with twitter:image URL generation, when adding "https" schema.

## 23/02/2024 10:12 (UTC)

Release date: 2024-02-23

#### Enhancements

* Removes loading animation from app initialization process.

## 20/02/2024 08:13 (UTC)

Release date: 2024-02-20

#### Bugfixes

* Adds loading state in theme integrations page during wait for api response.

## 16/02/2024 08:22 (UTC)

Release date: 2024-02-16

#### Bugfixes

* Fixes a bug where `ImageObject` schema would have empty width and height values.
* Fixes a bug where "x.com" was not allowed to be used in Twitter profile URL configuration.

## 07/02/2024 06:53 (UTC)

Release date: 2024-02-07

#### Bugfixes

* Fixes issue with displaying "Inclusive language analysis" feature in Optimize content editor.

## 06/02/2024 10:48 (UTC)

Release date: 2024-02-06

#### Bugfixes

* Fixes a bug where conflicting `<title>` tags with attributes would not be cleaned up when integrating with a theme.

## 06/02/2024 08:24 (UTC)

Release date: 2024-02-06

#### Bugfixes

* Improves app load speed.

## 25/01/2024 09:55 (UTC)

Release date: 2024-01-25

#### Bugfixes

* Fixes a bug where a `<title>` element would be disabled in a theme when it appeared inside an `<svg>` element.

## 23/01/2024 08:21 (UTC)

Release date: 2024-01-23

#### Bugfixes

* Fixes a bug where highlighting would be applied incorrectly when keyphrase occurrences contained different types of apostrophes than `'` in the _keyphrase distribution_ assessment.

## 04/01/2024 08:36 (UTC)

Release date: 2024-01-04

#### Bugfixes

* Fixes a bug where a banner would be briefly showing a warning about an incomplete theme integration when actually having completed the integration.

## 28/12/2023 08:06 (UTC)

Release date: 2023-12-28

#### Bugfixes

* Improves theme integration progress bar to reflect more realistic status.

## 19/12/2023 09:50 (UTC)

Release date: 2023-12-19

#### Enhancements

* Improves the accuracy of the _word complexity_ assessment for French by recognizing more plural forms of non-complex words. For example, the plural form "résidences" is not marked as a complex word anymore, just like the singular form "résidence".

## 18/12/2023 08:10 (UTC)

Release date: 2023-12-18

#### Bugfixes

* Fixes issue with welcome back view for users who reinstall the app.
* Fixes a bug where the default settings for search appearance would not be applied when optimizing a content item.

## 13/12/2023 09:36 (UTC)

Release date: 2023-12-13

#### Enhancements

* Improved performance of the app.
* Remembers last used country when retrieving related keyphrases with Semrush, and selects the country by default on subsequent usage.

## 22/11/2023 08:47 (UTC)

Release date: 2023-11-22

#### Enhancements

* Introduces the possibility to have the Yoast SEO subscription billed annually.

#### Bugfixes

* Fixes a bug where the the current page in the breadcrumb block would use an `<a>` tag without an `href` attribute.

## 06/11/2023 10:55 (UTC)

Release date: 2023-11-06

#### Enhancements

* Improves the _word complexity_ assessment for English by expanding the list of frequently used words.
* Improves the _inclusive language_ analysis by making the feedback more clear and consistent, refining the list of targeted phrases, and adding more alternatives for some of the non-inclusive phrases. Specifically, this includes the following changes:
  * Aligns the traffic light color and written feedback for all phrases.
  * Makes some feedback strings more accurate by replacing the word ‘overgeneralizing’ with ‘harmful’.
  * Adds ‘Rom’ and ‘Roma’ as additional alternatives to ‘gypsy’.
  * Adds additional alternatives to ‘homosexuals’.
  * Improves the feedback shown for the phrases ‘abnormal behaviour’, ‘behaviourally normal’, and ‘behaviourally abnormal’.
  * Improves the feedback shown for the word ‘minorities’.
  * Removes ‘narcissistic’ as a targeted phrase when followed by ‘personality disorder’.
  * Removes ‘Ebonics’ and ‘normal behaviour’ from the list of targeted phrases.

## 01/11/2023 08:57 (UTC)

Release date: 2023-11-01

#### Other

* No longer highlight the Semrush integration card with a "new" badge.

## 26/10/2023 07:20 (UTC)

Release date: 2023-10-26

#### Enhancements

* Allows opening the details view in a new browser tab or window natively.

## 24/10/2023 08:55 (UTC)

Release date: 2023-10-24

#### Enhancements

* Improves keyphrase matching in Japanese by being able to match keyphrase occurrences that contain upper case characters.
* Introduces more robust HTML processing and highlighting for the _keyphrase density_ and _single H1_ assessments.
* Updates the list of HTML elements that should be excluded from the content analysis.

#### Bugfixes

* Fixes a bug where highlighting was not applied to keyphrase occurrences that contained different types of apostrophes than `'`.
* Fixes a bug where the _single title_ assessment would be triggered when adding a H1 without text.

## 19/10/2023 13:01 (UTC)

Release date: 2023-10-19

#### Bugfixes

* Fixes a bug where the subscription page would not have the right styling applied.
* Fixes a bug where the welcome back page would not have the right styling applied.

## 13/10/2023 07:27 (UTC)

Release date: 2023-10-13

#### Enhancements

* Changes design of Integrations Settings page.

#### Other

* Speeds up the app loading time.

## 11/10/2023 10:30 (UTC)

Release date: 2023-10-11

#### Enhancements

* Adds _Semrush_ integration promotion banner inside app.

## 26/09/2023 13:10 (UTC)

Release date: 2023-09-26

#### Bugfixes

* Fixes a bug where the _keyphrase in introduction_ assessment would fail to find the first paragraph.

## 25/09/2023 12:12 (UTC)

Release date: 2023-09-25

#### Enhancements

* Clarifies notice about the connection to Semrush when facing issues in the connection.
* Merges Facebook preview and Twitter preview collapsibles into Social media appearance.
* Renames Google preview collapsible to Search appearance.

## 15/09/2023 05:28 (UTC)

Release date: 2023-09-15

#### Other

* Introduces a questionnaire to new customers about their reasons for installing.

## 23/08/2023 11:20 (UTC)

Release date: 2023-08-23

#### Enhancements

* NEW: Adds an integration with Semrush. It enables you to find related high-performing keywords and keyphrase insights right in the Shopify editor and write relevant high-quality content!

## 15/08/2023 06:32 (UTC)

Release date: 2023-08-15

#### Bugfixes

* Fixes issues with list of blogs limited to 20 records.

## 14/08/2023 08:46 (UTC)

Release date: 2023-08-14

#### Enhancements

* Improves copy about the follow-up steps after finishing the bulk import process.

## 09/08/2023 07:55 (UTC)

Release date: 2023-08-09

#### Enhancements

* Adds support for metaobject in custom page types.

## 28/07/2023 08:34 (UTC)

Release date: 2023-07-28

#### Enhancements

* Excludes separator and site title from _SEO title width_ assessment and from the calculation in the SEO title progress bar.
* Updates the verification link to the Google Search Console in the Webmaster tools section in Site settings.

## 18/07/2023 07:33 (UTC)

Release date: 2023-07-18

#### Bugfixes

* Improves performance of the process of importing Yoast CSV files.

## 04/07/2023 09:16 (UTC)

Release date: 2023-07-04

#### Enhancements

* Adds redirection to welcome app after first successfull integration process.

## 03/07/2023 08:49 (UTC)

Release date: 2023-07-03

#### Enhancements

* Excludes separator and site title from _SEO title width_ assessment and from the calculation in the SEO title progress bar.

## 29/06/2023 07:04 (UTC)

Release date: 2023-06-29

#### Enhancements

* Expands the list of HTML elements excluded from the content analysis.
* Introduces more robust HTML processing for the _competing links_, _keyphrase in introduction_, _image alt text_, _image keyphrase_, and _images_ assessments.

## 08/06/2023 12:01 (UTC)

Release date: 2023-06-08

#### Bugfixes

* Fixes a bug where a corrupted `ImageObject` would be in the Schema output when using an image in the content without a more specific Google / Facebook targeted image.

#### Other

* Removes the new badge from the insights section.

## 08/06/2023 07:53 (UTC)

Release date: 2023-06-08

#### Bugfixes

* Fixes a bug where the `aggregateRating` Schema property would not be added for products.

## 01/06/2023 09:18 (UTC)

Release date: 2023-06-01

#### Enhancements

* Improves feedback strings for _keyphrase density_ assessment by referring to the keyphrase in general instead of the focus keyphrase.

## 31/05/2023 05:27 (UTC)

Release date: 2023-05-31

#### Bugfixes

* Fixes issue with starting multiple theme modifications processes.

## 18/05/2023 10:30 (UTC)

Release date: 2023-05-18

#### Bugfixes

* Fixes issue with keeping subscription status metafield updated.

## 17/05/2023 10:53 (UTC)

Release date: 2023-05-17

#### Bugfixes

* Fixes a bug where the structured data markup would be invalid when a product has a featured image.

## 17/05/2023 08:31 (UTC)

Release date: 2023-05-17

#### Bugfixes

* Fixes a bug where the SEO conflict removal would not succeed with certain codes in the theme assets.

## 16/05/2023 07:54 (UTC)

Release date: 2023-05-16

#### Enhancements

* Updated the Yoast SEO for Shopify app to make it compatible with Online Store 2.0 themes.

## 25/04/2023 07:53 (UTC)

Release date: 2023-04-25

#### Enhancements

* Improves the recognition of keyphrases starting with a period (e.g., ".net developer") by the _keyphrase in title_ assessment.
* Updates mobile and desktop Google snippet previews to be in line with Google's current styling.

## 24/03/2023 08:36 (UTC)

Release date: 2023-03-24

#### Enhancements

* Adds `@id` property to the Schema.org Offer pieces.

## 16/03/2023 12:15 (UTC)

Release date: 2023-03-16

#### Enhancements

* Enhances the _word complexity_ assessment for English by filtering out more function words.
* Improves the detection of participles in the _passive voice_ assessment for Portuguese.
* Improves the  _transition words_ assessment for Portuguese by adding new transition words. Props to [mathiasribeiro](https://github.com/mathiasribeiro).

## 15/03/2023 10:45 (UTC)

Release date: 2023-03-15

#### Enhancements

* Enables free testing for affiliate stores.
* Introduces more details for development stores about the subscription.
* Updates the Schema output screen to clarify the enabling/disabling behavior.

## 14/03/2023 13:46 (UTC)

Release date: 2023-03-14

#### Other

* Removes the beta badge label for _inclusive language analysis_ collapsible and feature toggle.

## 14/03/2023 08:06 (UTC)

Release date: 2023-03-14

#### Enhancements

* Improves the positioning of the "Skip" link in the welcome app so it aligns with the help button.

#### Bugfixes

* Fixes issue with removed "excerpt" during blog post optimization.

## 06/03/2023 11:08 (UTC)

Release date: 2023-03-06

#### Bugfixes

* Fixes styling of the arrow for the "add related keyphrase"-button in the Optimize module.

## 02/03/2023 13:45 (UTC)

Release date: 2023-03-02

#### Bugfixes

* Fixes a security issue in the editor.

## 01/03/2023 11:53 (UTC)

Release date: 2023-03-01

#### Bugfixes

* Removes "keywords" Schema element for Product and Blog page, which used the tags from that content in the wrong context.

## 15/02/2023 08:25 (UTC)

Release date: 2023-02-15

#### Enhancements

* Adds the site name to the Google preview for mobile.
* Improves the inclusive language analysis by expanding the number of non-inclusive phrases recognized as well as by improving the feedback, for example by adding more inclusive alternatives or fixing inconsistencies. Specifically, this includes the following changes:
  * Adds word form support (singular vs. plural, different verb forms) for some non-inclusive phrases.
  * Improves the feedback strings and suggested alternatives for phrases containing the terms "crazy" and "OCD".
  * Improves the feedback strings pertaining to medical conditions.
  * Improves the feedback strings for "binge", "preferred pronouns", and "preferred name".
  * Changes the scoring and improves the feedback string for "ladies and gentleman".
  * Excludes the phrases "binge drinking/drinks/drink" and "exotic shorthairs/longhairs" from being targeted as non-inclusive.

#### Bugfixes

* Fixes a bug where the `yoastmark` tags broke the HTML when applied to inline HTML attributes.

## 03/02/2023 09:16 (UTC)

Release date: 2023-02-03

#### Bugfixes

* Fixes a bug where a button to discard unsaved data would not show clearly as such an impactful button.
* Fixes a bug where the deactivation button would not show clearly as an impactful button that removes functionality.
* Fixes a bug where the loading animation would not show up during the deactivation process.

## 01/02/2023 08:01 (UTC)

Release date: 2023-02-01

#### Enhancements

* Adds extra information on upgrade page about date of first charge after Trial.

## 17/01/2023 09:09 (UTC)

Release date: 2023-01-17

#### Enhancements

* Improves Japanese character count by excluding all spaces from the character count.
* Improves the inclusive language analysis by expanding the number of non-inclusive phrases recognized as well as by improving the feedback, for example by adding more inclusive alternatives or fixing inconsistencies. Specifically, this includes the following changes:
  * Adds "OCD", "normal" and "abnormal" to the terms that are targeted by the _inclusive language analysis_ in specific contexts.
  * Adds "stupid" to the terms that are always targeted by the _inclusive language analysis_.
  * Removes the term "African American Vernacular English" from the terms targeted by the  _inclusive language analysis_.  
  * Changes the terms "exotic" and "oriental" to be considered potentially non-inclusive in the _inclusive language analysis_, adds exceptions and updates their feedback.
  * Improves the categorization of the targeted terms in the _inclusive language analysis_ by splitting the `other` category into a more specific one.
  * Improves the feedback for some (potentially) non-inclusive target terms in the _inclusive language analysis_.
  * Adds more alternatives to some (potentially) non-inclusive target terms in the _inclusive language analysis_.
  * Adds terms that are only considered (potentially) non-inclusive when they are followed by certain words or a punctuation mark.
* Improves the prominent words section in Insights by excluding URLs and email addresses from the prominent words.
* Improves the style of the marker buttons in the analysis reports to align with the rest of the UI.
* Improves the way we calculate text length of Japanese texts, for example by excluding all spaces from the character count. This improves the accuracy of many assessments in Japanese, such as the text length assessment or the sentence length assessment.

## 10/01/2023 09:30 (UTC)

Release date: 2023-01-10

#### Bugfixes

* Fixes a bug where merchants with a long myshopify.com domain would not be able to install and use our app.
* Fixes a bug where parts of the content would disappear in the editor when user writes it fast inside content editor.
* Fixes a bug where the AggregateRating piece would be added to the schema graph when there was no rating data.
* Fixes a bug where the default analysis was previously used to analyze content in a language that we support when a variant of that language is used in the store. Now, when the store language is set to e.g. British English or Portuguese (Brazil), the content will be analyzed using the main variant's language-specific analysis.

## 20/12/2022 13:05 (UTC)

Release date: 2022-12-20

#### Enhancements

* Adds a new tab with additional insights about the content.

#### Bugfixes

* Adjust styling of Inclusive Language analysis to fit other analysis sections.

## 15/12/2022 07:34 (UTC)

Release date: 2022-12-15

#### Bugfixes

* Fixes a bug where highlighting would not be removed from the text after the analysis is updated and the present highlighting has become irrelevant.
* Only marks the subheading when a subheading text is too long in subheading distribution assessment.

## 14/12/2022 10:37 (UTC)

Release date: 2022-12-14

#### Enhancements

* Adds an Inclusive language analysis for products, blog posts, blogs, collections and pages.
* Improves the _subheading distribution_ assessment by adding highlighting and also targeting long content before the first subheading.
* Improves the _transition words_ assessment for Arabic by removing some transition words.

#### Other

* Removes the beta badge from the _word complexity_ assessment.

## 12/12/2022 12:21 (UTC)

Release date: 2022-12-12

#### Enhancements

* Adds support for Shopify standard review metafield to the `aggregateRating` schema output.

## 01/12/2022 11:49 (UTC)

Release date: 2022-12-01

#### Enhancements

* Adds "seller" property to "offer" schema.
* Add support for "checkoutPageURLTemplate" in "offers" schema.
* Removed support for BlackFriday code.

## 17/11/2022 13:10 (UTC)

Release date: 2022-11-17

#### Enhancements

* Adds the included trial days on the subscription offer when a merchant is still eligible for a trial.

## 14/11/2022 09:11 (UTC)

Release date: 2022-11-14 09:11

#### Enhancements

* Enhances the discount code form with translated feedback.
* Informs all free users about the removal of our free plan and provides the means to continue using the app.

## 10/11/2022 12:27 (UTC)

Release date: 2022-11-10 12:27

#### Bugfixes

* Fixes a bug where the SKU variable would not be replaced in the Google Preview.

## 07/11/2022 10:30 (UTC)

Release date: 2022-11-07 10:30

#### Enhancements

* Introduces a new page to show an order summary before Shopify’s subscription page.

## 26/10/2022 09:53 (UTC)

Release date: 2022-10-26 09:53

#### Enhancements

* Introduced integration with generic Shopify APIs so that integration with third-party apps is easier, like translation apps.
* Adds support for Shopify’s automatically generated page description as the meta description.
* Adds the possibility to have page descriptions translated.

## 25/10/2022 09:20 (UTC)

Release date: 2022-10-25 09:20

#### Enhancements

* Adds support for "Website name", "Alternate website name" and "Alternate organization name" settings for Schema generation.

## 20/10/2022 13:44 (UTC)

Release date: 2022-10-20 13:44

#### Enhancements

* Enhanced the Shopify search engine preview by adding warnings when the title or description are not being used in the SEO output because of a missing (or removed) variable, which is set by default.

## 19/10/2022 07:56 (UTC)

Release date: 2022-10-19 07:56

* Removes the free payment plan for Yoast SEO for Shopify, which means there’s only a paid plan available for users.

## 14/10/2022 08:44 (UTC)

Release date: 2022-10-10 08:44

#### Enhancements

* Updated to the latest Shopify App Bridge version.
* Adds support for the new Shopify admin domain  `admin.shopify.com `.
* Adds support for visiting and sharing the app url to go to specific pages inside the app.

## 10/10/2022 08:44 (UTC)

Release date: 2022-10-10 08:44

#### Bugfixes

* Adds support of `<br/> ` tags in content optimization editor.

## 07/10/2022 07:39 (UTC)

Release date: 2022-10-07 07:39

#### Bugfixes

* Fixes a bug where blog posts would no longer be loaded in the overview for a specific blog.

## 03/10/2022 10:43 (UTC)

Release date: 2022-10-03 10:43

#### Bugfixes

* Fixes a bug where the assessments for related keyphrases did not take the replacements of variables into account.

## 19/09/2022 09:20 (UTC)

Release date: 2022-09-19 09:20

#### Enhancements

* Improved the loading times of the app pages.

## 15/09/2022 13:27 (UTC)

Release date: 2022-09-15 13:27

#### Enhancements

* Adds the word complexity assessment for Spanish, German and French.
* Enables full metatag and Schema.org output for Shopify's Policy pages.
* Enables the SKU and Barcode assessments.
* Improves sentence recognition for German by disregarding ordinal numbers as potential sentence boundaries.
* Improves the readability analysis for English by adding a word complexity assessment.


#### Bugfixes

* Fixes a bug where the desktop preview would show a truncated title, while the title length progress bar and title width assessment would indicate that the title length was still within the limits.

## 14/09/2022 11:31 (UTC)

Release date: 2022-09-14 11:31

#### Enhancements

* Improves `Offers` / `priceSpecification` Schema output to match Google’s recent changes to their guidelines.

## 09/09/2022 08:01 (UTC)

Release date: 2022-09-09 08:01

#### Bugfixes

* Fixs a bug where after cancelling the App subscription, the page would not show that this succeeded correctly, although the subscription was cancelled succesfully.

## 08/09/2022 11:34 (UTC)

Release date: 2022-09-08 11:34

#### Enhancements

* Improved the loading time of the pages of the app.

## 06/09/2022 09:57 (UTC)

Release date: 2022-09-06 09:57

#### Enhancements

* Adds the "review" property to product schema when provided by Loox.

## 02/09/2022 12:26 (UTC)

Release date: 2022-09-02 12:26

#### Enhancements

* Enhances the SEO output by adding a `og:price:standard_amount` for discounted products. This is something that Pinterest could use to enhance their product pins.

## 30/08/2022 18:39 (UTC)

Release date: 2022-08-30 18:39

#### Bugfixes

* Fixes a bug where the app would continuously reload.

## 30/08/2022 11:16 (UTC)

Release date: 2022-08-30 11:16

#### Bugfixes

* Fixes a bug where a text starting with a double quotation mark followed by a space(s) broke the analysis.

## 22/08/2022 15:06 (UTC)

Release date: 2022-08-22 15:06

#### Bugfixes

* Fixes a bug where a non-breaking space in a sentence breaks the keyword density marking.

## 09/08/2022 08:32 (UTC)

Release date: 2022-08-09 08:32

#### Enhancements

* Introduces a free plan which can be used to try out the full experience of Yoast SEO for Shopify on 5 content pages.

#### Bugfixes

* Fixes a bug where `style` tags with a `type` attribute in the content would result in an empty content editor in the Optimize module.

## 29/07/2022 10:00 (UTC)

Release date: 2022-07-28 07:50

#### Bugfixes
 
* Fixes a bug where the Yoast theme modifications would remove site verification codes that are already present in the theme.

## 28/07/2022 10:00 (UTC)

Release date: 2022-07-28 07:50

#### Enhancements

* Adds the word complexity assessment for Spanish, German and French.
* Improves the text analysis by adding curly (“”) and angular quotation marks.
* Improves the text analysis by filtering out all versions of the ampersand.

## 27/07/2022 09:25 (UTC)

Release date: 2022-07-27 09:25

#### Enhancements

* Improves sentence recognition for German by disregarding ordinal numbers as potential sentence boundaries.
* Improves the readability analysis for English by adding a word complexity assessment.

#### Bugfixes

* Fixes a bug where the desktop preview would show a truncated title, while the title length progress bar and title width assessment would indicate that the title length was still within the limits.
* Fixes a bug where the keyphrase density and keyphrase distribution assessments error, or fails to mark the found keyphrases in the text, when using keyphrases that include some regular expression control characters, for example brackets.

## 19/07/2022 09:33 (UTC)

Release date: 2022-07-19 09:33

#### Enhancements

* Introduces a bulk editor feature which makes it easier to improve the SEO data (e.g. SEO title & meta description) of multiple content pages at once. Users can make improvements by exporting and importing their content through a CSV file.

## 13/07/2022 07:59 (UTC)

Release date: 2022-07-13 07:59

#### Enhancements

* Adds quotation marks followed by period as valid sentence endings.
* Improves recognition of keyphrases appearing with em dashes.
* Improves text analysis by splitting text on full-stop only when the next sentence is preceded by a whitespace.
* Improves the accuracy of the Keyphrase in slug assessment by recognizing different word forms of hyphenated keyphrases in the slug (e.g. if keyphrase is  `ex-husband ` and slug is  `ex-husbands `).
* Improves the content analysis by excluding blockquote HTML elements.
* Improves the sentence recognition by disregarding abbreviations as potential sentence boundaries.
* Improves the sentence recognition by disregarding initials as potential sentence boundaries.
* Improves the text analysis by not always splitting on ellipsis … regardless of whether the next sentence has a valid beginning or not.
* Improves the text analysis by not splitting sentences on semicolon ;.
* Improves the text analysis by supporting sentence detection for declarative sentences in quotation marks.

#### Bugfixes

* Fixes a bug where items in lists were not excluded for the readability assessment that checks whether consecutive sentences do not begin with the same words in Collections, Posts and Pages.
* Fixes a bug where some words were not correctly recognized when preceded or followed by a non-breaking space (`&nbsp;`).
* Fixes a bug which caused the Spanish transition word `para ilustrar` to not be recognized transition words assessment.

#### Other

* Renames the 'Keyphrase in title' SEO assessment to 'Keyphrase in SEO title'.

## 06/07/2022 12:18 (UTC)

Release date: 2022-07-06 12:18

#### Enhancements

* Introduces the SEO data migration (beta) feature to let you easily import your SEO data (e.g., SEO title & meta description). With this, you're no longer bound to a specific SEO app on Shopify and it's easier to switch to Yoast SEO.

## 01/07/2022 07:37 (UTC)

Release date: 2022-07-01 07:37

#### Enhancements

* Removes the date shown in the Google preview for products, collections and blogs.

## 15/06/2022 14:15 (UTC)

Release date: 2022-06-15 14:15

#### Enhancements

* Enhances the Schema.org graph by adding the `gtin` property to the `Offer` piece to provide the product (variant) barcode.

## 15/06/2022 09:25 (UTC)

Release date: 2022-06-15 09:25

#### Bugfixes

* Fixes a bug where notifications about errors in the theme modifications would show multiple times and could not be dismissed.

## 09/06/2022 12:29 (UTC)

Release date: 2022-06-09 12:29

#### Bugfixes

* Fixes a bug in our theme SEO improvement service by ignoring Liquid code in between `{% raw %}` and `{% endraw %}` tags.

## 08/06/2022 13:21 (UTC)

Release date: 2022-06-08 13:21

#### Bugfixes

* Fixes inaccurate values being output for the Offer schema of a product without variants

## 30/05/2022 09:19 (UTC)

Release date: 2022-05-30 09:19

#### Enhancements

* Ensures the storage of our metafield data uses the new metafield type system for Online Store 2.0.

## 23/05/2022 13:23 (UTC)

Release date: 2022-05-23 13:23

#### Enhancements

* Updates the retrieval of our metafield data in theme files, to support the new metafield type system for Online Store 2.0.

## 23/05/2022 12:01 (UTC)

Release date: 2022-05-23 12:01

#### Bugfixes

* Fixes a bug where the Yandex webmaster tool verification code would be considered invalid as it expected at least 20 characters instead of 16.

## 20/05/2022 10:19 (UTC)

Release date: 2022-05-20 10:19

#### Enhancements

* Improves the Schema detection by adding subtype detection of Article and WebPage.


#### Bugfixes

* Fixes a bug where the wrong formatting would be used for Twitter metatags.
* Fixes a bug where the wrong formatting would be used for webmaster verification metatags.

## 18/05/2022 08:24 (UTC)

Release date: 2022-05-18 08:24

#### Bugfixes

* Adds support for product variants without SKU defined, inside Offers Schema.

## 16/05/2022 14:30 (UTC)

Release date: 2022-05-16 14:30

#### Bugfixes

* Fixes a bug where Offers Schema would be generated for variants when no SKU value was available.
* Fixes a bug where Offers Schema would contain invalid names when the product or variant title included quotes.

## 12/05/2022 08:39 (UTC)

Release date: 2022-05-12 08:39

#### Enhancements

* Removes penalising for H1 that is not at the beginning of the text body.

## 11/05/2022 12:07 (UTC)

Release date: 2022-05-11 12:07

#### Enhancements

* Improves replacement variable naming to better reflect the Shopify fields we're sourcing the data from for Shopify page title and Shopify meta description.
* Improves the Product Schema output, creating a list of offers instead of one aggregateOffer entry.

## 05/05/2022 10:02 (UTC)

Release date: 2022-05-05 10:02

#### Enhancements

* Places the SEO analysis right below the focus keyphrase input field in the Optimize sidebar.

## 26/04/2022 13:12 (UTC)

Release date: 2022-04-26 13:12

#### Enhancements

* Enhances the editor to allow for JavaScript attributes to be present on HTML elements.

## 20/04/2022 15:03 (UTC)

Release date: 2022-04-20 15:03

#### Enhancements

* Changed the filtering for Collections to read "Availability" instead of "Visibility" to better match the Shopify UI.

## 19/04/2022 10:54 (UTC)

Release date: 2022-04-19 09:00

#### Enhancements

* Adds information about the review app that is used as source of data inside AggregateRating section of our Product schema piece.
* Adds integration with Judge.me Product Reviews to improve rich snippets.
* Adds integration with Loox Product Reviews to improve rich snippets.
* Adds integration with Ali Reviews to improve rich snippets.
* Adds integration with Opinew Product Reviews to improve rich snippets.

## 19/04/2022 09:00 (UTC)

Release date: 2022-04-19 09:00

#### Enhancements

* Enhances the Google Preview to show the URL of the item in the shop.

## 08/04/2022 13:15 (UTC)

Release date: 2022-04-08 13:15

#### Bugfixes

* Fixes a bug where the content for online store pages would be stored in an undesired format when saving from the Optimize module.

## 06/04/2022 08:38 (UTC)

Release date: 2022-04-06 08:38

#### Bugfixes

* Fixes a bug where the text markers were unable to mark text containing special characters.

## 31/03/2022 09:16 (UTC)

Release date: 2022-03-31 09:16

#### Enhancements

* Changes the price for Yoast SEO for Shopify subscriptions from $29 dollars per month to $19 dollars per month. Why? In our short endeavors in Shopify-land, we came to the conclusion that our pricing was on the higher end of the spectrum of the existing apps. While we think we provide a great product, we’ve decided to lower the price and give you in effect more bang for your buck.
* Improves error handling related to the maximum length of input fields.

## 28/03/2022 09:06 (UTC)

Release date: 2022-03-28 09:06

#### Enhancements

* Adds an app-wide banner telling that the theme modifications have been removed, with the option to reapply them easily.

## 24/03/2022 13:04 (UTC)

Release date: 2022-03-24 13:04

#### Enhancements

* Adds `Price: Maximum` (`%%price_max%%`) replacement variable to products.
* Adds `Price: Minimum` (`%%price_min%%`) replacement variable to products.
* Adds `Price` (`%%price%%`) replacement variable to products.

## 15/03/2022 14:42 (UTC)

Release date: 2022-03-15 14:42

#### Bugfixes

* Fixes a bug where we're stripping `script` and `style` tags from the HTML of the content.

## 15/03/2022 11:45 (UTC)

Release date: 2022-03-15 11:45

#### Enhancements

* Enhances the Webmaster validation code checks to catch more invalid codes from being entered.

## 10/03/2022 13:00 (UTC)

Release date: 2022-03-10 13:00

#### Enhancements

* Enhances the file upload by providing clearer feedback when an unusable file is attempted to be used.

## 10/03/2022 08:57 (UTC)

Release date: 2022-03-10 08:57

#### Enhancements

* Relocates the toast notifications from the right top corner to the top center.
* Improves feedback strings for the Keyphrase Length assessment by making it explicit that we only count content words for languages with function word support.

## 09/03/2022 07:42 (UTC)

Release date: 2022-03-09 07:42

#### Enhancements

* Adds a welcome back screen to enable returning users to remove theme modifications without needing a subscription.

## 07/03/2022 15:46 (UTC)

Release date: 2022-03-07 15:46

#### Enhancements

* Adds a new replacement variable for the product barcode.
* Improves the meta robots tags of product variants to now behave as per the main product.
* Adds a new replacement variable for the product availability.
* Adds a new replacement variable for the product SKU.

## 03/03/2022 10:07 (UTC)

Release date: 2022-03-03 10:07

#### Enhancements

* The Facebook and Twitter Preview now uses image instead of a background image.

## 28/02/2022 10:52 (UTC)

Release date: 2022-02-28 10:52

#### Enhancements

* Adds more detailed comments inside modified theme files, about the way of reverting automated changes.
* Enhances the App by adding logic which will disable all Yoast SEO frontend output automatically when the App is uninstalled - this functionality requires an additional scope to be accepted on for the App:  `write_script_tags `.

## 22/02/2022 15:41 (UTC)

Release date: 2022-02-22 15:41

#### Enhancements

* Changes the default for showing collection and product archives in search results to be enabled, so they are shown in the search results.


#### Bugfixes

* Fixes a bug where the link to learn more about the no-index setting would not redirect to the correct Yoast.com help page.

## 21/02/2022 09:16 (UTC)

Release date: 2022-02-21 09:16

#### Bugfixes

* Fixes a bug where a primary domain other than the myshopify domain would not be displayed in the Social previews.

## 18/02/2022 11:31 (UTC)

Release date: 2022-02-18 11:31

#### Enhancements

* Improves the text of the Uninstall settings to make the buttons and text more understandable.
* Adds a theme modification page to the advanced settings to reapply and remove theme modifications.


#### Bugfixes

* Fixes a bug where the Yoast-markings would be persisted to the item in Shopify.

## 16/02/2022 09:08 (UTC)

Release date: 2022-02-16 09:08

#### Enhancements

* The Yoast SEO breadcrumbs on the default product view no longer show the default variant.
* Improves the `%%title%%` replacement on the default product view to no longer include the default variant.
* Allows the WebPage and Website schema parts to be managed by Yoast even if the Organization part is not being managed by Yoast.

## 14/02/2022 15:39 (UTC)

Release date: 2022-02-14 15:39

#### Enhancements

* Introduces a new uninstall page.

## 11/02/2022 15:14 (UTC)

Release date: 2022-02-11 15:14

#### Bugfixes

* Fixes a bug where relative URLs would be stripped of their starting slash in the Optimize content editor.
* Fixes a bug where the Image Keyphrase assessment would only analyze the first word in image alt-attributes.

## 11/02/2022 10:49 (UTC)

Release date: 2022-02-11 10:49

#### Bugfixes

* Fixes a bug where the Google Preview was not showing "In stock" when Inventory Tracking was disabled for a product

## 11/02/2022 08:49 (UTC)

Release date: 2022-02-11 08:49

#### Enhancements

* Introduce new replacement variables for the SEO title and description configured in the search engine listing preview inside Shopify.
* Introduce new replacement variable for the product vendor.

## 10/02/2022 09:00 (UTC)

Release date: 2022-02-10 09:00

#### Bugfixes

* Fixes a bug where the `myshopify` domain instead of the primary domain was used in the internal links assessment and the Google preview.
* Excludes URLs from the characters count in Japanese.
* Improves stemming of Turkish word forms with an apostrophe.

## 09/02/2022 10:54 (UTC)

Release date: 2022-02-09 10:54

#### Bugfixes

* Fixes our template control structure to not use the "include" method from Liquid as this was causing problems on specific theme implementations.

## 03/02/2022 12:19 (UTC)

Release date: 2022-02-03 12:19

#### Enhancements

* Makes the editor in the Optimize module use your theme language when you are working on optimizing a content item.


#### Bugfixes

* Fixes the problem when disabling Schema parts in the Yoast SEO settings, the Schema defined for these parts in the theme is not being output on the page.

## 27/01/2022 11:49 (UTC)

Release date: 2022-01-27 11:49

#### Bugfixes

* Fixes the replacement of the "Title" variable by preferring the existing SEO title that was already filled within the Shopify admin.

## 24/01/2022 12:22 (UTC)

Release date: 2022-01-24 12:22

#### Enhancements

* Fixes performance issues regarding the SEO and Readability filters on the Products and Collections optimize overview pages.
* Adds a view source (HTML) button to the content editor.

## 18/01/2022 17:45 (UTC)

Release date: 2022-01-18 17:45

#### Bugfixes

* Fixes a bug where fetching the list of products filtered by scores would exceed the Shopify API limits, when only few products have been indexed for a shop.
* Ensures that `WebSite` and `WebPage` schema pieces will always be output (providing that they're valid).
