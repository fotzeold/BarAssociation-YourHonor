const BASE_URL = "https://admin.advocate-online.com/wp-json/wp/v2"

async function getArticles(page = 1) {
	try {
		let res = await fetch(`${BASE_URL}/all-articles?page=${page}`)

		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status} ${res.statusText}`);
		}

		let data = await res.json()

		if (!data || data.length === 0) {
			throw new Error('No data received');
		}

		return data

	} catch (error) {
		throw error;
	}
}

async function getArticleById(id) {
	try {

		let res = await fetch(`${BASE_URL}/article/${id}`)

		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status} ${res.statusText}`);
		}

		let data = await res.json()

		if (!data || Object.keys(data).length === 0) {
			throw new Error('Article not found');
		}

		return data

	} catch (error) {
		throw error;
	}
}

async function searchArticles(searchQuery, page = 1) {
	try {

		const SEARCH_URL = `${BASE_URL}/search-articles?query=${encodeURIComponent(searchQuery)}&page=${page}`;

		let res = await fetch(SEARCH_URL)

		// Перевіряємо статус відповіді
		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status} ${res.statusText}`);
		}

		let data = await res.json()

		if (!data || data.length === 0) {
			throw new Error('No articles found matching your search');
		}

		return data

	} catch (error) {
		throw error;
	}
}

async function getArticlesByCategory(category, page = 1) {
	try {
		const url = `${BASE_URL}/articles-by-category?category=${encodeURIComponent(category)}&page=${page}`;
		let res = await fetch(url);

		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status} ${res.statusText}`);
		}

		let data = await res.json();

		if (!data.posts || data.posts.length === 0) {
			throw new Error('No articles found in this category');
		}

		return data;

	} catch (error) {
		console.error('Error fetching articles:', error.message);
		throw error;
	}
}


export { getArticles, getArticleById, searchArticles, getArticlesByCategory } 