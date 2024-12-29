async function getHtml(fileName) {
	try {
		const response = await fetch(`/html/${fileName}`);

		if (!response.ok) {
			throw new Error(`Failed to load HTML file: ${fileName}`);
		}
		const htmlContent = await response.text();
		return htmlContent;
	} catch (error) {
		throw error;
	}
}

export default getHtml;
