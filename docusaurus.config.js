// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require( "prism-react-renderer/themes/github" );
const darkCodeTheme = require( "prism-react-renderer/themes/dracula" );
const year = new Date().getFullYear();

/** @type {import("@docusaurus/types").Config} */
const config = {
	title: "Yoast developer portal",
//	tagline: "Dinosaurs are cool",
	url: "https://developer.yoast.com",
	baseUrl: "/",
	trailingSlash: true,
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.png",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "yoast", // Usually your GitHub org/user name.
	projectName: "developer", // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	headTags: [
		{
			tagName: 'meta',
			attributes: {
				property: 'og:site_name',
				content: 'Yoast developer portal',
			},
		},
		{
			tagName: 'script',
			attributes: {
				type: 'application/ld+json'
			},
			innerHTML: '{\n' +
					   '\t"@context": "https://schema.org",\n' +
					   '\t"@graph": [\n' +
					   '\t\t{\n' +
					   '\t\t\t"@type": "WebSite",\n' +
					   '\t\t\t"@id": "https://developer.yoast.com/#website",\n' +
					   '\t\t\t"url": "https://developer.yoast.com/",\n' +
					   '\t\t\t"name": "Yoast Developer",\n' +
					   '\t\t\t"description": "Docs for Yoast SEO, for everyone",\n' +
					   '\t\t\t"publisher": {\n' +
					   '\t\t\t\t"@id": "https://yoast.com/#organization"\n' +
					   '\t\t\t},\n' +
					   '\t\t\t"potentialAction": [\n' +
					   '\t\t\t\t{\n' +
					   '\t\t\t\t\t"@type": "SearchAction",\n' +
					   '\t\t\t\t\t"target": {\n' +
					   '\t\t\t\t\t\t"@type": "EntryPoint",\n' +
					   '\t\t\t\t\t\t"urlTemplate": "https://developer.yoast.com/search/?q={search_term_string}"\n' +
					   '\t\t\t\t\t},\n' +
					   '\t\t\t\t\t"query-input": "required name=search_term_string"\n' +
					   '\t\t\t\t}\n' +
					   '\t\t\t],\n' +
					   '\t\t\t"inLanguage": "en-US",\n' +
					   '\t\t\t"copyrightHolder": {\n' +
					   '\t\t\t\t"@id": "https://yoast.com/#organization"\n' +
					   '\t\t\t}\n' +
					   '\t\t},\n' +
					   '\t\t{\n' +
					   '\t\t\t"@type": [\n' +
					   '\t\t\t\t"Organization",\n' +
					   '\t\t\t\t"Brand"\n' +
					   '\t\t\t],\n' +
					   '\t\t\t"@id": "https://yoast.com/#organization",\n' +
					   '\t\t\t"name": "Yoast",\n' +
					   '\t\t\t"url": "https://yoast.com/",\n' +
					   '\t\t\t"logo": {\n' +
					   '\t\t\t\t"@type": "ImageObject",\n' +
					   '\t\t\t\t"inLanguage": "en-US",\n' +
					   '\t\t\t\t"@id": "https://yoast.com/#/schema/logo/image/",\n' +
					   '\t\t\t\t"url": "https://yoast.com/app/uploads/2020/09/Yoast_Icon_SocialMedia_500x500.png",\n' +
					   '\t\t\t\t"contentUrl": "https://yoast.com/app/uploads/2020/09/Yoast_Icon_SocialMedia_500x500.png",\n' +
					   '\t\t\t\t"width": 500,\n' +
					   '\t\t\t\t"height": 500,\n' +
					   '\t\t\t\t"caption": "Yoast"\n' +
					   '\t\t\t},\n' +
					   '\t\t\t"image": {\n' +
					   '\t\t\t\t"@id": "https://yoast.com/#/schema/logo/image/"\n' +
					   '\t\t\t},\n' +
					   '\t\t\t"sameAs": [\n' +
					   '\t\t\t\t"https://yoast.com",\n' +
					   '\t\t\t\t"https://www.instagram.com/yoast/",\n' +
					   '\t\t\t\t"https://www.linkedin.com/company/1414157/",\n' +
					   '\t\t\t\t"https://www.pinterest.com/yoast/",\n' +
					   '\t\t\t\t"https://www.youtube.com/yoast",\n' +
					   '\t\t\t\t"https://en.wikipedia.org/wiki/Yoast",\n' +
					   '\t\t\t\t"https://www.facebook.com/yoast",\n' +
					   '\t\t\t\t"https://twitter.com/yoast",\n' +
					   '\t\t\t\t"https://g.co/kgs/4H5sG2",\n' +
					   '\t\t\t\t"https://g.co/kgs/a9XfUu"\n' +
					   '\t\t\t],\n' +
					   '\t\t\t"founder": {\n' +
					   '\t\t\t\t"@type": "Person",\n' +
					   '\t\t\t\t"name": "Joost de Valk",\n' +
					   '\t\t\t\t"url": "https://yoast.com/about-us/team/joost-de-valk/",\n' +
					   '\t\t\t\t"sameAs": "https://yoast.com/about-us/team/joost-de-valk/"\n' +
					   '\t\t\t},\n' +
					   '\t\t\t"foundingDate": "2010-05-01",\n' +
					   '\t\t\t"slogan": "SEO for Everyone",\n' +
					   '\t\t\t"description": "Yoast helps you with your website optimization, whether it be through our widely used SEO software or our online SEO courses: we&#039;re here to help.",\n' +
					   '\t\t\t"legalName": "Yoast BV",\n' +
					   '\t\t\t"parentOrganization": {\n' +
					   '\t\t\t\t"@type": "Organization",\n' +
					   '\t\t\t\t"name": "Newfold Digital",\n' +
					   '\t\t\t\t"description": "Newfold Digital is a leading web presence solutions provider serving millions of small-to-medium businesses globally.",\n' +
					   '\t\t\t\t"url": "https://newfold.com/",\n' +
					   '\t\t\t\t"sameAs": [\n' +
					   '\t\t\t\t\t"https://newfold.com/"\n' +
					   '\t\t\t\t],\n' +
					   '\t\t\t\t"logo": "https://yoast.com/app/uploads/2022/01/newfold-logo.png"\n' +
					   '\t\t\t}\n' +
					   '\t\t}\n' +
					   '\t]\n' +
					   '}'
		},
	],
	plugins: [
		[
			require.resolve('./src/plugins/changelog/index.js'),
			{
				id: 'yoast-seo',
				blogTitle: 'Yoast SEO changelog',
				blogDescription: 'Keep yourself up-to-date about new features, enhancements and bugfixes in every release of Yoast SEO for WordPress.',
				feedOptions: {
					type: 'rss',
					title: 'Yoast SEO changelog',
					description: 'Stay up-to-date about new bugfixes and features in every release.',
					copyright: 'Copyright © ' + year + ' Yoast BV',
					language: 'en',
				},
			},
		],
		[
			require.resolve('./src/plugins/changelog/index.js'),
			{
				id: 'yoast-seo-premium',
				blogTitle: 'Yoast SEO Premium changelog',
				blogDescription: 'Keep yourself up-to-date about new features, enhancements and bugfixes in every release of Yoast SEO Premium.',
				feedOptions: {
					type: 'rss',
					title: 'Yoast SEO Premium changelog',
					description: 'Stay up-to-date about new bugfixes and features in every release.',
					copyright: 'Copyright © ' + year + ' Yoast BV',
					language: 'en',
				},
			},
		],
		[
			require.resolve('./src/plugins/changelog/index.js'),
			{
				id: 'local-seo',
				blogTitle: 'Yoast Local SEO changelog',
				blogDescription: 'Keep yourself up-to-date about new features, enhancements and bugfixes in every release of the Yoast Local SEO plugin for WordPress.',
				feedOptions: {
					type: 'rss',
					title: 'Yoast Local SEO changelog',
					description: 'Stay up-to-date about new bugfixes and features in every release.',
					copyright: 'Copyright © ' + year + ' Yoast BV',
					language: 'en',
				},
			},
		],
		[
			require.resolve('./src/plugins/changelog/index.js'),
			{
				id: 'news-seo',
				blogTitle: 'Yoast News SEO changelog',
				blogDescription: 'Keep yourself up-to-date about new features, enhancements and bugfixes in every release of the Yoast News SEO plugin for WordPress.',
				feedOptions: {
					type: 'rss',
					title: 'Yoast News SEO changelog',
					description: 'Stay up-to-date about new bugfixes and features in every release.',
					copyright: 'Copyright © ' + year + ' Yoast BV',
					language: 'en',
				},
			},
		],
		[
			require.resolve('./src/plugins/changelog/index.js'),
			{
				id: 'video-seo',
				blogTitle: 'Yoast Video SEO changelog',
				blogDescription: 'Keep yourself up-to-date about new features, enhancements and bugfixes in every release of the Yoast Video SEO plugin for WordPress.',
				feedOptions: {
					type: 'rss',
					title: 'Yoast Video SEO changelog',
					description: 'Stay up-to-date about new bugfixes and features in every release.',
					copyright: 'Copyright © ' + year + ' Yoast BV',
					language: 'en',
				},
			},
		],
		[
			require.resolve('./src/plugins/changelog/index.js'),
			{
				id: 'woocommerce-seo',
				blogTitle: 'Yoast WooCommerce SEO changelog',
				blogDescription: 'Keep yourself up-to-date about new features, enhancements and bugfixes in every release of the Yoast WooCommerce SEO plugin.',
				feedOptions: {
					type: 'rss',
					title: 'Yoast WooCommerce SEO changelog',
					description: 'Stay up-to-date about new bugfixes and features in every release.',
					copyright: 'Copyright © ' + year + ' Yoast BV',
					language: 'en',
				},
			},
		],
		[
			require.resolve('./src/plugins/changelog/index.js'),
			{
				id: 'duplicate-post',
				blogTitle: 'Yoast Duplicate Post changelog',
				blogDescription: 'Keep yourself up-to-date about new features, enhancements and bugfixes in every release of the Yoast Duplicate Post plugin.',
				feedOptions: {
					type: 'rss',
					title: 'Yoast Duplicate Post changelog',
					description: 'Stay up-to-date about new bugfixes and features in every release.',
					copyright: 'Copyright © ' + year + ' Yoast BV',
					language: 'en',
				},
			},
		],
		[
			require.resolve('./src/plugins/changelog/index.js'),
			{
				id: 'shopify',
				blogTitle: 'Yoast SEO for Shopify changelog',
				blogDescription: 'Keep yourself up-to-date about new features, enhancements and bugfixes in every release of Yoast SEO for Shopify.',
				feedOptions: {
					type: 'rss',
					title: 'Yoast SEO for Shopify changelog',
					description: 'Stay up-to-date about new bugfixes and features in every release.',
					copyright: 'Copyright © ' + year + ' Yoast BV',
					language: 'en',
				},
			},
		],
		[
			require.resolve('docusaurus-gtm-plugin'),
			{
				id: 'GTM-NHRB36F', // GTM Container ID
			}
		]
	],

	themes: [
		[
			require.resolve("@easyops-cn/docusaurus-search-local"),
			{
				// ... Your options.
				// `hashed` is recommended as long-term-cache of index file is possible.
				hashed: true,
				indexBlog: false,
				docsRouteBasePath: "/",
				// For Docs using Chinese, The `language` is recommended to set to:
				// ```
				// language: ["en", "zh"],
				// ```
			},
		],
	],

	presets: [
		[
			"classic",
			/** @type {import("@docusaurus/preset-classic").Options} */
			(
				{
					docs: {
						routeBasePath: "/",
						sidebarPath: require.resolve( "./sidebars.js" ),
						// Please change this to your repo.
						// Remove this to remove the "edit this page" links.
						editUrl:
							"https://github.com/yoast/developer/tree/main/",
					},
					blog: false,
					theme: {
						customCss: require.resolve( "./src/css/custom.css" ),
					},
				}
			),
		],
	],

	themeConfig:
	/** @type {import("@docusaurus/preset-classic").ThemeConfig} */
		(
			{
				navbar: {
					style: "primary",
					logo: {
						height: "50px",
						alt: "Yoast Logo",
						src: "img/yoast-logo.svg",
					},
					items: [
						{
							href: "https://developer.yoast.com/blog/",
							label: "Developer blog",
							position: "left"
						},
						{
							href: "https://github.com/yoast",
							label: "GitHub",
							position: "right",
						},
						{
							type: "search",
							position: "right",
						},					],
				},
				footer: {
					style: "dark",
					links: [
						{
							title: "Yoast elsewhere",
							items: [
								{
									label: "SEO blog",
									href: "https://yoast.com/seo-blog/",
								},
								{
									label: "About us",
									href: "https://yoast.com/about-us/",
								},
								{
									label: "Work at Yoast",
									href: "https://yoast.com/jobs/",
								},
								{
									label: "Help center",
									href: "https://yoast.com/help/",
								},
								{
									label: "SEO training",
									href: "https://yoast.com/academy/",
								},
							],
						},
						{
							title: "Products",
							items: [
								{
									label: "Yoast SEO for WordPress",
									href: "https://yoast.com/wordpress/plugins/seo/",
								},
								{
									label: "Yoast SEO for Shopify",
									href: "https://yoast.com/shopify/apps/yoast-seo/",
								},
								{
									label: "Local SEO for WordPress",
									href: "https://yoast.com/wordpress/plugins/local-seo/",
								},
								{
									label: "News SEO for WordPress",
									href: "https://yoast.com/wordpress/plugins/news-seo/",
								},
								{
									label: "Video SEO for WordPress",
									href: "https://yoast.com/wordpress/plugins/video-seo/",
								},
								{
									label: "WooCommerce SEO for WordPress",
									href: "https://yoast.com/wordpress/plugins/yoast-woocommerce-seo/",
								},
							],
						},
						{
							title: "Legal",
							items: [
								{
									label: "Terms of Service",
									href: "https://yoast.com/terms-of-service/",
								},
								{
									label: "Privacy policy",
									href: "https://yoast.com/privacy-policy/",
								},
								{
									label: "Refund policy",
									href: "https://yoast.com/refund-policy/",
								},
							],
						}
					],
					copyright: `Copyright © ${new Date().getFullYear()} Yoast BV. Built with Docusaurus.`,
				},
				prism: {
					additionalLanguages: ['php','json'],
					theme: lightCodeTheme,
					darkTheme: darkCodeTheme,
				},
			}
		),
};

module.exports = config;
