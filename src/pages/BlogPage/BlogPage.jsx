import { useState, useEffect } from 'react';
import { getArticles, getArticlesByCategory, searchArticles } from '../../api/api';
import { useLanguage } from "../../context/LanguageContext"
import TopPage from '../../components/TopPage/TopPage';
import HeroBlog from './HeroBlog/HeroBlog';
import ArticlesList from './ArticlesList/ArticlesList';
import Pagination from './Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import Loader from '../../ui/Loader/Loader';

const categories = [
	{ uk: "GDPR", en: "GDPR" },
	{ uk: "Захист персональних даних", en: "Personal Data Protection" },
	{ uk: "CCPA/CPRA", en: "CCPA/CPRA" },
	{ uk: "Інформаційна безпека", en: "Information Security" },
	{ uk: "ISO 27001, ISO 27701", en: "ISO 27001, ISO 27701" },
	{ uk: "Регулювання ШІ", en: "AI Regulation" },
	{ uk: "Для компаній", en: "For Companies" },
	{ uk: "Для ІТ-працівників", en: "For IT Professionals" },
	{ uk: "ІТ-контракти", en: "IT Contracts" },
	{ uk: "Внутрішні документи компанії", en: "Internal Company Documents" },
	{ uk: "Права інтелектуальної власності", en: "Intellectual Property Rights" },
	{ uk: "Нерухомість", en: "Real Estate" },
	{ uk: "Консультації", en: "Consultations" }
]

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
						messageLoc: category
							? "В даній категорії постів на даний момент немає!"
							: searchQuery
								? "Нічого не знайдено за вашим запитом!"
								: "Блог на даний момент пустий!",
						linkTextLoc: category || searchQuery ? "До усіх постів" : "На головну",
						linkToLoc: category || searchQuery ? "/blog" : "/",
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
	);
};

export default BlogPage;
