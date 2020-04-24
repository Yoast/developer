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

function getCurrentSidebarItem( items, targetItem ) {
	return items.reduce( ( result, current ) => {
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

		let nItems = getCurrentSidebarItem( current.items, targetItem );

		if ( nItems.label ) {
			return nItems;
		}

		return result;
	}, {} );
}

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

	let content = (
		<MDXProvider components={ MDXComponents }>
			{ renderRoutes( route.routes ) }
		</MDXProvider>
	);

	if ( !matchingRouteExist( route.routes, location.pathname ) ) {
		content = (
			<NotFound { ...props } />
		);
	}

	const parent = getPageParent( docsSidebars[sidebar], getSanitizedLocation( location ) );

	return (
		<Layout version={ version } titlePrefix={parent}>
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
