module.exports = function (context, options) {
	return {
		name: 'og-site-name',
		injectHtmlTags({content}) {
			return {
				headTags: [
					{
						tagName: 'meta',
						attributes: {
							property: 'og:site_name',
							content: 'Yoast developer portal',
						},
					},
				],
			};
		},
	};
};
