import "./HeroBlog.scss"
import ArticleCard from "../../../components/ArticleCard/ArticleCard"
import { useLanguage } from "../../../context/LanguageContext"
import { icons } from "../../../utils/image"
import Image from "../../../ui/Image/Image"

const HeroBlog = ({ article, categories, setCategory }) => {
	const { language, texts } = useLanguage()

	const { title, category_text, search } = texts.blog

	return (
		<section className="hero-blog">
			<div className="container">
				<h1>{title}</h1>
				<div className="hero-blog__wrapper">
					<div className="hero-blog__last">
						<ArticleCard article={article} customClass={"new-article"} />
					</div>
					<div className="hero-blog__nav">
						<form>
							<input type="text" placeholder={search} />
							<button className="search-article"><Image src={icons.searchBtn} width={"44px"} height={"44px"} alt={"search-btn"} /></button>
						</form>

						<h2>{category_text}</h2>
						<ul>
							{
								categories.map((el, i) => {
									return (
										<li key={i + "-category"}>
											<button onClick={() => setCategory(el.uk)}>
												{language === "uk" ? el.uk : el.en}
											</button>
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>
			</div>
		</section >
	)
}

export default HeroBlog