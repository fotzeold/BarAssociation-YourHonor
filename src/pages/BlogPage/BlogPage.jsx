import { useState, useEffect } from 'react';
import { getArticles } from '../../api/api';
import { useLanguage } from "../../context/LanguageContext"
import TopPage from '../../components/TopPage/TopPage';
import HeroBlog from './HeroBlog/HeroBlog';
import ArticlesList from './ArticlesList/ArticlesList';

const BlogPage = () => {
	const { texts } = useLanguage()

	const [currPage, setCurrPage] = useState(1)
	const [totalPages, setTotalPages] = useState(null)
	const [articles, setArticles] = useState(null);
	const [lastArticle, setLastArticle] = useState(null)

	useEffect(() => {
		const fetchArticles = async () => {
			try {
				const data = await getArticles(1);
				setArticles(data.posts);
				setLastArticle(data.posts[0])
				setTotalPages(data.total_pages)
			} catch (err) {
				setArticles(false);
			}
		};

		fetchArticles();
	}, []);

	if (articles === null) {
		return <div>Loading...</div>;
	}

	if (!articles) {
		return <div>Error...</div>;
	}

	return (
		<main>
			<TopPage
				second_title={texts.blog.second_title}
				third_title={texts.blog.third_title}
				backgound={"/image/blog-top.webp"}
			/>
			<HeroBlog article={lastArticle} texts={texts} />
			<ArticlesList articles={articles} texts={texts} />
		</main>
	);
};

export default BlogPage;

