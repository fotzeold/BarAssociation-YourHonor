import Hero from "./Hero/Hero"
import Personal from "./Personal/Personal"
import LawService from "./LawService/LawService"
import Advantages from "../../components/Advantages/Advantages"
import { useLanguage } from "../../context/LanguageContext"
import CustomHelmet from "../../components/CustomHelmet/CustomHelmet"

const HomePage = () => {
	const { texts } = useLanguage()

	return (
		<>
			<CustomHelmet meta={texts.meta.home} />
			<main>
				<Hero texts={texts} />
				<Personal texts={texts} />
				<LawService texts={texts} />
				<Advantages texts={texts} type={"home"} />
			</main>
		</>
	)
}

export default HomePage