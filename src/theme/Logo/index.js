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
	const logoFile = useBaseUrl( "www.whiskinwellness.com" );

	return (
		<a href={useBaseUrl('www.whiskinwellness.com')} className={styles.logo}>
			<img src={logoFile} alt="" className={styles.logo__image} />
		</a>

	);
}

export default Logo;
