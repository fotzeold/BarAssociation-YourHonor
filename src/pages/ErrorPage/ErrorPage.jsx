import "./ErrorPage.scss"
import { Link } from "react-router-dom"
import { useLanguage } from "../../context/LanguageContext"
import Image from "../../ui/Image/Image"
import { icons } from "../../utils/image"
import { useLocation } from "react-router-dom"

const ErrorPage = ({ message, linkText, linkTo }) => {
	const { texts } = useLanguage()

	const location = useLocation()

	const { messageLoc, linkTextLoc, linkToLoc } = location.state || {};

	return (
		<main className="error-main">
			<section className="error-page">
				<div className="container">
					<Image src={icons.errorPage} alt={"error-page"} width={"100%"} height={"320px"} />
					<h1>{message || messageLoc}</h1>
					<Link to={linkTo || linkToLoc} className="link">← {linkText || linkTextLoc}</Link>
				</div>
			</section>
		</main>
	)
}

export default ErrorPage

