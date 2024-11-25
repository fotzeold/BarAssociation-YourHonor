import "./ArticlesList.scss"
import ArticleCard from "../../../components/ArticleCard/ArticleCard"

const ArticlesList = ({ articles, texts }) => {
	const { articles_title } = texts.blog

	return (
		<section className="articles-list">
			<div className="container">
				<h2>{articles_title}</h2>
				<div className="articles-list__wrapper">
					{
						articles.map((article, index) => <ArticleCard article={article} key={index + "-article-card"} />)
					}
				</div>
			</div>
		</section>
	)
}

export default ArticlesList