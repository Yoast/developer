import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";

/**
 * Renders blog sidebar.
 *
 * @param {object} sidebar A sidebar.
 * @returns {JSX.Element} A blog sidebar for desktop.
 */
export default function BlogSidebarDesktop( { sidebar } ) {
	return (
		<aside className="col col--3">
			<nav
				className={ clsx( styles.sidebar, "thin-scrollbar" ) }
				aria-label={ translate( {
					id: "theme.blog.sidebar.navAriaLabel",
					message: "Blog recent posts navigation",
					description: "The ARIA label for recent posts in the blog sidebar",
				} ) }
			>
				<ul className={ clsx( styles.sidebarItemList, "clean-list" ) }>
					<li className={ styles.sidebarItem }>
						<Link
							isNavLink={ true } to="/"
							className={ styles.sidebarItemLink }
							activeClassName={ styles.sidebarItemLinkActive }
						>
							Home</Link>
					</li>
				</ul>
				<div className={ clsx( styles.sidebarItemTitle, "margin-bottom--md" ) }>
					Changelogs
				</div>
				<ul className={ clsx( styles.sidebarItemList, "clean-list" ) }>
					<li className={ styles.sidebarItem }>
						<Link
							isNavLink={ true } to="/changelog/yoast-seo/"
							className={ styles.sidebarItemLink }
							activeClassName={ styles.sidebarItemLinkActive }
						>
							Yoast SEO changelog</Link>
					</li>
					<li className={ styles.sidebarItem }>
						<Link
							isNavLink={ true } to="/changelog/yoast-seo-premium/"
							className={ styles.sidebarItemLink }
							activeClassName={ styles.sidebarItemLinkActive }
						>
							Yoast SEO Premium changelog</Link>
					</li>
					<li className={ styles.sidebarItem }>
						<Link
							isNavLink={ true } to="/changelog/local-seo/"
							className={ styles.sidebarItemLink }
							activeClassName={ styles.sidebarItemLinkActive }
						>
							Local SEO changelog</Link>
					</li>
					<li className={ styles.sidebarItem }>
						<Link
							isNavLink={ true } to="/changelog/news-seo/"
							className={ styles.sidebarItemLink }
							activeClassName={ styles.sidebarItemLinkActive }
						>
							News SEO changelog</Link>
					</li>
					<li className={ styles.sidebarItem }>
						<Link
							isNavLink={ true } to="/changelog/video-seo/"
							className={ styles.sidebarItemLink }
							activeClassName={ styles.sidebarItemLinkActive }
						>
							Video SEO changelog</Link>
					</li>
					<li className={ styles.sidebarItem }>
						<Link
							isNavLink={ true } to="/changelog/woocommerce-seo/"
							className={ styles.sidebarItemLink }
							activeClassName={ styles.sidebarItemLinkActive }
						>
							Yoast WooCommerce SEO changelog</Link>
					</li>
					<li className={ styles.sidebarItem }>
						<Link
							isNavLink={ true } to="/changelog/duplicate-post/"
							className={ styles.sidebarItemLink }
							activeClassName={ styles.sidebarItemLinkActive }
						>
							Yoast Duplicate Post changelog</Link>
					</li>
					<li className={ styles.sidebarItem }>
						<Link
							isNavLink={ true } to="/changelog/shopify/"
							className={ styles.sidebarItemLink }
							activeClassName={ styles.sidebarItemLinkActive }
						>
							Yoast SEO for Shopify changelog</Link>
					</li>
				</ul>

				<div className={ clsx( styles.sidebarItemTitle, "margin-bottom--md" ) }>
					{ sidebar.title }
				</div>
				<ul className={ clsx( styles.sidebarItemList, "clean-list" ) }>
					{ sidebar.items.map( ( item ) => (
						<li key={ item.permalink } className={ styles.sidebarItem }>
							<Link
								isNavLink={ true }
								to={ item.permalink }
								className={ styles.sidebarItemLink }
								activeClassName={ styles.sidebarItemLinkActive }
							>
								{ item.title }
							</Link>
						</li>
					) ) }
				</ul>
			</nav>
		</aside>
	);
}
