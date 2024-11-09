import { LanguageProvider } from "../context/LanguageContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import HomePage from "../pages/HomePage/HomePage"

const App = () => {

	return (
		<LanguageProvider>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</LanguageProvider>
	)
}

export default App

