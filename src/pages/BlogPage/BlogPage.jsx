import { useState, useEffect } from 'react';
import { getArticles, getArticlesByCategory, searchArticles } from '../../api/api';
import { useLanguage } from "../../context/LanguageContext"
import TopPage from '../../components/TopPage/TopPage';
import HeroBlog from './HeroBlog/HeroBlog';
import ArticlesList from './ArticlesList/ArticlesList';
import Pagination from './Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import Loader from '../../ui/Loader/Loader';
import categories from '../../utils/categories';
import CustomHelmet from '../../components/CustomHelmet/CustomHelmet';

const BlogPage = () => {
	const { texts } = useLanguage()

	const navigate = useNavigate()

	const [currPage, setCurrPage] = useState(1);
	const [totalPages, setTotalPages] = useState(null);
	const [articles, setArticles] = useState(null);
	const [lastArticle, setLastArticle] = useState(null);
	const [loading, setLoading] = useState(true);
	const [category, setCategory] = useState(null);
	const [searchParam, setSearchParam] = useState("");
	const [searchQuery, setSearchQuery] = useState(null);

	useEffect(() => {
		const fetchArticles = async () => {
			setLoading(true);
			try {
				let data;

				if (searchQuery) {
					data = await searchArticles(searchQuery, currPage);
				} else if (category) {
					data = await getArticlesByCategory(category, currPage);
				} else {
					data = await getArticles(currPage);
				}

				setArticles(data.posts);
				setTotalPages(data.total_pages);

				if (currPage === 1 && data.posts.length > 0) {
					setLastArticle(data.posts[0]);
				}

				setLoading(false);
			} catch (err) {
				navigate("/error", {
					state: {
						typeError: category
							? "category"
							: searchQuery
								? "search"
								: "blog",
					},
				});
			}
		};

		fetchArticles();
	}, [category, searchQuery, currPage]);

	const changeCategory = (newCategory) => {
		setCategory(newCategory);
		setSearchQuery(null);
		setCurrPage(1);
	}

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		setSearchQuery(searchParam);
		setCategory(null);
		setCurrPage(1);

		const element = document.getElementById('article-title');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<>
			<CustomHelmet meta={texts.meta.blog} />
			<main>
				<TopPage
					second_title={texts.blog.second_title}
					third_title={texts.blog.third_title}
					backgound={"/image/blog-top.webp"}
				/>
				{
					articles === null ? <Loader /> :
						<div className='blog-content' style={{ marginBottom: "60px" }}>
							<HeroBlog
								article={lastArticle}
								categories={categories}
								category={category}
								setCategory={changeCategory}
								handleSearchSubmit={handleSearchSubmit}
								searchParam={searchParam}
								setSearchParam={setSearchParam}
							/>
							{
								loading ?
									<Loader /> :
									<ArticlesList searchQuery={searchQuery} articles={articles} texts={texts} />
							}
							<Pagination totalPages={totalPages} currPage={currPage} setCurrPage={setCurrPage} />
						</div>
				}
			</main>
		</>
	);
};

export default BlogPage;

