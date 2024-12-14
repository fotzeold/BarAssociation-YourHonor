import "./TopArticle.scss"
import { icons } from "../../../utils/image"
import Image from "../../../ui/Image/Image"
import categories from "../../../utils/categories"

const TopArticle = ({ img, date, texts, title, titleEn, language, category, author, authorEn }) => {

	const { dateText, shareText } = texts
	const currentUrl = window.location.href
	const titleToPreview = language === "uk" ? title : titleEn
	const categoryLabel = categories.find(item => item.uk === category)?.[language] || category;
	const authorToPreview = language === "uk" ? "Автор: " + author : "Author: " + authorEn

	return (
		<section className="top-article" style={{
			background: `linear-gradient(124deg, rgba(2,35,47,0.8) 0%, rgba(7,41,119,0.6) 100%), url("${img}") center center/cover no-repeat`
		}}>
			<div className="container">
				<div className="top-article__wrapper">
					<h1>{titleToPreview}</h1>
					<figure></figure>
					<div className="top-article__row">
						{date && <div className="top-article__date">{dateText + " " + date}</div>}
						{authorToPreview && <p className="top-article__category">{authorToPreview}</p>}
						<p className="top-article__category">{categoryLabel}</p>
						<div className="top-article__share">
							<span>{shareText}</span>
							<a href={`https://t.me/share/url?text=${encodeURIComponent(titleToPreview)}&url=${encodeURIComponent(currentUrl)}`} target="_blank">
								<Image src={icons.telegram} alt={"telegram"} width={"30px"} height={"30px"} />
							</a>

							<a href={`https://wa.me/?text=${encodeURIComponent(titleToPreview + " " + currentUrl)}`} target="_blank">
								<Image src={icons.whatsapp} alt={"whatsapp"} width={"30px"} height={"30px"} />
							</a>

							<a href={`https://viber.me/create?text=${encodeURIComponent(titleToPreview + " " + currentUrl)}`} target="_blank">
								<Image src={icons.viber} alt={"viber"} width={"30px"} height={"30px"} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TopArticle