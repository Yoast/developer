module.exports = {
	title: 'Yoast Developer portal',
	tagline: 'Yoast - SEO for everyone',
	url: 'https://developer.yoast.com',
	baseUrl: '/',
	favicon: 'img/favicon.png',
	organizationName: 'Yoast', // Usually your GitHub org/user name.
	projectName: 'yoast-developer-site', // Usually your repo name.
	themeConfig: {
		algolia: {
			apiKey: 'YOUR_KEY_HERE',
			indexName: 'yoast_developer',

		},
		disableDarkMode: true,
		navbar: {
			title: 'Yoast Developer portal',
			logo: {
				alt: 'Yoast Developer portal',
				src: 'img/yoast-logo.png',
			},
			links: [
				{ to: 'docs/overview', label: 'Docs', position: 'left' },
				{ href: 'https://developer.yoast.com/blog', label: 'Blog', position: 'left' },
				{
					href: 'https://github.com/yoast/developer-docs',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'XML sitemaps',
							to: 'docs/features/xml-sitemaps/overview',
						},
						{
							label: 'Canonical URLs',
							to: 'docs/features/canonical-urls/overview',
						},
						{
							label: 'Schema',
							to: 'docs/features/schema/overview',
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
							label: 'Developer Blog',
							href: 'https://developer.yoast.com/blog/',
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
	},
	themes: ['@docusaurus/theme-search-algolia'],
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					path: '../developer-docs/docs',
					sidebarPath: require.resolve('./sidebars.js'),
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
