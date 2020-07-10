/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from "react";
import { MDXProvider } from "@mdx-js/react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import renderRoutes from "@docusaurus/renderRoutes";
import Layout from "@theme/Layout";
import SearchBar from "@theme/SearchBar";
import DocSidebar from "@theme/DocSidebar";
import MDXComponents from "@theme/MDXComponents";
import NotFound from "@theme/NotFound";
import { matchPath } from "@docusaurus/router";

import styles from "./styles.module.css";
import Logo from "../Logo";
import DocItem from "../DocItem";

function DocPage( props ) {
	const { route: baseRoute, docsMetadata, location, content } = props;
	const {
		permalinkToSidebar,
		docsSidebars,
		version,
		isHomePage,
		homePagePath,
	} = docsMetadata;

	// Get case-sensitive route such as it is defined in the sidebar.
	const currentRoute = baseRoute.routes.find( ( route ) => {
		return matchPath( location.pathname, route );
	} ) || {};

	let sidebar = currentRoute.path === '/'
		? 'mainSidebar'
		: permalinkToSidebar[currentRoute.path];

	const { siteConfig: { themeConfig = {} } = {}, isClient } = useDocusaurusContext();
	const { sidebarCollapsible = true } = themeConfig;
	const [ isSearchBarExpanded, setIsSearchBarExpanded ] = useState( false );

	let renderedContent = (
        <MDXProvider components={ MDXComponents }>
          { isHomePage ? (
              <DocItem content={ content }/>
          ) : (
              renderRoutes( baseRoute.routes )
          ) }
        </MDXProvider>
	);

	if ( !isHomePage && Object.keys( currentRoute ).length === 0 ) {
		renderedContent = <NotFound { ...props } />;
		sidebar = 'mainSidebar';
	}

	return (
		<Layout version={ version } key={ isClient }>
			<div className={ styles.docPage }>

				<aside className={ styles.sidebar }>
					<Logo/>
					<div className={ styles.sidebar__menu }>
						<SearchBar
							handleSearchBarToggle={ setIsSearchBarExpanded }
							isSearchBarExpanded={ isSearchBarExpanded }
						/>
						<DocSidebar
							docsSidebars={ docsSidebars }
							location={ location }
							sidebar={ sidebar }
							sidebarCollapsible={ sidebarCollapsible }
							path={ isHomePage ? homePagePath : currentRoute.path }
						/>
					</div>
				</aside>

				<main className={ styles.docMainContainer }>
                  {renderedContent}
				</main>
			</div>
		</Layout>
	);
}

export default DocPage;
