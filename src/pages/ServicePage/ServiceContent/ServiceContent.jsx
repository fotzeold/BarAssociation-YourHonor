import "./ServiceContent.scss"
import MultipleLink from "../../../components/MultipleLink/MultipleLink"
import { Link } from "react-router-dom"

const ServiceContent = ({ service, texts }) => {

	return (
		<section className="service-content">
			<div className="container">
				<div className="service-content__wrapper" dangerouslySetInnerHTML={{ __html: service.content }} />
				<h2 className="link">
					{service.more} {" "}
					<Link to={"/pricing"}>{service.morePrice}</Link> {" "}
					<Link to={"/payment"}>{service.morePayment}</Link>
				</h2>
				<MultipleLink texts={texts} />
			</div>
		</section>
	)
}

export default ServiceContent