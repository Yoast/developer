---
id: subscription-api
title: MyYoast - Subscription API
sidebar_label: Subscription API
description: For Yoast partners to create and manage subscriptions.
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/myyoast/apis/subscription-api.md
---
import Alert from '@site/src/components/Alert';

The subscription API can be used by Yoast partners to create subscriptions in MyYoast. Subscriptions facilitate passing license checks of Yoast plugins.
<Alert>

If you wish to become a Yoast partner, please contact [Joost](https://yoast.com/about-us/team/joost-de-valk/) or [Thijs](https://yoast.com/about-us/team/thijs-de-valk/).
</Alert>

We have a Swagger document you can use to [explore the API](https://my.yoast.com/provisioning-api/#/). We can provide the credentials to view it.

## Provisioner

A provisioner is a Yoast partner allowed to create subscriptions in MyYoast.

We create an account for each provisioner, and with the credentials for that account, the provisioners can call the API endpoints.

The API uses basic auth. If you are a provisioner and do not yet have the proper credentials to call the provisioning API, please contact us.

## Client API

To assist provisioners we have used [swagger-codegen](https://swagger.io/docs/open-source-tools/swagger-codegen/) to generate clients for the API. There's:

- [PHP client](https://github.com/Yoast/subscription-api-php-client)
    - [With additional documentation](https://github.com/Yoast/subscription-api-php-client/blob/master/docs/Api/SubscriptionProvisioningApi.md)
- [javascript client](https://github.com/Yoast/subscription-api-javascript-client)

The readme of these clients explains how to install and use them.

## Subscription

A subscription gives a site a valid license for a plugin on the site of the customer's choice, for a set amount of time.

### Subscription statuses

There are four possible statuses a subscription can have:

- `active`: This subscription is active, will be set to `expired` when the end date has passed.
- `pending-cancel`: The customer has manually cancelled their subscription. The subscription will not be renewed, and will be set to `cancelled` when the end date has passed.
- `cancelled`: The subscription has been cancelled, and no longer provides a valid license.
- `expired`: The subscription's end date has passed without renewing, and no longer provides a valid license.

### Creating subscriptions

You can use the [create endpoint](https://my.yoast.com/provisioning-api/#/Subscription%20Provisioning/post_api_provisioning_subscriptions_create) to create a new subscription.

When creating a subscription, you should send along the site the customer wants to connect their subscription to. A subscription acts as a valid license for its connected site.

If you know the first name and last name of the customer, you should send them along as well. We use the names to address our customer in communication.

When a subscription is created, a MyYoast account is created for the customer if they didn't have an account already. With this account, the customer can access Yoast SEO Academy and its premium content.
We will then create the subscription for the customer, and return this new subscription as the response to the API call.
If the customer account is new, the customer will also receive an email informing them that an account has been created for them, and that they can set a password.

If the subscription should give the user access to courses (such as a Yoast SEO Premium subscription), these courses can be accessed via MyYoast in the [courses tab](https://my.yoast.com/courses).

### Renewing subscriptions

You can use the [renew endpoint](https://my.yoast.com/provisioning-api/#/Subscription%20Provisioning/post_api_provisioning_subscriptions__id__renew) to renew an existing subscription.

Renewing a subscription extends the subscription duration. The amount of time the subscription is extended by depends on the product.
Most products give access for one year. Some products give access for a month. This is or will be configured for your provisioner account.

Renewing a subscription sets the end date of the subscription to a new date further in the future.
If the end date of a subscription is in the past, the amount of extra time is added to the date of the request instead.

**Cancelled subscriptions can no longer be renewed.**

#### Cancelling subscriptions

If it is known that a customer will not renew their subscription or if the customer should no longer have their subscription, the [cancel endpoint](https://my.yoast.com/provisioning-api/#/Subscription%20Provisioning/post_api_provisioning_subscriptions__id__cancel) should be used.

The status of that subscription will be set to `pending-cancel`. It's still a valid license until the end date passes, then it will be set to `cancelled`.

If the customer should lose access immediately. you can set `immediately` to `true` in the body. In this case, the subscription is set to `cancelled` immediately, regardless of the amount of time the subscription had remaining. The subscription is no longer considered a valid license when it has the `cancelled` status.

### Subscription expiration and cancellation.

If a subscription's end date has passed, that subscription is due for expiration.

If the subscription's status is `active`, the subscription's status will be set to `expired`, and the subscription is no longer considered a valid license. This is done automatically every 30 minutes.

The same applies for subscriptions that are `pending-cancel`, and whose end date has passed. These subscriptions will be set to `cancelled`.

## License checks

The Yoast plugin on the site of the customer sends a request on visiting the plugin page or the premium settings page, to check whether the site has a valid license for that plugin. This request is cached.

A site has a valid license for a product when the site has any connected `active` or `pending-cancel` subscription in MyYoast, that grants access to that product.

The response of the license check will always include a download URL for the latest version of the plugins the user has access to.

### Connecting a site to subscriptions.

You can connect a site to a subscription on creation of that subscription, or use the [set-site endpoint](https://my.yoast.com/provisioning-api/#/Subscription%20Provisioning/post_api_provisioning_subscriptions__id__set_site) of the API.

## Getting the plugin

After a customer gets a subscription, that customer will get access to the connected product.

Any plugins the customer should get access to can be downloaded. The download URLs for a subscription are always present in any response to the subscription API.

If the subscription should give the user access to courses (such as a subscription for the Yoast SEO Premium plugin), these courses can be accessed via MyYoast on the [courses page](https://my.yoast.com/courses).
We will also send an email to the customer when the customer gets access to any of our courses. If a customer gains access to multiple courses at once, a single email is sent containing a notice of all the courses that are accessible.
