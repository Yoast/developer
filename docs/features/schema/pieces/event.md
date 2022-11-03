---
id: event
title: "Schema piece - Event"
sidebar_label: Event
description: Describes an 'Event', which may have information about the date/time, location, and attendence options.
---
import YoastSchemaExample from '../../../../src/components/YoastSchemaExample';

Describes an `Event`, which occurs at a time and in a place, with optional extra information.

## Triggers
Should be added as a top-level node in the graph, when the content of a page describes an event.

## Required properties
A valid `Recipe` must have the following properties.

* `@type`: `Event`.
* `@id`: The site's home URL appended by `#/schema/Recipe/{{ID}}`, where `{{ID}}` is a unique identifier.
* `name`: A string naming the event.
* `location`: Either a `Place` or `VirtualLocation` node, describing where the event will take place.
* `startDate`: The start date and time of the event in [ISO-8601 format](https://en.wikipedia.org/wiki/ISO_8601) (including the UTC timezone offset).

## Optional properties
The following should be added whenever available and valid:

* `description`: A text string describing or summarizing the event.
* `endDate`: The end date and time of the event in [ISO-8601 format](https://en.wikipedia.org/wiki/ISO_8601) (including the UTC timezone offset).
* `eventAttendanceMode`: An `EventAttendanceModeEnumeration`, reflecting the attendance mode of the event (either `OfflineEventAttendanceMode`, `OnlineEventAttendanceMode` or `MixedEventAttendanceMode`).
* `image`: An `imageObject` (or an array of `imageObject`s) representing the completed recipe, referenced by ID.
* `organizer`: The `Organization` or `Person` responsible for organizing the event.
* `performer`: A `Person` (or an array of `Person`s) performing at the event.

## Conditional properties

### When the event is taking place at a physical location (or 'offline')
* `location.name`: The name of event location/venue.
* `location.address`: The `PostalAddress` of the event location/venue.

### When the event is 'virtual' (or 'online')
* `location.url`: The URL where the event will take place.

### When the event has been cancelled
* `eventStatus`: An `EventStatusType` enumeration, set to `EventCancelled`. 

### When the event has been rescheduled
* `eventStatus`: An `EventStatusType` enumeration, set to `EventRescheduled`.
* `previousStartDate`: The previous start date (or array of previous start dates) of the event in [ISO-8601 format](https://en.wikipedia.org/wiki/ISO_8601) (including the UTC timezone offset).

### When the event has one or more 'offers' (e.g., for ticketed events)
* `offers`: An `Offer` (or an array of `Offer`s).

## Failure scenarios
If any of the required fields of the `Event` are missing or invalid, the node should not be output.

If a node is not output, any entities which would otherwise have declared a relationship with it should remove those references.

## Examples

### Minimum criteria

<YoastSchemaExample>
{`{
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Event",
            "mainEntityOfPage": {
                "@id": "https://www.example.com/#/schema/Event/abc123"
            },
            "name": "My awesome party",
            "location": {
                "@type": "Place",
                "name": "Example Venue",
                "address": {
                    "@type": "PostalAddress",
                    "@id": "https://www.example.com/#/schema/PostalAddress/abc123",
                    "streetAddress": "123 Example Street",
                    "addressLocality": "Example Town",
                    "addressRegion": "Example Region",
                    "postalCode": "ABC 123",
                    "postOfficeBoxNumber": "123",
                    "addressCountry": "US"
                }
            },
            "startDate": "2025-07-21T19:00-05:00"
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
            "@type": "Event",
            "mainEntityOfPage": {
                "@id": "https://www.example.com/#/schema/Event/abc123"
            },
            "name": "My birthday party",
            "description": "We're all getting together in at Example Venue in Fake Town to celebrate my special day!"
            "location": {
                "@type": "Place",
                "name": "Example Venue",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "123 Fake Street",
                    "addressLocality": "Fake Town",
                    "postalCode": "12345",
                    "addressRegion": "XY",
                    "addressCountry": "US"
                }
            },
            "startDate": "2025-07-21T19:00-05:00",
            "endDate": "2025-07-22T19:00-05:00",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventRescheduled",
            "previousStartDate": "2024-07-21T19:00-05:00",
            "offers": {
                "@type": "Offer",
                "@id": "https://www.example.com/#/schema/Offer/abc123",
                "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "22.00",
                    "valueAddedTaxIncluded": "false"              
                    "priceCurrency": "GBP",
                },
                "availability": "http://schema.org/InStock",
                "url": "https://www.example.com/example-product-page/",
                "seller": {
                    "@id": "https://www.example.com/#/schema/Organization/1"
                }
            },
            "image": {
                "@id": "https://www.example.com/uploads/example-image.jpg"
            },
            "organizer": {
                "@id": "https://www.example.com/#/schema/Organization/1"
            },
            "performer": {
                "@id": "https://www.example.com/#/schema/Person/abc123"
            }
        }
    ]
}`}
</YoastSchemaExample>
