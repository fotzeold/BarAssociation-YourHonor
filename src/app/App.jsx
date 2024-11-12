import { LanguageProvider } from "../context/LanguageContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import HomePage from "../pages/HomePage/HomePage"
import AboutPage from "../pages/AboutPage/AboutPage"
import ServicesPage from "../pages/ServicesPage/ServicesPage"
import PaymentPage from "../pages/PaymentPage/PaymentPage"

const App = () => {

	return (
		<LanguageProvider>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/services" element={<ServicesPage />} />
					<Route path="/payment" element={<PaymentPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</LanguageProvider>
	)
}

export default App

