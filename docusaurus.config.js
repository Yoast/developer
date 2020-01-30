module.exports = {
	title: 'Yoast Developer portal',
	tagline: 'Yoast - SEO for everyone',
	url: 'https://developer.yoast.com',
	baseUrl: '/',
	favicon: 'img/favicon.ico',
	organizationName: 'Yoast B.V.', // Usually your GitHub org/user name.
	projectName: 'yoast-developer-site', // Usually your repo name.
	themeConfig: {
		disableDarkMode: true,
		navbar: {
			title: 'Yoast Developer portal',
			logo: {
				alt: 'Yoast Developer portal',
				src: 'img/yoast-logo.png',
			},
			links: [
				{to: 'docs/overview', label: 'Docs', position: 'left'},
				{href: 'https://developer.yoast.com/blog', label: 'Blog', position: 'left'},
				{
					href: 'https://github.com/yoast/developer-docs',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Schema',
							to: 'docs/doc1',
						},
						{
							label: 'APIs',
							to: 'docs/doc2',
						},
					],
				},
				{
					title: 'Social',
					items: [
						{
							label: 'About us',
							href: 'https://yoast.com/about-us',
						},
						{
							label: 'Work at Yoast',
							href: 'https://yoast.com/jobs',
						},
						{
							label: 'Blog',
							href: 'https://developer.yoast.com/blog',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/yoastdev',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Yoast B.V. Built with Docusaurus.`,
		},
	},
	themes: ['@docusaurus/theme-search-algolia'],
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					path: '../developer-docs/docs',
					sidebarPath: require.resolve( './sidebars.js' ),
				},
				theme: {
					customCss: require.resolve( './src/css/custom.css' ),
				},
			},
		],
	],
};
