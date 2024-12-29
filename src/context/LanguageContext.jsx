import React, { createContext, useState, useEffect, useContext } from 'react';
import enData from "../locales/en.json";
import ukData from "../locales/uk.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(() => {
		const storedLanguage = localStorage.getItem('language');
		return storedLanguage || 'uk';
	});

	const translations = {
		"uk": ukData,
		"en": enData
	};

	useEffect(() => {
		localStorage.setItem('language', language);
	}, [language]);

	const changeToUk = () => setLanguage("uk");
	const changeToEn = () => setLanguage("en");

	return (
		<LanguageContext.Provider value={{ language, changeToUk, changeToEn, texts: translations[language] }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => useContext(LanguageContext);
