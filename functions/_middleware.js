class TitleHandler {
	element(element) {
		let title = element.querySelector("title").innerText;
		let encodedTitle = encodeURIComponent( title );
		element.after(`<meta property="og:image" content="https://yoast.com/shared-assets/opengraph/image.php?title=${encodedTitle}" />`, { html: true })
	}
}

export const onRequestGet = async ({ next }) => {
	// We first get the original response from the project
	const response = await next()

	// Then, using HTMLRewriter, we transform `form` elements with a `data-static-form-name` attribute, to tell them to POST to the current page
	return new HTMLRewriter()
		.on( 'title', new TitleHandler() )
		.transform(response)
}
