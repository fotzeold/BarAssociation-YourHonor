import { useLanguage } from "../../context/LanguageContext"
import ServicesList from "./ServicesList/ServicesList"
import TopPage from "../../components/TopPage/TopPage"
import CustomHelmet from "../../components/CustomHelmet/CustomHelmet"


const ServicesPage = () => {
	const { texts } = useLanguage()

	return (
		<>
			<CustomHelmet meta={texts.meta.services} />
			<main>
				<TopPage
					title={texts.services.title}
					second_title={texts.services.second_title}
					third_title={texts.services.third_title}
					backgound={"/image/service-top.webp"}
				/>
				<ServicesList texts={texts} />
			</main>
		</>
	)
}

export default ServicesPage