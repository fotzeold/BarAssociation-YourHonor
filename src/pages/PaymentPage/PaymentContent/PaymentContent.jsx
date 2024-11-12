import "./PaymentContent.scss"
import Image from "../../../ui/Image/Image"
import Button from "../../../ui/Button/Button"
import { Link } from "react-router-dom"
import { icons } from "../../../utils/image"
import MultipleLink from "../../../components/MultipleLink/MultipleLink"

const PaymentContent = ({ texts }) => {

	const { title, list, paynow_btn, more_price, payment_service, info } = texts.paymentPage

	return (
		<section className="payment">
			<div className="container">
				<h1>{title}</h1>
				<div className="payment__wrapper">
					{
						list && list.map(el => {
							return (
								<div className="payment__card" key={el.id}>
									<div className="payment__card-number">{el.id}</div>
									<p>{el.text}</p>
									<Image src={el.image} alt={el.text} height={"180px"} width={"auto"} />
								</div>
							)
						})
					}
				</div>
				<a href="">
					<Button text={paynow_btn} />
				</a>
				<Link className="payment__more-price" to={"/pricing"}>{more_price}</Link>
				<MultipleLink texts={texts} />
				<p className="payment-easy" dangerouslySetInnerHTML={{ __html: payment_service }} />
			</div>
		</section>
	)
}

export default PaymentContent