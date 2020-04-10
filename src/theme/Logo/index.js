import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from './styles.module.css';

/**
 * The Logo component.
 *
 * @param {Object} props The props.
 *
 * @returns {JSX} The Logo component.
 * @constructor
 */
const Logo = () => {
	const logoFile = useBaseUrl( "/img/yoast-logo.svg" );

	return (
		<a href={useBaseUrl('/')} className={styles.logo}>
			<img src={logoFile} alt="" className={styles.logo__image} />
		</a>

	);
}

export default Logo;
