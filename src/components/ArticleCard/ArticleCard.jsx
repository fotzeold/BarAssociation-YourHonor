import "./ArticleCard.scss"
import { Link } from "react-router-dom"
import generateUrl from "../../utils/generateUrl"
import Image from "../../ui/Image/Image"
import { useLanguage } from "../../context/LanguageContext"
import { icons } from "../../utils/image"

const ArticleCard = ({ article, customClass }) => {

	const { texts, language } = useLanguage()

	const { read_more, new_text } = texts.blog

	const { img, title, articleDate, titleEn } = article.acf

	return (
		<div className={`article-card ${customClass ? customClass : ""}`} style={{ background: `linear-gradient(124deg, rgba(2,35,47,0.8) 0%, rgba(7,41,119,0.6) 100%), url(${img}) center center/cover no-repeat` }}>
			<Link className="article-card__link" to={`/blog/${generateUrl(article.acf.titleEn)}/${article.id}`}>
				<div className="article-card__content">
					{articleDate && <figure>{articleDate}</figure>}
					<h3>{language === "uk" ? title : titleEn}</h3>
					<span>{read_more}</span>
				</div>
			</Link>

			{
				customClass && <div className="article-card__figure">
					<Image src={icons.star} alt={"star"} width={"20px"} height={"20px"} />
					<span>{new_text}</span>
				</div>
			}
		</div>
	)

}

export default ArticleCard