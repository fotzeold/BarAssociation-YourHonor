import "./Guarantee.scss"
import Image from "../../../ui/Image/Image"

const Guarantee = ({ texts }) => {

	const { title, subtitle, garantTitle, garantList } = texts.pricingPage
	console.log(garantList)
	return (
		<section className="guarantee" >
			<div className="container">
				<h1>{title}</h1>
				<p className="subtitle">{subtitle}</p>
				<h2>{garantTitle}</h2>
				<div className="guarantee__wrapper">
					{
						garantList && garantList.map((el, i) => {
							return (
								<div className="guarantee__card" key={"guarantee-" + i}>
									<Image src={el.image} alt={"photo-" + i} width={"100%"} height={"260px"} />
									<div className="guarantee__card-text">
										<p>{el.text}</p>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</ section>
	)
}

export default Guarantee