import "./ErrorPage.scss"
import { Link } from "react-router-dom"
import { useLanguage } from "../../context/LanguageContext"
import Image from "../../ui/Image/Image"
import { icons } from "../../utils/image"
import { Helmet } from "react-helmet-async"
import { useLocation } from "react-router-dom";

const ErrorPage = () => {
	const { language } = useLanguage()
	const location = useLocation();
	const { typeError } = location.state || {};

	const errors = {
		notFound: {
			message: "Схоже ви загубились. Такої сторінки немає!",
			messageEn: "It seems you're lost. This page doesn't exist!",
			linkText: "На головну",
			linkTextEn: "Go to Homepage",
			link: "/"
		},
		category: {
			message: "В даній категорії постів на даний момент немає!",
			messageEn: "There are no posts in this category at the moment!",
			linkText: "До усіх постів",
			linkTextEn: "View all posts",
			link: "/blog"
		},
		blog: {
			message: "Блог на даний момент пустий!",
			messageEn: "The blog is currently empty!",
			linkText: "На головну",
			linkTextEn: "Go to Homepage",
			link: "/"
		},
		search: {
			message: "Нічого не знайдено за вашим запитом!",
			messageEn: "Nothing found for your query!",
			linkText: "До усіх постів",
			linkTextEn: "View all posts",
			link: "/blog"
		},
		article: {
			message: "Схоже інформація про цей пост відсутня",
			messageEn: "It seems information about this post is missing",
			linkText: "До усіх постів",
			linkTextEn: "View all posts",
			link: "/blog"
		}
	};

	const error = typeError && errors[typeError] ? errors[typeError] : errors.notFound;

	return (
		<>
			<Helmet>
				<meta name="robots" content="noindex, nofollow" />
				<title>{language === "uk" ? "Сторінка з помилкою" : "Error Page"}</title>
			</Helmet>
			<main className="error-main">
				<section className="error-page">
					<div className="container">
						<Image src={icons.errorPage} alt={"error-page"} width={"100%"} height={"320px"} />
						<h1>{language === "uk" ? error.message : error.messageEn}</h1>
						<Link to={error.link} className="link">← {language === "uk" ? error.linkText : error.linkTextEn}</Link>
					</div>
				</section>
			</main>
		</>
	)
}

export default ErrorPage

