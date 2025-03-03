/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Based on: https://github.com/facebook/docusaurus/blob/main/website/src/plugins/changelog/index.js
 */

const path = require( "path" );
const fs = require( "fs-extra" );
const pluginContentBlog = require( "@docusaurus/plugin-content-blog" );
const { aliasedSitePath, docuHash, normalizeUrl } = require( "@docusaurus/utils" );

/**
 * Multiple versions may be published on the same day, causing the order to be
 * the reverse. Therefore, our publish time has a "fake hour" to order them.
 */
const publishTimes = new Set();
/**
 * @type {Record<string, {name: string, url: string,alias: string, imageURL: string}>}
 */

/**
 * A process section.
 *
 * @param {string} section A section.
 * @param {string} plugin A plugin.
 *
 * @returns {string} Markdown.
 */
function processSection( section, plugin ) {
	const title = section
		.match( /(\n|^)(##|=)(.*)(=)?\n/ )?.[ 0 ]
		.trim()
		.replace( "## ", "" )
		.replace( "= ", "" )
		.replace( " =", "" )
		.replace( /\//g, "-" )
		.replace( "(UTC)", "" )
		.trim();

	if ( ! title ) {
		return null;
	}

	const matches = section.match( /^Release date: (\d{4}-\d{2}-\d{2})( \d{2}:\d{2})?$/m );
	if ( matches === null || typeof matches === "undefined" ) {
		/* eslint-disable no-console */
		console.log( section );
		/* eslint-enable no-console */
	}
	let date = matches[ 1 ];
	let hour = 20;
	if ( date.indexOf( ":" ) === -1 ) {
		while ( publishTimes.has( `${date}T${hour}:00` ) ) {
			hour -= 1;
		}
		date = date + "T" + hour + ":00";
	} else {
		date = date.replace( " ", "T" );
	}

	publishTimes.add( date );

	let content = section
		.replace( /(\n|^)## .*/, "" )
		.replace( /(\n|^)= .* =/, "" )
		.replace( /Release date: (\d{4}-\d{2}-\d{2})( \d{2}:\d{2})?/, "" )
		.trim();

	if ( content.length < 1000 ) {
		content = content.replace( /####/g, "###" );
	} else {
		content = content.replace( /####/, "<!--truncate-->\n##" );
		content = content.replace( /####/g, "##" );
	}

	return {
		title: title.replace( / \(.*\)/, "" ),
		content: `---
title: "${title}"
keywords: ["${plugin}"]
date: ${date}
---

# ${plugin} ${title.replace( / \(.*\)/, "" )}

${content}
`,
	};
}

/**
 * Changelog plugin.
 *
 * @param {object} context Context.
 * @param {object} options Options.
 *
 * @returns {object} A docusaurus plugin.
 */
async function ChangelogPlugin( context, options ) {
	const blogPlugin = await pluginContentBlog.default( context, {
		...options,
		archiveBasePath: null,
		showReadingTime: false,
		postsPerPage: 50,
		blogSidebarCount: 10,
		blogSidebarTitle: "Recent releases",
		blogListComponent: "@theme/ChangelogList",
		blogPostComponent: "@theme/ChangelogPage",
	} );
	const changelogPath = path.join( __dirname, "../../../changelogs/" + options.id + ".md" );
	return {
		...blogPlugin,
		name: "changelog-plugin",
		async loadContent() {
			const fileContent = await fs.readFile( changelogPath, "utf-8" );
			const sections = fileContent
				.split( /(?=(^|\n)(##|=) )/ )
				.map(
					section => processSection( section, options.blogTitle.replace( " changelog", "" ) ),
				)
				.filter( Boolean );
			await Promise.all(
				sections.map( ( section ) =>
					fs.outputFile(
						path.join( options.path, `${section.title}.md` ),
						section.content,
					),
				),
			);
			const content = await blogPlugin.loadContent();

			content.blogPosts.forEach( ( post, index ) => {
				const pageIndex = Math.floor( index / options.postsPerPage );
				post.metadata.listPageLink = normalizeUrl( [
					context.baseUrl,
					options.routeBasePath,
					pageIndex === 0 ? "/" : `/page/${pageIndex + 1}`,
				] );
			} );

			return content;
		},
		configureWebpack( ...args ) {
			const config = blogPlugin.configureWebpack( ...args );
			const pluginDataDirRoot = path.join(
				context.generatedFilesDir,
				"changelog-plugin",
				options.id,
			);
			// Redirect the metadata path to our folder
			const mdxLoader = config.module.rules[ 0 ].use[ 0 ];
			mdxLoader.options.metadataPath = ( mdxPath ) => {
				// Note that metadataPath must be the same/in-sync as
				// the path from createData for each MDX.
				const aliasedPath = aliasedSitePath( mdxPath, context.siteDir );
				return path.join( pluginDataDirRoot, `${docuHash( aliasedPath )}.json` );
			};
			return config;
		},
		getThemePath() {
			return "./theme";
		},
		getPathsToWatch() {
			// Don't watch the generated dir
			return [ changelogPath ];
		},
	};
}

ChangelogPlugin.validateOptions = pluginContentBlog.validateOptions;

module.exports = ChangelogPlugin;
