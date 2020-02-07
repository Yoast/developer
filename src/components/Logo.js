import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

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
		<a href="/" className="logo">
			<img src={logoFile} alt="" className="logo__image" />
		</a>

	);
}

export default Logo;
