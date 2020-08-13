/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState } from 'react';
import {MDXProvider} from '@mdx-js/react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import renderRoutes from '@docusaurus/renderRoutes';
import Layout from '@theme/Layout';
import SearchBar from "@theme/SearchBar";
import DocSidebar from '@theme/DocSidebar';
import MDXComponents from '@theme/MDXComponents';
import NotFound from '@theme/NotFound';
import {matchPath} from '@docusaurus/router';
import styles from './styles.module.css';
import Logo from '../Logo';

function isValidRoute( currentRoute ) {
  return 'path' in currentRoute;
}

function isHomepage( currentRoute ) {
  return isValidRoute( currentRoute ) && currentRoute.path === '/';
}

function getSidebar( { currentDocRoute, docsMetadata } ) {
  let sidebarName = 'mainSidebar';

  if ( isValidRoute( currentDocRoute ) ) {
    sidebarName = docsMetadata.permalinkToSidebar[currentDocRoute.path];
  }

  return docsMetadata.docsSidebars[sidebarName];
}

function getPath( currentRoute ) {
  if ( ! isValidRoute( currentRoute ) || isHomepage( currentRoute ) ) {
    return '/';
  }

  return currentRoute.path;
}

function DocPageContent( props ) {
  const {currentDocRoute, docsMetadata: { version, docsSidebars }, children} = props;
  const {siteConfig, isClient} = useDocusaurusContext();

  let path = getPath( currentDocRoute );
  let sidebar = getSidebar( props );
  let content = ( <MDXProvider components={MDXComponents}>{children}</MDXProvider> );

  if ( ! isValidRoute( currentDocRoute ) ) {
      content = <NotFound {...props} />;
  }

  const [ isSearchBarExpanded, setIsSearchBarExpanded ] = useState( false );

  return (
    <Layout version={version} key={isClient}>
      <div className={styles.docPage}>
        <div className={styles.docSidebarContainer} role="complementary">
          <Logo/>
          <div className={ styles.sidebar__menu }>
            <SearchBar
                handleSearchBarToggle={ setIsSearchBarExpanded }
                isSearchBarExpanded={ isSearchBarExpanded }
            />
            <DocSidebar
                docsSidebars={ docsSidebars }
                sidebar={sidebar}
                path={ path }
                sidebarCollapsible={
                siteConfig.themeConfig?.sidebarCollapsible ?? true
              }
            />
          </div>
        </div>
        <main className={styles.docMainContainer}>
          {content}
        </main>
      </div>
    </Layout>
  );
}

function DocPage(props) {
  const {
    route: {routes: docRoutes},
    docsMetadata,
    location,
  } = props;

  const currentDocRoute = docRoutes.find((docRoute) =>
    matchPath(location.pathname, docRoute),
  ) || {};

  return (
    <DocPageContent
      currentDocRoute={currentDocRoute}
      docsMetadata={docsMetadata}>
      {renderRoutes(docRoutes)}
    </DocPageContent>
  );
}

export default DocPage;
