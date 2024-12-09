import "./Algorithm.scss"
import Image from "../../../ui/Image/Image"
import { Link } from "react-router-dom"
import MultipleLink from "../../../components/MultipleLink/MultipleLink"

const Algorithm = ({ texts }) => {
	const { howTitle, howList, moreInfo, moreInfoLink, moreInfoLinkNext } = texts.pricingPage

	return (
		<section className="algorithm">
			<div className="container">
				<h2>{howTitle}</h2>
				<div className="algorithm__wrapper">
					{
						howList && howList.map((el, i) => {
							return (
								<div className="algorithm__card" key={"algorithm-" + i}>
									<Image alt={"algorithm photo " + i} src={el.image} width={"100px"} height={"100px"} />
									<p>{el.text}</p>
								</div>
							)
						})
					}
				</div>
				<p className="algorithm__link">
					{moreInfo} {" "}
					<Link to={"/payment"}>{moreInfoLink}</Link> {" "}
					{moreInfoLinkNext}
				</p>
				<MultipleLink texts={texts} />
			</div>
		</section>
	)
}

export default Algorithm