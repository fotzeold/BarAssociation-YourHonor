import "./LanguageToggler.scss"
import { useLanguage } from "../../context/LanguageContext"
import Image from "../../ui/Image/Image"
import { icons } from "../../utils/image"

const LanguageToggler = () => {
	const { language, changeToUk, changeToEn } = useLanguage();

	return (
		<div className="language-toggler">
			<button onClick={changeToUk} className={`lang-btn btn ${language === "uk" ? "active" : ""}`}>
				<Image src={icons.ukIcon} alt={"ukr-language"} width={"26px"} height={"26px"} />
				<span>UKR</span>
			</button>
			<button onClick={changeToEn} className={`lang-btn btn ${language === "en" ? "active" : ""}`}>
				<Image src={icons.enIcon} alt={"eng-language"} width={"26px"} height={"26px"} />
				<span>ENG</span>
			</button>
		</div>
	)
}

export default LanguageToggler