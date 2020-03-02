/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState} from 'react';
import {MDXProvider} from '@mdx-js/react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import renderRoutes from '@docusaurus/renderRoutes';
import Layout from '@theme/Layout';
import SearchBar from '@theme/SearchBar';
import DocSidebar from '@theme/DocSidebar';
import MDXComponents from '@theme/MDXComponents';
import NotFound from '@theme/NotFound';
import {matchPath} from '@docusaurus/router';

import styles from './styles.module.css';
import Logo from "../Logo";

function matchingRouteExist( routes, pathname ) {
	return routes.some( route => matchPath( pathname, route ) );
}

function DocPage( props ) {
	const {route, docsMetadata, location} = props;
	const {permalinkToSidebar, docsSidebars, version} = docsMetadata;
	const sidebar = permalinkToSidebar[location.pathname.replace( /\/$/, '' )] || 'mainSidebar';
	const {siteConfig: {themeConfig = {}} = {}} = useDocusaurusContext();
	const {sidebarCollapsible = true} = themeConfig;

	const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);



	let content = (
		<MDXProvider components={MDXComponents}>
			{renderRoutes( route.routes )}
		</MDXProvider>
	);

	if ( !matchingRouteExist( route.routes, location.pathname ) ) {
		content = (
			<NotFound {...props} />
		);
	}

	return (
		<Layout version={version}>
			<div className={styles.docPage}>
				<aside className={styles.sidebar}>
					<Logo/>
					<div className={styles.sidebar__menu}>
						<SearchBar
							handleSearchBarToggle={setIsSearchBarExpanded}
							isSearchBarExpanded={isSearchBarExpanded}
						/>
						<DocSidebar
							docsSidebars={docsSidebars}
							location={location}
							sidebar={sidebar}
							sidebarCollapsible={sidebarCollapsible}
						/>
					</div>

				</aside>
				<main className={styles.docMainContainer}>
					{content}
				</main>
			</div>
		</Layout>
	);
}

export default DocPage;
