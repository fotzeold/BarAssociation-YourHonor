import { useLanguage } from "../../context/LanguageContext"
import TopPage from "../../components/TopPage/TopPage"
import AboutInfo from "./AboutInfo/AboutInfo"
import Advantages from "../../components/Advantages/Advantages"

const AboutPage = () => {
	const { texts } = useLanguage()

	return (
		<main>
			<TopPage
				title={texts.aboutPage.title}
				second_title={texts.aboutPage.second_title}
				third_title={texts.aboutPage.third_title}
				backgound={"/image/about-top.webp"}
			/>
			<AboutInfo texts={texts} />
			<Advantages texts={texts} type={"about"} />
		</main>
	)
}

export default AboutPage