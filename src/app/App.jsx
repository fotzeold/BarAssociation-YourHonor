import { LanguageProvider } from "../context/LanguageContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import HomePage from "../pages/HomePage/HomePage"
import AboutPage from "../pages/AboutPage/AboutPage"
import ServicesPage from "../pages/ServicesPage/ServicesPage"
import PaymentPage from "../pages/PaymentPage/PaymentPage"
import PricingPage from "../pages/PricingPage/PricingPage"
import ServicePage from "../pages/ServicePage/ServicePage"
import ScrollToTop from "../components/ScrollToTop/ScrollToTop"
import BlogPage from "../pages/BlogPage/BlogPage"
import ArticlePage from "../pages/ArticlePage/ArticlePage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import LegalAgreement from "../pages/LegalAgreement/LegalAgreement"
import { HelmetProvider } from "react-helmet-async"

const App = () => {

	return (
		<HelmetProvider>
			<LanguageProvider>
				<BrowserRouter>
					<ScrollToTop />
					<Header />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/services" element={<ServicesPage />} />
						<Route path="/services/:id" element={<ServicePage />} />
						<Route path="/payment" element={<PaymentPage />} />
						<Route path="/pricing" element={<PricingPage />} />
						<Route path="/blog" element={<BlogPage />} />
						<Route path="/blog/:slug/:id" element={<ArticlePage />} />
						<Route path="/terms-of-use" element={<LegalAgreement fileNameUk={"tou_uk.html"} fileNameEn={"tou_en.html"} />} />
						<Route path="/privacy-policy" element={<LegalAgreement fileNameUk={"pp_uk.html"} fileNameEn={"pp_en.html"} />} />
						<Route path="/legal-aid-agreement" element={<LegalAgreement fileNameUk={"lsa_uk.html"} fileNameEn={"lsa_en.html"} />} />
						<Route path="/error" element={<ErrorPage />} />
						<Route path="*" element={<ErrorPage />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</LanguageProvider>
		</HelmetProvider>
	)
}

export default App
