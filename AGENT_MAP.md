# AGENT_MAP

Source of truth for the RC docs-sync agent. Tells the agent which doc files belong to which feature area, which source paths feed each area, and which change patterns in a plugin RC should trigger doc updates.

Each doc file belongs to **exactly one area**. One PR plan per affected area. If an RC touches N areas, the agent opens N PRs (expected: 0–2 per RC most of the time; caps at ~5 for safety).

## How the agent uses this file

1. On run start, the agent loads this file plus the full `docs-before/` tree.
2. On every hunk in the RC diff, the agent checks:
   - Does the source path match an area's `source_paths`? → candidate for that area.
   - Does the hunk introduce/remove/rename a symbol matching an area's `symbol_namespaces`? → candidate for that area.
3. The agent groups candidates by area, produces one PR plan per area with `files` drawn from that area's `docs_paths`.
4. Hunks that don't match any area's triggers are considered doc-irrelevant by default — but the agent must still reason about whether they're a subtle behavior change in a documented feature.

## How to maintain this file

- When a new doc directory is added, add a new area entry.
- When a doc file moves, update its area's `docs_paths`.
- When a plugin introduces a new filter namespace, add it to the relevant area's `symbol_namespaces` so the symbol-index generator picks it up.
- If you find the agent repeatedly mis-attributing a change, refine the area boundaries here rather than in the prompt.

## Product → source repo

| Product slug            | Display name             | GitHub repo(s)                  |
|-------------------------|--------------------------|---------------------------------|
| wordpress-seo           | Yoast SEO                | `Yoast/wordpress-seo`           |
| wordpress-seo-premium   | Yoast SEO Premium        | `Yoast/wordpress-seo-premium`   |
| wordpress-seo-local     | Yoast Local SEO          | `Yoast/wordpress-seo-local`     |
| wpseo-news              | Yoast News SEO           | `Yoast/wpseo-news`              |
| wpseo-video             | Yoast Video SEO          | `Yoast/wpseo-video`             |
| wpseo-woocommerce       | Yoast WooCommerce SEO    | `Yoast/wpseo-woocommerce`       |
| shopify-seo             | Yoast SEO for Shopify    | `Yoast/shopify-seo`             |
| duplicate-post          | Yoast Duplicate Post     | `Yoast/duplicate-post`          |

Display names are the human-readable product names used in PR titles and tracking issue summaries. They mirror the names used in `docusaurus.config.js` changelog plugin entries.

Products that have a changelog in this repo but **no feature docs** (e.g. AI Brand Insights) are intentionally excluded from this table. Add them here only when feature-spec docs are introduced in `docs/`; otherwise every RC run on the product would reliably produce zero PRs, wasting compute and review attention.

Product slug is the stable identifier used throughout this file and the workflow. It does not always match the repo name — see how `wordpress-seo-local` ↔ `Local SEO`, `wpseo-*` ↔ `News/Video/WooCommerce SEO`, `shopify-seo` ↔ `Yoast SEO for Shopify`. Keep the slug consistent with the corresponding changelog plugin id in `docusaurus.config.js` so the two pieces line up.

No currently-listed product has more than one source repo. If one is ever added (for example a split API+frontend product), the workflow and agent will need an extra rule: clone diffs from both repos, pass them to the agent labeled by repo, and treat the set as a single RC unit.

---

## Areas

### `llms-txt`
- **Products**: wordpress-seo
- **Docs paths**: `docs/features/llms-txt/**`
- **Source paths** (wordpress-seo): `src/llms-txt/**`
- **Symbol namespaces**: `wpseo_llmstxt_*`
- **Typical triggers**: new/renamed/removed filter in the namespace; changes to the llms.txt file format or default content; changes to what post types are included.
- **Validated in**: Spike A (recall) ✅

### `robots-txt`
- **Products**: wordpress-seo
- **Docs paths**: `docs/features/robots-txt/**`
- **Source paths** (wordpress-seo): `src/presenters/robots-txt-presenter.php`, `src/helpers/robots-txt-helper.php`, `src/integrations/**/robots-txt*`
- **Symbol namespaces**: `wpseo_robots_*`, `wpseo_*_robots_*` (anchored to robots), `wpseo_disable_robots_*`, `Yoast\WP\SEO\register_robots_rules`
- **Typical triggers**: changes to robots.txt output (new directives, Sitemap/Schemamap lines); new filters that suppress or alter robots output.
- **Validated in**: Spike C bonus catch ✅

### `schema-aggregator`
- **Products**: wordpress-seo
- **Docs paths**: `docs/features/schema/schema-aggregator/**`
- **Source paths** (wordpress-seo): `src/schema-aggregator/**`
- **Symbol namespaces**: `wpseo_schema_aggregator_*`, `wpseo_article_enhance_*`, `wpseo_person_enhance_*`
- **REST routes**: `yoast/v1/schema-aggregator/**`
- **WP-CLI commands**: `wp yoast aggregate_site_schema`, `wp yoast aggregate_site_schema_clear_cache`
- **Typical triggers**: new filter in the namespace; new REST route; new CLI command; change to caching behavior or default post-type selection.
- **Validated in**: Spike C ✅

### `schema-pieces`
- **Products**: wordpress-seo (primary), wordpress-seo-premium, wordpress-seo-local, wpseo-news, wpseo-video, wpseo-woocommerce, shopify-seo
- **Docs paths**: `docs/features/schema/pieces/**`
- **Source paths** (per product):
  - **wordpress-seo**: `src/generators/schema/**`, `admin/**/schema*`
  - **wordpress-seo-premium**: `src/generated/**/schema*`, `src/integrations/**/schema*`
  - **wordpress-seo-local**: `classes/schema/**` (primary schema pieces for this product live under legacy `classes/`, not `src/`)
  - **wpseo-news**: `classes/**/schema*`, `classes/**/news-article*`
  - **wpseo-video**: `classes/**/schema*`, `classes/**/videoobject*`
  - **wpseo-woocommerce**: `classes/**/schema*`, `classes/**/product*`
- **Symbol namespaces**: `wpseo_schema_<piece>` where `<piece>` matches a piece filename (`article`, `person`, `organization`, `webpage`, `website`, `breadcrumb`, `product`, `offer`, `recipe`, `video`, `review`, etc.)
- **Typical triggers**: required/optional property added or removed on a piece class; new piece filter; changed `@type` conditions.
- **When to create vs. update**: create a new file only if a wholly new schema piece is introduced; otherwise update an existing piece file.

### `schema-api`
- **Products**: wordpress-seo
- **Docs paths**: `docs/features/schema/api.md`, `docs/features/schema/integration-guidelines.md`
- **Source paths** (wordpress-seo): `src/integrations/third-party/schema-*`, `src/surfaces/schema*`, `src/helpers/schema/**`
- **Symbol namespaces**: `wpseo_json_ld_output`, `wpseo_schema_graph_pieces`, `wpseo_schema_needs_*`, `yoast_seo_development_mode`
- **Typical triggers**: new top-level schema filter; changes to the graph-piece enable/disable mechanism; new helpers on `YoastSEO()->helpers->schema->*`.

### `schema-per-plugin`
- **Products**: all plugins that output schema
- **Docs paths**: `docs/features/schema/plugins/**` (one file per plugin: `yoast-seo.md`, `yoast-seo-premium.md`, `local-seo.md`, `news-seo.md`, `video-seo.md`, `woocommerce-seo.md`, `yoast-seo-shopify.md`)
- **Source paths**: see `schema-pieces` above — same per-plugin paths, but this area tracks per-plugin *output aggregates* rather than individual piece properties.
- **Typical triggers**: a plugin starts/stops emitting a piece; a plugin's per-piece properties change in aggregate; the plugin's conditional activation for schema changes.
- **When to touch**: only when a specific plugin's schema output changes in a way that warrants updating its per-plugin summary page; otherwise updates to shared piece docs go to `schema-pieces`.

### `schema-core`
- **Products**: wordpress-seo
- **Docs paths**: `docs/features/schema/background.md`, `docs/features/schema/functional-specification.md`, `docs/features/schema/technology-approach.md`
- **Typical triggers**: rare — fundamental approach changes (e.g., moving from JSON-LD to something else, changing the `@graph` structure).
- **Default**: out of scope for automated PRs unless the diff explicitly indicates a foundational change. Prefer a human-authored PR.

### `seo-tags-titles`
- **Products**: wordpress-seo
- **Docs paths**: `docs/features/seo-tags/titles/**`
- **Source paths** (wordpress-seo): `src/presenters/title*`, `src/builders/title*`, `src/generators/schema/webpage.php` (for `name` field)
- **Symbol namespaces**: `wpseo_title`, `wpseo_title_separator`
- **Typical triggers**: new title filter; change to template replacement vars; change to default template.

### `seo-tags-descriptions`
- **Products**: wordpress-seo
- **Docs paths**: `docs/features/seo-tags/descriptions/**`
- **Source paths** (wordpress-seo): `src/presenters/meta-description*`, `src/builders/meta-description*`
- **Symbol namespaces**: `wpseo_metadesc`
- **Typical triggers**: new description filter; default-generation logic changes.

### `seo-tags-canonical`
- **Products**: wordpress-seo
- **Docs paths**: `docs/features/seo-tags/canonical-urls/**`
- **Source paths** (wordpress-seo): `src/presenters/canonical*`, `src/builders/canonical*`, `src/helpers/canonical*`
- **Symbol namespaces**: `wpseo_canonical`
- **Typical triggers**: canonical-URL filter changes; new `rel="canonical"` emission conditions.

### `seo-tags-meta-robots`
- **Products**: wordpress-seo
- **Docs paths**: `docs/features/seo-tags/meta-robots/**`
- **Source paths** (wordpress-seo): `src/presenters/robots*` (meta tag, not robots.txt), `src/helpers/robots*`
- **Symbol namespaces**: `wpseo_robots`, `wpseo_googlebot`, `wpseo_bingbot`
- **Typical triggers**: new meta robots directive; default index/noindex logic changes.

### `opengraph`
- **Products**: wordpress-seo
- **Docs paths**: `docs/features/opengraph/**`
- **Source paths** (wordpress-seo): `src/presenters/open-graph/**`, `src/generators/open-graph*`
- **Symbol namespaces**: `wpseo_opengraph*`, `wpseo_og_*`, `wpseo_add_opengraph_*`
- **Typical triggers**: new OG tag; new OG filter; default image/locale behavior change.

### `twitter`
- **Products**: wordpress-seo
- **Docs paths**: `docs/features/twitter/**`
- **Source paths** (wordpress-seo): `src/presenters/twitter/**`
- **Symbol namespaces**: `wpseo_twitter_*`
- **Typical triggers**: new X/Twitter card filter; card type changes.

### `sitemaps`
- **Products**: wordpress-seo, wpseo-news, wpseo-video
- **Docs paths**: `docs/features/xml-sitemaps/**`
- **Source paths**:
  - **wordpress-seo**: `inc/sitemaps/**`, `src/integrations/**/sitemap*`
  - **wpseo-news**: `classes/**/sitemap*`, `classes/**/news-sitemap*`
  - **wpseo-video**: `classes/**/sitemap*`, `xml-video-sitemap.xsl`
- **Symbol namespaces**: `wpseo_sitemap_*`, `wpseo_*_sitemap_*`, `wpseo_news_sitemap_*`, `wpseo_video_sitemap_*`
- **Typical triggers**: new sitemap type; new per-entry filter; lastmod/priority default changes.

### `indexables`
- **Products**: wordpress-seo
- **Docs paths**: `docs/features/indexables/**`
- **Source paths** (wordpress-seo): `src/builders/indexable-*`, `src/repositories/indexable*`, `src/actions/indexing/**`
- **Symbol namespaces**: `wpseo_indexable_*`, `Yoast\WP\SEO\should_index_indexables`, `Yoast\WP\SEO\Exclude_*`
- **Typical triggers**: new excluded-post-type/taxonomy filter; indexing-behavior changes; schema-column additions.

### `integrations`
- **Products**: wordpress-seo
- **Docs paths**: `docs/features/integrations/**`
- **Source paths** (wordpress-seo): `src/integrations/indexnow/**`, `src/integrations/site-connections/**` (and similar well-defined integration folders)
- **Typical triggers**: new integration added (IndexNow, site-connections, Algolia, etc.); change to ping/notify behavior.

### `ai`
- **Products**: wordpress-seo, wordpress-seo-premium
- **Docs paths**: `docs/features/ai/**`
- **Source paths** (wordpress-seo): `src/ai-*/**`, `src/generators/ai*`, `src/integrations/ai*`
- **Source paths** (wordpress-seo-premium): `src/ai/**`
- **Symbol namespaces**: `wpseo_ai_*`
- **Typical triggers**: new AI error code; new AI feature exposing a filter; change to request/retry behavior documented in `ai-errors.md`.
- **Note**: AI Brand Insights is an adjacent product with its own changelog in this repo but no feature-spec docs under `docs/features/ai/`. It is deliberately not in this area's product list. When/if feature docs land (e.g. a functional specification for AI Brand Insights), re-add the product to the Product table and expand this area's products + source paths to include `Yoast/ai-insights-api` (Laravel — `app/**`, `routes/**`) and `Yoast/ai-insights-frontend` (Vite/React — `src/**`), plus a split-product workflow rule.

### `alternate-formats`
- **Products**: wordpress-seo
- **Docs paths**: `docs/features/alternate-formats/**`
- **Source paths** (wordpress-seo): `src/integrations/**/embed*`, `src/integrations/**/rss*`, `inc/class-rss.php`
- **Typical triggers**: embed/RSS emission changes; filters on embedded content.

### `controls`
- **Products**: wordpress-seo
- **Docs paths**: `docs/features/controls/**`
- **Source paths** (wordpress-seo): `packages/js/src/containers/link-attributes*`, `admin/links/**`
- **Typical triggers**: changes to link-attribute controls; new UI-exposed user controls.

### `blocks`
- **Products**: wordpress-seo
- **Docs paths**: `docs/features/blocks/**`
- **Source paths** (wordpress-seo): `packages/js/src/structured-data-blocks/**`, `src/integrations/blocks/**`
- **Typical triggers**: new Yoast block; breadcrumb block attribute changes.

### `analysis`
- **Products**: wordpress-seo, shopify-seo
- **Docs paths**: `docs/features/analysis/**`
- **Source paths**: `packages/yoastseo/**`, `packages/js/src/analysis/**`
- **Typical triggers**: new assessment; algorithm changes worth surfacing.

### `http-headers`
- **Products**: wordpress-seo
- **Docs paths**: `docs/features/http-headers/**`
- **Source paths** (wordpress-seo): `src/integrations/front-end/**/header*`, `src/presenters/*header*`
- **Typical triggers**: new header emitted; conditional emission changes.

### `wp-cli`
- **Products**: wordpress-seo
- **Docs paths**: `docs/features/wp-cli/**`
- **Source paths** (wordpress-seo): `src/commands/**`, `src/cli/**`, any file matching `*-cli-command.php`
- **Symbol namespaces**: `WP_CLI::add_command` registrations.
- **Typical triggers**: new CLI command; new option on an existing command.

---

### `apis` (shared, low-frequency)
- **Products**: wordpress-seo
- **Docs paths**: `docs/customization/apis/**`, `docs/customization/myyoast/apis/**`
- **Source paths** (wordpress-seo): `src/integrations/rest/**`, `src/surfaces/**`, `src/presenters/rest*`
- **Typical triggers**: new REST route; new Surface class/method; Metadata API changes.
- **Scoping note**: the agent should propose targeted file edits (e.g., `rest-api.md` only) rather than blanket updates across all API pages.

### `customization-free`
- **Products**: wordpress-seo
- **Docs paths**: `docs/customization/yoast-seo/**`
- **Source paths** (wordpress-seo): anywhere that `apply_filters('wpseo_*')` is emitted *and* the symbol is not already mapped to a more specific area (llms-txt, sitemaps, schema, etc.)
- **Symbol namespaces**: `wpseo_*` (fallback; more specific areas take precedence)
- **Typical triggers**: new customization filter; deprecation of an existing filter.
- **Deprecations page**: `docs/customization/yoast-seo/deprecations.md` — update this file whenever a filter/action is removed or renamed.

### `customization-premium`
- **Products**: wordpress-seo-premium
- **Docs paths**: `docs/customization/yoast-seo-premium/**`
- **Source paths** (wordpress-seo-premium): `src/**` (primary — actions, ai, config, integrations, presenters, routes, surfaces, repositories, introductions, user-meta), `classes/**` (legacy), `cli/**`, `premium.php`
- **Symbol namespaces**: `wpseo_premium_*`, `Yoast\WP\SEO\Premium\*`
- **Deprecations page**: `docs/customization/yoast-seo-premium/deprecations.md`

### `local-seo`
- **Products**: wordpress-seo-local
- **Docs paths**: `docs/customization/local-seo/**`, `docs/features/schema/plugins/local-seo.md`
- **Source paths** (wordpress-seo-local): `src/**` (builders, integrations, presenters, repositories, posttype, tools, formatters), `classes/**` (legacy — includes `classes/schema/**` which is the primary schema contribution for `schema-per-plugin`), `includes/**`, `widgets/**`, `woocommerce/**`, `local-seo.php`
- **Symbol namespaces**: `wpseo_local_*`

### `news-seo`
- **Products**: wpseo-news
- **Docs paths**: `docs/customization/news-seo/**`, `docs/features/schema/plugins/news-seo.md`
- **Source paths** (wpseo-news): `classes/**` (primary — this repo is mostly still legacy structure), `src/**` (currently mostly autoloader output), `js/**`, `wpseo-news.php`
- **Symbol namespaces**: `wpseo_news_*`

### `video-seo`
- **Products**: wpseo-video
- **Docs paths**: `docs/customization/video-seo/**`, `docs/features/schema/plugins/video-seo.md`
- **Source paths** (wpseo-video): `classes/**` (primary — no `src/` tree yet), `detail-retrieval/**`, `post-analysis/**`, `views/**`, `video-seo.php`, `video-seo-api.php`, `xml-video-sitemap.xsl`
- **Symbol namespaces**: `wpseo_video_*`

### `woocommerce-seo`
- **Products**: wpseo-woocommerce
- **Docs paths**: `docs/features/schema/plugins/woocommerce-seo.md`
- **Source paths** (wpseo-woocommerce): `classes/**` (primary), `src/**` (mostly autoloader output), `js/**`, `wpseo-woocommerce.php`
- **Symbol namespaces**: `wpseo_woo_*`, `wpseo_woocommerce_*`

### `shopify`
- **Products**: shopify-seo
- **Docs paths**: `docs/shopify/**`, `docs/features/schema/plugins/yoast-seo-shopify.md`
- **Source paths** (shopify-seo): `app/**` (main application code — PHP-based, non-Laravel), `cf-worker/**` (Cloudflare Worker integration), `config/**`, `data/**`, `shopify-seo.php`
- **Non-plugin architecture note**: `shopify-seo` is a Shopify app, not a WordPress plugin. It doesn't follow the `src/`-and-`classes/` convention of the WP plugins; file-path intuition for WP plugins doesn't transfer. Agent should lean heavily on the changelog entry for an RC rather than path heuristics.
- **Typical triggers**: Shopify-specific integration, schema, or internationalization changes.

### `duplicate-post`
- **Products**: duplicate-post
- **Docs paths**: `docs/duplicate-post/**`
- **Source paths** (duplicate-post): `src/**` (admin, cli, handlers, ui, watchers), `compat/**`, root-level PHP files (`duplicate-post.php`, `admin-functions.php`, `common-functions.php`, `options.php`)
- **Symbol namespaces**: `duplicate_post_*`

---

## Shared / cross-cutting files

These files may be touched by *any* area's PR when appropriate, but are not themselves anchored to one area:

- `docs/overview.md` — root landing page. Update when a new top-level section is added or when a linked URL changes.
- `sidebars.js` — Docusaurus navigation (at repo root, not under `docs/`). **Must be updated whenever a doc file is created, deleted, renamed, or moved**, otherwise the new page won't appear in navigation and `yarn build` may fail.
- `_redirects` — update when a doc URL changes (file rename or move).
- `src/css/custom.css` — never touched by the sync agent.

**Rule**: if a PR plan creates or renames files, its `files` list must also include `sidebars.js` (kind: `update`) with an `edits` description explaining the navigation entry change. Missing this is a failure mode.

## Out of scope for automated PRs

These docs are only touched by the sync agent if the RC diff *explicitly* changes their subject matter (which is rare). Default behavior: do not propose changes even if some symbols appear to match.

- `docs/development/**` — contributor guides, tooling, standards. Changes to Yoast's internal development practices, not to the plugin's public surface.
- `docs/overview.md` when the change is stylistic — only update on genuine information changes.

## Cross-product ripple rules

When a public filter or class moves between products (e.g., promoted from Premium to Free, or vice versa), the agent must:

1. Open one PR plan for the area the symbol is *arriving* in (to add docs).
2. Open a second PR plan for the area the symbol is *leaving* (to add a deprecation/move note on the relevant deprecations page).

If the move is between namespaces in the same product, do the deprecation-note PR only if the old symbol is already documented.

---

## Noise exclusion (applies to all areas)

The agent should ignore diff hunks under these paths when deciding what's doc-relevant. These are typically filtered at diff-compute time but the agent should double-check:

- `tests/**`, `**/__tests__/**`, `**/__snapshots__/**`, `*.test.*`, `*.spec.*`, `*.stories.*`
- `vendor/**`, `node_modules/**`, `build/**`
- `languages/**`, `**/*.pot`, `**/*.po`
- `**/*.lock`, `package-lock.json`, `composer.lock`, `yarn.lock`
- `.github/**` in the source repo
- Version bumps in `wp-seo.php`, `wp-seo-main.php`, `package.json`, and similar bootstraps
- Readme changelog entries (`readme.txt` `== Changelog ==` section) — these are a *signal* that something changed and may cross-reference the diff, but are not themselves doc-relevant changes.

## Failure modes to monitor in production

Observed in the spikes or anticipated:

1. **Over-fanout**: agent splits one feature across N PRs when N=1 is correct. Fix: tighten area boundaries in this file.
2. **Wrong area attribution**: Schema Aggregator placed at top-level instead of nested under `schema/`. Fix: explicit `docs_paths` above prevent this.
3. **Missed cross-cutting effect**: a new feature that touches two areas (e.g., Schema Aggregator affecting robots.txt). Agent handled this correctly in Spike C by producing two PR plans; keep the behavior.
4. **Missed `sidebars.js` update**: agent creates a new file but forgets to wire it into navigation. `yarn build` catches this as a CI failure, but a clean PR should already include it.
5. **Hallucinated symbols**: agent invents a filter name. Defense: always grep the filtered diff for the exact symbol before writing it into the PR; if it isn't there, don't write it.
