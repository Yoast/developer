// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from "prism-react-renderer";
const year = new Date().getFullYear();

/** @type {import("@docusaurus/types").Config} */
export default {
	title: "Yoast developer portal",
	url: "https://developer.yoast.com",
	baseUrl: "/",

	favicon: "img/favicon.png",
	trailingSlash: true,
	i18n: {
		defaultLocale: "en",
		locales: [ "en" ],
	},
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	markdown: {
		mermaid: true,
	},

	headTags: [
		{
			tagName: "meta",
			attributes: {
				property: "og:site_name",
				content: "Yoast developer portal",
			},
		},
		{
			tagName: "script",
			attributes: {
				type: "application/ld+json",
			},
			innerHTML: "{\n" +
					   '\t"@context": "https://schema.org",\n' +
					   '\t"@graph": [\n' +
					   "\t\t{\n" +
					   '\t\t\t"@type": "WebSite",\n' +
					   '\t\t\t"@id": "https://developer.yoast.com/#website",\n' +
					   '\t\t\t"url": "https://developer.yoast.com/",\n' +
					   '\t\t\t"name": "Yoast Developer",\n' +
					   '\t\t\t"description": "Docs for Yoast SEO, for everyone",\n' +
					   '\t\t\t"publisher": {\n' +
					   '\t\t\t\t"@id": "https://yoast.com/#organization"\n' +
					   "\t\t\t},\n" +
					   '\t\t\t"potentialAction": [\n' +
					   "\t\t\t\t{\n" +
					   '\t\t\t\t\t"@type": "SearchAction",\n' +
					   '\t\t\t\t\t"target": {\n' +
					   '\t\t\t\t\t\t"@type": "EntryPoint",\n' +
					   '\t\t\t\t\t\t"urlTemplate": "https://developer.yoast.com/search/?q={search_term_string}"\n' +
					   "\t\t\t\t\t},\n" +
					   '\t\t\t\t\t"query-input": "required name=search_term_string"\n' +
					   "\t\t\t\t}\n" +
					   "\t\t\t],\n" +
					   '\t\t\t"inLanguage": "en-US",\n' +
					   '\t\t\t"copyrightHolder": {\n' +
					   '\t\t\t\t"@id": "https://yoast.com/#organization"\n' +
					   "\t\t\t}\n" +
					   "\t\t},\n" +
					   "\t\t{\n" +
					   '\t\t\t"@type": [\n' +
					   '\t\t\t\t"Organization",\n' +
					   '\t\t\t\t"Brand"\n' +
					   "\t\t\t],\n" +
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
					   "\t\t\t},\n" +
					   '\t\t\t"image": {\n' +
					   '\t\t\t\t"@id": "https://yoast.com/#/schema/logo/image/"\n' +
					   "\t\t\t},\n" +
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
					   "\t\t\t],\n" +
					   '\t\t\t"founder": {\n' +
					   '\t\t\t\t"@type": "Person",\n' +
					   '\t\t\t\t"name": "Joost de Valk",\n' +
					   '\t\t\t\t"sameAs": "https://en.wikipedia.org/wiki/Joost_de_Valk"\n' +
					   "\t\t\t},\n" +
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
					   "\t\t\t\t],\n" +
					   '\t\t\t\t"logo": "https://yoast.com/app/uploads/2022/01/newfold-logo.png"\n' +
					   "\t\t\t}\n" +
					   "\t\t}\n" +
					   "\t]\n" +
					   "}",
		},
	],
	plugins: [
		[
			require.resolve( "./src/plugins/changelog/index.js" ),
			{
				id: "wordpress-seo",
				routeBasePath: "changelog/yoast-seo/",
				path: "./changelog/source/yoast-seo/",
				blogTitle: "Yoast SEO changelog",
				blogDescription: "Keep yourself up-to-date about new features, enhancements and bugfixes in every release of Yoast SEO for WordPress.",
				feedOptions: {
					type: "rss",
					title: "Yoast SEO changelog",
					description: "Stay up-to-date about new bugfixes and features in every release.",
					copyright: "Copyright © " + year + " Yoast BV",
					language: "en",
				},
				onUntruncatedBlogPosts: "ignore",
			},
		],
		[
			require.resolve( "./src/plugins/changelog/index.js" ),
			{
				id: "wordpress-seo-premium",
				routeBasePath: "changelog/yoast-seo-premium/",
				path: "./changelog/source/yoast-seo-premium/",
				blogTitle: "Yoast SEO Premium changelog",
				blogDescription: "Keep yourself up-to-date about new features, enhancements and bugfixes in every release of Yoast SEO Premium.",
				feedOptions: {
					type: "rss",
					title: "Yoast SEO Premium changelog",
					description: "Stay up-to-date about new bugfixes and features in every release.",
					copyright: "Copyright © " + year + " Yoast BV",
					language: "en",
				},
				onUntruncatedBlogPosts: "ignore",
			},
		],
		[
			require.resolve( "./src/plugins/changelog/index.js" ),
			{
				id: "wordpress-seo-local",
				routeBasePath: "changelog/local-seo/",
				path: "./changelog/source/local-seo/",
				blogTitle: "Yoast Local SEO changelog",
				blogDescription: "Keep yourself up-to-date about new features, enhancements and bugfixes in every release of the Yoast Local SEO plugin for WordPress.",
				feedOptions: {
					type: "rss",
					title: "Yoast Local SEO changelog",
					description: "Stay up-to-date about new bugfixes and features in every release.",
					copyright: "Copyright © " + year + " Yoast BV",
					language: "en",
				},
				onUntruncatedBlogPosts: "ignore",
			},
		],
		[
			require.resolve( "./src/plugins/changelog/index.js" ),
			{
				id: "wpseo-news",
				routeBasePath: "changelog/news-seo/",
				path: "./changelog/source/news-seo/",
				blogTitle: "Yoast News SEO changelog",
				blogDescription: "Keep yourself up-to-date about new features, enhancements and bugfixes in every release of the Yoast News SEO plugin for WordPress.",
				feedOptions: {
					type: "rss",
					title: "Yoast News SEO changelog",
					description: "Stay up-to-date about new bugfixes and features in every release.",
					copyright: "Copyright © " + year + " Yoast BV",
					language: "en",
				},
				onUntruncatedBlogPosts: "ignore",
			},
		],
		[
			require.resolve( "./src/plugins/changelog/index.js" ),
			{
				id: "wpseo-video",
				routeBasePath: "changelog/video-seo/",
				path: "./changelog/source/video-seo/",
				blogTitle: "Yoast Video SEO changelog",
				blogDescription: "Keep yourself up-to-date about new features, enhancements and bugfixes in every release of the Yoast Video SEO plugin for WordPress.",
				feedOptions: {
					type: "rss",
					title: "Yoast Video SEO changelog",
					description: "Stay up-to-date about new bugfixes and features in every release.",
					copyright: "Copyright © " + year + " Yoast BV",
					language: "en",
				},
				onUntruncatedBlogPosts: "ignore",
			},
		],
		[
			require.resolve( "./src/plugins/changelog/index.js" ),
			{
				id: "wpseo-woocommerce",
				routeBasePath: "changelog/woocommerce-seo/",
				path: "./changelog/source/woocommerce-seo/",
				blogTitle: "Yoast WooCommerce SEO changelog",
				blogDescription: "Keep yourself up-to-date about new features, enhancements and bugfixes in every release of the Yoast WooCommerce SEO plugin.",
				feedOptions: {
					type: "rss",
					title: "Yoast WooCommerce SEO changelog",
					description: "Stay up-to-date about new bugfixes and features in every release.",
					copyright: "Copyright © " + year + " Yoast BV",
					language: "en",
				},
				onUntruncatedBlogPosts: "ignore",
			},
		],
		[
			require.resolve( "./src/plugins/changelog/index.js" ),
			{
				id: "duplicate-post",
				routeBasePath: "changelog/duplicate-post/",
				path: "./changelog/source/duplicate-post/",
				blogTitle: "Yoast Duplicate Post changelog",
				blogDescription: "Keep yourself up-to-date about new features, enhancements and bugfixes in every release of the Yoast Duplicate Post plugin.",
				feedOptions: {
					type: "rss",
					title: "Yoast Duplicate Post changelog",
					description: "Stay up-to-date about new bugfixes and features in every release.",
					copyright: "Copyright © " + year + " Yoast BV",
					language: "en",
				},
				onUntruncatedBlogPosts: "ignore",
			},
		],
		[
			require.resolve( "./src/plugins/changelog/index.js" ),
			{
				id: "shopify-seo",
				routeBasePath: "changelog/shopify/",
				path: "./changelog/source/shopify/",
				blogTitle: "Yoast SEO for Shopify changelog",
				blogDescription: "Keep yourself up-to-date about new features, enhancements and bugfixes in every release of Yoast SEO for Shopify.",
				feedOptions: {
					type: "rss",
					title: "Yoast SEO for Shopify changelog",
					description: "Stay up-to-date about new bugfixes and features in every release.",
					copyright: "Copyright © " + year + " Yoast BV",
					language: "en",
				},
				onUntruncatedBlogPosts: "ignore",
			},
		],
		[
			require.resolve( "./src/plugins/changelog/index.js" ),
			{
				id: "ai-brand-insights",
				routeBasePath: "changelog/ai-brand-insights/",
				path: "./changelog/source/ai-brand-insights/",
				blogTitle: "Yoast AI Brand Insights changelog",
				blogDescription: "Keep yourself up-to-date about new features, enhancements and bugfixes in every release of Yoast AI Brand Insights.",
				feedOptions: {
					type: "rss",
					title: "Yoast AI Brand Insights changelog",
					description: "Stay up-to-date about new bugfixes and features in every release.",
					copyright: "Copyright © " + year + " Yoast BV",
					language: "en",
				},
				onUntruncatedBlogPosts: "ignore",
			},
		],
		[
			require.resolve( "docusaurus-gtm-plugin" ),
			{
				id: "GTM-NHRB36F",
			},
		],
	],

	themes: [
		require.resolve( "@docusaurus/theme-mermaid" ),
		[
			require.resolve( "@easyops-cn/docusaurus-search-local" ),
			{
				hashed: true,
				indexBlog: false,
				docsRouteBasePath: "/",
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
						editUrl: "https://github.com/yoast/developer/tree/main/",
					},
					theme: {
						customCss: require.resolve( "./src/css/custom.css" ),
					},
					sitemap: {
						lastmod: "date",
						priority: null,
						changefreq: null,
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
							position: "left",
						},
						{
							href: "https://github.com/yoast",
							label: "GitHub",
							position: "right",
						},
						{
							type: "search",
							position: "right",
						},
					],
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
									label: "Yoast SEO Premium",
									href: "https://yoast.com/product/yoast-seo-premium-wordpress/",
								},
								{
									label: "Yoast SEO for Shopify",
									href: "https://yoast.com/product/yoast-seo-shopify/",
								},
								{
									label: "Yoast WooCommerce SEO",
									href: "https://yoast.com/product/yoast-woocommerce-seo/",
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
						},
					],
					copyright: `Copyright © ${year} Yoast BV. Built with Docusaurus.`,
				},
				prism: {
					additionalLanguages: [ "php", "json" ],
					theme: prismThemes.github,
					darkTheme: prismThemes.dracula,
				},
			}
		),
};
