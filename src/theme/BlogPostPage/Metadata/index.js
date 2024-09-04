import React from "react";
import { PageMetadata } from "@docusaurus/theme-common";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";

/**
 * Renders page metadata.
 *
 * @returns {JSX.Element} An <PageMetadata /> JSX element.
 */
export default function BlogPostPageMetadata() {
	const { metadata } = useBlogPost();
	const { date } = metadata;

	const blogTitle = metadata.frontMatter.keywords;
	const description = "This is the changelog for version " + metadata.title + " of " + blogTitle + ".";
	const title = blogTitle + " " + metadata.title + " changelog";
	const image = "https://yoast.com/shared-assets/opengraph/?title=" + encodeURIComponent( blogTitle + " " + metadata.title );
	return (
		<PageMetadata
			title={ title }
			description={ description }
			image={ image }
		>
			<meta property="og:type" content="article" />
			<meta property="article:published_time" content={ date } />
		</PageMetadata>
	);
}
