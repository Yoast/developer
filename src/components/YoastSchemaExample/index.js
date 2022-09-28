import React from "react";
import CodeBlock from '@theme/CodeBlock';
import styles from "./styles.module.css";
import classnames from "classnames";

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
		<div className={ styles.schemaExample }>
			<form action="https://validator.schema.org/" method="post" target="_blank">
				<input className={ classnames( "button", "button--secondary", styles.modifyButton ) } type="submit"
				       value="Test &amp; modify in the Schema.org Validator"/>
				<textarea name="code" className={ styles.codeArea } value={ cleaned } readOnly></textarea>
			</form>
			<CodeBlock className="language-json">{ props.children }</CodeBlock>
		</div>
	);
}

export default YoastSchemaExample;
