import "./ArticleContent.scss"
import MultipleLink from "../../../components/MultipleLink/MultipleLink"

const ArticleContent = ({ content, contentEn, language, texts }) => {

	const contentToRender = language === "uk" ? content : contentEn

	if (!contentToRender) return null

	return (
		<section className="article-content">
			<div className="container">
				<div className="content__wrapper" dangerouslySetInnerHTML={{ __html: contentToRender }} />
			</div>
			<MultipleLink texts={texts} />
		</section>
	)
}

export default ArticleContent