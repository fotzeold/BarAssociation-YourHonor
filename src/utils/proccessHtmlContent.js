const processHtmlContent = (html) => {
	const tempDiv = document.createElement("div");
	tempDiv.innerHTML = html;
	const cleanText = tempDiv.textContent || tempDiv.innerText || "";

	const trimmedText = cleanText.substring(0, 200).trim() + '...';

	const words = trimmedText
		.toLowerCase()
		.split(/\s+/)
		.filter(word => word.length > 0)
		.map(word => word.replace(/[^a-zA-Zа-яА-ЯїЇєЄіІґҐ'']/g, ''));

	const filteredWords = words.filter((word) => word.length > 2);

	const wordFrequency = filteredWords.reduce((freq, word) => {
		freq[word] = (freq[word] || 0) + 1;
		return freq;
	}, {});

	const keywords = Object.entries(wordFrequency)
		.sort((a, b) => b[1] - a[1])
		.slice(0, 5)
		.map(([word]) => word)
		.join(', ');

	return {
		sentence: trimmedText,
		keywords: keywords || ''
	};
};

export default processHtmlContent;