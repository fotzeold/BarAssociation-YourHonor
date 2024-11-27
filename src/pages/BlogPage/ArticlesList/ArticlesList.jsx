import "./ArticlesList.scss"
import ArticleCard from "../../../components/ArticleCard/ArticleCard"

const ArticlesList = ({ articles, texts, searchQuery }) => {
	const { articles_title } = texts.blog

	return (
		<section className="articles-list">
			<div className="container">
				<div className="articles-list__title">
					<div className="title__figure">
						<figure></figure>
					</div>
					<h2 id="article-title">
						{
							searchQuery ? "Пости по запиту: " + searchQuery : articles_title
						}
					</h2>
				</div>
				<div className="articles-list__wrapper">
					{
						articles && articles.length > 0 ?
							articles.map((article, index) => <ArticleCard article={article} key={index + "-article-card"} />) :
							<p className="article-message">По такому запиту постів на даний момент немає</p>
					}
				</div>
			</div>
		</section>
	)
}

export default ArticlesList