import Hero from "./Hero/Hero"
import Personal from "./Personal/Personal"
import LawService from "./LawService/LawService"
import Advantages from "../../components/Advantages/Advantages"
import { useLanguage } from "../../context/LanguageContext"

const HomePage = () => {
	const { texts } = useLanguage()

	return (
		<main>
			<Hero texts={texts} />
			<Personal texts={texts} />
			<LawService texts={texts} />
			<Advantages texts={texts} type={"home"} />
		</main>
	)
}

export default HomePage