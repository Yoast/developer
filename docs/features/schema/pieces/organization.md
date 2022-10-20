---
id: organization
title: Schema piece - Organization
sidebar_label: Organization
description: Describes an organization (a company, business or institution). Most commonly used to identify the publisher of a 'WebSite'.
---
import YoastSchemaExample from '../../../../src/components/YoastSchemaExample';

Describes an organization (a company, business or institution). Most commonly used to identify the publisher of a [`WebSite`](website.md).

May be transformed into a more specific type (such as  `Corporation` or `LocalBusiness` ) if the required conditions are met.

## Triggers
Should be output on all public pages.

## Required properties
A valid `Organization` must have the following properties.

* `@type`: `Organization`.
* `@id`: The site's home URL appended by `#/schema/Organization/{{ID}}`, where `{{ID}}` is a unique identifier.
  * If the `organization` is the publisher of the `WebSite` (i.e., the "*primary organization*", or "*this organization*"), then the value of `{{ID}}` should be `1`.
  * `name`: The name of the `Organization`.
* `URL:` The site's home URL.
* `logo`: A reference-by-ID to an `ImageObject` of the organization's logo.

### Failure scenarios
If any of the required fields are missing or invalid, the node should not be output.

If the node is not output, any entities which would otherwise have declared a relationship with the `Organization` (e.g., as the `publisher` of a `WebSite`, or the `manufacturer` of a `Product`) should remove those references.

## Optional properties
The following should be added whenever available and valid:

* `sameAs`: An array of URLs representing declared social/authoritative profiles of the organization (e.g., a Wikipedia page, or Facebook profile).
* `image`: An array of references-by-ID to `ImageObject` nodes which represent the organization (including the `logo` ).
* `alternateName`: An alternate (usually _shorter_) name for the organization.


## Transformations
The `Organization` type may be transformed in the following scenarios.

### When the business is 'local'
* When location information is available, the `Organization` may be eligible for extension into a [LocalBusiness](localbusiness.md) type.

## Examples

### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "Organization",
              "@id": "https://www.example.com/#/schema/Organization/abc123",
              "url": "https://www.example.com/",
              "logo": {
                  "@id": "https://www.example.com/uploads/example-image.jpg"
              },
              "name": "Example organization name"
          }
      ]
  }`}
</YoastSchemaExample>

### Extended criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "Organization",
              "@id": "https://www.example.com/#/schema/Organization/abc123",
              "url": "https://www.example.com/",
              "name": "Example organization name",
              "alternateName": "Short org name",
              "sameAs": [
                  "https://www.wikipedia.com/example-organization",
                  "https://www.linkedin.com/company/1234"
              ],
              "logo": {
                  "@id": "https://www.example.com/uploads/example-image.jpg"
              },
              "image": [
                  {
                      "@id": "https://www.example.com/uploads/example-image.jpg"
                  },
                  {
                      "@id": "https://www.example.com/uploads/example-image-2.jpg"
                  }
              ]
          }
      ]
  }`}
</YoastSchemaExample>

## WordPress API: Change Organization Schema output {#api}

To change the `Organization` schema Yoast SEO outputs, you can use our `wpseo_schema_organization` filter, for instance as follows:

```php
add_filter( 'wpseo_schema_organization', 'change_organization_schema', 11, 2 );

/**
 * Add extra properties to the Yoast SEO Organization
 *
 * @param array             $data    The Schema Organization data.
 * @param Meta_Tags_Context $context Context value object.
 *
 * @return array $data The Schema Organization data.
 */
function change_organization_schema( $data, $context ) {
	$data['@type'] = [
		'Organization',
		'Brand',
	];
	$data['founder'] = [
		'@type'  => 'Person',
		'name'   => 'Joost de Valk',
		'url'    => 'https://yoast.com/about-us/team/joost-de-valk/',
		'sameAs' => 'https://yoast.com/about-us/team/joost-de-valk/',
	];
	$data['foundingDate']       = '2010-05-01';
	$data['numberOfEmployees']  = (int) wp_count_posts( 'yoast_employees' )->publish;
	$data['slogan']             = 'SEO for Everyone';
	$data['description']        = 'Yoast helps you with your website optimization, whether it be through our widely used SEO software or our online SEO courses: we&#039;re here to help.';
	$data['url']                = 'https://yoast.com/';
	$data['legalName']          = 'Yoast BV';
	$data['alternateName']      = 'Yoast';
	$data['parentOrganization'] = [
		'@type'       => 'Organization',
		'name'        => 'Newfold Digital',
		'description' => 'Newfold Digital is a leading web presence solutions provider serving millions of small-to-medium businesses globally.',
		'url'         => 'https://newfold.com/',
		'sameAs'      => [
			'https://newfold.com/',
		],
		'logo'        => 'https://yoast.com/app/uploads/2022/01/newfold-logo.png',
	];
	$data['memberOf']           = [
		'@type'       => 'Organization',
		'name'        => 'World Wide Web Consortium (W3C)',
		'description' => 'The World Wide Web Consortium (W3C) is an international community that develops open standards to ensure the long-term growth of the Web.',
		'url'         => 'https://w3.org/',
		'sameAs'      => [
			'https://w3.org/',
		],
		'logo'        => 'https://www.w3.org/Icons/w3c_main.png',
	];

	return $data;
}
```

To make more changes to our Schema output, see the [Yoast SEO Schema API](../api.md).
