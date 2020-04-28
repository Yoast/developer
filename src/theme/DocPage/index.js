/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {MDXProvider} from '@mdx-js/react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import renderRoutes from '@docusaurus/renderRoutes';
import Layout from '@theme/Layout';
import DocSidebar from '@theme/DocSidebar';
import MDXComponents from '@theme/MDXComponents';
import NotFound from '@theme/NotFound';
import {matchPath} from '@docusaurus/router';

import styles from './styles.module.css';
import Logo from "../Logo";

function matchingRouteExist( routes, pathname ) {
	return routes.some( route => matchPath( pathname, route ) );
}

function getSanitizedLocation( location ) {
	return location.pathname.replace( /\/$/, "" );
}

let parentNode = {};

/**
 * Gets the currently active sidebar entry, if present.
 *
 * @param {Object} sidebarEntries The sidebar entries.
 * @param {string} targetItem The target item's href.
 *
 * @returns {Object} The sidebar entry.
 */
function getCurrentSidebarItem( sidebarEntries, targetItem ) {
	return sidebarEntries.reduce( ( result, current ) => {
		if ( current.type !== "category" ) {
			if ( current.href !== "" && current.href === targetItem ) {
				return { ...current, parent: parentNode };
			}

			return result;
		}

		parentNode = current;

		if ( ! current.items || current.items.length === 0 ) {
			return result;
		}

		let childItems = getCurrentSidebarItem( current.items, targetItem );

		if ( childItems.label ) {
			return childItems;
		}

		return result;
	}, {} );
}

/**
 * Gets the current page's parent.
 *
 * @param {Object} sidebarEntries The sidebar entries.
 * @param {Object} location The current location.
 *
 * @returns {string} The parent's label or an empty string if there is no parent.
 */
function getPageParent( sidebarEntries, location ) {
	const match = getCurrentSidebarItem( sidebarEntries, location );

	// Test for empty
	if ( Object.keys( match ).length === 0 ) {
		return "";
	}

	return match.parent.label;
}

function DocPage( props ) {
	const { route, docsMetadata, location } = props;
	const { permalinkToSidebar, docsSidebars, version } = docsMetadata;
	const { siteConfig: { themeConfig = {} } = {} } = useDocusaurusContext();
	const { sidebarCollapsible = true } = themeConfig;

	const sidebar = permalinkToSidebar[getSanitizedLocation( location )] || "mainSidebar";
	const parent = getPageParent(
		docsSidebars[sidebar],
		getSanitizedLocation( location )
	);

	let content = (
		<MDXProvider components={ MDXComponents }>
			{ renderRoutes( route.routes, { parentItem: parent } ) }
		</MDXProvider>
	);

	if ( !matchingRouteExist( route.routes, location.pathname ) ) {
		content = (
			<NotFound {...props} />
		);
	}

	return (
		<Layout version={ version }>
			<div className={ styles.docPage }>
				<div className={ styles.docSidebarContainer }>
					<Logo/>
					{ sidebar && (
						<DocSidebar
							docsSidebars={ docsSidebars }
							location={ location }
							sidebar={ sidebar }
							sidebarCollapsible={ sidebarCollapsible }
						/>
					) }
				</div>
				<main className={ styles.docMainContainer }>
					{ content }
				</main>
			</div>
		</Layout>
	);
}

export default DocPage;
