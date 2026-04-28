---
id: content-planner
title: "Yoast AI Content Planner"
sidebar_label: AI Content Planner
description: This documentation describes the AI Content Planner feature, including its REST API endpoints for fetching content suggestions and outlines.
---

The AI Content Planner is a Yoast AI feature that helps you plan new content directly from the WordPress block editor. It generates AI-powered content suggestions based on your site's existing posts, then creates a structured outline for the suggestion you choose.

The feature is available in Yoast SEO when the AI features are active (requires an active Yoast SEO Premium subscription with AI enabled).

## How it works

1. A "Content Planner" panel appears in the Yoast sidebar inside the block editor for new posts.
2. Clicking the panel fetches AI-generated content suggestions tailored to your site's niche and the selected post type.
3. You review the suggestions and pick one. Each suggestion includes a title, intent, explanation, suggested keyphrase, and a meta description.
4. Once you approve a suggestion, the feature fetches a structured content outline and optionally inserts it into the block editor as a starting point.

## REST API

The Content Planner exposes two REST routes under the Yoast SEO API namespace (`yoast/v1`). Both routes require the requesting user to be logged in and to have the `edit_posts` capability. They are only registered when the AI features are conditionally active.

### Get content suggestions

Fetches a list of AI-generated content suggestions for the given post type.

**Endpoint**: `GET /yoast/v1/ai_content_planner/get_suggestions`

**Required query parameters**:

| Parameter   | Type   | Description                                                              |
|-------------|--------|--------------------------------------------------------------------------|
| `post_type` | string | The WordPress post type to generate suggestions for (e.g. `post`).      |
| `language`  | string | The language the content is written in (e.g. `en`).                     |
| `editor`    | string | The active editor: `classic`, `elementor`, or `gutenberg`.               |

**Success response** (`200 OK`):

The response body is a JSON object with a `suggestions` array. Each item in the array has:

- `title` (string) — The suggested post title.
- `intent` (string) — The editorial intent (e.g. `Educational`, `Persuasive`).
- `explanation` (string) — A short description of what the post should cover.
- `keyphrase` (string) — The suggested focus keyphrase.
- `meta_description` (string) — A suggested meta description.
- `category` (object) — Contains `name` (string) and `id` (integer). When no suitable category exists on the site, `name` is `""` and `id` is `-1`.

**Error responses**: See [Yoast AI error messages](/features/ai/ai-errors) for the full list of error codes returned when the AI API cannot fulfil the request.

### Get content outline

Fetches a structured content outline for the chosen suggestion.

**Endpoint**: `POST /yoast/v1/ai_content_planner/get_outline`

**Required request body fields** (`application/json`):

| Parameter          | Type   | Description                                                                                          |
|--------------------|--------|------------------------------------------------------------------------------------------------------|
| `post_type`        | string | The WordPress post type.                                                                             |
| `language`         | string | The language the content is written in.                                                              |
| `editor`           | string | The active editor: `classic`, `elementor`, or `gutenberg`.                                           |
| `title`            | string | The title of the chosen suggestion.                                                                  |
| `intent`           | string | The intent of the chosen suggestion.                                                                 |
| `explanation`      | string | The explanation of the chosen suggestion.                                                            |
| `keyphrase`        | string | The keyphrase of the chosen suggestion.                                                              |
| `meta_description` | string | The meta description of the chosen suggestion.                                                       |
| `category`         | object | An object with `name` (string) and `id` (integer). Use `name: ""` and `id: -1` for no category.     |

**Success response** (`200 OK`):

The response body is a JSON object with an `outline` array. Each item represents a content section and has:

- `subheading_text` (string or null) — The section heading. May be `null` for an introductory section with no heading.
- `content_notes` (array of strings) — Notes describing what to write in that section.

**Error responses**: See [Yoast AI error messages](/features/ai/ai-errors).

## Block registration

The Content Planner registers a `yoast/content-planner-banner` block in the `yoast-ai-blocks` block category. This block is the in-editor entry point for the feature; it is inserted automatically by the Content Planner when a user begins the flow and removed once the flow is complete. It is not intended for manual insertion by authors.

## Activation conditions

Both the REST routes and the block registration are conditional on `AI_Conditional`, which checks whether the AI features are active for the current site. If the conditions are not met, the routes are not registered and the block is not available.
