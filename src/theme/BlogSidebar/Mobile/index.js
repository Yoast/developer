import React from "react";
import Link from "@docusaurus/Link";
import { NavbarSecondaryMenuFiller } from "@docusaurus/theme-common";
import clsx from "clsx";
import styles from "../Desktop/styles.module.css";

/**
 * Renders secondary blog page sidebar menu for mobile devices.
 *
 * @param {object} sidebar A sidebar.
 * @returns {JSX.Element} A secondary blog sidebar menu.
 */
function BlogSidebarMobileSecondaryMenu( { sidebar } ) {
	return (
		<div>
			<ul className={ clsx( styles.sidebarItemList, "clean-list" ) }>
				<li className={ styles.sidebarItem }>
					<Link
						isNavLink={ true } to="/"
						className="menu__link"
						activeClassName="menu__link--active"
					>
						Home</Link>
				</li>
			</ul>
			<div className={ clsx( styles.sidebarItemTitle, "margin-bottom--md" ) }>
				Plugin changelogs
			</div>
			<ul className={ clsx( styles.sidebarItemList, "clean-list" ) }>
				<li className={ styles.sidebarItem }>
					<Link
						isNavLink={ true } to="/changelog/yoast-seo/"
						className="menu__link"
						activeClassName="menu__link--active"
					>
						Yoast SEO changelog</Link>
				</li>
				<li className={ styles.sidebarItem }>
					<Link
						isNavLink={ true } to="/changelog/yoast-seo-premium/"
						className="menu__link"
						activeClassName="menu__link--active"
					>
						Yoast SEO Premium changelog</Link>
				</li>
				<li className={ styles.sidebarItem }>
					<Link
						isNavLink={ true } to="/changelog/local-seo/"
						className="menu__link"
						activeClassName="menu__link--active"
					>
						Local SEO changelog</Link>
				</li>
				<li className={ styles.sidebarItem }>
					<Link
						isNavLink={ true } to="/changelog/news-seo/"
						className="menu__link"
						activeClassName="menu__link--active"
					>
						News SEO changelog</Link>
				</li>
				<li className={ styles.sidebarItem }>
					<Link
						isNavLink={ true } to="/changelog/video-seo/"
						className="menu__link"
						activeClassName="menu__link--active"
					>
						Video SEO changelog</Link>
				</li>
				<li className={ styles.sidebarItem }>
					<Link
						isNavLink={ true } to="/changelog/woocommerce-seo/"
						className="menu__link"
						activeClassName="menu__link--active"
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
				<li className={ styles.sidebarItem }>
					<Link
						isNavLink={ true } to="/changelog/ai-brand-insights/"
						className={ styles.sidebarItemLink }
						activeClassName={ styles.sidebarItemLinkActive }
					>
						AI Brand Insights changelog</Link>
				</li>
			</ul>
			<div className={ clsx( styles.sidebarItemTitle, "margin-bottom--md" ) }>
				Recent releases
			</div>

			<ul className="menu__list">
				{ sidebar.items.map( ( item ) => (
					<li key={ item.permalink } className="menu__list-item">
						<Link
							isNavLink={ true }
							to={ item.permalink }
							className="menu__link"
							activeClassName="menu__link--active"
						>
							{ item.title }
						</Link>
					</li>
				) ) }
			</ul>
		</div>
	);
}

/**
 * Renders blog sidebar for mobile devices.
 *
 * @param {object} props Properties.
 * @returns {JSX.Element} A blog sidebar for mobile.
 */
export default function BlogSidebarMobile( props ) {
	return (
		<NavbarSecondaryMenuFiller
			component={ BlogSidebarMobileSecondaryMenu }
			props={ props }
		/>
	);
}
