/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
	mainSidebar: [
		{
			type: 'link',
			label: 'Developer blog',
			href: 'https://developer.yoast.com/blog'
		},
		{
			type: 'category',
			label: 'Features',
			items: [
				'features/overview',

				{
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
					label: 'Canonical URLs',
					items: [
						'features/canonical-urls/overview',
						'features/canonical-urls/functional-specification',
						'features/canonical-urls/api',
					],
				},

				{
					type: 'category',
					label: 'Meta robots',
					items: [
						'features/meta-robots/overview',
						'features/meta-robots/functional-specification',
						'features/meta-robots/api',
					],
				},

				{
					type: 'category',
					label: 'Meta tags',
					items: [
						'features/meta-tags/overview',
						'features/meta-tags/functional-specification',
						'features/meta-tags/extensions-and-addons',
						'features/meta-tags/api',
					],
				},

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
					],
				},
			],
		},
		{
			type: 'category',
			label: 'Customization',
			items: [
				{
					type: 'category',
					label: 'Yoast SEO',
					items: [
						'customization/yoast-seo/changing-og-locale-output',
						'customization/yoast-seo/api-filter-actions-deprecations',
						'customization/yoast-seo/adding-custom-data-analysis',
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
						'customization/local-seo/enhancing-search-results',
					],
				},
			]
		},
		{
			type: 'category',
			label: 'Standards',
			items: [
				'standards/overview',
				'standards/development-tools',
				'standards/development-setup',
				'standards/setting-up-integration-tests-for-the-plugins',
				'standards/running-unit-tests-code-style-checks-and-linters',
				'standards/coding-guidelines-and-principles',
				'standards/version-control-conventions',
				'standards/productivity-tips-and-tricks',
				'standards/cheatsheets',
			]
		},
	],
	schemaPluginsSidebar: [
		{
			type: 'link',
			label: '‹ Schema.org plugin output',
			href: '/features/schema/overview'
		},
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
	schemaPiecesSidebar: [
		{
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
				'features/schema/pieces/review',
				'features/schema/pieces/searchaction',
				'features/schema/pieces/video',
				'features/schema/pieces/webpage',
				'features/schema/pieces/website',
			],
		}
	],
};
