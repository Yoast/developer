import React, {useState} from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Layout from "@theme/Layout";
import DocSidebar from "@theme/DocSidebar";
import SearchBar from '@theme/SearchBar';
import pageStyles from "../theme/DocPage/styles.module.css";
import itemStyles from "../theme/DocItem/styles.module.css";
import Logo from "../theme/Logo";

import {docsSidebars} from "../../.docusaurus/docusaurus-plugin-content-docs/route-9ee";
import classnames from "classnames";

function Home( props ) {
	const {location} = props;
	const {siteConfig: {customFields = {}, themeConfig = {}} = {}} = useDocusaurusContext();
	const {sidebarCollapsible = true} = themeConfig;
	const sidebar = "mainSidebar";
	const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);

	return (
		<Layout
			title="Yoast Developer portal"
			permalink="/"
			description={customFields.description}>
			<div className={pageStyles.docPage}>
				<aside className={pageStyles.sidebar}>
					<Logo/>
					<div className={pageStyles.sidebar__menu}>
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
				<main className={pageStyles.docMainContainer}>
					<div className="padding-vert--lg">
						<div className="container">
							<div className="row">
								<div className={classnames( "col", itemStyles.docItemCol )}>
									<div className={itemStyles.docItemContainer}>
										<article>
											<header>
												<h1 className={itemStyles.docTitle}>Yoast Developer portal</h1>
											</header>

											<div className="markdown">
												<p>Welcome to the Yoast Developer portal, the place to find any
													technical information related to our plugins.</p>
												<p>Currently, we have the following features documented:</p>
												<ul>
													<li><a href="/features/canonical-urls/overview">Canonical URL
														page</a></li>
													<li><a href="/features/meta-robots/overview">Meta robots</a></li>
													<li><a href="/features/schema/overview">Schema.org</a></li>
													<li><a href="/features/xml-sitemaps/overview">XML sitemaps</a></li>
												</ul>
											</div>
										</article>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</Layout>
	);
   }

export default Home;
