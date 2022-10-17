---
id: person
title: Schema piece - Person
sidebar_label: Person
description: Describes an individual person. Most commonly used to identify the 'author' of a piece of content.
---
import YoastSchemaExample from '../../../../src/components/YoastSchemaExample';

Describes an individual person. Most commonly used to identify the `author` of a piece of content (such as an `Article` or `Comment`).

May also identify the `publisher` of a `WebSite` (or other content) in some cases.

## Triggers
Should be added as top-level nodes in the graph, as/when required by other nodes. E.g., when an `Article` has an `author`.

## Required properties
A valid `Person` must have the following properties.

* `@type`: `Person`.
* `@id`: The site's home URL appended by `#/schema/Person/{{ID}}`, where `{{ID}}` is a unique identifier.
  * Note that the `{{ID}}` component should not reveal personally identifiable or sensitive information (e.g., avoid using a username or email address, or hash+salt these values).
* `name`: The full name of the `Person`.

### Failure scenarios
If any of the required fields are missing or invalid, the node should not be output.

If the node is not output, any entities which would otherwise have declared a relationship with the `Person` (e.g., as the `publisher` of a `WebSite`, or the `author` of an `Article`) should remove those references.

#### 'Admin' usernames
If the `name` of the person is '*admin*' or similar (or localised equivalents), then the `Person` should be invalidated; we should never present content as being authored by 'admin'.

## Optional properties
The following should be added whenever available and valid:

* `description`: The user bio, truncated to 250 characters.
* `sameAs`: An array of URLs representing declared social/authoritative profiles of the person (e.g., a Wikipedia page, or Facebook profile).
* `image`: An array of references-by-ID to `ImageObject` nodes which represent the person.
* `url`: The URL of the users' profile page (if they're affiliated with the site in question), or to their personal homepage/website.

## Conditional properties
Optional properties which should only be output when the required criteria is met.

## Examples

### Minimum criteria

<YoastSchemaExample>
{`{
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "Person",
              "@id": "https://www.example.com/#/schema/Person/abc123",
              "name": "Example person name"
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
              "@type": "Person",
              "@id": "https://www.example.com/#/schema/Person/abc123",
              "name": "Example person name",
              "image": {
                  "@id": "https://www.example.com/uploads/example-image.jpg"
              },
              "sameAs": [
                  "https://www.wikipedia.com/example-person",
                  "https://www.facebook.com/example-person"
              ]
          }
      ]
  }`}
</YoastSchemaExample>

## API: Change Organization Schema output {#api}

To change the `Person` schema Yoast SEO outputs, you can use our `wpseo_schema_person` filter, for instance as follows:

### Change person output
```php
add_filter( 'wpseo_schema_person', 'schema_change_person', 11, 2 );

/**
 * Changes the Yoast SEO Person schema.
 *
 * @param array             $data    The Schema Person data.
 * @param Meta_Tags_Context $context Context value object.
 *
 * @return array $data The Schema Person data.
 */
function schema_change_person( $data, $context ) {
	if ( isset( $data['worksFor'] ) && $data['worksFor'] === 'Yoast' ) {
		// Make references to "Yoast" actually reference the organization's graph piece.
		$data['worksFor'] = [ '@id' => $context->site_url . Schema_IDs::ORGANIZATION_HASH ];
	}

	return $data;
}
```

### Change person being output

If you want to change the person being output in the schema, you can filter it like this:

```php
add_filter( 'wpseo_schema_person_user_id', 'change_schema_person_id' );

/**
 * Changes the Yoast SEO Person schema.
 *
 * @param int $person_id The Schema Person ID.
 *
 * @return int $person_id The (possibly altered) person ID.
 */
function change_schema_person_id( $person_id ) {
    if ( $person_id === 12 ) {
        return 3; // Make sure this is a valid user ID.
    }
    return $person_id;
}
```

### Social profiles
If you want to change which profiles to show on `Person` output in the `sameAs` array, you can hook into our `wpseo_schema_person_social_profiles` filter. We do this on yoast.com to add people's GitHub and WordPress profile as well as their personal sites to their sameAs output:

```php
add_filter( 'wpseo_schema_person_social_profiles', 'yoast_add_social_profiles' );

/**
 * Adds social profiles to our sameAs array.
 *
 * @param array $profiles Social profiles.
 *
 * @return array Social profiles.
 */
function yoast_add_social_profiles( $profiles ) {
    array_push( $profiles, 'github', 'personal', 'wordpress' );

    return $profiles;
}
```

To make more changes to our Schema output, see the [Yoast SEO Schema API](../api.md).
