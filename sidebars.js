/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
	mainSidebar: [
		'overview',
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
					label: 'Schema.org markup',
					items: [
						'features/schema/overview',
						'features/schema/background',
						'features/schema/technology-approach',
						'features/schema/functional-specification',
						'features/schema/integration-guidelines',
						'features/schema/api',
						{
							type: 'category',
							label: 'Plugin output',
							items: [
								'features/schema/plugins/yoast-seo',
								'features/schema/plugins/local-seo',
								'features/schema/plugins/woocommerce-seo',
								'features/schema/plugins/news-seo',
								'features/schema/plugins/video-seo',
							]
						},

						{
							type: 'category',
							label: 'Schema pieces',
							items: [
								'features/schema/pieces',
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
				},
			],
		}
	],
};
