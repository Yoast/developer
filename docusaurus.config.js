// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require( "prism-react-renderer/themes/github" );
const darkCodeTheme = require( "prism-react-renderer/themes/dracula" );

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

	plugins: [
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
				metadata: [{ name: 'robots', content: 'max-image-preview:large' }],
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
