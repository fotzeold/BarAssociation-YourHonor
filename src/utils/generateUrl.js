function generateUrl(text) {
	let slug = text.toLowerCase();

	slug = slug.replace(/\s+/g, '-');
	slug = slug.replace(/[^a-z0-9\-]/g, '');
	slug = slug.replace(/-{2,}/g, '-');
	slug = slug.replace(/^-+|-+$/g, '');

	const commonWords = ['the', 'and', 'in', 'to', 'for', 'with', 'a', 'an', 'of', 'on', 'at', 'by'];
	slug = slug.split('-').filter(word => !commonWords.includes(word)).join('-');

	const maxWords = 5;
	slug = slug.split('-').slice(0, maxWords).join('-');

	return slug;
}

export default generateUrl;
