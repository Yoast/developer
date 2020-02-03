import React from 'react';
import CodeBlock from '@theme/CodeBlock';

const cleanScript = ( jsonScript ) => {
	return `<script type="application/ld+json">${ jsonScript }</script>`;
};

const YoastSchemaExample = ( props ) => {
	const cleaned = cleanScript( props.children );

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
