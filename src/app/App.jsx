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
					</Routes>
					<Footer />
				</BrowserRouter>
			</LanguageProvider>
		</HelmetProvider>
	)
}

export default App
