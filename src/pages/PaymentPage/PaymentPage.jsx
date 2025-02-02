import TopPage from "../../components/TopPage/TopPage"
import { useLanguage } from "../../context/LanguageContext"
import PaymentContent from "./PaymentContent/PaymentContent"
import CustomHelmet from "../../components/CustomHelmet/CustomHelmet"

const PaymentPage = () => {
	const { texts } = useLanguage()

	return (
		<>
			<CustomHelmet meta={texts.meta.payment} />
			<main>
				<TopPage
					second_title={texts.paymentPage.second_title}
					backgound={"/image/payment-top.webp"}
					styles={{ maxWidth: "640px" }}
				/>
				<PaymentContent texts={texts} />
			</main>
		</>
	)
}

export default PaymentPage
