import "./ArticlesList.scss"
import ArticleCard from "../../../components/ArticleCard/ArticleCard"

const ArticlesList = ({ articles, texts, searchQuery }) => {
	const { articles_title, search_result, search_error } = texts.blog

	return (
		<section className="articles-list">
			<div className="container">
				<div className="articles-list__title">
					<div className="title__figure">
						<figure></figure>
					</div>
					<h2 id="article-title">
						{
							searchQuery ? search_result + " " + searchQuery : articles_title
						}
					</h2>
				</div>
				<div className="articles-list__wrapper">
					{
						articles && articles.length > 0 ?
							articles.map((article, index) => <ArticleCard article={article} key={index + "-article-card"} />) :
							<p className="article-message">{search_error}</p>
					}
				</div>
			</div>
		</section>
	)
}

export default ArticlesList