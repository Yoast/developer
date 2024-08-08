---
id: ai-errors
title: "Yoast AI error messages"
sidebar_label: AI errors
description: This documentation provides information about the errors that the Yoast AI feature shows.
---

This documentation provides information about the errors displayed by the [Yoast AI](https://yoast.com/features/ai-generated-titles-and-meta-descriptions/) features of the [Yoast SEO](https://yoast.com/wordpress/plugins/seo/) plugin. All Yoast AI features connect with the Yoast AI API, which in turn connects to an AI service provider (currently: [OpenAI](https://openai.com/)). As such, we list the errors based on the possible [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) from this API.

## 400 responses
This section lists the possible errors that will be displayed on [400 Bad Request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400) responses.

### Unethical request alert
The use of the Yoast AI features relies on the [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/content-filter?tabs=warning%2Cpython-new#text-content) content filtering, which enforces its usage policies concerning unethical content. The model filters for hate, sexual, violence, and self-harm content. 

Whenever the Yoast AI features are used, OpenAI will scan the content for unethical content. This alert modal is displayed when your content does not pass the content filter.

![Error example](images/400-unethical-request-alert.png)

### Not enough content alert
The use of Yoast AI requires enough content in your post to create valuable AI suggestions. This alert modal is displayed when you do not have enough content in your post.

![Error example](images/400-non-enough-content-alert.png)

### Site unreachable alert
The use of Yoast AI requires your site to be publicly accessible. This alert modal is displayed when that is not the case. 

![Error example](images/400-site-unreachable-alert.png)

### Bad WordPress request alert
In the Yoast SEO plugins for WordPress, we use the WordPress REST interface to connect to our Yoast AI API. This alert modal is displayed if something went wrong in that connection. 

![Error example](images/400-bad-wordpress-request-alert.png)

### Generic alert
In the case that we are not able to further refine the 400 error response, this generic alert modal is displayed.

![Error example](images/400-generic-alert.png)

## 402 responses
This section lists the possible errors that will be displayed on [402 Payment Required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402) responses.

### Subscription error
The use of Yoast AI requires an active subscription for your site. Please refer to this page to understand the subscriptions required for the Yoast AI features.

This alert modal is displayed when you do not have the required active subscriptions.

![Error example](images/402-subscription-error.png)

## 408 responses
This section lists the possible errors that will be displayed on [408 Request Timeout](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) responses.

### Request timeout alert
The Yoast AI features expect a response from the Yoast AI API within 60 seconds. This alert model is displayed when the response is not retrieved within 60 seconds.

![Error example](images/408-request-timeout-alert.png)

## 429 responses
This section lists the possible errors that will be displayed on [429 Too Many Requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) responses.

### Rate limit alert
The use of Yoast AI comes with rate limits to ensure fair use. Moreover, we are in the process of introducing a subscription-based limit on the amount of AI generations per month. Please refer to [this page](https://yoa.st/ai-generator-rate-limit-help) to understand the rate limits that are applicable. 

This alert model is displayed when you surpassed the Yoast AI rate limit for a specific time frame, or your Yoast AI sparks limit.

![Error example](images/429-rate-limit-alert.png)

## 403/503 responses
This section lists the possible errors that will be displayed on [403 Forbidden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403) and [503 Service Unavailable](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503) and  responses.

### Generic alert
In case of all other error responses (i.e., not [200 OK](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)), this alert modal is displayed.

![Error example](images/400-generic-alert.png)

## Other errors

This section lists other errors that can be displayed during the use of Yoast AI features, unconnected to the Yoast AI API.

### SEO analysis required
Our Yoast AI features require the SEO analysis to be enabled in the settings. When a user tries to make use of the AI features without having the SEO analyse enabled, this alert modal is displayed.

![Error example](images/000-seo-analysis-required.png)

## Mimicking these errors

### In WordPress
If you intend to display these errors without actually triggering them (e.g., displaying the rate limit alert without actually reaching the rate limit), you can do so by replacing the output of the `get_suggestions` or `fix_assessments` functions of `src/actions/ai-generator-action.php` in the Yoast SEO Premium code. Choose one of the below errors:

```php
throw new Bad_Request_Exception( "test", 400, "AI_CONTENT_FILTER" );     // Unethical request alert
throw new Bad_Request_Exception( "test", 400, "NOT_ENOUGH_CONTENT" );    // Not enough content alert
throw new Bad_Request_Exception( "test", 400, "WP_HTTP_REQUEST_ERROR" ); // Bad WordPress request alert
throw new Bad_Request_Exception( "test", 400, "SITE_UNREACHABLE" );      // Site unreachable alert
throw new Bad_Request_Exception( "test", 400, "other" );                 // Generic alert
throw new Payment_Required_Exception( "test", 402, "test", null, ['Yoast SEO Premium'] ); // Subscription error, replace the array with the missing licenses
throw new Request_Timeout_Exception( "test", 408, "test" );              // Request timeout alert
throw new Too_Many_Requests_Exception( "test", 429, "test" );            // Rate limit alert
```
