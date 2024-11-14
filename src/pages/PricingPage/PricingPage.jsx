import TopPage from "../../components/TopPage/TopPage"
import { useLanguage } from "../../context/LanguageContext"
import Guarantee from "./Guarantee/Guarantee"
import Calculate from "./Calculate/Calculate"
import Algorithm from "./Algorithm/Algorithm"

const PricingPage = () => {

	const { texts } = useLanguage()

	return (
		<main>
			<TopPage
				second_title={texts.pricingPage.second_title}
				third_title={texts.pricingPage.third_title}
				backgound={"/image/price-top.webp"}
			/>
			<Guarantee texts={texts} />
			<Calculate texts={texts} />
			<Algorithm texts={texts} />
		</main>
	)
}

export default PricingPage