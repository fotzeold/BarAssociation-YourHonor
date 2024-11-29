import { useParams } from "react-router-dom"
import { getArticleById } from "../../api/api"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ArticleContent from "./ArticleContent/ArticleContent"
import TopArticle from "./TopArticle/TopArticle"
import Loader from "../../ui/Loader/Loader"
import { useLanguage } from "../../context/LanguageContext"

const ArticlePage = () => {
	const [article, setArticle] = useState(null)
	const navigate = useNavigate()
	const { id } = useParams()
	const { language, texts } = useLanguage()

	useEffect(() => {
		if (!id) return

		const fetchArticle = async () => {
			try {
				const data = await getArticleById(id)
				setArticle(data)
			} catch (error) {
				navigate("/error", {
					state: {
						messageLoc: "Схоже інформація про цей пост відсутня",
						linkTextLoc: "До усіх постів",
						linkToLoc: "/blog",
					},
				});
			}
		}

		fetchArticle()
	}, [id])

	if (article === null) return <Loader />

	if (!article) {
		navigate("/error", {
			state: {
				messageLoc: "Схоже інформація про цей пост відсутня",
				linkTextLoc: "До усіх постів",
				linkToLoc: "/blog",
			},
		});
	}

	return (
		<main>
			<TopArticle
				img={article.acf.img}
				date={article.acf.articleDate}
				texts={texts.articlePage}
				language={language}
				title={article.acf.title}
				titleEn={article.acf.titleEn}
				category={article.acf.category}
			/>
			<ArticleContent />
		</main>
	)
}
export default ArticlePage