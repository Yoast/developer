/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
	mainSidebar: [{
			type: 'link',
			label: 'Developer blog',
			href: 'https://developer.yoast.com/blog'
		},
		{
			type: 'category',
			label: 'Yoast SEO features',
			items: [{
					type: 'category',
					label: 'XML sitemaps',
					items: [
						'features/xml-sitemaps/overview',
						'features/xml-sitemaps/functional-specification',
						'features/xml-sitemaps/api',
					],
				},

				{
					type: 'category',
					label: 'SEO tags',
					items: [

						{
							type: 'category',
							label: 'Titles',
							items: [
								'features/seo-tags/titles/overview',
								'features/seo-tags/titles/functional-specification',
								'features/seo-tags/titles/api',
							],
						},

						{
							type: 'category',
							label: 'Descriptions',
							items: [
								'features/seo-tags/descriptions/overview',
								'features/seo-tags/descriptions/functional-specification',
								'features/seo-tags/descriptions/api',
							],
						},
						{
							type: 'category',
							label: 'Canonical URLs',
							items: [
								'features/seo-tags/canonical-urls/overview',
								'features/seo-tags/canonical-urls/functional-specification',
								'features/seo-tags/canonical-urls/api',
							],
						},

						{
							type: 'category',
							label: 'Meta robots',
							items: [
								'features/seo-tags/meta-robots/overview',
								'features/seo-tags/meta-robots/functional-specification',
								'features/seo-tags/meta-robots/api',
							],
						},
					],
				},

				{
					type: 'category',
					label: 'OpenGraph',
					items: [
						'features/opengraph/overview',
						'features/opengraph/functional-specification',
						{
							type: 'category',
							label: 'API',
							items: [
								'features/opengraph/api/overview',
								'features/opengraph/api/changing-og-locale-output',
							]
						},
					],
				},

				'features/twitter/functional-specification',

				{
					type: 'category',
					label: 'Schema.org markup',
					items: [
						'features/schema/overview',
						'features/schema/background',
						'features/schema/technology-approach',
						'features/schema/functional-specification',
						'features/schema/integration-guidelines',
						'features/schema/api',
						{
							type: 'link',
							label: 'Schema.org pieces',
							href: '/features/schema/pieces'
						},
						{
							type: 'link',
							label: 'Output per plugin',
							href: '/features/schema/plugins'
						},
					],
				},

				'features/link-attributes/functional-specification',
				'features/alt-attributes/functional-specification',
				'features/rss-feeds/functional-specification',
				'features/http-headers/functional-specification',

				{
					type: 'category',
					label: 'WP CLI',
					items: [
						'features/wp-cli/reindex-indexables',
					],
				},

				'features/installation/using-composer',
			],
		},
		{
			type: 'category',
			label: 'Customization',
			items: [{
					type: 'category',
					label: 'APIs',
					items: [
						'customization/apis/overview',
						'customization/apis/rest-api',
						'customization/apis/surfaces-api',
						'customization/apis/metadata-api',
						'features/schema/api',
						'customization/apis/using-apis-classes',
					],
				},
				{
					type: 'category',
					label: 'Yoast SEO',
					items: [
						'customization/yoast-seo/api-filter-actions-deprecations',
						'customization/yoast-seo/adding-custom-data-analysis',
						'customization/yoast-seo/adding-custom-assessments',
						'customization/yoast-seo/disabling-primary-category',
						'customization/yoast-seo/changing-enhanced-slack-sharing',
						'customization/yoast-seo/disabling-yoast-seo',
						'customization/yoast-seo/filtering-yoast-blocks',
					],
				},
				{
					type: 'category',
					label: 'Yoast SEO Premium',
					items: [
						'customization/yoast-seo-premium/disabling-automatic-redirects-notifications',
						'customization/yoast-seo-premium/hiding-version-number',
					],
				},
				{
					type: 'category',
					label: 'Local SEO',
					items: [
						'customization/local-seo/changing-location-url-google-maps',
						'customization/local-seo/changing-location-post-type',
						'customization/local-seo/enhancing-search-results',
					],
				}
			]
		},
		{
			type: 'category',
			label: 'Duplicate Post',
			items: [
				'duplicate-post/overview',
				'duplicate-post/filters-actions',
				'duplicate-post/functions-template-tags',
			],
		},
		{
			type: 'category',
			label: 'Plugin development',
			items: [
				'development/overview',

				{
					type: 'category',
					label: 'Standards',
					items: [
						'development/standards/coding-guidelines-and-principles',
						'development/standards/version-control-conventions',
					]
				},

				{
					type: 'category',
					label: 'Environment',
					items: [
						'development/environment/setup',
						'development/environment/setup-plugin-integration-tests',
						'development/environment/running-unit-tests-code-style-checks-and-linters',
						'development/environment/tools',
						'development/environment/generating-unit-test-template'
					]
				},

				{
					type: 'category',
					label: 'Yoast SEO',
					items: [
						'development/yoast-seo/product-sheet',
					]
				},

				'development/productivity-tips-and-tricks',
				'development/cheatsheets',
			],

		},
	],
	schemaPluginsSidebar: [{
			type: 'link',
			label: '‹ Schema.org plugin output',
			href: '/features/schema/overview'
		},
		'features/schema/plugins',
		{
			type: 'category',
			label: 'Plugins',
			items: [
				'features/schema/plugins/yoast-seo',
				'features/schema/plugins/local-seo',
				'features/schema/plugins/woocommerce-seo',
				'features/schema/plugins/news-seo',
				'features/schema/plugins/video-seo',
			]
		},
	],
	schemaPiecesSidebar: [{
			type: 'link',
			label: '‹ Schema.org pieces',
			href: '/features/schema/overview'
		},
		'features/schema/pieces',
		{
			type: 'category',
			label: 'Schema pieces',
			items: [
				'features/schema/pieces/aggregateoffer',
				'features/schema/pieces/article',
				'features/schema/pieces/breadcrumb',
				'features/schema/pieces/comment',
				'features/schema/pieces/howto',
				'features/schema/pieces/image',
				'features/schema/pieces/localbusiness',
				'features/schema/pieces/offer',
				'features/schema/pieces/organization',
				'features/schema/pieces/person',
				'features/schema/pieces/postaladdress',
				'features/schema/pieces/product',
				'features/schema/pieces/question',
				'features/schema/pieces/recipe',
				'features/schema/pieces/review',
				'features/schema/pieces/searchaction',
				'features/schema/pieces/video',
				'features/schema/pieces/webpage',
				'features/schema/pieces/website',
			],
		}
	],
};