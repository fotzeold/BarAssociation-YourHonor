import "./LegalAgreement.scss";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../../context/LanguageContext";
import getHtml from "../../utils/getHtml";
import { useState, useEffect } from "react";
import Loader from "../../ui/Loader/Loader";
import { useLocation } from "react-router-dom";

const LegalAgreement = ({ fileNameUk, fileNameEn }) => {
	const { language } = useLanguage();
	const [content, setContent] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const location = useLocation()

	useEffect(() => {
		const loadHtml = async () => {
			setLoading(true);
			setError(null);
			try {
				const html = await getHtml(language === "uk" ? fileNameUk : fileNameEn);
				setContent(html);
			} catch (err) {
				setError("Failed to load the legal agreement content.");
			} finally {
				setLoading(false);
			}
		};

		loadHtml();
	}, [language, location]);

	return (
		<>
			<Helmet>
				<meta name="robots" content="noindex, nofollow" />
				<title>
					{language === "uk" ? "Адвокатське об’єднання Ваша честь" : "Advocates’ Association Your Honor"}
				</title>
			</Helmet>
			<main>
				<section className="LegalAgreement">
					<div className="container">
						{loading && <Loader />}
						{error && <p>{error}</p>}
						{!loading && !error && content && (
							<div
								className="LegalAgreement__wrapper"
								dangerouslySetInnerHTML={{ __html: content }}
							/>
						)}
					</div>
				</section>
			</main>
		</>
	);
};

export default LegalAgreement;
