import React, { createContext, useState, useEffect, useContext } from 'react';
import enData from "../locales/en.json"
import ukData from "../locales/uk.json"

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState('uk');
	const translations = {
		"uk": ukData,
		"en": enData
	};

	const changeToUk = () => {
		setLanguage("uk")
	}

	const changeToEn = () => {
		setLanguage("en")
	}

	return (
		<LanguageContext.Provider value={{ language, changeToUk, changeToEn, texts: translations[language] }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => useContext(LanguageContext);