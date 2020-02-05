import React from 'react';
import CodeBlock from '@theme/CodeBlock';

/**
 * Outputs a properly formed JSON-LD tag to be used in the output.
 *
 * @param string jsonScript
 *
 * @returns {string} The HTML output.
 */
const toHTMLOutput = ( jsonScript ) => {
	return `<script type="application/ld+json">${ jsonScript }</script>`;
};

/**
 * The Yoast Schema Example component.
 *
 * @param {Object} props The props.
 *
 * @returns {JSX} The schema example component.
 * @constructor
 */
const YoastSchemaExample = ( props ) => {
	const cleaned = toHTMLOutput( props.children );

	return (
		<div className="schema_example">
			<form action="https://search.google.com/structured-data/testing-tool" method="post" target="_blank">
				<input className="button button--secondary" type="submit" value="See in the Google Structured Data Testing Tool" />
				<textarea name="code" style={{display: "none"}} value={cleaned} readOnly></textarea>
			</form>
			<CodeBlock className="json">{props.children}</CodeBlock>
		</div>
	);
}

export default YoastSchemaExample;
