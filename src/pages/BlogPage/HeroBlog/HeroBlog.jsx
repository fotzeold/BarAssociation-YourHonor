import "./HeroBlog.scss"
import ArticleCard from "../../../components/ArticleCard/ArticleCard"

const HeroBlog = ({ article, texts }) => {

	const { title, new_text, category_text, search } = texts.blog

	return (
		<section className="hero-blog">
			<div className="container">
				<h1>{title}</h1>
				<div className="hero-blog__wrapper">
					<div className="hero-blog__last">
						<ArticleCard article={article} />
					</div>
					<div className="hero-blog__nav">

					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroBlog