import { useState, useEffect } from 'react';
import { getArticles, getArticlesByCategory } from '../../api/api';
import { useLanguage } from "../../context/LanguageContext"
import TopPage from '../../components/TopPage/TopPage';
import HeroBlog from './HeroBlog/HeroBlog';
import ArticlesList from './ArticlesList/ArticlesList';
import Pagination from './Pagination/Pagination';
import { useNavigate } from 'react-router-dom';

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

	const [currPage, setCurrPage] = useState(1)
	const [totalPages, setTotalPages] = useState(null)
	const [articles, setArticles] = useState(null);
	const [lastArticle, setLastArticle] = useState(null)
	const [loading, setLoading] = useState(true)
	const [category, setCategory] = useState(null)

	useEffect(() => {
		if (category) return

		const fetchArticles = async () => {
			setLoading(true)
			try {
				const data = await getArticles(currPage);
				setLoading(false)
				setArticles(data.posts);
				if (currPage === 1) {
					setLastArticle(data.posts[0])
				}
				setTotalPages(data.total_pages)
			} catch (err) {
				navigate("/error", {
					state: {
						messageLoc: "Блог на даний момент пустий!",
						linkTextLoc: "На головну",
						linkToLoc: "/",
					},
				});
			}
		};

		fetchArticles();
	}, [currPage]);

	useEffect(() => {
		if (!category) return

		const fetchArticlesByCategory = async () => {
			setLoading(true)
			try {
				const data = await getArticlesByCategory(category, currPage);
				setLoading(false)
				setArticles(data.posts);
				if (currPage === 1) {
					setLastArticle(data.posts[0])
				}
				setTotalPages(data.total_pages)
			} catch (err) {
				navigate("/error", {
					state: {
						messageLoc: "По такому запиту постів немає",
						linkTextLoc: "До усіх постів",
						linkToLoc: "/blog",
					},
				})
			}
		};

		fetchArticlesByCategory();
	}, [category, currPage])

	const changeCategory = (category) => {
		setCurrPage(1)
		setCategory(category)
	}

	if (articles === null) {
		return <div>Loading...</div>;
	}

	return (
		<main>
			<TopPage
				second_title={texts.blog.second_title}
				third_title={texts.blog.third_title}
				backgound={"/image/blog-top.webp"}
			/>
			<HeroBlog article={lastArticle} categories={categories} setCategory={changeCategory} />
			{
				loading ?
					<div style={{ minHeight: "337.6px" }}>Loading...</div> :
					<ArticlesList articles={articles} texts={texts} />
			}
			<Pagination totalPages={totalPages} currPage={currPage} setCurrPage={setCurrPage} />
		</main>
	);
};

export default BlogPage;

