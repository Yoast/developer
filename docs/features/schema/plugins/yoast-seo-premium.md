---
id: yoast-seo-premium
title: "Yoast SEO Premium for WordPress: Schema output"
sidebar_label: Yoast SEO Premium for WordPress
description: Describes the schema output of the Yoast SEO premium plugin for WordPress.
---
import YoastSchemaExample from '../../../../src/components/YoastSchemaExample';

The schema output for our [Yoast SEO Premium](https://yoast.com/wordpress/plugins/seo/) builds upon the [Yoast SEO schema output](yoast-seo.md), to add additional detail about organizations.

## Core functionality

### Additional optional properties
The following should be added whenever available and valid:

#### Site policies:
* `publishingPrinciples`: A link to the page which describes the editorial principles of your organization. What do you write about, who do you write for, and why?
* `ownershipFundingInfo`: A link to the page which describes the ownership structure of your organization. It should include information about funding and grants.
* `actionableFeedbackPolicy`: A link to the page which describes how your organization collects and responds to feedback, engages with the public, and prioritizes transparency.
* `correctionsPolicy`: A link to the page which outlines your procedure for addressing errors (e.g., publishing retractions or corrections).
* `ethicsPolicy`: A link to the page which describes the personal, organizational, and corporate standards of behavior expected by your organization.
* `diversityPolicy`: A link to the page which provides information on your diversity policies for editorial content.
* `diversityStaffingReport`: A link to the page which provides information about your diversity policies for staffing, hiring and employment.

Additional organization info:

Enrich your organization's profile by providing more in*depth information. The more details you share, the better Google understands your website.
* `description`: A short description of the organization.
* `email`: The primary public email address of the organization.
* `telephone`: The primary public telephone number of the organization.
* `legalName`: The organizations legal name.
* `foundingDate`: The founding date of the company, in ISO 8601 format (e.g., `2020*01*20`).
* `numberOfEmployees`: The number of employees in a `QuantitativeValue` format.

Organization identifiers:
* `vatID`: The Value*added Tax ID of the organization or person.
* `taxID`: The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
* `iso6523Code`: An organization identifier as defined in `ISO 6523(*1)` format.
* `duns`: The Dun & Bradstreet DUNS number for identifying an organization or business person.
* `leiCode`: An organization identifier that uniquely identifies a legal entity as defined in `ISO 17442`.
* `naics`: The North American Industry Classification System (`NAICS`) code for a particular organization or business person.
