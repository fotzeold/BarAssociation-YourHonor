import "./AboutInfo.scss"
import Image from "../../../ui/Image/Image"

const AboutInfo = ({ texts }) => {
	const { list } = texts.aboutPage

	return (
		<section className="about-info">
			<div className="container">
				<div className="about-info__wrapper">
					{
						list && list.map(el => {
							return (
								<div className="about-info__card" key={el.id}>
									<div className="card__part">
										<h2>{el.title}</h2>
										<p dangerouslySetInnerHTML={{ __html: el.text }} />
									</div>
									<div className="card__part">
										<Image src={el.image} width={"100%"} height={"100%"} alt={el.title} />
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</section>
	)

}

export default AboutInfo