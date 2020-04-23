---
id: disabling-automatic-redirects-notifications
title: Disabling automatic redirects and notifications
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/yoast-seo-premium/disabling-automatic-redirects-notifications.md
---

The Yoast SEO Premium’s [redirects manager](https://yoast.com/wordpress/plugins/seo/redirects-manager/) includes automatic redirect creation and redirect request notifications. In rare cases, you may prefer to turn off some of these features. 

## Disable automatic redirect creation

Yoast SEO Premium monitors for URL changes and automatically creates a redirect. In most cases, this is ideal behavior in order to prevent visitors landing on a `404` error page. However, you can disable this feature by adding the following code to your theme's `functions.php`:

### Posts and pages

```php
/*
* Yoast SEO Disable Automatic Redirects for
* Posts And Pages
* Credit: Yoast Development Team
* Last Tested: May 09 2017 using Yoast SEO Premium 4.7.1 on WordPress 4.7.4
*/
add_filter('wpseo_premium_post_redirect_slug_change', '__return_true' );
```

### Taxonomies (categories, tags etc)

```php
/*
* Yoast SEO Disable Automatic Redirects for
* Taxonomies (Category, Tags, Etc)
* Credit: Yoast Development Team
* Last Tested: May 09 2017 using Yoast SEO Premium 4.7.1 on WordPress 4.7.4
*/
add_filter('wpseo_premium_term_redirect_slug_change', '__return_true' );
```

Note: If you see the redirect created notification and you have not changed the URL or slug, this is most commonly caused by a conflict. Please check for conflicts by following the steps in [this article](https://yoast.com/kb/how-to-check-for-plugin-conflicts).

## Disable redirect notifications

When you delete content on your site, we display a reminder notification to add a redirect for the removed item. We highly recommend adding redirects for removed items. However, you can disable this feature by adding the following code to your theme's `functions.php` file. Please note that this only hides the notification message and so redirects may still be created silently behind the scenes.

### Posts or pages: Moved to Trash

```php
/*
* Yoast SEO Disable Redirect Notifications for
* Posts or Pages: Moved to Trash
* Credit: Yoast Development Team
* Last Tested: May 09 2017 using Yoast SEO Premium 4.7.1 on WordPress 4.7.4
*/
add_filter('wpseo_enable_notification_post_trash', '__return_false');
```

### Posts or pages: Changed URL
```php
/*
* Yoast SEO Disable Redirect Notifications for
* Posts and Pages: Change URL
* Credit: Yoast Development Team
* Last Tested: May 09 2017 using Yoast SEO Premium 4.7.1 on WordPress 4.7.4
*/
add_filter('wpseo_enable_notification_post_slug_change', '__return_false');
```

### Taxonomies: Moved to Trash
```php
/*
* Yoast SEO Disable Redirect Notifications for
* Taxonomies: Moved to Trash
* Credit: Yoast Development Team
* Last Tested: May 09 2017 using Yoast SEO Premium 4.7.1 on WordPress 4.7.4
*/
add_filter('wpseo_enable_notification_term_delete','__return_false');
```

### Taxonomies: Changed URL
```php
/*
* Yoast SEO Disable Redirect Notifications for
* Taxonomies: Change URL
* Credit: Yoast Development Team
* Last Tested: May 09 2017 using Yoast SEO Premium 4.7.1 on WordPress 4.7.4
*/
add_filter('wpseo_enable_notification_term_slug_change','__return_false');
```
