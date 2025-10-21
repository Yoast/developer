/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
	mainSidebar: [
		{
			type: "doc",
			label: "Home",
			id: "overview",
		},
		{
			type: "category",
			label: "Yoast SEO features",
			link: {
				type: "generated-index",
				description: "Learn about the most important Yoast SEO features!",
				slug: "/features",
			},
			items: [
				{
					type: "category",
					label: "Yoast AI",
					link: {
						type: "generated-index",
						description: "This documentation provides information about the AI features that Yoast SEO provides to users.",
						slug: "features/ai/",
					},
					items: [
						"features/ai/ai-errors",
					],
				},
				{
					type: "category",
					label: "Analysis",
					items: [
						"features/analysis/overview",
					],
				},
				{
					type: "category",
					label: "Blocks",
					items: [
						"features/blocks/breadcrumbs",
					],
				},
				{
					type: "category",
					label: "Controls",
					link: {
						type: "generated-index",
						description: "This documentation provides information about the types of controls that Yoast SEO provides to users.",
						slug: "features/controls/",
					},
					items: [
						"features/controls/overview",
						"features/controls/link-attributes",
					],
				},
				{
					type: "category",
					label: "XML sitemaps",
					link: {
						type: "generated-index",
						description: "This documentation provides technical information about how Yoast SEO generates and/or manages XML sitemaps.",
						slug: "/features/xml-sitemaps/",
					},
					items: [
						"features/xml-sitemaps/functional-specification",
						"features/xml-sitemaps/api",
					],
				},

				{
					type: "category",
					label: "SEO tags",
					link: {
						type: "generated-index",
						description: "Learn which tags Yoast SEO outputs and how to change them.",
						slug: "/features/seo-tags/",
					},
					items: [
						{
							type: "category",
							label: "Titles",
							link: {
								type: "generated-index",
								// eslint-disable-next-line max-len
								description: "This documentation provides technical information about how Yoast SEO generates and/or manages title tags.",
								slug: "/features/seo-tags/titles/",
							},
							items: [
								"features/seo-tags/titles/functional-specification",
								"features/seo-tags/titles/api",
							],
						},
						{
							type: "category",
							label: "Descriptions",
							link: {
								type: "generated-index",
								// eslint-disable-next-line max-len
								description: "This documentation provides technical information about how Yoast SEO generates and/or manages description tags.",
								slug: "/features/seo-tags/descriptions/",
							},
							items: [
								"features/seo-tags/descriptions/functional-specification",
								"features/seo-tags/descriptions/api",
							],
						},
						{
							type: "category",
							label: "Canonical URLs",
							link: {
								type: "generated-index",
								// eslint-disable-next-line max-len
								description: "This documentation provides technical information about how Yoast SEO generates and/or manages canonical URL values and tags.",
								slug: "/features/seo-tags/canonical-urls/",
							},
							items: [
								"features/seo-tags/canonical-urls/functional-specification",
								"features/seo-tags/canonical-urls/api",
							],
						},

						{
							type: "category",
							label: "Meta robots",
							link: {
								type: "generated-index",
								// eslint-disable-next-line max-len
								description: "This documentation provides technical information about how Yoast SEO generates and/or manages meta robots tags.",
								slug: "/features/seo-tags/meta-robots/",
							},
							items: [
								"features/seo-tags/meta-robots/functional-specification",
								{
									type: "link",
									label: "API",
									href: "/customization/apis/metadata-api",
								},
							],
						},
					],
				},

				{
					type: "category",
					label: "OpenGraph",
					link: {
						type: "generated-index",
						description: "This documentation provides technical information about how Yoast SEO generates and/or manages OpenGraph tags.",
						slug: "/features/opengraph/",
					},
					items: [
						"features/opengraph/functional-specification",
						{
							type: "category",
							label: "API",
							link: {
								type: "generated-index",
								// eslint-disable-next-line max-len
								description: "This documentation explains how to use the Yoast SEO API to influence the values of, and which OpenGraph tags Yoast SEO generates and outputs.",
								slug: "/features/opengraph/api/",
							},
							items: [
								"features/opengraph/api/changing-og-locale-output",
								"features/opengraph/api/wpseo-opengraph-images",
							],
						},
					],
				},
				"features/twitter/functional-specification",
				"features/robots-txt/functional-specification",
				"features/llms-txt/functional-specification",
				{
					type: "category",
					label: "Integrations",
					link: {
						type: "generated-index",
						description: "This documentation describes how Yoast SEO integrates with external systems.",
						slug: "/features/integrations/",
					},
					items: [
						"features/integrations/indexnow",
						"features/integrations/site-connections",
					],
				},
				{
					type: "category",
					label: "Indexables",
					items: [
						"features/indexables/functional-specification",
						"features/indexables/technical-specification",
						"features/indexables/indexables-filters",
					],
				},
				{
					type: "category",
					label: "Schema.org markup",
					link: {
						type: "generated-index",
						description: "This documentation describes how we construct and output schema.org data in the Yoast SEO plugin(s).",
						slug: "/features/schema/",
					},
					items: [
						"features/schema/background",
						"features/schema/technology-approach",
						"features/schema/functional-specification",
						"features/schema/integration-guidelines",
						"features/schema/api",
						{
							type: "category",
							label: "Schema.org pieces",
							link: {
								type: "generated-index",
								description: "This documentation describes the schema.org pieces outputted through the Yoast SEO plugin(s).",
								slug: "/features/schema/pieces",
							},
							items: [
								"features/schema/pieces/aggregateoffer",
								"features/schema/pieces/article",
								"features/schema/pieces/breadcrumb",
								"features/schema/pieces/comment",
								"features/schema/pieces/event",
								"features/schema/pieces/howto",
								"features/schema/pieces/image",
								"features/schema/pieces/localbusiness",
								"features/schema/pieces/offer",
								"features/schema/pieces/organization",
								"features/schema/pieces/person",
								"features/schema/pieces/postaladdress",
								"features/schema/pieces/product",
								"features/schema/pieces/productgroup",
								"features/schema/pieces/question",
								"features/schema/pieces/recipe",
								"features/schema/pieces/review",
								"features/schema/pieces/searchaction",
								"features/schema/pieces/video",
								"features/schema/pieces/webpage",
								"features/schema/pieces/website",
							],
						},
						{
							type: "category",
							label: "Output per plugin",
							link: {
								type: "generated-index",
								description: "Our own plugins use and build upon our Schema API and documentation, as detailed here.",
								slug: "/features/schema/plugins",
							},
							items: [
								"features/schema/plugins/yoast-seo",
								"features/schema/plugins/yoast-seo-premium",
								"features/schema/plugins/local-seo",
								"features/schema/plugins/woocommerce-seo",
								"features/schema/plugins/news-seo",
								"features/schema/plugins/video-seo",
								"features/schema/plugins/yoast-seo-shopify",
							],
						},
					],
				},
				{
					type: "category",
					label: "Alternate content formats",
					link: {
						type: "generated-index",
						description: "Learn how Yoast SEO handles alternate content formats.",
						slug: "/features/alternate-formats/",
					},
					items: [
						"features/alternate-formats/embedded",
						"features/alternate-formats/rss-feeds",
					],
				},
				"features/http-headers/functional-specification",
				{
					type: "category",
					label: "WP CLI",
					items: [
						"features/wp-cli/reindex-indexables",
					],
				},
			],
		},
		{
			type: "category",
			label: "Customization",
			link: {
				type: "generated-index",
				title: "Customizing SEO",
				description: "Yoast SEO provides several customization options.",
				slug: "/customization/",
			},
			items: [
				{
					type: "category",
					label: "APIs",
					link: {
						type: "generated-index",
						// eslint-disable-next-line max-len
						description: "Yoast SEO exposes several APIs, which are designed to help advanced users, developers, and integrators to access and manipulate our data and outputs.",
						slug: "/customization/apis",
					},
					items: [
						"customization/apis/rest-api",
						"customization/apis/surfaces-api",
						"customization/apis/metadata-api",
						"features/schema/api",
						"customization/apis/using-apis-classes",
					],
				},
				{
					type: "category",
					label: "Yoast SEO",
					items: [
						"customization/yoast-seo/api-filter-actions-deprecations",
						"customization/yoast-seo/adding-custom-data-analysis",
						"customization/yoast-seo/adding-custom-assessments",
						"customization/yoast-seo/adding-custom-language-analysis",
						"customization/yoast-seo/customizing-attachment-parsing",
						"customization/yoast-seo/disabling-primary-category",
						"customization/yoast-seo/changing-enhanced-slack-sharing",
						"customization/yoast-seo/disabling-yoast-seo",
						"customization/yoast-seo/filters/yoast-seo-usage-tracking-filter",
						"customization/yoast-seo/filters/capability-roles-filter",
						"customization/yoast-seo/filters/change-metabox-prio-filter",
						"customization/yoast-seo/filters/cornerstone-post-types-filter",
						"customization/yoast-seo/filters/shortcodes-filter",
						"customization/yoast-seo/filters/markdown-enabled-filter",
						"customization/yoast-seo/filters/assessment-markers-filter",
						"customization/yoast-seo/filters/primary-term-taxonomies-filter",
						"customization/yoast-seo/filtering-yoast-blocks",
						"customization/yoast-seo/wp-get-environment-type-in-yoast-seo",
						"customization/yoast-seo/filters/disable-opcache-reset-on-upgrade",
					],
				},
				{
					type: "category",
					label: "Yoast SEO Premium",
					items: [
						"customization/yoast-seo-premium/api-filter-actions-deprecations",
						"customization/yoast-seo-premium/disabling-automatic-redirects-notifications",
						"customization/yoast-seo-premium/disabling-autoloading-redirect-options",
						"customization/yoast-seo-premium/hiding-version-number",
						"customization/yoast-seo-premium/disable-table-of-content-block",
						"customization/yoast-seo-premium/orphaned-content-count-cache-filters",
					],
				},
				{
					type: "category",
					label: "Local SEO",
					items: [
						"customization/local-seo/changing-location-url-google-maps",
						"customization/local-seo/changing-location-post-type",
						"customization/local-seo/enhancing-search-results",
						"customization/local-seo/changing-organization-url-in-schema",
					],
				},
				{
					type: "category",
					label: "News SEO",
					items: [
						"customization/news-seo/hooks",
					],
				},
				{
					type: "category",
					label: "Video SEO",
					items: [
						"customization/video-seo/hooks",
					],
				},
				{
					type: "category",
					label: "MyYoast",
					items: [
						{
							type: "category",
							label: "APIs",
							items: [
								"customization/myyoast/apis/subscription-api",
							],
						},
					],
				},
			],
		},
		{
			type: "category",
			label: "Duplicate Post",
			items: [
				"duplicate-post/overview",
				"duplicate-post/filters-actions",
				"duplicate-post/functions-template-tags",
			],
		},
		{
			label: "Plugin development",
			type: "category",
			link: {
				type: "generated-index",
				title: "Development in Yoast SEO",
				description: "This documentation provides information about developing in Yoast SEO.",
				slug: "/development/",
			},
			items: [
				"development/overview",
				{
					label: "Standards",
					type: "category",
					link: {
						type: "generated-index",
						title: "Development standard for Yoast SEO",
						description: "This documentation provides information about our development standards.",
						slug: "/development/standards/",
					},
					items: [
						"development/standards/coding-guidelines-and-principles",
						"development/standards/version-control-conventions",
						"development/standards/writing-issues-and-pull-requests",
						"development/standards/phpunit-best-practices",
					],
				},
				{
					label: "Environment",
					type: "category",
					link: {
						type: "generated-index",
						title: "Setting up the development environment",
						description: "This documentation provides information about setting up your development environment.",
						slug: "/development/environment/",
					},
					items: [
						"development/environment/setup",
						"development/environment/setup-plugin-integration-tests",
						"development/environment/running-unit-tests-code-style-checks-and-linters",
						"development/environment/tools",
						"development/environment/generating-unit-test-template",
					],
				},
				"development/installation/using-composer",
				"development/integrating",
				"development/productivity-tips-and-tricks",
				"development/cheatsheets",
			],
		},
		{
			type: "category",
			label: "Shopify",
			link: {
				type: "generated-index",
				title: "Yoast SEO for Shopify",
				description: "This documentation provides information about Yoast SEO for Shopify.",
				slug: "/shopify/",
			},
			items: [
				"shopify/overview",
				"features/schema/plugins/yoast-seo-shopify",
				{
					type: "category",
					label: "Shopify integrations",
					link: {
						type: "generated-index",
						title: "Integration for Yoast Shopify SEO",
						description: "This documentation provides information about integrations for Yoast SEO for Shopify.",
						slug: "/shopify/integrations/",
					},
					items: [
						"shopify/integrations/internationalization",
						"shopify/integrations/review-apps",
						"shopify/integrations/schema-graph",
					],
				},
			],
		},
		{
			type: "category",
			label: "Changelogs",
			link: {
				type: "generated-index",
				title: "Changelogs",
				description: "Find the changelogs for all our products on the below pages.",
				slug: "/changelog/",
			},
			items: [
				{
					type: "link",
					label: "Yoast SEO",
					href: "/changelog/yoast-seo/",
				},
				{
					type: "link",
					label: "Yoast SEO Premium",
					href: "/changelog/yoast-seo-premium/",
				},
				{
					type: "link",
					label: "Local SEO",
					href: "/changelog/local-seo/",
				},
				{
					type: "link",
					label: "News SEO",
					href: "/changelog/news-seo/",
				},
				{
					type: "link",
					label: "Video SEO",
					href: "/changelog/video-seo/",
				},
				{
					type: "link",
					label: "WooCommerce SEO",
					href: "/changelog/woocommerce-seo/",
				},
				{
					type: "link",
					label: "Duplicate Post",
					href: "/changelog/duplicate-post/",
				},
				{
					type: "link",
					label: "Yoast SEO for Shopify",
					href: "/changelog/shopify/",
				},
			],
		},
	],
};
