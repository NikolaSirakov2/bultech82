import React, { createContext, useState, useContext, useEffect } from 'react';

interface LanguageContextValue {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children, initialLanguage }: { children: React.ReactNode, initialLanguage: string }) => {
  const [language, setLanguage] = useState(() => {
    // Try to get the language from localStorage, or fall back to the initial language
    return localStorage.getItem('language') || initialLanguage;
  });

  // Update localStorage whenever the language changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};