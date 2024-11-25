import "./ArticleCard.scss"
import { Link } from "react-router-dom"
import generateUrl from "../../utils/generateUrl"

const ArticleCard = ({ article }) => {

	return (
		<div className="article-card">
			<Link to={`/blog/${generateUrl(article.acf.titleEn)}/${article.id}`} className="article-card__link">
				{article.acf.title}
			</Link>
		</div>
	)

}

export default ArticleCard