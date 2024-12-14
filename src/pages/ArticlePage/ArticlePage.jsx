import { useParams } from "react-router-dom"
import { getArticleById } from "../../api/api"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ArticleContent from "./ArticleContent/ArticleContent"
import TopArticle from "./TopArticle/TopArticle"
import Loader from "../../ui/Loader/Loader"
import { useLanguage } from "../../context/LanguageContext"
import processHtmlContent from "../../utils/proccessHtmlContent"
import CustomHelmet from "../../components/CustomHelmet/CustomHelmet"

const ArticlePage = () => {
	const [article, setArticle] = useState(null)
	const navigate = useNavigate()
	const { id } = useParams()
	const { language, texts } = useLanguage()
	const defaultMeta = {
		title: language === "uk" ? "Стаття | Адвокатське об’єднання - Ваша честь" : "Article | Advocates’ Association - Your Honor",
		descr: language === "uk"
			? "Ця стаття присвячена актуальній темі, що може бути цікавою для широкої аудиторії. У матеріалі розглядаються ключові аспекти, практичні рекомендації та важливі деталі, які допоможуть вам краще зрозуміти тему. Читайте, щоб дізнатися більше!"
			: "This article covers an important topic that might be of interest to a broad audience. It explores key aspects, practical tips, and essential details to help you better understand the subject. Read on to learn more!",
		keywords: "Стаття, Article, Адвокатське об’єднання - Ваша честь, Advocates’ Association - Your Honor",
		url: window.location.href,
		image: "https://advocate-online.com/image/about-2.webp",
	};
	const [articleMeta, setArticleMeta] = useState(defaultMeta)

	useEffect(() => {
		if (!id) return

		const fetchArticle = async () => {
			try {
				const data = await getArticleById(id)
				console.log(data)
				setArticle(data)
			} catch (error) {
				navigate("/error", {
					state: {
						typeError: "article"
					},
				});
			}
		}
		fetchArticle()
	}, [id])

	useEffect(() => {
		if (!article) return

		const { img, title, titleEn, content, content_en } = article.acf
		const contentToPreview = language === "uk" ? content : content_en
		const { sentence, keywords } = processHtmlContent(contentToPreview)

		setArticleMeta({
			title: language === "uk" ? title : titleEn,
			descr: sentence,
			keywords: keywords,
			url: window.location.href,
			image: img
		})
	}, [article, language])

	if (article === null) return (
		<>
			<CustomHelmet meta={articleMeta} />
			<Loader />
		</>
	)

	return (
		<>
			<CustomHelmet meta={articleMeta} />
			<main>
				<TopArticle
					img={article.acf.img}
					date={article.acf.articleDate}
					texts={texts.articlePage}
					language={language}
					title={article.acf.title}
					titleEn={article.acf.titleEn}
					category={article.acf.category}
					author={article.acf.author}
					authorEn={article.acf.author_en}
				/>
				<ArticleContent
					content={article.acf.content}
					contentEn={article.acf.content_en}
					language={language}
					texts={texts}
				/>
			</main>
		</>
	)
}
export default ArticlePage