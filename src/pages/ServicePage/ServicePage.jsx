import ServiceTop from "./ServiceTop/ServiceTop"
import ServiceContent from "./ServiceContent/ServiceContent"
import { useLanguage } from "../../context/LanguageContext"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Loader from "../../ui/Loader/Loader"
import CustomHelmet from "../../components/CustomHelmet/CustomHelmet"

const ServicePage = () => {
	const [service, setService] = useState(null)
	const { texts } = useLanguage()
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			setService(texts.services.page[id])
		}
	}, [id, texts])

	if (service === null) return <Loader />

	return (
		<>
			<CustomHelmet meta={texts.meta[id]} />

			<main>
				<ServiceTop service={service} />
				<ServiceContent service={service} texts={texts} />
			</main>
		</>
	)
}

export default ServicePage