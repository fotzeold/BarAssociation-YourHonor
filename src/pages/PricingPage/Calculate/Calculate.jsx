import "./Calculate.scss"
import Image from "../../../ui/Image/Image"

const Calculate = ({ texts }) => {
	const { totalTitle, totalSubtitle, pricingTitle, pricingList, pricingListBottom } = texts.pricingPage

	return (
		<section className="calculate">
			<div className="container">
				<h2>{totalTitle}</h2>
				<p className="calculate-text">{totalSubtitle}</p>
				<h3>{pricingTitle}</h3>
				<div className="calculate__wrapper">
					{
						pricingList && pricingList.map((el, i) => {
							return (
								<div className="calculate__card" key={"crd-" + i}>
									<Image alt={el.text} src={el.image} width={"110px"} height={"110px"} />
									<h4>{el.text}</h4>
								</div>
							)
						})
					}
				</div>
				<div className="calculate__texts">
					{
						pricingListBottom && pricingListBottom.map((el, i) => {
							return (
								<p key={"txt-" + i}>
									{el}
								</p>
							)
						})
					}
				</div>
			</div>
		</section>
	)
}

export default Calculate