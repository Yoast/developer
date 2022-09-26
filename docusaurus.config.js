const path = require('path');

require('dotenv').config();

const config = {
	title: 'Yoast Developer portal',
	tagline: 'Yoast - SEO for everyone',
	url: 'https://developer.yoast.com',
	baseUrl: '/',
	favicon: 'img/favicon.png',
	organizationName: 'Yoast', // Usually your GitHub org/user name.
	projectName: 'yoast-developer-site', // Usually your repo name.
	scripts: [
		{
			src: "/js/google-tag-manager.js",
		},
	],
	themeConfig: {
		algolia: {
			apiKey: process.env.DOCSEARCH_KEY,
			indexName: 'yoast_developer',
		},
		colorMode: {
			disableSwitch: true,
		},
		sidebarCollapsible: true,
		navbar: {
			title: 'Yoast Developer portal',
			logo: {
				alt: 'Yoast Developer portal',
				src: 'img/yoast-logo.png',
			},
			items: [],
		},
		footer: {
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'XML sitemaps',
							to: '/features/xml-sitemaps/overview/',
						},
						{
							label: 'Canonical URLs',
							to: 'features/seo-tags/canonical-urls/overview/',
						},
						{
							label: 'Schema.org markup',
							to: '/features/schema/overview/',
						},
						{
							label: 'Yoast SEO Product sheet',
							to: '/development/yoast-seo/product-sheet/',
						},
					],
				},
				{
					title: 'Yoast',
					items: [
						{
							label: 'About us',
							href: 'https://yoast.com/about-us/',
						},
						{
							label: 'Work at Yoast',
							href: 'https://yoast.com/jobs/',
						},
						{
							label: 'Developer blog',
							href: 'https://developer.yoast.com/blog/',
						},
						{
							label: 'Security program',
							href: 'https://yoast.com/security-program/',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/yoastdev',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Yoast · Built with Docusaurus.`,
		},
		prism: {
			additionalLanguages: ['php'],
		},
	},
	customFields: {
		docsPath: './docs',
	},
	themes: [],
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					routeBasePath: '/',
					get path(){ return config.customFields.docsPath; },
					sidebarPath: require.resolve('./sidebars.js'),
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
	plugins: [
		path.resolve(__dirname, './src/plugins/yoast-auto-index'),
		path.resolve(__dirname, './src/plugins/yoast-docs-assets'),
	],
	onBrokenLinks: 'log',
};

module.exports = config;
